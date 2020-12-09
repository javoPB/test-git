const joi = require("joi");

module.exports = joi.object().keys({
	nombre: joi
		.string()
		.trim()
		.max(64)
		.required(),
	appaterno: joi
		.string()
		.trim()
		.max(64)
		.required(),
	apmaterno: joi
		.string()
		.trim()
		.max(64)
		.required(),
	porcentaje: joi
		.number()
		.integer()
		.required(),
});
