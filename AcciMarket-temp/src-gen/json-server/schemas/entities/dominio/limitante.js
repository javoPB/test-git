const joi = require("joi");

module.exports = joi.object().keys({
	grupoinstrumento: joi
		.string()
		.trim()
		.max(64)
		.required(),
	tipovalor: joi
		.string()
		.trim()
		.max(64)
		.required(),
	emisoras: joi
		.string()
		.trim()
		.max(64)
		.required(),
	tipovaloremisora: joi
		.string()
		.trim()
		.max(64)
		.required(),
});
