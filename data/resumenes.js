const RESUMENES = {
citogenetica: {
    titulo: "Citogenética Humana (Completo)",
    fuente: "Teórico + TP + Thompson + Resúmenes + Integración Clínica",
    secciones: [
      {
        tipo: "texto",
        titulo: "1. Introducción a la Citogenética",
        contenido: [
          "La citogenética es la rama de la genética que se enfoca en el estudio de los cromosomas humanos, analizando su estructura, organización y las diversas alteraciones que pueden derivar en patologías. A diferencia de las mutaciones génicas puntuales, las cromosomopatías involucran grandes regiones de ADN que son visibles mediante microscopía.",
          "Los cromosomas son estructuras compuestas por ADN y proteínas, principalmente histonas, cuya función esencial es compactar el material genético para permitir su almacenamiento seguro y una distribución equitativa durante la división celular. Debido a que un solo cromosoma contiene cientos de genes, cualquier alteración en él suele manifestarse con cuadros clínicos complejos que afectan múltiples sistemas."
        ]
      },
      {
        tipo: "alerta",
        titulo: "¡No confundir!",
        contenido: "Muchos suelen confundir la genética molecular con la citogenética. Recordá: la <span class='subtitulo-celeste'>citogenética</span> mira 'el mapa completo' (bloques visibles al microscopio), mientras que la <span class='subtitulo-celeste'>molecular</span> analiza la secuencia de bases del ADN."
      },
      {
        tipo: "texto",
        titulo: "2. Importancia Clínica y Frecuencia",
        contenido: [
          "Estas anomalías tienen un impacto masivo en la salud pública y la medicina reproductiva. Se estima que participan en aproximadamente el 20% de los defectos congénitos y son la causa de cerca del 60% de los abortos espontáneos de primer trimestre.",
          "En la población general, afectan a entre el 0,6% y el 1% de los recién nacidos vivos. Mientras que muchas alteraciones severas resultan en la muerte fetal precoz, otras permiten la supervivencia pero conllevan discapacidad intelectual y malformaciones físicas que requieren seguimiento multidisciplinario."
        ]
      },
      {
        tipo: "lista",
        titulo: "Situaciones donde solicitar estudio citogenético",
        items: [
          "Presencia de malformaciones congénitas múltiples o dismorfias sin diagnóstico evidente.",
          "Retraso del desarrollo o discapacidad intelectual de origen desconocido.",
          "Casos de ambigüedad genital en el recién nacido.",
          "Antecedentes de infertilidad, azoospermia o abortos recurrentes en la pareja.",
          "Gestaciones con edad materna avanzada (generalmente ≥ 35 años).",
          "Estudio de caracterización y pronóstico en ciertos tipos de cáncer."
        ]
      },
      {
        tipo: "alerta",
        titulo: "Pregunta frecuente de examen",
        contenido: "Suelen preguntar las indicaciones. Un dato clave: ante <span class='subtitulo-celeste'>abortos recurrentes (2 o más)</span>, el estudio citogenético es obligatorio para descartar translocaciones balanceadas en los padres."
      },
      {
        tipo: "texto",
        titulo: "3. Anatomía del Cromosoma",
        contenido: [
          "Para que la célula pueda segregarlos correctamente, los cromosomas presentan una estructura especializada. Un cromosoma duplicado consta de dos cromátidas hermanas, que son copias idénticas generadas tras la replicación y unidas por el centrómero.",
          "El centrómero es fundamental, ya que allí se ensambla el cinetocoro donde se unen las fibras del huso mitótico. El centrómero divide al cromosoma en un brazo corto denominado 'p' (de petit) y un brazo largo denominado 'q'.",
          "En los extremos se ubican los telómeros, secuencias repetitivas que protegen la integridad del ADN terminal; su acortamiento excesivo está directamente relacionado con el envejecimiento y la senescencia celular."
        ]
      },
      
      {
        tipo: "lista",
        titulo: "4. Clasificación según la posición del centrómero",
        items: [
          "<span class='subtitulo-celeste'>Metacéntrico:</span> El centrómero está en el centro, dejando brazos de tamaño similar.",
          "<span class='subtitulo-celeste'>Submetacéntrico:</span> El centrómero está desplazado, por lo que el brazo p es notablemente más corto que el q.",
          "<span class='subtitulo-celeste'>Acrocéntrico:</span> El centrómero está muy cerca de un extremo; el brazo p es diminuto y suele contener satélites con genes para ARN ribosomal.",
          "<span class='subtitulo-celeste'>Telocéntrico:</span> El centrómero está en el extremo absoluto. Este tipo no se encuentra de forma natural en humanos."
        ]
      },
      {
        tipo: "texto",
        titulo: "5. Cariograma vs. Cariotipo",
        contenido: [
          "Aunque a veces se usan indistintamente, representan conceptos diferentes. El cariograma es el material visual: la imagen real de los cromosomas ordenados por tamaño y forma bajo el microscopio.",
          "Por el contrario, el cariotipo es la fórmula escrita que resume el hallazgo. Por ejemplo, '46,XY' es el cariotipo de un varón sano, mientras que '47,XX,+21' describe a una mujer con un cromosoma 21 adicional."
        ]
      },
      {
        tipo: "alerta",
        titulo: "Regla mnemotécnica",
        contenido: "Cariograma = la <span class='subtitulo-celeste'>'Gramafotografía'</span> (la imagen visual). Cariotipo = el <span class='subtitulo-celeste'>'Tipo de texto'</span> (la descripción escrita)."
      },
      {
        tipo: "texto",
        titulo: "6. Obtención del Cariotipo en Laboratorio",
        contenido: [
          "Dado que necesitamos cromosomas condensados, el estudio requiere células en división activa. Generalmente utilizamos linfocitos T de sangre periférica, ya que son fáciles de obtener y nuclear.",
          "Como estas células no suelen dividirse espontáneamente en la sangre circulante, aplicamos fitohemaglutinina para estimular su proliferación artificialmente en el medio de cultivo."
        ]
      },
      {
        tipo: "lista",
        titulo: "7. Pasos del proceso técnico",
        items: [
          "<span class='subtitulo-celeste'>Cultivo:</span> Incubación de las células con medios nutritivos a 37°C.",
          "<span class='subtitulo-celeste'>Estimulación:</span> Uso de fitohemaglutinina para inducir la mitosis.",
          "<span class='subtitulo-celeste'>Detención:</span> Se añade colchicina para inhibir el huso mitótico y 'congelar' las células en metafase.",
          "<span class='subtitulo-celeste'>Choque Hipotónico:</span> Se añade una solución salina diluida que hace entrar agua a la célula, hinchándola para que los cromosomas se separen.",
          "<span class='subtitulo-celeste'>Fijación:</span> Uso de solución Carnoy para preservar la estructura y eliminar detritos.",
          "<span class='subtitulo-celeste'>Bandeo y Observación:</span> Tinción específica y análisis microscópico para identificar el patrón de bandas."
        ]
      },
      {
        tipo: "alerta",
        titulo: "Ojo aquí",
        contenido: "Es vital recordar el orden: primero estimulás (<span class='subtitulo-celeste'>fitohemaglutinina</span>) y al final detenés (<span class='subtitulo-celeste'>colchicina</span>). Sin la colchicina, nunca verías los cromosomas condensados."
      },
      {
        tipo: "texto",
        titulo: "8. Resolución Cromosómica",
        contenido: [
          "La capacidad de detectar detalles depende del nivel de condensación del ADN: a mayor longitud del cromosoma, más bandas visibles. Una metafase estándar nos permite ver unas 450-550 bandas.",
          "Sin embargo, si analizamos células en prometafase (donde el ADN está menos compacto y estirado), podemos llegar a 850 bandas, permitiendo ver alteraciones estructurales mucho más pequeñas que pasarían desapercibidas de otro modo."
        ]
      },
      {
        tipo: "lista",
        titulo: "9. Tipos de Bandeo Cromosómico",
        items: [
          "<span class='subtitulo-celeste'>Bandeo G (Giemsa):</span> El estándar. Usa tripsina para revelar bandas oscuras (ricas en A-T, pocos genes) y claras (ricas en C-G, muchos genes activos).",
          "<span class='subtitulo-celeste'>Bandeo R (Reverso):</span> El patrón opuesto al G, excelente para estudiar los extremos (telómeros) de los cromosomas.",
          "<span class='subtitulo-celeste'>Bandeo C:</span> Tiñe específicamente la heterocromatina constitutiva que se encuentra principalmente en los centrómeros.",
          "<span class='subtitulo-celeste'>Bandeo NOR:</span> Identifica las regiones organizadoras nucleolares en los tallos de los cromosomas acrocéntricos."
        ]
      },
      {
        tipo: "texto",
        titulo: "10. Técnica FISH (Hibridación Fluorescente In Situ)",
        contenido: [
          "Es una técnica citogenético-molecular que utiliza sondas de ADN marcadas con flúor. Estas sondas se unen por complementariedad a secuencias específicas en el genoma del paciente y brillan bajo un microscopio de fluorescencia.",
          "Su gran valor es que permite detectar microdeleciones indetectables para el cariotipo común y puede usarse incluso en células que no están dividiéndose (interfase), lo que acelera los resultados diagnósticos en casos urgentes."
        ]
      },
      
      {
        tipo: "lista",
        titulo: "11. Detalles del FISH",
        items: [
          "<span class='subtitulo-celeste'>Sondas:</span> Pueden ser de locus específico (para un gen), centroméricas (para contar cromosomas) o de pintado completo.",
          "<span class='subtitulo-celeste'>Ventajas:</span> Ofrece una resolución mucho más alta que el bandeo estándar y permite un análisis rápido sin esperar el cultivo.",
          "<span class='subtitulo-celeste'>Limitaciones:</span> Es una técnica dirigida; el médico debe sospechar qué región buscar, ya que no permite ver todo el genoma a la vez."
        ]
      },
      {
        tipo: "alerta",
        titulo: "Dato importante",
        contenido: "El FISH es la técnica de elección para <span class='subtitulo-celeste'>microdeleciones</span>. Además, recordá que el FISH NO necesita obligatoriamente que la célula se esté dividiendo."
      },
      {
        tipo: "texto",
        titulo: "12. Alteraciones Numéricas y No Disyunción",
        contenido: [
          "Las aneuploidías son cambios en el número de cromosomas individuales (ganancia o pérdida). La causa más frecuente es la no disyunción meiótica: una falla en la separación correcta de los cromosomas homólogos o cromátidas hermanas.",
          "Este error genera gametos con un cromosoma de más o de menos. Si ese gameto se fecunda, el embrión tendrá una trisomía o monosomía. La probabilidad de no disyunción aumenta significativamente con la edad materna avanzada."
        ]
      },
      
      {
        tipo: "alerta",
        titulo: "Recordatorio crucial",
        contenido: "La <span class='subtitulo-celeste'>única monosomía completa</span> compatible con la vida es la del Síndrome de Turner (45,X). Las monosomías autosómicas (ej. perder un cromosoma 1) siempre resultan en aborto."
      },
      {
        tipo: "texto",
        titulo: "13. Mosaicismo",
        contenido: [
          "Ocurre cuando una persona tiene dos o más líneas celulares con diferente constitución genética derivadas del mismo cigoto. Esto se debe a un error en la mitosis post-fecundación (no disyunción mitótica).",
          "Dependiendo de qué tan temprano ocurra el error en el desarrollo embrionario, la proporción de células afectadas variará. Esto explica por qué algunos pacientes tienen síntomas mucho más leves que otros a pesar de tener el mismo síndrome."
        ]
      },
      {
        tipo: "lista",
        titulo: "14. Alteraciones Estructurales",
        items: [
          "<span class='subtitulo-celeste'>Deleción:</span> Pérdida de un fragmento cromosómico, resultando en pérdida de material genético esencial.",
          "<span class='subtitulo-celeste'>Duplicación:</span> Repetición de un segmento, lo que aumenta la dosis génica y puede alterar el desarrollo.",
          "<span class='subtitulo-celeste'>Inversión:</span> Un segmento se rompe y se reinserta girado 180°. Puede ser pericéntrica (incluye centrómero) o paracéntrica.",
          "<span class='subtitulo-celeste'>Translocación Recíproca:</span> Intercambio de fragmentos entre cromosomas no homólogos; suele ser balanceada en el portador.",
          "<span class='subtitulo-celeste'>Translocación Robertsoniana:</span> Fusión de dos cromosomas acrocéntricos (13, 14, 15, 21, 22); causa principal de síndrome de Down hereditario."
        ]
      },
      {
        tipo: "alerta",
        titulo: "Cuidado con esto",
        contenido: "En las translocaciones <span class='subtitulo-celeste'>balanceadas</span>, el portador suele ser sano. El problema es que sus gametos pueden estar desbalanceados, lo que pone en riesgo a su descendencia."
      },
      {
        tipo: "texto",
        titulo: "15. Sitios Frágiles",
        contenido: [
          "Son regiones que presentan brechas o quiebres microscópicos bajo ciertas condiciones de cultivo. El sitio frágil más relevante es el fra(X), asociado al Síndrome de X Frágil, la causa hereditaria más común de discapacidad intelectual en varones debido a una expansión de tripletes."
        ]
      },
      {
        tipo: "lista",
        titulo: "16. Síndrome de Down (Trisomía 21)",
        items: [
          "<span class='subtitulo-celeste'>Mecanismos:</span> 95% trisomía libre por no disyunción meiótica, 4% translocación Robertsoniana y 1% mosaicismo.",
          "<span class='subtitulo-celeste'>Clínica:</span> Hipotonía neonatal, pliegue palmar único, fisuras palpebrales oblicuas y rasgos faciales característicos.",
          "<span class='subtitulo-celeste'>Riesgos asociados:</span> Cardiopatías congénitas, mayor probabilidad de leucemia infantil y desarrollo precoz de enfermedad de Alzheimer."
        ]
      },
      
      {
        tipo: "lista",
        titulo: "17. Síndromes de Edwards y Patau",
        items: [
          "<span class='subtitulo-celeste'>Edwards (Trisomía 18):</span> Presenta retraso del crecimiento, occipucio prominente, puños cerrados con dedos sobrepuestos y malformaciones graves.",
          "<span class='subtitulo-celeste'>Patau (Trisomía 13):</span> Muy severo; incluye holoprosencefalia, labio y paladar hendido, y polidactilia. La supervivencia suele ser corta."
        ]
      },
      {
        tipo: "lista",
        titulo: "18. Síndrome de Turner (45,X)",
        items: [
          "<span class='subtitulo-celeste'>Definición:</span> Es la única monosomía completa compatible con la vida en humanos.",
          "<span class='subtitulo-celeste'>Clínica:</span> Afecta a mujeres y cursa con talla baja, cuello alado (pterygium colli), linfedema al nacer y falla ovárica primaria (infertilidad)."
        ]
      },
      {
        tipo: "lista",
        titulo: "19. Síndrome de Klinefelter (47,XXY)",
        items: [
          "<span class='subtitulo-celeste'>Definición:</span> Afecta a varones que poseen un cromosoma X adicional.",
          "<span class='subtitulo-celeste'>Clínica:</span> Talla alta, ginecomastia, testículos pequeños y azoospermia. Suele diagnosticarse en la pubertad."
        ]
      },
      {
        tipo: "lista",
        titulo: "20. Síndromes 47,XXX y 47,XYY",
        items: [
          "<span class='subtitulo-celeste'>Fenotipo General:</span> Presentan una clínica muy leve y muchas personas pasan toda su vida sin ser diagnosticadas.",
          "<span class='subtitulo-celeste'>Características:</span> El signo más constante es una estatura elevada. El desarrollo sexual y la fertilidad suelen ser normales.",
          "<span class='subtitulo-celeste'>Desarrollo cognitivo:</span> En ocasiones pueden asociarse a pequeñas dificultades en el aprendizaje o retrasos leves en el lenguaje."
        ]
      },
      {
        tipo: "lista",
        titulo: "21. Conceptos Clave para el Examen",
        items: [
          "La <span class='subtitulo-celeste'>colchicina</span> detiene el ciclo en metafase al inhibir el huso mitótico.",
          "La <span class='subtitulo-celeste'>prometafase</span> ofrece una resolución mayor (850 bandas) que la metafase estándar.",
          "Las translocaciones <span class='subtitulo-celeste'>Robertsonianas</span> solo ocurren en cromosomas acrocéntricos.",
          "La mayoría de las aneuploidías ocurren por <span class='subtitulo-celeste'>no disyunción</span> durante la meiosis materna.",
          "El <span class='subtitulo-celeste'>mosaicismo</span> ocurre por un error mitótico después de la fecundación (post-cigótico)."
        ]
      },
      {
        tipo: "alerta",
        titulo: "Diferenciación rápida",
        contenido: "Si te preguntan por Prader-Willi vs Angelman, recordá: misma región (15q11), pero <span class='subtitulo-celeste'>Prader-Willi es falta del alelo paterno</span> y <span class='subtitulo-celeste'>Angelman es falta del alelo materno</span>."
      },
      {
        tipo: "lista",
        titulo: "Glosario Completo de Citogenética",
        items: [
          "<span class='subtitulo-celeste'>Aneuploidía:</span> Alteración en el número de cromosomas que no es múltiplo exacto del juego haploide (23 en humanos). Ejemplos: trisomías (47) y monosomías (45).",
          "<span class='subtitulo-celeste'>Cariotipo vs. Cariograma:</span> El cariograma es la imagen real (foto) de los cromosomas ordenados bajo el microscopio; el cariotipo es la fórmula escrita estandarizada que lo describe (ej. 46,XX).",
          "<span class='subtitulo-celeste'>Cromosoma Acrocéntrico:</span> Cromosoma con el centrómero muy cerca del extremo (brazo 'p' diminuto). En humanos son los pares 13, 14, 15, 21 y 22. Son los únicos que sufren translocaciones Robertsonianas.",
          "<span class='subtitulo-celeste'>Deleción / Microdeleción:</span> Pérdida de un fragmento de ADN. Si es lo suficientemente grande para verse al microscopio óptico es deleción; si requiere FISH o Microarreglos para detectarse, es microdeleción.",
          "<span class='subtitulo-celeste'>Fitohemaglutinina:</span> Mitógeno utilizado in vitro en el laboratorio para 'despertar' a los linfocitos T de la sangre y obligarlos a entrar en mitosis.",
          "<span class='subtitulo-celeste'>Hibridación (FISH):</span> Unión de una sonda de ADN marcada con fluorescencia a su secuencia complementaria exacta en el genoma del paciente.",
          "<span class='subtitulo-celeste'>Inversión (Pericéntrica vs. Paracéntrica):</span> Un segmento cromosómico se rompe y se reinserta girado 180°. Si el giro incluye al centrómero es Pericéntrica; si ocurre solo en un brazo, es Paracéntrica.",
          "<span class='subtitulo-celeste'>Isocromosoma:</span> Cromosoma anormal formado por una división transversal (horizontal) del centrómero, resultando en la pérdida de un brazo y la duplicación del otro (imagen en espejo).",
          "<span class='subtitulo-celeste'>Mosaicismo:</span> Presencia de dos o más líneas celulares genéticamente distintas en un mismo individuo, originadas a partir de un error mitótico post-fecundación.",
          "<span class='subtitulo-celeste'>No disyunción:</span> Falla en la separación correcta de los cromosomas homólogos (Meiosis I) o de las cromátidas hermanas (Meiosis II o Mitosis). Es la causa #1 de aneuploidías.",
          "<span class='subtitulo-celeste'>Poliploidía:</span> Alteración numérica generalmente letal donde el total de cromosomas es un múltiplo exacto de 23, pero mayor a 46 (ej. Triploidía = 69 cromosomas, Tetraploidía = 92).",
          "<span class='subtitulo-celeste'>Prometafase:</span> Etapa del ciclo celular donde los cromosomas están más estirados que en la metafase, permitiendo un bandeo de alta resolución (hasta 850 bandas) para ver microalteraciones.",
          "<span class='subtitulo-celeste'>Sonda (Probe):</span> Fragmento de ADN o ARN conocido y marcado (ej. con un fluoróforo) que actúa como un 'sabueso' para buscar su secuencia complementaria en la muestra.",
          "<span class='subtitulo-celeste'>Telómero:</span> Extremo protector del cromosoma constituido por secuencias repetitivas que evitan su degradación y fusión accidental con otros cromosomas.",
          "<span class='subtitulo-celeste'>Translocación Robertsoniana:</span> Fusión exclusiva de dos cromosomas acrocéntricos por sus centrómeros, con pérdida irrelevante de sus brazos cortos. Es una causa hereditaria del Síndrome de Down."
        ]
      }
    ]
  },

tecnicas_mol: {
    titulo: "Capítulo 2: Técnicas de Biología Molecular",
    fuente: "Teórico + TP2 + Integración Clínica Forense",
    secciones: [
      {
        tipo: "texto",
        titulo: "1. Introducción al Análisis Molecular",
        contenido: [
          "A diferencia de la citogenética, que estudia los cromosomas a nivel microscópico, las <span class='subtitulo-celeste'>técnicas de biología molecular</span> trabajan con un nivel de resolución muchísimo más alto, típicamente por debajo del millón (10⁶) de pares de bases.",
          "El análisis del ADN, ARN y las proteínas a este nivel submicroscópico permite acceder a la secuencia exacta de la vida y tiene múltiples aplicaciones directas en la medicina moderna."
        ]
      },
      {
        tipo: "lista",
        titulo: "Aplicaciones Clínicas Principales",
        items: [
          "<span class='subtitulo-celeste'>Diagnóstico confirmatorio:</span> Identificación de patologías que escapan a la evaluación citogenética estándar por ser demasiado pequeñas.",
          "<span class='subtitulo-celeste'>Detección de portadores:</span> Identificación de individuos sanos que portan alelos recesivos de enfermedades genéticas.",
          "<span class='subtitulo-celeste'>Prevención y pronóstico:</span> Diagnóstico prenatal y diagnóstico presintomático en sujetos de alto riesgo (muy utilizado en cáncer hereditario).",
          "<span class='subtitulo-celeste'>Medicina legal:</span> Análisis en medicina forense, peritajes e identificación inequívoca de personas."
        ]
      },
      {
        tipo: "alerta",
        titulo: "Concepto Clave",
        contenido: "Recuerda el límite de resolución: si buscas una trisomía entera, pides un cariotipo. Si buscas la mutación de una sola letra en un gen específico, necesitas biología molecular."
      },
      {
        tipo: "texto",
        titulo: "2. Amplificación del ADN (Técnicas de PCR)",
        contenido: [
          "La <span class='subtitulo-celeste'>Reacción en Cadena de la Polimerasa (PCR)</span> es el paso inicial y fundamental de la inmensa mayoría de los estudios moleculares. Consiste en la amplificación in vitro de un fragmento específico de ADN para generar millones de copias de forma exponencial, destacando por ser una técnica rápida, altamente sensible y específica."
        ]
      },
      {
        tipo: "lista",
        titulo: "Componentes y Ciclos de la PCR Clásica",
        items: [
          "<span class='subtitulo-celeste'>Componentes:</span> ADN molde, cebadores o primers (oligonucleótidos complementarios a la región que limitan la zona a copiar), desoxinucleótidos libres (dNTPs) y una enzima termoestable (<span class='subtitulo-celeste'>Taq polimerasa</span>).",
          "<span class='subtitulo-celeste'>1. Desnaturalización (94-95°C):</span> El calor rompe los puentes de hidrógeno, separando la doble hebra de ADN en dos hebras simples.",
          "<span class='subtitulo-celeste'>2. Alineamiento/Hibridación (50-65°C):</span> Se baja la temperatura para que los cebadores se unan por complementariedad a sus secuencias blanco en las hebras molde.",
          "<span class='subtitulo-celeste'>3. Extensión (72°C):</span> Temperatura óptima para que la Taq polimerasa sintetice la cadena complementaria agregando nucleótidos (dNTPs)."
        ]
      },
      
      {
        tipo: "lista",
        titulo: "Variantes principales de la PCR",
        items: [
          "<span class='subtitulo-celeste'>RT-PCR (Transcriptasa Reversa-PCR):</span> Utilizada para medir la expresión génica o detectar virus de ARN (como SARS-CoV-2). Primero se extrae el ARNm y se retrotranscribe a ADN complementario (ADNc) usando la enzima <span class='subtitulo-celeste'>transcriptasa reversa</span>. Luego se amplifica ese ADNc.",
          "<span class='subtitulo-celeste'>qPCR (PCR en Tiempo Real):</span> Modifica la técnica original agregando sistemas de fluorescencia (como SYBR Green) para medir verdaderamente y cuantificar la cantidad de material que se va produciendo ciclo a ciclo.",
          "<span class='subtitulo-celeste'>qPCR TaqMan:</span> Emplea, además de los cebadores, una sonda específica con un fluoróforo y una molécula extinguidora. Al ser degradada por la polimerasa durante la síntesis, libera luz que el equipo detecta, aumentando drásticamente su especificidad y precisión."
        ]
      },
      {
        tipo: "alerta",
        titulo: "¡Trampa de examen!",
        contenido: "Suelen confundir RT-PCR con Real Time PCR. RT significa <span class='subtitulo-celeste'>Reverse Transcription</span> (pasar ARN a ADN). La de tiempo real se abrevia <span class='subtitulo-celeste'>qPCR</span> (Quantitative PCR)."
      },
      {
        tipo: "texto",
        titulo: "3. Técnicas de Secuenciación",
        contenido: [
          "Estas técnicas permiten leer la secuencia exacta, letra por letra (nucleótidos), de un fragmento de ADN o de un genoma completo."
        ]
      },
      {
        tipo: "lista",
        titulo: "Generaciones de Secuenciación",
        items: [
          "<span class='subtitulo-celeste'>1° Generación (Sanger):</span> Utiliza didesoxinucleótidos (<span class='subtitulo-celeste'>ddNTPs</span>) modificados que carecen del grupo oxidrilo (3' OH). Al incorporarse, impiden que la cadena siga creciendo. Cada ddNTP se marca con un color fluorescente distinto. Los fragmentos se separan por electroforesis capilar y un láser lee el color final de cada uno, armando la secuencia.",
          "<span class='subtitulo-celeste'>2° Generación (NGS / Secuenciación Masiva):</span> Utiliza micromatrices y permite secuenciar fragmentos más grandes, procesando genomas completos o múltiples muestras en paralelo. Es mucho más barata, rápida y precisa, siendo vital hoy para secuenciar paneles de genes o exomas enteros.",
          "<span class='subtitulo-celeste'>3° Generación (Nanoporos):</span> Su concepto revolucionario reside en estudiar cadenas individuales de ADN pasando físicamente a través de poros microscópicos en una membrana, <span class='subtitulo-celeste'>sin requerir amplificación por PCR previa</span>. Los ligeros cambios de corriente eléctrica traducen la secuencia en tiempo real."
        ]
      },
      
      {
        tipo: "alerta",
        titulo: "Ojo al detalle bioquímico",
        contenido: "El secreto del método de Sanger es la ausencia del <span class='subtitulo-celeste'>grupo 3' OH</span> en los ddNTPs. Sin ese oxígeno, la polimerasa no puede formar el enlace fosfodiéster con el siguiente nucleótido, lo que causa la 'terminación de cadena'."
      },
      {
        tipo: "texto",
        titulo: "4. Las Técnicas de Transferencia (Blots)",
        contenido: [
          "Son metodologías clásicas que combinan la separación de moléculas en geles con la hibridación, sirviendo para identificar moléculas específicas dentro de mezclas biológicas complejas."
        ]
      },
      {
        tipo: "lista",
        titulo: "Tipos de Blots",
        items: [
          "<span class='subtitulo-celeste'>Southern Blot (ADN):</span> El ADN se corta con enzimas de restricción, se separa por tamaño en gel de agarosa y se transfiere a una membrana. Se usan sondas de ADN marcadas que hibridan con la región de interés para revelar deleciones grandes o alteraciones estructurales.",
          "<span class='subtitulo-celeste'>Northern Blot (ARN):</span> Se enfoca en cuantificar ARNm para estudiar la expresión de un gen. El ARN se separa en geles desnaturalizantes (con formaldehído), se transfiere y se detecta con sondas complementarias.",
          "<span class='subtitulo-celeste'>Western Blot (Proteínas):</span> Comprueba la existencia y tamaño de una proteína (ej. distrofina). Las proteínas se aíslan y desnaturalizan en un gel de poliacrilamida (<span class='subtitulo-celeste'>SDS-PAGE</span>). Se transfieren a una membrana (PVDF) y se detectan utilizando <span class='subtitulo-celeste'>anticuerpos específicos</span> en lugar de sondas de ácidos nucleicos."
        ]
      },
      
      {
        tipo: "alerta",
        titulo: "Regla mnemotécnica clásica",
        contenido: "Para no mezclar qué analiza cada Blot, recuerda <span class='subtitulo-celeste'>SNoW DRoP</span>. S=Southern -> D=DNA. N=Northern -> R=RNA. o=nada. W=Western -> P=Protein."
      },
      {
        tipo: "texto",
        titulo: "5. Microarreglos (Microarrays)",
        contenido: [
          "Esta tecnología se basa en adherir miles de sondas de nucleótidos complementarias a diferentes genes en un microchip (generalmente de vidrio o silicio)."
        ]
      },
      {
        tipo: "lista",
        titulo: "Aplicaciones Clínicas de Microarreglos",
        items: [
          "<span class='subtitulo-celeste'>Hibridación Genómica Comparativa (CGH):</span> Es la gran aplicación clínica. Compara un 'ADN problema' marcado (ej. verde) con un 'ADN control' sano marcado (ej. rojo). Al incubarlos juntos en el chip, compiten por unirse a las sondas.",
          "<span class='subtitulo-celeste'>Color neutro/Amarillo:</span> Cantidad de ADN normal en el paciente (2 copias en equilibrio con el control).",
          "<span class='subtitulo-celeste'>Color Verde (Paciente):</span> Indica que hay una duplicación o amplificación de esa zona del genoma en el paciente.",
          "<span class='subtitulo-celeste'>Color Rojo (Control):</span> Indica que al paciente le falta material genético en esa zona (deleción).",
          "<span class='subtitulo-celeste'>Microarreglos de Expresión:</span> Confrontan ARN tumoral y normal (retrotranscritos a ADNc) para observar exactamente qué genes están sobreexpresados o silenciados en un cáncer."
        ]
      },
      
      {
        tipo: "texto",
        titulo: "6. Estudio de Polimorfismos y Medicina Forense",
        contenido: [
          "Existen variaciones menores en la secuencia del ADN humano que no necesariamente causan enfermedad, pero que nos hacen genéticamente únicos. Estas variaciones se conocen como <span class='subtitulo-celeste'>polimorfismos</span>."
        ]
      },
      {
        tipo: "lista",
        titulo: "Tipos de Polimorfismos",
        items: [
          "<span class='subtitulo-celeste'>SNP (Single Nucleotide Polymorphism):</span> El cambio de una sola letra (base) en la secuencia del ADN.",
          "<span class='subtitulo-celeste'>RFLP (Fragmentos de Restricción):</span> Variante donde el cambio de bases en el ADN crea o destruye el sitio de reconocimiento y corte para una enzima de restricción específica.",
          "<span class='subtitulo-celeste'>INDEL:</span> Pequeñas inserciones o deleciones de fragmentos cortos de ADN."
        ]
      },
      {
        tipo: "lista",
        titulo: "Microsatélites y la Huella Genética",
        items: [
          "Para la identificación de personas, peritajes forenses y pruebas de paternidad, se estudian fragmentos de ADN repetitivo ubicados en zonas no codificantes.",
          "<span class='subtitulo-celeste'>Minisatélites (VNTR):</span> Repeticiones de 10 a 100 pares de bases. Se analizaban históricamente mediante Southern Blot.",
          "<span class='subtitulo-celeste'>Microsatélites (STR - Short Tandem Repeats):</span> Secuencias más cortas (2 a 7 pb). Son el estándar actual porque, al ser pequeños, se amplifican rápida y económicamente mediante PCR."
        ]
      },
      {
        tipo: "texto",
        titulo: "7. Análisis Forense: Sistema CODIS",
        contenido: [
          "Para trazar una huella genética irrefutable, protocolos como el CODIS estudian en simultáneo 13 o más marcadores STR altamente polimórficos.",
          "Tras amplificarlos con PCR usando cebadores fluorescentes, la muestra pasa por electroforesis capilar generando un gráfico llamado <span class='subtitulo-celeste'>electroferograma</span>.",
          "La lectura es directa: si se observa <span class='subtitulo-celeste'>un solo pico</span> en un marcador, la persona es homocigota (heredó repeticiones del mismo tamaño de ambos padres). Si se observan <span class='subtitulo-celeste'>dos picos</span>, es heterocigota (heredó tamaños distintos). Contrastando estos picos se establece filiación o identidad criminal."
        ]
      },
      
      {
        tipo: "alerta",
        titulo: "Análisis de Paternidad",
        contenido: "En un electroferograma de paternidad, el hijo siempre debe tener en cada marcador STR un pico (tamaño) que coincida exactamente con la madre, y su otro pico debe coincidir forzosamente con el del padre biológico."
      },
      {
        tipo: "lista",
        titulo: "Conceptos Clave para el Examen",
        items: [
          "La polimerasa usada en la PCR debe ser termoestable (Taq) para sobrevivir a los 95°C de la etapa de desnaturalización.",
          "Para detectar virus ARN (como VIH o COVID) se requiere obligatoriamente una <span class='subtitulo-celeste'>Transcriptasa Reversa</span> antes de la PCR.",
          "La secuenciación de 3° Generación (Nanoporos) es la única que prescinde totalmente de la amplificación previa por PCR.",
          "El Array-CGH es la mejor técnica para diagnosticar microdeleciones o microduplicaciones a nivel de todo el genoma."
        ]
      },
      {
        tipo: "lista",
        titulo: "Glosario de Biología Molecular",
        items: [
          "<span class='subtitulo-celeste'>ADNc (ADN complementario):</span> ADN generado a partir de ARNm; no contiene intrones, solo las secuencias codificantes (exones).",
          "<span class='subtitulo-celeste'>Enzima de restricción:</span> Proteína bacteriana que actúa como 'tijera molecular', cortando el ADN en secuencias específicas.",
          "<span class='subtitulo-celeste'>Fluoróforo:</span> Molécula química empleada en sondas (TaqMan, CGH, Sanger) que emite luz al ser estimulada por un láser.",
          "<span class='subtitulo-celeste'>Termociclador:</span> Máquina de laboratorio que programa y ejecuta los cambios rápidos de temperatura necesarios para la PCR."
        ]
      }
    ]
  },

herencia_mendel: {
    titulo: "Capítulo 3: Herencia Mendeliana",
    fuente: "Los Experimentos de Mendel y sus Leyes + Patrones de Herencia",
    secciones: [
      {
        tipo: "texto",
        titulo: "1. Los Experimentos de Mendel y sus Leyes",
        contenido: [
          "En la década de 1860, el monje austriaco Gregorio Mendel estableció los principios básicos de la genética realizando experimentos cruzando plantas de arvejas (Pisum sativum). Eligió estas plantas porque existían numerosas variedades con rasgos distinguibles, crecían rápido y permitían la autopolinización o la polinización cruzada.",
          "Tras obtener líneas genéticamente puras, las cruzó y formuló tres leyes fundamentales que rigen la transmisión de los caracteres hereditarios."
        ]
      },
      {
        tipo: "lista",
        titulo: "Las Tres Leyes de Mendel",
        items: [
          "<span class='subtitulo-celeste'>Ley de la Uniformidad (1° Ley):</span> Establece que al cruzarse individuos de dos líneas puras para un carácter, todos los descendientes de la primera generación (F1) serán idénticos entre sí, tanto genotípica como fenotípicamente, e iguales a uno de los progenitores.",
          "<span class='subtitulo-celeste'>Ley de la Segregación (2° Ley):</span> Propone que los factores hereditarios (alelos) no se fusionan, sino que se separan durante la formación de gametas y, en el momento de la fecundación, vuelven a unirse en pares de forma azarosa.",
          "<span class='subtitulo-celeste'>Ley de la Segregación Independiente (3° Ley):</span> Dicta que los alelos de un gen se heredan de manera independiente a los alelos de otro gen, por lo que el patrón de herencia de un rasgo no afecta al del otro, siempre y cuando se encuentren en loci suficientemente separados."
        ]
      },
      {
        tipo: "alerta",
        titulo: "¡Trampa de examen!",
        contenido: "La Tercera Ley de Mendel (Segregación Independiente) tiene una gran excepción: el <span class='subtitulo-celeste'>Ligamiento Genético</span>. Si dos genes están ubicados muy cerca en el mismo cromosoma, tienden a heredarse juntos y NO segregan de forma independiente."
      },
      {
        tipo: "texto",
        titulo: "2. Conceptos Básicos y el Árbol Genealógico",
        contenido: [
          "Para comprender la herencia, es vital diferenciar el <span class='subtitulo-celeste'>genotipo</span> (conjunto de alelos de un organismo) del <span class='subtitulo-celeste'>fenotipo</span> (la manifestación física, bioquímica o conductual). El fenotipo está determinado por el genotipo sumado a la influencia de los factores ambientales.",
          "Para visualizar las combinaciones posibles de estos alelos durante un cruzamiento, se emplea una herramienta matemática llamada tablero de Punnett.",
          "En la genética médica humana, el primer paso para estudiar el patrón de herencia monogénica en una familia es la elaboración de un árbol genealógico o pedigrí."
        ]
      },
      {
        tipo: "lista",
        titulo: "Elementos clave del Árbol Genealógico",
        items: [
          "<span class='subtitulo-celeste'>Probando o caso índice:</span> Es el sujeto afectado por el cual se inicia el estudio familiar y la construcción del pedigrí.",
          "<span class='subtitulo-celeste'>Consultante:</span> Persona que acude al genetista presentando el cuadro familiar, pudiendo estar o no afectada.",
          "<span class='subtitulo-celeste'>Grados de parentesco:</span> Los parientes de 1° grado (padres, hijos, hermanos) comparten el 50% de su información genética; los de 2° grado (abuelos, nietos, tíos) comparten el 25%; y los de 3° grado (primos hermanos) comparten el 12,5%."
        ]
      },
      {
        tipo: "texto",
        titulo: "3. Patrones Clásicos de Herencia Monogénica",
        contenido: [
          "Las enfermedades monogénicas (mendelianas) se deben a la alteración de un gen individual y se clasifican según su ubicación cromosómica (autosomas o cromosomas sexuales) y si el fenotipo expresado es dominante o recesivo."
        ]
      },
      {
        tipo: "lista",
        titulo: "A. Herencia Autosómica",
        items: [
          "<span class='subtitulo-celeste'>Autosómica Dominante:</span> El rasgo se manifiesta tanto en homocigotos como heterocigotos. Aparece típicamente en todas las generaciones (patrón vertical). Un afectado tiene al menos un progenitor afectado y 50% de riesgo de transmisión. Afecta igual a hombres y mujeres. Ej: Acondroplasia, Corea de Huntington.",
          "<span class='subtitulo-celeste'>Autosómica Recesiva:</span> Los afectados son siempre homocigotos para el alelo mutado. Suele 'saltar' generaciones (patrón horizontal). Si ambos padres son portadores sanos, el riesgo es del 25%. Fuertemente asociada a consanguinidad. Ej: Fibrosis quística, albinismo. Existen 'heterocigotos compuestos' (dos mutaciones distintas en el mismo gen)."
        ]
      },
      {
        tipo: "alerta",
        titulo: "Regla de Oro Clínica",
        contenido: "Si en un árbol genealógico ves a <span class='subtitulo-celeste'>padres sanos con hijos enfermos</span>, el patrón es casi obligatoriamente Recesivo. El alelo estaba oculto en los padres (portadores)."
      },
      {
        tipo: "lista",
        titulo: "B. Herencia Ligada a los Cromosomas Sexuales",
        items: [
          "<span class='subtitulo-celeste'>Ligada al X Recesiva:</span> Afecta preponderantemente a varones (hemicigotos). Las mujeres son portadoras y transmiten el gen al 50% de sus hijos (enfermos) y 50% de hijas (portadoras). <span class='subtitulo-celeste'>Nunca hay transmisión de padre afectado a hijo varón</span>. Ej: Hemofilia A, Daltonismo.",
          "<span class='subtitulo-celeste'>Ligada al X Dominante:</span> Afecta a varones y mujeres. Un padre afectado transmite la enfermedad al 100% de sus hijas mujeres, pero a ninguno de sus hijos varones. Ej: Raquitismo hipofosfatémico.",
          "<span class='subtitulo-celeste'>Ligada al Y (Holándrica):</span> Transmisión estrictamente paterna: de un varón afectado hacia absolutamente todos sus hijos varones."
        ]
      },
      {
        tipo: "texto",
        titulo: "4. Desviaciones de la Herencia Mendeliana",
        contenido: [
          "En la práctica clínica, existen alteraciones o comportamientos atípicos que hacen que las proporciones y patrones de herencia no sean exactamente los descritos en las leyes originales de Mendel."
        ]
      },
      {
        tipo: "lista",
        titulo: "Principales Fenómenos Atípicos",
        items: [
          "<span class='subtitulo-celeste'>Penetrancia:</span> Probabilidad de expresar la enfermedad si se tiene la mutación. Si es reducida (menor a 100%), hay personas con el genotipo alterado pero completamente sanas fenotípicamente.",
          "<span class='subtitulo-celeste'>Expresividad Variable:</span> Individuos con la misma mutación genética manifiestan la enfermedad con diferente gravedad o variedad de síntomas.",
          "<span class='subtitulo-celeste'>Pleiotropía:</span> Un solo gen alterado produce efectos fenotípicos diversos en múltiples órganos, dificultando el reconocimiento (Ej: Síndrome de Marfan).",
          "<span class='subtitulo-celeste'>Heterogeneidad Genética:</span> Puede ser alélica (distintas mutaciones en el mismo gen causan la enfermedad) o de locus (mutaciones en genes diferentes causan el mismo fenotipo, ej: retinitis pigmentosa).",
          "<span class='subtitulo-celeste'>Dominancia Incompleta y Codominancia:</span> En la incompleta el fenotipo es intermedio. En la codominancia ambos alelos se expresan al 100% simultáneamente (Ej: grupo sanguíneo AB).",
          "<span class='subtitulo-celeste'>Mutaciones de Novo:</span> Casos aislados sin antecedentes en la familia por la aparición de una nueva mutación en la gameta de un padre sano."
        ]
      },
      {
        tipo: "alerta",
        titulo: "Confusión habitual",
        contenido: "Suele mezclarse Penetrancia con Expresividad. <span class='subtitulo-celeste'>Penetrancia</span> es 'todo o nada' (te enfermaste o no). <span class='subtitulo-celeste'>Expresividad</span> es 'cuánto' (te enfermaste poco o gravísimo)."
      },
      {
        tipo: "lista",
        titulo: "5. Mecanismos de los Fenotipos Dominantes",
        items: [
          "¿Por qué a veces basta con tener un solo alelo mutado para sufrir una enfermedad? Existen diversas causas fisiológicas:",
          "<span class='subtitulo-celeste'>Haploinsuficiencia:</span> La producción del 50% de la proteína a partir del único alelo sano no es cantidad suficiente para mantener la fisiología normal del cuerpo.",
          "<span class='subtitulo-celeste'>Efecto Negativo Dominante:</span> La copia mutada produce una proteína anómala que interfiere, atrapa o sabotea directamente a las proteínas normales producidas por el gen sano (ej: osteogénesis imperfecta).",
          "<span class='subtitulo-celeste'>Ganancia de Función:</span> La proteína alterada aumenta su función original, adquiere afinidad por nuevos sustratos o se vuelve tóxica para la célula (ej: enfermedad de Huntington).",
          "<span class='subtitulo-celeste'>Pérdida de Heterocigosidad:</span> De manera estocástica a lo largo de la vida, la célula pierde o muta el único alelo sano que le quedaba, permitiendo que inicie la enfermedad (típico en cáncer hereditario como retinoblastoma)."
        ]
      },
      {
        tipo: "lista",
        titulo: "Conceptos Clave para el Examen",
        items: [
          "Los varones no pueden heredar enfermedades ligadas al cromosoma X de sus padres varones, solo de sus madres.",
          "El riesgo de que dos padres portadores de una enfermedad recesiva tengan un hijo sano pero portador (como ellos) es del 50% (o 2/4).",
          "La consanguinidad aumenta drásticamente la probabilidad de aparición de enfermedades Autosómicas Recesivas."
        ]
      },
      {
        tipo: "lista",
        titulo: "6. Glosario Completo de Herencia",
        items: [
          "<span class='subtitulo-celeste'>Alelo:</span> Cada una de las formas alternativas que puede tener un gen.",
          "<span class='subtitulo-celeste'>Anticipación Genética:</span> Fenómeno donde una enfermedad empeora o aparece a una edad más temprana en generaciones sucesivas (típico de expansión de tripletes).",
          "<span class='subtitulo-celeste'>Codominancia:</span> Expresión simultánea y al 100% de ambos alelos en un heterocigoto (ej. Grupo sanguíneo AB).",
          "<span class='subtitulo-celeste'>Consanguinidad:</span> Apareamiento entre individuos emparentados. Dispara estadísticamente la aparición de enfermedades Autosómicas Recesivas.",
          "<span class='subtitulo-celeste'>Efecto Negativo Dominante:</span> Un alelo mutado produce una proteína defectuosa que 'sabotea' o interfiere con la función de la proteína normal producida por el alelo sano.",
          "<span class='subtitulo-celeste'>Epistasis:</span> Interacción donde un gen (epistático) enmascara u oculta el efecto de otro gen en un locus distinto (hipostático).",
          "<span class='subtitulo-celeste'>Fenocopia:</span> Condición provocada por factores ambientales que imita a la perfección los síntomas de una enfermedad genética.",
          "<span class='subtitulo-celeste'>Haploinsuficiencia:</span> Situación donde tener solo un alelo sano (produciendo el 50% de la proteína) no es suficiente para evitar la enfermedad.",
          "<span class='subtitulo-celeste'>Hemicigoto:</span> Individuo que tiene una sola copia de un gen. Describe perfectamente a los varones respecto a los genes de sus cromosomas X e Y.",
          "<span class='subtitulo-celeste'>Heterocigoto Compuesto:</span> Paciente con enfermedad recesiva que tiene ambos alelos mutados, pero con mutaciones DIFERENTES en cada uno.",
          "<span class='subtitulo-celeste'>Homocigoto / Heterocigoto:</span> Poseer dos alelos genéticamente idénticos para un gen / Poseer dos alelos distintos.",
          "<span class='subtitulo-celeste'>Impronta Genómica:</span> Silenciamiento epigenético (por metilación) de un alelo de manera natural, dependiendo exclusivamente de si se heredó del padre o de la madre.",
          "<span class='subtitulo-celeste'>Ligamiento Genético:</span> Tendencia de dos genes que están muy cerca en el mismo cromosoma a heredarse juntos, violando la 3° Ley de Mendel.",
          "<span class='subtitulo-celeste'>Locus:</span> La ubicación física exacta de un gen dentro de un cromosoma. Su plural es 'Loci'.",
          "<span class='subtitulo-celeste'>Mutación de Novo:</span> Alteración genética nueva que no estaba en el cuerpo de los padres, surgida espontáneamente en el óvulo o espermatozoide.",
          "<span class='subtitulo-celeste'>Penetrancia vs. Expresividad:</span> La penetrancia es '¿te enfermas o no te enfermas?'. La expresividad es '¿qué tan grave te enfermas?'.",
          "<span class='subtitulo-celeste'>Pleiotropía:</span> Un único gen mutado provoca síntomas en múltiples órganos o sistemas que no parecen tener relación entre sí.",
          "<span class='subtitulo-celeste'>Probando (Caso Índice):</span> El primer individuo afectado que llama la atención del médico y a partir del cual se dibuja el árbol genealógico."
        ]
      }
    ]
  },

genetica_poblaciones: {
  titulo: "Genética de Poblaciones",
  fuente: "Thompson & Thompson + genética clásica + Hardy-Weinberg",

  secciones: [
    {
      tipo: "texto",
      titulo: "1. Conceptos generales",
      contenido: [
        "La genética de poblaciones estudia la distribución y comportamiento de variantes genéticas dentro de grupos humanos y cómo cambian a lo largo del tiempo.",
        "Analiza frecuencias alélicas y genotípicas, además de las fuerzas que modifican el equilibrio genético poblacional."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Idea central",
      contenido:
        "La unidad de estudio deja de ser el individuo y pasa a ser la población."
    },

    {
      tipo: "texto",
      titulo: "2. Pool génico",
      contenido: [
        "El pool génico corresponde al conjunto total de alelos presentes en todos los individuos de una población.",
        "Mientras mayor diversidad genética exista en una población, mayor será su variabilidad genética."
      ]
    },

    {
      tipo: "texto",
      titulo: "3. Frecuencia alélica",
      contenido: [
        "La frecuencia alélica corresponde a la proporción de un alelo específico dentro de la población.",
        "Se calcula considerando el total de copias posibles del gen."
      ]
    },

    {
      tipo: "lista",
      titulo: "Conceptos básicos",
      items: [
        "p = frecuencia del alelo dominante.",
        "q = frecuencia del alelo recesivo.",
        "En un sistema de dos alelos: p + q = 1."
      ]
    },

    {
      tipo: "alerta",
      titulo: "MUY importante",
      contenido:
        "p y q representan alelos, NO individuos."
    },

    {
      tipo: "texto",
      titulo: "4. Frecuencia genotípica",
      contenido: [
        "La frecuencia genotípica corresponde a la proporción de individuos con un genotipo específico dentro de una población."
      ]
    },

    {
      tipo: "lista",
      titulo: "Frecuencias clásicas",
      items: [
        "p² = homocigoto dominante.",
        "2pq = heterocigoto.",
        "q² = homocigoto recesivo."
      ]
    },

    {
      tipo: "texto",
      titulo: "5. Principio de Hardy-Weinberg",
      contenido: [
        "El principio de Hardy-Weinberg establece que las frecuencias alélicas y genotípicas permanecen constantes de generación en generación si no actúan fuerzas evolutivas.",
        "Permite estimar frecuencia de portadores y predecir distribución genética en poblaciones."
      ]
    },

    {
      tipo: "lista",
      titulo: "Ecuaciones fundamentales",
      items: [
        "p + q = 1",
        "p² + 2pq + q² = 1"
      ]
    },

    {
      tipo: "alerta",
      titulo: "Interpretación",
      contenido:
        "Las ecuaciones representan proporciones teóricas esperadas bajo equilibrio."
    },

    {
      tipo: "texto",
      titulo: "6. Supuestos de Hardy-Weinberg",
      contenido: [
        "El equilibrio solo se mantiene si no existen fuerzas que alteren las frecuencias."
      ]
    },

    {
      tipo: "lista",
      titulo: "Supuestos clásicos",
      items: [
        "Población grande.",
        "Apareamiento aleatorio.",
        "Ausencia de selección natural.",
        "Ausencia de mutación.",
        "Ausencia de migración.",
        "Ausencia de deriva genética."
      ]
    },

    {
      tipo: "advertencia",
      titulo: "Pregunta clásica",
      contenido:
        "Si un supuesto se rompe, la población puede salir del equilibrio."
    },

    {
      tipo: "texto",
      titulo: "7. Hardy-Weinberg aplicado a enfermedades AR",
      contenido: [
        "En enfermedades autosómicas recesivas, la frecuencia de afectados corresponde a q².",
        "A partir de q² puede calcularse q, luego p y finalmente frecuencia de portadores (2pq)."
      ]
    },

    {
      tipo: "lista",
      titulo: "Pasos clásicos",
      items: [
        "1. Identificar q².",
        "2. Obtener q mediante raíz cuadrada.",
        "3. Calcular p = 1 − q.",
        "4. Calcular portadores = 2pq."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Trampa típica",
      contenido:
        "NO confundir q² con q. q² es frecuencia de afectados."
    },

    {
      tipo: "texto",
      titulo: "8. Ejemplo clásico Hardy-Weinberg",
      contenido: [
        "Si fibrosis quística afecta a 1/2500 individuos:"
      ]
    },

    {
      tipo: "lista",
      titulo: "Resolución",
      items: [
        "q² = 1/2500",
        "q = 1/50 = 0.02",
        "p = 0.98",
        "2pq ≈ 0.039 = 3.9%"
      ]
    },

    {
      tipo: "texto",
      titulo: "9. Apareamiento aleatorio",
      contenido: [
        "Significa que los individuos se reproducen sin preferencia genética.",
        "Es uno de los supuestos fundamentales del equilibrio."
      ]
    },

    {
      tipo: "texto",
      titulo: "10. Consanguinidad",
      contenido: [
        "La consanguinidad aumenta la probabilidad de que dos individuos compartan alelos heredados de un ancestro común.",
        "Aumenta homocigosis y enfermedades autosómicas recesivas."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Consanguinidad",
      contenido:
        "NO aumenta frecuencia de mutaciones nuevas; aumenta probabilidad de homocigosis."
    },

    {
      tipo: "texto",
      titulo: "11. Deriva genética",
      contenido: [
        "La deriva genética corresponde a cambios aleatorios de frecuencias alélicas.",
        "Tiene mayor impacto en poblaciones pequeñas."
      ]
    },

    {
      tipo: "lista",
      titulo: "Consecuencias",
      items: [
        "Pérdida de variabilidad genética.",
        "Fijación o desaparición de alelos.",
        "Cambios por azar y no por selección."
      ]
    },

    {
      tipo: "texto",
      titulo: "12. Efecto fundador",
      contenido: [
        "Ocurre cuando una población nueva es originada por un pequeño grupo de individuos.",
        "Los alelos presentes en fundadores pueden volverse frecuentes."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características",
      items: [
        "Poca diversidad genética inicial.",
        "Algunas enfermedades raras pueden volverse frecuentes.",
        "Es un tipo de deriva genética."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Ejemplos clásicos",
      contenido:
        "Algunas enfermedades son frecuentes en poblaciones aisladas por efecto fundador."
    },

    {
      tipo: "texto",
      titulo: "13. Cuello de botella",
      contenido: [
        "Ocurre cuando una población disminuye drásticamente de tamaño.",
        "Los sobrevivientes determinan el nuevo pool génico."
      ]
    },

    {
      tipo: "lista",
      titulo: "Consecuencias",
      items: [
        "Disminución de variabilidad genética.",
        "Mayor impacto de deriva genética.",
        "Cambios aleatorios importantes."
      ]
    },

    {
      tipo: "texto",
      titulo: "14. Flujo génico o migración",
      contenido: [
        "Corresponde al movimiento de alelos entre poblaciones.",
        "Introduce variabilidad genética nueva."
      ]
    },

    {
      tipo: "lista",
      titulo: "Efectos",
      items: [
        "Puede aumentar diversidad genética.",
        "Puede modificar frecuencias alélicas.",
        "Disminuye diferencias entre poblaciones."
      ]
    },

    {
      tipo: "texto",
      titulo: "15. Mutación como fuerza evolutiva",
      contenido: [
        "Las mutaciones generan nuevos alelos.",
        "Son la fuente primaria de variabilidad genética."
      ]
    },

    {
      tipo: "advertencia",
      titulo: "Importante",
      contenido:
        "La mutación por sí sola cambia frecuencias lentamente; otras fuerzas suelen tener efecto más rápido."
    },

    {
      tipo: "texto",
      titulo: "16. Selección natural",
      contenido: [
        "La selección natural favorece supervivencia y reproducción diferencial de ciertos genotipos."
      ]
    },

    {
      tipo: "lista",
      titulo: "Consecuencias",
      items: [
        "Aumenta frecuencia de alelos ventajosos.",
        "Disminuye frecuencia de alelos perjudiciales.",
        "Modifica equilibrio poblacional."
      ]
    },

    {
      tipo: "texto",
      titulo: "17. Fitness biológico",
      contenido: [
        "El fitness corresponde a la capacidad reproductiva relativa de un individuo.",
        "Mayor fitness implica mayor probabilidad de transmitir genes."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Fitness",
      contenido:
        "En genética evolutiva importa reproducción exitosa, no fuerza física."
    },

    {
      tipo: "texto",
      titulo: "18. Ventaja heterocigota",
      contenido: [
        "En algunos casos el heterocigoto posee ventaja adaptativa frente a ambos homocigotos."
      ]
    },

    {
      tipo: "lista",
      titulo: "Ejemplo clásico",
      items: [
        "Anemia falciforme y resistencia parcial a malaria."
      ]
    },

    {
      tipo: "texto",
      titulo: "19. Equilibrio balanceado",
      contenido: [
        "Algunos alelos perjudiciales persisten porque otorgan ventajas en ciertas condiciones.",
        "Esto explica permanencia de algunas enfermedades genéticas."
      ]
    },

    {
      tipo: "texto",
      titulo: "20. Frecuencia de portadores",
      contenido: [
        "La frecuencia de portadores corresponde a heterocigotos (2pq).",
        "Es especialmente importante en enfermedades recesivas frecuentes."
      ]
    },

    {
      tipo: "lista",
      titulo: "Importancia clínica",
      items: [
        "Screening poblacional.",
        "Consejo genético.",
        "Programas preventivos.",
        "Diagnóstico prenatal."
      ]
    },

    {
      tipo: "texto",
      titulo: "21. Aplicaciones médicas",
      contenido: [
        "La genética de poblaciones tiene aplicaciones clínicas directas."
      ]
    },

    {
      tipo: "lista",
      titulo: "Aplicaciones",
      items: [
        "Estimación de riesgo genético.",
        "Frecuencia de portadores.",
        "Programas de tamizaje.",
        "Estudios epidemiológicos.",
        "Farmacogenética.",
        "Predicción de enfermedades."
      ]
    },

    {
      tipo: "texto",
      titulo: "22. Tamizaje poblacional",
      contenido: [
        "Busca identificar individuos afectados o portadores en poblaciones aparentemente sanas.",
        "Es especialmente útil en enfermedades frecuentes y tratables."
      ]
    },

    {
      tipo: "texto",
      titulo: "23. Genética poblacional y farmacogenética",
      contenido: [
        "Algunas variantes genéticas modifican respuesta a medicamentos.",
        "La frecuencia de estas variantes cambia entre poblaciones."
      ]
    },

    {
      tipo: "texto",
      titulo: "24. Estratificación poblacional",
      contenido: [
        "Las poblaciones humanas no son completamente homogéneas.",
        "Diferencias ancestrales pueden alterar interpretación genética."
      ]
    },

    {
      tipo: "advertencia",
      titulo: "Importante en investigación",
      contenido:
        "La estratificación poblacional puede producir asociaciones genéticas falsas."
    },

    {
      tipo: "texto",
      titulo: "25. Conceptos integradores",
      contenido: [
        "Las frecuencias alélicas cambian cuando actúan fuerzas evolutivas.",
        "Hardy-Weinberg funciona como modelo teórico de referencia.",
        "La genética de poblaciones conecta genética molecular, evolución, epidemiología y medicina."
      ]
    },

    {
      tipo: "lista",
      titulo: "26. Lo MÁS importante para examen",
      items: [
        "p + q = 1",
        "p² + 2pq + q² = 1",
        "q² = afectados AR",
        "2pq = portadores",
        "Consanguinidad ↑ homocigosis",
        "Deriva genética = azar",
        "Efecto fundador = pocos individuos originan población",
        "Cuello de botella = reducción drástica poblacional",
        "Selección natural cambia frecuencias alélicas",
        "Mutación = fuente primaria de variabilidad"
      ]
    }
  ]
},

variabilidad: {
  titulo: "Variabilidad Genética",
  fuente: "Thompson & Thompson + genética molecular + genética humana",

  secciones: [
    {
      tipo: "texto",
      titulo: "1. Conceptos generales",
      contenido: [
        "La variabilidad genética corresponde a las diferencias genéticas entre individuos de una población.",
        "Es fundamental para evolución, adaptación, diversidad biológica y susceptibilidad diferencial a enfermedades.",
        "Ningún individuo posee un genoma completamente idéntico a otro, excepto gemelos monocigóticos."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Idea central",
      contenido:
        "La variabilidad genética es la base biológica de las diferencias individuales."
    },

    {
      tipo: "texto",
      titulo: "2. Fuentes principales de variabilidad genética",
      contenido: [
        "La variabilidad surge mediante múltiples mecanismos moleculares y poblacionales."
      ]
    },

    {
      tipo: "lista",
      titulo: "Fuentes importantes",
      items: [
        "Mutaciones.",
        "Recombinación genética.",
        "Crossing-over.",
        "Segregación independiente.",
        "Migración.",
        "Reproducción sexual.",
        "Variabilidad epigenética."
      ]
    },

    {
      tipo: "texto",
      titulo: "3. Mutaciones como fuente de variabilidad",
      contenido: [
        "Las mutaciones generan nuevos alelos y constituyen la fuente primaria de variabilidad genética.",
        "Pueden ser beneficiosas, neutras o perjudiciales."
      ]
    },

    {
      tipo: "lista",
      titulo: "Tipos importantes",
      items: [
        "Mutaciones puntuales.",
        "Inserciones.",
        "Deleciones.",
        "Duplicaciones.",
        "Expansión de tripletes.",
        "Reordenamientos cromosómicos."
      ]
    },

    {
      tipo: "advertencia",
      titulo: "Muy importante",
      contenido:
        "No toda variación genética es patológica."
    },

    {
      tipo: "texto",
      titulo: "4. Polimorfismos",
      contenido: [
        "Los polimorfismos son variantes frecuentes en la población, generalmente mayores al 1%.",
        "La mayoría no produce enfermedad directamente."
      ]
    },

    {
      tipo: "lista",
      titulo: "Importancia clínica",
      items: [
        "Susceptibilidad a enfermedades.",
        "Respuesta a medicamentos.",
        "Farmacogenética.",
        "Estudios poblacionales.",
        "Identificación forense."
      ]
    },

    {
      tipo: "texto",
      titulo: "5. SNP (Single Nucleotide Polymorphism)",
      contenido: [
        "Los SNP corresponden a cambios de una sola base del ADN.",
        "Son la forma más frecuente de variabilidad genética humana."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características",
      items: [
        "Pueden ser benignos o patológicos.",
        "Pueden alterar proteínas o regulación génica.",
        "Se utilizan en estudios de asociación genética."
      ]
    },

    {
      tipo: "alerta",
      titulo: "SNP",
      contenido:
        "Millones de SNP existen normalmente entre individuos sanos."
    },

    {
      tipo: "texto",
      titulo: "6. VNTR y STR",
      contenido: [
        "Corresponden a secuencias repetidas en tándem cuyo número varía entre individuos."
      ]
    },

    {
      tipo: "lista",
      titulo: "Tipos",
      items: [
        "VNTR: repeticiones más largas.",
        "STR/microsatélites: repeticiones cortas."
      ]
    },

    {
      tipo: "lista",
      titulo: "Aplicaciones",
      items: [
        "Pruebas de paternidad.",
        "Identificación forense.",
        "Estudios poblacionales.",
        "Mapeo genético."
      ]
    },

    {
      tipo: "texto",
      titulo: "7. CNV (Copy Number Variants)",
      contenido: [
        "Las CNV corresponden a pérdidas o ganancias de segmentos genómicos.",
        "Pueden afectar dosis génica y producir enfermedad."
      ]
    },

    {
      tipo: "lista",
      titulo: "Consecuencias",
      items: [
        "Duplicaciones.",
        "Microdeleciones.",
        "Cambios regulatorios.",
        "Alteraciones del desarrollo."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Importante",
      contenido:
        "No todas las CNV son patológicas."
    },

    {
      tipo: "texto",
      titulo: "8. Recombinación genética",
      contenido: [
        "La recombinación ocurre durante meiosis y genera nuevas combinaciones alélicas.",
        "Es uno de los principales mecanismos de diversidad genética."
      ]
    },

    {
      tipo: "texto",
      titulo: "9. Crossing-over",
      contenido: [
        "Durante profase I de meiosis, cromosomas homólogos intercambian segmentos.",
        "Esto genera combinaciones genéticas nuevas."
      ]
    },

    {
      tipo: "lista",
      titulo: "Importancia",
      items: [
        "Aumenta diversidad genética.",
        "Permite recombinación de alelos.",
        "Reduce ligamiento entre genes."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Crossing-over",
      contenido:
        "Ocurre entre cromátidas no hermanas de cromosomas homólogos."
    },

    {
      tipo: "texto",
      titulo: "10. Segregación independiente",
      contenido: [
        "Los pares cromosómicos se distribuyen independientemente durante meiosis.",
        "Cada gameto recibe combinaciones distintas de cromosomas maternos y paternos."
      ]
    },

    {
      tipo: "lista",
      titulo: "Consecuencia",
      items: [
        "Gran cantidad de combinaciones genéticas posibles."
      ]
    },

    {
      tipo: "texto",
      titulo: "11. Variabilidad por reproducción sexual",
      contenido: [
        "La fecundación combina genomas provenientes de dos individuos distintos.",
        "Esto multiplica la diversidad genética."
      ]
    },

    {
      tipo: "texto",
      titulo: "12. Ligamiento genético",
      contenido: [
        "Genes cercanos en un mismo cromosoma tienden a heredarse juntos.",
        "El crossing-over puede romper este ligamiento."
      ]
    },

    {
      tipo: "lista",
      titulo: "Importancia",
      items: [
        "Mapeo génico.",
        "Estudios familiares.",
        "Análisis de herencia."
      ]
    },

    {
      tipo: "texto",
      titulo: "13. Heterogeneidad genética",
      contenido: [
        "Un mismo fenotipo puede originarse por alteraciones en genes distintos."
      ]
    },

    {
      tipo: "lista",
      titulo: "Tipos",
      items: [
        "Heterogeneidad alélica.",
        "Heterogeneidad de locus."
      ]
    },

    {
      tipo: "texto",
      titulo: "14. Penetrancia y expresividad",
      contenido: [
        "La variabilidad fenotípica también depende de cómo se expresa una variante genética."
      ]
    },

    {
      tipo: "lista",
      titulo: "Conceptos",
      items: [
        "Penetrancia = presencia o ausencia del fenotipo.",
        "Expresividad = intensidad clínica."
      ]
    },

    {
      tipo: "advertencia",
      titulo: "Trampa clásica",
      contenido:
        "Penetrancia incompleta NO significa menor gravedad."
    },

    {
      tipo: "texto",
      titulo: "15. Variabilidad epigenética",
      contenido: [
        "La epigenética modifica expresión génica sin alterar secuencia de ADN.",
        "Puede cambiar según ambiente, edad y desarrollo."
      ]
    },

    {
      tipo: "lista",
      titulo: "Mecanismos epigenéticos",
      items: [
        "Metilación del ADN.",
        "Modificaciones de histonas.",
        "ARN no codificante."
      ]
    },

    {
      tipo: "texto",
      titulo: "16. Impronta genómica",
      contenido: [
        "Algunos genes se expresan dependiendo de si provienen del padre o de la madre.",
        "Es un fenómeno epigenético."
      ]
    },

    {
      tipo: "lista",
      titulo: "Ejemplos clásicos",
      items: [
        "Prader-Willi.",
        "Angelman."
      ]
    },

    {
      tipo: "texto",
      titulo: "17. Mosaicismo",
      contenido: [
        "El mosaicismo ocurre cuando un individuo posee líneas celulares genéticamente distintas derivadas del mismo cigoto."
      ]
    },

    {
      tipo: "lista",
      titulo: "Tipos",
      items: [
        "Somático.",
        "Gonadal.",
        "Mixto."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Mosaicismo gonadal",
      contenido:
        "Puede explicar recurrencia de enfermedades genéticas en padres aparentemente sanos."
    },

    {
      tipo: "texto",
      titulo: "18. Quimerismo",
      contenido: [
        "El quimerismo corresponde a presencia de líneas celulares derivadas de cigotos distintos."
      ]
    },

    {
      tipo: "lista",
      titulo: "Causas",
      items: [
        "Fusión embrionaria.",
        "Trasplantes.",
        "Transfusión.",
        "Microquimerismo fetal."
      ]
    },

    {
      tipo: "advertencia",
      titulo: "Diferencia clave",
      contenido:
        "Mosaicismo = un cigoto; quimerismo = múltiples cigotos."
    },

    {
      tipo: "texto",
      titulo: "19. Variabilidad ambiental",
      contenido: [
        "El ambiente también modifica expresión fenotípica.",
        "La interacción gen-ambiente explica diferencias clínicas importantes."
      ]
    },

    {
      tipo: "lista",
      titulo: "Factores ambientales",
      items: [
        "Nutrición.",
        "Tóxicos.",
        "Medicamentos.",
        "Radiación.",
        "Infecciones.",
        "Estilo de vida."
      ]
    },

    {
      tipo: "texto",
      titulo: "20. Normas de reacción",
      contenido: [
        "Un mismo genotipo puede producir distintos fenotipos según ambiente."
      ]
    },

    {
      tipo: "texto",
      titulo: "21. Variabilidad genética y enfermedad",
      contenido: [
        "La susceptibilidad a enfermedades depende de interacción entre variantes genéticas y ambiente."
      ]
    },

    {
      tipo: "lista",
      titulo: "Ejemplos",
      items: [
        "Diabetes.",
        "Hipertensión.",
        "Cáncer.",
        "Enfermedades autoinmunes."
      ]
    },

    {
      tipo: "texto",
      titulo: "22. Variabilidad farmacogenética",
      contenido: [
        "Las diferencias genéticas modifican metabolismo y respuesta a fármacos."
      ]
    },

    {
      tipo: "lista",
      titulo: "Consecuencias",
      items: [
        "Toxicidad variable.",
        "Diferente eficacia terapéutica.",
        "Necesidad de medicina personalizada."
      ]
    },

    {
      tipo: "texto",
      titulo: "23. Variabilidad genética y evolución",
      contenido: [
        "Sin variabilidad genética no existe evolución biológica.",
        "La selección natural actúa sobre diferencias genéticas entre individuos."
      ]
    },

    {
      tipo: "texto",
      titulo: "24. Técnicas para estudiar variabilidad genética",
      contenido: [
        "La variabilidad puede estudiarse mediante múltiples técnicas moleculares."
      ]
    },

    {
      tipo: "lista",
      titulo: "Técnicas importantes",
      items: [
        "PCR.",
        "Secuenciación Sanger.",
        "NGS.",
        "Microarrays.",
        "STR/VNTR.",
        "Array-CGH."
      ]
    },

    {
      tipo: "texto",
      titulo: "25. GWAS",
      contenido: [
        "Los Genome-Wide Association Studies buscan asociaciones entre SNP y enfermedades complejas."
      ]
    },

    {
      tipo: "lista",
      titulo: "Utilidad",
      items: [
        "Identificación de factores de riesgo.",
        "Estudio de enfermedades multifactoriales.",
        "Predicción genética."
      ]
    },

    {
      tipo: "advertencia",
      titulo: "Importante",
      contenido:
        "Asociación genética NO implica causalidad directa."
    },

    {
      tipo: "texto",
      titulo: "26. Conceptos integradores",
      contenido: [
        "La variabilidad genética surge por mecanismos moleculares, poblacionales y ambientales.",
        "Muchas variantes son normales y necesarias para diversidad humana.",
        "Las enfermedades genéticas representan solo una pequeña fracción de la variabilidad total."
      ]
    },

    {
      tipo: "lista",
      titulo: "27. Lo MÁS importante para examen",
      items: [
        "Mutación = fuente primaria de variabilidad.",
        "SNP = variante más frecuente.",
        "STR/VNTR → identificación genética.",
        "CNV = cambios en número de copias.",
        "Crossing-over aumenta diversidad.",
        "Segregación independiente genera combinaciones nuevas.",
        "Mosaicismo ≠ quimerismo.",
        "Epigenética no cambia secuencia ADN.",
        "Penetrancia ≠ expresividad.",
        "Variabilidad genética + ambiente = fenotipo."
      ]
    }
  ]
},

enf_monogenicas: {
  titulo: "Enfermedades Monogénicas",
  fuente: "Thompson & Thompson + genética clínica + herencia mendeliana",

  secciones: [
    {
      tipo: "texto",
      titulo: "1. Conceptos generales",
      contenido: [
        "Las enfermedades monogénicas son producidas por alteraciones en un solo gen.",
        "Siguen patrones de herencia mendeliana y suelen presentar agregación familiar."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Idea central",
      contenido:
        "Un solo gen alterado puede producir enfermedad clínica."
    },

    {
      tipo: "texto",
      titulo: "2. Herencia mendeliana",
      contenido: [
        "Gregor Mendel describió principios básicos de transmisión genética utilizando caracteres hereditarios simples.",
        "Las enfermedades monogénicas clásicas siguen estos patrones."
      ]
    },

    {
      tipo: "lista",
      titulo: "Patrones principales",
      items: [
        "Autosómica dominante (AD).",
        "Autosómica recesiva (AR).",
        "Ligada al X dominante.",
        "Ligada al X recesiva.",
        "Mitocondrial."
      ]
    },

    {
      tipo: "texto",
      titulo: "3. Herencia autosómica dominante",
      contenido: [
        "En enfermedades AD basta una copia alterada para producir enfermedad.",
        "Los heterocigotos generalmente están afectados."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características clásicas",
      items: [
        "Transmisión vertical.",
        "Afecta ambos sexos.",
        "Existe transmisión varón-varón.",
        "50% de riesgo para descendencia.",
        "Frecuentemente múltiples generaciones afectadas."
      ]
    },

    {
      tipo: "alerta",
      titulo: "AD",
      contenido:
        "La presencia de transmisión padre-hijo descarta herencia ligada al X."
    },

    {
      tipo: "texto",
      titulo: "4. Enfermedades autosómicas dominantes clásicas",
      contenido: [
        "Muchas enfermedades AD afectan proteínas estructurales o reguladoras."
      ]
    },

    {
      tipo: "lista",
      titulo: "Ejemplos importantes",
      items: [
        "Síndrome de Marfan.",
        "Neurofibromatosis tipo 1.",
        "Acondroplasia.",
        "Huntington.",
        "Hipercolesterolemia familiar."
      ]
    },

    {
      tipo: "texto",
      titulo: "5. Herencia autosómica recesiva",
      contenido: [
        "En enfermedades AR se requieren ambas copias alteradas para manifestar enfermedad.",
        "Los heterocigotos suelen ser portadores sanos."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características clásicas",
      items: [
        "Patrón horizontal.",
        "Padres generalmente sanos.",
        "Afecta ambos sexos.",
        "Mayor frecuencia con consanguinidad.",
        "25% riesgo de recurrencia."
      ]
    },

    {
      tipo: "alerta",
      titulo: "AR",
      contenido:
        "La consanguinidad aumenta probabilidad de enfermedades AR."
    },

    {
      tipo: "texto",
      titulo: "6. Enfermedades autosómicas recesivas clásicas",
      contenido: [
        "Muchas enfermedades AR corresponden a errores metabólicos o pérdida de función enzimática."
      ]
    },

    {
      tipo: "lista",
      titulo: "Ejemplos importantes",
      items: [
        "Fibrosis quística.",
        "Fenilcetonuria.",
        "Anemia falciforme.",
        "Tay-Sachs.",
        "Albinismo."
      ]
    },

    {
      tipo: "texto",
      titulo: "7. Herencia ligada al X recesiva",
      contenido: [
        "Las enfermedades XR afectan principalmente hombres.",
        "Los hombres poseen un solo cromosoma X, por lo que una variante basta para producir enfermedad."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características clásicas",
      items: [
        "Predominio masculino.",
        "No existe transmisión padre-hijo.",
        "Mujeres suelen ser portadoras.",
        "Hijos hombres reciben X materno."
      ]
    },

    {
      tipo: "alerta",
      titulo: "XR",
      contenido:
        "Nunca existe transmisión varón-varón."
    },

    {
      tipo: "texto",
      titulo: "8. Enfermedades ligadas al X recesivas",
      contenido: [
        "Muchas enfermedades XR afectan músculo o coagulación."
      ]
    },

    {
      tipo: "lista",
      titulo: "Ejemplos clásicos",
      items: [
        "Hemofilia A.",
        "Distrofia muscular de Duchenne.",
        "Daltonismo.",
        "Deficiencia G6PD."
      ]
    },

    {
      tipo: "texto",
      titulo: "9. Herencia ligada al X dominante",
      contenido: [
        "Una copia alterada en cromosoma X basta para producir enfermedad."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características",
      items: [
        "Mujeres afectadas más frecuentes.",
        "No existe transmisión padre-hijo.",
        "Padre afectado transmite a TODAS las hijas.",
        "Varones pueden presentar formas graves."
      ]
    },

    {
      tipo: "texto",
      titulo: "10. Herencia mitocondrial",
      contenido: [
        "Las enfermedades mitocondriales se transmiten exclusivamente por vía materna.",
        "Las mitocondrias del cigoto derivan del óvulo."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características",
      items: [
        "Madre transmite a toda descendencia.",
        "Hombres NO transmiten.",
        "Alta variabilidad clínica.",
        "Frecuente compromiso neuromuscular."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Mitocondrial",
      contenido:
        "Los hombres afectados NO transmiten enfermedad."
    },

    {
      tipo: "texto",
      titulo: "11. Heteroplasmia",
      contenido: [
        "La heteroplasmia corresponde a coexistencia de mitocondrias normales y mutadas.",
        "Explica variabilidad clínica en enfermedades mitocondriales."
      ]
    },

    {
      tipo: "texto",
      titulo: "12. Penetrancia",
      contenido: [
        "La penetrancia corresponde a proporción de individuos con genotipo que expresan fenotipo."
      ]
    },

    {
      tipo: "lista",
      titulo: "Tipos",
      items: [
        "Completa.",
        "Incompleta."
      ]
    },

    {
      tipo: "advertencia",
      titulo: "Trampa clásica",
      contenido:
        "Penetrancia NO corresponde a gravedad clínica."
    },

    {
      tipo: "texto",
      titulo: "13. Expresividad variable",
      contenido: [
        "Individuos con la misma variante pueden presentar distinta severidad clínica."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Expresividad",
      contenido:
        "Todos presentan enfermedad, pero con distinta intensidad."
    },

    {
      tipo: "texto",
      titulo: "14. Anticipación genética",
      contenido: [
        "Algunas enfermedades aparecen más precozmente o con mayor gravedad en generaciones sucesivas."
      ]
    },

    {
      tipo: "lista",
      titulo: "Mecanismo frecuente",
      items: [
        "Expansión de tripletes."
      ]
    },

    {
      tipo: "lista",
      titulo: "Ejemplos clásicos",
      items: [
        "Huntington.",
        "Distrofia miotónica.",
        "X frágil."
      ]
    },

    {
      tipo: "texto",
      titulo: "15. Heterogeneidad genética",
      contenido: [
        "Un mismo fenotipo puede producirse por alteraciones en genes distintos."
      ]
    },

    {
      tipo: "lista",
      titulo: "Tipos",
      items: [
        "Heterogeneidad alélica.",
        "Heterogeneidad de locus."
      ]
    },

    {
      tipo: "texto",
      titulo: "16. Pleiotropía",
      contenido: [
        "Una sola variante genética puede afectar múltiples órganos o sistemas."
      ]
    },

    {
      tipo: "lista",
      titulo: "Ejemplo clásico",
      items: [
        "Síndrome de Marfan."
      ]
    },

    {
      tipo: "texto",
      titulo: "17. Síndrome de Marfan",
      contenido: [
        "Enfermedad AD causada por alteraciones en FBN1.",
        "Compromete tejido conectivo."
      ]
    },

    {
      tipo: "lista",
      titulo: "Manifestaciones típicas",
      items: [
        "Talla alta.",
        "Araquidactilia.",
        "Ectopia lentis.",
        "Dilatación aórtica."
      ]
    },

    {
      tipo: "texto",
      titulo: "18. Fibrosis quística",
      contenido: [
        "Enfermedad AR causada por variantes en CFTR.",
        "Produce alteración del transporte de cloro."
      ]
    },

    {
      tipo: "lista",
      titulo: "Manifestaciones",
      items: [
        "Infecciones respiratorias recurrentes.",
        "Insuficiencia pancreática.",
        "Sudor salado.",
        "Infertilidad masculina."
      ]
    },

    {
      tipo: "texto",
      titulo: "19. Huntington",
      contenido: [
        "Enfermedad neurodegenerativa AD causada por expansión CAG."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características",
      items: [
        "Corea.",
        "Deterioro cognitivo.",
        "Alteraciones psiquiátricas.",
        "Anticipación genética."
      ]
    },

    {
      tipo: "texto",
      titulo: "20. Acondroplasia",
      contenido: [
        "Displasia ósea AD causada por mutaciones FGFR3."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características",
      items: [
        "Talla baja rizomélica.",
        "Macrocefalia relativa.",
        "Inteligencia generalmente normal."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Acondroplasia",
      contenido:
        "Frecuentemente asociada a mutaciones de novo."
    },

    {
      tipo: "texto",
      titulo: "21. Hemofilia A",
      contenido: [
        "Enfermedad XR causada por déficit de factor VIII."
      ]
    },

    {
      tipo: "lista",
      titulo: "Manifestaciones",
      items: [
        "Hemorragias.",
        "Hemartrosis.",
        "Sangrado prolongado."
      ]
    },

    {
      tipo: "texto",
      titulo: "22. Distrofia muscular de Duchenne",
      contenido: [
        "Enfermedad XR causada por mutaciones en distrofina."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características",
      items: [
        "Debilidad muscular progresiva.",
        "Signo de Gowers.",
        "Pseudohipertrofia gemelar."
      ]
    },

    {
      tipo: "texto",
      titulo: "23. Neurofibromatosis tipo 1",
      contenido: [
        "Enfermedad AD con penetrancia alta y expresividad variable."
      ]
    },

    {
      tipo: "lista",
      titulo: "Manifestaciones",
      items: [
        "Manchas café con leche.",
        "Neurofibromas.",
        "Nódulos de Lisch."
      ]
    },

    {
      tipo: "texto",
      titulo: "24. Anemia falciforme",
      contenido: [
        "Enfermedad AR causada por mutación missense en β-globina."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características",
      items: [
        "Eritrocitos falciformes.",
        "Hemólisis.",
        "Crisis vasooclusivas."
      ]
    },

    {
      tipo: "texto",
      titulo: "25. Mutaciones de novo",
      contenido: [
        "Algunas enfermedades dominantes aparecen por mutaciones nuevas sin antecedentes familiares."
      ]
    },

    {
      tipo: "lista",
      titulo: "Ejemplos",
      items: [
        "Acondroplasia.",
        "Neurofibromatosis."
      ]
    },

    {
      tipo: "texto",
      titulo: "26. Consejo genético",
      contenido: [
        "Las enfermedades monogénicas requieren evaluación de riesgo hereditario y orientación familiar."
      ]
    },

    {
      tipo: "lista",
      titulo: "Objetivos",
      items: [
        "Calcular riesgo recurrencia.",
        "Explicar patrón hereditario.",
        "Orientar diagnóstico.",
        "Discutir opciones reproductivas."
      ]
    },

    {
      tipo: "texto",
      titulo: "27. Conceptos integradores",
      contenido: [
        "Las enfermedades monogénicas siguen patrones hereditarios relativamente predecibles.",
        "La clínica depende del gen afectado, mecanismo molecular y modificadores genéticos/ambientales."
      ]
    },

    {
      tipo: "lista",
      titulo: "28. Lo MÁS importante para examen",
      items: [
        "AD = transmisión vertical.",
        "AR = padres sanos + consanguinidad.",
        "XR = no hay transmisión padre-hijo.",
        "Mitocondrial = herencia materna.",
        "Penetrancia ≠ expresividad.",
        "Anticipación = expansión tripletes.",
        "Pleiotropía = múltiples órganos.",
        "Marfan = AD.",
        "Fibrosis quística = AR.",
        "Hemofilia y Duchenne = XR."
      ]
    }
  ]
},

enf_complejas: {
  titulo: "Enfermedades Complejas / Multifactoriales",
  fuente: "Teórico 6 + TP6 + resúmenes enviados",

  secciones: [
    {
      tipo: "texto",
      titulo: "1. Conceptos generales",
      contenido: [
        "Las enfermedades complejas o multifactoriales corresponden a trastornos NO mendelianos.",
        "Son el resultado de interacciones complejas entre múltiples factores genéticos y ambientales.",
        "Participan uno o varios loci genéticos junto con factores ambientales que desencadenan o aceleran la enfermedad."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Idea central",
      contenido:
        "Enfermedades complejas = genes + ambiente."
    },

    {
      tipo: "texto",
      titulo: "2. Características generales",
      contenido: [
        "Las enfermedades multifactoriales no siguen patrones mendelianos clásicos."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características importantes",
      items: [
        "Agregación familiar.",
        "Mayor frecuencia en parientes cercanos.",
        "Disminución progresiva del riesgo en parientes lejanos.",
        "Concordancia mayor en gemelos monocigóticos que dicigóticos.",
        "Concordancia MZ menor a 100%.",
        "Participación genética y ambiental."
      ]
    },

    {
      tipo: "advertencia",
      titulo: "Muy importante",
      contenido:
        "Las enfermedades complejas NO presentan herencia mendeliana típica."
    },

    {
      tipo: "texto",
      titulo: "3. Agregación familiar",
      contenido: [
        "La enfermedad aparece con mayor frecuencia en familiares de individuos afectados que en la población general."
      ]
    },

    {
      tipo: "lista",
      titulo: "Interpretación",
      items: [
        "Sugiere componente genético.",
        "No demuestra exclusivamente herencia genética.",
        "También puede influir ambiente compartido."
      ]
    },

    {
      tipo: "texto",
      titulo: "4. Riesgo relativo λr",
      contenido: [
        "El riesgo relativo λr mide agregación familiar."
      ]
    },

    {
      tipo: "lista",
      titulo: "Fórmula",
      items: [
        "λr = prevalencia en familiares / prevalencia poblacional"
      ]
    },

    {
      tipo: "lista",
      titulo: "Interpretación",
      items: [
        "λr = 1 → no existe agregación familiar.",
        "λr elevado → mayor componente genético."
      ]
    },

    {
      tipo: "alerta",
      titulo: "λr",
      contenido:
        "Mientras mayor λr, mayor evidencia de participación genética."
    },

    {
      tipo: "texto",
      titulo: "5. Concordancia y discordancia",
      contenido: [
        "Concordancia significa que dos individuos presentan el mismo trastorno.",
        "Discordancia significa que solo uno está afectado."
      ]
    },

    {
      tipo: "lista",
      titulo: "Interpretación",
      items: [
        "Mayor concordancia → mayor componente genético.",
        "Discordancia en MZ demuestra influencia ambiental."
      ]
    },

    {
      tipo: "texto",
      titulo: "6. Estudios de gemelos",
      contenido: [
        "Los estudios en gemelos permiten separar componentes genéticos y ambientales."
      ]
    },

    {
      tipo: "lista",
      titulo: "Conceptos importantes",
      items: [
        "Gemelos monocigóticos comparten ~100% genes.",
        "Gemelos dicigóticos comparten ~50% genes.",
        "MZ presentan mayor concordancia que DZ."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Concepto clave",
      contenido:
        "Si concordancia MZ < 100%, existe influencia ambiental."
    },

    {
      tipo: "texto",
      titulo: "7. Estudios familiares",
      contenido: [
        "La frecuencia de enfermedad disminuye progresivamente al alejarse el grado de parentesco."
      ]
    },

    {
      tipo: "lista",
      titulo: "Interpretación",
      items: [
        "Parientes cercanos comparten más genes.",
        "Mayor riesgo en familiares cercanos."
      ]
    },

    {
      tipo: "texto",
      titulo: "8. Familiares no biológicos",
      contenido: [
        "Comparar familiares biológicos con individuos que comparten ambiente pero no genes ayuda a separar ambiente y genética."
      ]
    },

    {
      tipo: "lista",
      titulo: "Ejemplo",
      items: [
        "Hijos adoptados."
      ]
    },

    {
      tipo: "texto",
      titulo: "9. Herencia umbral",
      contenido: [
        "Las enfermedades multifactoriales suelen seguir un modelo de umbral de manifestación."
      ]
    },

    {
      tipo: "lista",
      titulo: "Concepto",
      items: [
        "Existe predisposición genética continua.",
        "La enfermedad aparece al superar cierto umbral."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Herencia umbral",
      contenido:
        "No basta un solo gen; se acumulan múltiples factores."
    },

    {
      tipo: "texto",
      titulo: "10. Rasgos cualitativos y cuantitativos",
      contenido: [
        "Los trastornos complejos pueden analizarse como rasgos cualitativos o cuantitativos."
      ]
    },

    {
      tipo: "lista",
      titulo: "Rasgos cualitativos",
      items: [
        "Presencia o ausencia de enfermedad."
      ]
    },

    {
      tipo: "lista",
      titulo: "Rasgos cuantitativos",
      items: [
        "Características medibles fisiológicas o bioquímicas."
      ]
    },

    {
      tipo: "texto",
      titulo: "11. GWAS",
      contenido: [
        "Los Genome Wide Association Studies buscan asociaciones entre SNP y enfermedades complejas."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características",
      items: [
        "Analizan miles de SNPs.",
        "Utilizan grandes poblaciones.",
        "Buscan asociaciones estadísticas."
      ]
    },

    {
      tipo: "lista",
      titulo: "Conceptos asociados",
      items: [
        "Desequilibrio de ligamiento.",
        "OR (odds ratio).",
        "RR (riesgo relativo)."
      ]
    },

    {
      tipo: "advertencia",
      titulo: "Limitaciones GWAS",
      contenido:
        "Pueden presentar falsos positivos y no consideran completamente interacciones génicas."
    },

    {
      tipo: "texto",
      titulo: "12. Limitaciones de GWAS",
      contenido: [
        "Los GWAS presentan múltiples limitaciones metodológicas."
      ]
    },

    {
      tipo: "lista",
      titulo: "Limitaciones importantes",
      items: [
        "Requieren gran número de individuos.",
        "Muchos falsos positivos.",
        "No consideran completamente interacciones genéticas.",
        "No prueban causalidad."
      ]
    },

    {
      tipo: "texto",
      titulo: "13. Diabetes Mellitus tipo 1",
      contenido: [
        "La DM1 posee fuerte componente inmunogenético."
      ]
    },

    {
      tipo: "lista",
      titulo: "Genes importantes",
      items: [
        "HLA DR3.",
        "HLA DR4."
      ]
    },

    {
      tipo: "lista",
      titulo: "Genes protectores",
      items: [
        "HLA DR2."
      ]
    },

    {
      tipo: "lista",
      titulo: "Concordancia",
      items: [
        "MZ ≈ 40%.",
        "DZ ≈ 4.8%."
      ]
    },

    {
      tipo: "alerta",
      titulo: "DM1",
      contenido:
        "Concordancia MZ menor 100% demuestra componente ambiental."
    },

    {
      tipo: "texto",
      titulo: "14. Diabetes Mellitus tipo 2",
      contenido: [
        "La DM2 posee fuerte componente genético y ambiental."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características",
      items: [
        "Importante influencia ambiental.",
        "Alta concordancia en gemelos monocigóticos."
      ]
    },

    {
      tipo: "lista",
      titulo: "Concordancia",
      items: [
        "MZ ≈ 80%."
      ]
    },

    {
      tipo: "texto",
      titulo: "15. Enfermedad de Alzheimer",
      contenido: [
        "La enfermedad de Alzheimer presenta formas complejas y familiares."
      ]
    },

    {
      tipo: "lista",
      titulo: "Genes importantes",
      items: [
        "APOE ε4 (cromosoma 19).",
        "APP (cromosoma 21).",
        "PS1 (cromosoma 14).",
        "PS2 (cromosoma 1)."
      ]
    },

    {
      tipo: "lista",
      titulo: "Concepto importante",
      items: [
        "Participación del péptido beta-amiloide."
      ]
    },

    {
      tipo: "texto",
      titulo: "16. Esclerosis múltiple",
      contenido: [
        "La esclerosis múltiple presenta importante agregación familiar."
      ]
    },

    {
      tipo: "lista",
      titulo: "Dato importante",
      items: [
        "λr ≈ 40 en familiares de primer grado."
      ]
    },

    {
      tipo: "texto",
      titulo: "17. Concordancia en enfermedades complejas",
      contenido: [
        "La concordancia entre gemelos monocigóticos nunca suele alcanzar 100%."
      ]
    },

    {
      tipo: "lista",
      titulo: "Interpretación",
      items: [
        "Siempre existe aporte ambiental.",
        "La genética sola no explica completamente enfermedad."
      ]
    },

    {
      tipo: "texto",
      titulo: "18. Influencia ambiental",
      contenido: [
        "Factores ambientales pueden desencadenar o acelerar enfermedad."
      ]
    },

    {
      tipo: "lista",
      titulo: "Factores importantes",
      items: [
        "Dieta.",
        "Tóxicos.",
        "Infecciones.",
        "Estilo de vida.",
        "Ambiente intrauterino."
      ]
    },

    {
      tipo: "texto",
      titulo: "19. Diferencias con enfermedades monogénicas",
      contenido: [
        "Las enfermedades complejas presentan diferencias fundamentales respecto a trastornos mendelianos."
      ]
    },

    {
      tipo: "lista",
      titulo: "Comparación",
      items: [
        "No siguen herencia mendeliana.",
        "Participan múltiples genes.",
        "Existe fuerte influencia ambiental.",
        "Riesgo probabilístico y no determinístico."
      ]
    },

    {
      tipo: "advertencia",
      titulo: "Muy preguntado",
      contenido:
        "Multifactorial NO significa ausencia de genética."
    },

    {
      tipo: "texto",
      titulo: "20. Conceptos integradores",
      contenido: [
        "Las enfermedades complejas resultan de interacción dinámica entre predisposición genética y ambiente.",
        "La genética aumenta susceptibilidad, pero el ambiente frecuentemente determina manifestación clínica."
      ]
    },

    {
      tipo: "lista",
      titulo: "21. Lo MÁS importante para examen",
      items: [
        "No mendelianas.",
        "Genes + ambiente.",
        "Agregación familiar.",
        "MZ > DZ.",
        "MZ < 100%.",
        "λr mide agregación familiar.",
        "Herencia umbral.",
        "GWAS = asociación SNP.",
        "DM1 → HLA DR3/DR4.",
        "Alzheimer → APOE ε4."
      ]
    }
  ]
},

cancer: {
  titulo: "Genética del Cáncer",
  fuente: "Teórico 6 + TP6 + resúmenes enviados",

  secciones: [
    {
      tipo: "texto",
      titulo: "1. Concepto general de cáncer",
      contenido: [
        "El cáncer es una enfermedad genética celular. Esto significa que se origina por alteraciones en el material genético de una célula, las cuales modifican su comportamiento normal.",
        "Una célula normal tiene mecanismos que regulan cuándo debe dividirse, cuándo debe detener su ciclo celular, cuándo debe reparar su ADN y cuándo debe morir por apoptosis si el daño es demasiado grande.",
        "En el cáncer, estos mecanismos se alteran progresivamente. La célula comienza a dividirse de forma descontrolada, evade señales de freno, acumula más mutaciones y puede adquirir capacidad de invadir tejidos o diseminarse a distancia.",
        "No basta una sola mutación para explicar la mayoría de los tumores. El cáncer suele desarrollarse como un proceso multietapa, donde se acumulan distintas alteraciones genéticas y epigenéticas a lo largo del tiempo.",
        "Por eso el cáncer se entiende como un proceso de evolución clonal: una célula adquiere una alteración que le da ventaja, se multiplica, luego algunas de sus células hijas adquieren nuevas alteraciones, y así se seleccionan clones cada vez más agresivos."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Idea clave",
      contenido:
        "El cáncer no es simplemente “muchas células creciendo”. Es una enfermedad genética donde una célula acumula alteraciones que le permiten escapar del control normal del organismo."
    },

    {
      tipo: "texto",
      titulo: "2. Origen monoclonal del cáncer",
      contenido: [
        "Muchos tumores tienen origen monoclonal, es decir, derivan de una única célula inicial que adquirió una mutación o alteración con ventaja proliferativa.",
        "Esa célula alterada comienza a multiplicarse y genera un clon celular. Con el tiempo, dentro de ese clon aparecen nuevas mutaciones, originando subclones tumorales diferentes.",
        "Esto explica por qué un tumor puede ser heterogéneo: aunque comenzó desde una célula, las células tumorales no son todas idénticas cuando el cáncer progresa.",
        "La heterogeneidad tumoral es importante porque algunos subclones pueden ser más invasivos, más resistentes al tratamiento o tener mayor capacidad metastásica."
      ]
    },

    {
      tipo: "texto",
      titulo: "3. Progresión tumoral",
      contenido: [
        "La progresión tumoral corresponde al avance gradual desde una célula alterada hacia un tumor cada vez más agresivo.",
        "Durante este proceso se acumulan mutaciones en genes que regulan proliferación, reparación del ADN, apoptosis, adhesión celular, angiogénesis e invasión.",
        "La progresión tumoral no ocurre de manera ordenada o idéntica en todos los cánceres. Depende del tipo celular, del tejido, de las mutaciones adquiridas y de factores ambientales.",
        "A medida que progresa, el tumor puede adquirir mayor velocidad de crecimiento, capacidad de invadir tejidos vecinos, resistencia a señales inhibitorias y capacidad de metastatizar."
      ]
    },

    {
      tipo: "lista",
      titulo: "La progresión tumoral implica",
      items: [
        "Expansión clonal de células alteradas.",
        "Acumulación progresiva de mutaciones.",
        "Heterogeneidad entre células tumorales.",
        "Selección de clones con mayor ventaja proliferativa.",
        "Mayor agresividad biológica con el tiempo."
      ]
    },

    {
      tipo: "texto",
      titulo: "4. Mutaciones somáticas y germinales",
      contenido: [
        "Las mutaciones relacionadas con cáncer pueden ser somáticas o germinales.",
        "Las mutaciones somáticas aparecen durante la vida del individuo. Se producen en células del cuerpo y no están presentes en todas las células del organismo. No se transmiten a la descendencia.",
        "La mayoría de los cánceres son esporádicos y se deben a mutaciones somáticas acumuladas por envejecimiento, errores de replicación o exposición a carcinógenos como tabaco, radiación, químicos o virus.",
        "Las mutaciones germinales, en cambio, están presentes desde la concepción porque fueron heredadas a través del óvulo o espermatozoide. Por eso están presentes en prácticamente todas las células del cuerpo.",
        "Una mutación germinal no significa que la persona ya tenga cáncer, sino que tiene una predisposición aumentada. Luego deben ocurrir eventos adicionales, muchas veces somáticos, para que se desarrolle el tumor."
      ]
    },

    {
      tipo: "lista",
      titulo: "Mutación somática",
      items: [
        "Se adquiere durante la vida.",
        "Afecta solo a ciertas células.",
        "No se hereda.",
        "Explica la mayoría de los cánceres esporádicos.",
        "Puede originarse por errores replicativos o carcinógenos ambientales."
      ]
    },

    {
      tipo: "lista",
      titulo: "Mutación germinal",
      items: [
        "Está presente desde el nacimiento.",
        "Puede heredarse.",
        "Está presente en muchas o todas las células del organismo.",
        "Predispone a cáncer hereditario.",
        "Suele asociarse a inicio más precoz y agregación familiar."
      ]
    },

    {
      tipo: "texto",
      titulo: "5. Cáncer esporádico vs cáncer hereditario",
      contenido: [
        "La mayoría de los cánceres humanos son esporádicos. Esto significa que ocurren por acumulación de mutaciones somáticas durante la vida del individuo.",
        "En el cáncer esporádico, la persona no nace necesariamente con una mutación predisponente. Las alteraciones se van acumulando con el tiempo, por lo que estos cánceres suelen aparecer a edades más avanzadas.",
        "Además, en los cánceres esporádicos generalmente no existe un patrón familiar claro, aunque puede haber antecedentes aislados por azar o por exposición ambiental compartida.",
        "En el cáncer hereditario, la persona nace con una mutación germinal en un gen relacionado con cáncer. Esto no significa que hereda el cáncer, sino que hereda una predisposición.",
        "Como el individuo ya tiene una primera alteración desde el nacimiento, necesita menos eventos adicionales para desarrollar cáncer. Por eso estos tumores suelen aparecer antes, pueden ser bilaterales, múltiples o repetirse en varios familiares."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Frase clave",
      contenido:
        "En cáncer hereditario se hereda la predisposición, no el cáncer como tal."
    },

    {
      tipo: "texto",
      titulo: "6. Capacidades adquiridas por células tumorales",
      contenido: [
        "Durante la carcinogénesis, las células tumorales adquieren capacidades que les permiten crecer, sobrevivir y expandirse más allá de los límites normales.",
        "Estas capacidades no aparecen todas al mismo tiempo. Se van adquiriendo progresivamente mediante mutaciones y selección clonal."
      ]
    },

    {
      tipo: "texto",
      titulo: "6.1 Proliferación autónoma",
      contenido: [
        "Las células normales necesitan señales externas para dividirse, como factores de crecimiento enviados por otras células.",
        "Las células tumorales pueden activar vías internas de proliferación, incluso cuando no reciben señales externas.",
        "Esto suele ocurrir por activación de oncogenes, que mantienen encendidas rutas de crecimiento celular.",
        "Como consecuencia, la célula se divide sin respetar los controles normales del tejido."
      ]
    },

    {
      tipo: "texto",
      titulo: "6.2 Insensibilidad a señales inhibitorias",
      contenido: [
        "El organismo posee señales que indican a las células cuándo deben detenerse. Estas señales evitan que un tejido crezca más de lo necesario.",
        "Las células tumorales pueden perder la capacidad de responder a estas señales de freno.",
        "Esto ocurre frecuentemente por alteraciones en genes supresores tumorales, como RB o TP53.",
        "El resultado es que la célula continúa el ciclo celular aunque debería detenerse."
      ]
    },

    {
      tipo: "texto",
      titulo: "6.3 Resistencia a apoptosis",
      contenido: [
        "La apoptosis es la muerte celular programada. Es un mecanismo de seguridad que elimina células dañadas, envejecidas o potencialmente peligrosas.",
        "Si una célula acumula daño genético grave, debería activar apoptosis para evitar que ese daño se propague.",
        "Las células tumorales pueden evadir apoptosis, lo que les permite sobrevivir incluso con ADN alterado.",
        "Esta resistencia facilita la acumulación de nuevas mutaciones y favorece progresión tumoral."
      ]
    },

    {
      tipo: "texto",
      titulo: "6.4 Potencial replicativo ilimitado",
      contenido: [
        "Las células normales tienen un número limitado de divisiones. Una razón importante es el acortamiento progresivo de los telómeros.",
        "Los telómeros protegen los extremos cromosómicos, pero se acortan con cada división celular.",
        "Cuando se acortan demasiado, la célula entra en senescencia o muere.",
        "Muchas células tumorales activan telomerasa, una enzima que mantiene los telómeros, permitiendo divisiones indefinidas.",
        "Esto contribuye a la inmortalidad celular tumoral."
      ]
    },

    {
      tipo: "texto",
      titulo: "6.5 Angiogénesis",
      contenido: [
        "Para crecer más allá de cierto tamaño, un tumor necesita oxígeno y nutrientes.",
        "Si no forma vasos sanguíneos nuevos, su crecimiento queda limitado.",
        "Las células tumorales pueden estimular angiogénesis, es decir, formación de nuevos vasos sanguíneos.",
        "Esto permite que el tumor reciba nutrientes, elimine desechos y además facilita la entrada de células tumorales a la circulación.",
        "Por eso la angiogénesis favorece tanto el crecimiento tumoral como la metástasis."
      ]
    },

    {
      tipo: "texto",
      titulo: "6.6 Invasión tisular",
      contenido: [
        "Las células normales respetan límites anatómicos y permanecen organizadas dentro del tejido.",
        "Las células tumorales pueden perder adhesión normal, degradar matriz extracelular y atravesar membranas basales.",
        "Esto les permite invadir tejidos vecinos.",
        "La invasión local es un paso clave que diferencia tumores benignos de tumores malignos."
      ]
    },

    {
      tipo: "texto",
      titulo: "6.7 Metástasis",
      contenido: [
        "La metástasis es la diseminación de células tumorales desde el tumor primario hacia órganos distantes.",
        "Para metastatizar, una célula tumoral debe invadir tejido, entrar a vasos sanguíneos o linfáticos, sobrevivir en circulación, salir hacia otro órgano y colonizarlo.",
        "No todas las células tumorales logran metastatizar; es un proceso complejo e ineficiente.",
        "Sin embargo, cuando ocurre, suele marcar mayor gravedad clínica.",
        "La metástasis es una de las principales causas de muerte por cáncer."
      ]
    },

    {
      tipo: "texto",
      titulo: "6.8 Inestabilidad genética",
      contenido: [
        "La inestabilidad genética es la tendencia aumentada de las células tumorales a acumular nuevas alteraciones en su ADN.",
        "Puede deberse a fallas en reparación del ADN, alteraciones del ciclo celular o pérdida de genes supresores.",
        "Mientras más inestable es el genoma tumoral, más rápido pueden aparecer subclones con ventajas adaptativas.",
        "Esto favorece progresión tumoral, resistencia a tratamientos y heterogeneidad dentro del tumor."
      ]
    },

    {
      tipo: "texto",
      titulo: "7. Protooncogenes",
      contenido: [
        "Los protooncogenes son genes normales que participan en procesos fisiológicos de crecimiento, proliferación y supervivencia celular.",
        "Codifican proteínas que pueden actuar como factores de crecimiento, receptores de membrana, proteínas de señalización intracelular, factores de transcripción o reguladores del ciclo celular.",
        "En condiciones normales, su actividad está controlada. Se activan cuando la célula necesita crecer o dividirse, y luego se apagan.",
        "El problema aparece cuando un protooncogén sufre una alteración que lo mantiene activado de manera anormal."
      ]
    },

    {
      tipo: "texto",
      titulo: "8. Oncogenes",
      contenido: [
        "Un oncogén es un protooncogén alterado que favorece proliferación celular excesiva.",
        "Los oncogenes suelen actuar por ganancia de función. Esto significa que la proteína resultante queda hiperactiva, se produce en exceso o se expresa en un contexto donde no debería.",
        "A nivel celular, los oncogenes se comportan de forma dominante: basta con que una copia esté activada para favorecer transformación tumoral.",
        "Esto los diferencia de los genes supresores tumorales, que generalmente requieren pérdida de ambas copias."
      ]
    },

    {
      tipo: "lista",
      titulo: "Mecanismos de activación de oncogenes",
      items: [
        "Mutación puntual activadora: cambia la proteína y la deja hiperactiva.",
        "Amplificación génica: aumenta el número de copias del gen y se produce demasiada proteína.",
        "Translocación cromosómica: crea un gen de fusión o coloca el gen bajo control de un promotor activo.",
        "Sobreexpresión: el gen normal se expresa en exceso."
      ]
    },

    {
      tipo: "texto",
      titulo: "8.1 Mutación puntual de oncogenes",
      contenido: [
        "Una mutación puntual puede cambiar la estructura de una proteína de señalización y dejarla activa permanentemente.",
        "Un ejemplo clásico es RAS. En condiciones normales, RAS transmite señales de crecimiento desde receptores de membrana hacia el núcleo.",
        "Cuando RAS se altera, puede permanecer activado incluso sin señal externa.",
        "Esto provoca proliferación continua, ya que la célula interpreta falsamente que debe seguir dividiéndose."
      ]
    },

    {
      tipo: "texto",
      titulo: "8.2 Amplificación génica",
      contenido: [
        "La amplificación génica ocurre cuando una célula posee muchas copias de un gen.",
        "Si el gen amplificado estimula crecimiento, la célula producirá demasiada proteína proliferativa.",
        "Esto puede aumentar agresividad tumoral.",
        "En cáncer, la amplificación de oncogenes es importante porque incrementa la señal de crecimiento sin necesidad de cambiar la secuencia del gen."
      ]
    },

    {
      tipo: "texto",
      titulo: "8.3 Translocaciones oncogénicas",
      contenido: [
        "Una translocación cromosómica puede activar un oncogén de dos maneras principales.",
        "Primero, puede formar un gen de fusión con una proteína nueva y anormal.",
        "Segundo, puede colocar un gen normal cerca de regiones reguladoras muy activas, causando sobreexpresión.",
        "Un ejemplo clásico es el cromosoma Philadelphia, producido por t(9;22), que genera el gen de fusión BCR-ABL.",
        "BCR-ABL codifica una tirosina quinasa constitutivamente activa, es decir, permanentemente encendida, que estimula proliferación en leucemia mieloide crónica.",
        "Otro ejemplo clásico es la translocación t(8;14), asociada a activación de c-MYC en linfoma de Burkitt."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Oncogenes — idea de examen",
      contenido:
        "Oncogén = acelerador trabado. La célula recibe señales constantes de proliferación aunque no debería dividirse."
    },

    {
      tipo: "texto",
      titulo: "9. Genes supresores tumorales",
      contenido: [
        "Los genes supresores tumorales cumplen la función opuesta a los oncogenes.",
        "Actúan como frenos del crecimiento celular, manteniendo el ciclo celular bajo control.",
        "También pueden participar en reparación del ADN, apoptosis y mantenimiento de estabilidad genómica.",
        "Cuando un gen supresor tumoral se pierde o inactiva, la célula pierde un mecanismo de control importante.",
        "A diferencia de los oncogenes, los genes supresores suelen causar cáncer por pérdida de función."
      ]
    },

    {
      tipo: "lista",
      titulo: "Funciones de genes supresores tumorales",
      items: [
        "Detener el ciclo celular si hay daño.",
        "Permitir reparación del ADN.",
        "Inducir apoptosis si el daño no puede repararse.",
        "Evitar proliferación excesiva.",
        "Mantener estabilidad genómica."
      ]
    },

    {
      tipo: "texto",
      titulo: "10. Hipótesis de los dos eventos de Knudson",
      contenido: [
        "La hipótesis de los dos eventos o two-hit explica cómo se inactivan muchos genes supresores tumorales.",
        "Como tenemos dos copias de la mayoría de los genes, una copia sana puede compensar la pérdida de la otra.",
        "Por eso, para perder completamente la función de un gen supresor tumoral, suelen requerirse dos eventos: uno que afecte una copia y otro que afecte la copia restante.",
        "En cáncer hereditario, el primer evento puede estar presente desde el nacimiento como mutación germinal.",
        "Luego, una segunda mutación somática inactiva la copia normal restante en una célula específica.",
        "En cáncer esporádico, ambos eventos ocurren somáticamente en la misma línea celular."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Two-hit",
      contenido:
        "En genes supresores tumorales suele ser necesario perder ambas copias para eliminar completamente el freno celular."
    },

    {
      tipo: "texto",
      titulo: "11. Retinoblastoma y gen RB",
      contenido: [
        "El retinoblastoma es el ejemplo clásico de la hipótesis de Knudson.",
        "El gen RB es un gen supresor tumoral ubicado en 13q14.",
        "La proteína RB regula el paso de G1 a S en el ciclo celular. Es decir, ayuda a decidir si una célula puede entrar en fase de síntesis de ADN.",
        "Cuando RB funciona, evita que células con señales inadecuadas proliferen.",
        "Cuando ambas copias de RB se inactivan, la célula pierde este control y puede dividirse de forma anormal.",
        "En la forma hereditaria, el niño nace con una copia alterada en todas sus células. Solo necesita perder la segunda copia en una célula retiniana para desarrollar tumor.",
        "Por eso el retinoblastoma hereditario suele aparecer antes y puede ser bilateral.",
        "En la forma esporádica, ambas copias deben alterarse en una misma célula somática, por lo que suele aparecer más tarde y generalmente es unilateral."
      ]
    },

    {
      tipo: "texto",
      titulo: "12. TP53: guardián del genoma",
      contenido: [
        "TP53 es uno de los genes supresores tumorales más importantes.",
        "Su producto, p53, actúa como sensor de daño genético.",
        "Cuando una célula presenta daño en el ADN, p53 puede detener el ciclo celular para dar tiempo a la reparación.",
        "Si el daño es demasiado severo y no puede repararse, p53 puede inducir apoptosis.",
        "Por eso se le llama guardián del genoma: impide que células con ADN dañado sigan dividiéndose.",
        "Si TP53 se inactiva, las células con mutaciones pueden sobrevivir, dividirse y acumular nuevas alteraciones.",
        "Esto favorece inestabilidad genómica y progresión tumoral."
      ]
    },

    {
      tipo: "texto",
      titulo: "13. Síndrome de Li-Fraumeni",
      contenido: [
        "El síndrome de Li-Fraumeni es un síndrome de predisposición hereditaria al cáncer asociado a mutaciones germinales en TP53.",
        "Como TP53 participa en vigilancia del daño genético, su alteración aumenta riesgo de múltiples tumores.",
        "Suele asociarse a aparición de cánceres a edades tempranas y en distintos tejidos.",
        "La importancia clínica es que una familia con mutación germinal en TP53 requiere vigilancia estrecha porque la predisposición afecta varios órganos."
      ]
    },

    {
      tipo: "texto",
      titulo: "14. Genes de reparación del ADN",
      contenido: [
        "El ADN se daña continuamente por errores de replicación, radiación, sustancias químicas y procesos metabólicos normales.",
        "Las células poseen sistemas de reparación que corrigen estos errores antes de que se fijen como mutaciones.",
        "Cuando los genes de reparación fallan, aumenta la tasa de mutación.",
        "Esto no necesariamente inicia un tumor de inmediato, pero aumenta la probabilidad de acumular alteraciones en oncogenes y genes supresores tumorales.",
        "Por eso los defectos de reparación del ADN son una causa importante de predisposición al cáncer."
      ]
    },

    {
      tipo: "texto",
      titulo: "15. Síndrome de Lynch e inestabilidad microsatelital",
      contenido: [
        "El síndrome de Lynch es un síndrome hereditario asociado a defectos en genes de reparación mismatch.",
        "El sistema mismatch repair corrige errores pequeños que ocurren durante la replicación del ADN, especialmente apareamientos incorrectos de bases.",
        "Cuando este sistema falla, se acumulan errores en regiones repetitivas del genoma llamadas microsatélites.",
        "Esto produce inestabilidad microsatelital.",
        "La consecuencia clínica más importante es predisposición a cáncer colorrectal hereditario, aunque también puede asociarse a otros tumores."
      ]
    },

    {
      tipo: "texto",
      titulo: "16. BRCA1 y BRCA2",
      contenido: [
        "BRCA1 y BRCA2 son genes involucrados en reparación del ADN, especialmente reparación de rupturas de doble cadena.",
        "Cuando estos genes están alterados, la célula pierde eficiencia para reparar daño genético importante.",
        "Esto favorece acumulación de mutaciones y aumenta riesgo de cáncer.",
        "Las mutaciones germinales en BRCA1 o BRCA2 se asocian especialmente a cáncer de mama y ovario hereditario.",
        "Como son mutaciones germinales, pueden transmitirse dentro de una familia."
      ]
    },

    {
      tipo: "texto",
      titulo: "17. APC y poliposis adenomatosa familiar",
      contenido: [
        "APC es un gen supresor tumoral relacionado con control de proliferación en epitelio intestinal.",
        "Las mutaciones germinales en APC causan poliposis adenomatosa familiar.",
        "En esta enfermedad aparecen numerosos pólipos en el colon.",
        "Cada pólipo representa una lesión con potencial de transformación maligna.",
        "Mientras mayor número de pólipos, mayor probabilidad de que alguno acumule nuevas mutaciones y progrese a cáncer colorrectal."
      ]
    },

    {
      tipo: "texto",
      titulo: "18. Apoptosis y cáncer",
      contenido: [
        "La apoptosis es un mecanismo de muerte celular programada.",
        "Sirve para eliminar células dañadas, innecesarias o peligrosas.",
        "En condiciones normales, una célula con daño genético grave debería detenerse o morir.",
        "Si una célula tumoral logra evadir apoptosis, puede sobrevivir incluso con alteraciones importantes en su ADN.",
        "Esto favorece progresión tumoral porque permite que células genéticamente anormales continúen dividiéndose."
      ]
    },

    {
      tipo: "texto",
      titulo: "19. Inmortalidad celular y telomerasa",
      contenido: [
        "Las células normales tienen un límite replicativo asociado al acortamiento progresivo de telómeros.",
        "Los telómeros son secuencias repetidas ubicadas en extremos cromosómicos que protegen al ADN.",
        "Con cada división celular los telómeros se acortan.",
        "Cuando se acortan demasiado, la célula entra en senescencia o apoptosis.",
        "Muchas células tumorales reactivan telomerasa, una enzima que mantiene los telómeros.",
        "Esto permite que la célula tumoral continúe dividiéndose de manera indefinida, aportando inmortalidad replicativa."
      ]
    },

    {
      tipo: "texto",
      titulo: "20. Angiogénesis tumoral",
      contenido: [
        "Un tumor pequeño puede recibir oxígeno y nutrientes por difusión.",
        "Pero cuando crece, necesita formar vasos sanguíneos nuevos para sostener su expansión.",
        "Las células tumorales pueden producir señales angiogénicas que estimulan crecimiento de vasos hacia el tumor.",
        "Estos vasos aportan oxígeno, nutrientes y una vía para que células tumorales entren a la circulación.",
        "Por eso la angiogénesis no solo permite crecimiento tumoral, sino que también facilita metástasis."
      ]
    },

    {
      tipo: "texto",
      titulo: "21. Invasión y metástasis",
      contenido: [
        "La invasión es la capacidad de las células tumorales de atravesar límites tisulares normales.",
        "Para invadir, las células deben perder adhesión normal, modificar su interacción con el tejido vecino y degradar matriz extracelular.",
        "La metástasis es un paso posterior y más complejo: implica diseminación a distancia.",
        "Una célula metastásica debe desprenderse del tumor primario, entrar a circulación, sobrevivir, salir en otro tejido y proliferar en ese nuevo ambiente.",
        "La metástasis es clínicamente muy importante porque suele asociarse a peor pronóstico."
      ]
    },

    {
      tipo: "texto",
      titulo: "22. Cambios citogenéticos en cáncer",
      contenido: [
        "Muchos cánceres presentan alteraciones cromosómicas detectables por técnicas citogenéticas.",
        "Estas alteraciones pueden ser numéricas o estructurales.",
        "Algunas translocaciones son características de ciertos tumores y pueden ayudar al diagnóstico.",
        "Por ejemplo, el cromosoma Philadelphia t(9;22) genera BCR-ABL en leucemia mieloide crónica.",
        "La translocación t(8;14) puede activar c-MYC en linfoma de Burkitt.",
        "Estos cambios no solo ayudan a entender el mecanismo del tumor, sino que también pueden tener valor diagnóstico, pronóstico o terapéutico."
      ]
    },

    {
      tipo: "texto",
      titulo: "23. MicroARN y oncomirs",
      contenido: [
        "Los microARN son pequeños ARN no codificantes que regulan expresión génica.",
        "Pueden disminuir la traducción o favorecer degradación de ARN mensajeros específicos.",
        "En cáncer, algunos microARN pueden actuar regulando oncogenes o genes supresores tumorales.",
        "Cuando un microARN favorece desarrollo tumoral se denomina oncomir.",
        "Los oncomirs pueden contribuir a proliferación, evasión de apoptosis, invasión o progresión tumoral."
      ]
    },

    {
      tipo: "texto",
      titulo: "24. Clasificación de tumores según tejido de origen",
      contenido: [
        "Los tumores también pueden clasificarse según el tejido del cual derivan.",
        "Esta clasificación es importante porque orienta diagnóstico, comportamiento biológico y tratamiento.",
        "Los carcinomas derivan de tejido epitelial.",
        "Los sarcomas derivan de tejido mesenquimático, como hueso, músculo, grasa o tejido conectivo.",
        "Los tumores hematopoyéticos derivan de células sanguíneas o del sistema inmune, como leucemias y linfomas."
      ]
    },

    {
      tipo: "lista",
      titulo: "Tipos generales",
      items: [
        "Carcinomas: origen epitelial.",
        "Sarcomas: origen mesenquimático.",
        "Leucemias y linfomas: origen hematopoyético o linfoide."
      ]
    },

    {
      tipo: "texto",
      titulo: "25. Driver mutations y passenger mutations",
      contenido: [
        "No todas las mutaciones presentes en un tumor tienen la misma importancia.",
        "Las mutaciones driver son aquellas que contribuyen directamente al desarrollo o progresión tumoral.",
        "Estas mutaciones entregan ventajas como mayor proliferación, supervivencia, invasión o resistencia terapéutica.",
        "Las mutaciones passenger, en cambio, aparecen como consecuencia de la inestabilidad genética del tumor, pero no son responsables principales del crecimiento tumoral.",
        "Distinguir driver de passenger es importante porque las mutaciones driver pueden ser blancos terapéuticos."
      ]
    },

    {
      tipo: "texto",
      titulo: "26. Diferencia entre oncogenes y genes supresores tumorales",
      contenido: [
        "Los oncogenes y genes supresores tumorales participan en cáncer, pero funcionan de manera opuesta.",
        "Un oncogén se activa de forma anormal y actúa como acelerador del crecimiento celular.",
        "Un gen supresor tumoral se pierde o inactiva y deja de funcionar como freno.",
        "En oncogenes suele bastar una copia alterada porque el problema es ganancia de función.",
        "En genes supresores generalmente deben perderse ambas copias porque el problema es pérdida de función."
      ]
    },

    {
      tipo: "lista",
      titulo: "Comparación rápida",
      items: [
        "Oncogén: ganancia de función.",
        "Supresor tumoral: pérdida de función.",
        "Oncogén: una copia alterada puede bastar.",
        "Supresor tumoral: suelen requerirse dos eventos.",
        "Oncogén: acelera crecimiento.",
        "Supresor tumoral: pierde el freno celular."
      ]
    },

    {
      tipo: "texto",
      titulo: "27. Importancia clínica de la genética del cáncer",
      contenido: [
        "Comprender la genética del cáncer permite explicar por qué se produce un tumor, cómo progresa y por qué puede responder o resistir tratamientos.",
        "También permite identificar familias con predisposición hereditaria.",
        "En algunos cánceres, detectar una alteración genética específica permite confirmar diagnóstico o elegir terapias dirigidas.",
        "Por ejemplo, conocer una translocación característica puede orientar diagnóstico hematológico, y conocer una mutación germinal puede modificar la vigilancia familiar."
      ]
    },

    {
      tipo: "lista",
      titulo: "Utilidades clínicas",
      items: [
        "Diagnóstico tumoral.",
        "Pronóstico.",
        "Selección de tratamiento.",
        "Identificación de cáncer hereditario.",
        "Consejo genético familiar.",
        "Vigilancia precoz en personas de alto riesgo."
      ]
    },

    {
      tipo: "lista",
      titulo: "28. Puntos clave para examen",
      items: [
        "El cáncer es una enfermedad genética celular.",
        "La mayoría de los cánceres son esporádicos.",
        "El cáncer hereditario implica predisposición germinal.",
        "Oncogenes = ganancia de función.",
        "Genes supresores tumorales = pérdida de función.",
        "Knudson/two-hit explica genes supresores.",
        "RB1 se asocia a retinoblastoma.",
        "TP53 es el guardián del genoma.",
        "BRCA1/2 participan en reparación del ADN.",
        "Lynch se asocia a reparación mismatch e inestabilidad microsatelital.",
        "APC se asocia a poliposis adenomatosa familiar.",
        "BCR-ABL por t(9;22) es clásico en LMC.",
        "c-MYC por t(8;14) es clásico en linfoma de Burkitt.",
        "Telomerasa favorece inmortalidad celular.",
        "Metástasis implica diseminación a distancia."
      ]
    }
  ]
},

pesquisa_neonatal: {
  titulo: "Pesquisa Neonatal",
  fuente: "Teóricos + TP + resúmenes integrados",

  secciones: [
    {
      tipo: "texto",
      titulo: "1. ¿Qué es la pesquisa neonatal?",
      contenido: [
        "La pesquisa neonatal, también llamada tamizaje neonatal, corresponde a un programa de salud pública destinado a detectar enfermedades graves en recién nacidos antes de que aparezcan síntomas clínicos.",
        "El objetivo no es diagnosticar de manera definitiva una enfermedad, sino identificar recién nacidos con mayor probabilidad de presentarla para derivarlos tempranamente a confirmación diagnóstica y tratamiento.",
        "Muchas enfermedades pesquisadas producen daño progresivo e irreversible durante los primeros días o meses de vida.",
        "Un problema importante es que muchos recién nacidos afectados parecen completamente sanos al nacer.",
        "Es decir, un niño puede presentar una enfermedad metabólica, endocrina o genética grave y aun así verse normal durante los primeros días.",
        "Sin pesquisa neonatal, el diagnóstico podría retrasarse hasta que aparezcan síntomas severos. Para ese momento, el daño puede ser irreversible."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Idea central",
      contenido:
        "La pesquisa neonatal busca detectar enfermedades graves antes de que produzcan daño clínico irreversible."
    },

    {
      tipo: "texto",
      titulo: "2. Objetivos de la pesquisa neonatal",
      contenido: [
        "Los programas de pesquisa neonatal buscan identificar enfermedades cuyo pronóstico cambia significativamente cuando el tratamiento se inicia de forma precoz.",
        "La detección temprana permite actuar antes de que aparezcan complicaciones neurológicas, metabólicas, endocrinas o sistémicas graves.",
        "Mientras antes se detecte una enfermedad pesquisable, mayor es la posibilidad de prevenir discapacidad, muerte o secuelas permanentes."
      ]
    },

    {
      tipo: "lista",
      titulo: "Objetivos principales",
      items: [
        "Diagnóstico precoz.",
        "Prevención de daño irreversible.",
        "Disminución de mortalidad.",
        "Disminución de discapacidad.",
        "Inicio temprano de tratamiento.",
        "Mejor calidad y expectativa de vida."
      ]
    },

    {
      tipo: "texto",
      titulo: "3. ¿Por qué no todas las enfermedades se incluyen?",
      contenido: [
        "No todas las enfermedades genéticas, metabólicas o endocrinas son adecuadas para un programa poblacional de pesquisa neonatal.",
        "Para que tenga sentido pesquisar una enfermedad en todos los recién nacidos, debe tratarse de una condición clínicamente importante, detectable en etapa temprana y con tratamiento disponible.",
        "Si una enfermedad no tiene tratamiento o el diagnóstico precoz no modifica el pronóstico, su inclusión en un programa de pesquisa puede no estar justificada.",
        "La pesquisa neonatal debe equilibrar beneficio clínico, costo, disponibilidad de confirmación diagnóstica y posibilidad real de tratamiento."
      ]
    },

    {
      tipo: "lista",
      titulo: "Características de una enfermedad pesquisable",
      items: [
        "Debe ser clínicamente importante.",
        "Debe ser grave o potencialmente discapacitante.",
        "Debe tener una etapa inicial asintomática detectable.",
        "Debe existir una prueba confiable.",
        "Debe existir tratamiento o intervención útil.",
        "El tratamiento precoz debe mejorar el pronóstico."
      ]
    },

    {
      tipo: "texto",
      titulo: "4. Tamizaje vs diagnóstico",
      contenido: [
        "Uno de los errores más frecuentes es pensar que una pesquisa positiva significa enfermedad confirmada.",
        "Eso es incorrecto. La pesquisa neonatal es una prueba de selección o tamizaje.",
        "Su función es identificar recién nacidos con mayor riesgo o sospecha de enfermedad.",
        "Posteriormente deben realizarse pruebas confirmatorias específicas.",
        "Por ejemplo, una TSH elevada en pesquisa neonatal no significa automáticamente hipotiroidismo congénito confirmado; indica que ese recién nacido debe estudiarse con mayor profundidad."
      ]
    },

    {
      tipo: "advertencia",
      titulo: "Trampa clásica",
      contenido:
        "Tamizaje positivo no es diagnóstico definitivo. Siempre requiere confirmación."
    },

    {
      tipo: "texto",
      titulo: "5. Sensibilidad y especificidad",
      contenido: [
        "En pesquisa neonatal se intenta detectar la mayor cantidad posible de recién nacidos afectados.",
        "Por eso, generalmente se privilegia una alta sensibilidad.",
        "La sensibilidad es la capacidad de una prueba para identificar correctamente a los individuos enfermos.",
        "Una prueba muy sensible reduce el riesgo de falsos negativos, es decir, reduce la probabilidad de dejar sin detectar a un recién nacido enfermo.",
        "La especificidad, en cambio, corresponde a la capacidad de identificar correctamente a individuos sanos.",
        "Una prueba muy específica disminuye falsos positivos.",
        "En pesquisa neonatal se acepta cierto número de falsos positivos porque es más grave no detectar a un recién nacido enfermo que estudiar de más a uno sano."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Clave de examen",
      contenido:
        "En pesquisa neonatal se privilegia sensibilidad alta para evitar falsos negativos."
    },

    {
      tipo: "texto",
      titulo: "6. Obtención de muestra",
      contenido: [
        "La muestra se obtiene habitualmente mediante punción del talón del recién nacido.",
        "La sangre se deposita sobre un papel filtro especial formando círculos impregnados.",
        "La sangre debe atravesar completamente el papel filtro para que la muestra sea válida.",
        "Luego la tarjeta debe secarse correctamente antes de enviarse al laboratorio.",
        "Aunque parece un procedimiento simple, errores en la toma, secado, rotulación o envío pueden alterar los resultados."
      ]
    },

    {
      tipo: "texto",
      titulo: "7. Momento adecuado para obtener la muestra",
      contenido: [
        "Habitualmente la muestra se obtiene entre las 24 y 48 horas de vida.",
        "La razón es fisiológica: varias enfermedades metabólicas necesitan alimentación previa para generar alteraciones bioquímicas detectables.",
        "Si la muestra se obtiene demasiado temprano, algunos metabolitos aún no alcanzan concentraciones alteradas suficientes.",
        "Esto puede producir falsos negativos.",
        "Por otro lado, si la toma se retrasa demasiado, también se retrasa el tratamiento, lo que puede aumentar el riesgo de daño irreversible."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Momento ideal",
      contenido:
        "La muestra suele obtenerse entre las 24 y 48 horas de vida."
    },

    {
      tipo: "texto",
      titulo: "8. Errores preanalíticos",
      contenido: [
        "Los errores preanalíticos corresponden a problemas que ocurren antes del análisis de laboratorio.",
        "Estos errores pueden alterar la calidad de la muestra y generar resultados inválidos, falsamente normales o falsamente alterados.",
        "En pesquisa neonatal la calidad de la muestra es fundamental, porque muchas determinaciones se realizan con cantidades pequeñas de sangre seca."
      ]
    },

    {
      tipo: "texto",
      titulo: "8.1 Muestra insuficiente",
      contenido: [
        "La sangre debe impregnar completamente el círculo del papel filtro y atravesarlo de manera uniforme.",
        "Se considera insuficiente cuando la cantidad de sangre no llena adecuadamente el área requerida o cuando la impregnación es parcial.",
        "Una muestra escasa puede dificultar la medición correcta de hormonas, enzimas o metabolitos.",
        "Esto puede obligar a repetir la muestra o, peor aún, producir resultados falsamente normales."
      ]
    },

    {
      tipo: "texto",
      titulo: "8.2 Contaminación de muestra",
      contenido: [
        "La muestra puede contaminarse con alcohol residual, agua, talco, cremas, guantes sucios o sustancias presentes en la piel.",
        "También puede contaminarse si el papel filtro entra en contacto con superficies no adecuadas.",
        "La contaminación puede modificar la concentración de metabolitos u hormonas medidas.",
        "Por eso la zona de punción debe prepararse correctamente y dejar secar el alcohol antes de obtener la sangre."
      ]
    },

    {
      tipo: "texto",
      titulo: "8.3 Secado incorrecto",
      contenido: [
        "La tarjeta debe secarse al aire, en posición horizontal y sin contacto directo con calor excesivo.",
        "Un secado incorrecto ocurre cuando las tarjetas se apilan húmedas, se guardan antes de secarse o se exponen a calor directo.",
        "Esto puede favorecer degradación de metabolitos, contaminación o crecimiento de microorganismos.",
        "Una muestra mal secada puede no ser apta para análisis y obligar a repetir la toma."
      ]
    },

    {
      tipo: "texto",
      titulo: "8.4 Obtención demasiado precoz",
      contenido: [
        "La obtención demasiado precoz ocurre cuando la muestra se toma antes de que el recién nacido haya tenido tiempo suficiente para expresar alteraciones metabólicas detectables.",
        "En errores innatos del metabolismo, algunos metabolitos se acumulan después de iniciar alimentación.",
        "Si se toma la muestra demasiado pronto, el resultado puede ser falsamente normal.",
        "Por eso se recomienda respetar el tiempo adecuado de toma."
      ]
    },

    {
      tipo: "texto",
      titulo: "8.5 Muestra mal rotulada",
      contenido: [
        "Una muestra mal rotulada es aquella con identificación incorrecta, incompleta o ilegible.",
        "Esto puede incluir error en nombre, fecha, datos maternos, número de historia clínica o identificación del recién nacido.",
        "El riesgo principal es asociar el resultado a otro paciente.",
        "Esto puede retrasar el diagnóstico de un niño enfermo o generar alarma y estudios innecesarios en otro recién nacido."
      ]
    },

    {
      tipo: "texto",
      titulo: "9. Hipotiroidismo congénito",
      contenido: [
        "El hipotiroidismo congénito corresponde a una disminución de producción de hormonas tiroideas desde el nacimiento.",
        "Las hormonas tiroideas son esenciales para el crecimiento corporal y, sobre todo, para el desarrollo del sistema nervioso central.",
        "Durante los primeros meses de vida ocurren procesos críticos como maduración cerebral, mielinización, migración neuronal y formación de conexiones sinápticas.",
        "Si existe déficit de hormonas tiroideas durante esta etapa, puede producirse daño neurológico irreversible.",
        "Muchos recién nacidos afectados parecen sanos al nacer porque durante el embarazo recibieron cierto aporte hormonal materno a través de la placenta.",
        "Después del nacimiento desaparece ese aporte materno y comienzan a manifestarse progresivamente los efectos del déficit hormonal."
      ]
    },

    {
      tipo: "lista",
      titulo: "Manifestaciones si no se trata",
      items: [
        "Hipotonía.",
        "Ictericia prolongada.",
        "Dificultad alimentaria.",
        "Estreñimiento.",
        "Macroglosia.",
        "Retraso del desarrollo.",
        "Discapacidad intelectual irreversible."
      ]
    },

    {
      tipo: "texto",
      titulo: "9.1 Pesquisa del hipotiroidismo congénito",
      contenido: [
        "La pesquisa se realiza mediante medición de TSH y/o T4 en sangre seca.",
        "Cuando la glándula tiroidea no produce suficiente hormona, el organismo aumenta TSH como respuesta compensatoria.",
        "Un resultado alterado debe confirmarse con estudios hormonales específicos.",
        "El tratamiento consiste en reemplazo precoz con levotiroxina.",
        "Si se inicia tempranamente, puede prevenir gran parte del daño neurológico."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Idea de examen",
      contenido:
        "El recién nacido con hipotiroidismo congénito puede parecer sano al inicio; la pesquisa evita daño neurológico irreversible."
    },

    {
      tipo: "texto",
      titulo: "10. Fenilcetonuria",
      contenido: [
        "La fenilcetonuria es un error innato del metabolismo producido por déficit de la enzima fenilalanina hidroxilasa.",
        "Esta enzima normalmente transforma fenilalanina en tirosina.",
        "Cuando la enzima falla, la fenilalanina se acumula en sangre y tejidos.",
        "El exceso de fenilalanina es tóxico para el sistema nervioso central.",
        "El recién nacido puede parecer normal al inicio, pero sin tratamiento desarrolla daño neurológico progresivo.",
        "Por eso la detección temprana es fundamental."
      ]
    },

    {
      tipo: "lista",
      titulo: "Consecuencias de fenilcetonuria no tratada",
      items: [
        "Discapacidad intelectual.",
        "Convulsiones.",
        "Alteraciones conductuales.",
        "Daño neurológico irreversible.",
        "Retraso del desarrollo."
      ]
    },

    {
      tipo: "texto",
      titulo: "10.1 Tratamiento de fenilcetonuria",
      contenido: [
        "El tratamiento principal consiste en dieta restringida en fenilalanina.",
        "La idea es evitar acumulación tóxica de este aminoácido.",
        "Mientras antes se inicia la dieta, mejor es el pronóstico neurológico.",
        "La pesquisa neonatal permite iniciar el tratamiento antes de que aparezca daño irreversible."
      ]
    },

    {
      tipo: "texto",
      titulo: "11. Errores innatos del metabolismo",
      contenido: [
        "Los errores innatos del metabolismo son enfermedades genéticas producidas por alteraciones en enzimas metabólicas.",
        "Una enzima alterada puede bloquear una vía metabólica.",
        "Cuando una vía se bloquea, puede acumularse una sustancia tóxica o faltar un producto esencial.",
        "Muchas de estas enfermedades pueden causar crisis metabólicas, daño neurológico, compromiso multisistémico o muerte si no se detectan a tiempo.",
        "La pesquisa neonatal es especialmente útil en este grupo porque permite intervenir antes de una descompensación grave."
      ]
    },

    {
      tipo: "lista",
      titulo: "Mecanismos principales",
      items: [
        "Déficit enzimático.",
        "Acumulación de metabolitos tóxicos.",
        "Déficit de productos esenciales.",
        "Crisis metabólicas.",
        "Daño neurológico o sistémico."
      ]
    },

    {
      tipo: "texto",
      titulo: "12. Espectrometría de masas en tándem",
      contenido: [
        "La espectrometría de masas en tándem es una tecnología que permite detectar múltiples metabolitos en una sola muestra.",
        "Esto amplió mucho la cantidad de enfermedades que pueden pesquisarse.",
        "Es especialmente útil para errores innatos del metabolismo, porque muchas enfermedades generan perfiles característicos de metabolitos.",
        "La ventaja es que permite estudiar varias condiciones al mismo tiempo usando sangre seca en papel filtro.",
        "Esto hace que la pesquisa sea más eficiente y amplia."
      ]
    },

    {
      tipo: "texto",
      titulo: "13. Fibrosis quística",
      contenido: [
        "La fibrosis quística es una enfermedad genética autosómica recesiva causada por mutaciones en el gen CFTR.",
        "CFTR participa en el transporte de cloro a través de membranas epiteliales.",
        "Cuando CFTR falla, las secreciones se vuelven espesas y difíciles de eliminar.",
        "Esto afecta principalmente pulmones, páncreas e intestino.",
        "La pesquisa neonatal permite sospechar la enfermedad tempranamente y derivar al recién nacido para confirmación y manejo especializado."
      ]
    },

    {
      tipo: "lista",
      titulo: "Manifestaciones importantes",
      items: [
        "Infecciones respiratorias recurrentes.",
        "Secreciones espesas.",
        "Insuficiencia pancreática.",
        "Malabsorción.",
        "Compromiso pulmonar progresivo."
      ]
    },

    {
      tipo: "texto",
      titulo: "14. Hiperplasia suprarrenal congénita",
      contenido: [
        "La hiperplasia suprarrenal congénita corresponde a un grupo de trastornos relacionados con alteraciones en la síntesis de cortisol.",
        "La forma más frecuente se debe a déficit de 21-hidroxilasa.",
        "Cuando falla la síntesis de cortisol, aumenta la estimulación de la glándula suprarrenal y se alteran otras vías hormonales.",
        "Algunas formas pueden producir pérdida de sal, deshidratación, alteraciones hidroelectrolíticas graves y crisis suprarrenal.",
        "También puede existir exceso de andrógenos, generando virilización.",
        "La pesquisa permite detectar la enfermedad antes de una crisis potencialmente mortal."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Clave clínica",
      contenido:
        "La hiperplasia suprarrenal congénita puede ser una urgencia si produce pérdida de sal y crisis suprarrenal."
    },

    {
      tipo: "texto",
      titulo: "15. Beneficios de la pesquisa neonatal",
      contenido: [
        "La pesquisa neonatal permite cambiar la historia natural de enfermedades graves.",
        "Sin pesquisa, muchas de estas enfermedades se diagnosticarían cuando ya existe daño neurológico, metabólico o sistémico.",
        "Con detección temprana, es posible iniciar tratamiento antes de la aparición de síntomas graves.",
        "Esto reduce mortalidad, discapacidad y secuelas permanentes.",
        "Además mejora la calidad de vida del paciente y disminuye el impacto familiar y sanitario de enfermedades no diagnosticadas oportunamente."
      ]
    },

    {
      tipo: "lista",
      titulo: "Beneficios principales",
      items: [
        "Diagnóstico precoz.",
        "Prevención de daño irreversible.",
        "Inicio temprano de tratamiento.",
        "Disminución de mortalidad.",
        "Disminución de discapacidad.",
        "Mejor pronóstico."
      ]
    },

    {
      tipo: "texto",
      titulo: "16. Limitaciones de la pesquisa neonatal",
      contenido: [
        "La pesquisa neonatal no detecta todas las enfermedades genéticas existentes.",
        "Un resultado normal no garantiza ausencia absoluta de enfermedad.",
        "También pueden existir falsos positivos y falsos negativos.",
        "Un falso positivo puede generar ansiedad familiar y estudios adicionales innecesarios.",
        "Un falso negativo es más grave porque puede retrasar diagnóstico y tratamiento en un recién nacido afectado.",
        "Por eso los resultados deben interpretarse dentro del contexto clínico y confirmarse cuando corresponde."
      ]
    },

    {
      tipo: "lista",
      titulo: "Limitaciones importantes",
      items: [
        "No detecta todas las enfermedades.",
        "Puede presentar falsos positivos.",
        "Puede presentar falsos negativos.",
        "Requiere confirmación diagnóstica.",
        "Depende de calidad de muestra y seguimiento."
      ]
    },

    {
      tipo: "texto",
      titulo: "17. Aspectos éticos",
      contenido: [
        "La pesquisa neonatal involucra aspectos éticos porque se realiza en recién nacidos que no pueden decidir por sí mismos.",
        "Por eso es importante informar adecuadamente a los padres sobre el objetivo de la prueba.",
        "También debe protegerse la confidencialidad de los resultados.",
        "Otro punto ético importante es decidir qué enfermedades deben incluirse en los programas de pesquisa.",
        "La inclusión de nuevas tecnologías puede generar hallazgos incidentales o información genética de relevancia familiar, por lo que el asesoramiento adecuado es fundamental."
      ]
    },

    {
      tipo: "texto",
      titulo: "18. Importancia del seguimiento",
      contenido: [
        "La pesquisa neonatal no termina cuando se obtiene el resultado.",
        "Un resultado alterado requiere confirmación diagnóstica, derivación rápida y eventual inicio de tratamiento.",
        "Si el sistema no logra contactar a la familia o confirmar oportunamente, se pierde el beneficio principal de la pesquisa.",
        "La rapidez del seguimiento puede ser determinante para prevenir secuelas.",
        "Por eso la pesquisa neonatal debe entenderse como un proceso completo: toma de muestra, análisis, comunicación, confirmación, tratamiento y seguimiento."
      ]
    },

    {
      tipo: "alerta",
      titulo: "Concepto final importante",
      contenido:
        "La pesquisa neonatal solo sirve realmente si existe confirmación y tratamiento precoz después de un resultado alterado."
    },

    {
      tipo: "lista",
      titulo: "19. Puntos clave para examen",
      items: [
        "Pesquisa neonatal = tamizaje precoz en recién nacidos.",
        "Busca detectar enfermedades antes del daño irreversible.",
        "Tamizaje no es diagnóstico definitivo.",
        "Se prioriza alta sensibilidad.",
        "La muestra se obtiene del talón en papel filtro.",
        "El momento habitual es 24–48 horas de vida.",
        "Errores preanalíticos pueden alterar resultados.",
        "Hipotiroidismo congénito afecta desarrollo neurológico.",
        "Fenilcetonuria = déficit fenilalanina hidroxilasa.",
        "Fibrosis quística = mutaciones CFTR.",
        "Hiperplasia suprarrenal congénita suele asociarse a déficit 21-hidroxilasa.",
        "Espectrometría de masas permite detectar múltiples metabolitos.",
        "Pesquisa positiva requiere confirmación diagnóstica.",
        "La utilidad depende del seguimiento y tratamiento precoz."
      ]
    }
  ]
},

};
