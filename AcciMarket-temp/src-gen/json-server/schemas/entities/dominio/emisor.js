const joi = require("joi");

module.exports = joi.object().keys({
	emisor: joi
		.string()
		.trim()
		.max(64)
		.required(),
	relacion: joi
		.string()
		.valid(
			"VICEPRESIDENTE",
			"PRESIDENTE"
		)
		.required(),
});
