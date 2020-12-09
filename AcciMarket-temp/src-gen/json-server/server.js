const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const lodashId = require("lodash-id");
const url = require("url");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const server = jsonServer.create();
const router_dominio = jsonServer.router("./database/dominio/entities.json");
const bizdb_dominio  = JSON.parse(fs.readFileSync("./database/dominio/entities.json", "UTF-8"));
const router_pantallas = jsonServer.router("./database/pantallas/entities.json");
const bizdb_pantallas  = JSON.parse(fs.readFileSync("./database/pantallas/entities.json", "UTF-8"));
const router_auth = jsonServer.router("./database/auth.json");
const authdb = JSON.parse(fs.readFileSync("./database/auth.json", "UTF-8"));

const adapter = new FileSync("./database/auth.json");
const db = low(adapter);

const user_schema = require("./schemas/auth/users");
const role_schema = require("./schemas/auth/roles");
const permission_schema = require("./schemas/auth/permissions");
const permission_assignment_schema = require("./schemas/auth/permission_assignment");

const contrato_schema = require("./schemas/entities/dominio/contrato");
const titularcontrato_schema = require("./schemas/entities/dominio/titularcontrato");
const beneficiario_schema = require("./schemas/entities/dominio/beneficiario");
const limitante_schema = require("./schemas/entities/dominio/limitante");
const emisor_schema = require("./schemas/entities/dominio/emisor");
const firmaautorizada_schema = require("./schemas/entities/dominio/firmaautorizada");
const instruccionefectivo_schema = require("./schemas/entities/dominio/instruccionefectivo");
const distribucioninstrucciones_schema = require("./schemas/entities/dominio/distribucioninstrucciones");
const reperfilamientopersonafisica_schema = require("./schemas/entities/dominio/reperfilamientopersonafisica");
const negativaperfilamiento_schema = require("./schemas/entities/dominio/negativaperfilamiento");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "123456789";

const expiresIn = "1h";

_.mixin(lodashId);

// Create a token from a payload
function createToken(payload) {
	return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
	return jwt.verify(
		token,
		SECRET_KEY,
		(err, decode) => (decode !== undefined ? decode : err)
	);
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
	return (
		authdb.users.findIndex(
			user => user.email === email && user.password === password
		) !== -1
	);
}

function findUserProfile(email) {
	var permissions = [];
	const user = _.find(authdb.users, u => u.email === email);
	const role = _.find(authdb.roles, r => r.id === user.roleId);
	const permission_assignment = _.filter(
		authdb.permission_assignment,
		a => a.roleId === user.roleId
	);
	permission_assignment.forEach(pa => {
		permissions.push(_.find(authdb.permissions, p => p.id === pa.permissionId));
	});
	const user_profile = {
		user: {
			username: user.username,
			display_name: user.display_name,
			email: user.email,
			user_enabled: user.enabled,
			role: role.name,
			role_enabled: role.enabled
		},
		permissions
	};

	return user_profile;
}

function isPermissionFound(token, permission) {
	const permission_found = _.find(
		token.permissions,
		p => p.code === permission
	);
	return typeof permission_found == "undefined" ? false : true;
}

function hasAuthority(resource, operation, user_profile) {
	const permission = resource + ":" + operation;
	const all_operations = resource + ":*";
	const superuser = "*:*";
	
	//console.log(permission);
	
	if (!isPermissionFound(user_profile, permission)) {
		if (!isPermissionFound(user_profile, all_operations)) {
			if (!isPermissionFound(user_profile, superuser)) {
				return false;
			}
		}
	}
	return true;
}

server.post("/api/v1/auth/login", (req, res) => {
	const { email, password } = req.body;
	if (isAuthenticated({ email, password }) === false) {
		res
			.status(401)
			.json({ status: 401, message: "Error: Incorrect email or password" });
		return;
	}
	const user_profile = findUserProfile(email);
	const access_token = createToken(user_profile.user);
	res.status(200).json({ access_token });
});

