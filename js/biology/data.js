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
		symptoms: [1410,2240,3250,3570,3600,4350],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 65,
		name: "Vacío de Qi con Vacío de Ying, con Vacío y Calor de Sangre propia del afectado por quimioterapia.Vacío energético glandular, sanguíneo y global. Astenia general",
		description: "Descripción pendiente...",
		symptoms: [160,500,870,2240,3070,3860,4360],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 66,
		name: "Vacío de Qi de Pulmón, de Bazo y Riñón y con Vacío de Ying",
		description: "Descripción pendiente...",
		symptoms: [280,500,620,740,800,830,1310,1400,1810,1860,2000,3580,3840],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 67,
		name: "Vacío de Qi de Pulmón de Bazo y Riñones. Agresión de Viento Externo",
		description: "Descripción pendiente...",
		symptoms: [280,500,620,800,810,1320,1360,1380,1510,1570,1810,2220,3030,3270,3580,4370],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 68,
		name: "Vacío de Qi(de Bazo y Riñón) con Humedad de Vejiga.Vacío digestivo, suprarrenal y edema en el ámbito pélbico",
		description: "Descripción pendiente...",
		symptoms: [500,810,890,1500,1510,1830,2010,2220,3240,3360,4360],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 69,
		name: "Vacío de Qi de Bazo con Estancamietno de Qi de Hígado y Humedad en intestino. Deficiencia digestiva asociada a emotividad alterada y bloqueo hepático subsiguiente.",
		description: "Descripción pendiente...",
		symptoms: [5120,500,810,1310,1590,1680,1810,1840,1930,1980,2010,3360,3370],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 70,
		name: "Vacío de Qi de Estómado y Bazo con insuficiencia de Yin de Estómago, con Humedad y Estancamiento del Qi en triple Recalentador. Deficiencias energéticas,",
		description: "Descripción pendiente...",
		symptoms: [370,500,800,1810,1840,1970,2010,2240,3020,3640],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 71,
		name: "Vacío de Qi de Pulmón y Bazo con Deficiencia de Yang y Humedad residual en los músculos",
		description: "Descripción pendiente...",
		symptoms: [140,810,1330,1340,1810,2180,2200,3310,3530,3760,3770,4360],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 72,
		name: "Vacío de Yang",
		description: "Descripción pendiente...",
		symptoms: [340,360,760,860,1010,1080,1510,1560,1580,2030,3280,3360,3410,3440],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 75,
		name: "Vacío de Qi de Corazón. Vacío de Yang de Corazón. Deficiencia energética en corazón",
		description: "Descripción pendiente...",
		symptoms: [60,210,260,340,780,860,1260,1390,1550,1570,1810,1820,1930,2010,2260,3100,3180,3270,3320,3350,3460,3690,3900],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 80,
		name: "Vacío de Ying. Sequedad. Trastorno neuroendocrino",
		description: "Descripción pendiente...",
		symptoms: [140,210,390,400,430,470,480,490,570,790,1100,1110,1300,1340,1450,1620,1900,1930,2070,2110,2120,3130,3210,3230,3360,3380,3400,3490,3660,3660,3800,3850,3870,4260],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 90,
		name: "Vacío de Qi y Yang de Pulmón. Vacío de WEI Qi. Deficiencia inmunitaria pulmonar",
		description: "Descripción pendiente...",
		symptoms: [140,340,420,860,1020,1560,1570,1820,1880,2040,2260,3030,3170,3270,3350,3460,4000,4210,4370],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 100,
		name: "Vacío de Sangre, Yin, Yang y Qi. Vacío de Jing. Vacío esencial global energético",
		description: "Descripción pendiente...",
		symptoms: [60,190,210,230,250,300,320,640,650,670,770,840,880,900,930,950,1230,1250,1260,1270,1300,1340,1480,1650,1820,1930,2160,2170,2210,2250,3000,3090,3100,3180,3320,3540,3890,4220,4280,4300,4340,4360],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 110,
		name: "Vacío de Sangre. Vacío de Sangre de Hígado. Deficiencia de la función del hígado de enriquecer la sangre",
		description: "Descripción pendiente...",
		symptoms: [40,180,190,660,1900,1960,2010,2270,3110,3120,3140,3180,3200,3230,3290,3390,3560,3620,4320,4330,4360],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 120,
		name: "Estancamiento de Sangre. Estancamientos y estasis sanguíneo",
		description: "Descripción pendiente...",
		symptoms: [680,990,1160,1240,1340,1600,1690,1700,1940,2060,2280,3000,3080,3610,4270,4290],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 130,
		name: "Estancamiento de Qi de Hígado. Estancamiento de Qi General. Procesos de estancamietno enzimático",
		description: "Descripción pendiente...",
		symptoms: [20,820,920,960,1000,1030,1060,1070,1090,1120,1150,1180,1180,1220,1330,1630,1720,1730,1750,1780,1790,1850,3700,3710,3720,3780,3880,4310],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 140,
		name: "Sindrome de Obstrucción en los Jing Mai. Microcirculación Alterada",
		description: "Descripción pendiente...",
		symptoms: [360,550,1530,1540,2010,3470],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 150,
		name: "Humedad Frío. Edema y acumulación líquida en subepitelios",
		description: "Descripción pendiente...",
		symptoms: [230,350,360,710,730,900,980,1130,1200,1370,1510,1520,1540,1570,1770,2030,3010,3130,3450],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 160,
		name: "Humedad calor- Humedad Calor Digestivo (Recalentador Medio). Acumulación de líquido e hipermetabolismo en digestivo",
		description: "Descripción pendiente...",
		symptoms: [170,270,460,520,560,910,940,970,1170,1340,1420,1760,1890,2070,3130,3220,3430],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 170,
		name: "Humedad Calor (II). Humedad Calor en Piel y Periferia. Acumulación de líquido e hippermetabolismo en piel y musculación",
		description: "Descripción pendiente...",
		symptoms: [440,520,560,970,1460,1890,2070,3130,3420,3730,3740],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 180,
		name: "Humedad Calor (III). Humedad Calor en Riñón (Recalentador Inferior). Acumulación de líquido e hippermetabolismo en ámbito genito-urinario",
		description: "Descripción pendiente...",
		symptoms: [540,1130,1740,1890,2070,3130,3220,3420],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 190,
		name: "Mucosidades Calor. Acumulación de flemas e hipermetabolismo",
		description: "Descripción pendiente...",
		symptoms: [440,520,610,1300,1460,2070,3040,3150,3490,4250],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 200,
		name: "Mucosidades Frío. Acumulación de flemas e hipometabolismo",
		description: "Descripción pendiente...",
		symptoms: [360,550,1140,1570,2010,2260,3050,3480,3590,4100],
		pathologies: [9, 10, 11, 12, 13, 14]
	}
];

