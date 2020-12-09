const joi = require("joi");

module.exports = joi.object().keys({
	nombre: joi
		.string()
		.trim()
		.max(64)
		.required(),
	actividad: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	noclientebanamex: joi
		.string()
		.trim()
		.max(64)
		.required(),
	inst: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	nocta: joi
		.string()
		.trim()
		.max(64)
		.required(),
	suc: joi
		.string()
		.trim()
		.max(64)
		.required(),
	clabe: joi
		.string()
		.trim()
		.max(64)
		.required(),
	calle: joi
		.string()
		.trim()
		.max(64)
		.required(),
	noext: joi
		.string()
		.trim()
		.max(64)
		.required(),
	nointerior: joi
		.string()
		.trim()
		.max(64)
		.required(),
	mexextr: joi
		.string()
		.valid(
			"MEXICO",
			"EXTRANJERO"
		)
		.required(),
	cp: joi
		.string()
		.trim()
		.max(64)
		.required(),
	estado: joi
		.string()
		.trim()
		.max(64)
		.required(),
	delmpo: joi
		.string()
		.trim()
		.max(64)
		.required(),
	ciudad: joi
		.string()
		.trim()
		.max(64)
		.required(),
	colonia: joi
		.string()
		.trim()
		.max(64)
		.required(),
	correspondencia: joi
		.string()
		.valid(
			"NO",
			"SI"
		)
		.required(),
	rfc: joi
		.string()
		.trim()
		.max(64)
		.required(),
	curp: joi
		.string()
		.trim()
		.max(64)
		.required(),
	fecnac: joi
		.date()
		.timestamp()
		.required(),
	escolaridad: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	edocivil: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	sexo: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	tipovivienda: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	calidadmigratoria: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	paisresidencia: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	nacionalidad: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	paisnac: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	edonac: joi
		.string()
		.valid(
			"DUMMY1",
			"DUMMY2",
			"DUMMY3"
		)
		.required(),
	empleadogrofinbanamex: joi
		.string()
		.valid(
			"NO",
			"SI"
		)
		.required(),
});
