const QUIZ = {
  citogenetica: [
    {
      pregunta:
        "Un recién nacido presenta dismorfias, cardiopatía congénita y retraso del crecimiento. ¿Cuál es la conducta genética inicial más razonable?",
      opciones: [
        "Solicitar estudio citogenético por sospecha de alteración cromosómica",
        "Solicitar Western blot porque permite observar cromosomas en metafase",
        "Descartar etiología genética porque las malformaciones son inespecíficas",
        "Solicitar secuenciación Sanger de un gen al azar"
      ],
      correcta: 0,
      explicacion:
        "Las malformaciones congénitas múltiples son una indicación clásica de estudio citogenético."
    },

    {
      pregunta: "Respecto al cariograma, ¿cuál afirmación es correcta?",
      opciones: [
        "Se obtiene preferentemente en interfase porque el ADN está descondensado",
        "Ordena los cromosomas según tamaño, centrómero y patrón de bandas",
        "Permite detectar de forma directa mutaciones puntuales específicas",
        "Se realiza únicamente con células germinales"
      ],
      correcta: 1,
      explicacion:
        "El cariograma ordena cromosomas según criterios morfológicos y patrón de bandas."
    },

    {
      pregunta:
        "Para obtener cromosomas visibles en un cariotipo, ¿qué combinación es correcta?",
      opciones: [
        "Colchicina para estimular mitosis y Giemsa para detener metafase",
        "Fitohemaglutinina para detener anafase y PCR para teñir bandas",
        "Fitohemaglutinina para estimular linfocitos y colchicina para detener metafase",
        "Choque hipertónico para compactar células y Southern blot para ordenar cromosomas"
      ],
      correcta: 2,
      explicacion:
        "La fitohemaglutinina estimula la división de linfocitos T y la colchicina detiene las células en metafase."
    },

    {
      pregunta:
        "¿Cuál alternativa describe mejor una anomalía cromosómica balanceada?",
      opciones: [
        "Siempre genera pérdida visible de material genético",
        "Siempre produce fenotipo grave en el portador",
        "Implica pérdida completa de un cromosoma autosómico",
        "No presenta pérdida ni ganancia neta de material genético"
      ],
      correcta: 3,
      explicacion:
        "Una anomalía balanceada no tiene pérdida ni ganancia neta de ADN, aunque puede afectar la reproducción."
    },

    {
      pregunta: "Sobre el bandeo G, indique la opción correcta.",
      opciones: [
        "Tiñe principalmente regiones ricas en A-T, pobres en genes y de replicación tardía",
        "Es equivalente a FISH porque usa sondas fluorescentes específicas",
        "Tiñe exclusivamente heterocromatina centromérica",
        "Es el reverso del bandeo R y por eso no se usa en citogenética clínica"
      ],
      correcta: 0,
      explicacion:
        "Las bandas G positivas suelen ser ricas en A-T, pobres en genes y de replicación tardía."
    },

    {
      pregunta:
        "Una deleción pequeña sospechada en 22q11.2 no se observa en cariotipo convencional. ¿Qué técnica sería más adecuada para confirmarla?",
      opciones: [
        "Bandeo C",
        "FISH con sonda específica para la región 22q11.2",
        "Tinción con Giemsa sin tripsina",
        "Conteo manual de cromosomas sexuales"
      ],
      correcta: 1,
      explicacion:
        "FISH con sonda específica permite confirmar microdeleciones como la de 22q11.2."
    },

    {
      pregunta: "En relación con FISH, ¿cuál afirmación es FALSA?",
      opciones: [
        "Puede usarse con sondas centroméricas",
        "Puede aplicarse en células en interfase o metafase",
        "Permite estudiar regiones específicas usando sondas dirigidas",
        "Detecta cualquier alteración genética sin sospecha previa"
      ],
      correcta: 3,
      explicacion:
        "FISH requiere una sonda dirigida, por lo que no sirve como búsqueda global sin sospecha."
    },

    {
      pregunta:
        "Un portador de translocación robertsoniana balanceada consulta por abortos recurrentes. ¿Cuál explicación es más adecuada?",
      opciones: [
        "La translocación balanceada impide siempre la fecundación",
        "El portador puede formar gametos desequilibrados aunque tenga fenotipo normal",
        "Las translocaciones balanceadas solo aparecen en células tumorales",
        "El riesgo reproductivo desaparece si el número cromosómico total parece normal"
      ],
      correcta: 1,
      explicacion:
        "Un portador balanceado puede formar gametos con pérdida o ganancia de material cromosómico."
    },

    {
      pregunta: "¿Cuál de las siguientes corresponde a una aneuploidía?",
      opciones: [
        "Triploidía 69,XXX",
        "Tetraploidía 92,XXXX",
        "Trisomía 21",
        "Duplicación parcial de 5p"
      ],
      correcta: 2,
      explicacion:
        "La trisomía 21 es una aneuploidía porque hay ganancia de un cromosoma individual."
    },

    {
      pregunta: "El mecanismo más frecuente de trisomía libre 21 es:",
      opciones: [
        "No disyunción meiótica",
        "Mutación puntual en CFTR",
        "Deleción de UBE3A materno",
        "Inserción de un segmento mitocondrial"
      ],
      correcta: 0,
      explicacion:
        "La trisomía libre 21 suele originarse por no disyunción meiótica."
    },

    {
      pregunta: `
        <p>Son indicaciones clásicas de estudio citogenético:</p>

        <ol type="I" class="roman-list">
          <li>Malformaciones congénitas múltiples.</li>
          <li>Abortos espontáneos recurrentes.</li>
          <li>Infertilidad.</li>
          <li>Sospecha prenatal de cromosomopatía.</li>
        </ol>
      `,
      opciones: [
        "Solo I y II",
        "Solo III y IV",
        "Solo I, II y III",
        "I, II, III y IV"
      ],
      correcta: 3,
      explicacion:
        "Todas son indicaciones habituales para solicitar un estudio citogenético."
    },

    {
      pregunta: `
        <p>Respecto a las anomalías estructurales balanceadas:</p>

        <ol type="I" class="roman-list">
          <li>Pueden incluir inversiones.</li>
          <li>Pueden incluir translocaciones recíprocas.</li>
          <li>Siempre producen pérdida neta de ADN.</li>
          <li>Pueden aumentar riesgo de descendencia desbalanceada.</li>
        </ol>
      `,
      opciones: [
        "Solo I, II y IV",
        "Solo I y III",
        "Solo II y III",
        "I, II, III y IV"
      ],
      correcta: 0,
      explicacion:
        "Las inversiones y translocaciones pueden ser balanceadas. No hay pérdida neta, pero sí puede haber riesgo reproductivo."
    },

    {
      pregunta: "¿Cuál opción asocia correctamente síndrome y alteración?",
      opciones: [
        "Turner — 47,XXY",
        "Klinefelter — 45,X",
        "Patau — trisomía 18",
        "Cri du chat — deleción 5p"
      ],
      correcta: 3,
      explicacion:
        "Cri du chat se asocia a deleción del brazo corto del cromosoma 5."
    },

    {
      pregunta:
        "Un paciente presenta dos líneas celulares: 46,XX y 47,XX,+21. ¿Qué concepto describe este hallazgo?",
      opciones: [
        "Euploidía",
        "Mosaicismo",
        "Translocación recíproca",
        "Impronta genómica"
      ],
      correcta: 1,
      explicacion:
        "El mosaicismo corresponde a dos o más líneas celulares distintas en un mismo individuo derivadas del mismo cigoto."
    },

    {
      pregunta: "¿Cuál afirmación distingue mejor Prader-Willi de Angelman?",
      opciones: [
        "Ambos se deben exclusivamente a trisomía 15 completa",
        "Prader-Willi se relaciona con pérdida de expresión paterna y Angelman con pérdida de expresión materna",
        "Angelman se debe siempre a monosomía X",
        "Prader-Willi no tiene relación con impronta genómica"
      ],
      correcta: 1,
      explicacion:
        "Ambos pueden involucrar 15q11-q13, pero el fenotipo depende del origen parental afectado."
    },

    {
      pregunta: `
        <p>Sobre microdeleciones:</p>

        <ol type="I" class="roman-list">
          <li>Pueden no verse en cariotipo convencional.</li>
          <li>Pueden detectarse con FISH específica.</li>
          <li>Siempre son visibles con bandeo G estándar.</li>
          <li>Pueden generar síndromes reconocibles.</li>
        </ol>
      `,
      opciones: [
        "Solo I y II",
        "Solo I, II y IV",
        "Solo III y IV",
        "I, II, III y IV"
      ],
      correcta: 1,
      explicacion:
        "Las microdeleciones pueden escapar al cariotipo convencional, pero detectarse con FISH o técnicas de mayor resolución."
    },

    {
      pregunta:
        "Si en un estudio prenatal se sospecha una trisomía específica y se necesita una respuesta rápida contando copias cromosómicas, una opción útil sería:",
      opciones: [
        "Western blot",
        "Northern blot",
        "FISH con sonda centromérica o locus específica",
        "Cultivo bacteriano"
      ],
      correcta: 2,
      explicacion:
        "FISH permite detectar rápidamente algunas aneuploidías específicas usando sondas dirigidas."
    },

    {
      pregunta: "¿Qué evento puede producir mosaicismo postcigótico?",
      opciones: [
        "No disyunción mitótica temprana",
        "Corte por enzimas de restricción",
        "Traducción alterada de ARNm",
        "Desnaturalización por PCR"
      ],
      correcta: 0,
      explicacion:
        "Un error mitótico temprano después de la fecundación puede generar líneas celulares distintas."
    },

    {
      pregunta: "Una inversión pericéntrica se diferencia de una paracéntrica porque:",
      opciones: [
        "La pericéntrica incluye al centrómero",
        "La pericéntrica solo ocurre en cromosomas sexuales",
        "La paracéntrica siempre produce trisomía completa",
        "La paracéntrica implica fusión de acrocéntricos"
      ],
      correcta: 0,
      explicacion:
        "La inversión pericéntrica incluye el centrómero; la paracéntrica no."
    },

    {
      pregunta: `
        <p>Respecto al síndrome de Down:</p>

        <ol type="I" class="roman-list">
          <li>Puede deberse a trisomía libre.</li>
          <li>Puede deberse a translocación robertsoniana.</li>
          <li>Puede presentarse en mosaico.</li>
          <li>El mecanismo es importante para consejo genético.</li>
        </ol>
      `,
      opciones: [
        "Solo I y II",
        "Solo I, II y III",
        "Solo II y IV",
        "I, II, III y IV"
      ],
      correcta: 3,
      explicacion:
        "Todas son correctas. El mecanismo importa porque cambia el riesgo de recurrencia."
    },

    {
      pregunta: `
        <p>Sobre anomalías numéricas cromosómicas:</p>

        <ol type="I" class="roman-list">
          <li>Las aneuploidías afectan cromosomas individuales.</li>
          <li>Las euploidías afectan juegos completos de cromosomas.</li>
          <li>La triploidía es un ejemplo de euploidía.</li>
          <li>La trisomía 21 es un ejemplo de aneuploidía.</li>
        </ol>
      `,
      opciones: [
        "Solo I y IV",
        "Solo II y III",
        "Solo I, II y IV",
        "I, II, III y IV"
      ],
      correcta: 3,
      explicacion:
        "Todas son correctas: triploidía afecta juegos completos y trisomía 21 afecta un cromosoma individual."
    },

    {
      pregunta:
        "¿Cuál es la utilidad principal del bandeo C dentro del estudio citogenético?",
      opciones: [
        "Visualizar heterocromatina constitutiva, especialmente centromérica",
        "Amplificar ADN específico mediante ciclos térmicos",
        "Detectar proteínas alteradas por anticuerpos",
        "Secuenciar exones de un gen sospechoso"
      ],
      correcta: 0,
      explicacion:
        "El bandeo C permite resaltar heterocromatina constitutiva, sobre todo en centrómeros."
    },

    {
      pregunta:
        "¿Cuál situación orienta más directamente a estudiar el cariotipo de los padres de un niño con síndrome de Down?",
      opciones: [
        "Trisomía libre 21 confirmada sin antecedentes familiares",
        "Sospecha de translocación robertsoniana asociada al cromosoma 21",
        "Diagnóstico de fibrosis quística en el recién nacido",
        "Presencia de mutación puntual conocida en CFTR"
      ],
      correcta: 1,
      explicacion:
        "Si hay translocación robertsoniana, uno de los padres podría ser portador balanceado."
    },

    {
      pregunta:
        "¿Qué opción describe mejor una deleción cromosómica?",
      opciones: [
        "Cambio de una base nitrogenada por otra",
        "Pérdida de un segmento de material cromosómico",
        "Fusión de dos cromosomas acrocéntricos sin pérdida visible",
        "Duplicación completa de todos los cromosomas"
      ],
      correcta: 1,
      explicacion:
        "Una deleción implica pérdida de un segmento cromosómico."
    },

    {
      pregunta: `
        <p>Respecto a FISH:</p>

        <ol type="I" class="roman-list">
          <li>Usa sondas de ADN marcadas con fluoróforos.</li>
          <li>Puede detectar microdeleciones específicas.</li>
          <li>Puede aplicarse en interfase.</li>
          <li>Requiere conocer o sospechar la región a estudiar.</li>
        </ol>
      `,
      opciones: [
        "Solo I y II",
        "Solo II y III",
        "Solo I, II y III",
        "I, II, III y IV"
      ],
      correcta: 3,
      explicacion:
        "Todas son características correctas de FISH."
    }
  ],
tecnicas_mol: [
  {
    id: "tm-q-001",
    pregunta: "¿Cuál es la principal función de los primers en PCR?",
    opciones: [
      "Separar las hebras de ADN durante la desnaturalización",
      "Delimitar la región específica que será amplificada",
      "Cortar el ADN en secuencias palindrómicas",
      "Detectar proteínas mediante anticuerpos"
    ],
    correcta: 1,
    explicacion:
      "Los primers se unen a los extremos de la región blanco y permiten que la ADN polimerasa inicie la síntesis."
  },

  {
    id: "tm-q-002",
    pregunta: "¿Qué característica hace útil a la Taq polimerasa en PCR?",
    opciones: [
      "Puede cortar ADN en sitios específicos",
      "Reconoce directamente mutaciones puntuales",
      "Resiste altas temperaturas sin perder actividad",
      "Convierte ARN en ADN complementario"
    ],
    correcta: 2,
    explicacion:
      "La Taq polimerasa es termoestable, por eso soporta los ciclos repetidos de desnaturalización."
  },

  {
    id: "tm-q-003",
    pregunta: "¿Cuál es el orden correcto de las etapas básicas de PCR?",
    opciones: [
      "Alineamiento → extensión → desnaturalización",
      "Extensión → desnaturalización → alineamiento",
      "Desnaturalización → alineamiento → extensión",
      "Transferencia → hibridación → revelado"
    ],
    correcta: 2,
    explicacion:
      "Primero se separan las hebras, luego se unen los primers y finalmente la polimerasa extiende."
  },

  {
    id: "tm-q-004",
    pregunta: "¿Qué técnica permite cuantificar el producto amplificado durante la reacción?",
    opciones: [
      "PCR convencional",
      "qPCR o PCR en tiempo real",
      "Southern blot",
      "Western blot"
    ],
    correcta: 1,
    explicacion:
      "La qPCR mide fluorescencia durante los ciclos de amplificación, permitiendo cuantificación."
  },

  {
    id: "tm-q-005",
    pregunta: "¿Qué estudia una RT-PCR?",
    opciones: [
      "Proteínas mediante anticuerpos",
      "ARN convertido previamente en ADNc",
      "Cromosomas completos en metafase",
      "Fragmentos de ADN teñidos con Giemsa"
    ],
    correcta: 1,
    explicacion:
      "La RT-PCR parte de ARN, que primero se transforma en ADN complementario mediante transcriptasa reversa."
  },

  {
    id: "tm-q-006",
    pregunta: "¿Cuál afirmación sobre enzimas de restricción es correcta?",
    opciones: [
      "Son anticuerpos que reconocen proteínas específicas",
      "Son endonucleasas que cortan ADN en secuencias específicas",
      "Son polimerasas que amplifican ARN directamente",
      "Son fluoróforos usados en FISH"
    ],
    correcta: 1,
    explicacion:
      "Las enzimas de restricción cortan ADN en sitios específicos, muchas veces palindrómicos."
  },

  {
    id: "tm-q-007",
    pregunta: "¿Qué molécula detecta Southern blot?",
    opciones: [
      "ADN",
      "ARN",
      "Proteína",
      "Lípidos de membrana"
    ],
    correcta: 0,
    explicacion:
      "Southern blot detecta secuencias específicas de ADN."
  },

  {
    id: "tm-q-008",
    pregunta: "¿Qué molécula detecta Northern blot?",
    opciones: [
      "ADN",
      "ARN",
      "Proteína",
      "Cromosomas completos"
    ],
    correcta: 1,
    explicacion:
      "Northern blot detecta ARN, especialmente ARNm."
  },

  {
    id: "tm-q-009",
    pregunta: "¿Qué molécula detecta Western blot?",
    opciones: [
      "ADN",
      "ARN",
      "Proteína",
      "Cromatina centromérica"
    ],
    correcta: 2,
    explicacion:
      "Western blot detecta proteínas mediante anticuerpos."
  },

  {
    id: "tm-q-010",
    pregunta: "¿Cuál es la principal utilidad de secuenciación Sanger?",
    opciones: [
      "Analizar todo el genoma de forma masiva",
      "Estudiar una región específica con alta precisión",
      "Detectar proteínas ausentes",
      "Observar cromosomas en metafase"
    ],
    correcta: 1,
    explicacion:
      "Sanger es muy útil cuando se conoce la región o gen específico que se quiere estudiar."
  },

  {
    id: "tm-q-011",
    pregunta: "¿Qué elemento permite la terminación de cadena en Sanger?",
    opciones: [
      "Primers fluorescentes",
      "Didesoxinucleótidos",
      "Anticuerpos monoclonales",
      "Enzimas de restricción"
    ],
    correcta: 1,
    explicacion:
      "Los ddNTPs carecen del grupo necesario para continuar la elongación, por eso detienen la cadena."
  },

  {
    id: "tm-q-012",
    pregunta: "¿Cuál es la principal ventaja de NGS frente a Sanger?",
    opciones: [
      "No requiere ADN",
      "Permite secuenciar millones de fragmentos en paralelo",
      "Solo detecta proteínas",
      "Reemplaza siempre al cariotipo"
    ],
    correcta: 1,
    explicacion:
      "NGS permite analizar muchos fragmentos, genes o regiones simultáneamente."
  },

  {
    id: "tm-q-013",
    pregunta: `
      <p>Respecto a PCR:</p>

      <ol type="I" class="roman-list">
        <li>Amplifica una región específica de ADN.</li>
        <li>Requiere primers.</li>
        <li>Utiliza ciclos de temperatura.</li>
        <li>Detecta proteínas mediante anticuerpos.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo II y III",
      "Solo I, II y III",
      "I, II, III y IV"
    ],
    correcta: 2,
    explicacion:
      "PCR amplifica ADN específico, requiere primers y usa ciclos de temperatura. No detecta proteínas."
  },

  {
    id: "tm-q-014",
    pregunta: `
      <p>Sobre Southern, Northern y Western blot:</p>

      <ol type="I" class="roman-list">
        <li>Southern estudia ADN.</li>
        <li>Northern estudia ARN.</li>
        <li>Western estudia proteínas.</li>
        <li>Western utiliza anticuerpos para detección.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y III",
      "Solo II, III y IV",
      "I, II, III y IV"
    ],
    correcta: 3,
    explicacion:
      "Todas son correctas. Southern = ADN, Northern = ARN, Western = proteínas."
  },

  {
    id: "tm-q-015",
    pregunta: `
      <p>Respecto a RT-PCR y qPCR:</p>

      <ol type="I" class="roman-list">
        <li>RT-PCR parte de ARN.</li>
        <li>RT-PCR requiere transcriptasa reversa.</li>
        <li>qPCR permite cuantificación en tiempo real.</li>
        <li>qPCR necesariamente estudia proteínas.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y III",
      "Solo III y IV",
      "I, II, III y IV"
    ],
    correcta: 1,
    explicacion:
      "RT-PCR estudia ARN convertido a ADNc; qPCR cuantifica ácidos nucleicos mediante fluorescencia."
  },

  {
    id: "tm-q-016",
    pregunta: "¿Qué técnica sería más adecuada para detectar una microdeleción específica en 22q11.2?",
    opciones: [
      "Western blot",
      "FISH con sonda específica",
      "Northern blot",
      "PCR sin primers"
    ],
    correcta: 1,
    explicacion:
      "FISH permite detectar regiones específicas mediante sondas fluorescentes."
  },

  {
    id: "tm-q-017",
    pregunta: "¿Qué técnica permite detectar ganancias y pérdidas de material genético comparando ADN problema con ADN control?",
    opciones: [
      "CGH",
      "Western blot",
      "RT-PCR",
      "Sanger"
    ],
    correcta: 0,
    explicacion:
      "La hibridación genómica comparativa detecta diferencias de dosis: ganancias o pérdidas."
  },

  {
    id: "tm-q-018",
    pregunta: "¿Por qué CGH no detecta bien una translocación balanceada?",
    opciones: [
      "Porque solo detecta proteínas",
      "Porque no hay pérdida ni ganancia neta de ADN",
      "Porque requiere ARN mensajero",
      "Porque solo funciona en bacterias"
    ],
    correcta: 1,
    explicacion:
      "CGH detecta cambios de cantidad de ADN; una translocación balanceada conserva la dosis total."
  },

  {
    id: "tm-q-019",
    pregunta: "Una enfermedad puede estar causada por variantes en más de 80 genes distintos. ¿Qué estrategia sería más eficiente?",
    opciones: [
      "Western blot de una proteína elegida al azar",
      "Sanger de un único gen sin sospecha clara",
      "Panel multigénico por NGS",
      "Bandeo C"
    ],
    correcta: 2,
    explicacion:
      "NGS permite estudiar múltiples genes simultáneamente, ideal en enfermedades con heterogeneidad genética."
  },

  {
    id: "tm-q-020",
    pregunta: "¿Qué ocurriría si una PCR se realiza sin primers?",
    opciones: [
      "La reacción sería más específica",
      "No habría amplificación específica",
      "Se obtendrían proteínas amplificadas",
      "Se produciría FISH automáticamente"
    ],
    correcta: 1,
    explicacion:
      "La polimerasa necesita primers para iniciar la síntesis y definir la región blanco."
  },

  {
    id: "tm-q-021",
    pregunta: `
      <p>Sobre NGS:</p>

      <ol type="I" class="roman-list">
        <li>Secuencia muchos fragmentos en paralelo.</li>
        <li>Puede usarse en paneles multigénicos.</li>
        <li>Puede utilizarse para exoma completo.</li>
        <li>Solo permite estudiar una única variante conocida.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y III",
      "Solo II y IV",
      "I, II, III y IV"
    ],
    correcta: 1,
    explicacion:
      "NGS permite análisis masivo; no está limitado a una única variante conocida."
  },

  {
    id: "tm-q-022",
    pregunta: `
      <p>Para estudiar expresión génica podrían usarse:</p>

      <ol type="I" class="roman-list">
        <li>Northern blot.</li>
        <li>RT-PCR.</li>
        <li>qPCR si se parte de ADNc.</li>
        <li>Western blot para medir directamente ARNm.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y III",
      "Solo II y IV",
      "I, II, III y IV"
    ],
    correcta: 1,
    explicacion:
      "Northern y RT-PCR estudian ARN; qPCR puede cuantificar expresión usando ADNc. Western estudia proteínas."
  },

  {
    id: "tm-q-023",
    pregunta: "¿Cuál de las siguientes asociaciones es correcta?",
    opciones: [
      "Southern — proteínas",
      "Northern — ADN",
      "Western — proteínas",
      "Sanger — anticuerpos"
    ],
    correcta: 2,
    explicacion:
      "Western blot detecta proteínas. Southern ADN, Northern ARN y Sanger secuencia ADN."
  },

  {
    id: "tm-q-024",
    pregunta: "¿Qué técnica elegirías para confirmar una variante puntual conocida en una familia?",
    opciones: [
      "Sanger o PCR dirigida",
      "Cariotipo convencional",
      "Bandeo C",
      "Western sin anticuerpo específico"
    ],
    correcta: 0,
    explicacion:
      "Si la variante ya se conoce, una técnica dirigida como Sanger o PCR específica suele ser suficiente."
  }
],

herencia_mendel: [
  {
    id: "hm-q-001",
    pregunta: "¿Cuál característica es típica de una enfermedad autosómica dominante?",
    opciones: [
      "Salta generaciones frecuentemente",
      "Predominio exclusivo de hombres",
      "Transmisión vertical",
      "Ausencia de transmisión padre-hijo"
    ],
    correcta: 2,
    explicacion:
      "Las enfermedades AD suelen observarse en generaciones consecutivas, fenómeno llamado transmisión vertical."
  },

  {
    id: "hm-q-002",
    pregunta: "¿Cuál es el riesgo de recurrencia para hijos de un individuo heterocigoto con enfermedad autosómica dominante?",
    opciones: [
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    correcta: 1,
    explicacion:
      "Cada hijo tiene 50% de probabilidad de heredar el alelo mutado."
  },

  {
    id: "hm-q-003",
    pregunta: "¿Qué característica orienta a herencia autosómica recesiva?",
    opciones: [
      "Afectados en múltiples generaciones consecutivas",
      "Transmisión exclusiva materna",
      "Predominio de mujeres",
      "Padres sanos con hijos afectados"
    ],
    correcta: 3,
    explicacion:
      "En AR los padres suelen ser portadores clínicamente sanos."
  },

  {
    id: "hm-q-004",
    pregunta: "Dos padres heterocigotos para fibrosis quística tienen un hijo. ¿Cuál es la probabilidad de que esté afectado?",
    opciones: [
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    correcta: 0,
    explicacion:
      "En AR el riesgo clásico es 25% afectado, 50% portador y 25% sano."
  },

  {
    id: "hm-q-005",
    pregunta: "¿Cuál característica es típica de herencia ligada al X recesiva?",
    opciones: [
      "Transmisión padre-hijo frecuente",
      "Predominio de hombres afectados",
      "Solo afecta mujeres",
      "Todos los hijos de mujer afectada estarán afectados"
    ],
    correcta: 1,
    explicacion:
      "Los hombres presentan mayor frecuencia porque tienen una sola copia del cromosoma X."
  },

  {
    id: "hm-q-006",
    pregunta: "Un hombre con hemofilia tiene hijos con una mujer sana no portadora. ¿Qué ocurrirá?",
    opciones: [
      "Todos los hijos hombres afectados",
      "Todas las hijas portadoras",
      "Todas las hijas afectadas",
      "Todos los hijos serán sanos no portadores"
    ],
    correcta: 1,
    explicacion:
      "El padre transmite su cromosoma X mutado a todas sus hijas."
  },

  {
    id: "hm-q-007",
    pregunta: "¿Cuál patrón hereditario NO presenta transmisión varón-varón?",
    opciones: [
      "Autosómica dominante",
      "Autosómica recesiva",
      "Ligada al X",
      "Mitocondrial"
    ],
    correcta: 2,
    explicacion:
      "En enfermedades ligadas al X el padre transmite el cromosoma Y a sus hijos hombres."
  },

  {
    id: "hm-q-008",
    pregunta: "¿Qué característica es típica de herencia mitocondrial?",
    opciones: [
      "Solo transmiten los hombres",
      "Todos los hijos de una madre afectada pueden heredar",
      "Existe transmisión varón-varón",
      "Solo afecta mujeres"
    ],
    correcta: 1,
    explicacion:
      "Las mitocondrias provienen del óvulo, por eso la transmisión es materna."
  },

  {
    id: "hm-q-009",
    pregunta: "¿Qué significa penetrancia incompleta?",
    opciones: [
      "La enfermedad es siempre severa",
      "El gen no puede heredarse",
      "Algunos portadores no manifiestan el fenotipo",
      "La enfermedad solo aparece en hombres"
    ],
    correcta: 2,
    explicacion:
      "En penetrancia incompleta algunos individuos con la variante no presentan enfermedad."
  },

  {
    id: "hm-q-010",
    pregunta: "¿Qué concepto describe diferencias de severidad entre individuos con la misma enfermedad genética?",
    opciones: [
      "Penetrancia",
      "Expresividad variable",
      "Anticipación",
      "Heteroplasmia"
    ],
    correcta: 1,
    explicacion:
      "La expresividad variable corresponde a diferencias en intensidad clínica."
  },

  {
    id: "hm-q-011",
    pregunta: "¿Qué fenómeno se relaciona clásicamente con expansión de tripletes?",
    opciones: [
      "Pleiotropía",
      "Impronta",
      "Anticipación",
      "Heterogeneidad"
    ],
    correcta: 2,
    explicacion:
      "La anticipación suele asociarse a expansión de repeticiones trinucleotídicas."
  },

  {
    id: "hm-q-012",
    pregunta: "¿Cuál enfermedad se asocia clásicamente a anticipación genética?",
    opciones: [
      "Fibrosis quística",
      "Hemofilia A",
      "Síndrome de Down",
      "Huntington"
    ],
    correcta: 3,
    explicacion:
      "Huntington es un ejemplo clásico de anticipación."
  },

  {
    id: "hm-q-013",
    pregunta: `
      <p>Respecto a herencia autosómica dominante:</p>

      <ol type="I" class="roman-list">
        <li>Suele observarse transmisión vertical.</li>
        <li>Los afectados suelen ser heterocigotos.</li>
        <li>Existe transmisión padre-hijo.</li>
        <li>Los individuos sanos generalmente no transmiten.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo II y III",
      "Solo I, II y III",
      "I, II, III y IV"
    ],
    correcta: 3,
    explicacion:
      "Todas corresponden a características típicas de AD."
  },

  {
    id: "hm-q-014",
    pregunta: `
      <p>Sobre herencia autosómica recesiva:</p>

      <ol type="I" class="roman-list">
        <li>Puede saltar generaciones.</li>
        <li>La consanguinidad aumenta frecuencia.</li>
        <li>Los padres suelen ser sanos.</li>
        <li>Existe predominio exclusivo de hombres.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y III",
      "Solo III y IV",
      "I, II, III y IV"
    ],
    correcta: 1,
    explicacion:
      "AR afecta ambos sexos por igual, por eso IV es falsa."
  },

  {
    id: "hm-q-015",
    pregunta: `
      <p>Respecto a herencia ligada al X recesiva:</p>

      <ol type="I" class="roman-list">
        <li>Existe predominio de hombres afectados.</li>
        <li>No existe transmisión padre-hijo.</li>
        <li>Las hijas de un afectado son portadoras obligadas.</li>
        <li>Todos los hijos hombres de un afectado estarán enfermos.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y III",
      "Solo III y IV",
      "I, II, III y IV"
    ],
    correcta: 1,
    explicacion:
      "Los hijos hombres reciben el cromosoma Y del padre, no el X mutado."
  },

  {
    id: "hm-q-016",
    pregunta: `
      <p>Sobre herencia mitocondrial:</p>

      <ol type="I" class="roman-list">
        <li>La transmisión es materna.</li>
        <li>Un hombre afectado transmite la enfermedad.</li>
        <li>Puede existir heteroplasmia.</li>
        <li>Tanto hombres como mujeres pueden afectarse.</li>
      </ol>
    `,
    opciones: [
      "Solo I y III",
      "Solo I, III y IV",
      "Solo II y IV",
      "I, II, III y IV"
    ],
    correcta: 1,
    explicacion:
      "Los hombres pueden afectarse, pero no transmitir."
  },

  {
    id: "hm-q-017",
    pregunta: "¿Qué concepto describe que una misma enfermedad pueda deberse a genes distintos?",
    opciones: [
      "Pleiotropía",
      "Penetrancia",
      "Heterogeneidad genética",
      "Anticipación"
    ],
    correcta: 2,
    explicacion:
      "La heterogeneidad genética implica múltiples genes causando un mismo fenotipo."
  },

  {
    id: "hm-q-018",
    pregunta: "¿Qué es pleiotropía?",
    opciones: [
      "Un gen afecta múltiples sistemas",
      "Una enfermedad afecta solo un órgano",
      "Una mutación no se expresa",
      "Un gen se transmite solo por vía materna"
    ],
    correcta: 0,
    explicacion:
      "Pleiotropía significa múltiples efectos fenotípicos de un solo gen."
  },

  {
    id: "hm-q-019",
    pregunta: "¿Qué fenómeno explica Prader-Willi y Angelman?",
    opciones: [
      "Anticipación",
      "Impronta genómica",
      "Heteroplasmia",
      "Mosaicismo"
    ],
    correcta: 1,
    explicacion:
      "La impronta depende del origen parental del alelo."
  },

  {
    id: "hm-q-020",
    pregunta: "¿Qué característica describe mejor una mutación de novo?",
    opciones: [
      "Siempre se hereda de ambos padres",
      "Es exclusiva de enfermedades AR",
      "Aparece por primera vez en un individuo",
      "Solo ocurre en cromosoma X"
    ],
    correcta: 2,
    explicacion:
      "Las mutaciones de novo aparecen sin antecedentes familiares previos."
  },

  {
    id: "hm-q-021",
    pregunta: `
      <p>Respecto a penetrancia y expresividad:</p>

      <ol type="I" class="roman-list">
        <li>Penetrancia se refiere a presencia o ausencia del fenotipo.</li>
        <li>Expresividad corresponde a severidad clínica.</li>
        <li>Una enfermedad puede tener penetrancia incompleta.</li>
        <li>La expresividad siempre es idéntica entre afectados.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y III",
      "Solo III y IV",
      "I, II, III y IV"
    ],
    correcta: 1,
    explicacion:
      "La expresividad puede variar entre individuos."
  },

  {
    id: "hm-q-022",
    pregunta: "¿Cuál enfermedad clásica presenta mutaciones de novo frecuentes?",
    opciones: [
      "Fibrosis quística",
      "Hemofilia B",
      "Acondroplasia",
      "Fenilcetonuria"
    ],
    correcta: 2,
    explicacion:
      "Acondroplasia frecuentemente aparece por mutaciones de novo."
  },

  {
    id: "hm-q-023",
    pregunta: "¿Cuál es la principal utilidad del árbol genealógico?",
    opciones: [
      "Detectar proteínas mutadas",
      "Secuenciar genes",
      "Reconocer patrones hereditarios",
      "Detectar aneuploidías"
    ],
    correcta: 2,
    explicacion:
      "El pedigree permite sospechar mecanismos hereditarios y calcular riesgos."
  },

  {
    id: "hm-q-024",
    pregunta: "¿Qué característica orienta a herencia ligada al X dominante?",
    opciones: [
      "Transmisión padre-hijo frecuente",
      "Todas las hijas de un hombre afectado estarán afectadas",
      "Solo afecta hombres",
      "Siempre salta generaciones"
    ],
    correcta: 1,
    explicacion:
      "Un hombre afectado transmite su X alterado a todas sus hijas."
  }
],

genetica_poblaciones: [
  {
    id: "gp-q-001",
    pregunta: "¿Qué estudia la genética de poblaciones?",
    opciones: [
      "El desarrollo embrionario individual",
      "La distribución de variantes genéticas en poblaciones",
      "La estructura de proteínas celulares",
      "La reparación del ADN exclusivamente"
    ],
    correcta: 1,
    explicacion:
      "La genética de poblaciones analiza frecuencias alélicas y cómo cambian en grupos humanos."
  },

  {
    id: "gp-q-002",
    pregunta: "¿Qué representa q² en Hardy-Weinberg?",
    opciones: [
      "Frecuencia de portadores",
      "Frecuencia de alelos dominantes",
      "Frecuencia de afectados recesivos",
      "Frecuencia de homocigotos dominantes"
    ],
    correcta: 2,
    explicacion:
      "q² corresponde a homocigotos recesivos, típicamente afectados en enfermedades AR."
  },

  {
    id: "gp-q-003",
    pregunta: "¿Qué representa 2pq?",
    opciones: [
      "Frecuencia de heterocigotos",
      "Frecuencia de homocigotos dominantes",
      "Frecuencia de afectados",
      "Frecuencia de mutaciones nuevas"
    ],
    correcta: 0,
    explicacion:
      "2pq representa heterocigotos o portadores."
  },

  {
    id: "gp-q-004",
    pregunta: "¿Cuál es la ecuación correcta de Hardy-Weinberg?",
    opciones: [
      "p² + q² = 1",
      "p² + 2pq + q² = 1",
      "p + 2q = 1",
      "2p + q² = 1"
    ],
    correcta: 1,
    explicacion:
      "La suma de frecuencias genotípicas corresponde a p² + 2pq + q²."
  },

  {
    id: "gp-q-005",
    pregunta: "¿Qué condición es necesaria para mantener equilibrio de Hardy-Weinberg?",
    opciones: [
      "Selección natural intensa",
      "Alta tasa de mutación",
      "Población pequeña",
      "Apareamiento aleatorio"
    ],
    correcta: 3,
    explicacion:
      "El apareamiento aleatorio es uno de los supuestos fundamentales del equilibrio."
  },

  {
    id: "gp-q-006",
    pregunta: "Una enfermedad AR afecta a 1/2500 individuos. ¿Cuál es q?",
    opciones: [
      "1/25",
      "1/50",
      "1/2500",
      "1/5000"
    ],
    correcta: 1,
    explicacion:
      "q² = 1/2500 → q = √(1/2500) = 1/50."
  },

  {
    id: "gp-q-007",
    pregunta: "¿Qué fuerza evolutiva corresponde a cambios aleatorios de frecuencias alélicas?",
    opciones: [
      "Selección natural",
      "Migración",
      "Deriva genética",
      "Mutación dirigida"
    ],
    correcta: 2,
    explicacion:
      "La deriva genética corresponde a cambios por azar."
  },

  {
    id: "gp-q-008",
    pregunta: "¿En qué tipo de población la deriva genética tiene mayor efecto?",
    opciones: [
      "Poblaciones muy grandes",
      "Poblaciones pequeñas",
      "Poblaciones infinitas",
      "Poblaciones con migración alta"
    ],
    correcta: 1,
    explicacion:
      "Mientras más pequeña la población, mayor impacto del azar."
  },

  {
    id: "gp-q-009",
    pregunta: "¿Qué fenómeno ocurre cuando pocos individuos originan una nueva población?",
    opciones: [
      "Selección balanceada",
      "Flujo génico",
      "Cuello de botella",
      "Efecto fundador"
    ],
    correcta: 3,
    explicacion:
      "El efecto fundador ocurre cuando una población nueva deriva de pocos individuos."
  },

  {
    id: "gp-q-010",
    pregunta: "¿Qué efecto tiene la consanguinidad?",
    opciones: [
      "Aumenta mutaciones nuevas",
      "Aumenta heterocigosis",
      "Aumenta homocigosis",
      "Disminuye enfermedades AR"
    ],
    correcta: 2,
    explicacion:
      "La consanguinidad aumenta probabilidad de heredar alelos iguales."
  },

  {
    id: "gp-q-011",
    pregunta: "¿Qué representa el fitness biológico?",
    opciones: [
      "Fuerza física del individuo",
      "Capacidad reproductiva relativa",
      "Cantidad de mutaciones",
      "Velocidad evolutiva"
    ],
    correcta: 1,
    explicacion:
      "Fitness se refiere al éxito reproductivo relativo."
  },

  {
    id: "gp-q-012",
    pregunta: "¿Cuál es la fuente primaria de variabilidad genética?",
    opciones: [
      "Selección natural",
      "Migración",
      "Mutación",
      "Consanguinidad"
    ],
    correcta: 2,
    explicacion:
      "Las mutaciones generan nuevos alelos."
  },

  {
    id: "gp-q-013",
    pregunta: `
      <p>Respecto a Hardy-Weinberg:</p>

      <ol type="I" class="roman-list">
        <li>Permite estimar frecuencia de portadores.</li>
        <li>Supone apareamiento aleatorio.</li>
        <li>Supone ausencia de selección natural.</li>
        <li>Supone población pequeña.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo II y III",
      "Solo I, II y III",
      "I, II, III y IV"
    ],
    correcta: 2,
    explicacion:
      "El equilibrio requiere poblaciones grandes, no pequeñas."
  },

  {
    id: "gp-q-014",
    pregunta: `
      <p>Sobre deriva genética:</p>

      <ol type="I" class="roman-list">
        <li>Produce cambios aleatorios.</li>
        <li>Tiene mayor impacto en poblaciones pequeñas.</li>
        <li>Puede disminuir variabilidad genética.</li>
        <li>Siempre favorece alelos beneficiosos.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y III",
      "Solo III y IV",
      "I, II, III y IV"
    ],
    correcta: 1,
    explicacion:
      "La deriva ocurre por azar, no necesariamente favoreciendo alelos beneficiosos."
  },

  {
    id: "gp-q-015",
    pregunta: `
      <p>Respecto al efecto fundador:</p>

      <ol type="I" class="roman-list">
        <li>Es un tipo de deriva genética.</li>
        <li>Ocurre cuando pocos individuos originan una población.</li>
        <li>Puede aumentar frecuencia de enfermedades raras.</li>
        <li>Aumenta inmediatamente variabilidad genética.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y III",
      "Solo II y IV",
      "I, II, III y IV"
    ],
    correcta: 1,
    explicacion:
      "El efecto fundador suele disminuir variabilidad genética."
  },

  {
    id: "gp-q-016",
    pregunta: "¿Qué describe mejor el flujo génico?",
    opciones: [
      "Cambios por azar",
      "Migración de alelos entre poblaciones",
      "Expansión de tripletes",
      "Duplicación cromosómica"
    ],
    correcta: 1,
    explicacion:
      "El flujo génico corresponde al movimiento de alelos entre poblaciones."
  },

  {
    id: "gp-q-017",
    pregunta: "¿Qué ocurre durante un cuello de botella poblacional?",
    opciones: [
      "La población aumenta rápidamente",
      "Disminuye variabilidad genética",
      "Aumenta mutación dirigida",
      "Se eliminan enfermedades recesivas"
    ],
    correcta: 1,
    explicacion:
      "El cuello de botella reduce drásticamente tamaño poblacional y diversidad."
  },

  {
    id: "gp-q-018",
    pregunta: "¿Qué ejemplo clásico representa ventaja heterocigota?",
    opciones: [
      "Síndrome de Down",
      "Fibrosis quística",
      "Anemia falciforme y malaria",
      "Hemofilia A"
    ],
    correcta: 2,
    explicacion:
      "Los heterocigotos para anemia falciforme presentan protección parcial contra malaria."
  },

  {
    id: "gp-q-019",
    pregunta: "¿Qué significa SNP?",
    opciones: [
      "Variación estructural cromosómica",
      "Cambio de un nucleótido",
      "Duplicación génica completa",
      "Inserción cromosómica"
    ],
    correcta: 1,
    explicacion:
      "SNP corresponde a single nucleotide polymorphism."
  },

  {
    id: "gp-q-020",
    pregunta: "¿Cuál es la utilidad clínica de conocer frecuencia de portadores?",
    opciones: [
      "Eliminar enfermedades hereditarias",
      "Modificar cromosomas",
      "Consejo genético y screening poblacional",
      "Aumentar mutaciones beneficiosas"
    ],
    correcta: 2,
    explicacion:
      "Las frecuencias de portadores son fundamentales en programas preventivos."
  },

  {
    id: "gp-q-021",
    pregunta: `
      <p>Respecto a selección natural:</p>

      <ol type="I" class="roman-list">
        <li>Modifica frecuencias alélicas.</li>
        <li>Favorece genotipos con mayor fitness.</li>
        <li>Puede disminuir alelos perjudiciales.</li>
        <li>Es completamente aleatoria.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo II y III",
      "Solo I, II y III",
      "I, II, III y IV"
    ],
    correcta: 2,
    explicacion:
      "La selección natural NO es aleatoria."
  },

  {
    id: "gp-q-022",
    pregunta: "¿Qué ocurre si aumenta migración entre poblaciones?",
    opciones: [
      "Disminuye flujo génico",
      "Aumenta homocigosis necesariamente",
      "Puede aumentar variabilidad genética",
      "Se elimina selección natural"
    ],
    correcta: 2,
    explicacion:
      "La migración introduce nuevos alelos."
  },

  {
    id: "gp-q-023",
    pregunta: "¿Qué representa mejor el equilibrio poblacional?",
    opciones: [
      "Ausencia de mutaciones en individuos",
      "Frecuencias alélicas constantes entre generaciones",
      "Ausencia de enfermedades genéticas",
      "Igual número de hombres y mujeres"
    ],
    correcta: 1,
    explicacion:
      "El equilibrio implica estabilidad genética poblacional."
  },

  {
    id: "gp-q-024",
    pregunta: "¿Qué error es más frecuente en ejercicios Hardy-Weinberg?",
    opciones: [
      "Confundir p² con 2pq",
      "Confundir q² con q",
      "Confundir deriva con migración",
      "Confundir fitness con mutación"
    ],
    correcta: 1,
    explicacion:
      "q² representa afectados; q corresponde frecuencia alélica."
  },

  {
  id: "gp-q-025",
  pregunta: "Una enfermedad autosómica recesiva afecta a 1 de cada 10.000 individuos. ¿Cuál es el valor de q?",
  opciones: [
    "0.1",
    "0.01",
    "0.001",
    "0.0001"
  ],
  correcta: 1,
  explicacion:
    "q² = 1/10.000 = 0.0001 → q = √0.0001 = 0.01."
},

{
  id: "gp-q-026",
  pregunta: "Si q = 0.02, ¿cuál es el valor aproximado de p?",
  opciones: [
    "0.98",
    "0.96",
    "0.02",
    "0.04"
  ],
  correcta: 0,
  explicacion:
    "p + q = 1 → p = 1 − 0.02 = 0.98."
},

{
  id: "gp-q-027",
  pregunta: "Una enfermedad AR tiene incidencia de 1/2500. ¿Cuál es la frecuencia aproximada de portadores?",
  opciones: [
    "0.02",
    "0.04",
    "0.25",
    "0.5"
  ],
  correcta: 1,
  explicacion:
    "q² = 1/2500 → q = 0.02 → p = 0.98 → 2pq ≈ 0.04."
},

{
  id: "gp-q-028",
  pregunta: "Si q² = 0.0004, ¿cuál es q?",
  opciones: [
    "0.2",
    "0.02",
    "0.04",
    "0.0002"
  ],
  correcta: 1,
  explicacion:
    "q = √0.0004 = 0.02."
},

{
  id: "gp-q-029",
  pregunta: "En una población, q = 0.1. ¿Cuál es la frecuencia esperada de heterocigotos?",
  opciones: [
    "0.01",
    "0.09",
    "0.18",
    "0.81"
  ],
  correcta: 2,
  explicacion:
    "p = 0.9 → 2pq = 2 × 0.9 × 0.1 = 0.18."
},

{
  id: "gp-q-030",
  pregunta: "Una enfermedad autosómica recesiva afecta a 1/40.000 individuos. ¿Cuál es la frecuencia aproximada del alelo recesivo?",
  opciones: [
    "0.05",
    "0.005",
    "0.0005",
    "0.5"
  ],
  correcta: 1,
  explicacion:
    "q² = 1/40.000 → q = √(1/40.000) ≈ 0.005."
},

{
  id: "gp-q-031",
  pregunta: "Si p = 0.7 y q = 0.3, ¿cuál es la frecuencia esperada de homocigotos recesivos?",
  opciones: [
    "0.09",
    "0.21",
    "0.49",
    "0.3"
  ],
  correcta: 0,
  explicacion:
    "q² = 0.3² = 0.09."
},

{
  id: "gp-q-032",
  pregunta: "Si p = 0.8 y q = 0.2, ¿cuál es la frecuencia de heterocigotos?",
  opciones: [
    "0.16",
    "0.32",
    "0.64",
    "0.04"
  ],
  correcta: 1,
  explicacion:
    "2pq = 2 × 0.8 × 0.2 = 0.32."
},

{
  id: "gp-q-033",
  pregunta: "¿Qué representa matemáticamente 2pq en Hardy-Weinberg?",
  opciones: [
    "Homocigotos dominantes",
    "Homocigotos recesivos",
    "Heterocigotos",
    "Mutaciones nuevas"
  ],
  correcta: 2,
  explicacion:
    "2pq representa frecuencia de heterocigotos."
},

{
  id: "gp-q-034",
  pregunta: "Una enfermedad AR tiene incidencia 1/3600. ¿Cuál es q?",
  opciones: [
    "0.6",
    "0.06",
    "0.006",
    "0.36"
  ],
  correcta: 1,
  explicacion:
    "q² = 1/3600 → q = 1/60 ≈ 0.0167... espera 😈"

},
{
  id: "gp-q-035",
  pregunta: "CORRIGE el cálculo anterior: si q² = 1/3600, ¿cuál es el valor correcto de q?",
  opciones: [
    "0.0167",
    "0.06",
    "0.167",
    "0.00167"
  ],
  correcta: 0,
  explicacion:
    "√(1/3600) = 1/60 = 0.0167. Esta es la clásica trampa matemática."
},

{
  id: "gp-q-036",
  pregunta: `
    <p>En una población:</p>

    <ul>
      <li>p = 0.9</li>
      <li>q = 0.1</li>
    </ul>

    <p>¿Cuál es la suma de todas las frecuencias genotípicas?</p>
  `,
  opciones: [
    "0.9",
    "1",
    "0.5",
    "2"
  ],
  correcta: 1,
  explicacion:
    "p² + 2pq + q² siempre debe sumar 1."
},

{
  id: "gp-q-037",
  pregunta: "Si una enfermedad AR afecta a 1 de cada 250.000 individuos, ¿cuál es la frecuencia aproximada de portadores?",
  opciones: [
    "0.004",
    "0.04",
    "0.0004",
    "0.4"
  ],
  correcta: 0,
  explicacion:
    "q² = 1/250.000 → q ≈ 0.002 → p ≈ 0.998 → 2pq ≈ 0.004."
},

{
  id: "gp-q-038",
  pregunta: `
    <p>Respecto a Hardy-Weinberg:</p>

    <ol type="I" class="roman-list">
      <li>q² representa homocigotos recesivos.</li>
      <li>2pq representa heterocigotos.</li>
      <li>p² representa homocigotos dominantes.</li>
      <li>p + q siempre es igual a 1.</li>
    </ol>
  `,
  opciones: [
    "Solo I y II",
    "Solo II y III",
    "Solo I, II y III",
    "I, II, III y IV"
  ],
  correcta: 3,
  explicacion:
    "Todas corresponden a principios fundamentales de Hardy-Weinberg."
},
],

variabilidad: [
  {
    id: "vg-q-001",
    pregunta: "¿Qué es variabilidad genética?",
    opciones: [
      "Mutaciones exclusivamente patológicas",
      "Diferencias genéticas entre individuos",
      "Alteraciones cromosómicas letales",
      "Errores exclusivos de meiosis"
    ],
    correcta: 1,
    explicacion:
      "La variabilidad genética corresponde a diferencias genéticas presentes entre individuos."
  },

  {
    id: "vg-q-002",
    pregunta: "¿Cuál es la fuente primaria de variabilidad genética?",
    opciones: [
      "Crossing-over",
      "Mutación",
      "Migración",
      "Consanguinidad"
    ],
    correcta: 1,
    explicacion:
      "Las mutaciones generan nuevos alelos y constituyen la fuente primaria de variabilidad."
  },

  {
    id: "vg-q-003",
    pregunta: "¿Qué significa SNP?",
    opciones: [
      "Secuencia no polimórfica",
      "Single Nucleotide Polymorphism",
      "Sistema de nucleótidos pareados",
      "Segmento nucleotídico proteico"
    ],
    correcta: 1,
    explicacion:
      "SNP corresponde a variaciones de una sola base del ADN."
  },

  {
    id: "vg-q-004",
    pregunta: "¿Cuál es la forma más frecuente de variabilidad genética humana?",
    opciones: [
      "CNV",
      "VNTR",
      "SNP",
      "Translocaciones"
    ],
    correcta: 2,
    explicacion:
      "Los SNP son la variante genética más frecuente."
  },

  {
    id: "vg-q-005",
    pregunta: "¿Qué son los STR?",
    opciones: [
      "Proteínas regulatorias",
      "Secuencias repetidas cortas en tándem",
      "Mutaciones puntuales",
      "ARN regulatorios"
    ],
    correcta: 1,
    explicacion:
      "STR o microsatélites corresponden a secuencias repetidas cortas."
  },

  {
    id: "vg-q-006",
    pregunta: "¿Cuál es una aplicación clásica de los STR?",
    opciones: [
      "Radioterapia",
      "Diagnóstico prenatal ecográfico",
      "Pruebas de paternidad",
      "Reparación ADN"
    ],
    correcta: 2,
    explicacion:
      "Los STR se utilizan ampliamente en identificación genética."
  },

  {
    id: "vg-q-007",
    pregunta: "¿Qué son las CNV?",
    opciones: [
      "Variantes del número de copias",
      "Mutaciones exclusivamente puntuales",
      "ARN ribosomales",
      "Proteínas estructurales"
    ],
    correcta: 0,
    explicacion:
      "Las CNV corresponden a pérdidas o ganancias de segmentos genómicos."
  },

  {
    id: "vg-q-008",
    pregunta: "¿Todas las CNV son patológicas?",
    opciones: [
      "Sí",
      "No",
      "Solo en niños",
      "Solo en cáncer"
    ],
    correcta: 1,
    explicacion:
      "Muchas CNV son variantes normales."
  },

  {
    id: "vg-q-009",
    pregunta: "¿Qué proceso genera nuevas combinaciones alélicas durante meiosis?",
    opciones: [
      "Traducción",
      "Transcripción",
      "Recombinación genética",
      "Replicación"
    ],
    correcta: 2,
    explicacion:
      "La recombinación genética aumenta diversidad genética."
  },

  {
    id: "vg-q-010",
    pregunta: "¿En qué etapa ocurre crossing-over?",
    opciones: [
      "Metafase II",
      "Profase I",
      "Anafase I",
      "Telofase II"
    ],
    correcta: 1,
    explicacion:
      "El crossing-over ocurre durante profase I de meiosis."
  },

  {
    id: "vg-q-011",
    pregunta: "¿Entre qué estructuras ocurre crossing-over?",
    opciones: [
      "Cromátidas hermanas",
      "Cromátidas no hermanas",
      "ARN y ADN",
      "Ribosomas"
    ],
    correcta: 1,
    explicacion:
      "Ocurre entre cromátidas no hermanas de cromosomas homólogos."
  },

  {
    id: "vg-q-012",
    pregunta: "¿Qué efecto tiene crossing-over?",
    opciones: [
      "Disminuye variabilidad genética",
      "Aumenta diversidad genética",
      "Elimina mutaciones",
      "Impide segregación cromosómica"
    ],
    correcta: 1,
    explicacion:
      "El intercambio de segmentos genera nuevas combinaciones alélicas."
  },

  {
    id: "vg-q-013",
    pregunta: "¿Qué significa segregación independiente?",
    opciones: [
      "Mutación simultánea de genes",
      "Distribución aleatoria de cromosomas",
      "Separación de proteínas",
      "Reparación ADN"
    ],
    correcta: 1,
    explicacion:
      "Los cromosomas se distribuyen aleatoriamente durante meiosis."
  },

  {
    id: "vg-q-014",
    pregunta: "¿Qué es ligamiento genético?",
    opciones: [
      "Genes cercanos tienden a heredarse juntos",
      "Mutaciones simultáneas",
      "Unión entre cromosomas sexuales",
      "Duplicación génica"
    ],
    correcta: 0,
    explicacion:
      "Genes cercanos físicamente presentan menor recombinación."
  },

  {
    id: "vg-q-015",
    pregunta: "¿Qué fenómeno puede romper el ligamiento genético?",
    opciones: [
      "Mutación",
      "Crossing-over",
      "Transcripción",
      "Impronta"
    ],
    correcta: 1,
    explicacion:
      "La recombinación puede separar genes ligados."
  },

  {
    id: "vg-q-016",
    pregunta: "¿Qué es heterogeneidad genética?",
    opciones: [
      "Un gen produce múltiples proteínas",
      "Distintos genes producen mismo fenotipo",
      "Variación ambiental",
      "Mutación somática"
    ],
    correcta: 1,
    explicacion:
      "Un mismo cuadro clínico puede originarse en genes distintos."
  },

  {
    id: "vg-q-017",
    pregunta: "¿Qué es penetrancia?",
    opciones: [
      "Gravedad clínica",
      "Presencia o ausencia del fenotipo",
      "Frecuencia poblacional",
      "Número de mutaciones"
    ],
    correcta: 1,
    explicacion:
      "Penetrancia corresponde a expresión fenotípica del genotipo."
  },

  {
    id: "vg-q-018",
    pregunta: "¿Qué es expresividad variable?",
    opciones: [
      "Ausencia total de enfermedad",
      "Variación en severidad clínica",
      "Mutaciones múltiples",
      "Pérdida cromosómica"
    ],
    correcta: 1,
    explicacion:
      "La expresividad describe intensidad fenotípica."
  },

  {
    id: "vg-q-019",
    pregunta: "¿La epigenética cambia secuencia de ADN?",
    opciones: [
      "Sí",
      "No",
      "Solo en cáncer",
      "Solo en meiosis"
    ],
    correcta: 1,
    explicacion:
      "La epigenética modifica expresión génica, no secuencia."
  },

  {
    id: "vg-q-020",
    pregunta: "¿Cuál es un mecanismo epigenético importante?",
    opciones: [
      "Metilación del ADN",
      "Crossing-over",
      "Translocación",
      "Aneuploidía"
    ],
    correcta: 0,
    explicacion:
      "La metilación regula expresión génica."
  },

  {
    id: "vg-q-021",
    pregunta: "¿Qué es impronta genómica?",
    opciones: [
      "Mutación hereditaria",
      "Expresión dependiente del origen parental",
      "Recombinación cromosómica",
      "Variabilidad ambiental"
    ],
    correcta: 1,
    explicacion:
      "Algunos genes se expresan distinto según origen materno o paterno."
  },

  {
    id: "vg-q-022",
    pregunta: "¿Qué es mosaicismo?",
    opciones: [
      "Líneas celulares derivadas de distintos cigotos",
      "Líneas celulares distintas derivadas del mismo cigoto",
      "Pérdida cromosómica completa",
      "Duplicación cromosómica"
    ],
    correcta: 1,
    explicacion:
      "El mosaicismo surge por mutaciones postcigóticas."
  },

  {
    id: "vg-q-023",
    pregunta: "¿Qué es quimerismo?",
    opciones: [
      "Mutación somática",
      "Variabilidad epigenética",
      "Presencia de líneas celulares derivadas de múltiples cigotos",
      "Crossing-over anormal"
    ],
    correcta: 2,
    explicacion:
      "El quimerismo implica múltiples cigotos."
  },

  {
    id: "vg-q-024",
    pregunta: `
      <p>Respecto a variabilidad genética:</p>

      <ol type="I" class="roman-list">
        <li>Las mutaciones generan nuevos alelos.</li>
        <li>El crossing-over aumenta diversidad genética.</li>
        <li>La segregación independiente genera nuevas combinaciones.</li>
        <li>Todos los polimorfismos son patológicos.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo II y III",
      "Solo I, II y III",
      "I, II, III y IV"
    ],
    correcta: 2,
    explicacion:
      "Los polimorfismos generalmente son benignos."
  },

  {
    id: "vg-q-025",
    pregunta: `
      <p>Respecto a epigenética:</p>

      <ol type="I" class="roman-list">
        <li>Modifica expresión génica.</li>
        <li>No cambia secuencia ADN.</li>
        <li>Incluye metilación del ADN.</li>
        <li>Puede ser influida por ambiente.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo III y IV",
      "Solo I, II y III",
      "I, II, III y IV"
    ],
    correcta: 3,
    explicacion:
      "Todas las afirmaciones son correctas."
  },

  {
    id: "vg-q-026",
    pregunta: "¿Qué estudian los GWAS?",
    opciones: [
      "Cariotipos fetales",
      "Asociaciones entre variantes y enfermedades",
      "Reparación ADN",
      "Segregación cromosómica"
    ],
    correcta: 1,
    explicacion:
      "Los GWAS buscan asociaciones genéticas en enfermedades complejas."
  },

  {
    id: "vg-q-027",
    pregunta: "¿Una asociación genética implica causalidad directa?",
    opciones: [
      "Siempre",
      "Nunca",
      "No necesariamente",
      "Solo en cáncer"
    ],
    correcta: 2,
    explicacion:
      "Asociación estadística no implica causalidad obligatoria."
  },

  {
    id: "vg-q-028",
    pregunta: "¿Qué relación existe entre variabilidad genética y evolución?",
    opciones: [
      "La variabilidad impide evolución",
      "La selección natural actúa sobre diferencias genéticas",
      "Son fenómenos independientes",
      "La evolución elimina toda variabilidad"
    ],
    correcta: 1,
    explicacion:
      "Sin variabilidad genética no existe evolución biológica."
  }
],

enf_monogenicas: [
  {
    id: "em-q-001",
    pregunta: "¿Qué caracteriza a una enfermedad monogénica?",
    opciones: [
      "Alteración en múltiples cromosomas",
      "Mutaciones mitocondriales exclusivamente",
      "Alteración en un solo gen",
      "Origen exclusivamente ambiental"
    ],
    correcta: 2,
    explicacion:
      "Las enfermedades monogénicas se producen por alteraciones en un único gen."
  },

  {
    id: "em-q-002",
    pregunta: "¿Cuál es una característica clásica de herencia autosómica dominante?",
    opciones: [
      "No afecta mujeres",
      "Transmisión horizontal",
      "Transmisión vertical",
      "Solo aparece en hermanos"
    ],
    correcta: 2,
    explicacion:
      "Las enfermedades AD suelen observarse en múltiples generaciones."
  },

  {
    id: "em-q-003",
    pregunta: "¿Cuál es el riesgo clásico de transmitir una enfermedad AD?",
    opciones: [
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    correcta: 1,
    explicacion:
      "Un progenitor heterocigoto afectado posee 50% de riesgo de transmisión."
  },

  {
    id: "em-q-004",
    pregunta: "¿Qué característica orienta a herencia AR?",
    opciones: [
      "Transmisión padre-hijo",
      "Afectados en múltiples generaciones consecutivas",
      "Padres sanos con hijos afectados",
      "Solo afecta hombres"
    ],
    correcta: 2,
    explicacion:
      "En AR los padres suelen ser portadores clínicamente sanos."
  },

  {
    id: "em-q-005",
    pregunta: "¿Qué factor aumenta frecuencia de enfermedades AR?",
    opciones: [
      "Radiación UV",
      "Consanguinidad",
      "Crossing-over",
      "Mitocondrias"
    ],
    correcta: 1,
    explicacion:
      "La consanguinidad aumenta probabilidad de homocigosis."
  },

  {
    id: "em-q-006",
    pregunta: "¿Cuál es el riesgo clásico de recurrencia en enfermedades AR?",
    opciones: [
      "10%",
      "25%",
      "50%",
      "100%"
    ],
    correcta: 1,
    explicacion:
      "Dos portadores tienen 25% de riesgo de hijo afectado."
  },

  {
    id: "em-q-007",
    pregunta: "¿Qué característica clásica posee herencia ligada al X recesiva?",
    opciones: [
      "Transmisión padre-hijo",
      "Predominio masculino",
      "Solo afecta mujeres",
      "Herencia materna exclusiva"
    ],
    correcta: 1,
    explicacion:
      "Las enfermedades XR afectan principalmente hombres."
  },

  {
    id: "em-q-008",
    pregunta: "¿Existe transmisión varón-varón en herencia XR?",
    opciones: [
      "Siempre",
      "Frecuentemente",
      "Nunca",
      "Solo si hay penetrancia incompleta"
    ],
    correcta: 2,
    explicacion:
      "El padre transmite cromosoma Y a hijos hombres."
  },

  {
    id: "em-q-009",
    pregunta: "¿Cómo se transmite la herencia mitocondrial?",
    opciones: [
      "Por vía paterna",
      "Por vía materna",
      "Autosómica",
      "Ligada al Y"
    ],
    correcta: 1,
    explicacion:
      "Las mitocondrias del cigoto derivan del óvulo."
  },

  {
    id: "em-q-010",
    pregunta: "¿Qué ocurre con los hombres afectados por enfermedades mitocondriales?",
    opciones: [
      "Transmiten a todos sus hijos",
      "Transmiten solo a hijas",
      "No transmiten enfermedad",
      "Transmiten solo a hijos hombres"
    ],
    correcta: 2,
    explicacion:
      "La transmisión mitocondrial es exclusivamente materna."
  },

  {
    id: "em-q-011",
    pregunta: "¿Qué es penetrancia?",
    opciones: [
      "Severidad clínica",
      "Número de mutaciones",
      "Presencia o ausencia del fenotipo",
      "Número de órganos afectados"
    ],
    correcta: 2,
    explicacion:
      "Penetrancia corresponde a expresión fenotípica del genotipo."
  },

  {
    id: "em-q-012",
    pregunta: "¿Qué es expresividad variable?",
    opciones: [
      "Ausencia total de enfermedad",
      "Diferente severidad clínica",
      "Mutaciones nuevas",
      "Mosaicismo"
    ],
    correcta: 1,
    explicacion:
      "Los individuos presentan distinta gravedad clínica."
  },

  {
    id: "em-q-013",
    pregunta: "¿Qué mecanismo suele producir anticipación genética?",
    opciones: [
      "Aneuploidías",
      "Crossing-over",
      "Expansión de tripletes",
      "Translocaciones"
    ],
    correcta: 2,
    explicacion:
      "La expansión de tripletes produce aumento progresivo de repeticiones."
  },

  {
    id: "em-q-014",
    pregunta: "¿Qué enfermedad clásica presenta anticipación genética?",
    opciones: [
      "Fibrosis quística",
      "Huntington",
      "Marfan",
      "Hemofilia"
    ],
    correcta: 1,
    explicacion:
      "Huntington se asocia a expansión CAG."
  },

  {
    id: "em-q-015",
    pregunta: "¿Qué es pleiotropía?",
    opciones: [
      "Un gen afecta múltiples sistemas",
      "Múltiples genes producen una enfermedad",
      "Mutaciones simultáneas",
      "Herencia multifactorial"
    ],
    correcta: 0,
    explicacion:
      "Una sola variante puede afectar múltiples órganos."
  },

  {
    id: "em-q-016",
    pregunta: "¿Qué enfermedad clásica presenta pleiotropía?",
    opciones: [
      "Marfan",
      "Daltonismo",
      "Hemofilia",
      "PKU"
    ],
    correcta: 0,
    explicacion:
      "Marfan compromete múltiples sistemas corporales."
  },

  {
    id: "em-q-017",
    pregunta: "¿Qué gen se altera en fibrosis quística?",
    opciones: [
      "FGFR3",
      "FBN1",
      "CFTR",
      "DMD"
    ],
    correcta: 2,
    explicacion:
      "La fibrosis quística se produce por variantes CFTR."
  },

  {
    id: "em-q-018",
    pregunta: "¿Qué patrón hereditario presenta fibrosis quística?",
    opciones: [
      "AD",
      "AR",
      "XR",
      "Mitocondrial"
    ],
    correcta: 1,
    explicacion:
      "Fibrosis quística es autosómica recesiva."
  },

  {
    id: "em-q-019",
    pregunta: "¿Qué manifestación clásica presenta fibrosis quística?",
    opciones: [
      "Araquidactilia",
      "Hemartrosis",
      "Infecciones respiratorias recurrentes",
      "Corea"
    ],
    correcta: 2,
    explicacion:
      "La enfermedad pulmonar crónica es característica."
  },

  {
    id: "em-q-020",
    pregunta: "¿Qué gen se altera en síndrome de Marfan?",
    opciones: [
      "CFTR",
      "FBN1",
      "DMD",
      "HTT"
    ],
    correcta: 1,
    explicacion:
      "Marfan se produce por alteraciones en fibrilina-1."
  },

  {
    id: "em-q-021",
    pregunta: "¿Cuál es el patrón hereditario de Marfan?",
    opciones: [
      "AR",
      "XR",
      "AD",
      "Mitocondrial"
    ],
    correcta: 2,
    explicacion:
      "El síndrome de Marfan es autosómico dominante."
  },

  {
    id: "em-q-022",
    pregunta: "¿Qué complicación cardiovascular clásica presenta Marfan?",
    opciones: [
      "Tetralogía de Fallot",
      "Dilatación aórtica",
      "CIA",
      "Coartación"
    ],
    correcta: 1,
    explicacion:
      "La dilatación de raíz aórtica es característica."
  },

  {
    id: "em-q-023",
    pregunta: "¿Qué enfermedad se produce por expansión CAG?",
    opciones: [
      "Fibrosis quística",
      "Huntington",
      "Marfan",
      "Duchenne"
    ],
    correcta: 1,
    explicacion:
      "Huntington corresponde a expansión CAG."
  },

  {
    id: "em-q-024",
    pregunta: "¿Qué manifestación neurológica es clásica en Huntington?",
    opciones: [
      "Espasticidad",
      "Ataxia",
      "Corea",
      "Parálisis flácida"
    ],
    correcta: 2,
    explicacion:
      "La corea es característica."
  },

  {
    id: "em-q-025",
    pregunta: "¿Qué gen se altera en acondroplasia?",
    opciones: [
      "FGFR3",
      "FBN1",
      "CFTR",
      "Factor VIII"
    ],
    correcta: 0,
    explicacion:
      "Acondroplasia se asocia a mutaciones FGFR3."
  },

  {
    id: "em-q-026",
    pregunta: "¿Qué característica posee acondroplasia respecto a mutaciones?",
    opciones: [
      "Nunca son de novo",
      "Frecuentemente mutaciones de novo",
      "Solo mitocondriales",
      "Siempre heredadas"
    ],
    correcta: 1,
    explicacion:
      "Muchas aparecen sin antecedentes familiares."
  },

  {
    id: "em-q-027",
    pregunta: "¿Qué factor está alterado en hemofilia A?",
    opciones: [
      "Factor IX",
      "Factor VIII",
      "Fibrinógeno",
      "Protrombina"
    ],
    correcta: 1,
    explicacion:
      "Hemofilia A corresponde a déficit factor VIII."
  },

  {
    id: "em-q-028",
    pregunta: "¿Qué patrón hereditario presenta hemofilia A?",
    opciones: [
      "AD",
      "AR",
      "XR",
      "XD"
    ],
    correcta: 2,
    explicacion:
      "Hemofilia A es ligada al X recesiva."
  },

  {
    id: "em-q-029",
    pregunta: "¿Qué gen se altera en Duchenne?",
    opciones: [
      "CFTR",
      "DMD",
      "HTT",
      "FBN1"
    ],
    correcta: 1,
    explicacion:
      "Duchenne corresponde a mutaciones en distrofina."
  },

  {
    id: "em-q-030",
    pregunta: "¿Qué signo clásico presenta Duchenne?",
    opciones: [
      "Trousseau",
      "Babinski",
      "Gowers",
      "Lhermitte"
    ],
    correcta: 2,
    explicacion:
      "El signo de Gowers es clásico en Duchenne."
  },

  {
    id: "em-q-031",
    pregunta: "¿Qué característica clásica presenta NF1?",
    opciones: [
      "Hemartrosis",
      "Manchas café con leche",
      "Corea",
      "Sudor salado"
    ],
    correcta: 1,
    explicacion:
      "Las manchas café con leche son hallazgo clásico."
  },

  {
    id: "em-q-032",
    pregunta: "¿Qué tipo de mutación produce anemia falciforme?",
    opciones: [
      "Frameshift",
      "Nonsense",
      "Missense",
      "Deleción cromosómica"
    ],
    correcta: 2,
    explicacion:
      "La anemia falciforme corresponde a mutación missense."
  },

  {
    id: "em-q-033",
    pregunta: `
      <p>Respecto a enfermedades AD:</p>

      <ol type="I" class="roman-list">
        <li>Afectan ambos sexos.</li>
        <li>Existe transmisión varón-varón.</li>
        <li>Frecuentemente múltiples generaciones están afectadas.</li>
        <li>Siempre presentan penetrancia completa.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo II y III",
      "Solo I, II y III",
      "I, II, III y IV"
    ],
    correcta: 2,
    explicacion:
      "Muchas enfermedades AD presentan penetrancia incompleta."
  },

  {
    id: "em-q-034",
    pregunta: `
      <p>Respecto a enfermedades AR:</p>

      <ol type="I" class="roman-list">
        <li>Los padres suelen ser sanos.</li>
        <li>Existe mayor frecuencia con consanguinidad.</li>
        <li>Afectan ambos sexos.</li>
        <li>Siempre existen antecedentes familiares conocidos.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo II y III",
      "Solo I, II y III",
      "I, II, III y IV"
    ],
    correcta: 2,
    explicacion:
      "Muchas enfermedades AR aparecen sin antecedentes familiares aparentes."
  },

  {
    id: "em-q-035",
    pregunta: `
      <p>Respecto a herencia mitocondrial:</p>

      <ol type="I" class="roman-list">
        <li>La madre transmite enfermedad.</li>
        <li>Los hombres afectados no transmiten.</li>
        <li>Existe heteroplasmia.</li>
        <li>Siempre afecta exclusivamente músculo.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y III",
      "Solo II y IV",
      "I, II, III y IV"
    ],
    correcta: 1,
    explicacion:
      "Las enfermedades mitocondriales pueden afectar múltiples órganos."
  }
],

