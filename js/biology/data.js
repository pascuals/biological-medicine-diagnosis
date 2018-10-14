// BIOLOGY DATA

let diagnostics = [
	{
		id: 1,
		name: "Calor tóxico. Calor plenitud de sangre. Hipersensibilidad inmunitaria",
		description: "Descripción pendiente...",
		symptoms: [1, 2, 3, 4],
		pathologies: [1, 2, 3, 4, 5, 6, 7, 8, 9]
	},
	{
		id: 2,
		name: "Calor-plenitud Yang en hígado. Calor-plenitud en vesícula biliar. Viento de hígado. Exceso metabólico en hígado",
		description: "Descripción pendiente...",
		symptoms: [1, 5, 6, 7, 8, 9, 10, 11],
		pathologies: [9, 10, 11, 12, 13, 14]
	}
];

let symptoms = [
	{
		id: 1,
		name: "Fiebre elevadas fáciles y frecuentes"
	},
	{
		id: 2,
		name: "Procesos inflamatorios repetidos"
	},
	{
		id: 3,
		name: "Lesiones purulentas repetidas"
	},
	{
		id: 4,
		name: "Erupciones cutáneas repetidas"
	},
	{
		id: 5,
		name: "Enrojecimiento de cara y ojos en general"
	},
	{
		id: 6,
		name: "Agitación mental"
	},
	{
		id: 7,
		name: "Irritabilidad"
	},
	{
		id: 8,
		name: "Carácter fuerte o colérico"
	},
	{
		id: 9,
		name: "Lengua roja oscura especialmente en los bordes"
	},
	{
		id: 10,
		name: "Capa sapurral amarilla o amarillenta"
	},
	{
		id: 11,
		name: "Pulso rápido"
	}
];

let pathologies = [
	{
		id: 1,
		name: "Anginas"
	},
	{
		id: 2,
		name: "Abcesos"
	},
	{
		id: 3,
		name: "Varicela"
	},
	{
		id: 4,
		name: "Dermatitis"
	},
	{
		id: 5,
		name: "Apendicitis"
	},
	{
		id: 6,
		name: "Herpes labial"
	},
	{
		id: 7,
		name: "Blefaritis"
	},
	{
		id: 8,
		name: "Escarlatina"
	},
	{
		id: 9,
		name: "Psoriasis"
	},
	{
		id: 10,
		name: "Hernia de hiato"
	},
	{
		id: 11,
		name: "Dispepsia"
	},
	{
		id: 12,
		name: "Hipertiroidismo"
	},
	{
		id: 13,
		name: "Ticks"
	},
	{
		id: 14,
		name: "Lipomas"
	}
]

biology.load(symptoms, pathologies, diagnostics);