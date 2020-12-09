const joi = require("joi");

module.exports = joi.object().keys({
	sucursal: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	operacion: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	tipo: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	medliq: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	contrato: joi
		.string()
		.trim()
		.max(64)
		.required(),
	subtipoportafolio: joi
		.string()
		.trim()
		.max(64)
		.required(),
	digito: joi
		.string()
		.trim()
		.max(64)
		.required(),
	titular: joi
		.string()
		.trim()
		.max(64)
		.required(),
	saldo: joi
		.number()
		.required(),
	contratoegreso: joi
		.string()
		.trim()
		.max(64)
		.required(),
	digitoegreso: joi
		.string()
		.trim()
		.max(64)
		.required(),
	saldoinicialegreso: joi
		.number()
		.required(),
	saldocalculadoegreso: joi
		.number()
		.required(),
	contratoingreso: joi
		.string()
		.trim()
		.max(64)
		.required(),
	digitoingreso: joi
		.string()
		.trim()
		.max(64)
		.required(),
	saldoinicialingreso: joi
		.number()
		.required(),
	saldocalculadoingreso: joi
		.number()
		.required(),
	importeingreso: joi
		.number()
		.required(),
});
