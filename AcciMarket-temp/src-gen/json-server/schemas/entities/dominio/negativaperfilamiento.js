const joi = require("joi");

module.exports = joi.object().keys({
	contratoId: joi
		.string()
		.trim()
		.token()
		.required(),
	nombre: joi
		.string()
		.trim()
		.max(64)
		.required(),
	perfilactual: joi
		.string()
		.trim()
		.max(64)
		.required(),
	personaperfilar: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	porcentajeliquidez: joi
		.string()
		.trim()
		.max(64)
		.required(),
	montoliquidez: joi
		.date()
		.timestamp()
		.required(),
	porcentajecortoplazo: joi
		.string()
		.trim()
		.max(64)
		.required(),
	montocortoplazo: joi
		.number()
		.required(),
	porcentajelargoplazo: joi
		.string()
		.trim()
		.max(64)
		.required(),
	montolargoplazo: joi
		.number()
		.required(),
	porcentajepatrimonioliquidototal: joi
		.string()
		.trim()
		.max(64)
		.required(),
	montopatrimonioliquidototal: joi
		.number()
		.required(),
	intervaloedad: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	nivelestudios: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	ocupacion: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	actividadprofesionalanterior: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	actividadprofesionalactual: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	actividadrelacionadainversiones: joi
		.string()
		.valid(
			"NO",
			"SI"
		)
		.required(),
	estrategiacliente: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	clienteasesoria: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	experienciadeudagub: joi
		.string()
		.valid(
			"NOCONOCE",
			"SOLOCONOCE",
			"CONOCEINTERVENIDO"
		)
		.required(),
	frecuenciadeudagub: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	plazodeudagub: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	volumendeudagub: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	expdeudacorp: joi
		.string()
		.valid(
			"NOCONOCE",
			"SOLOCONOCE",
			"CONOCEINTERVENIDO"
		)
		.required(),
	frecuenciadeudacorp: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	plazodeudacorp: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	volumendeudacorp: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	expsociedadesinv: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	frecuenciasociedadesinv: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	plazosociedadesinv: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	volumensociedadesinv: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	expvaloresest: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	frecuenciavaloresest: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	plazovaloresest: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	volumenvaloresest: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	expcertificadosbur: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	frecuenciacertificadosbur: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	plazocertificadosbur: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	volumencertificadosbur: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	exptitulosopc: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	frecuenciatitulosopc: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	plazotitulosopc: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	volumentitulosopc: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	expacciones: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	frecuenciaacciones: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	plazoacciones: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	volumenacciones: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	expvaloresext: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	frecuenciavaloresext: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	plazovaloresext: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	volumenvaloresext: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	exptrackers: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	frecuenciatrackers: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	plazotrackers: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	volumentrackers: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	expcertificadoscap: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	frecuenciacertificadoscap: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	plazocertificadoscap: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	volumencertificadoscap: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	propositoinversion: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	toleranciariesgo: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	horizonteinversion: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	tienelimitante: joi
		.string()
		.valid(
			"NO",
			"SI"
		)
		.required(),
	porcentajetotalpatrimonio: joi
		.string()
		.valid(
			"DE0A20",
			"DE20A40",
			"DE40A60",
			"DE60A80",
			"DE80A100"
		)
		.required(),
	porcentajeingresoanual: joi
		.string()
		.valid(
			"DE0A20",
			"DE20A40",
			"DE40A60",
			"DE60A80",
			"DE80A100"
		)
		.required(),
	porcentajeinversiones: joi
		.string()
		.valid(
			"DE0A20",
			"DE20A40",
			"DE40A60",
			"DE60A80",
			"DE80A100"
		)
		.required(),
	origeningresos: joi
		.string()
		.valid(
			"DE0A20",
			"DE20A40",
			"DE40A60",
			"DE60A80",
			"DE80A100"
		)
		.required(),
	perfil: joi
		.string()
		.trim()
		.max(255)
		.required(),
	inconsistencias: joi
		.string()
		.trim()
		.max(64)
		.required(),
});
