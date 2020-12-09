const joi = require("joi");

module.exports = joi.object().keys({
	opcdistrinstrucciones: joi
		.string()
		.valid(
			"INTRADIA",
			"PROGRAMADOS",
			"HISTORICOS"
		)
		.required(),
	capturados: joi
		.boolean()
		.required(),
	contrato: joi
		.string()
		.trim()
		.max(64)
		.required(),
	foliomov: joi
		.string()
		.trim()
		.max(64)
		.required(),
	digito: joi
		.string()
		.trim()
		.max(64)
		.required(),
	importeneto: joi
		.string()
		.trim()
		.max(64)
		.required(),
	depositos: joi
		.boolean()
		.required(),
	retiros: joi
		.boolean()
		.required(),
	sucursal: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
});