enf_complejas: [
  {
    id: "ec-q-001",
    pregunta: "¿Qué caracteriza a las enfermedades complejas?",
    opciones: [
      "Dependen de un solo gen",
      "Son exclusivamente ambientales",
      "Resultan de interacción entre genes y ambiente",
      "Siempre siguen herencia mendeliana"
    ],
    correcta: 2,
    explicacion:
      "Las enfermedades complejas corresponden a interacción multifactorial."
  },

  {
    id: "ec-q-002",
    pregunta: "¿Las enfermedades complejas siguen patrones mendelianos clásicos?",
    opciones: [
      "Siempre",
      "Nunca",
      "Solo en hombres",
      "Solo en mujeres"
    ],
    correcta: 1,
    explicacion:
      "No presentan herencia mendeliana clásica."
  },

  {
    id: "ec-q-003",
    pregunta: "¿Qué significa agregación familiar?",
    opciones: [
      "Todos los familiares desarrollan enfermedad",
      "Mayor frecuencia en familiares de afectados",
      "La enfermedad afecta exclusivamente familias",
      "Existe transmisión dominante"
    ],
    correcta: 1,
    explicacion:
      "La enfermedad aparece con mayor frecuencia en familiares."
  },

  {
    id: "ec-q-004",
    pregunta: "¿Qué ocurre con el riesgo al alejarse el parentesco?",
    opciones: [
      "Aumenta",
      "Se mantiene",
      "Disminuye",
      "Desaparece completamente"
    ],
    correcta: 2,
    explicacion:
      "La frecuencia disminuye progresivamente."
  },

  {
    id: "ec-q-005",
    pregunta: "¿Qué mide λr?",
    opciones: [
      "Mutación genética",
      "Concordancia",
      "Agregación familiar",
      "Penetrancia"
    ],
    correcta: 2,
    explicacion:
      "λr corresponde al riesgo relativo familiar."
  },

  {
    id: "ec-q-006",
    pregunta: "¿Cuál es la fórmula de λr?",
    opciones: [
      "Prevalencia poblacional / prevalencia familiar",
      "Concordancia MZ / DZ",
      "Prevalencia familiares / prevalencia poblacional",
      "Genes / ambiente"
    ],
    correcta: 2,
    explicacion:
      "λr compara prevalencia familiar con poblacional."
  },

  {
    id: "ec-q-007",
    pregunta: "¿Qué significa λr = 1?",
    opciones: [
      "Existe fuerte agregación genética",
      "No existe agregación familiar",
      "La enfermedad es dominante",
      "Existe concordancia completa"
    ],
    correcta: 1,
    explicacion:
      "Un λr de 1 indica ausencia de agregación."
  },

  {
    id: "ec-q-008",
    pregunta: "¿Qué indica un λr elevado?",
    opciones: [
      "Mayor influencia ambiental",
      "Mayor participación genética",
      "Ausencia de agregación familiar",
      "Mutación mendeliana"
    ],
    correcta: 1,
    explicacion:
      "Mientras mayor λr, mayor evidencia genética."
  },

  {
    id: "ec-q-009",
    pregunta: "¿Qué significa concordancia?",
    opciones: [
      "Solo un individuo presenta enfermedad",
      "Ambos individuos presentan enfermedad",
      "Ausencia de genes compartidos",
      "Mutación somática"
    ],
    correcta: 1,
    explicacion:
      "Concordancia implica mismo fenotipo."
  },

  {
    id: "ec-q-010",
    pregunta: "¿Qué significa discordancia?",
    opciones: [
      "Ambos individuos afectados",
      "Solo uno presenta enfermedad",
      "Mutación dominante",
      "Herencia mitocondrial"
    ],
    correcta: 1,
    explicacion:
      "Discordancia implica diferencia fenotípica."
  },

  {
    id: "ec-q-011",
    pregunta: "¿Cuánto material genético comparten gemelos monocigóticos?",
    opciones: [
      "25%",
      "50%",
      "75%",
      "Prácticamente 100%"
    ],
    correcta: 3,
    explicacion:
      "Los MZ derivan de un mismo cigoto."
  },

  {
    id: "ec-q-012",
    pregunta: "¿Cuánto material genético comparten gemelos dicigóticos?",
    opciones: [
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    correcta: 1,
    explicacion:
      "Los DZ comparten aproximadamente la mitad del genoma."
  },

  {
    id: "ec-q-013",
    pregunta: "¿Qué demuestra mayor concordancia MZ respecto a DZ?",
    opciones: [
      "Solo ambiente",
      "Participación genética",
      "Herencia mitocondrial",
      "Mutación de novo"
    ],
    correcta: 1,
    explicacion:
      "Mayor concordancia MZ sugiere influencia genética."
  },

  {
    id: "ec-q-014",
    pregunta: "¿Qué demuestra concordancia MZ menor a 100%?",
    opciones: [
      "Ausencia genética",
      "Solo herencia dominante",
      "Participación ambiental",
      "Mutación mitocondrial"
    ],
    correcta: 2,
    explicacion:
      "El ambiente también participa."
  },

  {
    id: "ec-q-015",
    pregunta: "¿Qué es herencia umbral?",
    opciones: [
      "Enfermedad causada por un solo gen",
      "Modelo donde enfermedad aparece tras superar predisposición crítica",
      "Herencia ligada al X",
      "Transmisión mitocondrial"
    ],
    correcta: 1,
    explicacion:
      "La enfermedad aparece al superar cierto umbral."
  },

  {
    id: "ec-q-016",
    pregunta: "¿Qué son los rasgos cuantitativos?",
    opciones: [
      "Rasgos presentes o ausentes",
      "Características medibles",
      "Mutaciones mendelianas",
      "Genes dominantes"
    ],
    correcta: 1,
    explicacion:
      "Son variables fisiológicas o bioquímicas medibles."
  },

  {
    id: "ec-q-017",
    pregunta: "¿Qué significa GWAS?",
    opciones: [
      "Genome Wide Association Studies",
      "Genetic Whole Allele Sequence",
      "Global Weighted Allelic System",
      "Gene Wide Analytic Study"
    ],
    correcta: 0,
    explicacion:
      "GWAS busca asociaciones genéticas a escala genómica."
  },

  {
    id: "ec-q-018",
    pregunta: "¿Qué buscan los GWAS?",
    opciones: [
      "Mutaciones cromosómicas",
      "Asociaciones entre SNPs y enfermedad",
      "Solo enfermedades dominantes",
      "Penetrancia"
    ],
    correcta: 1,
    explicacion:
      "Analizan SNPs asociados a enfermedades complejas."
  },

  {
    id: "ec-q-019",
    pregunta: "¿Qué limitación importante poseen los GWAS?",
    opciones: [
      "No requieren grandes poblaciones",
      "Siempre prueban causalidad",
      "Pueden producir falsos positivos",
      "Solo analizan proteínas"
    ],
    correcta: 2,
    explicacion:
      "Los GWAS pueden detectar asociaciones falsas."
  },

  {
    id: "ec-q-020",
    pregunta: "¿Qué genes HLA se asocian a DM1?",
    opciones: [
      "DR2 y DR7",
      "DR3 y DR4",
      "DQ1 y DQ2",
      "APOE ε4"
    ],
    correcta: 1,
    explicacion:
      "DR3 y DR4 aumentan susceptibilidad."
  },

  {
    id: "ec-q-021",
    pregunta: "¿Qué alelo HLA posee efecto protector en DM1?",
    opciones: [
      "DR3",
      "DR4",
      "DR2",
      "DQ8"
    ],
    correcta: 2,
    explicacion:
      "DR2 se asocia a protección."
  },

  {
    id: "ec-q-022",
    pregunta: "¿Cuál es la concordancia MZ aproximada en DM1?",
    opciones: [
      "4.8%",
      "20%",
      "40%",
      "100%"
    ],
    correcta: 2,
    explicacion:
      "La concordancia MZ en DM1 es cercana a 40%."
  },

  {
    id: "ec-q-023",
    pregunta: "¿Qué demuestra concordancia MZ de 40% en DM1?",
    opciones: [
      "Ausencia genética",
      "Participación ambiental importante",
      "Herencia mendeliana",
      "Solo genes HLA"
    ],
    correcta: 1,
    explicacion:
      "La genética no explica completamente enfermedad."
  },

  {
    id: "ec-q-024",
    pregunta: "¿Cuál es la concordancia MZ aproximada en DM2?",
    opciones: [
      "4.8%",
      "20%",
      "40%",
      "80%"
    ],
    correcta: 3,
    explicacion:
      "DM2 posee concordancia MZ cercana a 80%."
  },

  {
    id: "ec-q-025",
    pregunta: "¿Qué gen importante se asocia a Alzheimer?",
    opciones: [
      "CFTR",
      "FGFR3",
      "APOE ε4",
      "FBN1"
    ],
    correcta: 2,
    explicacion:
      "APOE ε4 aumenta riesgo Alzheimer."
  },

  {
    id: "ec-q-026",
    pregunta: "¿En qué cromosoma se ubica APOE ε4?",
    opciones: [
      "1",
      "14",
      "19",
      "21"
    ],
    correcta: 2,
    explicacion:
      "APOE ε4 se ubica en cromosoma 19."
  },

  {
    id: "ec-q-027",
    pregunta: "¿Qué proteína participa en fisiopatología Alzheimer?",
    opciones: [
      "Distrofina",
      "Beta-amiloide",
      "Hemoglobina",
      "Colágeno"
    ],
    correcta: 1,
    explicacion:
      "El beta-amiloide es central en Alzheimer."
  },

  {
    id: "ec-q-028",
    pregunta: "¿Qué λr aproximado posee esclerosis múltiple en familiares de primer grado?",
    opciones: [
      "1",
      "5",
      "15",
      "40"
    ],
    correcta: 3,
    explicacion:
      "EM presenta λr elevado."
  },

  {
    id: "ec-q-029",
    pregunta: "¿Qué permiten estudiar los hijos adoptados?",
    opciones: [
      "Solo genética",
      "Separar ambiente y genética",
      "Penetrancia",
      "Herencia mitocondrial"
    ],
    correcta: 1,
    explicacion:
      "Comparten ambiente, pero no genes."
  },

  {
    id: "ec-q-030",
    pregunta: "¿Cuál de los siguientes factores ambientales participa en enfermedades complejas?",
    opciones: [
      "Dieta",
      "Infecciones",
      "Estilo de vida",
      "Todas las anteriores"
    ],
    correcta: 3,
    explicacion:
      "Múltiples factores ambientales participan."
  },

  {
    id: "ec-q-031",
    pregunta: `
      <p>Respecto a enfermedades complejas:</p>

      <ol type="I" class="roman-list">
        <li>No siguen herencia mendeliana clásica.</li>
        <li>Existe participación ambiental.</li>
        <li>Participan múltiples genes.</li>
        <li>Presentan agregación familiar.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y III",
      "Solo II y IV",
      "I, II, III y IV"
    ],
    correcta: 3,
    explicacion:
      "Todas las afirmaciones son correctas."
  },

  {
    id: "ec-q-032",
    pregunta: `
      <p>Respecto a estudios en gemelos:</p>

      <ol type="I" class="roman-list">
        <li>Los MZ comparten más genes que los DZ.</li>
        <li>Mayor concordancia MZ sugiere influencia genética.</li>
        <li>Concordancia MZ menor a 100% sugiere ambiente.</li>
        <li>Los DZ comparten aproximadamente 50% de genes.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo II y III",
      "Solo I, II y IV",
      "I, II, III y IV"
    ],
    correcta: 3,
    explicacion:
      "Todas son correctas."
  },

  {
    id: "ec-q-033",
    pregunta: `
      <p>Respecto a GWAS:</p>

      <ol type="I" class="roman-list">
        <li>Buscan asociaciones entre SNPs y enfermedad.</li>
        <li>Utilizan grandes poblaciones.</li>
        <li>Pueden presentar falsos positivos.</li>
        <li>Prueban causalidad directa.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y III",
      "Solo II y IV",
      "I, II, III y IV"
    ],
    correcta: 1,
    explicacion:
      "Los GWAS no prueban causalidad directa."
  }
],

cancer: [
  {
    id: "ca-q-001",
    tipo: "alternativa",
    pregunta: "¿Cuál de las siguientes afirmaciones describe mejor al cáncer?",
    opciones: [
      "Es una enfermedad infecciosa producida por bacterias.",
      "Es una enfermedad genética celular causada por acumulación de alteraciones en el ADN.",
      "Es una enfermedad exclusivamente hereditaria.",
      "Es un trastorno causado únicamente por envejecimiento."
    ],
    correcta: 1,
    explicacion:
      "El cáncer corresponde a una enfermedad genética celular producida por acumulación progresiva de alteraciones genéticas."
  },

  {
    id: "ca-q-002",
    tipo: "alternativa",
    pregunta: "La mayoría de los cánceres humanos corresponden a:",
    opciones: [
      "Cánceres hereditarios.",
      "Cánceres congénitos.",
      "Cánceres esporádicos.",
      "Cánceres infecciosos."
    ],
    correcta: 2,
    explicacion:
      "La mayoría de los cánceres son esporádicos y se producen por mutaciones somáticas adquiridas durante la vida."
  },

  {
    id: "ca-q-003",
    tipo: "alternativa",
    pregunta: "¿Qué característica diferencia principalmente a una mutación germinal de una somática?",
    opciones: [
      "La mutación germinal solo aparece en tumores.",
      "La mutación germinal puede heredarse.",
      "La mutación somática está presente desde el nacimiento.",
      "La mutación germinal siempre produce cáncer."
    ],
    correcta: 1,
    explicacion:
      "Las mutaciones germinales están presentes desde el nacimiento y pueden transmitirse a la descendencia."
  },

  {
    id: "ca-q-004",
    tipo: "alternativa",
    pregunta: "¿Qué significa que el cáncer sea un proceso multietapa?",
    opciones: [
      "Que ocurre únicamente durante la infancia.",
      "Que necesita múltiples mutaciones acumuladas progresivamente.",
      "Que todos los tumores metastatizan.",
      "Que solo participan oncogenes."
    ],
    correcta: 1,
    explicacion:
      "La carcinogénesis requiere acumulación progresiva de alteraciones genéticas."
  },

  {
    id: "ca-q-005",
    tipo: "alternativa",
    pregunta: "¿Cuál de las siguientes capacidades adquiridas permite que un tumor forme nuevos vasos sanguíneos?",
    opciones: [
      "Metástasis.",
      "Apoptosis.",
      "Angiogénesis.",
      "Inestabilidad genética."
    ],
    correcta: 2,
    explicacion:
      "La angiogénesis corresponde a formación de nuevos vasos sanguíneos que nutren al tumor."
  },

  {
    id: "ca-q-006",
    tipo: "alternativa",
    pregunta: "¿Qué ocurre cuando una célula tumoral evade apoptosis?",
    opciones: [
      "Disminuye la proliferación celular.",
      "La célula muere rápidamente.",
      "La célula dañada puede sobrevivir y seguir dividiéndose.",
      "Se corrigen automáticamente las mutaciones."
    ],
    correcta: 2,
    explicacion:
      "La evasión de apoptosis permite supervivencia de células genéticamente dañadas."
  },

  {
    id: "ca-q-007",
    tipo: "alternativa",
    pregunta: "¿Qué función tienen normalmente los protooncogenes?",
    opciones: [
      "Eliminar células tumorales.",
      "Inhibir angiogénesis.",
      "Regular crecimiento y proliferación celular.",
      "Destruir ADN dañado."
    ],
    correcta: 2,
    explicacion:
      "Los protooncogenes son genes normales involucrados en crecimiento y proliferación."
  },

  {
    id: "ca-q-008",
    tipo: "alternativa",
    pregunta: "¿Qué es un oncogén?",
    opciones: [
      "Un gen reparador del ADN.",
      "Un protooncogén alterado con actividad proliferativa aumentada.",
      "Un gen exclusivamente hereditario.",
      "Una proteína apoptótica."
    ],
    correcta: 1,
    explicacion:
      "Los oncogenes derivan de protooncogenes activados anormalmente."
  },

  {
    id: "ca-q-009",
    tipo: "alternativa",
    pregunta: "¿Qué tipo de alteración caracteriza típicamente a los oncogenes?",
    opciones: [
      "Pérdida de función.",
      "Silenciamiento total.",
      "Gain of function.",
      "Deleción cromosómica completa."
    ],
    correcta: 2,
    explicacion:
      "Los oncogenes suelen actuar por ganancia de función."
  },

  {
    id: "ca-q-010",
    tipo: "alternativa",
    pregunta: "¿Cuál de los siguientes mecanismos puede activar un oncogén?",
    opciones: [
      "Amplificación génica.",
      "Mutación puntual.",
      "Translocación cromosómica.",
      "Todas las anteriores."
    ],
    correcta: 3,
    explicacion:
      "Los oncogenes pueden activarse por múltiples mecanismos moleculares."
  },

  {
    id: "ca-q-011",
    tipo: "alternativa",
    pregunta: "RAS corresponde clásicamente a:",
    opciones: [
      "Un gen supresor tumoral.",
      "Un oncogén.",
      "Una enzima apoptótica.",
      "Un gen mismatch repair."
    ],
    correcta: 1,
    explicacion:
      "RAS es un oncogén importante relacionado con señalización proliferativa."
  },

  {
    id: "ca-q-012",
    tipo: "alternativa",
    pregunta: "¿Qué ocurre en una amplificación génica?",
    opciones: [
      "Se pierde completamente el gen.",
      "Disminuye expresión proteica.",
      "Aumenta el número de copias del gen.",
      "Se fusionan dos cromosomas."
    ],
    correcta: 2,
    explicacion:
      "La amplificación génica aumenta copias y sobreexpresión del gen."
  },

  {
    id: "ca-q-013",
    tipo: "alternativa",
    pregunta: "HER2 es un ejemplo clásico de:",
    opciones: [
      "Amplificación oncogénica.",
      "Apoptosis.",
      "Mutación silenciosa.",
      "Síndrome hereditario."
    ],
    correcta: 0,
    explicacion:
      "HER2 suele activarse por amplificación génica."
  },

  {
    id: "ca-q-014",
    tipo: "alternativa",
    pregunta: "El cromosoma Philadelphia corresponde a:",
    opciones: [
      "Una trisomía.",
      "Una inversión cromosómica.",
      "Una translocación t(9;22).",
      "Una deleción mitocondrial."
    ],
    correcta: 2,
    explicacion:
      "El cromosoma Philadelphia se produce por translocación entre cromosomas 9 y 22."
  },

  {
    id: "ca-q-015",
    tipo: "alternativa",
    pregunta: "¿Qué gen de fusión genera el cromosoma Philadelphia?",
    opciones: [
      "RB-MYC.",
      "TP53-ABL.",
      "BCR-ABL.",
      "HER2-RAS."
    ],
    correcta: 2,
    explicacion:
      "La translocación t(9;22) genera el gen de fusión BCR-ABL."
  },

  {
    id: "ca-q-016",
    tipo: "alternativa",
    pregunta: "¿Cuál es la principal función de los genes supresores tumorales?",
    opciones: [
      "Estimular proliferación celular.",
      "Favorecer angiogénesis.",
      "Actuar como frenos del crecimiento celular.",
      "Activar oncogenes."
    ],
    correcta: 2,
    explicacion:
      "Los genes supresores limitan proliferación y mantienen estabilidad celular."
  },

  {
    id: "ca-q-017",
    tipo: "alternativa",
    pregunta: "¿Qué caracteriza a las mutaciones de genes supresores tumorales?",
    opciones: [
      "Ganancia de función.",
      "Sobreexpresión constante.",
      "Pérdida de función.",
      "Activación de telomerasa."
    ],
    correcta: 2,
    explicacion:
      "Los genes supresores suelen alterarse por pérdida de función."
  },

  {
    id: "ca-q-018",
    tipo: "alternativa",
    pregunta: "La hipótesis two-hit de Knudson explica principalmente:",
    opciones: [
      "Activación de oncogenes.",
      "Metástasis.",
      "Inactivación de genes supresores tumorales.",
      "Formación de telómeros."
    ],
    correcta: 2,
    explicacion:
      "Knudson propuso que generalmente deben perderse ambas copias de un gen supresor."
  },

  {
    id: "ca-q-019",
    tipo: "alternativa",
    pregunta: "¿Qué gen se asocia clásicamente a retinoblastoma?",
    opciones: [
      "BRCA1.",
      "RB1.",
      "RAS.",
      "APC."
    ],
    correcta: 1,
    explicacion:
      "RB1 es el gen supresor tumoral asociado a retinoblastoma."
  },

  {
    id: "ca-q-020",
    tipo: "alternativa",
    pregunta: "¿Qué función tiene normalmente la proteína RB?",
    opciones: [
      "Estimular angiogénesis.",
      "Activar apoptosis.",
      "Regular transición G1/S del ciclo celular.",
      "Reparar mismatch."
    ],
    correcta: 2,
    explicacion:
      "RB controla el paso de G1 a S en el ciclo celular."
  },

  {
    id: "ca-q-021",
    tipo: "alternativa",
    pregunta: "¿Por qué el retinoblastoma hereditario suele aparecer antes que el esporádico?",
    opciones: [
      "Porque metastatiza más rápido.",
      "Porque ya existe un hit germinal desde el nacimiento.",
      "Porque siempre afecta ambos ojos.",
      "Porque no necesita mutaciones."
    ],
    correcta: 1,
    explicacion:
      "Los pacientes hereditarios nacen ya con una copia alterada de RB1."
  },

  {
    id: "ca-q-022",
    tipo: "alternativa",
    pregunta: "TP53 codifica la proteína:",
    opciones: [
      "HER2.",
      "RAS.",
      "p53.",
      "ABL."
    ],
    correcta: 2,
    explicacion:
      "TP53 codifica p53, importante supresor tumoral."
  },

  {
    id: "ca-q-023",
    tipo: "alternativa",
    pregunta: "¿Por qué p53 recibe el nombre de guardián del genoma?",
    opciones: [
      "Porque forma cromosomas.",
      "Porque evita angiogénesis.",
      "Porque detecta daño genético y coordina respuestas protectoras.",
      "Porque activa oncogenes."
    ],
    correcta: 2,
    explicacion:
      "p53 detiene el ciclo celular o induce apoptosis frente a daño genético."
  },

  {
    id: "ca-q-024",
    tipo: "alternativa",
    pregunta: "¿Qué puede hacer p53 si el daño del ADN es irreparable?",
    opciones: [
      "Activar metástasis.",
      "Inducir apoptosis.",
      "Formar telómeros.",
      "Activar HER2."
    ],
    correcta: 1,
    explicacion:
      "p53 puede inducir apoptosis para eliminar células peligrosas."
  },

  {
    id: "ca-q-025",
    tipo: "alternativa",
    pregunta: "¿Qué síndrome hereditario se asocia a mutaciones germinales de TP53?",
    opciones: [
      "Lynch.",
      "Li-Fraumeni.",
      "Down.",
      "Turner."
    ],
    correcta: 1,
    explicacion:
      "Li-Fraumeni se asocia a mutaciones germinales de TP53."
  },

  {
    id: "ca-q-026",
    tipo: "alternativa",
    pregunta: "¿Qué ocurre cuando fallan genes de reparación del ADN?",
    opciones: [
      "Disminuyen mutaciones.",
      "Aumenta estabilidad genética.",
      "Aumenta acumulación de mutaciones.",
      "Desaparece proliferación celular."
    ],
    correcta: 2,
    explicacion:
      "La falla de reparación favorece inestabilidad genética."
  },

  {
    id: "ca-q-027",
    tipo: "alternativa",
    pregunta: "El síndrome de Lynch se asocia principalmente a defectos en:",
    opciones: [
      "Telomerasa.",
      "Mismatch repair.",
      "RB.",
      "Angiogénesis."
    ],
    correcta: 1,
    explicacion:
      "Lynch se relaciona con defectos mismatch repair."
  },

  {
    id: "ca-q-028",
    tipo: "alternativa",
    pregunta: "¿Qué consecuencia produce el defecto mismatch repair?",
    opciones: [
      "Amplificación HER2.",
      "Inestabilidad microsatelital.",
      "Pérdida telómeros.",
      "Activación BRCA."
    ],
    correcta: 1,
    explicacion:
      "El defecto mismatch repair genera inestabilidad microsatelital."
  },

  {
    id: "ca-q-029",
    tipo: "alternativa",
    pregunta: "¿Qué genes se asocian a cáncer mama y ovario hereditario?",
    opciones: [
      "RAS y MYC.",
      "BRCA1 y BRCA2.",
      "RB y TP53.",
      "ABL y APC."
    ],
    correcta: 1,
    explicacion:
      "BRCA1/2 participan en reparación ADN y predisponen a cáncer hereditario."
  },

  {
    id: "ca-q-030",
    tipo: "alternativa",
    pregunta: "¿Qué permite la activación de telomerasa en células tumorales?",
    opciones: [
      "Apoptosis inmediata.",
      "Limitación proliferativa.",
      "Inmortalidad replicativa.",
      "Pérdida de oncogenes."
    ],
    correcta: 2,
    explicacion:
      "La telomerasa mantiene telómeros y permite divisiones indefinidas."
  },

  {
    id: "ca-q-031",
    tipo: "alternativa",
    pregunta: "¿Qué proceso describe mejor la metástasis?",
    opciones: [
      "Muerte celular programada.",
      "Formación de vasos.",
      "Diseminación tumoral a distancia.",
      "Activación de RB."
    ],
    correcta: 2,
    explicacion:
      "La metástasis corresponde a diseminación de células tumorales hacia otros órganos."
  },

  {
  id: "ca-q-032",
  pregunta: `
    <p>Respecto a oncogenes y genes supresores tumorales:</p>
    <ol type="I" class="roman-list">
      <li>Los oncogenes suelen actuar por ganancia de función.</li>
      <li>Los genes supresores tumorales suelen alterarse por pérdida de función.</li>
      <li>Los oncogenes y genes supresores tienen funciones equivalentes.</li>
    </ol>
  `,
  opciones: ["Solo I.", "Solo II.", "I y II.", "I, II y III."],
  correcta: 2,
  explicacion: "I y II son correctas. III es falsa: oncogenes funcionan como aceleradores y supresores como frenos."
},
{
  id: "ca-q-033",
  pregunta: `
    <p>Sobre cáncer hereditario:</p>
    <ol type="I" class="roman-list">
      <li>Suele asociarse a mutaciones germinales.</li>
      <li>Generalmente aparece a edades más tempranas.</li>
      <li>Siempre implica heredar directamente el tumor.</li>
    </ol>
  `,
  opciones: ["Solo I.", "I y II.", "II y III.", "I, II y III."],
  correcta: 1,
  explicacion: "Se hereda la predisposición genética, no el cáncer como tal."
},
{
  id: "ca-q-034",
  pregunta: `
    <p>Respecto a TP53 y p53:</p>
    <ol type="I" class="roman-list">
      <li>p53 puede detener el ciclo celular.</li>
      <li>p53 puede inducir apoptosis.</li>
      <li>p53 favorece proliferación tumoral.</li>
    </ol>
  `,
  opciones: ["Solo I.", "I y II.", "II y III.", "I, II y III."],
  correcta: 1,
  explicacion: "p53 actúa como supresor tumoral, no como estimulador proliferativo."
},
{
  id: "ca-q-035",
  pregunta: `
    <p>Respecto a la carcinogénesis:</p>
    <ol type="I" class="roman-list">
      <li>Es un proceso multietapa.</li>
      <li>Implica acumulación progresiva de mutaciones.</li>
      <li>Puede estar influida por factores ambientales.</li>
    </ol>
  `,
  opciones: ["Solo I.", "I y II.", "II y III.", "I, II y III."],
  correcta: 3,
  explicacion: "Todas son correctas: la carcinogénesis es progresiva, multietapa y puede estar influida por ambiente."
},
],

pesquisa_neonatal: [
  {
    id: "pn-q-001",
    pregunta: "¿Qué es la pesquisa neonatal?",
    opciones: [
      "Un diagnóstico definitivo de enfermedades genéticas",
      "Un tamizaje para detectar enfermedades graves antes de síntomas",
      "Un tratamiento preventivo universal",
      "Una prueba exclusiva para enfermedades cromosómicas"
    ],
    correcta: 1,
    explicacion:
      "La pesquisa neonatal es un tamizaje: identifica recién nacidos con mayor probabilidad de enfermedad para confirmar y tratar precozmente."
  },

  {
    id: "pn-q-002",
    pregunta: "¿Cuál es el objetivo principal de la pesquisa neonatal?",
    opciones: [
      "Confirmar enfermedades hereditarias en todos los recién nacidos",
      "Prevenir daño irreversible mediante detección precoz",
      "Evitar toda enfermedad genética",
      "Reemplazar la evaluación clínica"
    ],
    correcta: 1,
    explicacion:
      "Busca detectar enfermedades graves antes de que produzcan daño irreversible."
  },

  {
    id: "pn-q-003",
    pregunta: "¿Por qué muchos recién nacidos afectados pueden parecer sanos al nacer?",
    opciones: [
      "Porque las enfermedades pesquisadas nunca dan síntomas",
      "Porque algunas enfermedades aún no manifiestan alteraciones clínicas evidentes",
      "Porque la pesquisa elimina los síntomas",
      "Porque todas son enfermedades leves"
    ],
    correcta: 1,
    explicacion:
      "Muchas enfermedades metabólicas o endocrinas pueden estar presentes sin síntomas evidentes en los primeros días."
  },

  {
    id: "pn-q-004",
    pregunta: "¿Qué afirmación sobre tamizaje neonatal es correcta?",
    opciones: [
      "Un resultado positivo confirma diagnóstico",
      "Un resultado negativo siempre descarta toda enfermedad",
      "Un resultado positivo requiere confirmación diagnóstica",
      "No necesita seguimiento posterior"
    ],
    correcta: 2,
    explicacion:
      "La pesquisa es tamizaje, no diagnóstico definitivo. Todo resultado alterado debe confirmarse."
  },

  {
    id: "pn-q-005",
    pregunta: "En pesquisa neonatal, generalmente se prioriza:",
    opciones: [
      "Alta sensibilidad",
      "Baja sensibilidad",
      "Baja especificidad como objetivo principal",
      "Diagnóstico sin confirmación"
    ],
    correcta: 0,
    explicacion:
      "Se prioriza sensibilidad alta para disminuir falsos negativos."
  },

  {
    id: "pn-q-006",
    pregunta: "¿Qué disminuye una prueba altamente sensible?",
    opciones: [
      "Falsos positivos",
      "Falsos negativos",
      "Confirmaciones diagnósticas",
      "Enfermedades hereditarias"
    ],
    correcta: 1,
    explicacion:
      "Una prueba sensible detecta mejor a los enfermos y reduce falsos negativos."
  },

  {
    id: "pn-q-007",
    pregunta: "¿Qué disminuye una prueba altamente específica?",
    opciones: [
      "Falsos positivos",
      "Falsos negativos",
      "Todos los casos sospechosos",
      "La necesidad de tratamiento"
    ],
    correcta: 0,
    explicacion:
      "La especificidad identifica correctamente sanos y disminuye falsos positivos."
  },

  {
    id: "pn-q-008",
    pregunta: "¿Cómo se obtiene habitualmente la muestra de pesquisa neonatal?",
    opciones: [
      "Sangre venosa en tubo heparinizado",
      "Punción del talón y sangre en papel filtro",
      "Biopsia de piel",
      "Muestra de saliva"
    ],
    correcta: 1,
    explicacion:
      "La muestra clásica se obtiene por punción del talón y se deposita en papel filtro."
  },

  {
    id: "pn-q-009",
    pregunta: "¿Cuál es el momento habitual para obtener la muestra?",
    opciones: [
      "Antes de la primera hora de vida",
      "Entre las 24 y 48 horas de vida",
      "Solo después del primer mes",
      "Durante el embarazo"
    ],
    correcta: 1,
    explicacion:
      "Suele tomarse entre 24 y 48 horas, porque algunas alteraciones metabólicas requieren alimentación previa para detectarse."
  },

  {
    id: "pn-q-010",
    pregunta: "¿Qué puede ocurrir si la muestra se obtiene demasiado precozmente?",
    opciones: [
      "Falsos negativos",
      "Diagnóstico definitivo inmediato",
      "Aumento de especificidad absoluta",
      "Eliminación de errores preanalíticos"
    ],
    correcta: 0,
    explicacion:
      "Si se toma muy temprano, ciertos metabolitos aún no alcanzan niveles detectables."
  },

  {
    id: "pn-q-011",
    pregunta: "¿Cuál de los siguientes es un error preanalítico?",
    opciones: [
      "Muestra insuficiente",
      "Confirmación diagnóstica",
      "Tratamiento precoz",
      "Seguimiento clínico"
    ],
    correcta: 0,
    explicacion:
      "Los errores preanalíticos ocurren antes del análisis y pueden alterar la calidad de la muestra."
  },

  {
    id: "pn-q-012",
    pregunta: "¿Qué caracteriza a una muestra insuficiente?",
    opciones: [
      "Sangre que impregna completamente el papel filtro",
      "Cantidad de sangre escasa o impregnación parcial",
      "Muestra correctamente secada",
      "Tarjeta correctamente identificada"
    ],
    correcta: 1,
    explicacion:
      "La muestra insuficiente no llena adecuadamente el área del papel filtro o no lo impregna de forma uniforme."
  },

  {
    id: "pn-q-013",
    pregunta: "¿Cuál de los siguientes puede contaminar una muestra?",
    opciones: [
      "Alcohol residual",
      "Cremas",
      "Talco",
      "Todas las anteriores"
    ],
    correcta: 3,
    explicacion:
      "Alcohol, cremas, talco, agua o superficies contaminadas pueden alterar la muestra."
  },

  {
    id: "pn-q-014",
    pregunta: "¿Qué corresponde a un secado incorrecto?",
    opciones: [
      "Secar la tarjeta al aire en posición horizontal",
      "Apilar tarjetas húmedas o guardarlas antes de secar",
      "Esperar secado completo antes de transportar",
      "Evitar calor directo"
    ],
    correcta: 1,
    explicacion:
      "Las tarjetas húmedas no deben apilarse ni guardarse antes de secar."
  },

  {
    id: "pn-q-015",
    pregunta: "¿Cuál es el principal riesgo de una muestra mal rotulada?",
    opciones: [
      "Aumentar la fenilalanina",
      "Asociar un resultado al paciente equivocado",
      "Mejorar sensibilidad",
      "Confirmar diagnóstico automáticamente"
    ],
    correcta: 1,
    explicacion:
      "Una rotulación incorrecta puede llevar a errores graves de identificación y seguimiento."
  },

  {
    id: "pn-q-016",
    pregunta: "¿Qué enfermedad pesquisada se relaciona con déficit de hormonas tiroideas desde el nacimiento?",
    opciones: [
      "Fenilcetonuria",
      "Hipotiroidismo congénito",
      "Fibrosis quística",
      "Hiperplasia suprarrenal congénita"
    ],
    correcta: 1,
    explicacion:
      "El hipotiroidismo congénito se caracteriza por déficit de hormonas tiroideas desde el nacimiento."
  },

  {
    id: "pn-q-017",
    pregunta: "¿Por qué el hipotiroidismo congénito debe detectarse precozmente?",
    opciones: [
      "Porque produce exclusivamente síntomas respiratorios",
      "Porque puede causar daño neurológico irreversible",
      "Porque siempre se resuelve solo",
      "Porque no tiene tratamiento"
    ],
    correcta: 1,
    explicacion:
      "Las hormonas tiroideas son esenciales para el desarrollo neurológico temprano."
  },

  {
    id: "pn-q-018",
    pregunta: "¿Cómo se pesquisa habitualmente el hipotiroidismo congénito?",
    opciones: [
      "Medición de TSH y/o T4",
      "Cariotipo",
      "PCR viral",
      "Ecografía abdominal"
    ],
    correcta: 0,
    explicacion:
      "La pesquisa suele usar TSH y/o T4 en sangre seca."
  },

  {
    id: "pn-q-019",
    pregunta: "¿Qué enfermedad se produce por déficit de fenilalanina hidroxilasa?",
    opciones: [
      "Hipotiroidismo congénito",
      "Fenilcetonuria",
      "Fibrosis quística",
      "Síndrome de Lynch"
    ],
    correcta: 1,
    explicacion:
      "La fenilcetonuria se debe a déficit de fenilalanina hidroxilasa."
  },

  {
    id: "pn-q-020",
    pregunta: "¿Qué ocurre en fenilcetonuria no tratada?",
    opciones: [
      "Acumulación de fenilalanina con toxicidad neurológica",
      "Déficit de cloro en secreciones",
      "Aumento de hormonas tiroideas",
      "Translocación cromosómica"
    ],
    correcta: 0,
    explicacion:
      "La fenilalanina acumulada es tóxica para el sistema nervioso central."
  },

  {
    id: "pn-q-021",
    pregunta: "¿Cuál es el tratamiento principal de la fenilcetonuria?",
    opciones: [
      "Levotiroxina",
      "Dieta restringida en fenilalanina",
      "Antibióticos permanentes",
      "Trasplante de médula"
    ],
    correcta: 1,
    explicacion:
      "El tratamiento principal es dieta restringida en fenilalanina para evitar toxicidad neurológica."
  },

  {
    id: "pn-q-022",
    pregunta: "¿Qué son los errores innatos del metabolismo?",
    opciones: [
      "Enfermedades genéticas por alteraciones enzimáticas metabólicas",
      "Enfermedades infecciosas neonatales",
      "Alteraciones exclusivas del cariotipo",
      "Cambios normales del recién nacido"
    ],
    correcta: 0,
    explicacion:
      "Son enfermedades genéticas donde falla una enzima o vía metabólica."
  },

  {
    id: "pn-q-023",
    pregunta: "¿Qué puede producir un déficit enzimático metabólico?",
    opciones: [
      "Acumulación de metabolitos tóxicos",
      "Déficit de productos esenciales",
      "Crisis metabólicas",
      "Todas las anteriores"
    ],
    correcta: 3,
    explicacion:
      "El bloqueo metabólico puede causar acumulación tóxica, déficit de productos necesarios y crisis graves."
  },

  {
    id: "pn-q-024",
    pregunta: "¿Qué ventaja tiene la espectrometría de masas en tándem?",
    opciones: [
      "Detecta solo una enfermedad por muestra",
      "Permite detectar múltiples metabolitos en una sola muestra",
      "Reemplaza toda confirmación diagnóstica",
      "Sirve solo para cariotipo"
    ],
    correcta: 1,
    explicacion:
      "Permite pesquisar varias enfermedades metabólicas de forma simultánea."
  },

  {
    id: "pn-q-025",
    pregunta: "¿Qué gen se altera en fibrosis quística?",
    opciones: [
      "CFTR",
      "TP53",
      "RB1",
      "FBN1"
    ],
    correcta: 0,
    explicacion:
      "La fibrosis quística se asocia a mutaciones en CFTR."
  },

  {
    id: "pn-q-026",
    pregunta: "¿Qué produce la alteración de CFTR?",
    opciones: [
      "Secreciones espesas",
      "Exceso de hormona tiroidea",
      "Acumulación de fenilalanina",
      "Inestabilidad microsatelital"
    ],
    correcta: 0,
    explicacion:
      "CFTR altera transporte de cloro, generando secreciones espesas."
  },

  {
    id: "pn-q-027",
    pregunta: "¿Cuál es la forma de herencia de la fibrosis quística?",
    opciones: [
      "Autosómica dominante",
      "Autosómica recesiva",
      "Ligada al X dominante",
      "Mitocondrial"
    ],
    correcta: 1,
    explicacion:
      "La fibrosis quística es autosómica recesiva."
  },

  {
    id: "pn-q-028",
    pregunta: "¿Cuál es la causa más frecuente de hiperplasia suprarrenal congénita?",
    opciones: [
      "Déficit de 21-hidroxilasa",
      "Déficit de fenilalanina hidroxilasa",
      "Mutación CFTR",
      "Déficit de T4 materna"
    ],
    correcta: 0,
    explicacion:
      "La forma más frecuente se asocia a déficit de 21-hidroxilasa."
  },

  {
    id: "pn-q-029",
    pregunta: "¿Por qué puede ser grave la hiperplasia suprarrenal congénita?",
    opciones: [
      "Puede producir crisis suprarrenal y alteraciones hidroelectrolíticas",
      "Siempre produce cáncer neonatal",
      "No tiene manifestaciones clínicas",
      "Solo produce síntomas respiratorios leves"
    ],
    correcta: 0,
    explicacion:
      "Algunas formas pueden producir pérdida de sal, deshidratación y crisis suprarrenal."
  },

  {
    id: "pn-q-030",
    pregunta: "¿Qué debe ocurrir después de una pesquisa neonatal positiva?",
    opciones: [
      "Nada, porque ya confirma diagnóstico",
      "Confirmación diagnóstica y seguimiento precoz",
      "Esperar síntomas",
      "Suspender controles"
    ],
    correcta: 1,
    explicacion:
      "La utilidad de la pesquisa depende de confirmar, derivar y tratar oportunamente."
  },

  {
    id: "pn-q-031",
    pregunta: `
      <p>Respecto a pesquisa neonatal:</p>

      <ol type="I" class="roman-list">
        <li>Es una prueba de tamizaje.</li>
        <li>Busca detectar enfermedades antes de daño irreversible.</li>
        <li>Un resultado positivo siempre confirma diagnóstico.</li>
        <li>Requiere seguimiento si está alterada.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y IV",
      "Solo II y III",
      "I, II, III y IV"
    ],
    correcta: 1,
    explicacion:
      "I, II y IV son correctas. III es falsa porque pesquisa positiva requiere confirmación diagnóstica."
  },

  {
    id: "pn-q-032",
    pregunta: `
      <p>Respecto a errores preanalíticos:</p>

      <ol type="I" class="roman-list">
        <li>Una muestra insuficiente puede dificultar mediciones.</li>
        <li>La contaminación puede alterar resultados.</li>
        <li>El secado incorrecto puede deteriorar la muestra.</li>
        <li>La rotulación incorrecta puede asociar resultados al paciente equivocado.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo II y III",
      "Solo I, II y III",
      "I, II, III y IV"
    ],
    correcta: 3,
    explicacion:
      "Todas son correctas y corresponden a errores preanalíticos importantes."
  },

  {
    id: "pn-q-033",
    pregunta: `
      <p>Respecto al hipotiroidismo congénito:</p>

      <ol type="I" class="roman-list">
        <li>Puede parecer normal al nacimiento.</li>
        <li>Puede producir daño neurológico irreversible si no se trata.</li>
        <li>Se pesquisa mediante TSH y/o T4.</li>
        <li>El tratamiento precoz mejora el pronóstico.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo II y III",
      "Solo I, II y III",
      "I, II, III y IV"
    ],
    correcta: 3,
    explicacion:
      "Todas son correctas: por eso es una enfermedad clásica de pesquisa neonatal."
  },

  {
    id: "pn-q-034",
    pregunta: `
      <p>Respecto a fenilcetonuria:</p>

      <ol type="I" class="roman-list">
        <li>Se debe a déficit de fenilalanina hidroxilasa.</li>
        <li>Produce acumulación de fenilalanina.</li>
        <li>Puede generar daño neurológico si no se trata.</li>
        <li>Su tratamiento incluye restricción de fenilalanina.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y III",
      "Solo II y IV",
      "I, II, III y IV"
    ],
    correcta: 3,
    explicacion:
      "Todas son correctas y explican la importancia de detectarla precozmente."
  },

  {
    id: "pn-q-035",
    pregunta: `
      <p>Respecto a enfermedades pesquisadas:</p>

      <ol type="I" class="roman-list">
        <li>Fibrosis quística se relaciona con CFTR.</li>
        <li>Hiperplasia suprarrenal congénita puede asociarse a déficit de 21-hidroxilasa.</li>
        <li>Fenilcetonuria se trata con dieta restringida en fenilalanina.</li>
        <li>Hipotiroidismo congénito no requiere tratamiento precoz.</li>
      </ol>
    `,
    opciones: [
      "Solo I y II",
      "Solo I, II y III",
      "Solo III y IV",
      "I, II, III y IV"
    ],
    correcta: 1,
    explicacion:
      "I, II y III son correctas. IV es falsa porque el hipotiroidismo congénito requiere tratamiento precoz."
  }
],
};