server.get("/api/v1/auth/profile", (req, res) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    res.status(400).json({
      status: 400,
      message: "Error: Access token is missing or invalid"
    });
    return;
  }

  try {
    const decoded_token = verifyToken(req.headers.authorization.split(" ")[1]);

    const user_profile = findUserProfile(decoded_token.email);
    res
      .status(200)
      .json({ user: user_profile.user, permissions: user_profile.permissions });
  } catch (err) {
    res
      .status(401)
      .json({ status: 401, message: "Error: Access token is revoked", error: err });
  }
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(" ")[0] !== "Bearer"
  ) {
    res.status(400).json({
      status: 400,
      message: "Error: Access token is missing or invalid"
    });
    return;
  }
  try {
    let resources = [];
    const decoded_token = verifyToken(req.headers.authorization.split(" ")[1]);
    const url_path = req._parsedUrl.path;
    const adr = `http://${req.headers.host}${url_path}`;

    let q = url.parse(adr, true);

    const auth_entities = Object.keys(authdb);
    let entities = auth_entities;

    		const biz_entities_dominio = Object.keys(bizdb_dominio);
    		entities = _.union(entities, biz_entities_dominio);
    		const biz_entities_pantallas = Object.keys(bizdb_pantallas);
    		entities = _.union(entities, biz_entities_pantallas);

    const pathname_tokens = q.pathname.split("/");
    resources = _.intersection(entities, pathname_tokens);

    if (q.query._embed !== undefined) {
      resources.push(q.query._embed.toUpperCase());
    }

    if (q.query._expand !== undefined) {
      resources.push(q.query._expand.toUpperCase());
    }

    const user_profile = findUserProfile(decoded_token.email);

    let operation;
    switch (req.method) {
      case "GET":
        operation = "READ";
        break;
      case "POST":
        operation = "CREATE";
        break;
      case "PUT":
        operation = "UPDATE";
        break;
      case "PATCH":
        operation = "UPDATE";
        break;
      case "DELETE":
        operation = "DELETE";
        break;
      default:
        operation = "UNKNOWN";
    }

    resources.forEach(r => {
      if (!hasAuthority(r.toUpperCase(), operation, user_profile)) {
        res.status(404).json({
          status: 404,
          message: `You don't have permission (${r.toUpperCase()}:${operation})`
        });
        return;
      }
    });

    let error_messages = [];

    let validation_result = { error: null, value: null };
    if (req.method === "POST" || req.method === "PUT") {
      switch (resources[0]) {
        case "users":
          validation_result = user_schema.validate(req.body);
          if (validation_result.error === null) {
            const role = _.find(authdb.roles, r => r.id === req.body.roleId);
            if (role === undefined) {
              error_messages.push(
                `Role id "${req.body.roleId}" doesn't exist.`
              );
              res.status(400).json({
                status: 400,
                message: error_messages
              });
              return;
            }
          }
          break;

        case "roles":
          validation_result = role_schema.validate(req.body);
          break;

        case "permissions":
          validation_result = permission_schema.validate(req.body);
          break;

        case "permission_assignment":
          validation_result = permission_assignment_schema.validate(req.body);
          if (validation_result.error === null) {
            const role = _.find(authdb.roles, r => r.id === req.body.roleId);
            if (role === undefined) {
              error_messages.push(
                `Role id "${req.body.roleId}" doesn't exist.`
              );
              res.status(400).json({
                status: 400,
                message: error_messages
              });
              return;
            }
            const permission = _.find(
              authdb.permissions,
              p => p.id === req.body.permissionId
            );
            if (permission === undefined) {
              error_messages.push(
                `Permission id "${req.body.permissionId}" doesn't exist.`
              );
              res.status(400).json({
                status: 400,
                message: error_messages
              });
              return;
            }
          }
          break;
          
case "contrato":
	validation_result = contrato_schema.validate(req.body);
	break;
case "titularcontrato":
	validation_result = titularcontrato_schema.validate(req.body);
	break;
case "beneficiario":
	validation_result = beneficiario_schema.validate(req.body);
	break;
case "limitante":
	validation_result = limitante_schema.validate(req.body);
	break;
case "emisor":
	validation_result = emisor_schema.validate(req.body);
	break;
case "firmaautorizada":
	validation_result = firmaautorizada_schema.validate(req.body);
	break;
case "instruccionefectivo":
	validation_result = instruccionefectivo_schema.validate(req.body);
	break;
case "distribucioninstrucciones":
	validation_result = distribucioninstrucciones_schema.validate(req.body);
	break;
case "reperfilamientopersonafisica":
	validation_result = reperfilamientopersonafisica_schema.validate(req.body);
	const reperfilamientopersonafisica_contrato = _.find(
	  bizdb_dominio.contrato,
	  e => e.id === req.body.contratoId
	);
	if (reperfilamientopersonafisica_contrato === undefined) {
	  error_messages.push(
	    `Contrato id "${req.body.contratoId}" doesn't exist.`
	  );
	  res.status(400).json({
	    status: 400,
	    message: error_messages
	  });
	  return;
	}
	break;
case "negativaperfilamiento":
	validation_result = negativaperfilamiento_schema.validate(req.body);
	const negativaperfilamiento_contrato = _.find(
	  bizdb_dominio.contrato,
	  e => e.id === req.body.contratoId
	);
	if (negativaperfilamiento_contrato === undefined) {
	  error_messages.push(
	    `Contrato id "${req.body.contratoId}" doesn't exist.`
	  );
	  res.status(400).json({
	    status: 400,
	    message: error_messages
	  });
	  return;
	}
	break;
      }
    }

    if (validation_result.error !== null) {
      validation_result.error.details.forEach(err => {
        error_messages.push(err.message);
      });
      console.log(error_messages);

      res.status(400).json({
        status: 400,
        message: error_messages
      });
      return;
    }

    next();
  } catch (err) {
    res
      .status(401)
      .json({ status: 401, message: "Error: Access token is revoked", error: err });
  }
});
		
