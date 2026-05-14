// ===================================
// TEST FINAL - BANCO DE PREGUNTAS
// ===================================

const FINAL_QUESTION_BANK = [
  {
    id: "cit-001",
    tema: "Citogenética",
    tipo: "alternativa",
    pregunta: "¿Cuál es una indicación clásica para solicitar estudio citogenético?",
    opciones: [
      "Dolor abdominal aislado",
      "Malformaciones congénitas múltiples",
      "Hipertensión esencial en adulto",
      "Infección viral aguda"
    ],
    correcta: 1,
    desarrollo: "Las malformaciones congénitas múltiples, dismorfias, retraso del desarrollo, infertilidad y abortos recurrentes son indicaciones clásicas de estudio citogenético."
  },
  {
    id: "cit-002",
    tema: "Citogenética",
    tipo: "alternativa",
    pregunta: "¿Qué función cumple la colchicina en la obtención del cariotipo?",
    opciones: [
      "Estimula linfocitos T",
      "Tiñe las bandas cromosómicas",
      "Detiene las células en metafase",
      "Desnaturaliza el ADN"
    ],
    correcta: 2,
    desarrollo: "La colchicina inhibe el huso mitótico y detiene la división celular en metafase, etapa donde los cromosomas están condensados y visibles."
  },
  {
    id: "cit-003",
    tema: "Citogenética",
    tipo: "alternativa",
    pregunta: "Las bandas oscuras del bandeo G suelen ser:",
    opciones: [
      "Ricas en GC, ricas en genes y de replicación temprana",
      "Ricas en AT, pobres en genes y de replicación tardía",
      "Solo regiones centroméricas",
      "Exclusivas del cromosoma X"
    ],
    correcta: 1,
    desarrollo: "Las bandas G positivas son ricas en A-T, pobres en genes y se replican tardíamente."
  },
  {
    id: "cit-004",
    tema: "Citogenética",
    tipo: "alternativa",
    pregunta: "¿Qué técnica es útil para detectar una microdeleción 22q11.2?",
    opciones: [
      "Bandeo C",
      "FISH con sonda específica",
      "Western blot",
      "Cuadro de Punnett"
    ],
    correcta: 1,
    desarrollo: "FISH permite usar sondas dirigidas contra regiones específicas, por eso sirve para microdeleciones como 22q11.2."
  },
  {
    id: "cit-005",
    tema: "Citogenética",
    tipo: "alternativa",
    pregunta: "¿Cuál es la única monosomía completa compatible con supervivencia postnatal?",
    opciones: [
      "Monosomía 21",
      "Turner 45,X",
      "Monosomía 18",
      "Monosomía 13"
    ],
    correcta: 1,
    desarrollo: "El síndrome de Turner 45,X es la única monosomía completa compatible con vida postnatal, aunque muchos casos se pierden prenatalmente."
  },
  {
    id: "cit-006",
    tema: "Citogenética",
    tipo: "alternativa",
    pregunta: "Un cariotipo 47,XX,+21 corresponde a:",
    opciones: [
      "Varón con Turner",
      "Mujer con trisomía 21",
      "Mujer con Klinefelter",
      "Varón normal"
    ],
    correcta: 1,
    desarrollo: "47,XX,+21 indica sexo cromosómico femenino con un cromosoma 21 extra, compatible con síndrome de Down."
  },
  {
    id: "cit-007",
    tema: "Citogenética",
    tipo: "alternativa",
    pregunta: "Una inversión pericéntrica se diferencia de una paracéntrica porque:",
    opciones: [
      "Incluye el centrómero",
      "Siempre es letal",
      "Solo afecta cromosomas sexuales",
      "Corresponde a una trisomía"
    ],
    correcta: 0,
    desarrollo: "La inversión pericéntrica incluye el centrómero; la paracéntrica ocurre dentro de un solo brazo y no lo incluye."
  },
  {
    id: "cit-008",
    tema: "Citogenética",
    tipo: "alternativa",
    pregunta: "¿Qué cromosomas pueden participar en una translocación robertsoniana?",
    opciones: [
      "1, 2, 3, 4 y 5",
      "13, 14, 15, 21 y 22",
      "Solo X e Y",
      "Todos los metacéntricos"
    ],
    correcta: 1,
    desarrollo: "Las robertsonianas ocurren entre cromosomas acrocéntricos: 13, 14, 15, 21 y 22."
  },
  {
    id: "cit-009",
    tema: "Citogenética",
    tipo: "alternativa",
    pregunta: "¿Qué evento se asocia directamente a mosaicismo postcigótico?",
    opciones: [
      "No disyunción mitótica temprana",
      "Mutación silenciosa en región no codificante",
      "Traducción proteica",
      "Splicing normal"
    ],
    correcta: 0,
    desarrollo: "Errores mitóticos tempranos después de la fecundación pueden generar dos o más líneas celulares diferentes."
  },
  {
    id: "cit-010",
    tema: "Citogenética",
    tipo: "alternativa",
    pregunta: "La triploidía corresponde a:",
    opciones: [
      "45 cromosomas",
      "47 cromosomas",
      "69 cromosomas",
      "92 cromosomas"
    ],
    correcta: 2,
    desarrollo: "La triploidía implica tres juegos haploides completos: 69 cromosomas."
  },

  {
    id: "mol-001",
    tema: "Técnicas moleculares",
    tipo: "alternativa",
    pregunta: "¿Qué molécula estudia Southern blot?",
    opciones: ["ADN", "ARNm", "Proteína", "Lípidos"],
    correcta: 0,
    desarrollo: "Southern blot detecta secuencias específicas de ADN."
  },
  {
    id: "mol-002",
    tema: "Técnicas moleculares",
    tipo: "alternativa",
    pregunta: "¿Qué molécula estudia Northern blot?",
    opciones: ["ADN", "ARNm", "Proteína", "Cromosomas metafásicos"],
    correcta: 1,
    desarrollo: "Northern blot estudia ARN mensajero y permite evaluar expresión génica."
  },
  {
    id: "mol-003",
    tema: "Técnicas moleculares",
    tipo: "alternativa",
    pregunta: "¿Qué molécula estudia Western blot?",
    opciones: ["ADN", "ARNm", "Proteína", "Cromatina"],
    correcta: 2,
    desarrollo: "Western blot permite detectar proteínas específicas."
  },
  {
    id: "mol-004",
    tema: "Técnicas moleculares",
    tipo: "alternativa",
    pregunta: "¿Cuál es el objetivo principal de la PCR?",
    opciones: [
      "Separar cromosomas",
      "Amplificar un segmento específico de ADN",
      "Medir proteínas",
      "Teñir heterocromatina"
    ],
    correcta: 1,
    desarrollo: "La PCR amplifica millones de copias de una región específica de ADN."
  },
  {
    id: "mol-005",
    tema: "Técnicas moleculares",
    tipo: "alternativa",
    pregunta: "¿Cuál es el orden correcto de las etapas de PCR?",
    opciones: [
      "Extensión, alineamiento, desnaturalización",
      "Desnaturalización, alineamiento, extensión",
      "Transferencia, hibridación, revelado",
      "Cultivo, metafase, bandeo"
    ],
    correcta: 1,
    desarrollo: "Cada ciclo de PCR incluye desnaturalización, alineamiento de primers y extensión por polimerasa."
  },
  {
    id: "mol-006",
    tema: "Técnicas moleculares",
    tipo: "alternativa",
    pregunta: "Los primers en PCR sirven para:",
    opciones: [
      "Cortar proteínas",
      "Detener la mitosis",
      "Delimitar la región a amplificar",
      "Separar cromosomas homólogos"
    ],
    correcta: 2,
    desarrollo: "Los primers son secuencias cortas que se unen a los extremos de la región que se desea amplificar."
  },
  {
    id: "mol-007",
    tema: "Técnicas moleculares",
    tipo: "alternativa",
    pregunta: "¿Qué técnica permite cuantificar expresión génica a partir de ARN?",
    opciones: [
      "RT-PCR cuantitativa",
      "Bandeo C",
      "Cariograma",
      "Cuadro de Punnett"
    ],
    correcta: 0,
    desarrollo: "La RT-PCR convierte ARN en ADNc y permite evaluar o cuantificar expresión génica."
  },
  {
    id: "mol-008",
    tema: "Técnicas moleculares",
    tipo: "alternativa",
    pregunta: "Las enzimas de restricción reconocen usualmente secuencias:",
    opciones: [
      "Palindrómicas",
      "Proteicas",
      "Mitocondriales exclusivamente",
      "Centroméricas solamente"
    ],
    correcta: 0,
    desarrollo: "Las enzimas de restricción cortan ADN en secuencias específicas, frecuentemente palindrómicas."
  },

  {
    id: "men-001",
    tema: "Herencia mendeliana",
    tipo: "alternativa",
    pregunta: "La ley de la segregación establece que:",
    opciones: [
      "Los alelos se separan durante la formación de gametos",
      "Todos los genes se heredan juntos",
      "El fenotipo siempre es intermedio",
      "Solo se heredan alelos dominantes"
    ],
    correcta: 0,
    desarrollo: "Los dos alelos de un locus se separan durante la formación de gametos y se reúnen al azar en la fecundación."
  },
  {
    id: "men-002",
    tema: "Herencia mendeliana",
    tipo: "alternativa",
    pregunta: "Un individuo con dos alelos iguales para un locus es:",
    opciones: ["Heterocigoto", "Homocigoto", "Hemizigoto", "Mosaico"],
    correcta: 1,
    desarrollo: "Homocigoto significa que posee dos alelos iguales para un mismo locus."
  },
  {
    id: "men-003",
    tema: "Herencia mendeliana",
    tipo: "alternativa",
    pregunta: "Un rasgo autosómico recesivo suele manifestarse cuando:",
    opciones: [
      "Hay una sola copia mutada",
      "Ambas copias del gen están alteradas",
      "Solo afecta varones",
      "Existe una trisomía completa"
    ],
    correcta: 1,
    desarrollo: "En herencia autosómica recesiva, generalmente se requiere alteración en ambos alelos."
  },
  {
    id: "men-004",
    tema: "Herencia mendeliana",
    tipo: "alternativa",
    pregunta: "La penetrancia se refiere a:",
    opciones: [
      "La frecuencia con que un genotipo expresa el fenotipo",
      "La intensidad de una tinción cromosómica",
      "La cantidad de cromosomas",
      "La velocidad de PCR"
    ],
    correcta: 0,
    desarrollo: "Penetrancia es la proporción de individuos con un genotipo que expresan el fenotipo asociado."
  },
  {
    id: "men-005",
    tema: "Herencia mendeliana",
    tipo: "alternativa",
    pregunta: "La expresividad variable significa que:",
    opciones: [
      "Todos los pacientes tienen el mismo cuadro",
      "Un mismo genotipo puede manifestarse con distinta severidad",
      "Solo se expresa el alelo materno",
      "El gen cambia de cromosoma"
    ],
    correcta: 1,
    desarrollo: "La expresividad variable implica diferente intensidad o presentación clínica en individuos con la misma alteración genética."
  },
  {
    id: "men-006",
    tema: "Herencia mendeliana",
    tipo: "alternativa",
    pregunta: "¿Qué es pleiotropía?",
    opciones: [
      "Un gen afecta múltiples rasgos u órganos",
      "Dos genes siempre se heredan juntos",
      "Una célula tiene dos cariotipos",
      "Un cromosoma pierde el centrómero"
    ],
    correcta: 0,
    desarrollo: "Pleiotropía ocurre cuando una alteración genética produce múltiples efectos fenotípicos."
  },
  {
    id: "men-007",
    tema: "Herencia mendeliana",
    tipo: "alternativa",
    pregunta: "La codominancia ocurre cuando:",
    opciones: [
      "Un alelo oculta completamente al otro",
      "Ambos alelos se expresan en el heterocigoto",
      "Ningún alelo se expresa",
      "Solo se expresa el alelo paterno"
    ],
    correcta: 1,
    desarrollo: "En codominancia, ambos alelos se expresan simultáneamente, como en el grupo sanguíneo AB."
  },

  {
    id: "var-001",
    tema: "Variabilidad genética",
    tipo: "alternativa",
    pregunta: "Un polimorfismo genético corresponde a:",
    opciones: [
      "Una variante presente en la población con cierta frecuencia",
      "Una alteración siempre letal",
      "Una trisomía autosómica",
      "Una técnica de tinción cromosómica"
    ],
    correcta: 0,
    desarrollo: "Un polimorfismo es una variante genética presente en la población, generalmente con frecuencia relativamente alta."
  },
  {
    id: "var-002",
    tema: "Variabilidad genética",
    tipo: "alternativa",
    pregunta: "¿Qué es un SNP?",
    opciones: [
      "Una variación de un solo nucleótido",
      "Una deleción cromosómica completa",
      "Una proteína truncada",
      "Un tipo de bandeo"
    ],
    correcta: 0,
    desarrollo: "SNP significa single nucleotide polymorphism, una variación en una base del ADN."
  },
  {
    id: "var-003",
    tema: "Genética de poblaciones",
    tipo: "alternativa",
    pregunta: "La ley de Hardy-Weinberg describe:",
    opciones: [
      "Frecuencias alélicas y genotípicas en equilibrio",
      "La tinción de cromosomas",
      "La amplificación de ADN",
      "La síntesis proteica"
    ],
    correcta: 0,
    desarrollo: "Hardy-Weinberg permite predecir frecuencias genotípicas a partir de frecuencias alélicas bajo ciertas condiciones."
  },
  {
    id: "var-004",
    tema: "Genética de poblaciones",
    tipo: "alternativa",
    pregunta: "¿Cuál condición rompe el equilibrio de Hardy-Weinberg?",
    opciones: [
      "Apareamiento aleatorio",
      "Ausencia de selección",
      "Migración",
      "Población infinita"
    ],
    correcta: 2,
    desarrollo: "La migración introduce o elimina alelos de una población, modificando frecuencias alélicas."
  },

  {
    id: "mono-001",
    tema: "Enfermedades monogénicas",
    tipo: "alternativa",
    pregunta: "La haploinsuficiencia ocurre cuando:",
    opciones: [
      "Una sola copia funcional no alcanza para mantener el fenotipo normal",
      "Ambos alelos se expresan igual",
      "Hay tres juegos cromosómicos",
      "Una célula pierde el huso mitótico"
    ],
    correcta: 0,
    desarrollo: "En haploinsuficiencia, el 50% de producto génico normal no es suficiente."
  },
  {
    id: "mono-002",
    tema: "Enfermedades monogénicas",
    tipo: "alternativa",
    pregunta: "Fibrosis quística se asocia principalmente a alteraciones en:",
    opciones: ["CFTR", "FMR1", "DMD", "RB1"],
    correcta: 0,
    desarrollo: "La fibrosis quística se debe a variantes patogénicas en el gen CFTR."
  },
  {
    id: "mono-003",
    tema: "Enfermedades monogénicas",
    tipo: "alternativa",
    pregunta: "Distrofia muscular de Duchenne se asocia a alteraciones en:",
    opciones: ["DMD", "CFTR", "HBB", "RET"],
    correcta: 0,
    desarrollo: "Duchenne se relaciona con mutaciones en el gen DMD, que codifica distrofina."
  },
  {
    id: "mono-004",
    tema: "Enfermedades monogénicas",
    tipo: "alternativa",
    pregunta: "El síndrome X frágil se asocia principalmente a:",
    opciones: [
      "Expansión de tripletes en FMR1",
      "Trisomía 18",
      "Deleción 5p",
      "Mutación mitocondrial siempre paterna"
    ],
    correcta: 0,
    desarrollo: "El X frágil se asocia a expansión de repeticiones CGG en FMR1 y alteración de su expresión."
  },

  {
    id: "comp-001",
    tema: "Enfermedades complejas",
    tipo: "alternativa",
    pregunta: "Una enfermedad multifactorial se caracteriza por:",
    opciones: [
      "Depender solo de un gen",
      "Interacción entre varios genes y ambiente",
      "Ser siempre ligada al X",
      "Ser siempre cromosómica"
    ],
    correcta: 1,
    desarrollo: "Las enfermedades complejas resultan de la interacción entre predisposición genética y factores ambientales."
  },
  {
    id: "comp-002",
    tema: "Enfermedades complejas",
    tipo: "alternativa",
    pregunta: "El riesgo relativo λr mide:",
    opciones: [
      "Agregación familiar",
      "Número de cromosomas",
      "Cantidad de exones",
      "Tamaño de una proteína"
    ],
    correcta: 0,
    desarrollo: "λr compara la prevalencia de una enfermedad en parientes de afectados versus la prevalencia poblacional."
  },
  {
    id: "comp-003",
    tema: "Enfermedades complejas",
    tipo: "alternativa",
    pregunta: "Dos parientes afectados por el mismo trastorno se denominan:",
    opciones: ["Discordantes", "Concordantes", "Hemizigotos", "Euploides"],
    correcta: 1,
    desarrollo: "Concordantes significa que ambos presentan el mismo trastorno."
  },

  {
    id: "cancer-001",
    tema: "Genética del cáncer",
    tipo: "alternativa",
    pregunta: "Un oncogén suele originarse por:",
    opciones: [
      "Activación de un protooncogén",
      "Pérdida de ambos cromosomas sexuales",
      "Inactivación normal del X",
      "Falta de crossing-over únicamente"
    ],
    correcta: 0,
    desarrollo: "Los oncogenes derivan de protooncogenes activados que promueven proliferación celular."
  },
  {
    id: "cancer-002",
    tema: "Genética del cáncer",
    tipo: "alternativa",
    pregunta: "La teoría de los dos eventos se relaciona clásicamente con:",
    opciones: [
      "Genes supresores de tumor",
      "Southern blot",
      "Bandeo R",
      "Herencia mitocondrial"
    ],
    correcta: 0,
    desarrollo: "En genes supresores tumorales, suelen requerirse dos eventos para perder la función de ambas copias."
  },
  {
    id: "cancer-003",
    tema: "Genética del cáncer",
    tipo: "alternativa",
    pregunta: "La metástasis indica:",
    opciones: [
      "Tumor benigno encapsulado",
      "Implantes tumorales discontinuos del tumor primario",
      "Cariotipo normal",
      "Expresión exclusiva de ARN"
    ],
    correcta: 1,
    desarrollo: "Metástasis son implantes tumorales a distancia sin continuidad con el tumor primario."
  },

  {
    id: "neo-001",
    tema: "Pesquisa neonatal",
    tipo: "alternativa",
    pregunta: "El objetivo principal de la pesquisa neonatal es:",
    opciones: [
      "Diagnosticar solo enfermedades adultas",
      "Detectar precozmente enfermedades congénitas tratables",
      "Reemplazar todo diagnóstico clínico",
      "Determinar grupo sanguíneo"
    ],
    correcta: 1,
    desarrollo: "La pesquisa neonatal busca detectar precozmente condiciones congénitas para iniciar tratamiento y reducir daño."
  },
  {
    id: "neo-002",
    tema: "Pesquisa neonatal",
    tipo: "alternativa",
    pregunta: "La muestra típica de pesquisa neonatal se obtiene por:",
    opciones: [
      "Punción de talón",
      "Biopsia hepática",
      "Cariotipo de médula ósea",
      "Western blot de saliva"
    ],
    correcta: 0,
    desarrollo: "La muestra se obtiene habitualmente por punción de talón e impregnación en papel de filtro."
  },

  {
    id: "pre-001",
    tema: "Diagnóstico prenatal",
    tipo: "alternativa",
    pregunta: "¿Cuál es una prueba invasiva de diagnóstico prenatal?",
    opciones: [
      "Ecografía",
      "Suero materno",
      "Amniocentesis",
      "Examen físico neonatal"
    ],
    correcta: 2,
    desarrollo: "La amniocentesis es una técnica invasiva que permite obtener material fetal para estudio."
  },
  {
    id: "pre-002",
    tema: "Diagnóstico prenatal",
    tipo: "alternativa",
    pregunta: "¿Cuál es una indicación de estudio prenatal invasivo?",
    opciones: [
      "Edad materna avanzada",
      "Dolor de cabeza aislado",
      "Miopía",
      "Alergia alimentaria"
    ],
    correcta: 0,
    desarrollo: "Edad materna avanzada, hijo previo con cromosomopatía, screening alterado o historia familiar relevante pueden indicar estudios prenatales."
  },

  {
    id: "des-001",
    tema: "Desarrollo",
    tipo: "desarrollo",
    pregunta: "Explique la diferencia entre cariotipo y cariograma.",
    pauta: "El cariotipo es la constitución cromosómica descrita con nomenclatura; el cariograma es la imagen ordenada de los cromosomas."
  },
  {
    id: "des-002",
    tema: "Desarrollo",
    tipo: "desarrollo",
    pregunta: "Explique por qué una translocación balanceada puede causar abortos recurrentes.",
    pauta: "Aunque el portador puede ser sano porque no pierde ni gana material genético neto, durante la meiosis puede formar gametos desbalanceados con duplicaciones o deleciones."
  },
  {
    id: "des-003",
    tema: "Desarrollo",
    tipo: "desarrollo",
    pregunta: "Compare Southern, Northern y Western blot.",
    pauta: "Southern estudia ADN, Northern estudia ARN mensajero y Western estudia proteínas. Las tres comparten lógica de separación, transferencia y detección."
  },
  {
    id: "des-004",
    tema: "Desarrollo",
    tipo: "desarrollo",
    pregunta: "Explique qué es mosaicismo y cómo puede originarse.",
    pauta: "Mosaicismo es la presencia de dos o más líneas celulares derivadas del mismo cigoto. Puede originarse por errores mitóticos postcigóticos como no disyunción o anaphase lag."
  },
  {
    id: "des-005",
    tema: "Desarrollo",
    tipo: "desarrollo",
    pregunta: "Explique qué diferencia a una enfermedad monogénica de una multifactorial.",
    pauta: "Una enfermedad monogénica depende principalmente de alteraciones en un gen; una multifactorial depende de la interacción entre múltiples genes y factores ambientales."
  },
// =====================
// CITOGENÉTICA EXTRA
// =====================

{
id:"cit-011",
tema:"Citogenética",
tipo:"alternativa",

pregunta:
"Una no disyunción durante meiosis II genera inicialmente:",

opciones:[
"4 gametos alterados",
"2 gametos normales y 2 alterados",
"Solo gametos normales",
"Un mosaico"
],

correcta:1,

desarrollo:
"En meiosis II falla separación de cromátidas hermanas. Resultado: 2 gametos normales y 2 alterados."
},

{
id:"cit-012",
tema:"Citogenética",
tipo:"alternativa",

pregunta:
"¿Qué cromosoma se asocia al síndrome Cri du chat?",

opciones:[
"deleción 4p",
"deleción 5p",
"deleción 22q11",
"trisomía 18"
],

correcta:1,

desarrollo:
"Cri du chat corresponde clásicamente a deleción del brazo corto del cromosoma 5."
},

{
id:"cit-013",
tema:"Citogenética",
tipo:"alternativa",

pregunta:
"Una translocación balanceada se caracteriza por:",

opciones:[
"Pérdida neta de ADN",
"Ganancia neta de ADN",
"Sin ganancia ni pérdida neta",
"Siempre produce síndrome clínico"

],

correcta:2,

desarrollo:
"En translocaciones balanceadas el material genético total suele mantenerse."
},

{
id:"cit-014",
tema:"Citogenética",
tipo:"alternativa",

pregunta:
"¿Qué evento produce una línea celular diferente derivada del mismo cigoto?",

opciones:[
"Haploinsuficiencia",
"Mosaicismo",
"Impronta",
"Pleiotropía"
],

correcta:1,

desarrollo:
"Mosaicismo corresponde a dos o más líneas celulares derivadas del mismo cigoto."
},

{
id:"cit-015",
tema:"Citogenética",
tipo:"desarrollo",

pregunta:
"Explique la diferencia entre aneuploidía y euploidía.",

pauta:
"Aneuploidía corresponde a ganancia o pérdida individual de cromosomas; euploidía implica múltiplos completos del número haploide."
},

// =====================
// TÉCNICAS
// =====================

{
id:"mol-009",
tema:"Métodos moleculares",
tipo:"alternativa",

pregunta:
"¿Qué técnica detecta proteínas específicas usando anticuerpos?",

opciones:[
"PCR",
"Southern",
"Western blot",
"Cariotipo"
],

correcta:2,

desarrollo:
"Western utiliza anticuerpos para identificar proteínas específicas."
},

{
id:"mol-010",
tema:"Métodos moleculares",
tipo:"alternativa",

pregunta:
"¿Qué técnica permite amplificar ADN incluso a partir de cantidades mínimas?",

opciones:[
"PCR",
"FISH",
"Northern",
"Bandeo C"

],

correcta:0,

desarrollo:
"La PCR permite amplificación exponencial de ADN."
},

{
id:"mol-011",
tema:"Métodos moleculares",
tipo:"desarrollo",

pregunta:
"Explique las etapas de PCR.",

pauta:
"Desnaturalización, alineamiento y extensión."
},

// =====================
// MENDEL
// =====================

{
id:"men-008",
tema:"Herencia",
tipo:"alternativa",

pregunta:
"¿Qué ocurre en codominancia?",

opciones:[
"Un alelo domina completamente",
"Ambos alelos se expresan",
"Ningún alelo se expresa",
"Solo expresa alelo materno"

],

correcta:1,

desarrollo:
"En codominancia ambos alelos se expresan simultáneamente."
},

{
id:"men-009",
tema:"Herencia",
tipo:"alternativa",

pregunta:
"Una enfermedad autosómica dominante típicamente muestra:",

opciones:[
"Saltos generacionales frecuentes",
"Transmisión vertical",

"Solo afecta hombres",

"Solo homocigotos"

],

correcta:1,

desarrollo:
"La transmisión vertical es característica de herencia dominante."
},

{
id:"men-010",
tema:"Herencia",
tipo:"desarrollo",

pregunta:
"Diferencie penetrancia y expresividad.",

pauta:
"Penetrancia es frecuencia de expresión; expresividad es intensidad de expresión."
},

// =====================
// CÁNCER
// =====================

{
id:"can-004",
tema:"Cáncer",

tipo:"alternativa",

pregunta:
"RB1 es ejemplo clásico de:",

opciones:[
"Oncogén",
"Gen supresor tumoral",
"Gen mitocondrial",
"ARN no codificante"

],

correcta:1,

desarrollo:
"RB1 corresponde a gen supresor tumoral."
},

{
id:"can-005",
tema:"Cáncer",

tipo:"alternativa",

pregunta:
"Un protooncogén activado se transforma en:",

opciones:[
"supresor",
"oncogén",
"gen letal",
"microARN"

],

correcta:1,

desarrollo:
"La activación de protooncogenes genera oncogenes."
},

{
id:"can-006",
tema:"Cáncer",
tipo:"desarrollo",

pregunta:
"Explique la hipótesis de los dos golpes.",

pauta:
"Se requieren dos eventos para inactivar ambas copias de genes supresores."
},

// =====================
// PRENATAL
// =====================

{
id:"pre-003",
tema:"Prenatal",
tipo:"alternativa",

pregunta:
"¿Qué procedimiento obtiene vellosidades coriales?",

opciones:[
"PCR",
"Biopsia de vellosidades",
"FISH",
"Cariograma"

],

correcta:1,

desarrollo:
"La biopsia corial obtiene tejido placentario."
},

{
id:"pre-004",
tema:"Prenatal",
tipo:"alternativa",

pregunta:
"El riesgo principal de procedimientos invasivos prenatales es:",

opciones:[
"Infertilidad",
"Aborto",
"Cáncer",
"Triploidía"

],

correcta:1,

desarrollo:
"Todo procedimiento invasivo presenta pequeño riesgo de aborto."
}

];

// ===================================
// GENERADOR DE PRUEBAS
// ===================================

function shuffleFinalQuestions(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const FINAL_TESTS = [];

for (let i = 1; i <= 5; i++) {

  FINAL_TESTS.push({

    id:`final-${i}`,

    titulo:`🧪 Prueba Final ${i}`,

    preguntas:shuffleFinalQuestions(
      FINAL_QUESTION_BANK
    ).slice(0,50)

  });

}