let symptoms = [
	
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
		id: 530,
		name: "capa saburral amarilla en la raíz lingual"
	},
	{
		id: 1280,
		name: "estomatitis"
	},
	{
		id: 1640,
		name: "Gingivitis "
	},
	{
		id: 1660,
		name: "halitosis de origen gástrico"
	},
	{
		id: 1670,
		name: "Hambre mucha, canina"
	},
	{
		id: 1950,
		name: "labios secos"
	},
	{
		id: 2080,
		name: "lengua roja o escarlata a veces ulcerada"
	},
	{
		id: 3260,
		name: "Polidipsia (necesidad urgente de beber)"
	},
	{
		id: 3520,
		name: "pulso rápido, ancho o fino "
	},
	{
		id: 3670,
		name: "sed de bebidas fría"
	},
	{
		id: 60,
		name: "adelgazamiento"
	},
	{
		id: 70,
		name: "afecciones irritativas digestivas"
	},
	{
		id: 100,
		name: "ageusia (pérdida del gusto)"
	},
	{
		id: 120,
		name: "agitación e irritabilidad"
	},
	{
		id: 130,
		name: "Agitación emocional, incluso comportamiento maníaco y o espíritu turbado"
	},
	{
		id: 140,
		name: "agotamiento"
	},
	{
		id: 150,
		name: "alergia a gatos, perros etc."
	},
	{
		id: 160,
		name: "alopecia"
	},
	{
		id: 170,
		name: "alteraciones digestivas"
	},
	{
		id: 180,
		name: "amenorrea (ausencia)"
	},
	{
		id: 190,
		name: "anemia"
	},
	{
		id: 200,
		name: "angina de pecho"
	},
	{
		id: 210,
		name: "ansiedad"
	},
	{
		id: 215,
		name: "Ansiedad y fobia"
	},
	{
		id: 220,
		name: "apatía"
	},
	{
		id: 230,
		name: "apetito disminuido o inapetencia"
	},
	{
		id: 240,
		name: "ardor en la garganta"
	},
	{
		id: 250,
		name: "arritmia extrasistólica"
	},
	{
		id: 260,
		name: "Arritmias"
	},
	{
		id: 270,
		name: "ascitis"
	},
	{
		id: 280,
		name: "asma alérgica"
	},
	{
		id: 300,
		name: "astenia"
	},
	{
		id: 310,
		name: "astenia (siempre)"
	},
	{
		id: 320,
		name: "astenia intelectual"
	},
	{
		id: 330,
		name: "astenia mental"
	},
	{
		id: 340,
		name: "Astenia sexual"
	},
	{
		id: 350,
		name: "ausencia de sed"
	},
	{
		id: 360,
		name: "Aversión al frío"
	},
	{
		id: 370,
		name: "boca algo seca"
	},
	{
		id: 410,
		name: "bronquitis"
	},
	{
		id: 420,
		name: "bronquitis facilmente cronificables"
	},
	{
		id: 430,
		name: "Calor en palmas de las manos y planta de los pies"
	},
	{
		id: 440,
		name: "calor interno mas o menos obvio"
	},
	{
		id: 460,
		name: "Calor, sensación de calor"
	},
	{
		id: 470,
		name: "Calores extraños sorpresivos"
	},
	{
		id: 480,
		name: "Calores nocturnos"
	},
	{
		id: 490,
		name: "Calores y sudores expontáneos en rostro, mejillas, orejas, frente, cuello, sin causa aparente y sobre todo por la noche"
	},
	{
		id: 500,
		name: "cansancio"
	},
	{
		id: 510,
		name: "cansancio esencial (siempre)"
	},
	{
		id: 530,
		name: "capa saburral amarilla en la raíz lingual"
	},
	{
		id: 540,
		name: "capa saburral amarilla y húmeda"
	},
	{
		id: 550,
		name: "capa saburral blanca"
	},
	{
		id: 560,
		name: "capa saburral húmeda"
	},
	{
		id: 570,
		name: "capa saburral inexistente o mínima"
	},
	{
		id: 580,
		name: "capa saburral seca, amarilla y a veces blanca"
	},
	{
		id: 600,
		name: "cara pálida"
	},
	{
		id: 610,
		name: "carácter abierto facilmente irritable"
	},
	{
		id: 620,
		name: "Catarros"
	},
	{
		id: 640,
		name: "cefaleas"
	},
	{
		id: 650,
		name: "ciclo menstrual acortado de sangre pálida y abundante o escasa hacia la franca amenorrea"
	},
	{
		id: 660,
		name: "ciclo menstrual alargado"
	},
	{
		id: 670,
		name: "cistitis"
	},
	{
		id: 680,
		name: "coágulos en la menstruación"
	},
	{
		id: 700,
		name: "conjuntivitis"
	},
	{
		id: 710,
		name: "constitución física pobre"
	},
	{
		id: 720,
		name: "Crisis de nervios"
	},
	{
		id: 740,
		name: "debilidad de extremidades"
	},
	{
		id: 750,
		name: "debilidad de miembros"
	},
	{
		id: 760,
		name: "Debilidad de piernas"
	},
	{
		id: 770,
		name: "debilidad gastrointestinal"
	},
	{
		id: 780,
		name: "Debilidad general asociada a debilidad digestiva o de anemia"
	},
	{
		id: 790,
		name: "debilidad muscular, formación de agujetas y sensación de qumazón interna"
	},
	{
		id: 8,
		name: ""
	},
	{
		id: 8,
		name: ""
	},
	{
		id: 8,
		name: ""
	},
	{
		id: 8,
		name: ""
	},
	{
		id: 8,
		name: ""
	},
	{
		id: 8,
		name: ""
	},
	{
		id: 8,
		name: ""
	},
	{
		id: 8,
		name: ""
	},
	{
		id: 8,
		name: ""
	},
	{
		id: 8,
		name: ""
	},
	{
		id: 8,
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
