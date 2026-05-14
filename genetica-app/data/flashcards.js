const FLASHCARDS = {
citogenetica: [
    {
      id: "cg-fc-001",
      pregunta: "Una pareja tiene un feto con diagnóstico de Triploidía (69 cromosomas). ¿Cuál es la diferencia mecánica entre una triploidía por 'diandria' (dispermia) y una por 'diginia'?",
      respuesta: "La diandria ocurre cuando un óvulo es fecundado por dos espermatozoides simultáneamente (dispermia) o por un espermatozoide diploide. La diginia ocurre cuando el óvulo no expulsa el corpúsculo polar y retiene un conjunto diploide materno."
    },
    {
      id: "cg-fc-002",
      pregunta: "A nivel celular, ¿qué diferencia biológica existe entre una poliploidía por 'Endomitosis' (tetraploidía) y una aneuploidía por 'No disyunción'?",
      respuesta: "La endomitosis (que causa tetraploidía 4n=92) es una falla en la división celular completa: el ADN se duplica pero la célula no se divide. La no disyunción es un error de segregación de un par específico de cromosomas durante la anafase, generando aneuploidías (ej. 47 o 45 cromosomas)."
    },
    {
      id: "cg-fc-003",
      pregunta: "En el laboratorio de citogenética se utiliza Fitohemaglutinina y Colchicina. Explica el mecanismo de acción de ambas a nivel del ciclo celular.",
      respuesta: "La fitohemaglutinina es un mitógeno que estimula a los linfocitos T en reposo (fase G0) para que entren al ciclo celular y proliferen. La colchicina inhibe la polimerización de los microtúbulos, destruyendo el huso mitótico y arrestando la célula en metafase."
    },
    {
      id: "cg-fc-004",
      pregunta: "Observas un cromosoma bajo Bandeo G. Identificas bandas muy oscuras (G-positivas). ¿Cuál es la composición nucleotídica de estas bandas, su momento de replicación y su densidad génica?",
      respuesta: "Las bandas oscuras G-positivas son ricas en pares Adenina-Timina (A-T), tienen replicación tardía (al final de la fase S) y poseen una densidad génica muy baja (heterocromatina rica en ADN no codificante)."
    },
    {
      id: "cg-fc-005",
      pregunta: "Un paciente presenta un cariotipo con una anomalía estructural equilibrada: una Inversión. ¿Cómo diferencias genéticamente una inversión Pericéntrica de una Paracéntrica?",
      respuesta: "En la inversión pericéntrica, los dos puntos de ruptura ocurren en brazos opuestos (p y q), por lo que el segmento invertido incluye al centrómero. En la paracéntrica, ambas rupturas ocurren en el mismo brazo, por lo que el centrómero queda fuera de la inversión."
    },
    {
      id: "cg-fc-006",
      pregunta: "¿Qué cromosomas humanos pueden participar en una Translocación Robertsoniana y qué consecuencias estructurales sufren al fusionarse?",
      respuesta: "Solo pueden participar los cromosomas acrocéntricos (13, 14, 15, 21 y 22). Al fusionarse por sus centrómeros, pierden sus brazos cortos (p), los cuales contienen secuencias redundantes de ARN ribosomal, por lo que la pérdida no afecta el fenotipo del portador."
    },
    {
      id: "cg-fc-007",
      pregunta: "Desde el punto de vista clínico, ¿por qué un portador de una translocación recíproca o Robertsoniana balanceada es sano, pero acude a la clínica por problemas reproductivos?",
      respuesta: "El portador es fenotípicamente sano porque la dosis de sus genes está intacta (solo cambiaron de lugar). Sin embargo, durante la meiosis, la segregación de estos cromosomas reorganizados genera un alto porcentaje de gametos desbalanceados (con deleciones o duplicaciones), causando abortos recurrentes o descendencia malformada."
    },
    {
      id: "cg-fc-008",
      pregunta: "¿Qué es un isocromosoma y mediante qué mecanismo anómalo se forma durante la división celular?",
      respuesta: "Un isocromosoma es un cromosoma anormal que ha perdido un brazo completo y ha duplicado el otro de forma especular (ej. tiene dos brazos 'q' y ningún brazo 'p'). Se forma por una división transversal (horizontal) del centrómero durante la anafase, en lugar de la división longitudinal normal."
    },
    {
      id: "cg-fc-009",
      pregunta: "El Síndrome de Down (Trisomía 21) tiene 3 etiologías citogenéticas distintas. Nómbralas e indica su porcentaje aproximado de incidencia.",
      respuesta: "1) Trisomía libre por no disyunción meiótica (95%). 2) Translocación Robertsoniana desbalanceada, generalmente t(14;21) (4%). 3) Mosaicismo por no disyunción mitótica post-cigótica (1%)."
    },
    {
      id: "cg-fc-010",
      pregunta: "Tienes dos pacientes pediátricos en la UCI: uno con holoprosencefalia y polidactilia, y otro con puños cerrados (dedos sobrepuestos) y occipucio prominente. ¿Qué trisomías sospechas respectivamente?",
      respuesta: "El primer paciente (holoprosencefalia, polidactilia, labio leporino) concuerda con Síndrome de Patau (Trisomía 13). El segundo (puños cerrados con dedos superpuestos y occipucio prominente) concuerda con Síndrome de Edwards (Trisomía 18)."
    },
    {
      id: "cg-fc-011",
      pregunta: "A nivel de las divisiones meióticas maternas, ¿cómo puedes saber si la no disyunción que causó una trisomía ocurrió en la Meiosis I o en la Meiosis II?",
      respuesta: "Si el error ocurre en Meiosis I, el gameto llevará ambos cromosomas homólogos de la madre (diferentes entre sí). Si ocurre en Meiosis II, el gameto llevará dos copias idénticas de la misma cromátida hermana."
    },
    {
      id: "cg-fc-012",
      pregunta: "Un paciente presenta ambigüedad genital y el cariotipo reporta 45,X/46,XY. ¿Cómo se denomina este fenómeno y cuál es el mecanismo biológico que lo origina ('Anaphase lag')?",
      respuesta: "Se denomina Mosaicismo. Se origina por un 'retraso de la anafase' (anaphase lag) durante una mitosis embrionaria temprana, donde un cromosoma Y no logra migrar a tiempo al polo celular y se pierde, creando una línea celular 45,X que coexiste con la original 46,XY."
    },
    {
      id: "cg-fc-013",
      pregunta: "¿Por qué el Síndrome de Turner (45,X) es la única monosomía completa que permite la supervivencia postnatal en humanos?",
      respuesta: "Porque los humanos están evolutivamente adaptados a funcionar con un solo cromosoma X activo (debido a la inactivación normal del X o corpúsculo de Barr en mujeres XX). Las monosomías autosómicas son letales porque la haploinsuficiencia de genes críticos es incompatible con el desarrollo."
    },
    {
      id: "cg-fc-014",
      pregunta: "¿Qué técnica citogenética solicitarías para confirmar un Síndrome de DiGeorge (velocardiofacial) y por qué un cariotipo G de rutina de alta resolución no sería útil?",
      respuesta: "Solicitaría la técnica de FISH con sondas de secuencia única específicas para 22q11.2. El cariotipo G no es útil porque la microdeleción es menor a 5 Megabases (resolución máxima del microscopio óptico), por lo que visualmente el cromosoma 22 parecería normal."
    },
    {
      id: "cg-fc-015",
      pregunta: "Fenotípicamente, ¿cuáles son las características cardinales del Síndrome de Klinefelter (47,XXY) y en qué etapa de la vida suele diagnosticarse?",
      respuesta: "Las características incluyen talla alta, ginecomastia, testículos pequeños y atróficos, e infertilidad (azoospermia). Suele diagnosticarse en la pubertad debido a la falta de desarrollo de los caracteres sexuales secundarios por el hipogonadismo."
    },
    {
      id: "cg-fc-016",
      pregunta: "Dos síndromes de microdeleción afectan a los cromosomas 4 y 5 respectivamente. Uno causa un llanto similar al maullido de un gato y el otro causa un fenotipo facial de 'yelmo griego'. Nómbralos.",
      respuesta: "Deleción 5p: Síndrome de Cri-du-chat (Maullido de gato). Deleción 4p16.3: Síndrome de Wolf-Hirschhorn (yelmo griego y retraso severo)."
    },
    {
      id: "cg-fc-017",
      pregunta: "El Síndrome de Prader-Willi y el Síndrome de Angelman pueden ser causados exactamente por la misma microdeleción en 15q11-q13. ¿Cómo es posible que generen fenotipos tan distintos?",
      respuesta: "Por el fenómeno de Impronta Genómica. Si la deleción ocurre en el cromosoma 15 heredado del padre, se desarrolla Prader-Willi. Si la deleción ocurre en el cromosoma 15 heredado de la madre, se desarrolla Angelman. Los genes de esa región tienen expresión monoalélica dependiendo de su origen parental."
    },
    {
      id: "cg-fc-018",
      pregunta: "Aparte de la microdeleción en 15q11-q13, ¿qué otro mecanismo genético puro (sin ruptura cromosómica) puede causar el Síndrome de Prader-Willi?",
      respuesta: "La Disomía Uniparental (DUP) materna. Si el embrión hereda ambos cromosomas 15 de la madre y ninguno del padre, carecerá totalmente de la expresión de los genes paternos en esa región, desencadenando el síndrome."
    },
    {
      id: "cg-fc-019",
      pregunta: "A nivel molecular y citogenético, ¿qué provoca el Síndrome del X Frágil y por qué se le llama 'frágil'?",
      respuesta: "Es provocado por una expansión del triplete CGG en el promotor del gen FMR1, lo que causa su hipermetilación y silenciamiento. Se llama 'frágil' porque al cultivar las células en medios carentes de ácido fólico, el cromosoma X se condensa mal y muestra una 'constricción' en su extremo distal que parece a punto de romperse."
    },
    {
      id: "cg-fc-020",
      pregunta: "¿Cuál es la principal ventaja clínica y técnica de utilizar FISH en células en interfase en lugar de metafase?",
      respuesta: "La gran ventaja es la rapidez. Al usar células en interfase (núcleo sin dividir), no es necesario esperar de 48 a 72 horas para cultivar las células y arrestarlas en metafase, permitiendo diagnósticos de urgencia (ej. para trisomías 13, 18, 21 en embarazos de alto riesgo en solo 24 hrs)."
    },
    {
      id: "cg-fc-021",
      pregunta: "Si deseas visualizar específicamente las regiones organizadoras nucleolares (NOR) ubicadas en los tallos de los cromosomas acrocéntricos, ¿qué tipo de bandeo debes solicitar?",
      respuesta: "Se debe solicitar el Bandeo NOR (tinción con nitrato de plata), que tiñe específicamente las proteínas asociadas al ARN ribosomal ubicadas en los satélites de los cromosomas 13, 14, 15, 21 y 22."
    },
    {
      id: "cg-fc-022",
      pregunta: "Explica cómo se forma un 'Cromosoma en Anillo' (Ring chromosome) y por qué suele ser patológico.",
      respuesta: "Se forma cuando un cromosoma sufre rupturas en ambos extremos (pérdida de ambos telómeros). Para proteger el ADN expuesto, los extremos 'pegajosos' se fusionan entre sí formando un círculo. Es patológico porque en el proceso se pierde material genético terminal de ambos brazos."
    },
    {
      id: "cg-fc-023",
      pregunta: "La mayoría de las cromosomopatías sexuales como el Síndrome de Turner y Klinefelter tienen fenotipos más leves que las aneuploidías autosómicas. ¿Qué dos mecanismos genéticos explican esta tolerancia?",
      respuesta: "1) El cromosoma Y contiene muy pocos genes (básicamente orientados a la determinación masculina). 2) Todo cromosoma X adicional en la célula sufre inactivación (lyonización) convirtiéndose en corpúsculos de Barr, lo que compensa la dosis génica extra."
    },
    {
      id: "cg-fc-024",
      pregunta: "En citogenética oncohematológica, ¿qué tipo de sondas de FISH utilizarías para diagnosticar una translocación específica conocida, como la t(9;22) o Cromosoma Filadelfia en Leucemia?",
      respuesta: "Se utilizan sondas de locus específico (generalmente sondas de fusión de doble color). Una sonda fluorescente marca el gen ABR (cromosoma 9) y otra de distinto color marca el gen BCR (cromosoma 22). Si hay translocación, ambos colores se superponen generando un tercer color bajo el microscopio."
    },
    {
      id: "cg-fc-025",
      pregunta: "Paciente femenino de 36 años, historial de 3 pérdidas gestacionales en el primer trimestre. Genitales y desarrollo cognitivo normal. ¿Cuál es la sospecha citogenética principal para ella o su pareja?",
      respuesta: "La sospecha principal es que uno de los dos sea portador asintomático de una anomalía cromosómica estructural balanceada (como una translocación recíproca o una translocación Robertsoniana), lo que genera gametos genéticamente desbalanceados y letales."
    }
  ],

tecnicas_mol: [
    // --- LAS 22 ORIGINALES QUE YA TENÍAMOS ---
    {
      id: "bm-fc-001",
      pregunta: "A nivel molecular, ¿cuál es la diferencia estructural clave entre un nucleótido normal (dNTP) y un dideoxinucleótido (ddNTP) usado en la secuenciación de Sanger, y qué efecto tiene en la enzima?",
      respuesta: "El ddNTP carece del grupo hidroxilo (-OH) en el carbono 3' de su pentosa. Sin este grupo, la ADN polimerasa es físicamente incapaz de formar el enlace fosfodiéster con el siguiente nucleótido, provocando la 'terminación de la cadena'."
    },
    {
      id: "bm-fc-002",
      pregunta: "¿Por qué la PCR requiere obligatoriamente una polimerasa termoestable (como la Taq polimerasa, extraída de bacterias extremófilas) en lugar de una ADN polimerasa humana tradicional?",
      respuesta: "Porque el primer paso de cada ciclo de PCR (Desnaturalización) exige elevar la temperatura a 94-95°C para separar las hebras de ADN. Una polimerasa humana normal se desnaturalizaría y perdería su función irreversiblemente a esa temperatura."
    },
    {
      id: "bm-fc-003",
      pregunta: "Clínicamente, si necesitas cuantificar con extrema precisión la carga viral de VIH en el plasma de un paciente, ¿qué variante exacta de PCR solicitarías y qué rol cumple cada una de sus siglas?",
      respuesta: "Solicitaría una RT-qPCR (Retrotranscripción + PCR cuantitativa en tiempo real). La RT convierte el genoma de ARN viral en ADNc, y la qPCR amplifica y cuantifica la cantidad exacta de material ciclo a ciclo usando fluorescencia."
    },
    {
      id: "bm-fc-004",
      pregunta: "Necesitas confirmar si el gen mutado de un paciente con sospecha de Duchenne está logrando producir la proteína distrofina en el músculo. ¿Qué tipo de Blot utilizas y qué sonda empleas para revelarlo?",
      respuesta: "Se utiliza el Western Blot (específico para proteínas). Para revelarlo NO se utilizan sondas de ácidos nucleicos, sino anticuerpos específicos marcados que reconocen a la proteína distrofina."
    },
    {
      id: "bm-fc-005",
      pregunta: "La técnica de Array-CGH (Microarreglos) es el gold standard para escanear todo el genoma en busca de microdeleciones. Sin embargo, ¿qué tipo de anomalía cromosómica estructural grave es 'invisible' para esta técnica y por qué?",
      respuesta: "Las alteraciones estructurales balanceadas (como inversiones o translocaciones recíprocas). Al no haber pérdida ni ganancia neta de material genético, la dosis de ADN (fluorescencia) permanece idéntica al control, por lo que la CGH no detecta el error."
    },
    {
      id: "bm-fc-006",
      pregunta: "En un estudio de Microarreglos (CGH), el ADN del paciente se marca con fluoróforo verde y el control sano con rojo. En el locus del gen del Retinoblastoma observas un pocillo de color rojo intenso. ¿Cuál es la interpretación diagnóstica?",
      respuesta: "El paciente presenta una Deleción en el gen del Retinoblastoma. Al faltar el material genético del paciente (verde) en esa región para competir en el pocillo, solo logra hibridarse el ADN del control sano (rojo)."
    },
    {
      id: "bm-fc-007",
      pregunta: "Recibes un reporte de Secuenciación Masiva (NGS) que detecta una variante patogénica nueva en un paciente oncológico. ¿Cuál es el paso obligatorio en el laboratorio antes de emitir el diagnóstico definitivo y por qué?",
      respuesta: "Confirmar el hallazgo mediante Secuenciación de Sanger. La NGS tiene una tasa de error inherente (falsos positivos) debido a la amplificación masiva por PCR. Sanger sigue siendo el método confirmatorio de mayor exactitud para mutaciones puntuales."
    },
    {
      id: "bm-fc-008",
      pregunta: "El SARS-CoV-2 es un virus de ARN. Sabiendo que las plataformas de secuenciación (Sanger o NGS) solo pueden 'leer' cadenas de ADN, ¿cómo lograron los científicos secuenciar su genoma completo durante la pandemia?",
      respuesta: "Primero se utilizó la enzima transcriptasa reversa (retrotranscriptasa) para sintetizar una hebra de ADN complementario (ADNc) utilizando el ARN viral como molde. Luego, ese ADNc fue el que se amplificó y secuenció."
    },
    {
      id: "bm-fc-009",
      pregunta: "En genética forense (sistema CODIS), ¿por qué se prefieren hoy en día los Microsatélites (STRs) sobre los Minisatélites (VNTRs) para establecer la huella genética?",
      respuesta: "Porque los STRs son secuencias repetitivas mucho más cortas (2 a 7 pb). Esto permite que sean amplificados de manera rápida, económica y altamente precisa mediante PCR múltiple, incluso si la muestra de ADN forense está degradada."
    },
    {
      id: "bm-fc-010",
      pregunta: "Al analizar un marcador STR específico en el electroferograma de una muestra criminal, el perito observa un único pico de gran altura. ¿Cómo se interpreta genéticamente este gráfico?",
      respuesta: "Indica que el individuo es homocigoto para ese marcador STR. Es decir, heredó exactamente el mismo número de repeticiones (el mismo tamaño de fragmento) tanto de su padre como de su madre, por lo que la señal de ambos se suma en un solo pico."
    },
    {
      id: "bm-fc-011",
      pregunta: "En un análisis de paternidad por electroferograma analizando los Microsatélites (STRs), ¿cuál es la 'regla de oro' insalvable al analizar los dos picos (alelos) que presenta el hijo en cada marcador?",
      respuesta: "Un pico del hijo debe coincidir obligatoria y exactamente en tamaño con uno de los picos de la madre biológica, y el segundo pico debe coincidir de forma obligatoria con uno de los picos del padre biológico. Si un marcador no cumple esto (y se descarta mutación), se excluye la paternidad."
    },
    {
      id: "bm-fc-012",
      pregunta: "¿Qué característica particular debe tener una secuencia de ADN para ser reconocida y cortada por una enzima de restricción clásica, y qué técnica se fundamenta en la alteración de estos sitios?",
      respuesta: "La secuencia debe ser palindrómica (se lee igual de 5' a 3' en ambas hebras antiparalelas, ej. GAATTC). La técnica clásica que analiza si una mutación destruyó o creó uno de estos sitios es el RFLP (Polimorfismo de Longitud de Fragmentos de Restricción)."
    },
    {
      id: "bm-fc-013",
      pregunta: "Un niño presenta debilidad muscular grave y se sospecha de Distrofia Muscular de Duchenne (típicamente causada por grandes deleciones que abarcan múltiples exones). ¿Qué variante específica de la PCR es ideal para el diagnóstico?",
      respuesta: "La PCR Multiplex. Esta técnica permite introducir múltiples pares de cebadores (primers) en un mismo tubo de reacción para amplificar varios exones del gen simultáneamente. Los exones que estén delecionados simplemente no aparecerán en el gel final."
    },
    {
      id: "bm-fc-014",
      pregunta: "En el laboratorio de investigación, quieres medir si un tejido tumoral está transcribiendo en exceso el gen de un oncogén específico. ¿Qué tipo de Blot debes utilizar y en qué matriz separarás la muestra?",
      respuesta: "Se debe utilizar el Northern Blot. Consiste en extraer y separar el ARN mensajero (ARNm) del tejido utilizando un gel de agarosa desnaturalizante (generalmente con formaldehído) para evitar que el ARN forme estructuras secundarias."
    },
    {
      id: "bm-fc-015",
      pregunta: "¿Cuál es la innovación conceptual más grande de la Secuenciación de Tercera Generación (Nanoporos) respecto a la NGS y qué problema genómico ayuda a resolver?",
      respuesta: "Su mayor ventaja es que no requiere amplificación previa por PCR (lee la cadena de ADN original en tiempo real por cambios eléctricos) y puede generar lecturas kilométricas ('long reads'). Esto facilita enormemente el ensamblaje informático de regiones del genoma que son altamente repetitivas."
    },
    {
      id: "bm-fc-016",
      pregunta: "Si extraes el gen de la insulina directamente del ADN del núcleo celular (ADN genómico) y lo comparas con su ADNc (creado en laboratorio a partir del ARNm), ¿cuál será la gran diferencia en sus secuencias?",
      respuesta: "El ADN genómico nuclear contendrá toda la secuencia del gen original, incluyendo los intrones (zonas no codificantes). El ADNc, al derivar del ARNm maduro, ya sufrió el 'splicing', por lo que estará compuesto de manera ininterrumpida única y exclusivamente por los exones."
    },
    {
      id: "bm-fc-017",
      pregunta: "A pesar de ser una técnica brillante, la PCR convencional tiene un 'talón de Aquiles' clínico directamente relacionado con su altísima sensibilidad. ¿Cuál es este riesgo y qué consecuencia diagnóstica trae?",
      respuesta: "El altísimo riesgo de contaminación. Una sola molécula microscópica de ADN extraño (del ambiente, del operador o de otra muestra) puede introducirse en el tubo y ser amplificada millones de veces, arrojando un diagnóstico Falso Positivo."
    },
    {
      id: "bm-fc-018",
      pregunta: "Desde el punto de vista de la secuencia de bases, ¿cuál es la diferencia exacta entre un polimorfismo tipo SNP y un polimorfismo tipo INDEL?",
      respuesta: "El SNP (Single Nucleotide Polymorphism) es la sustitución de una sola y única letra (base nitrogenada) por otra. El INDEL, en cambio, implica la Inserción o Deleción de un bloque pequeño de varios nucleótidos en la secuencia."
    },
    {
      id: "bm-fc-019",
      pregunta: "A diferencia del Array-CGH (que compara el ADN), existe el Microarreglo de Expresión para comparar un tumor con tejido sano. En este caso, ¿qué molécula exacta se extrae de las células para poder realizar el estudio?",
      respuesta: "Se extrae el ARN mensajero (ARNm) transcripto por ambos tejidos. Este ARNm refleja qué genes están 'encendidos'. Luego se retrotranscribe a ADNc, se marca con colores y se vuelca sobre el chip para cuantificar la sobre o subexpresión de los oncogenes."
    },
    {
      id: "bm-fc-020",
      pregunta: "En un Southern Blot, tras correr la electroforesis y transferir el ADN a la membrana de nylon, el ADN sigue siendo totalmente invisible al ojo humano. ¿Cuál es el paso metodológico crítico que permite visualizarlo?",
      respuesta: "La Hibridación. Se incuba la membrana en una solución que contiene 'sondas', que son fragmentos de ADN de cadena simple complementarios al gen que buscamos. Estas sondas están marcadas con isótopos radiactivos o fluoróforos que revelan su ubicación exacta."
    },
    {
      id: "bm-fc-021",
      pregunta: "En una qPCR que utiliza el sistema de sondas TaqMan, la sonda se une al ADN y posee un fluoróforo 'apagado' por una molécula extinguidora. ¿Qué actividad específica de la enzima Taq polimerasa es la encargada de 'encender' la luz?",
      respuesta: "Su actividad exonucleasa 5' a 3'. A medida que la Taq polimerasa avanza sintetizando la hebra complementaria, se topa con la sonda TaqMan interpuesta en su camino y la degrada, separando físicamente el fluoróforo del extinguidor, lo que libera la señal luminosa."
    },
    {
      id: "bm-fc-022",
      pregunta: "En la replicación celular natural, la enzima helicasa se encarga de separar la doble hebra de ADN. En la técnica de PCR in vitro, ¿qué elemento metodológico reemplaza la función de la helicasa?",
      respuesta: "El calor. Durante la etapa inicial de Desnaturalización en el termociclador, la muestra se somete a 94-95°C. Esta energía térmica es suficiente para romper los puentes de hidrógeno entre las bases nitrogenadas, separando las hebras sin necesidad de enzimas."
    },
    
    // --- NUEVAS FLASHCARDS AÑADIDAS ---
    {
      id: "bm-fc-023",
      pregunta: "Para estudiar la mutación de la Protrombina G20210A (que causa trombofilia), el laboratorio utiliza PCR seguida de RFLP. Si la mutación crea un nuevo sitio de corte para la enzima, ¿cómo se verá el resultado en el gel si el paciente es heterocigoto?",
      respuesta: "Se verán TRES bandas. Al ser heterocigoto, tiene un alelo normal (que no se corta y da una banda grande) y un alelo mutado (que sí se corta por la enzima, dividiéndose en dos bandas más pequeñas)."
    },
    {
      id: "bm-fc-024",
      pregunta: "En biología molecular, ¿a qué llamamos 'extremos cohesivos' (sticky ends) generados por una enzima de restricción y qué utilidad tienen en ingeniería genética?",
      respuesta: "Son cortes asimétricos o escalonados en la doble hebra de ADN que dejan unas pocas bases desapareadas colgando en los extremos. Son muy útiles porque se unen fácilmente a otros fragmentos de ADN que hayan sido cortados con la misma enzima, facilitando la creación de ADN recombinante."
    },
    {
      id: "bm-fc-025",
      pregunta: "Una PCR estándar requiere DOS cebadores (primers): uno forward y uno reverse. ¿Qué determina exactamente la distancia entre estos dos cebadores en la secuencia original?",
      respuesta: "La distancia entre ellos determina la longitud exacta del fragmento de ADN que será amplificado. Los cebadores flanquean la región de interés y marcan los límites de inicio y fin para la polimerasa."
    },
    {
      id: "bm-fc-026",
      pregunta: "En la qPCR, ¿cuál es la desventaja principal de utilizar el fluoróforo SYBR Green en comparación con las sondas TaqMan?",
      respuesta: "La falta de especificidad. El SYBR Green se intercala e ilumina cualquier ADN de doble cadena que se forme en el tubo, incluyendo 'dímeros de primers' o amplificaciones inespecíficas. La sonda TaqMan solo brilla si se amplifica la secuencia exacta del gen buscado."
    },
    {
      id: "bm-fc-027",
      pregunta: "Si realizas un Western Blot, el gel que usas se llama SDS-PAGE (Poliacrilamida con SDS). ¿Cuál es la función bioquímica de añadir el detergente SDS a las proteínas antes de correrlas?",
      respuesta: "El SDS tiene dos funciones vitales: primero, desnaturaliza las proteínas (destruye su estructura 3D para volverlas lineales). Segundo, las recubre con una carga neta negativa uniforme, asegurando que migren hacia el polo positivo basándose únicamente en su tamaño (peso molecular) y no en su carga o forma original."
    },
    {
      id: "bm-fc-028",
      pregunta: "¿Qué significa estadísticamente que una variante en la secuencia de ADN sea considerada un 'Polimorfismo' (como un SNP) y no una simple 'Mutación'?",
      respuesta: "Por convención poblacional, una variante se considera polimorfismo si la frecuencia del alelo menos común en la población general es igual o superior al 1%. Si es menor al 1%, se considera una mutación rara."
    },
    {
      id: "bm-fc-029",
      pregunta: "En el sistema forense CODIS, además de los 13 marcadores STR, se amplifica el gen de la Amelogenina (AMEL). ¿Para qué sirve específicamente este marcador en la escena del crimen?",
      respuesta: "Sirve para determinar el sexo biológico del individuo. El gen de la amelogenina tiene un tamaño distinto en el cromosoma X que en el cromosoma Y. Si en el gel sale una sola banda (XX), es mujer; si salen dos bandas de distinto tamaño (XY), es hombre."
    },
    {
      id: "bm-fc-030",
      pregunta: "En la preparación de la muestra para la Secuenciación Masiva (NGS), se realiza la 'construcción de la biblioteca' ligando 'adaptadores' a los extremos de los fragmentos de ADN. ¿Para qué sirven estos adaptadores?",
      respuesta: "Los adaptadores son secuencias artificiales cortas que permiten que el fragmento de ADN del paciente se ancle físicamente a la matriz sólida del equipo de secuenciación y sirven como sitio de unión universal para los primers que iniciarán la lectura."
    },
    {
      id: "bm-fc-031",
      pregunta: "Una paciente tiene beta-talasemia, pero su genotipo no presenta deleciones, sino una mutación puntual que altera el sitio normal de 'splicing' (corte y empalme) de los intrones. ¿Qué esperarías ver si analizas su ARNm con un Northern Blot?",
      respuesta: "Al fallar el splicing, el intrón no se elimina correctamente. En el Northern Blot se observará que la banda de ARNm de la globina es de un tamaño mayor al normal, o bien se degradará rápidamente, observándose una disminución drástica en la cantidad de ARNm detectable."
    },
    {
      id: "bm-fc-032",
      pregunta: "En una reacción típica de secuenciación de Sanger manual, ¿por qué la concentración de dNTPs (nucleótidos normales) debe ser mucho mayor que la de ddNTPs (terminadores)?",
      respuesta: "Porque si hubiera demasiados ddNTPs, la polimerasa los incorporaría casi inmediatamente, cortando la cadena al inicio y solo se leerían las primeras bases. La baja concentración asegura que la interrupción ocurra al azar a lo largo de toda la longitud del gen."
    },
    {
      id: "bm-fc-033",
      pregunta: "¿Qué técnica clásica usarías para detectar una mutación que consiste en la expansión de repeticiones de tripletes muy larga (como en el Síndrome de X Frágil >200 CGG), sabiendo que la PCR convencional no logra amplificar fragmentos tan inmensos?",
      respuesta: "Se utilizaría un Southern Blot utilizando enzimas de restricción que corten el ADN flanqueando la región de las repeticiones, seguido de hibridación con una sonda radiactiva. Se verá una banda de peso molecular anómalamente alto."
    },
    {
      id: "bm-fc-034",
      pregunta: "El diagnóstico de fibrosis quística (mutación delta F508) puede hacerse por PCR utilizando primers diseñados específicamente para el alelo mutado (PCR alelo-específica). ¿Qué sucede en el tubo si el paciente es sano (homocigoto normal)?",
      respuesta: "No habrá amplificación (el tubo no producirá producto de PCR). Los primers alelo-específicos están diseñados para hibridar solo si la mutación está presente. Al estar el alelo normal, el 'mismatch' en el extremo 3' impide que la Taq polimerasa inicie la síntesis."
    },
    {
      id: "bm-fc-035",
      pregunta: "¿Cuál es el principal tipo de polimorfismo que utilizan los estudios GWAS (Estudios de Asociación de Genoma Completo) para mapear el riesgo de enfermedades complejas en chips de ADN?",
      respuesta: "Los SNPs (Polimorfismos de un solo nucleótido). Los chips de GWAS pueden contener cientos de miles a millones de sondas que interrogan SNPs específicos a lo largo de todos los cromosomas."
    },
    {
      id: "bm-fc-036",
      pregunta: "Un investigador extrae ADN de la sangre y de la saliva de un mismo paciente sano. Si les corre un Array-CGH, ¿los resultados serán idénticos o diferentes? ¿Por qué?",
      respuesta: "Serán idénticos. Todas las células somáticas nucleadas de un mismo individuo (excepto en casos raros de mosaicismo) poseen exactamente la misma secuencia de ADN genómico y el mismo número de copias."
    },
    {
      id: "bm-fc-037",
      pregunta: "En el mismo caso anterior, si el investigador extrae ARNm de la sangre y de la saliva, y les corre un Microarreglo de Expresión, ¿los resultados serán idénticos? ¿Por qué?",
      respuesta: "Serán radicalmente diferentes. Aunque el ADN es el mismo, la Expresión Génica (el ARNm) es tejido-específica. Los leucocitos de la sangre tendrán encendidos los genes inmunes, mientras que las glándulas de la saliva tendrán encendidos los genes de las enzimas digestivas."
    },
    {
      id: "bm-fc-038",
      pregunta: "Durante un ciclo térmico de PCR, si un operador programa por error la temperatura de 'Alineamiento' (Annealing) a 72°C en lugar de 55°C, ¿qué le ocurrirá a la reacción?",
      respuesta: "La reacción fracasará y no habrá amplificación. A 72°C hay demasiada energía térmica y los cebadores (primers) cortos de ADN no podrán formar puentes de hidrógeno estables con la hebra molde (no hibridarán). 72°C es la temperatura de extensión, no de alineamiento."
    }
  ],

herencia_mendel: [
  {
    id: "hm-fc-001",
    pregunta: "¿Qué caracteriza a una enfermedad monogénica?",
    respuesta:
      "Está causada principalmente por variantes patogénicas en un único gen y suele seguir patrones hereditarios reconocibles."
  },

  {
    id: "hm-fc-002",
    pregunta: "¿Qué diferencia existe entre genotipo y fenotipo?",
    respuesta:
      "Genotipo corresponde a la constitución genética; fenotipo corresponde a las características observables derivadas de la interacción entre genes y ambiente."
  },

  {
    id: "hm-fc-003",
    pregunta: "¿Qué significa que un individuo sea heterocigoto?",
    respuesta:
      "Que posee dos alelos distintos para un gen."
  },

  {
    id: "hm-fc-004",
    pregunta: "¿Qué significa que un individuo sea homocigoto?",
    respuesta:
      "Que posee dos alelos iguales para un gen."
  },

  {
    id: "hm-fc-005",
    pregunta: "¿Qué es un individuo hemicigoto?",
    respuesta:
      "Es un individuo que posee una sola copia de un gen, como ocurre con genes del cromosoma X en varones."
  },

  {
    id: "hm-fc-006",
    pregunta: "¿Qué es el probando o caso índice?",
    respuesta:
      "Es el primer individuo diagnosticado o estudiado dentro de una familia."
  },

  {
    id: "hm-fc-007",
    pregunta: "¿Qué patrón de herencia sospecharías si una enfermedad aparece en múltiples generaciones consecutivas?",
    respuesta:
      "Herencia autosómica dominante."
  },

  {
    id: "hm-fc-008",
    pregunta: "¿Qué patrón de herencia sospecharías si una enfermedad salta generaciones?",
    respuesta:
      "Herencia autosómica recesiva."
  },

  {
    id: "hm-fc-009",
    pregunta: "¿Cuál es la característica principal de la herencia autosómica dominante?",
    respuesta:
      "Una sola copia alterada del gen basta para producir enfermedad."
  },

  {
    id: "hm-fc-010",
    pregunta: "¿Cuál es el riesgo clásico de transmisión en una enfermedad autosómica dominante si un progenitor es heterocigoto?",
    respuesta:
      "50% para cada hijo."
  },

  {
    id: "hm-fc-011",
    pregunta: "¿Qué significa transmisión vertical?",
    respuesta:
      "Que la enfermedad aparece en generaciones consecutivas."
  },

  {
    id: "hm-fc-012",
    pregunta: "Menciona tres enfermedades autosómicas dominantes clásicas.",
    respuesta:
      "Acondroplasia, síndrome de Marfan y neurofibromatosis tipo 1."
  },

  {
    id: "hm-fc-013",
    pregunta: "¿Qué caracteriza a la herencia autosómica recesiva?",
    respuesta:
      "La enfermedad aparece cuando ambas copias del gen están alteradas."
  },

  {
    id: "hm-fc-014",
    pregunta: "¿Cuál es el riesgo clásico en dos padres heterocigotos para una enfermedad autosómica recesiva?",
    respuesta:
      "25% afectado, 50% portador y 25% sano."
  },

  {
    id: "hm-fc-015",
    pregunta: "¿Por qué la consanguinidad aumenta enfermedades autosómicas recesivas?",
    respuesta:
      "Porque aumenta la probabilidad de compartir variantes heredadas de un ancestro común."
  },

  {
    id: "hm-fc-016",
    pregunta: "Menciona tres enfermedades autosómicas recesivas clásicas.",
    respuesta:
      "Fibrosis quística, fenilcetonuria y anemia falciforme."
  },

  {
    id: "hm-fc-017",
    pregunta: "¿Cuál es la característica típica de la herencia ligada al X recesiva?",
    respuesta:
      "Predominio de varones afectados y ausencia de transmisión varón-varón."
  },

  {
    id: "hm-fc-018",
    pregunta: "¿Por qué los varones se afectan más en enfermedades XR?",
    respuesta:
      "Porque poseen una sola copia del cromosoma X."
  },

  {
    id: "hm-fc-019",
    pregunta: "¿Qué ocurre con las hijas de un varón afectado por una enfermedad XR?",
    respuesta:
      "Todas serán portadoras obligadas."
  },

  {
    id: "hm-fc-020",
    pregunta: "Menciona ejemplos clásicos de herencia ligada al X recesiva.",
    respuesta:
      "Hemofilia A, distrofia muscular de Duchenne y deficiencia de G6PD."
  },

  {
    id: "hm-fc-021",
    pregunta: "¿Qué caracteriza a la herencia ligada al X dominante?",
    respuesta:
      "Una sola copia alterada del cromosoma X produce enfermedad."
  },

  {
    id: "hm-fc-022",
    pregunta: "¿Qué ocurre con las hijas de un varón afectado por una enfermedad XD?",
    respuesta:
      "Todas estarán afectadas."
  },

  {
    id: "hm-fc-023",
    pregunta: "¿Existe transmisión varón-varón en enfermedades ligadas al X?",
    respuesta:
      "No."
  },

  {
    id: "hm-fc-024",
    pregunta: "¿Qué caracteriza a la herencia mitocondrial?",
    respuesta:
      "Solo la madre transmite la enfermedad."
  },

  {
    id: "hm-fc-025",
    pregunta: "¿Qué es heteroplasmia?",
    respuesta:
      "Coexistencia de mitocondrias normales y mutadas dentro de una célula."
  },

  {
    id: "hm-fc-026",
    pregunta: "¿Qué es penetrancia?",
    respuesta:
      "Proporción de individuos con un genotipo que manifiestan el fenotipo esperado."
  },

  {
    id: "hm-fc-027",
    pregunta: "¿Qué es penetrancia incompleta?",
    respuesta:
      "Cuando algunos individuos con la variante patogénica no presentan enfermedad."
  },

  {
    id: "hm-fc-028",
    pregunta: "¿Qué es expresividad variable?",
    respuesta:
      "Diferencias en severidad o manifestaciones clínicas entre individuos con la misma variante."
  },

  {
    id: "hm-fc-029",
    pregunta: "¿Qué diferencia existe entre penetrancia y expresividad?",
    respuesta:
      "Penetrancia se refiere a presencia o ausencia del fenotipo; expresividad se refiere a intensidad o severidad."
  },

  {
    id: "hm-fc-030",
    pregunta: "¿Qué es pleiotropía?",
    respuesta:
      "Cuando una sola variante genética afecta múltiples órganos o sistemas."
  },

  {
    id: "hm-fc-031",
    pregunta: "¿Qué es heterogeneidad genética?",
    respuesta:
      "Que un mismo fenotipo puede deberse a alteraciones en distintos genes."
  },

  {
    id: "hm-fc-032",
    pregunta: "¿Qué es heterogeneidad alélica?",
    respuesta:
      "Distintas variantes en un mismo gen producen enfermedad."
  },

  {
    id: "hm-fc-033",
    pregunta: "¿Qué es heterogeneidad de locus?",
    respuesta:
      "Genes distintos producen un mismo fenotipo."
  },

  {
    id: "hm-fc-034",
    pregunta: "¿Qué es anticipación genética?",
    respuesta:
      "Aumento de severidad o aparición más precoz de la enfermedad en generaciones sucesivas."
  },

  {
    id: "hm-fc-035",
    pregunta: "¿Con qué mecanismo suele asociarse la anticipación?",
    respuesta:
      "Expansión de repeticiones trinucleotídicas."
  },

  {
    id: "hm-fc-036",
    pregunta: "Menciona enfermedades asociadas a anticipación.",
    respuesta:
      "Huntington, distrofia miotónica y síndrome X frágil."
  },

  {
    id: "hm-fc-037",
    pregunta: "¿Qué es impronta genómica?",
    respuesta:
      "Fenómeno epigenético donde la expresión depende del origen parental del alelo."
  },

  {
    id: "hm-fc-038",
    pregunta: "¿Qué enfermedades clásicas se relacionan con impronta?",
    respuesta:
      "Prader-Willi y Angelman."
  },

  {
    id: "hm-fc-039",
    pregunta: "¿Qué es una mutación de novo?",
    respuesta:
      "Variante genética nueva que aparece por primera vez en un individuo."
  },

  {
    id: "hm-fc-040",
    pregunta: "¿Qué enfermedades AD clásicamente presentan mutaciones de novo?",
    respuesta:
      "Acondroplasia y neurofibromatosis tipo 1."
  },

  {
    id: "hm-fc-041",
    pregunta: "¿Qué es el consejo genético?",
    respuesta:
      "Proceso de informar riesgos, mecanismos hereditarios y opciones diagnósticas o reproductivas."
  },

  {
    id: "hm-fc-042",
    pregunta: "¿Qué significa que el consejo genético sea no directivo?",
    respuesta:
      "Que entrega información y apoyo sin imponer decisiones a la familia."
  }
],

genetica_poblaciones: [
  {
    id: "gp-fc-001",
    pregunta: "¿Qué estudia la genética de poblaciones?",
    respuesta:
      "Estudia la distribución de variantes genéticas en poblaciones y cómo cambian las frecuencias alélicas a lo largo del tiempo."
  },

  {
    id: "gp-fc-002",
    pregunta: "¿Qué es el pool génico?",
    respuesta:
      "Es el conjunto total de alelos presentes en todos los individuos de una población."
  },

  {
    id: "gp-fc-003",
    pregunta: "¿Qué representa la frecuencia alélica?",
    respuesta:
      "La proporción de un alelo específico dentro de la población."
  },

  {
    id: "gp-fc-004",
    pregunta: "¿Qué representa p en Hardy-Weinberg?",
    respuesta:
      "La frecuencia del alelo dominante."
  },

  {
    id: "gp-fc-005",
    pregunta: "¿Qué representa q en Hardy-Weinberg?",
    respuesta:
      "La frecuencia del alelo recesivo."
  },

  {
    id: "gp-fc-006",
    pregunta: "¿Cuál es la ecuación básica de frecuencias alélicas?",
    respuesta:
      "p + q = 1"
  },

  {
    id: "gp-fc-007",
    pregunta: "¿Cuál es la ecuación genotípica de Hardy-Weinberg?",
    respuesta:
      "p² + 2pq + q² = 1"
  },

  {
    id: "gp-fc-008",
    pregunta: "¿Qué representa p²?",
    respuesta:
      "Frecuencia de homocigotos dominantes."
  },

  {
    id: "gp-fc-009",
    pregunta: "¿Qué representa 2pq?",
    respuesta:
      "Frecuencia de heterocigotos o portadores."
  },

  {
    id: "gp-fc-010",
    pregunta: "¿Qué representa q²?",
    respuesta:
      "Frecuencia de homocigotos recesivos o afectados en enfermedades AR."
  },

  {
    id: "gp-fc-011",
    pregunta: "¿Qué establece el principio de Hardy-Weinberg?",
    respuesta:
      "Que las frecuencias alélicas y genotípicas permanecen constantes si no actúan fuerzas evolutivas."
  },

  {
    id: "gp-fc-012",
    pregunta: "¿Cuáles son los supuestos clásicos de Hardy-Weinberg?",
    respuesta:
      "Población grande, apareamiento aleatorio, ausencia de selección, mutación, migración y deriva genética."
  },

  {
    id: "gp-fc-013",
    pregunta: "¿Qué ocurre si se rompe un supuesto de Hardy-Weinberg?",
    respuesta:
      "La población puede salir del equilibrio y cambiar sus frecuencias alélicas."
  },

  {
    id: "gp-fc-014",
    pregunta: "En enfermedades autosómicas recesivas, ¿qué representa q²?",
    respuesta:
      "La frecuencia de individuos afectados."
  },

  {
    id: "gp-fc-015",
    pregunta: "¿Cómo se obtiene q si se conoce q²?",
    respuesta:
      "Calculando la raíz cuadrada de q²."
  },

  {
    id: "gp-fc-016",
    pregunta: "¿Cómo se calcula la frecuencia de portadores?",
    respuesta:
      "Mediante 2pq."
  },

  {
    id: "gp-fc-017",
    pregunta: "¿Qué significa apareamiento aleatorio?",
    respuesta:
      "Que los individuos se reproducen sin preferencias genéticas específicas."
  },

  {
    id: "gp-fc-018",
    pregunta: "¿Qué efecto tiene la consanguinidad?",
    respuesta:
      "Aumenta la homocigosis y frecuencia de enfermedades autosómicas recesivas."
  },

  {
    id: "gp-fc-019",
    pregunta: "¿La consanguinidad aumenta mutaciones nuevas?",
    respuesta:
      "No. Aumenta probabilidad de compartir alelos heredados."
  },

  {
    id: "gp-fc-020",
    pregunta: "¿Qué es deriva genética?",
    respuesta:
      "Cambio aleatorio de frecuencias alélicas, especialmente importante en poblaciones pequeñas."
  },

  {
    id: "gp-fc-021",
    pregunta: "¿Qué consecuencias produce la deriva genética?",
    respuesta:
      "Pérdida de variabilidad genética y posible desaparición o fijación de alelos."
  },

  {
    id: "gp-fc-022",
    pregunta: "¿Qué es efecto fundador?",
    respuesta:
      "Fenómeno donde una población nueva es originada por pocos individuos."
  },

  {
    id: "gp-fc-023",
    pregunta: "¿Qué ocurre en el efecto fundador?",
    respuesta:
      "Algunos alelos pueden hacerse muy frecuentes por azar."
  },

  {
    id: "gp-fc-024",
    pregunta: "¿Qué es cuello de botella poblacional?",
    respuesta:
      "Reducción drástica del tamaño poblacional que altera el pool génico."
  },

  {
    id: "gp-fc-025",
    pregunta: "¿Qué es flujo génico o migración?",
    respuesta:
      "Movimiento de alelos entre poblaciones."
  },

  {
    id: "gp-fc-026",
    pregunta: "¿Qué efecto tiene la migración sobre variabilidad genética?",
    respuesta:
      "Puede aumentar diversidad genética y modificar frecuencias alélicas."
  },

  {
    id: "gp-fc-027",
    pregunta: "¿Cuál es la fuente primaria de variabilidad genética?",
    respuesta:
      "La mutación."
  },

  {
    id: "gp-fc-028",
    pregunta: "¿Qué es selección natural?",
    respuesta:
      "Proceso donde ciertos genotipos tienen mayor éxito reproductivo."
  },

  {
    id: "gp-fc-029",
    pregunta: "¿Qué significa fitness biológico?",
    respuesta:
      "Capacidad reproductiva relativa de un individuo."
  },

  {
    id: "gp-fc-030",
    pregunta: "¿Qué ocurre con alelos ventajosos bajo selección natural?",
    respuesta:
      "Tienden a aumentar su frecuencia poblacional."
  },

  {
    id: "gp-fc-031",
    pregunta: "¿Qué es ventaja heterocigota?",
    respuesta:
      "Situación donde el heterocigoto posee ventaja adaptativa frente a ambos homocigotos."
  },

  {
    id: "gp-fc-032",
    pregunta: "¿Cuál es el ejemplo clásico de ventaja heterocigota?",
    respuesta:
      "Anemia falciforme y resistencia parcial a malaria."
  },

  {
    id: "gp-fc-033",
    pregunta: "¿Qué son los SNP?",
    respuesta:
      "Polimorfismos de nucleótido único; variantes de una sola base."
  },

  {
    id: "gp-fc-034",
    pregunta: "¿Qué significa CNV?",
    respuesta:
      "Variantes del número de copias (copy number variants)."
  },

  {
    id: "gp-fc-035",
    pregunta: "¿Qué es tamizaje poblacional?",
    respuesta:
      "Búsqueda de individuos afectados o portadores en población aparentemente sana."
  },

  {
    id: "gp-fc-036",
    pregunta: "¿Por qué es útil conocer frecuencia de portadores?",
    respuesta:
      "Permite consejo genético y programas preventivos."
  },

  {
    id: "gp-fc-037",
    pregunta: "¿Qué relación existe entre genética poblacional y farmacogenética?",
    respuesta:
      "Las variantes que afectan respuesta a fármacos tienen distintas frecuencias según población."
  },

  {
    id: "gp-fc-038",
    pregunta: "¿Qué es estratificación poblacional?",
    respuesta:
      "Diferencias genéticas entre grupos poblacionales que pueden alterar estudios genéticos."
  },

  {
    id: "gp-fc-039",
    pregunta: "¿Qué error clásico ocurre en Hardy-Weinberg?",
    respuesta:
      "Confundir q² con q."
  },

  {
    id: "gp-fc-040",
    pregunta: "Si una enfermedad AR afecta a 1/10.000 individuos, ¿qué representa ese valor?",
    respuesta:
      "Representa q²."
  },

  {
    id: "gp-fc-041",
    pregunta: "¿Qué ocurre con la variabilidad genética en poblaciones pequeñas?",
    respuesta:
      "La deriva genética tiene mayor impacto y puede disminuir variabilidad."
  },

  {
    id: "gp-fc-042",
    pregunta: "¿Qué significa equilibrio poblacional?",
    respuesta:
      "Que las frecuencias alélicas permanecen constantes entre generaciones."
  }
],

variabilidad: [
  {
    id: "vg-fc-001",
    pregunta: "¿Qué es variabilidad genética?",
    respuesta:
      "Corresponde a las diferencias genéticas existentes entre individuos de una población."
  },

  {
    id: "vg-fc-002",
    pregunta: "¿Cuál es la fuente primaria de variabilidad genética?",
    respuesta:
      "Las mutaciones."
  },

  {
    id: "vg-fc-003",
    pregunta: "¿Qué es un polimorfismo?",
    respuesta:
      "Una variante genética frecuente en la población, generalmente mayor al 1%."
  },

  {
    id: "vg-fc-004",
    pregunta: "¿Todos los polimorfismos producen enfermedad?",
    respuesta:
      "No. La mayoría son benignos."
  },

  {
    id: "vg-fc-005",
    pregunta: "¿Qué significa SNP?",
    respuesta:
      "Single Nucleotide Polymorphism; cambio de una sola base del ADN."
  },

  {
    id: "vg-fc-006",
    pregunta: "¿Cuál es la forma más frecuente de variabilidad genética humana?",
    respuesta:
      "Los SNP."
  },

  {
    id: "vg-fc-007",
    pregunta: "¿Qué son los STR?",
    respuesta:
      "Microsatélites o repeticiones cortas en tándem variables entre individuos."
  },

  {
    id: "vg-fc-008",
    pregunta: "¿Para qué se utilizan los STR?",
    respuesta:
      "Pruebas de paternidad, identificación forense y estudios genéticos."
  },

  {
    id: "vg-fc-009",
    pregunta: "¿Qué significa VNTR?",
    respuesta:
      "Variable Number Tandem Repeats."
  },

  {
    id: "vg-fc-010",
    pregunta: "¿Qué son las CNV?",
    respuesta:
      "Variantes del número de copias; pérdidas o ganancias de segmentos genómicos."
  },

  {
    id: "vg-fc-011",
    pregunta: "¿Todas las CNV son patológicas?",
    respuesta:
      "No. Algunas son variantes normales."
  },

  {
    id: "vg-fc-012",
    pregunta: "¿Qué es recombinación genética?",
    respuesta:
      "Proceso que genera nuevas combinaciones alélicas durante meiosis."
  },

  {
    id: "vg-fc-013",
    pregunta: "¿Qué ocurre durante crossing-over?",
    respuesta:
      "Intercambio de segmentos entre cromátidas no hermanas de cromosomas homólogos."
  },

  {
    id: "vg-fc-014",
    pregunta: "¿En qué etapa ocurre crossing-over?",
    respuesta:
      "Profase I de meiosis."
  },

  {
    id: "vg-fc-015",
    pregunta: "¿Qué efecto tiene el crossing-over?",
    respuesta:
      "Aumenta diversidad genética."
  },

  {
    id: "vg-fc-016",
    pregunta: "¿Qué es segregación independiente?",
    respuesta:
      "Distribución aleatoria de cromosomas homólogos durante meiosis."
  },

  {
    id: "vg-fc-017",
    pregunta: "¿Qué genera la segregación independiente?",
    respuesta:
      "Nuevas combinaciones cromosómicas."
  },

  {
    id: "vg-fc-018",
    pregunta: "¿Qué significa ligamiento genético?",
    respuesta:
      "Genes cercanos en un cromosoma tienden a heredarse juntos."
  },

  {
    id: "vg-fc-019",
    pregunta: "¿Qué fenómeno puede romper el ligamiento genético?",
    respuesta:
      "El crossing-over."
  },

  {
    id: "vg-fc-020",
    pregunta: "¿Qué es heterogeneidad genética?",
    respuesta:
      "Un mismo fenotipo puede deberse a genes distintos."
  },

  {
    id: "vg-fc-021",
    pregunta: "¿Qué es heterogeneidad alélica?",
    respuesta:
      "Distintas variantes en un mismo gen producen enfermedad."
  },

  {
    id: "vg-fc-022",
    pregunta: "¿Qué es heterogeneidad de locus?",
    respuesta:
      "Genes distintos producen un mismo fenotipo."
  },

  {
    id: "vg-fc-023",
    pregunta: "¿Qué es penetrancia?",
    respuesta:
      "Proporción de individuos con un genotipo que manifiestan el fenotipo."
  },

  {
    id: "vg-fc-024",
    pregunta: "¿Qué es expresividad variable?",
    respuesta:
      "Variación en severidad clínica entre individuos con la misma variante."
  },

  {
    id: "vg-fc-025",
    pregunta: "¿Qué diferencia existe entre penetrancia y expresividad?",
    respuesta:
      "Penetrancia corresponde a presencia o ausencia del fenotipo; expresividad corresponde a intensidad clínica."
  },

  {
    id: "vg-fc-026",
    pregunta: "¿Qué estudia la epigenética?",
    respuesta:
      "Cambios en expresión génica sin alterar secuencia del ADN."
  },

  {
    id: "vg-fc-027",
    pregunta: "¿La epigenética cambia la secuencia del ADN?",
    respuesta:
      "No."
  },

  {
    id: "vg-fc-028",
    pregunta: "¿Cuáles son mecanismos epigenéticos importantes?",
    respuesta:
      "Metilación del ADN, modificaciones de histonas y ARN no codificante."
  },

  {
    id: "vg-fc-029",
    pregunta: "¿Qué es impronta genómica?",
    respuesta:
      "Fenómeno epigenético donde la expresión depende del origen parental."
  },

  {
    id: "vg-fc-030",
    pregunta: "¿Qué es mosaicismo?",
    respuesta:
      "Presencia de líneas celulares genéticamente distintas derivadas del mismo cigoto."
  },

  {
    id: "vg-fc-031",
    pregunta: "¿Qué es mosaicismo gonadal?",
    respuesta:
      "Mosaicismo presente en células germinales."
  },

  {
    id: "vg-fc-032",
    pregunta: "¿Qué puede explicar el mosaicismo gonadal?",
    respuesta:
      "Recurrencia de enfermedades genéticas en padres aparentemente sanos."
  },

  {
    id: "vg-fc-033",
    pregunta: "¿Qué es quimerismo?",
    respuesta:
      "Presencia de líneas celulares derivadas de cigotos distintos."
  },

  {
    id: "vg-fc-034",
    pregunta: "¿Cuál es la diferencia principal entre mosaicismo y quimerismo?",
    respuesta:
      "Mosaicismo deriva de un cigoto; quimerismo deriva de múltiples cigotos."
  },

  {
    id: "vg-fc-035",
    pregunta: "¿Qué es variabilidad ambiental?",
    respuesta:
      "Modificaciones fenotípicas producidas por factores ambientales."
  },

  {
    id: "vg-fc-036",
    pregunta: "¿Qué significa interacción gen-ambiente?",
    respuesta:
      "El fenotipo depende tanto de genética como del ambiente."
  },

  {
    id: "vg-fc-037",
    pregunta: "¿Qué es farmacogenética?",
    respuesta:
      "Estudio de cómo variantes genéticas modifican respuesta a medicamentos."
  },

  {
    id: "vg-fc-038",
    pregunta: "¿Qué es un GWAS?",
    respuesta:
      "Estudio de asociación genética a escala genómica."
  },

  {
    id: "vg-fc-039",
    pregunta: "¿Qué buscan los GWAS?",
    respuesta:
      "Asociaciones entre variantes genéticas y enfermedades complejas."
  },

  {
    id: "vg-fc-040",
    pregunta: "¿Asociación genética implica causalidad?",
    respuesta:
      "No necesariamente."
  },

  {
    id: "vg-fc-041",
    pregunta: "¿Qué técnicas permiten estudiar variabilidad genética?",
    respuesta:
      "PCR, secuenciación, NGS, STR, microarrays y array-CGH."
  },

  {
    id: "vg-fc-042",
    pregunta: "¿Por qué la variabilidad genética es importante para evolución?",
    respuesta:
      "Porque la selección natural actúa sobre diferencias genéticas."
  }
],

enf_monogenicas: [
  {
    id: "em-fc-001",
    pregunta: "¿Qué es una enfermedad monogénica?",
    respuesta:
      "Enfermedad producida por alteración en un solo gen."
  },

  {
    id: "em-fc-002",
    pregunta: "¿Qué patrones hereditarios clásicos existen?",
    respuesta:
      "Autosómico dominante, autosómico recesivo, ligado al X dominante, ligado al X recesivo y mitocondrial."
  },

  {
    id: "em-fc-003",
    pregunta: "¿Cuántas copias alteradas se requieren en enfermedades AD?",
    respuesta:
      "Solo una copia alterada."
  },

  {
    id: "em-fc-004",
    pregunta: "¿Cuál es una característica clásica de herencia AD?",
    respuesta:
      "Transmisión vertical."
  },

  {
    id: "em-fc-005",
    pregunta: "¿Existe transmisión varón-varón en enfermedades AD?",
    respuesta:
      "Sí."
  },

  {
    id: "em-fc-006",
    pregunta: "¿Cuál es el riesgo típico para descendencia en AD?",
    respuesta:
      "50%."
  },

  {
    id: "em-fc-007",
    pregunta: "¿Qué patrón presentan frecuentemente las enfermedades AR?",
    respuesta:
      "Patrón horizontal."
  },

  {
    id: "em-fc-008",
    pregunta: "¿Cómo suelen ser los padres en enfermedades AR?",
    respuesta:
      "Generalmente sanos y portadores."
  },

  {
    id: "em-fc-009",
    pregunta: "¿Cuál es el riesgo de recurrencia clásico en AR?",
    respuesta:
      "25%."
  },

  {
    id: "em-fc-010",
    pregunta: "¿Qué factor aumenta frecuencia de enfermedades AR?",
    respuesta:
      "Consanguinidad."
  },

  {
    id: "em-fc-011",
    pregunta: "¿Qué característica clásica presenta herencia XR?",
    respuesta:
      "Predominio masculino."
  },

  {
    id: "em-fc-012",
    pregunta: "¿Existe transmisión padre-hijo en XR?",
    respuesta:
      "No."
  },

  {
    id: "em-fc-013",
    pregunta: "¿Quién transmite el cromosoma X a los hijos hombres?",
    respuesta:
      "La madre."
  },

  {
    id: "em-fc-014",
    pregunta: "¿Qué ocurre con las hijas de un padre con enfermedad XD?",
    respuesta:
      "Todas heredan la variante."
  },

  {
    id: "em-fc-015",
    pregunta: "¿Cómo se transmite la herencia mitocondrial?",
    respuesta:
      "Exclusivamente por vía materna."
  },

  {
    id: "em-fc-016",
    pregunta: "¿Los hombres transmiten enfermedades mitocondriales?",
    respuesta:
      "No."
  },

  {
    id: "em-fc-017",
    pregunta: "¿Qué es heteroplasmia?",
    respuesta:
      "Coexistencia de mitocondrias normales y mutadas."
  },

  {
    id: "em-fc-018",
    pregunta: "¿Qué explica la heteroplasmia?",
    respuesta:
      "Variabilidad clínica en enfermedades mitocondriales."
  },

  {
    id: "em-fc-019",
    pregunta: "¿Qué es penetrancia?",
    respuesta:
      "Proporción de individuos con genotipo que expresan fenotipo."
  },

  {
    id: "em-fc-020",
    pregunta: "¿Qué es penetrancia incompleta?",
    respuesta:
      "Algunos individuos con la variante no presentan enfermedad."
  },

  {
    id: "em-fc-021",
    pregunta: "¿Qué es expresividad variable?",
    respuesta:
      "Distinta gravedad clínica entre individuos con la misma variante."
  },

  {
    id: "em-fc-022",
    pregunta: "¿Penetrancia corresponde a gravedad clínica?",
    respuesta:
      "No."
  },

  {
    id: "em-fc-023",
    pregunta: "¿Qué es anticipación genética?",
    respuesta:
      "Aparición más precoz o grave en generaciones sucesivas."
  },

  {
    id: "em-fc-024",
    pregunta: "¿Qué mecanismo suele causar anticipación?",
    respuesta:
      "Expansión de tripletes."
  },

  {
    id: "em-fc-025",
    pregunta: "¿Qué enfermedades clásicas presentan anticipación?",
    respuesta:
      "Huntington, distrofia miotónica y X frágil."
  },

  {
    id: "em-fc-026",
    pregunta: "¿Qué es heterogeneidad genética?",
    respuesta:
      "Un mismo fenotipo puede deberse a genes distintos."
  },

  {
    id: "em-fc-027",
    pregunta: "¿Qué es heterogeneidad alélica?",
    respuesta:
      "Distintas variantes en un mismo gen producen enfermedad."
  },

  {
    id: "em-fc-028",
    pregunta: "¿Qué es pleiotropía?",
    respuesta:
      "Una variante genética afecta múltiples órganos o sistemas."
  },

  {
    id: "em-fc-029",
    pregunta: "¿Qué enfermedad clásica presenta pleiotropía?",
    respuesta:
      "Síndrome de Marfan."
  },

  {
    id: "em-fc-030",
    pregunta: "¿Qué gen se altera en síndrome de Marfan?",
    respuesta:
      "FBN1."
  },

  {
    id: "em-fc-031",
    pregunta: "¿Cuál es el patrón hereditario de Marfan?",
    respuesta:
      "Autosómico dominante."
  },

  {
    id: "em-fc-032",
    pregunta: "¿Qué alteración cardiovascular clásica ocurre en Marfan?",
    respuesta:
      "Dilatación aórtica."
  },

  {
    id: "em-fc-033",
    pregunta: "¿Qué gen se altera en fibrosis quística?",
    respuesta:
      "CFTR."
  },

  {
    id: "em-fc-034",
    pregunta: "¿Cuál es el patrón hereditario de fibrosis quística?",
    respuesta:
      "Autosómico recesivo."
  },

  {
    id: "em-fc-035",
    pregunta: "¿Qué manifestación clásica presenta fibrosis quística?",
    respuesta:
      "Infecciones respiratorias recurrentes."
  },

  {
    id: "em-fc-036",
    pregunta: "¿Qué tipo de mutación causa Huntington?",
    respuesta:
      "Expansión CAG."
  },

  {
    id: "em-fc-037",
    pregunta: "¿Cuál es el patrón hereditario de Huntington?",
    respuesta:
      "Autosómico dominante."
  },

  {
    id: "em-fc-038",
    pregunta: "¿Qué manifestación neurológica clásica presenta Huntington?",
    respuesta:
      "Corea."
  },

  {
    id: "em-fc-039",
    pregunta: "¿Qué gen se altera en acondroplasia?",
    respuesta:
      "FGFR3."
  },

  {
    id: "em-fc-040",
    pregunta: "¿Qué característica tiene la acondroplasia respecto a mutaciones nuevas?",
    respuesta:
      "Frecuentemente ocurre por mutaciones de novo."
  },

  {
    id: "em-fc-041",
    pregunta: "¿Qué factor de coagulación se altera en hemofilia A?",
    respuesta:
      "Factor VIII."
  },

  {
    id: "em-fc-042",
    pregunta: "¿Cuál es el patrón hereditario de hemofilia A?",
    respuesta:
      "Ligada al X recesiva."
  },

  {
    id: "em-fc-043",
    pregunta: "¿Qué gen se altera en Duchenne?",
    respuesta:
      "Distrofina."
  },

  {
    id: "em-fc-044",
    pregunta: "¿Qué signo clásico presenta Duchenne?",
    respuesta:
      "Signo de Gowers."
  },

  {
    id: "em-fc-045",
    pregunta: "¿Qué característica presenta NF1?",
    respuesta:
      "Penetrancia alta y expresividad variable."
  },

  {
    id: "em-fc-046",
    pregunta: "¿Qué lesiones cutáneas clásicas presenta NF1?",
    respuesta:
      "Manchas café con leche."
  },

  {
    id: "em-fc-047",
    pregunta: "¿Qué mutación produce anemia falciforme?",
    respuesta:
      "Mutación missense en β-globina."
  },

  {
    id: "em-fc-048",
    pregunta: "¿Qué tipo de herencia presenta anemia falciforme?",
    respuesta:
      "Autosómica recesiva."
  },

  {
    id: "em-fc-049",
    pregunta: "¿Qué son mutaciones de novo?",
    respuesta:
      "Mutaciones nuevas sin antecedentes familiares."
  },

  {
    id: "em-fc-050",
    pregunta: "¿Cuál es un objetivo importante del consejo genético?",
    respuesta:
      "Calcular riesgo de recurrencia."
  }
],

enf_complejas: [
  {
    id: "ec-fc-001",
    pregunta: "¿Qué son las enfermedades complejas o multifactoriales?",
    respuesta:
      "Trastornos producidos por interacción entre múltiples factores genéticos y ambientales."
  },

  {
    id: "ec-fc-002",
    pregunta: "¿Las enfermedades complejas siguen herencia mendeliana clásica?",
    respuesta:
      "No."
  },

  {
    id: "ec-fc-003",
    pregunta: "¿Cuál es una característica clásica de enfermedades complejas?",
    respuesta:
      "Agregación familiar."
  },

  {
    id: "ec-fc-004",
    pregunta: "¿Cómo cambia la frecuencia de enfermedad según parentesco?",
    respuesta:
      "Disminuye a medida que el parentesco es más lejano."
  },

  {
    id: "ec-fc-005",
    pregunta: "¿Qué significa agregación familiar?",
    respuesta:
      "La enfermedad aparece con mayor frecuencia en familiares de afectados."
  },

  {
    id: "ec-fc-006",
    pregunta: "¿Qué mide el riesgo relativo λr?",
    respuesta:
      "La agregación familiar."
  },

  {
    id: "ec-fc-007",
    pregunta: "¿Cuál es la fórmula de λr?",
    respuesta:
      "λr = prevalencia en familiares / prevalencia poblacional."
  },

  {
    id: "ec-fc-008",
    pregunta: "¿Qué significa λr = 1?",
    respuesta:
      "No existe agregación familiar."
  },

  {
    id: "ec-fc-009",
    pregunta: "¿Qué indica un λr elevado?",
    respuesta:
      "Mayor evidencia de participación genética."
  },

  {
    id: "ec-fc-010",
    pregunta: "¿Qué significa concordancia?",
    respuesta:
      "Dos individuos presentan el mismo trastorno."
  },

  {
    id: "ec-fc-011",
    pregunta: "¿Qué significa discordancia?",
    respuesta:
      "Solo uno de los individuos presenta enfermedad."
  },

  {
    id: "ec-fc-012",
    pregunta: "¿Qué comparten los gemelos monocigóticos?",
    respuesta:
      "Prácticamente 100% de la información genética."
  },

  {
    id: "ec-fc-013",
    pregunta: "¿Qué comparten los gemelos dicigóticos?",
    respuesta:
      "Aproximadamente 50% de la información genética."
  },

  {
    id: "ec-fc-014",
    pregunta: "¿Qué demuestra mayor concordancia MZ que DZ?",
    respuesta:
      "Existencia de componente genético."
  },

  {
    id: "ec-fc-015",
    pregunta: "¿Qué demuestra concordancia MZ menor a 100%?",
    respuesta:
      "Existencia de influencia ambiental."
  },

  {
    id: "ec-fc-016",
    pregunta: "¿Qué es la herencia umbral?",
    respuesta:
      "Modelo donde la enfermedad aparece al superar cierto nivel de predisposición."
  },

  {
    id: "ec-fc-017",
    pregunta: "¿Las enfermedades complejas dependen de un solo gen?",
    respuesta:
      "No, participan múltiples genes."
  },

  {
    id: "ec-fc-018",
    pregunta: "¿Qué son los rasgos cualitativos?",
    respuesta:
      "Rasgos presentes o ausentes."
  },

  {
    id: "ec-fc-019",
    pregunta: "¿Qué son los rasgos cuantitativos?",
    respuesta:
      "Características medibles fisiológicas o bioquímicas."
  },

  {
    id: "ec-fc-020",
    pregunta: "¿Qué significa GWAS?",
    respuesta:
      "Genome Wide Association Studies."
  },

  {
    id: "ec-fc-021",
    pregunta: "¿Qué buscan los GWAS?",
    respuesta:
      "Asociaciones entre SNPs y enfermedades."
  },

  {
    id: "ec-fc-022",
    pregunta: "¿Qué analizan los GWAS?",
    respuesta:
      "Miles de SNPs en grandes poblaciones."
  },

  {
    id: "ec-fc-023",
    pregunta: "¿Qué es desequilibrio de ligamiento?",
    respuesta:
      "Asociación no aleatoria entre variantes genéticas."
  },

  {
    id: "ec-fc-024",
    pregunta: "¿Qué limitación importante poseen los GWAS?",
    respuesta:
      "Pueden presentar falsos positivos."
  },

  {
    id: "ec-fc-025",
    pregunta: "¿Otra limitación clásica de GWAS?",
    respuesta:
      "No consideran completamente interacciones génicas."
  },

  {
    id: "ec-fc-026",
    pregunta: "¿Qué genes HLA se asocian a DM1?",
    respuesta:
      "HLA DR3 y DR4."
  },

  {
    id: "ec-fc-027",
    pregunta: "¿Qué alelo HLA posee efecto protector en DM1?",
    respuesta:
      "HLA DR2."
  },

  {
    id: "ec-fc-028",
    pregunta: "¿Cuál es la concordancia MZ aproximada en DM1?",
    respuesta:
      "40%."
  },

  {
    id: "ec-fc-029",
    pregunta: "¿Cuál es la concordancia DZ aproximada en DM1?",
    respuesta:
      "4.8%."
  },

  {
    id: "ec-fc-030",
    pregunta: "¿Qué demuestra concordancia MZ de 40% en DM1?",
    respuesta:
      "Importante participación ambiental."
  },

  {
    id: "ec-fc-031",
    pregunta: "¿Cuál es la concordancia MZ aproximada en DM2?",
    respuesta:
      "80%."
  },

  {
    id: "ec-fc-032",
    pregunta: "¿Qué gen importante se asocia a Alzheimer?",
    respuesta:
      "APOE ε4."
  },

  {
    id: "ec-fc-033",
    pregunta: "¿En qué cromosoma se ubica APOE ε4?",
    respuesta:
      "Cromosoma 19."
  },

  {
    id: "ec-fc-034",
    pregunta: "¿Qué gen relacionado con Alzheimer se ubica en cromosoma 21?",
    respuesta:
      "APP."
  },

  {
    id: "ec-fc-035",
    pregunta: "¿Qué proteína participa en fisiopatología Alzheimer?",
    respuesta:
      "Péptido beta-amiloide."
  },

  {
    id: "ec-fc-036",
    pregunta: "¿Qué λr aproximado presenta esclerosis múltiple en familiares de primer grado?",
    respuesta:
      "40."
  },

  {
    id: "ec-fc-037",
    pregunta: "¿Qué indican λr altos en esclerosis múltiple?",
    respuesta:
      "Importante componente genético."
  },

  {
    id: "ec-fc-038",
    pregunta: "¿Qué tipo de estudios ayudan a separar ambiente y genética?",
    respuesta:
      "Estudios en gemelos y familiares adoptivos."
  },

  {
    id: "ec-fc-039",
    pregunta: "¿Por qué se estudian hijos adoptados?",
    respuesta:
      "Porque comparten ambiente pero no genética."
  },

  {
    id: "ec-fc-040",
    pregunta: "¿Qué factores ambientales participan en enfermedades complejas?",
    respuesta:
      "Dieta, infecciones, tóxicos y estilo de vida."
  },

  {
    id: "ec-fc-041",
    pregunta: "¿Qué diferencia principal existe respecto a enfermedades monogénicas?",
    respuesta:
      "Las complejas no dependen de un solo gen."
  },

  {
    id: "ec-fc-042",
    pregunta: "¿Qué significa susceptibilidad genética?",
    respuesta:
      "Predisposición aumentada a desarrollar enfermedad."
  },

  {
    id: "ec-fc-043",
    pregunta: "¿Las enfermedades complejas son completamente genéticas?",
    respuesta:
      "No."
  },

  {
    id: "ec-fc-044",
    pregunta: "¿Las enfermedades complejas son completamente ambientales?",
    respuesta:
      "No."
  },

  {
    id: "ec-fc-045",
    pregunta: "¿Qué ocurre con la concordancia al aumentar parentesco?",
    respuesta:
      "Tiende a aumentar."
  },

  {
    id: "ec-fc-046",
    pregunta: "¿Qué enfermedad compleja posee asociación con HLA?",
    respuesta:
      "Diabetes Mellitus tipo 1."
  },

  {
    id: "ec-fc-047",
    pregunta: "¿Qué enfermedad compleja se relaciona con APOE ε4?",
    respuesta:
      "Enfermedad de Alzheimer."
  },

  {
    id: "ec-fc-048",
    pregunta: "¿Qué significa MZ?",
    respuesta:
      "Gemelos monocigóticos."
  },

  {
    id: "ec-fc-049",
    pregunta: "¿Qué significa DZ?",
    respuesta:
      "Gemelos dicigóticos."
  },

  {
    id: "ec-fc-050",
    pregunta: "¿Qué concepto resume mejor las enfermedades complejas?",
    respuesta:
      "Interacción genes + ambiente."
  }
],

cancer: [
  {
    id: "ca-fc-001",
    pregunta: "¿Qué es el cáncer desde el punto de vista genético?",
    respuesta:
      "Una enfermedad genética producida por acumulación de alteraciones en el ADN."
  },

  {
    id: "ca-fc-002",
    pregunta: "¿Qué caracteriza a las células tumorales?",
    respuesta:
      "Proliferación descontrolada."
  },

  {
    id: "ca-fc-003",
    pregunta: "¿Qué es una mutación somática?",
    respuesta:
      "Mutación adquirida durante la vida y no heredable."
  },

  {
    id: "ca-fc-004",
    pregunta: "¿Qué es una mutación germinal?",
    respuesta:
      "Mutación heredable presente desde el nacimiento."
  },

  {
    id: "ca-fc-005",
    pregunta: "¿La mayoría de los cánceres son hereditarios?",
    respuesta:
      "No, la mayoría son esporádicos."
  },

  {
    id: "ca-fc-006",
    pregunta: "¿Qué es carcinogénesis?",
    respuesta:
      "Proceso progresivo de transformación tumoral."
  },

  {
    id: "ca-fc-007",
    pregunta: "¿La carcinogénesis es un proceso multietapa?",
    respuesta:
      "Sí."
  },

  {
    id: "ca-fc-008",
    pregunta: "¿Qué factores ambientales pueden inducir cáncer?",
    respuesta:
      "Radiación UV, tabaco, virus oncogénicos y carcinógenos químicos."
  },

  {
    id: "ca-fc-009",
    pregunta: "¿Qué son los protooncogenes?",
    respuesta:
      "Genes normales que participan en crecimiento y proliferación celular."
  },

  {
    id: "ca-fc-010",
    pregunta: "¿Qué es un oncogén?",
    respuesta:
      "Protooncogén alterado que estimula proliferación tumoral."
  },

  {
    id: "ca-fc-011",
    pregunta: "¿Qué tipo de mutación presentan típicamente los oncogenes?",
    respuesta:
      "Gain of function."
  },

  {
    id: "ca-fc-012",
    pregunta: "¿Cómo pueden activarse los oncogenes?",
    respuesta:
      "Mutación puntual, amplificación génica o translocación."
  },

  {
    id: "ca-fc-013",
    pregunta: "¿Qué hacen los genes supresores tumorales?",
    respuesta:
      "Inhiben proliferación celular o favorecen reparación/apoptosis."
  },

  {
    id: "ca-fc-014",
    pregunta: "¿Qué ocurre si se pierden genes supresores tumorales?",
    respuesta:
      "Favorece desarrollo tumoral."
  },

  {
    id: "ca-fc-015",
    pregunta: "¿Qué propone la hipótesis two-hit?",
    respuesta:
      "Se requieren dos eventos de inactivación en genes supresores."
  },

  {
    id: "ca-fc-016",
    pregunta: "¿Qué gen se asocia clásicamente a retinoblastoma?",
    respuesta:
      "RB1."
  },

  {
    id: "ca-fc-017",
    pregunta: "¿RB1 corresponde a qué tipo de gen?",
    respuesta:
      "Gen supresor tumoral."
  },

  {
    id: "ca-fc-018",
    pregunta: "¿Qué gen es conocido como guardián del genoma?",
    respuesta:
      "p53."
  },

  {
    id: "ca-fc-019",
    pregunta: "¿Qué funciones posee p53?",
    respuesta:
      "Detener ciclo celular, reparación ADN y apoptosis."
  },

  {
    id: "ca-fc-020",
    pregunta: "¿Qué es apoptosis?",
    respuesta:
      "Muerte celular programada."
  },

  {
    id: "ca-fc-021",
    pregunta: "¿Por qué es importante la apoptosis?",
    respuesta:
      "Elimina células dañadas potencialmente tumorales."
  },

  {
    id: "ca-fc-022",
    pregunta: "¿Qué ocurre si fallan sistemas de reparación ADN?",
    respuesta:
      "Aumenta inestabilidad genética y riesgo de cáncer."
  },

  {
    id: "ca-fc-023",
    pregunta: "¿Qué es inestabilidad genómica?",
    respuesta:
      "Tendencia aumentada a acumular alteraciones genéticas."
  },

  {
    id: "ca-fc-024",
    pregunta: "¿Qué favorece la inestabilidad genómica?",
    respuesta:
      "Evolución tumoral."
  },

  {
    id: "ca-fc-025",
    pregunta: "¿Qué son los checkpoints del ciclo celular?",
    respuesta:
      "Mecanismos que controlan progresión celular."
  },

  {
    id: "ca-fc-026",
    pregunta: "¿Qué ocurre cuando se pierde control del ciclo celular?",
    respuesta:
      "Aumenta proliferación tumoral."
  },

  {
    id: "ca-fc-027",
    pregunta: "¿Qué es metástasis?",
    respuesta:
      "Diseminación tumoral a distancia."
  },

  {
    id: "ca-fc-028",
    pregunta: "¿Qué caracteriza al cáncer hereditario?",
    respuesta:
      "Inicio precoz y agregación familiar."
  },

  {
    id: "ca-fc-029",
    pregunta: "¿Qué genes se asocian a cáncer mama/ovario hereditario?",
    respuesta:
      "BRCA1 y BRCA2."
  },

  {
    id: "ca-fc-030",
    pregunta: "¿Qué función poseen BRCA1/2?",
    respuesta:
      "Participan en reparación ADN."
  },

  {
    id: "ca-fc-031",
    pregunta: "¿Qué síndrome se asocia a mutaciones TP53?",
    respuesta:
      "Li-Fraumeni."
  },

  {
    id: "ca-fc-032",
    pregunta: "¿Qué caracteriza al síndrome Li-Fraumeni?",
    respuesta:
      "Múltiples cánceres de inicio precoz."
  },

  {
    id: "ca-fc-033",
    pregunta: "¿Qué síndrome se asocia a reparación mismatch?",
    respuesta:
      "Síndrome de Lynch."
  },

  {
    id: "ca-fc-034",
    pregunta: "¿Qué cáncer se asocia clásicamente a Lynch?",
    respuesta:
      "Cáncer colorrectal hereditario."
  },

  {
    id: "ca-fc-035",
    pregunta: "¿Qué es inestabilidad microsatelital?",
    respuesta:
      "Consecuencia de defectos en reparación mismatch."
  },

  {
    id: "ca-fc-036",
    pregunta: "¿Qué gen se altera en poliposis adenomatosa familiar?",
    respuesta:
      "APC."
  },

  {
    id: "ca-fc-037",
    pregunta: "¿Qué caracteriza a la poliposis adenomatosa familiar?",
    respuesta:
      "Múltiples pólipos colónicos y alto riesgo cáncer colorrectal."
  },

  {
    id: "ca-fc-038",
    pregunta: "¿Qué son las mutaciones driver?",
    respuesta:
      "Mutaciones que impulsan crecimiento tumoral."
  },

  {
    id: "ca-fc-039",
    pregunta: "¿Qué son las mutaciones passenger?",
    respuesta:
      "Mutaciones que no contribuyen significativamente al tumor."
  },

  {
    id: "ca-fc-040",
    pregunta: "¿Qué diferencia principal existe entre cáncer hereditario y esporádico?",
    respuesta:
      "Hereditario posee mutación germinal; esporádico mutaciones somáticas."
  },

  {
    id: "ca-fc-041",
    pregunta: "¿Qué característica sugiere cáncer hereditario?",
    respuesta:
      "Inicio precoz."
  },

  {
    id: "ca-fc-042",
    pregunta: "¿Qué característica clínica orienta a síndrome hereditario?",
    respuesta:
      "Múltiples familiares afectados."
  },

  {
    id: "ca-fc-043",
    pregunta: "¿Qué característica presentan frecuentemente los tumores hereditarios?",
    respuesta:
      "Tumores múltiples o bilaterales."
  },

  {
    id: "ca-fc-044",
    pregunta: "¿Qué significa gain of function?",
    respuesta:
      "Aumento o activación anormal de función proteica."
  },

  {
    id: "ca-fc-045",
    pregunta: "¿Qué tipo de alteración presentan genes supresores tumorales?",
    respuesta:
      "Pérdida de función."
  },

  {
    id: "ca-fc-046",
    pregunta: "¿Qué proceso elimina células con daño ADN severo?",
    respuesta:
      "Apoptosis."
  },

  {
    id: "ca-fc-047",
    pregunta: "¿Qué ocurre con el ADN en células tumorales?",
    respuesta:
      "Acumula múltiples alteraciones."
  },

  {
    id: "ca-fc-048",
    pregunta: "¿Qué proceso permite invasión de órganos distantes?",
    respuesta:
      "Metástasis."
  },

  {
    id: "ca-fc-049",
    pregunta: "¿Qué tipo de genes favorecen proliferación celular al activarse?",
    respuesta:
      "Oncogenes."
  },

  {
    id: "ca-fc-050",
    pregunta: "¿Qué concepto resume mejor la genética del cáncer?",
    respuesta:
      "Acumulación progresiva de alteraciones genéticas."
  }
],

pesquisa_neonatal: [

  {
    id: "pn-fc-001",
    pregunta: "¿Qué es la pesquisa neonatal?",
    respuesta:
      "Es un programa de salud pública destinado a detectar enfermedades graves en recién nacidos antes de que aparezcan síntomas clínicos."
  },

  {
    id: "pn-fc-002",
    pregunta: "¿La pesquisa neonatal corresponde a un diagnóstico definitivo?",
    respuesta:
      "No. Corresponde a una prueba de tamizaje destinada a identificar recién nacidos con mayor probabilidad de enfermedad."
  },

  {
    id: "pn-fc-003",
    pregunta: "¿Cuál es el objetivo principal de la pesquisa neonatal?",
    respuesta:
      "Detectar enfermedades antes de que produzcan daño irreversible."
  },

  {
    id: "pn-fc-004",
    pregunta: "¿Por qué muchas enfermedades pesquisadas pasan desapercibidas al nacimiento?",
    respuesta:
      "Porque muchos recién nacidos afectados parecen clínicamente sanos durante los primeros días de vida."
  },

  {
    id: "pn-fc-005",
    pregunta: "¿Qué consecuencias busca prevenir la pesquisa neonatal?",
    respuesta:
      "Discapacidad, daño neurológico irreversible, alteraciones metabólicas graves y muerte."
  },

  {
    id: "pn-fc-006",
    pregunta: "¿Qué características debe tener una enfermedad para incluirse en pesquisa neonatal?",
    respuesta:
      "Debe ser clínicamente importante, grave, detectable precozmente, tener una prueba confiable y tratamiento que modifique el pronóstico."
  },

  {
    id: "pn-fc-007",
    pregunta: "¿Qué diferencia existe entre tamizaje y diagnóstico?",
    respuesta:
      "El tamizaje identifica población de riesgo; el diagnóstico confirma presencia de enfermedad."
  },

  {
    id: "pn-fc-008",
    pregunta: "¿Qué es sensibilidad?",
    respuesta:
      "Es la capacidad de una prueba para detectar correctamente individuos enfermos."
  },

  {
    id: "pn-fc-009",
    pregunta: "¿Qué disminuye una prueba con alta sensibilidad?",
    respuesta:
      "Disminuye falsos negativos."
  },

  {
    id: "pn-fc-010",
    pregunta: "¿Qué es especificidad?",
    respuesta:
      "Es la capacidad de identificar correctamente individuos sanos."
  },

  {
    id: "pn-fc-011",
    pregunta: "¿Qué disminuye una prueba altamente específica?",
    respuesta:
      "Disminuye falsos positivos."
  },

  {
    id: "pn-fc-012",
    pregunta: "¿Qué se prioriza en pesquisa neonatal?",
    respuesta:
      "Generalmente se prioriza sensibilidad alta para evitar falsos negativos."
  },

  {
    id: "pn-fc-013",
    pregunta: "¿Cómo se obtiene la muestra para pesquisa neonatal?",
    respuesta:
      "Mediante punción del talón y depósito de sangre sobre papel filtro."
  },

  {
    id: "pn-fc-014",
    pregunta: "¿Por qué la muestra suele obtenerse entre las 24–48 horas?",
    respuesta:
      "Porque algunas enfermedades requieren alimentación previa para generar alteraciones metabólicas detectables."
  },

  {
    id: "pn-fc-015",
    pregunta: "¿Qué es un error preanalítico?",
    respuesta:
      "Corresponde a problemas ocurridos antes del procesamiento de laboratorio que alteran calidad o interpretación de la muestra."
  },

  {
    id: "pn-fc-016",
    pregunta: "¿Qué ocurre en una muestra insuficiente?",
    respuesta:
      "La sangre no impregna adecuadamente el papel filtro, dificultando mediciones correctas."
  },

  {
    id: "pn-fc-017",
    pregunta: "Mencione ejemplos de contaminación de muestra",
    respuesta:
      "Alcohol residual, cremas, agua, talco, guantes sucios o superficies contaminadas."
  },

  {
    id: "pn-fc-018",
    pregunta: "¿Qué puede ocurrir si la muestra se obtiene demasiado temprano?",
    respuesta:
      "Pueden producirse falsos negativos porque algunos metabolitos aún no alcanzan concentraciones detectables."
  },

  {
    id: "pn-fc-019",
    pregunta: "¿Qué es el hipotiroidismo congénito?",
    respuesta:
      "Es una enfermedad caracterizada por déficit de hormonas tiroideas desde el nacimiento."
  },

  {
    id: "pn-fc-020",
    pregunta: "¿Por qué las hormonas tiroideas son importantes en recién nacidos?",
    respuesta:
      "Participan en desarrollo cerebral, migración neuronal, mielinización y maduración neurológica."
  },

  {
    id: "pn-fc-021",
    pregunta: "¿Por qué un recién nacido con hipotiroidismo congénito puede parecer sano inicialmente?",
    respuesta:
      "Porque durante el embarazo recibe aporte hormonal materno a través de la placenta."
  },

  {
    id: "pn-fc-022",
    pregunta: "¿Cómo se pesquisa el hipotiroidismo congénito?",
    respuesta:
      "Mediante medición de TSH y/o T4."
  },

  {
    id: "pn-fc-023",
    pregunta: "¿Qué es la fenilcetonuria?",
    respuesta:
      "Es un error innato del metabolismo producido por déficit de fenilalanina hidroxilasa."
  },

  {
    id: "pn-fc-024",
    pregunta: "¿Qué función tiene la fenilalanina hidroxilasa?",
    respuesta:
      "Transforma fenilalanina en tirosina."
  },

  {
    id: "pn-fc-025",
    pregunta: "¿Qué ocurre cuando falta fenilalanina hidroxilasa?",
    respuesta:
      "La fenilalanina se acumula y produce toxicidad neurológica."
  },

  {
    id: "pn-fc-026",
    pregunta: "¿Cuál es el tratamiento principal de la fenilcetonuria?",
    respuesta:
      "Dieta restringida en fenilalanina."
  },

  {
    id: "pn-fc-027",
    pregunta: "¿Qué son los errores innatos del metabolismo?",
    respuesta:
      "Enfermedades genéticas causadas por alteraciones en enzimas metabólicas."
  },

  {
    id: "pn-fc-028",
    pregunta: "¿Qué puede generar un déficit enzimático?",
    respuesta:
      "Acumulación tóxica de metabolitos o déficit de productos esenciales."
  },

  {
    id: "pn-fc-029",
    pregunta: "¿Qué ventaja tiene la espectrometría de masas en tándem?",
    respuesta:
      "Permite detectar múltiples metabolitos y enfermedades simultáneamente usando una sola muestra."
  },

  {
    id: "pn-fc-030",
    pregunta: "¿Qué gen se altera en fibrosis quística?",
    respuesta:
      "CFTR."
  },

  {
    id: "pn-fc-031",
    pregunta: "¿Qué produce una alteración en CFTR?",
    respuesta:
      "Secreciones espesas que afectan principalmente pulmones y sistema digestivo."
  },

  {
    id: "pn-fc-032",
    pregunta: "¿Cuál es la causa más frecuente de hiperplasia suprarrenal congénita?",
    respuesta:
      "Déficit de 21-hidroxilasa."
  },

  {
    id: "pn-fc-033",
    pregunta: "¿Por qué la hiperplasia suprarrenal congénita puede ser grave?",
    respuesta:
      "Puede producir crisis suprarrenales, alteraciones hidroelectrolíticas y pérdida de sal."
  },

  {
    id: "pn-fc-034",
    pregunta: "¿Cuál es una limitación importante de la pesquisa neonatal?",
    respuesta:
      "No detecta todas las enfermedades y puede presentar falsos positivos o falsos negativos."
  },

  {
    id: "pn-fc-035",
    pregunta: "¿Qué debe ocurrir después de una pesquisa positiva?",
    respuesta:
      "Confirmación diagnóstica y seguimiento precoz."
  }

],

};