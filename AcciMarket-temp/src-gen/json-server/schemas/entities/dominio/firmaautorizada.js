const joi = require("joi");

module.exports = joi.object().keys({
	tipo: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
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
	noescr: joi
		.string()
		.trim()
		.max(64)
		.required(),
	nonot: joi
		.string()
		.trim()
		.max(64)
		.required(),
});
