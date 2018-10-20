// BIOLOGY DATA

let diagnostics = [
	{
		id: 10,
		name: "Calor tóxico. Calor plenitud de sangre. Hipersensibilidad inmunitaria",
		description: "Descripción pendiente...",
		symptoms: [130,400,450,520,1160,1190,1210,1440,1710,1990,2050,2140,2150,2290,3300,3400,3510,3630,3660],
		pathologies: [1, 2, 3, 4, 5, 6, 7, 8, 9]
	},
	{
		id: 20,
		name: "Calor-plenitud Yang en hígado. Calor-plenitud en vesícula biliar. Viento de hígado. Exceso metabólico en hígado",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 30,
		name: "Calor en corazón. Plenitud calor yang de corazon. Exceso cardíaco funcional",
		description: "Descripción pendiente...",
		symptoms: [80,110,380,390,690,720,1430,1490,1900,2100,2130,2230,3160,3180,3190,3500,3670,3700,4200],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 40,
		name: "Calor plenitud en estómago e intestinos. Exceso metabólico en estómago",
		description: "Descripción pendiente...",
		symptoms: [30,70,90,390,,,530,1280,1640,1660,1670,1950,2080,3260,3520,3670],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 50,
		name: "Calor en al QI y calor en el pulmón. Exceso metabólico en pulmones",
		description: "Descripción pendiente...",
		symptoms: [30,80,240,580,1050,1320,1460,1470,1610,1870,2070,3040,3490,3550,3660,3690,4260,4380],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 60,
		name: "Vacío de QI y de Yang de bazo. Vacío de Yang de riñón. Deficiencia funcional digestiva. Deficiencia funcional córtico-suprarenal",
		description: "Descripción pendiente...",
		symptoms: [10,50,60,100,200,220,310,330,360,410,510,600,750,750,900,1350,1800,1920,2010,2220,3000,3220,3330,3340,3530,3620,3650,3810,3820,4000,4230],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 61,
		name: "Vacío de QI de Bazo con Vacío de QI y de Sangre de Corazón.Deficiencias digestivas por pobreza funcional cardíacaencimática digestiva ",
		description: "Descripción pendiente...",
		symptoms: [210,740,800,810,1330,1810,1900,1980,2000,3180,3620],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 62,
		name: "Vacio de QI del Bazo y de pulmón con estancamiento de la energía enzimática asociados a Vacío de Ying y a Humedad.Deficiencia digestiva del transporte alimentario asociado a transporte neuro-vegetarivo y edema en el ámbito digestivo",
		description: "Descripción pendiente...",
		symptoms: [390,500,740,800,800,850,870,1040,1810,1950,1990,1970,2020,2190,2240,3070,3360,3620,3680,3750,3830,4240],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 63,
		name: "Vacío de QI de pulmón más Vacío de Wei Qi más Viento que Estanca el Qi.Deficiencia inmunitaria y constitucional pulmonar asociada a bloqueo enzimático",
		description: "Descripción pendiente...",
		symptoms: [150,700,1290,1410,3060,3580,3590,3790],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 64,
		name: "Vacío o Deficiencia del Qi con Humedad y Acumulación de Comida.Debilidad energética, enzimática, asociada a edema y fáciles estancamientos de comida",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 65,
		name: "Vacío de Qi con Vacío de Ying, con Vacío y Calor de Sangre propia del afectado por quimioterapia.Vacío energético glandular, sanguíneo y global. Astenia general",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 66,
		name: "Vacío de Qi de Pulmón, de Bazo y Riñón y con Vacío de Ying",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 67,
		name: "Vacío de Qi de Pulmón de Bazo y Riñones. Agresión de Viento Externo",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 68,
		name: "Vacío de Qi(de Bazo y Riñón) con Humedad de Vejiga.Vacío digestivo, suprarrenal y edema en el ámbito pélbico",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 69,
		name: "Vacío de Qi de Bazo con Estancamietno de Qi de Hígado y Humedad en intestino. Deficiencia digestiva asociada a emotividad alterada y bloqueo hepático subsiguiente.",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 70,
		name: "Vacío de Qi de Estómado y Bazo con insuficiencia de Yin de Estómago, con Humedad y Estancamiento del Qi en triple Recalentador. Deficiencias energéticas,",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 71,
		name: "Vacío de Qi de Pulmón y Bazo con Deficiencia de Yang y Humedad residual en los músculos",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 72,
		name: "Vacío de Yang",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 75,
		name: "Vacío de Qi de Corazón. Vacío de Yang de Corazón. Deficiencia energética en corazón",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 80,
		name: "Vacío de Ying. Sequedad. Trastorno neuroendocrino",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 90,
		name: "Vacío de Qi y Yang de Pulmón. Vacío de WEI Qi. Deficiencia inmunitaria pulmonar",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 100,
		name: "Vacío de Sangre, Yin, Yang y Qi. Vacío de Jing. Vacío esencial global energético",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 110,
		name: "Vacío de Sangre. Vacío de Sangre de Hígado. Deficiencia de la función del hígado de enriquecer la sangre",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 120,
		name: "Estancamiento de Sangre. Estancamientos y estasis sanguíneo",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 130,
		name: "Estancamiento de Qi de Hígado. Estancamiento de Qi General. Procesos de estancamietno enzimático",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 140,
		name: "Sindrome de Obstrucción en los Jing Mai. Microcirculación Alterada",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 150,
		name: "Humedad Frío. Edema y acumulación líquida en subepitelios",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 160,
		name: "Humedad calor- Humedad Calor Digestivo (Recalentador Medio). Acumulación de líquido e hipermetabolismo en digestivo",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 170,
		name: "Humedad Calor (II). Humedad Calor en Piel y Periferia. Acumulación de líquido e hippermetabolismo en piel y musculación",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 180,
		name: "Humedad Calor (III). Humedad Calor en Riñón (Recalentador Inferior). Acumulación de líquido e hippermetabolismo en ámbito genito-urinario",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 190,
		name: "Mucosidades Calor. Acumulación de flemas e hipermetabolismo",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 200,
		name: "Mucosidades Frío. Acumulación de flemas e hipometabolismo",
		description: "Descripción pendiente...",
		symptoms: [50,120,290,520,590,630,1160,2090,3510],
		pathologies: [9, 10, 11, 12, 13, 14]
	}
];