server.get("/api/v1/auth/roles/:roleId/permissions", (req, res) => {
  let permissions = [];
  const permission_assignment = _.filter(
    authdb.permission_assignment,
    a => a.roleId.toString() === req.params.roleId.toString()
  );
  permission_assignment.forEach(pa => {
    permissions.push(_.find(authdb.permissions, p => p.id === pa.permissionId));
  });
  res.status(200).json({ permissions });
});

function updateRoleAssignemt(i, r) {
  r.forEach(role => {
    role.assigned = i;
  });
  return r;
}

function updateRoles(pID) {
  let roles = [];
  authdb.roles.forEach(r => {
    let assign = false;
    let roleId = r.id;
    let k = 0;
    while (k < authdb.permission_assignment.length) {
      if (
        authdb.permission_assignment[k].roleId === roleId &&
        authdb.permission_assignment[k].permissionId === pID
      ) {
        k = authdb.permission_assignment.length;
        assign = true;
      }
      k++;
    }
    roles.push({
      id: r.id,
      name: r.name,
      description: r.description,
      assigned: assign
    });
  });
  return roles;
}

server.get("/api/v1/auth/permissionsvsroles", (req, res) => {
  let permissionsvsroles = [];

  authdb.permissions.forEach(p => {
    const split_permission = p.code.split(":");
    let permission = {
      permission: {
        id: p.id,
        resource: split_permission[0],
        action: split_permission[1],
        scope: split_permission[2] === undefined ? "*" : split_permission[2],
        description: p.description
      },
      roles: updateRoles(p.id)
    };
    permissionsvsroles.push(permission);
  });

  res.status(200).json(permissionsvsroles);
});

server.post("/api/v1/auth/assign_role_permission", (req, res) => {
  let error_messages = [];
  let validation_result = { error: null, value: null };

  validation_result = permission_assignment_schema.validate(req.body);
  if (validation_result.error === null) {
    const role = _.find(authdb.roles, r => r.id === req.body.roleId);
    if (role === undefined) {
      error_messages.push(`Role id "${req.body.roleId}" doesn't exist.`);
      res.status(400).json({
        status: 400,
        message: error_messages
      });
      return;
    }
    const permission = _.find(
      authdb.permissions,
      p => p.id === req.body.permissionId
    );
    if (permission === undefined) {
      error_messages.push(
        `Permission id "${req.body.permissionId}" doesn't exist.`
      );
      res.status(400).json({
        status: 400,
        message: error_messages
      });
      return;
    }
  }

  const permission_assignment = _.find(
    authdb.permission_assignment,
    a =>
      a.roleId.toString() === req.body.roleId.toString() &&
      a.permissionId.toString() === req.body.permissionId.toString()
  );

  if (permission_assignment === undefined) {
    db.get("permission_assignment")
      .push({ roleId: req.body.roleId, permissionId: req.body.permissionId })
      .write();
  }

  res.status(200).json();
});

server.post("/api/v1/auth/remove_role_permission", (req, res) => {
  let error_messages = [];
  let validation_result = { error: null, value: null };

  validation_result = permission_assignment_schema.validate(req.body);
  if (validation_result.error === null) {
    const role = _.find(authdb.roles, r => r.id === req.body.roleId);
    if (role === undefined) {
      error_messages.push(`Role id "${req.body.roleId}" doesn't exist.`);
      res.status(400).json({
        status: 400,
        message: error_messages
      });
      return;
    }
    const permission = _.find(
      authdb.permissions,
      p => p.id === req.body.permissionId
    );
    if (permission === undefined) {
      error_messages.push(
        `Permission id "${req.body.permissionId}" doesn't exist.`
      );
      res.status(400).json({
        status: 400,
        message: error_messages
      });
      return;
    }
  }

  const permission_assignment = _.find(
    authdb.permission_assignment,
    a =>
      a.roleId.toString() === req.body.roleId.toString() &&
      a.permissionId.toString() === req.body.permissionId.toString()
  );

  if (permission_assignment !== undefined) {
    db.get("permission_assignment")
      .remove({ roleId: req.body.roleId, permissionId: req.body.permissionId })
      .write();

    res.status(200).json();
  } else {
    res.status(404).json({
      status: 404,
      message: `Role "${req.body.roleId}" doesn't have assigned Permission "${
        req.body.permissionId
      }".`
    });
  }
});

server.use("/api/v1/auth", router_auth);
server.use("/api/v1/dominio", router_dominio);
server.use("/api/v1/pantallas", router_pantallas);

server.listen(3000, () => {
  console.log("Run Auth API Server (port: 3000)");
});
