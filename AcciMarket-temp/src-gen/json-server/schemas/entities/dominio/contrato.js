const joi = require("joi");

module.exports = joi.object().keys({
	nocontrato: joi
		.string()
		.trim()
		.max(64)
		.required(),
	digito: joi
		.string()
		.trim()
		.max(64)
		.required(),
	dv: joi
		.string()
		.trim()
		.max(64)
		.required(),
	estatus: joi
		.string()
		.trim()
		.max(64)
		.required(),
	perfil: joi
		.string()
		.trim()
		.max(64)
		.required(),
	portafolio: joi
		.string()
		.trim()
		.max(64)
		.required(),
	clabe: joi
		.string()
		.trim()
		.max(64)
		.required(),
	stipoport: joi
		.string()
		.trim()
		.max(64)
		.required(),
	libro: joi
		.string()
		.trim()
		.max(64)
		.required(),
	asesorinversion: joi
		.string()
		.trim()
		.max(64)
		.required(),
	tipomanifiesto: joi
		.string()
		.trim()
		.max(64)
		.required(),
	servicioinversion: joi
		.string()
		.trim()
		.max(64)
		.required(),
	cartaejecucion1: joi
		.string()
		.trim()
		.max(64)
		.required(),
	fechacartaejecucion1: joi
		.string()
		.trim()
		.max(64)
		.required(),
	cartaejecucion2: joi
		.string()
		.trim()
		.max(64)
		.required(),
	fechacartaejecucion2: joi
		.string()
		.trim()
		.max(64)
		.required(),
	institucional: joi
		.string()
		.valid(
			"INSTITUCIONAL",
			"INSTITUCIONALPRACT"
		)
		.required(),
	justificacioninstitucional: joi
		.string()
		.trim()
		.max(64)
		.required(),
	fechainstitucional: joi
		.string()
		.trim()
		.max(64)
		.required(),
	sofisticado: joi
		.string()
		.valid(
			"SOFISTICADO",
			"NOSOFISTICADO"
		)
		.required(),
	justificacionsofisticado: joi
		.string()
		.trim()
		.max(64)
		.required(),
	fechasofisticado: joi
		.string()
		.trim()
		.max(64)
		.required(),
	elegible: joi
		.string()
		.valid(
			"ELEGIBLE",
			"NOELEGIBLE"
		)
		.required(),
	justificacionelegible: joi
		.string()
		.trim()
		.max(64)
		.required(),
	fechaelegible: joi
		.string()
		.trim()
		.max(64)
		.required(),
	calificado: joi
		.string()
		.valid(
			"CALIFICADO",
			"NOCALIFICADO"
		)
		.required(),
	justificacioncalificado: joi
		.string()
		.trim()
		.max(64)
		.required(),
	fechacalificado: joi
		.string()
		.trim()
		.max(64)
		.required(),
	discrecional: joi
		.string()
		.valid(
			"DISCRECIONAL",
			"NODISCRECIONAL"
		)
		.required(),
	justificaciondiscrecional: joi
		.string()
		.trim()
		.max(64)
		.required(),
	fechadiscrecional: joi
		.string()
		.trim()
		.max(64)
		.required(),
	instrdeudagub: joi
		.string()
		.valid(
			"NOCONOCE",
			"SOLOCONOCE",
			"CONOCEINTERVENIDO"
		)
		.required(),
	instrdeudacorp: joi
		.string()
		.valid(
			"NOCONOCE",
			"SOLOCONOCE",
			"CONOCEINTERVENIDO"
		)
		.required(),
	sociedadesinver: joi
		.string()
		.valid(
			"NOCONOCE",
			"SOLOCONOCE",
			"CONOCEINTERVENIDO"
		)
		.required(),
	valoresestruc: joi
		.string()
		.valid(
			"NOCONOCE",
			"SOLOCONOCE",
			"CONOCEINTERVENIDO"
		)
		.required(),
	certburfideicomisos: joi
		.string()
		.valid(
			"NOCONOCE",
			"SOLOCONOCE",
			"CONOCEINTERVENIDO"
		)
		.required(),
	titulosopcionales: joi
		.string()
		.valid(
			"NOCONOCE",
			"SOLOCONOCE",
			"CONOCEINTERVENIDO"
		)
		.required(),
	acciones: joi
		.string()
		.valid(
			"NOCONOCE",
			"SOLOCONOCE",
			"CONOCEINTERVENIDO"
		)
		.required(),
	valoresextr: joi
		.string()
		.valid(
			"NOCONOCE",
			"SOLOCONOCE",
			"CONOCEINTERVENIDO"
		)
		.required(),
	trackers: joi
		.string()
		.valid(
			"NOCONOCE",
			"SOLOCONOCE",
			"CONOCEINTERVENIDO"
		)
		.required(),
});
