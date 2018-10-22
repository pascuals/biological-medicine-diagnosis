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
		symptoms: [390,500,740,800,805,850,870,1040,1810,1950,1995,1970,2020,2190,2240,3070,3360,3620,3680,3750,3830,4240],
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
		symptoms: [280,500,620,800,810,1325,1360,1380,1510,1570,1810,2220,3030,3270,3580,4370],
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
		symptoms: [5120,500,810,1315,1590,1680,1810,1840,1930,1985,2010,3360,3370],
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
		symptoms: [60,210,260,340,780,860,1260,1390,1550,1570,1810,1820,1930,2010,2260,3100,3180,3270,3320,3350,3460,3695,3900],
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
		symptoms: [680,990,1160,1240,1340,1600,1690,1700,1850,1940,2060,2280,3000,3080,3610,4270,4290],
		pathologies: [9, 10, 11, 12, 13, 14]
	},
	{
		id: 130,
		name: "Estancamiento de Qi de Hígado. Estancamiento de Qi General. Procesos de estancamietno enzimático",
		description: "Descripción pendiente...",
		symptoms: [20,820,920,960,1000,1030,1060,1070,1090,1120,1150,1180,1180,1220,1335,1630,1720,1730,1750,1780,1790,1850,3705,3710,3720,3780,3880,4310],
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
		symptoms: [230,350,360,710,730,900,970,980,1130,1200,1370,1510,1520,1540,1570,1770,2030,3010,3130,3450],
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
		id: 800,
		name: "deposiciones sueltas"
	},
	{
		id: 805,
		name: "delgadez"
	},
	{
		id: 810,
		name: "depresión"
	},
	{
		id: 820,
		name: "Depresión acompañada de susceptibilidad"
	},
	{
		id: 830,
		name: "depresiones fáciles"
	},
	{
		id: 840,
		name: "desfallecimientos fáciles, crónicos"
	},
	{
		id: 850,
		name: "diabetes tardía"
	},
	{
		id: 860,
		name: "diarrea matinal o heces blandas"
	},
	{
		id: 870,
		name: "diarreas"
	},
	{
		id: 880,
		name: "diarreas ininterrumpidas"
	},
	{
		id: 890,
		name: "Dificultad de micción con poliuria escasa"
	},
	{
		id: 900,
		name: "digestión débil"
	},
	{
		id: 910,
		name: "digestiones lentas"
	},
	{
		id: 920,
		name: "dismenorrea (dolor menstrual) y distensión premestrual"
	},
	{
		id: 930,
		name: "dismenorrea que se mejora a la presión"
	},
	{
		id: 940,
		name: "dispepsias"
	},
	{
		id: 950,
		name: "distensión abdominal"
	},
	{
		id: 960,
		name: "distensión de senos"
	},
	{
		id: 970,
		name: "disuria (dificultad o dolor)"
	},
	{
		id: 990,
		name: "dolor agudo, localizado, fijo, agravado a la presión"
	},
	{
		id: 1000,
		name: "dolor costal - sensación"
	},
	{
		id: 1010,
		name: "Dolor de espalda"
	},
	{
		id: 1020,
		name: "dolor de espalda, dorsal y en piernas"
	},
	{
		id: 1030,
		name: "Dolor e hinchazón en escroto"
	},
	{
		id: 1040,
		name: "dolor epigástrico"
	},
	{
		id: 1050,
		name: "dolor fácil asociado a garganta inflamada"
	},
	{
		id: 1060,
		name: "dolor neurálgico intercostal - sensación"
	},
	{
		id: 1070,
		name: "dolor pélbico que irradia a testículos"
	},
	{
		id: 1080,
		name: "Dolor y debilidad lumbar"
	},
	{
		id: 1090,
		name: "dolores  o molestias erráticos"
	},
	{
		id: 1100,
		name: "dolores de lumbares"
	},
	{
		id: 1110,
		name: "dolores de rodilla"
	},
	{
		id: 1120,
		name: "dolores herniarios"
	},
	{
		id: 1130,
		name: "Edema"
	},
	{
		id: 1140,
		name: "enfriamiento del cuerpo"
	},
	{
		id: 1150,
		name: "epidimitis u orquitis"
	},
	{
		id: 1170,
		name: "equimosis lingual (acumulacion de sangre)"
	},
	{
		id: 1180,
		name: "eructos"
	},
	{
		id: 1200,
		name: "escalofríos"
	},
	{
		id: 1220,
		name: "espasmos"
	},
	{
		id: 1230,
		name: "espondilitis anquilopoyética (se sueldan las vérebras)"
	},
	{
		id: 1240,
		name: "esquinosis lingual"
	},
	{
		id: 1250,
		name: "estado febril"
	},
	{
		id: 1260,
		name: "estenosis mitral (estrechamiento)"
	},
	{
		id: 1270,
		name: "esterilidad"
	},
	{
		id: 1290,
		name: "estornudos"
	},
	{
		id: 1300,
		name: "estreñimiento de heces duras"
	},
	{
		id: 1310,
		name: "estreñimiento o heces secas y duras"
	},
	{
		id: 1310,
		name: "falta de confianza en uno mismo"
	},
	{
		id: 1315,
		name: "estreñimiento y o diarrea"
	},
	{
		id: 1320,
		name: "expectoraciones purulentas con olor pútrido"
	},
	{
		id: 1325,
		name: "falta de libido"
	},
	{
		id: 1330,
		name: "falta de memoria"
	},
	{
		id: 1335,
		name: "expresiones coléricas"
	},
	{
		id: 1340,
		name: "fatiga"
	},
	{
		id: 1350,
		name: "fatiga (siempre)"
	},
	{
		id: 1360,
		name: "fatiga al esfuerzo"
	},
	{
		id: 1370,
		name: "fatiga asociada a sensación de pesadez"
	},
	{
		id: 1380,
		name: "fatiga respiratoria"
	},
	{
		id: 1390,
		name: "Fatiga y disnea al esfuerzo (ahogo)"
	},
	{
		id: 1400,
		name: "febrículas"
	},
	{
		id: 1410,
		name: "fiebre de heno"
	},
	{
		id: 1420,
		name: "fiebre fácil o febrícula"
	},
	{
		id: 1430,
		name: "Fiebre ocasional"
	},
	{
		id: 1440,
		name: "Fiebres elevadas, fáciles y frecuentes"
	},
	{
		id: 1450,
		name: "fiebres en general o febrículas o sensación de fiebre expontánea, sin aparente razón y sobre todo vespertinas"
	},
	{
		id: 1460,
		name: "fiebres fáciles"
	},
	{
		id: 1470,
		name: "flemas difíciles de expectorar"
	},
	{
		id: 1480,
		name: "fobia"
	},
	{
		id: 1500,
		name: "forma obsesiva de pensar"
	},
	{
		id: 1510,
		name: "frío"
	},
	{
		id: 1520,
		name: "frio en extremidades"
	},
	{
		id: 1530,
		name: "frio en manos y piés"
	},
	{
		id: 1540,
		name: "frío interno"
	},
	{
		id: 1550,
		name: "frio lumbar con dolor lumbar y en piernas"
	},
	{
		id: 1560,
		name: "Frío sentido y vívido"
	},
	{
		id: 1570,
		name: "friolerismo"
	},
	{
		id: 1580,
		name: "Friolerismo y manos y pies fríos"
	},
	{
		id: 1590,
		name: "fustraciones reprimidas"
	},
	{
		id: 1600,
		name: "gangrena en los casos graves"
	},
	{
		id: 1610,
		name: "garganta inflamada"
	},
	{
		id: 1620,
		name: "garganta seca"
	},
	{
		id: 1630,
		name: "forma obsesiva de pensar"
	},
	{
		id: 1650,
		name: "goteo de sangre permanente menstrual"
	},
	{
		id: 1680,
		name: "heces caprinas o sueltas"
	},
	{
		id: 1690,
		name: "hematemesis (vómitos de sange digestiva)"
	},
	{
		id: 1700,
		name: "hemoptisis (expectoración de sangre pulmonar)"
	},
	{
		id: 1720,
		name: "hepatitis crónicas (algunas)"
	},
	{
		id: 1730,
		name: "hernia de hiato"
	},
	{
		id: 1740,
		name: "Hinchazón corporal"
	},
	{
		id: 1750,
		name: "hinchazón abdominal"
	},
	{
		id: 1760,
		name: "hinchazón abdominal diurna"
	},
	{
		id: 1770,
		name: "hinchazón genera en pelvis y/o en piernas"
	},
	{
		id: 1780,
		name: "hinchazones regionales"
	},
	{
		id: 1790,
		name: "hipo"
	},
	{
		id: 1800,
		name: "hipoglucemia"
	},
	{
		id: 1810,
		name: "inapetencia"
	},
	{
		id: 1820,
		name: "incontinencia urinaria"
	},
	{
		id: 1830,
		name: "incontinencia al toser o saltar"
	},
	{
		id: 1840,
		name: "indentación"
	},
	{
		id: 1850,
		name: "induraciones"
	},
	{
		id: 1860,
		name: "Infecciones de vías respiratorias"
	},
	{
		id: 1870,
		name: "infecciones en el tracto respiratorio con calor"
	},
	{
		id: 1880,
		name: "infecciones fáciles en vías altas respiratorias"
	},
	{
		id: 1890,
		name: "infecciones urinarias fáciles"
	},
	{
		id: 1920,
		name: "introversión"
	},
	{
		id: 1930,
		name: "irritabilidad"
	},
	{
		id: 1940,
		name: "Labios color púrpura o violáceos"
	},
	{
		id: 1950,
		name: "labios secos"
	},
	{
		id: 1960,
		name: "labios y mucosa palpebral pálidos"
	},
	{
		id: 1970,
		name: "lengua con grietas transversales"
	},
	{
		id: 1980,
		name: "lengua delgada"
	},
	{
		id: 1985,
		name: "lengua con capa gruesa"
	},
	{
		id: 1995,
		name: "lengua con grieta central"
	},
	{
		id: 2000,
		name: "lengua hinchada"
	},
	{
		id: 2010,
		name: "lengua pálida"
	},
	{
		id: 2020,
		name: "lengua pálida algo hinchada"
	},
	{
		id: 2030,
		name: "Lengua pálida, indentada"
	},
	{
		id: 2040,
		name: "lengua pálida, hinchada e indentada"
	},
	{
		id: 2060,
		name: "lengua púrpura o violácea"
	},
	{
		id: 2070,
		name: "lengua roja"
	},
	{
		id: 2080,
		name: "lengua roja o escarlata a veces ulcerada"
	},
	{
		id: 2090,
		name: "Lengua roja oscura (sobre todo en los bordes)"
	},
	{
		id: 2100,
		name: "Lengua roja y hasta escarlata y más roja en el ápice"
	},
	{
		id: 2110,
		name: "lengua roja y seca sin apenas capa saburral"
	},
	{
		id: 2120,
		name: "lengua seca"
	},
	{
		id: 2130,
		name: "lengua temblorosa"
	},
	{
		id: 2160,
		name: "letargia"
	},
	{
		id: 2170,
		name: "leucopenia"
	},
	{
		id: 2180,
		name: "leve dolor"
	},
	{
		id: 2190,
		name: "ligero dolor epigástrico"
	},
	{
		id: 2200,
		name: "ligero dolor muscular"
	},
	{
		id: 2210,
		name: "litiasis urinaria"
	},
	{
		id: 2220,
		name: "lumbalgias"
	},
	{
		id: 2240,
		name: "mala digestión"
	},
	{
		id: 2250,
		name: "malaria cronificada"
	},
	{
		id: 2260,
		name: "manos y pies facilmente fríos"
	},
	{
		id: 2270,
		name: "Mareos"
	},
	{
		id: 2280,
		name: "masas abdominales palpables."
	},
	{
		id: 3000,
		name: "metrorragias  (fuera del periodo)"
	},
	{
		id: 3010,
		name: "micciones poco abundantes y/o frecuentes"
	},
	{
		id: 3020,
		name: "miembros débiles"
	},
	{
		id: 3030,
		name: "miembros fríos"
	},
	{
		id: 3040,
		name: "mucosidades amarillas densas"
	},
	{
		id: 3050,
		name: "Mucosidades y flemas blancas y fluidas"
	},
	{
		id: 3060,
		name: "nariz bloqueada"
	},
	{
		id: 3070,
		name: "náuseas"
	},
	{
		id: 3080,
		name: "necrosis"
	},
	{
		id: 3090,
		name: "nefritis"
	},
	{
		id: 3100,
		name: "neurastenia (depresión, tristeza inestabilidad emociona)"
	},
	{
		id: 3110,
		name: "neuritis"
	},
	{
		id: 3120,
		name: "oligomenorrea (ciclos poco fecuentes)"
	},
	{
		id: 3130,
		name: "Oliguria (disminución de orina"
	},
	{
		id: 3140,
		name: "onicopatías (alteración en uñas)"
	},
	{
		id: 3150,
		name: "orina concentrada"
	},
	{
		id: 3170,
		name: "orinas frecuentes"
	},
	{
		id: 3180,
		name: "palpitaciones"
	},
	{
		id: 3200,
		name: "parestesias (adormecimiento)"
	},
	{
		id: 3210,
		name: "pelo y cabello seco, sin brillo y quebradizo"
	},
	{
		id: 3220,
		name: "pesadez corporal- sensación"
	},
	{
		id: 3230,
		name: "piel seca y rugosa"
	},
	{
		id: 3240,
		name: "poca claridad de juicio por exceso de pensamiento"
	},
	{
		id: 3250,
		name: "poco apetito"
	},
	{
		id: 3260,
		name: "Polidipsia (necesidad urgente de beber)"
	},
	{
		id: 3270,
		name: "poliuria (mucha orina)"
	},
	{
		id: 3280,
		name: "Poliuria, micción frecuente y franca incontinencia"
	},
	{
		id: 3290,
		name: "Preanemia"
	},
	{
		id: 3310,
		name: "prolapso de útero, estómago y vegiga"
	},
	{
		id: 3320,
		name: "Prolapso mitra"
	},
	{
		id: 3330,
		name: "prolapsos uterino o rectal"
	},
	{
		id: 3340,
		name: "pterigium (degeneración de la conjuntiva del ojo)"
	},
	{
		id: 3350,
		name: "Pulso a veces lento"
	},
	{
		id: 3360,
		name: "pulso débil"
	},
	{
		id: 3370,
		name: "pulso en cuerda"
	},
	{
		id: 3380,
		name: "pulso filiforme siempre"
	},
	{
		id: 3390,
		name: "pulso fino"
	},
	{
		id: 3400,
		name: "Pulso fino y rápido"
	},
	{
		id: 3410,
		name: "Pulso lento"
	},
	{
		id: 3420,
		name: "pulso mudo y rápido"
	},
	{
		id: 3430,
		name: "pulso mudo, profundo y rápido"
	},
	{
		id: 3440,
		name: "Pulso profundo"
	},
	{
		id: 3450,
		name: "pulso profundo o mudo"
	},
	{
		id: 3460,
		name: "pulso profundo y débil"
	},
	{
		id: 3470,
		name: "pulso profundo y fino"
	},
	{
		id: 3480,
		name: "pulso profundo y lento"
	},
	{
		id: 3490,
		name: "pulso rápido"
	},
	{
		id: 3530,
		name: "pulso sin fuerza y vacío"
	},
	{
		id: 3540,
		name: "púrpuras de cualquier tipo"
	},
	{
		id: 3550,
		name: "querer bebidas frías"
	},
	{
		id: 3560,
		name: "reglas con sangre pálida"
	},
	{
		id: 3570,
		name: "resfriados constantes"
	},
	{
		id: 3580,
		name: "rinitis alérgica"
	},
	{
		id: 3590,
		name: "rinorrea"
	},
	{
		id: 3600,
		name: "rinorrea siempre"
	},
	{
		id: 3610,
		name: "Rostro color púrpura o violáceo"
	},
	{
		id: 3620,
		name: "rostro pálido"
	},
	{
		id: 3640,
		name: "saciedad"
	},
	{
		id: 3650,
		name: "sangre palida y acuosa"
	},
	{
		id: 3660,
		name: "sed"
	},
	{
		id: 3680,
		name: "sed sin ganas de beber"
	},
	{
		id: 3690,
		name: "Sensación de calor en pulmones"
	},
	{
		id: 3695,
		name: "Senilidad acelerada"
	},
	{
		id: 3705,
		name: "sensación de opresión abdominal"
	},
	{
		id: 3710,
		name: "sensación de opresión costal"
	},
	{
		id: 3720,
		name: "sensación de opresión torácica"
	},
	{
		id: 3730,
		name: "sensación de pesadez corporal"
	},
	{
		id: 3740,
		name: "sensación de pesadez pélvica y vesical"
	},
	{
		id: 3750,
		name: "sensación de plenitud y pesadez en epigastro"
	},
	{
		id: 3760,
		name: "síndrome de fatiga post-vírica"
	},
	{
		id: 3770,
		name: "síndrome de vacío general"
	},
	{
		id: 3780,
		name: "sindrome premenstrual y trastornos emocionales asociados"
	},
	{
		id: 3790,
		name: "sinusitis crónica"
	},
	{
		id: 3800,
		name: "Sofocos"
	},
	{
		id: 3810,
		name: "somnolencia"
	},
	{
		id: 3820,
		name: "saburra blanca"
	},
	{
		id: 3830,
		name: "suburra delgada"
	},
	{
		id: 3840,
		name: "sudor espontáneo"
	},
	{
		id: 3850,
		name: "Sudores extraños, sorpresivos"
	},
	{
		id: 3860,
		name: "sudores y sofocos"
	},
	{
		id: 3870,
		name: "sueño de baja calidad"
	},
	{
		id: 3880,
		name: "suspiros"
	},
	{
		id: 3890,
		name: "taquicardia paroxística"
	},
	{
		id: 3900,
		name: "Taquicardia paroxística (aguda)"
	},
	{
		id: 4000,
		name: "Taquicardia paroxística (aguda)"
	},
	{
		id: 4100,
		name: "temor al frío"
	},
	{
		id: 4200,
		name: "Tez roja"
	},
	{
		id: 4210,
		name: "tos"
	},
	{
		id: 4220,
		name: "tos consuntiva"
	},
	{
		id: 4230,
		name: "tos crónica"
	},
	{
		id: 4240,
		name: "tos crónica con esputo blanco acuoso"
	},
	{
		id: 4250,
		name: "tos frecuente asociada a las mucosidades"
	},
	{
		id: 4260,
		name: "tos seca"
	},
	{
		id: 4270,
		name: "traumatismos y hematomas de larga curación"
	},
	{
		id: 4280,
		name: "tuberculosis renal"
	},
	{
		id: 4290,
		name: "Tumefacciones localizadas"
	},
	{
		id: 4300,
		name: "úlcera péptica en estado de vacío energético"
	},
	{
		id: 4310,
		name: "úlceras pépticas crónicas (algunas)"
	},
	{
		id: 4320,
		name: "uñas frágiles"
	},
	{
		id: 4330,
		name: "uñas secas"
	},
	{
		id: 4340,
		name: "ureitis"
	},
	{
		id: 4350,
		name: "vacío inmunitario en niños (salvo eczema o asma)"
	},
	{
		id: 4360,
		name: "vómitos"
	},
	{
		id: 4370,
		name: "Vértigos"
	},
	{
		id: 4380,
		name: "voz débil, baja sin tono"
	},
	{
		id: 4390,
		name: "voz ronca"
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