let symptoms = [
	{
		id: 130,
		name: "Agitación emocional, incluso comportamiento maníaco y o espíritu turbado"
	},
	{
		id: 400,
		name: "Boca y garganta secas"
	},
	{
		id: 450,
		name: "CALOR, calor interno, hipertemia, sed. (muy obvio)"
	},
	{
		id: 529,
		name: "Capa saburral amarilla o amarillenta"
	},
	{
		id: 1160,
		name: "Epistaxis fáciles"
	},
	{
		id: 1190,
		name: "Erupciones cutáneas repetidas"
	},
	{
		id: 1210,
		name: "Espamofilia"
	},
	{
		id: 1440,
		name: "Fiebres elevadas, fáciles y frecuentes"
	},
	{
		id: 1710,
		name: "Hemorragias fáciles (epistaxis, hematemesis)"
	},
	{
		id: 1990,
		name: "Lengua escarlata"
	},
	{
		id: 2050,
		name: "Lengua punteada en rojo"
	},
	{
		id: 2140,
		name: "Lengua roja o francamente escarlata "
	},
	{
		id: 2150,
		name: "Lesiones purulentas repetidas como abcesos, forúnculos (diviesos), etc"
	},
	{
		id: 2290,
		name: "Mejillas rojas"
	},
	{
		id: 3300,
		name: "Procesos inflamatorios repetidos como anginas, gastroenteritir, faringitis, clecistitis, infecciones agudas, colitis infecciosa, conjuntivitis, etc"
	},
	{
		id: 3400,
		name: "Pulso fino y rápido"
	},
	{
		id: 3510,
		name: "Pulso rápido y ancho"
	},
	{
		id: 3630,
		name: "Rostro y aspecto rojo y fuerte"
	},
	{
		id: 3660,
		name: "Sed"
	},
	{
		id: 50,
		name: "Acúfenos"
	},
	{
		id: 120,
		name: "Agitación mental o irritabilidad (crisis o accesos)"
	},
	{
		id: 290,
		name: "Aspecto congestivo (a evaluar)"
	},
	{
		id: 520,
		name: "Capa saburral amarilla o amarillenta"
	},
	{
		id: 590,
		name: "Cara enrojecida y ojos en general (rojez de conjuntiva)"
	},
	{
		id: 630,
		name: "Cefalea hemicraneal (a evaluar"
	},
	{
		id: 1160,
		name: "Epistaxis (a evaluar)"
	},
	{
		id: 2090,
		name: "Lengua roja oscura (sobre todo en los bordes)"
	},
	{
		id: 3510,
		name: "Pulso rápido y ancho"
	},
	{
		id: 80,
		name: "Aftas bucales fáciles"
	},
	{
		id: 110,
		name: "Agitación"
	},
	{
		id: 380,
		name: "Boca amarga"
	},
	{
		id: 390,
		name: "Boca seca"
	},
	{
		id: 690,
		name: "Comportamiento maníaco"
	},
	{
		id: 720,
		name: "Crisis de nervios"
	},
	{
		id: 1430,
		name: "Fiebre ocasional"
	},
	{
		id: 1490,
		name: "Fobia severa"
	},
	{
		id: 1900,
		name: "Insomnio"
	},
	{
		id: 2100,
		name: "Lengua roja y hasta escarlata y más roja en el ápice"
	},
	{
		id: 2130,
		name: "lengua temblorosa"
	},
	{
		id: 2230,
		name: "Mal carácter"
	},
	{
		id: 3160,
		name: "Orina rojiza y oscura"
	},
	{
		id: 3180,
		name: "palpitaciones"
	},
	{
		id: 3190,
		name: "Paranoia"
	},
	{
		id: 3500,
		name: "Pulso rápido siempre y tenso pero a veces ancho y aveces fino si se asocia un vacío de Yin"
	},
	{
		id: 3670,
		name: "Sed de bebidas fías"
	},
	{
		id: 3700,
		name: "Sensación de calor en el pecho"
	},
	{
		id: 4200,
		name: "Tez roja"
	},
	{
		id: 30,
		name: "abscesos dentarios"
	},
	{
		id: 70,
		name: "afecciones irritativas digestivas"
	},
	{
		id: 90,
		name: "aftas o úlceras linguales"
	},
	{
		id: 390,
		name: "Boca seca"
	},
	{
		id: 1,
		name: ""
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
