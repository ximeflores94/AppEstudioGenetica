const EJERCICIOS = {citogenetica: [
  {
    id: "ej-cito-001",
    titulo: "Interpretación básica de cariotipo",
    tipo: "Interpretación",
    dificultad: "Fácil",
    enunciado:
      "Un informe citogenético muestra: 47,XX,+21. Interprete el resultado, indique sexo cromosómico, alteración presente y síndrome asociado.",
    solucion:
      "El cariotipo 47,XX,+21 corresponde a una mujer con 47 cromosomas por presencia de un cromosoma 21 extra. Es una aneuploidía autosómica compatible con síndrome de Down."
  },

  {
    id: "ej-cito-002",
    titulo: "Cariotipo masculino normal",
    tipo: "Conceptual",
    dificultad: "Fácil",
    enunciado:
      "Explique qué significa un cariotipo 46,XY y por qué se considera normal.",
    solucion:
      "46,XY indica un individuo con 46 cromosomas totales, incluyendo un cromosoma X y un cromosoma Y. Corresponde a un cariotipo masculino cromosómicamente normal."
  },

  {
    id: "ej-cito-003",
    titulo: "Indicación de estudio citogenético",
    tipo: "Caso clínico",
    dificultad: "Fácil",
    enunciado:
      "Un recién nacido presenta dismorfias faciales, cardiopatía congénita y retraso del crecimiento. ¿Está indicado solicitar un estudio citogenético? Justifique.",
    solucion:
      "Sí. Las malformaciones congénitas múltiples, dismorfias y retraso del crecimiento son indicaciones clásicas para estudio citogenético, ya que pueden sugerir una alteración cromosómica numérica o estructural."
  },

  {
    id: "ej-cito-004",
    titulo: "Bandeo G versus FISH",
    tipo: "Comparación",
    dificultad: "Media",
    enunciado:
      "Compare bandeo G y FISH considerando resolución, utilidad diagnóstica y tipo de alteraciones que pueden detectar.",
    solucion:
      "El bandeo G permite observar el patrón global de bandas cromosómicas y detectar alteraciones numéricas o estructurales grandes. FISH usa sondas fluorescentes específicas, tiene mayor resolución y permite detectar alteraciones dirigidas como microdeleciones o aneuploidías específicas. Sin embargo, FISH requiere sospecha previa o una región blanco."
  },

  {
    id: "ej-cito-005",
    titulo: "Microdeleción no visible en cariotipo",
    tipo: "Caso clínico",
    dificultad: "Media",
    enunciado:
      "Un niño presenta cardiopatía congénita, hipocalcemia e inmunodeficiencia. El cariotipo convencional es normal. Se sospecha síndrome de DiGeorge. ¿Qué técnica solicitaría y por qué?",
    solucion:
      "Solicitaría FISH con sonda específica para 22q11.2 o una técnica de mayor resolución como array-CGH. El síndrome de DiGeorge suele deberse a una microdeleción 22q11.2 que puede no observarse en cariotipo convencional."
  },

  {
    id: "ej-cito-006",
    titulo: "Mosaicismo cromosómico",
    tipo: "Interpretación",
    dificultad: "Media",
    enunciado:
      "Un estudio informa dos líneas celulares: 46,XX / 47,XX,+21. Explique qué significa y cómo pudo originarse.",
    solucion:
      "Corresponde a mosaicismo: existen dos líneas celulares diferentes en el mismo individuo, una normal femenina 46,XX y otra con trisomía 21. Puede originarse por no disyunción mitótica postcigótica o por pérdida de un cromosoma en una célula trisómica durante divisiones tempranas."
  },

  {
    id: "ej-cito-007",
    titulo: "Translocación balanceada y abortos recurrentes",
    tipo: "Caso clínico",
    dificultad: "Media",
    enunciado:
      "Una pareja consulta por tres abortos espontáneos. El estudio de uno de los miembros muestra una translocación recíproca balanceada. Explique por qué una persona sana puede tener riesgo reproductivo aumentado.",
    solucion:
      "Una translocación balanceada no implica pérdida ni ganancia neta de material genético, por lo que el portador puede ser fenotípicamente normal. Sin embargo, durante la meiosis puede formar gametos desequilibrados con duplicaciones o deleciones parciales, aumentando el riesgo de abortos o descendencia con anomalías."
  },

  {
    id: "ej-cito-008",
    titulo: "Síndrome de Down y consejo genético",
    tipo: "Razonamiento clínico",
    dificultad: "Difícil",
    enunciado:
      "Un niño es diagnosticado con síndrome de Down. Explique por qué no basta con decir “trisomía 21” y qué información citogenética es necesaria para el consejo genético familiar.",
    solucion:
      "Es necesario determinar el mecanismo: trisomía libre, translocación robertsoniana o mosaicismo. La trisomía libre suele asociarse a no disyunción y el riesgo de recurrencia depende principalmente de edad materna. Si hay translocación robertsoniana, uno de los padres podría ser portador balanceado, aumentando el riesgo de recurrencia. El mosaicismo puede modificar expresión clínica y pronóstico."
  },

  {
    id: "ej-cito-009",
    titulo: "Prader-Willi versus Angelman",
    tipo: "Comparación",
    dificultad: "Difícil",
    enunciado:
      "Explique cómo una alteración en la misma región cromosómica 15q11-q13 puede producir dos síndromes distintos: Prader-Willi y Angelman.",
    solucion:
      "La diferencia se explica por impronta genómica. En la región 15q11-q13 algunos genes se expresan según su origen parental. Prader-Willi ocurre por pérdida de expresión de genes paternos; Angelman por pérdida de expresión materna, especialmente UBE3A en neuronas. Por eso una alteración en la misma región puede generar fenotipos distintos según si se afecta la copia materna o paterna."
  },

  {
    id: "ej-cito-010",
    titulo: "Clasificación de anomalías cromosómicas",
    tipo: "Clasificación",
    dificultad: "Media",
    enunciado:
      "Clasifique las siguientes alteraciones como numéricas o estructurales, y como balanceadas o desbalanceadas cuando corresponda: trisomía 18, inversión paracéntrica, deleción 5p, translocación recíproca balanceada.",
    solucion:
      "Trisomía 18: anomalía numérica, aneuploidía autosómica desbalanceada. Inversión paracéntrica: anomalía estructural generalmente balanceada, no incluye centrómero. Deleción 5p: anomalía estructural desbalanceada por pérdida de material. Translocación recíproca balanceada: anomalía estructural balanceada sin pérdida ni ganancia neta."
  },

  {
    id: "ej-cito-011",
    titulo: "Error en meiosis versus mitosis",
    tipo: "Razonamiento",
    dificultad: "Difícil",
    enunciado:
      "Compare el resultado esperado de una no disyunción meiótica versus una no disyunción mitótica postcigótica. ¿Cuál se relaciona más con mosaicismo?",
    solucion:
      "La no disyunción meiótica ocurre durante la formación de gametos y puede generar un cigoto con aneuploidía en todas sus células, como una trisomía completa. La no disyunción mitótica ocurre después de la fecundación, durante divisiones embrionarias, y genera dos o más líneas celulares diferentes, por lo que se relaciona directamente con mosaicismo."
  },

  {
    id: "ej-cito-012",
    titulo: "Caso integrador de citogenética",
    tipo: "Integrador",
    dificultad: "Difícil",
    enunciado:
      "Una mujer de 38 años cursa embarazo de 12 semanas. La ecografía muestra translucencia nucal aumentada. No hay antecedentes familiares conocidos. Proponga una estrategia de estudio genético inicial y explique qué alteraciones buscaría descartar.",
    solucion:
      "La edad materna avanzada y la translucencia nucal aumentada son indicaciones de evaluación prenatal. Se podría iniciar con pruebas de screening prenatal y, si corresponde, confirmar con estudio diagnóstico invasivo como biopsia corial o amniocentesis para cariotipo, FISH rápida dirigida o técnicas de mayor resolución según sospecha. Se buscaría descartar aneuploidías frecuentes como trisomía 21, 18, 13 y alteraciones de cromosomas sexuales."
  }
],

tecnicas_mol: [
  {
    id: "tm-ej-001",

    titulo: "Elección de técnica diagnóstica",

    tipo: "Caso clínico",

    dificultad: "Fácil",

    enunciado:
      "Un paciente presenta sospecha clínica de fibrosis quística y se conoce exactamente la mutación familiar en CFTR. ¿Qué técnica molecular sería adecuada para confirmarla y por qué?",

    solucion:
      "Una PCR dirigida seguida de secuenciación específica o PCR-RFLP sería adecuada porque ya se conoce la mutación puntual a estudiar. No sería necesario un estudio más amplio como NGS."
  },

  {
    id: "tm-ej-002",

    titulo: "Interpretación de PCR",

    tipo: "Conceptual",

    dificultad: "Fácil",

    enunciado:
      "Explique qué función cumplen los primers en PCR y qué ocurriría si no se agregaran a la reacción.",

    solucion:
      "Los primers delimitan la región específica que será amplificada y aportan el extremo 3’OH necesario para que la ADN polimerasa inicie síntesis. Sin primers no habría amplificación específica."
  },

  {
    id: "tm-ej-003",

    titulo: "Selección entre Southern, Northern y Western",

    tipo: "Comparación",

    dificultad: "Media",

    enunciado:
      "Se desea estudiar si un gen está siendo transcripto normalmente en tejido hepático. ¿Qué técnica elegiría y por qué no serían adecuadas las otras dos variantes de blot?",

    solucion:
      "Northern blot sería la técnica adecuada porque permite estudiar ARN mensajero y evaluar transcripción génica. Southern analiza ADN y Western proteínas, por lo que no responden directamente si el gen se transcribe."
  },

  {
    id: "tm-ej-004",

    titulo: "Microdeleción",

    tipo: "Caso clínico",

    dificultad: "Media",

    enunciado:
      "Un niño presenta cardiopatía congénita, hipocalcemia e inmunodeficiencia. Se sospecha síndrome de DiGeorge. El cariotipo convencional es normal. ¿Qué técnica molecular/citogenética solicitaría y por qué?",

    solucion:
      "Solicitaría FISH dirigida a 22q11.2 o array-CGH. El síndrome de DiGeorge suele deberse a una microdeleción no visible en cariotipo convencional."
  },

  {
    id: "tm-ej-005",

    titulo: "qPCR",

    tipo: "Aplicación",

    dificultad: "Media",

    enunciado:
      "Explique por qué qPCR es útil para cuantificar carga viral o expresión génica.",

    solucion:
      "La qPCR permite cuantificar ADN o ADNc en tiempo real mediante fluorescencia, correlacionando la señal con la cantidad inicial de material genético."
  },

  {
    id: "tm-ej-006",

    titulo: "Sanger vs NGS",

    tipo: "Comparación",

    dificultad: "Difícil",

    enunciado:
      "Compare secuenciación Sanger y NGS considerando velocidad, costo, volumen de información y utilidad clínica.",

    solucion:
      "Sanger tiene alta precisión y es útil cuando se conoce el gen o región a estudiar, pero secuencia pocas regiones a la vez. NGS permite secuenciar millones de fragmentos simultáneamente, analizar paneles, exomas o genomas completos, con mucho mayor rendimiento y utilidad en enfermedades genéticamente heterogéneas."
  },

  {
    id: "tm-ej-007",

    titulo: "Interpretación de FISH",

    tipo: "Interpretación",

    dificultad: "Difícil",

    enunciado:
      "En un estudio FISH para 22q11.2 se observa una señal fluorescente en un cromosoma 22 y ausencia de señal en el otro. Interprete el resultado.",

    solucion:
      "El resultado sugiere deleción heterocigota de la región 22q11.2 en uno de los cromosomas homólogos."
  },

  {
    id: "tm-ej-008",

    titulo: "PCR-RFLP",

    tipo: "Razonamiento",

    dificultad: "Difícil",

    enunciado:
      "Explique cómo una mutación puntual podría detectarse mediante PCR-RFLP.",

    solucion:
      "Si la mutación crea o elimina un sitio de restricción, la enzima cortará de manera diferente el ADN amplificado. Esto genera fragmentos de distinto tamaño observables en electroforesis."
  },

  {
    id: "tm-ej-009",

    titulo: "CGH",

    tipo: "Aplicación clínica",

    dificultad: "Difícil",

    enunciado:
      "¿Por qué CGH puede detectar ganancias y pérdidas cromosómicas pero no translocaciones balanceadas?",

    solucion:
      "CGH compara cantidad relativa de ADN entre muestra problema y control. Las translocaciones balanceadas no modifican cantidad total de material genético, por lo que no generan diferencias detectables."
  },

  {
    id: "tm-ej-010",

    titulo: "Caso integrador",

    tipo: "Integrador",

    dificultad: "Difícil",

    enunciado:
      "Una enfermedad presenta gran heterogeneidad genética: más de 100 genes distintos pueden producir el mismo fenotipo clínico. ¿Qué estrategia molecular sería más eficiente y por qué?",

    solucion:
      "La estrategia más eficiente sería NGS mediante panel multigénico o exoma completo, ya que permite estudiar simultáneamente muchos genes relacionados con el fenotipo."
  }
],

herencia_mendel: [
  {
    titulo: "Patrón de herencia en árbol genealógico",
    tipo: "Análisis de pedigree",
    enunciado: `
      <p>Una mujer consulta porque su padre y su abuelo paterno presentaban una enfermedad caracterizada por debilidad muscular progresiva de inicio en adultez.</p>

      <p>La paciente está sana. Tiene dos hermanos hombres sanos y una hermana afectada. El padre afectado tuvo además una hermana afectada.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Cuál es el patrón de herencia más probable?</li>
        <li>¿Qué elementos del pedigree apoyan esa conclusión?</li>
        <li>¿Existe transmisión varón-varón?</li>
        <li>¿Cuál sería el riesgo para hijos de una mujer heterocigota?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Patrón más probable:</strong></p>

      <p>Herencia autosómica dominante.</p>

      <p><strong>2. Elementos que apoyan:</strong></p>

      <ul>
        <li>Presencia en múltiples generaciones consecutivas (transmisión vertical).</li>
        <li>Afecta ambos sexos.</li>
        <li>Existe transmisión padre-hijo.</li>
        <li>Los individuos afectados suelen tener un progenitor afectado.</li>
      </ul>

      <p><strong>3. ¿Existe transmisión varón-varón?</strong></p>

      <p>Sí. Eso descarta herencia ligada al X.</p>

      <p><strong>4. Riesgo para hijos:</strong></p>

      <p>Si la mujer es heterocigota, cada hijo tiene 50% de riesgo de heredar la variante.</p>
    `
  },

  {
    titulo: "Cálculo de riesgo en enfermedad autosómica recesiva",
    tipo: "Cálculo genético",
    enunciado: `
      <p>Una pareja tiene un hijo con fibrosis quística. Ambos padres son clínicamente sanos.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Cuál es el patrón de herencia?</li>
        <li>¿Cuál es el genotipo probable de los padres?</li>
        <li>¿Cuál es el riesgo de recurrencia para un próximo hijo?</li>
        <li>¿Cuál es la probabilidad de que un hijo sano sea portador?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Patrón:</strong></p>

      <p>Autosómico recesivo.</p>

      <p><strong>2. Genotipo parental:</strong></p>

      <p>Ambos padres son heterocigotos portadores.</p>

      <p>Aa × Aa</p>

      <p><strong>3. Riesgo de recurrencia:</strong></p>

      <ul>
        <li>25% afectado.</li>
        <li>50% portador.</li>
        <li>25% sano no portador.</li>
      </ul>

      <p><strong>4. Probabilidad de que un hijo sano sea portador:</strong></p>

      <p>Entre los hijos sanos quedan:</p>

      <ul>
        <li>2/3 portadores.</li>
        <li>1/3 no portadores.</li>
      </ul>

      <p>Por lo tanto, un hijo sano tiene 2/3 de probabilidad de ser portador.</p>
    `
  },

  {
    titulo: "Hemofilia y herencia ligada al X",
    tipo: "Riesgo de recurrencia",
    enunciado: `
      <p>Una mujer cuyo padre tenía hemofilia consulta antes de embarazarse. Su pareja es sana.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Cuál es el patrón hereditario de hemofilia A?</li>
        <li>¿Cuál es el riesgo de tener un hijo hombre afectado?</li>
        <li>¿Cuál es el riesgo de tener una hija portadora?</li>
        <li>¿Existe transmisión padre-hijo en esta enfermedad?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Patrón:</strong></p>

      <p>Ligada al X recesiva.</p>

      <p><strong>2. Situación genética:</strong></p>

      <p>La mujer es portadora obligada porque su padre estaba afectado.</p>

      <p><strong>3. Riesgo de hijo hombre afectado:</strong></p>

      <ul>
        <li>50% de los hijos hombres estarán afectados.</li>
      </ul>

      <p><strong>4. Riesgo de hija portadora:</strong></p>

      <ul>
        <li>50% de las hijas serán portadoras.</li>
      </ul>

      <p><strong>5. Transmisión padre-hijo:</strong></p>

      <p>No existe, porque el padre transmite el cromosoma Y a los hijos hombres.</p>
    `
  },

  {
    titulo: "Penetrancia incompleta",
    tipo: "Interpretación clínica",
    enunciado: `
      <p>En una familia con enfermedad autosómica dominante confirmada molecularmente, una mujer presenta la variante patogénica pero no tiene síntomas.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Qué fenómeno explica esta situación?</li>
        <li>¿Cómo afecta esto al análisis del árbol genealógico?</li>
        <li>¿La paciente puede transmitir la variante?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Fenómeno:</strong></p>

      <p>Penetrancia incompleta.</p>

      <p><strong>2. Impacto en el pedigree:</strong></p>

      <p>Puede hacer que el patrón hereditario parezca “saltarse” generaciones, aunque la transmisión genética siga ocurriendo.</p>

      <p><strong>3. Transmisión:</strong></p>

      <p>Sí. Aunque no tenga síntomas, posee la variante y puede transmitirla a su descendencia.</p>
    `
  },

  {
    titulo: "Expresividad variable",
    tipo: "Interpretación clínica",
    enunciado: `
      <p>Dos hermanos poseen la misma variante patogénica en NF1. Uno presenta múltiples neurofibromas y compromiso neurológico severo; el otro solo manchas café con leche.</p>

      <p>Explique:</p>

      <ol>
        <li>¿Qué fenómeno genético representa?</li>
        <li>¿Cuál es la diferencia con penetrancia incompleta?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Fenómeno:</strong></p>

      <p>Expresividad variable.</p>

      <p><strong>2. Diferencia con penetrancia:</strong></p>

      <ul>
        <li>Penetrancia = presencia o ausencia del fenotipo.</li>
        <li>Expresividad = intensidad o severidad clínica.</li>
      </ul>

      <p>En este caso ambos individuos expresan enfermedad, pero con distinta gravedad.</p>
    `
  },

  {
    titulo: "Anticipación genética",
    tipo: "Análisis clínico",
    enunciado: `
      <p>En una familia con enfermedad de Huntington, el abuelo comenzó síntomas a los 65 años, el padre a los 45 y el hijo a los 30.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Qué fenómeno genético se observa?</li>
        <li>¿Con qué tipo de mutación suele asociarse?</li>
        <li>Mencione otras enfermedades asociadas.</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Fenómeno:</strong></p>

      <p>Anticipación genética.</p>

      <p><strong>2. Mecanismo:</strong></p>

      <p>Expansión de repeticiones trinucleotídicas.</p>

      <p><strong>3. Otras enfermedades:</strong></p>

      <ul>
        <li>Distrofia miotónica.</li>
        <li>Síndrome X frágil.</li>
      </ul>

      <p>La anticipación se caracteriza por aparición más precoz o mayor severidad en generaciones sucesivas.</p>
    `
  },

  {
    titulo: "Impronta genómica",
    tipo: "Diagnóstico diferencial",
    enunciado: `
      <p>Dos pacientes presentan alteraciones en la región 15q11-q13. Uno desarrolla síndrome de Prader-Willi y otro síndrome de Angelman.</p>

      <p>Explique:</p>

      <ol>
        <li>¿Qué fenómeno explica esto?</li>
        <li>¿Qué origen parental se asocia a cada síndrome?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Fenómeno:</strong></p>

      <p>Impronta genómica.</p>

      <p><strong>2. Asociación:</strong></p>

      <ul>
        <li>Prader-Willi: pérdida de expresión paterna.</li>
        <li>Angelman: pérdida de expresión materna.</li>
      </ul>

      <p>La misma región puede producir distintos síndromes según origen parental del alelo alterado.</p>
    `
  },

  {
    titulo: "Herencia mitocondrial",
    tipo: "Análisis de patrón hereditario",
    enunciado: `
      <p>Una mujer con enfermedad mitocondrial tiene tres hijos: dos hombres y una mujer. Todos presentan síntomas en distinta severidad.</p>

      <p>Uno de los hijos hombres tiene posteriormente dos hijos sanos.</p>

      <p>Explique:</p>

      <ol>
        <li>¿Qué patrón hereditario presenta la enfermedad?</li>
        <li>¿Por qué existe distinta severidad?</li>
        <li>¿Por qué el hijo hombre no transmitió la enfermedad?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Patrón:</strong></p>

      <p>Herencia mitocondrial.</p>

      <p><strong>2. Distinta severidad:</strong></p>

      <p>Por heteroplasmia, es decir, distinta proporción de mitocondrias normales y mutadas.</p>

      <p><strong>3. Transmisión:</strong></p>

      <p>Los hombres afectados no transmiten porque las mitocondrias del cigoto provienen del óvulo materno.</p>
    `
  },

  {
    titulo: "Heterogeneidad genética",
    tipo: "Interpretación molecular",
    enunciado: `
      <p>Una enfermedad puede ser causada por variantes en más de 40 genes distintos.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Qué fenómeno genético representa?</li>
        <li>¿Qué técnica molecular sería más eficiente para estudiarla?</li>
        <li>¿Por qué Sanger podría no ser la mejor opción inicial?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Fenómeno:</strong></p>

      <p>Heterogeneidad genética de locus.</p>

      <p><strong>2. Técnica recomendada:</strong></p>

      <p>Panel multigénico por NGS o exoma clínico.</p>

      <p><strong>3. Razón:</strong></p>

      <p>Sanger estudia regiones específicas una por una, por lo que sería lento y poco eficiente cuando existen muchos genes candidatos.</p>
    `
  },

  {
    titulo: "Caso integrador complejo",
    tipo: "Integración clínica-genética",
    enunciado: `
      <p>Una mujer consulta por antecedentes familiares de enfermedad neurológica progresiva.</p>

      <ul>
        <li>Su abuelo paterno inició síntomas a los 70 años.</li>
        <li>Su padre comenzó a los 50 años.</li>
        <li>Su hermano comenzó a los 32 años.</li>
      </ul>

      <p>La enfermedad afecta hombres y mujeres en generaciones consecutivas.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Cuál es el patrón hereditario más probable?</li>
        <li>¿Qué fenómeno adicional está presente?</li>
        <li>¿Qué mecanismo molecular suele producir este fenómeno?</li>
        <li>¿Qué enfermedad clásica podría corresponder?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Patrón:</strong></p>

      <p>Autosómico dominante.</p>

      <p><strong>2. Fenómeno:</strong></p>

      <p>Anticipación genética.</p>

      <p><strong>3. Mecanismo:</strong></p>

      <p>Expansión de repeticiones trinucleotídicas.</p>

      <p><strong>4. Enfermedad probable:</strong></p>

      <p>Huntington.</p>

      <p>La transmisión vertical y presencia en ambos sexos apoyan AD. La disminución progresiva en edad de inicio orienta a anticipación.</p>
    `
  }
],

genetica_poblaciones: [
  {
    titulo: "Hardy-Weinberg básico",
    tipo: "Cálculo matemático",
    enunciado: `
      <p>Una enfermedad autosómica recesiva afecta a 1 de cada 10.000 individuos en una población.</p>

      <p>Calcule:</p>

      <ol>
        <li>Frecuencia de individuos afectados.</li>
        <li>Frecuencia del alelo recesivo (q).</li>
        <li>Frecuencia del alelo dominante (p).</li>
        <li>Frecuencia de portadores heterocigotos.</li>
      </ol>
    `,
    solucion: `
      <p><strong>Paso 1:</strong></p>

      <p>En enfermedades AR:</p>

      <p>q² = frecuencia de afectados = 1/10.000</p>

      <p><strong>Paso 2:</strong></p>

      <p>q = √(1/10.000)</p>

      <p>q = 1/100 = 0.01</p>

      <p><strong>Paso 3:</strong></p>

      <p>p = 1 − q</p>

      <p>p = 1 − 0.01 = 0.99</p>

      <p><strong>Paso 4:</strong></p>

      <p>Portadores = 2pq</p>

      <p>2 × 0.99 × 0.01 = 0.0198</p>

      <p>≈ 2%</p>

      <p><strong>Resultado:</strong></p>

      <ul>
        <li>q² = 0.0001</li>
        <li>q = 0.01</li>
        <li>p = 0.99</li>
        <li>2pq ≈ 0.02 = 2%</li>
      </ul>
    `
  },

  {
    titulo: "Frecuencia de portadores",
    tipo: "Cálculo matemático",
    enunciado: `
      <p>La fibrosis quística tiene una incidencia aproximada de 1/2500 en una población.</p>

      <p>Determine:</p>

      <ol>
        <li>Frecuencia del alelo recesivo.</li>
        <li>Frecuencia de portadores.</li>
        <li>Probabilidad de que un individuo sano sea portador.</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Frecuencia del alelo recesivo:</strong></p>

      <p>q² = 1/2500</p>

      <p>q = √(1/2500)</p>

      <p>q = 1/50 = 0.02</p>

      <p><strong>2. Frecuencia de portadores:</strong></p>

      <p>p = 1 − 0.02 = 0.98</p>

      <p>2pq = 2 × 0.98 × 0.02</p>

      <p>2pq = 0.0392</p>

      <p>≈ 3.9%</p>

      <p><strong>3. Probabilidad de individuo sano portador:</strong></p>

      <p>Entre individuos sanos:</p>

      <ul>
        <li>2pq = portadores</li>
        <li>p² = sanos no portadores</li>
      </ul>

      <p>La mayoría de los sanos serán no portadores, pero existe proporción significativa de heterocigotos.</p>
    `
  },

  {
    titulo: "Consanguinidad y enfermedades AR",
    tipo: "Análisis conceptual",
    enunciado: `
      <p>Explique por qué la consanguinidad aumenta la frecuencia de enfermedades autosómicas recesivas.</p>

      <p>Además:</p>

      <ol>
        <li>¿La consanguinidad aumenta mutaciones nuevas?</li>
        <li>¿Qué ocurre con la homocigosis?</li>
        <li>¿Qué tipo de enfermedades aumentan más?</li>
      </ol>
    `,
    solucion: `
      <p>La consanguinidad aumenta la probabilidad de que ambos progenitores compartan alelos heredados desde un ancestro común.</p>

      <p>Esto aumenta probabilidad de homocigosis.</p>

      <p><strong>1. ¿Aumenta mutaciones nuevas?</strong></p>

      <p>No. La consanguinidad NO genera mutaciones nuevas.</p>

      <p><strong>2. ¿Qué ocurre con homocigosis?</strong></p>

      <p>Aumenta significativamente.</p>

      <p><strong>3. Enfermedades más afectadas:</strong></p>

      <p>Principalmente enfermedades autosómicas recesivas.</p>
    `
  },

  {
    titulo: "Análisis de equilibrio poblacional",
    tipo: "Interpretación genética",
    enunciado: `
      <p>Una población presenta:</p>

      <ul>
        <li>Población pequeña.</li>
        <li>Alta migración.</li>
        <li>Selección natural activa.</li>
      </ul>

      <p>Analice:</p>

      <ol>
        <li>¿La población está en equilibrio Hardy-Weinberg?</li>
        <li>¿Qué supuestos están alterados?</li>
        <li>¿Qué ocurrirá probablemente con las frecuencias alélicas?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. ¿Está en equilibrio?</strong></p>

      <p>No.</p>

      <p><strong>2. Supuestos alterados:</strong></p>

      <ul>
        <li>Población grande → alterado.</li>
        <li>Ausencia de migración → alterado.</li>
        <li>Ausencia de selección natural → alterado.</li>
      </ul>

      <p><strong>3. Consecuencia:</strong></p>

      <p>Las frecuencias alélicas probablemente cambiarán entre generaciones.</p>
    `
  },

  {
    titulo: "Deriva genética",
    tipo: "Análisis conceptual",
    enunciado: `
      <p>Explique qué es deriva genética.</p>

      <p>Además responda:</p>

      <ol>
        <li>¿En qué tipo de poblaciones tiene mayor efecto?</li>
        <li>¿Los cambios ocurren por selección o azar?</li>
        <li>¿Qué ocurre con la variabilidad genética?</li>
      </ol>
    `,
    solucion: `
      <p>La deriva genética corresponde a cambios aleatorios de frecuencias alélicas.</p>

      <p><strong>1. Mayor efecto:</strong></p>

      <p>En poblaciones pequeñas.</p>

      <p><strong>2. ¿Selección o azar?</strong></p>

      <p>Los cambios ocurren por azar.</p>

      <p><strong>3. Variabilidad genética:</strong></p>

      <p>Suele disminuir con el tiempo.</p>

      <p>Algunos alelos pueden desaparecer completamente.</p>
    `
  },

  {
    titulo: "Efecto fundador",
    tipo: "Caso poblacional",
    enunciado: `
      <p>Una isla es colonizada por 20 individuos provenientes de una población continental.</p>

      <p>Décadas después se observa alta frecuencia de una enfermedad genética extremadamente rara en el continente.</p>

      <p>Explique:</p>

      <ol>
        <li>¿Qué fenómeno ocurrió?</li>
        <li>¿Por qué aumentó la frecuencia de la enfermedad?</li>
        <li>¿Qué ocurre con la variabilidad genética de la nueva población?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Fenómeno:</strong></p>

      <p>Efecto fundador.</p>

      <p><strong>2. Explicación:</strong></p>

      <p>Algunos fundadores portaban el alelo raro y, debido al pequeño tamaño inicial, este alcanzó alta frecuencia por azar.</p>

      <p><strong>3. Variabilidad genética:</strong></p>

      <p>Disminuye respecto a la población original.</p>
    `
  },

  {
    titulo: "Cuello de botella",
    tipo: "Análisis poblacional",
    enunciado: `
      <p>Una población humana sufre una catástrofe natural que elimina al 90% de sus integrantes.</p>

      <p>Explique:</p>

      <ol>
        <li>¿Qué fenómeno ocurrió?</li>
        <li>¿Qué sucede con el pool génico?</li>
        <li>¿Cómo cambia la variabilidad genética?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Fenómeno:</strong></p>

      <p>Cuello de botella poblacional.</p>

      <p><strong>2. Pool génico:</strong></p>

      <p>Queda determinado por los sobrevivientes.</p>

      <p><strong>3. Variabilidad genética:</strong></p>

      <p>Disminuye significativamente.</p>

      <p>Algunos alelos pueden perderse completamente.</p>
    `
  },

  {
    titulo: "Ventaja heterocigota",
    tipo: "Integración clínica",
    enunciado: `
      <p>Explique por qué la anemia falciforme persiste en ciertas regiones donde existe malaria endémica.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Qué fenómeno explica esto?</li>
        <li>¿Qué ventaja poseen los heterocigotos?</li>
        <li>¿Qué ocurre con los homocigotos mutados?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Fenómeno:</strong></p>

      <p>Ventaja heterocigota o selección balanceada.</p>

      <p><strong>2. Ventaja:</strong></p>

      <p>Los heterocigotos presentan resistencia parcial frente a malaria.</p>

      <p><strong>3. Homocigotos mutados:</strong></p>

      <p>Presentan anemia falciforme clínica severa.</p>

      <p>Esto mantiene el alelo en la población.</p>
    `
  },

  {
    titulo: "Fitness biológico",
    tipo: "Conceptual",
    enunciado: `
      <p>Defina fitness biológico.</p>

      <p>Además explique:</p>

      <ol>
        <li>¿Qué significa alto fitness?</li>
        <li>¿Cómo se relaciona con selección natural?</li>
        <li>¿Implica necesariamente mayor fuerza física?</li>
      </ol>
    `,
    solucion: `
      <p>El fitness biológico corresponde a la capacidad reproductiva relativa de un individuo.</p>

      <p><strong>1. Alto fitness:</strong></p>

      <p>Mayor probabilidad de transmitir genes a la siguiente generación.</p>

      <p><strong>2. Relación con selección:</strong></p>

      <p>Los genotipos con mayor fitness tienden a aumentar su frecuencia.</p>

      <p><strong>3. ¿Mayor fuerza física?</strong></p>

      <p>No necesariamente. Lo importante es éxito reproductivo.</p>
    `
  },

  {
    titulo: "Problema integrador Hardy-Weinberg",
    tipo: "Ejercicio complejo",
    enunciado: `
      <p>Una enfermedad autosómica recesiva tiene incidencia de 1/40.000.</p>

      <p>Calcule:</p>

      <ol>
        <li>Frecuencia de afectados.</li>
        <li>Frecuencia del alelo recesivo.</li>
        <li>Frecuencia del alelo dominante.</li>
        <li>Frecuencia de portadores.</li>
        <li>Probabilidad de que dos individuos al azar sean ambos portadores.</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Frecuencia de afectados:</strong></p>

      <p>q² = 1/40.000 = 0.000025</p>

      <p><strong>2. Frecuencia del alelo recesivo:</strong></p>

      <p>q = √0.000025</p>

      <p>q = 0.005</p>

      <p><strong>3. Frecuencia del alelo dominante:</strong></p>

      <p>p = 1 − 0.005</p>

      <p>p = 0.995</p>

      <p><strong>4. Portadores:</strong></p>

      <p>2pq = 2 × 0.995 × 0.005</p>

      <p>2pq = 0.00995</p>

      <p>≈ 1%</p>

      <p><strong>5. Probabilidad de dos portadores:</strong></p>

      <p>(0.00995)²</p>

      <p>≈ 0.000099</p>

      <p>≈ 0.01%</p>
    `
  }
],

variabilidad: [
  {
    titulo: "SNP y variabilidad genética",
    tipo: "Conceptual",
    enunciado: `
      <p>Explique qué es un SNP.</p>

      <p>Además responda:</p>

      <ol>
        <li>¿Por qué son importantes en genética humana?</li>
        <li>¿Todos son patológicos?</li>
        <li>¿Qué aplicaciones clínicas poseen?</li>
      </ol>
    `,
    solucion: `
      <p>Un SNP corresponde a un cambio de una sola base en el ADN.</p>

      <p><strong>1. Importancia:</strong></p>

      <p>Son la forma más frecuente de variabilidad genética humana.</p>

      <p><strong>2. ¿Todos son patológicos?</strong></p>

      <p>No. La mayoría son benignos.</p>

      <p><strong>3. Aplicaciones:</strong></p>

      <ul>
        <li>Farmacogenética.</li>
        <li>GWAS.</li>
        <li>Predicción de susceptibilidad.</li>
        <li>Estudios poblacionales.</li>
      </ul>
    `
  },

  {
    titulo: "Crossing-over",
    tipo: "Meiosis y recombinación",
    enunciado: `
      <p>Explique el crossing-over.</p>

      <p>Responda:</p>

      <ol>
        <li>¿En qué etapa ocurre?</li>
        <li>¿Entre qué estructuras ocurre?</li>
        <li>¿Cuál es su importancia biológica?</li>
      </ol>
    `,
    solucion: `
      <p>El crossing-over corresponde al intercambio de segmentos entre cromátidas no hermanas.</p>

      <p><strong>1. Etapa:</strong></p>

      <p>Profase I de meiosis.</p>

      <p><strong>2. Estructuras:</strong></p>

      <p>Cromátidas no hermanas de cromosomas homólogos.</p>

      <p><strong>3. Importancia:</strong></p>

      <ul>
        <li>Aumenta variabilidad genética.</li>
        <li>Genera nuevas combinaciones alélicas.</li>
        <li>Reduce ligamiento genético.</li>
      </ul>
    `
  },

  {
    titulo: "Segregación independiente",
    tipo: "Conceptual",
    enunciado: `
      <p>Explique qué es segregación independiente.</p>

      <p>Además:</p>

      <ol>
        <li>¿Durante qué proceso ocurre?</li>
        <li>¿Cómo aumenta variabilidad genética?</li>
      </ol>
    `,
    solucion: `
      <p>La segregación independiente corresponde a la distribución aleatoria de cromosomas homólogos durante meiosis.</p>

      <p><strong>1. ¿Cuándo ocurre?</strong></p>

      <p>Durante meiosis.</p>

      <p><strong>2. Variabilidad:</strong></p>

      <p>Cada gameto recibe combinaciones distintas de cromosomas maternos y paternos.</p>
    `
  },

  {
    titulo: "STR y aplicaciones",
    tipo: "Aplicación clínica",
    enunciado: `
      <p>Explique qué son los STR.</p>

      <p>Además responda:</p>

      <ol>
        <li>¿Por qué presentan variabilidad?</li>
        <li>¿Qué aplicaciones poseen?</li>
        <li>¿Por qué son útiles en identificación humana?</li>
      </ol>
    `,
    solucion: `
      <p>Los STR son secuencias cortas repetidas en tándem.</p>

      <p><strong>1. Variabilidad:</strong></p>

      <p>El número de repeticiones cambia entre individuos.</p>

      <p><strong>2. Aplicaciones:</strong></p>

      <ul>
        <li>Pruebas de paternidad.</li>
        <li>Identificación forense.</li>
        <li>Mapeo genético.</li>
      </ul>

      <p><strong>3. Utilidad:</strong></p>

      <p>Poseen alta variabilidad poblacional.</p>
    `
  },

  {
    titulo: "CNV",
    tipo: "Variación estructural",
    enunciado: `
      <p>Defina CNV.</p>

      <p>Explique:</p>

      <ol>
        <li>¿Qué tipos existen?</li>
        <li>¿Todas son patológicas?</li>
        <li>¿Cómo pueden producir enfermedad?</li>
      </ol>
    `,
    solucion: `
      <p>Las CNV corresponden a variaciones en el número de copias de segmentos genómicos.</p>

      <p><strong>1. Tipos:</strong></p>

      <ul>
        <li>Duplicaciones.</li>
        <li>Microdeleciones.</li>
      </ul>

      <p><strong>2. ¿Todas patológicas?</strong></p>

      <p>No.</p>

      <p><strong>3. Enfermedad:</strong></p>

      <p>Pueden alterar dosis génica o interrumpir genes.</p>
    `
  },

  {
    titulo: "Penetrancia vs expresividad",
    tipo: "Interpretación genética",
    enunciado: `
      <p>Diferencie penetrancia de expresividad.</p>

      <p>Use ejemplos clínicos si corresponde.</p>
    `,
    solucion: `
      <p><strong>Penetrancia:</strong></p>

      <p>Corresponde a presencia o ausencia del fenotipo en individuos con un genotipo específico.</p>

      <p><strong>Expresividad:</strong></p>

      <p>Corresponde a variación en intensidad o gravedad clínica.</p>

      <p>Un individuo puede presentar penetrancia completa pero expresividad variable.</p>
    `
  },

  {
    titulo: "Epigenética",
    tipo: "Conceptual avanzado",
    enunciado: `
      <p>Explique qué es epigenética.</p>

      <p>Además:</p>

      <ol>
        <li>¿La epigenética cambia secuencia ADN?</li>
        <li>¿Qué mecanismos epigenéticos existen?</li>
        <li>¿Qué factores pueden modificar epigenética?</li>
      </ol>
    `,
    solucion: `
      <p>La epigenética corresponde a cambios en expresión génica sin alterar secuencia del ADN.</p>

      <p><strong>1. ¿Cambia secuencia?</strong></p>

      <p>No.</p>

      <p><strong>2. Mecanismos:</strong></p>

      <ul>
        <li>Metilación ADN.</li>
        <li>Modificaciones histonas.</li>
        <li>ARN no codificante.</li>
      </ul>

      <p><strong>3. Factores modificadores:</strong></p>

      <ul>
        <li>Ambiente.</li>
        <li>Dieta.</li>
        <li>Tóxicos.</li>
        <li>Edad.</li>
      </ul>
    `
  },

  {
    titulo: "Impronta genómica",
    tipo: "Integración clínica",
    enunciado: `
      <p>Explique impronta genómica.</p>

      <p>Además:</p>

      <ol>
        <li>¿Qué relación posee con epigenética?</li>
        <li>Mencione enfermedades clásicas asociadas.</li>
      </ol>
    `,
    solucion: `
      <p>La impronta genómica corresponde a expresión diferencial de genes según origen parental.</p>

      <p><strong>1. Relación con epigenética:</strong></p>

      <p>Es un fenómeno epigenético regulado principalmente por metilación.</p>

      <p><strong>2. Enfermedades:</strong></p>

      <ul>
        <li>Prader-Willi.</li>
        <li>Angelman.</li>
      </ul>
    `
  },

  {
    titulo: "Mosaicismo",
    tipo: "Diagnóstico genético",
    enunciado: `
      <p>Defina mosaicismo.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Cómo se origina?</li>
        <li>¿Qué es mosaicismo gonadal?</li>
        <li>¿Por qué es importante clínicamente?</li>
      </ol>
    `,
    solucion: `
      <p>El mosaicismo corresponde a presencia de líneas celulares genéticamente distintas derivadas del mismo cigoto.</p>

      <p><strong>1. Origen:</strong></p>

      <p>Mutaciones postcigóticas.</p>

      <p><strong>2. Mosaicismo gonadal:</strong></p>

      <p>Afecta células germinales.</p>

      <p><strong>3. Importancia:</strong></p>

      <p>Puede explicar recurrencia de enfermedades genéticas en padres clínicamente sanos.</p>
    `
  },

  {
    titulo: "Mosaicismo vs quimerismo",
    tipo: "Comparación",
    enunciado: `
      <p>Diferencie mosaicismo de quimerismo.</p>

      <p>Incluya:</p>

      <ol>
        <li>Origen celular.</li>
        <li>Número de cigotos involucrados.</li>
        <li>Ejemplos clínicos.</li>
      </ol>
    `,
    solucion: `
      <p><strong>Mosaicismo:</strong></p>

      <ul>
        <li>Deriva de un solo cigoto.</li>
        <li>Se origina por mutaciones postcigóticas.</li>
      </ul>

      <p><strong>Quimerismo:</strong></p>

      <ul>
        <li>Deriva de múltiples cigotos.</li>
        <li>Puede originarse por fusión embrionaria o trasplantes.</li>
      </ul>

      <p>Diferencia principal:</p>

      <p>Mosaicismo = 1 cigoto; quimerismo = múltiples cigotos.</p>
    `
  },

  {
    titulo: "Interacción gen-ambiente",
    tipo: "Integración clínica",
    enunciado: `
      <p>Explique la interacción gen-ambiente.</p>

      <p>Además:</p>

      <ol>
        <li>¿Por qué individuos con mismo genotipo pueden presentar fenotipos distintos?</li>
        <li>Mencione ejemplos de factores ambientales importantes.</li>
      </ol>
    `,
    solucion: `
      <p>El fenotipo depende tanto de factores genéticos como ambientales.</p>

      <p><strong>1. Diferencias fenotípicas:</strong></p>

      <p>El ambiente puede modificar expresión génica y desarrollo clínico.</p>

      <p><strong>2. Factores ambientales:</strong></p>

      <ul>
        <li>Dieta.</li>
        <li>Tóxicos.</li>
        <li>Medicamentos.</li>
        <li>Radiación.</li>
        <li>Infecciones.</li>
      </ul>
    `
  },

  {
    titulo: "Farmacogenética",
    tipo: "Aplicación médica",
    enunciado: `
      <p>Explique farmacogenética.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Qué relación tiene con variabilidad genética?</li>
        <li>¿Cómo afecta respuesta a medicamentos?</li>
        <li>¿Qué importancia tiene en medicina personalizada?</li>
      </ol>
    `,
    solucion: `
      <p>La farmacogenética estudia cómo variantes genéticas modifican respuesta a fármacos.</p>

      <p><strong>1. Relación:</strong></p>

      <p>Las diferencias genéticas afectan metabolismo y acción farmacológica.</p>

      <p><strong>2. Consecuencias:</strong></p>

      <ul>
        <li>Diferente eficacia.</li>
        <li>Toxicidad variable.</li>
        <li>Necesidad de ajustes de dosis.</li>
      </ul>

      <p><strong>3. Medicina personalizada:</strong></p>

      <p>Permite adaptar tratamientos según perfil genético.</p>
    `
  },

  {
    titulo: "GWAS",
    tipo: "Genética compleja",
    enunciado: `
      <p>Explique qué son los GWAS.</p>

      <p>Además:</p>

      <ol>
        <li>¿Qué buscan identificar?</li>
        <li>¿Qué variantes suelen analizar?</li>
        <li>¿Asociación genética implica causalidad?</li>
      </ol>
    `,
    solucion: `
      <p>Los Genome-Wide Association Studies buscan asociaciones entre variantes genéticas y enfermedades complejas.</p>

      <p><strong>1. Objetivo:</strong></p>

      <p>Identificar factores genéticos de susceptibilidad.</p>

      <p><strong>2. Variantes analizadas:</strong></p>

      <p>Principalmente SNP.</p>

      <p><strong>3. ¿Causalidad?</strong></p>

      <p>No necesariamente. Asociación estadística no implica causalidad directa.</p>
    `
  }
],

enf_monogenicas: [
  {
    titulo: "Patrón autosómico dominante",
    tipo: "Análisis de pedigree",
    enunciado: `
      <p>Una familia presenta afectados en tres generaciones consecutivas.</p>

      <p>Hombres y mujeres están afectados por igual.</p>

      <p>Existe transmisión padre-hijo.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Qué patrón hereditario es más probable?</li>
        <li>¿Qué características apoyan este diagnóstico?</li>
        <li>¿Cuál es el riesgo típico para descendencia?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Patrón:</strong></p>

      <p>Autosómico dominante.</p>

      <p><strong>2. Características:</strong></p>

      <ul>
        <li>Transmisión vertical.</li>
        <li>Afecta ambos sexos.</li>
        <li>Existe transmisión padre-hijo.</li>
      </ul>

      <p><strong>3. Riesgo:</strong></p>

      <p>50% para cada hijo si el progenitor afectado es heterocigoto.</p>
    `
  },

  {
    titulo: "Patrón autosómico recesivo",
    tipo: "Caso clínico",
    enunciado: `
      <p>Una pareja sana tiene dos hijos afectados por fibrosis quística.</p>

      <p>No existen antecedentes familiares conocidos.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Qué patrón hereditario presenta la enfermedad?</li>
        <li>¿Cuál es el gen clásico afectado?</li>
        <li>¿Cuál es el riesgo de recurrencia?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Patrón:</strong></p>

      <p>Autosómico recesivo.</p>

      <p><strong>2. Gen:</strong></p>

      <p>CFTR.</p>

      <p><strong>3. Riesgo recurrencia:</strong></p>

      <p>25% en cada embarazo.</p>

      <p>Ambos padres son probablemente portadores heterocigotos.</p>
    `
  },

  {
    titulo: "Ligada al X recesiva",
    tipo: "Interpretación genética",
    enunciado: `
      <p>Un niño presenta hemofilia A.</p>

      <p>Su padre es sano y su madre no presenta síntomas.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Qué patrón hereditario presenta?</li>
        <li>¿La madre probablemente es portadora?</li>
        <li>¿Existe transmisión padre-hijo?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Patrón:</strong></p>

      <p>Ligada al X recesiva.</p>

      <p><strong>2. Madre:</strong></p>

      <p>Probablemente portadora heterocigota.</p>

      <p><strong>3. Transmisión padre-hijo:</strong></p>

      <p>No existe en enfermedades XR.</p>
    `
  },

  {
    titulo: "Herencia mitocondrial",
    tipo: "Análisis familiar",
    enunciado: `
      <p>Una mujer afectada por enfermedad mitocondrial tiene tres hijos: dos mujeres y un hombre.</p>

      <p>Todos desarrollan enfermedad.</p>

      <p>Uno de los hijos hombres posteriormente tiene descendencia sana.</p>

      <p>Explique este patrón.</p>
    `,
    solucion: `
      <p>La herencia mitocondrial se transmite exclusivamente por vía materna.</p>

      <p>La madre transmite mitocondrias alteradas a toda su descendencia.</p>

      <p>El hijo hombre afectado NO transmite enfermedad porque los espermatozoides no aportan mitocondrias al cigoto.</p>
    `
  },

  {
    titulo: "Penetrancia incompleta",
    tipo: "Conceptual clínico",
    enunciado: `
      <p>Explique penetrancia incompleta.</p>

      <p>Además responda:</p>

      <ol>
        <li>¿Todos los individuos con la variante presentan enfermedad?</li>
        <li>¿Penetrancia corresponde a gravedad clínica?</li>
      </ol>
    `,
    solucion: `
      <p>La penetrancia incompleta ocurre cuando algunos individuos con el genotipo alterado NO presentan fenotipo clínico.</p>

      <p><strong>1. ¿Todos enferman?</strong></p>

      <p>No.</p>

      <p><strong>2. ¿Gravedad clínica?</strong></p>

      <p>No. La gravedad corresponde a expresividad.</p>
    `
  },

  {
    titulo: "Expresividad variable",
    tipo: "Integración clínica",
    enunciado: `
      <p>Dos individuos poseen la misma enfermedad AD.</p>

      <p>Uno presenta síntomas leves y otro compromiso multisistémico severo.</p>

      <p>Explique este fenómeno.</p>
    `,
    solucion: `
      <p>Corresponde a expresividad variable.</p>

      <p>Ambos individuos presentan enfermedad, pero con distinta intensidad clínica.</p>

      <p>Puede depender de:</p>

      <ul>
        <li>Genes modificadores.</li>
        <li>Ambiente.</li>
        <li>Factores epigenéticos.</li>
      </ul>
    `
  },

  {
    titulo: "Anticipación genética",
    tipo: "Caso clínico",
    enunciado: `
      <p>En una familia con Huntington, el abuelo desarrolló síntomas a los 60 años, el padre a los 45 y el hijo a los 30.</p>

      <p>Explique:</p>

      <ol>
        <li>¿Qué fenómeno ocurre?</li>
        <li>¿Qué mecanismo molecular suele producirlo?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Fenómeno:</strong></p>

      <p>Anticipación genética.</p>

      <p><strong>2. Mecanismo:</strong></p>

      <p>Expansión progresiva de tripletes CAG.</p>

      <p>Esto produce aparición más precoz y mayor gravedad.</p>
    `
  },

  {
    titulo: "Pleiotropía",
    tipo: "Integración sistémica",
    enunciado: `
      <p>Explique pleiotropía usando síndrome de Marfan.</p>

      <p>Mencione sistemas afectados.</p>
    `,
    solucion: `
      <p>La pleiotropía ocurre cuando una sola variante genética afecta múltiples órganos.</p>

      <p>En Marfan:</p>

      <ul>
        <li>Sistema cardiovascular → dilatación aórtica.</li>
        <li>Sistema ocular → ectopia lentis.</li>
        <li>Sistema musculoesquelético → talla alta y aracnodactilia.</li>
      </ul>
    `
  },

  {
    titulo: "Fibrosis quística",
    tipo: "Caso clínico completo",
    enunciado: `
      <p>Niño de 5 años presenta:</p>

      <ul>
        <li>Infecciones respiratorias recurrentes.</li>
        <li>Malabsorción.</li>
        <li>Sudor salado.</li>
      </ul>

      <p>Responda:</p>

      <ol>
        <li>Diagnóstico probable.</li>
        <li>Patrón hereditario.</li>
        <li>Gen alterado.</li>
        <li>Mecanismo fisiopatológico principal.</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Diagnóstico:</strong></p>

      <p>Fibrosis quística.</p>

      <p><strong>2. Herencia:</strong></p>

      <p>Autosómica recesiva.</p>

      <p><strong>3. Gen:</strong></p>

      <p>CFTR.</p>

      <p><strong>4. Fisiopatología:</strong></p>

      <p>Alteración del transporte de cloro y agua a través de membranas epiteliales.</p>
    `
  },

  {
    titulo: "Duchenne",
    tipo: "Caso clínico",
    enunciado: `
      <p>Niño de 4 años presenta:</p>

      <ul>
        <li>Dificultad para correr.</li>
        <li>Pseudohipertrofia gemelar.</li>
        <li>Signo de Gowers positivo.</li>
      </ul>

      <p>Responda:</p>

      <ol>
        <li>Diagnóstico probable.</li>
        <li>Patrón hereditario.</li>
        <li>Proteína alterada.</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Diagnóstico:</strong></p>

      <p>Distrofia muscular de Duchenne.</p>

      <p><strong>2. Herencia:</strong></p>

      <p>Ligada al X recesiva.</p>

      <p><strong>3. Proteína:</strong></p>

      <p>Distrofina.</p>
    `
  },

  {
    titulo: "Anemia falciforme",
    tipo: "Molecular + clínica",
    enunciado: `
      <p>Explique anemia falciforme.</p>

      <p>Incluya:</p>

      <ol>
        <li>Tipo de mutación.</li>
        <li>Patrón hereditario.</li>
        <li>Manifestaciones clínicas importantes.</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Mutación:</strong></p>

      <p>Mutación missense en gen β-globina.</p>

      <p><strong>2. Herencia:</strong></p>

      <p>Autosómica recesiva.</p>

      <p><strong>3. Manifestaciones:</strong></p>

      <ul>
        <li>Hemólisis.</li>
        <li>Crisis vasooclusivas.</li>
        <li>Eritrocitos falciformes.</li>
      </ul>
    `
  },

  {
    titulo: "Mutaciones de novo",
    tipo: "Conceptual",
    enunciado: `
      <p>Explique qué son mutaciones de novo.</p>

      <p>Además:</p>

      <ol>
        <li>¿Puede existir enfermedad AD sin antecedentes familiares?</li>
        <li>Mencione ejemplos clásicos.</li>
      </ol>
    `,
    solucion: `
      <p>Las mutaciones de novo son variantes nuevas que aparecen por primera vez en un individuo.</p>

      <p><strong>1. ¿Puede ocurrir AD sin antecedentes?</strong></p>

      <p>Sí.</p>

      <p><strong>2. Ejemplos:</strong></p>

      <ul>
        <li>Acondroplasia.</li>
        <li>Neurofibromatosis tipo 1.</li>
      </ul>
    `
  },

  {
    titulo: "Problema integrador de pedigree",
    tipo: "Análisis complejo",
    enunciado: `
      <p>Analice el siguiente escenario:</p>

      <ul>
        <li>Solo hombres afectados.</li>
        <li>No existe transmisión padre-hijo.</li>
        <li>Mujeres clínicamente sanas transmiten enfermedad.</li>
      </ul>

      <p>Determine:</p>

      <ol>
        <li>Patrón hereditario.</li>
        <li>Justificación genética.</li>
        <li>Riesgo para hijos hombres de madre portadora.</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Patrón:</strong></p>

      <p>Ligada al X recesiva.</p>

      <p><strong>2. Justificación:</strong></p>

      <ul>
        <li>Predominio masculino.</li>
        <li>Ausencia transmisión padre-hijo.</li>
        <li>Mujeres portadoras asintomáticas.</li>
      </ul>

      <p><strong>3. Riesgo:</strong></p>

      <p>50% de hijos hombres afectados.</p>
    `
  }
],

enf_complejas: [
  {
    titulo: "Concepto general",
    tipo: "Conceptual",
    enunciado: `
      <p>Defina enfermedades complejas o multifactoriales.</p>

      <p>Además explique:</p>

      <ol>
        <li>¿Por qué no siguen herencia mendeliana clásica?</li>
        <li>¿Qué factores participan?</li>
      </ol>
    `,
    solucion: `
      <p>Las enfermedades complejas resultan de interacción entre múltiples factores genéticos y ambientales.</p>

      <p><strong>1. Herencia:</strong></p>

      <p>No siguen patrones mendelianos porque participan múltiples genes y ambiente.</p>

      <p><strong>2. Factores:</strong></p>

      <ul>
        <li>Genes de susceptibilidad.</li>
        <li>Dieta.</li>
        <li>Infecciones.</li>
        <li>Tóxicos.</li>
        <li>Estilo de vida.</li>
      </ul>
    `
  },

  {
    titulo: "Agregación familiar",
    tipo: "Interpretación",
    enunciado: `
      <p>Explique qué significa agregación familiar.</p>

      <p>Además:</p>

      <ol>
        <li>¿Qué sugiere respecto a genética?</li>
        <li>¿Demuestra exclusivamente herencia genética?</li>
      </ol>
    `,
    solucion: `
      <p>La enfermedad aparece con mayor frecuencia en familiares de individuos afectados.</p>

      <p><strong>1. Significado:</strong></p>

      <p>Sugiere componente genético.</p>

      <p><strong>2. ¿Demuestra genética exclusivamente?</strong></p>

      <p>No, porque familiares también comparten ambiente.</p>
    `
  },

  {
    titulo: "Riesgo relativo λr",
    tipo: "Ejercicio matemático",
    enunciado: `
      <p>La prevalencia poblacional de una enfermedad es 2%.</p>

      <p>La prevalencia en familiares de primer grado es 10%.</p>

      <p>Calcule λr.</p>

      <p>Interprete el resultado.</p>
    `,
    solucion: `
      <p><strong>Fórmula:</strong></p>

      <p>λr = prevalencia familiares / prevalencia poblacional</p>

      <p><strong>Cálculo:</strong></p>

      <p>λr = 10 / 2</p>

      <p>λr = 5</p>

      <p><strong>Interpretación:</strong></p>

      <p>Existe agregación familiar y evidencia de componente genético.</p>
    `
  },

  {
    titulo: "Interpretación λr",
    tipo: "Análisis",
    enunciado: `
      <p>Explique:</p>

      <ol>
        <li>¿Qué significa λr = 1?</li>
        <li>¿Qué significa λr alto?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. λr = 1:</strong></p>

      <p>No existe agregación familiar.</p>

      <p><strong>2. λr elevado:</strong></p>

      <p>Sugiere importante participación genética.</p>
    `
  },

  {
    titulo: "Gemelos monocigóticos y dicigóticos",
    tipo: "Conceptual",
    enunciado: `
      <p>Compare gemelos monocigóticos y dicigóticos.</p>

      <p>Incluya:</p>

      <ol>
        <li>Porcentaje genes compartidos.</li>
        <li>Importancia para estudios genéticos.</li>
      </ol>
    `,
    solucion: `
      <p><strong>Gemelos monocigóticos:</strong></p>

      <ul>
        <li>Comparten ~100% genes.</li>
      </ul>

      <p><strong>Gemelos dicigóticos:</strong></p>

      <ul>
        <li>Comparten ~50% genes.</li>
      </ul>

      <p><strong>Importancia:</strong></p>

      <p>Permiten separar influencia genética y ambiental.</p>
    `
  },

  {
    titulo: "Concordancia",
    tipo: "Interpretación clínica",
    enunciado: `
      <p>Una enfermedad presenta:</p>

      <ul>
        <li>Concordancia MZ = 80%</li>
        <li>Concordancia DZ = 20%</li>
      </ul>

      <p>Explique:</p>

      <ol>
        <li>¿Qué demuestra mayor concordancia MZ?</li>
        <li>¿Qué demuestra que MZ no alcance 100%?</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Mayor concordancia MZ:</strong></p>

      <p>Existe importante componente genético.</p>

      <p><strong>2. MZ menor a 100%:</strong></p>

      <p>Existe influencia ambiental.</p>
    `
  },

  {
    titulo: "Herencia umbral",
    tipo: "Conceptual avanzado",
    enunciado: `
      <p>Explique el modelo de herencia umbral.</p>

      <p>Además:</p>

      <ol>
        <li>¿Depende de un solo gen?</li>
        <li>¿Cómo aparece la enfermedad?</li>
      </ol>
    `,
    solucion: `
      <p>La herencia umbral corresponde a acumulación progresiva de predisposición genética y ambiental.</p>

      <p><strong>1. ¿Un solo gen?</strong></p>

      <p>No.</p>

      <p><strong>2. Manifestación:</strong></p>

      <p>La enfermedad aparece al superar un nivel crítico de susceptibilidad.</p>
    `
  },

  {
    titulo: "GWAS",
    tipo: "Conceptual",
    enunciado: `
      <p>Explique qué son los GWAS.</p>

      <p>Además:</p>

      <ol>
        <li>¿Qué buscan identificar?</li>
        <li>¿Qué variantes suelen analizar?</li>
        <li>¿Qué limitaciones poseen?</li>
      </ol>
    `,
    solucion: `
      <p>Los GWAS buscan asociaciones entre variantes genéticas y enfermedades complejas.</p>

      <p><strong>1. Objetivo:</strong></p>

      <p>Identificar genes de susceptibilidad.</p>

      <p><strong>2. Variantes:</strong></p>

      <p>SNPs.</p>

      <p><strong>3. Limitaciones:</strong></p>

      <ul>
        <li>Falsos positivos.</li>
        <li>No prueban causalidad.</li>
        <li>No consideran completamente interacciones génicas.</li>
      </ul>
    `
  },

  {
    titulo: "DM1",
    tipo: "Integración clínica",
    enunciado: `
      <p>Explique aspectos genéticos importantes de Diabetes Mellitus tipo 1.</p>

      <p>Incluya:</p>

      <ol>
        <li>Genes HLA importantes.</li>
        <li>Genes protectores.</li>
        <li>Concordancia en gemelos.</li>
      </ol>
    `,
    solucion: `
      <p><strong>1. Genes asociados:</strong></p>

      <ul>
        <li>HLA DR3.</li>
        <li>HLA DR4.</li>
      </ul>

      <p><strong>2. Protector:</strong></p>

      <p>HLA DR2.</p>

      <p><strong>3. Concordancia:</strong></p>

      <ul>
        <li>MZ ≈ 40%.</li>
        <li>DZ ≈ 4.8%.</li>
      </ul>

      <p>Demuestra participación genética y ambiental.</p>
    `
  },

  {
    titulo: "DM2",
    tipo: "Comparación clínica",
    enunciado: `
      <p>Compare DM1 y DM2 respecto a:</p>

      <ol>
        <li>Componente genético.</li>
        <li>Concordancia MZ.</li>
        <li>Importancia ambiental.</li>
      </ol>
    `,
    solucion: `
      <p><strong>DM1:</strong></p>

      <ul>
        <li>Componente inmunogenético.</li>
        <li>MZ ≈ 40%.</li>
      </ul>

      <p><strong>DM2:</strong></p>

      <ul>
        <li>Fuerte influencia genética y ambiental.</li>
        <li>MZ ≈ 80%.</li>
      </ul>

      <p>Ambas presentan influencia ambiental.</p>
    `
  },

  {
    titulo: "Alzheimer",
    tipo: "Genética clínica",
    enunciado: `
      <p>Mencione genes importantes asociados a enfermedad de Alzheimer.</p>

      <p>Además:</p>

      <ol>
        <li>¿Qué alelo aumenta riesgo?</li>
        <li>¿Qué proteína participa en fisiopatología?</li>
      </ol>
    `,
    solucion: `
      <p><strong>Genes:</strong></p>

      <ul>
        <li>APOE ε4.</li>
        <li>APP.</li>
        <li>PS1.</li>
        <li>PS2.</li>
      </ul>

      <p><strong>1. Riesgo:</strong></p>

      <p>APOE ε4.</p>

      <p><strong>2. Proteína:</strong></p>

      <p>Beta-amiloide.</p>
    `
  },

  {
    titulo: "Esclerosis múltiple",
    tipo: "Interpretación genética",
    enunciado: `
      <p>La esclerosis múltiple presenta λr ≈ 40 en familiares de primer grado.</p>

      <p>Explique qué significa este dato.</p>
    `,
    solucion: `
      <p>El riesgo familiar es aproximadamente 40 veces mayor que en población general.</p>

      <p>Esto demuestra importante participación genética y agregación familiar.</p>
    `
  },

  {
    titulo: "Factores ambientales",
    tipo: "Conceptual",
    enunciado: `
      <p>Mencione factores ambientales importantes en enfermedades complejas.</p>

      <p>Explique cómo pueden modificar enfermedad.</p>
    `,
    solucion: `
      <ul>
        <li>Dieta.</li>
        <li>Infecciones.</li>
        <li>Tóxicos.</li>
        <li>Estilo de vida.</li>
        <li>Ambiente intrauterino.</li>
      </ul>

      <p>Pueden desencadenar, acelerar o modular enfermedad en individuos susceptibles.</p>
    `
  },

  {
    titulo: "Comparación monogénicas vs complejas",
    tipo: "Integrador",
    enunciado: `
      <p>Compare enfermedades monogénicas y complejas.</p>

      <p>Incluya:</p>

      <ol>
        <li>Número de genes involucrados.</li>
        <li>Patrón hereditario.</li>
        <li>Importancia ambiental.</li>
      </ol>
    `,
    solucion: `
      <p><strong>Monogénicas:</strong></p>

      <ul>
        <li>Un gen.</li>
        <li>Herencia mendeliana.</li>
        <li>Menor influencia ambiental.</li>
      </ul>

      <p><strong>Complejas:</strong></p>

      <ul>
        <li>Múltiples genes.</li>
        <li>No mendelianas.</li>
        <li>Importante influencia ambiental.</li>
      </ul>
    `
  }
],

cancer: [
  {
    titulo: "Cáncer como enfermedad genética multietapa",
    tipo: "Desarrollo conceptual",
    enunciado: `
      <p>Explique por qué el cáncer se considera una enfermedad genética celular y multietapa.</p>

      <p>Incluya en su respuesta:</p>

      <ol>
        <li>Qué tipo de alteraciones se acumulan.</li>
        <li>Por qué no basta una sola mutación.</li>
        <li>Qué significa progresión tumoral.</li>
        <li>Qué rol cumple la selección clonal.</li>
      </ol>
    `,
    solucion: `
      <p>El cáncer se considera una enfermedad genética celular porque se origina por alteraciones en el ADN de una célula que modifican su comportamiento normal.</p>

      <p>No suele depender de una sola mutación, sino de la acumulación progresiva de alteraciones que afectan genes relacionados con proliferación, reparación del ADN, apoptosis, ciclo celular e invasión.</p>

      <p>La progresión tumoral corresponde al avance gradual desde una célula alterada hacia un tumor más agresivo. Durante este proceso se seleccionan clones celulares con ventajas proliferativas.</p>

      <p>La selección clonal significa que las células que adquieren mutaciones ventajosas sobreviven y se multiplican más que otras, generando subclones tumorales cada vez más agresivos.</p>
    `
  },

  {
    titulo: "Mutaciones somáticas y germinales",
    tipo: "Comparación",
    enunciado: `
      <p>Compare mutaciones somáticas y germinales en relación con el cáncer.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Cuándo aparecen?</li>
        <li>¿Se heredan?</li>
        <li>¿Qué tipo de cáncer explican principalmente?</li>
        <li>¿Qué importancia tienen en el cáncer hereditario?</li>
      </ol>
    `,
    solucion: `
      <p>Las mutaciones somáticas aparecen durante la vida del individuo. Afectan células del cuerpo y no se transmiten a la descendencia.</p>

      <p>La mayoría de los cánceres son esporádicos y se explican por acumulación de mutaciones somáticas.</p>

      <p>Las mutaciones germinales están presentes desde el nacimiento porque fueron heredadas a través del óvulo o espermatozoide.</p>

      <p>Estas mutaciones sí pueden transmitirse y predisponen al desarrollo de cáncer hereditario. En este caso se hereda la predisposición, no el cáncer en sí.</p>
    `
  },

  {
    titulo: "Caso de cáncer hereditario",
    tipo: "Caso clínico",
    enunciado: `
      <p>Una mujer de 29 años presenta cáncer de mama bilateral. Su madre y su abuela materna también tuvieron cáncer de mama antes de los 45 años.</p>

      <p>Analice:</p>

      <ol>
        <li>¿Sospecha cáncer esporádico o hereditario?</li>
        <li>¿Qué tipo de mutación podría estar presente?</li>
        <li>¿Qué genes podrían estar involucrados?</li>
        <li>¿Por qué aparece a edad temprana?</li>
      </ol>
    `,
    solucion: `
      <p>El caso orienta a cáncer hereditario por la edad temprana, bilateralidad y agregación familiar.</p>

      <p>Probablemente existe una mutación germinal heredada que predispone al desarrollo tumoral.</p>

      <p>Genes importantes asociados a cáncer de mama y ovario hereditario son BRCA1 y BRCA2, relacionados con reparación del ADN.</p>

      <p>La aparición temprana se explica porque la paciente nace con una primera alteración genética predisponente, por lo que necesita menos eventos adicionales para desarrollar cáncer.</p>
    `
  },

  {
    titulo: "Oncogenes y ganancia de función",
    tipo: "Desarrollo molecular",
    enunciado: `
      <p>Explique qué es un oncogén y por qué se considera una alteración de ganancia de función.</p>

      <p>Incluya:</p>

      <ol>
        <li>Qué es un protooncogén.</li>
        <li>Cómo se transforma en oncogén.</li>
        <li>Por qué basta una copia alterada.</li>
        <li>Un ejemplo clásico.</li>
      </ol>
    `,
    solucion: `
      <p>Un protooncogén es un gen normal que participa en crecimiento, proliferación y señalización celular.</p>

      <p>Cuando sufre una alteración activadora se transforma en oncogén. Esto puede ocurrir por mutación puntual, amplificación génica, translocación o sobreexpresión.</p>

      <p>Se considera ganancia de función porque la proteína queda hiperactiva, se produce en exceso o se expresa de forma anormal.</p>

      <p>Basta una copia alterada porque el problema es exceso de actividad proliferativa. Ejemplos clásicos son RAS, HER2 y BCR-ABL.</p>
    `
  },

  {
    titulo: "Genes supresores tumorales y two-hit",
    tipo: "Desarrollo molecular",
    enunciado: `
      <p>Explique la hipótesis de los dos eventos de Knudson aplicada a genes supresores tumorales.</p>

      <p>Responda:</p>

      <ol>
        <li>¿Qué función tienen los genes supresores?</li>
        <li>¿Por qué se requieren dos eventos?</li>
        <li>¿Qué diferencia hay entre cáncer hereditario y esporádico?</li>
      </ol>
    `,
    solucion: `
      <p>Los genes supresores tumorales actúan como frenos del crecimiento celular. Detienen el ciclo celular, favorecen reparación del ADN o inducen apoptosis.</p>

      <p>La hipótesis two-hit plantea que generalmente deben perderse ambas copias del gen para eliminar completamente su función.</p>

      <p>En cáncer hereditario, el primer hit puede estar presente como mutación germinal desde el nacimiento. Luego ocurre un segundo hit somático.</p>

      <p>En cáncer esporádico, ambos eventos ocurren somáticamente en la misma línea celular.</p>
    `
  },

  {
    titulo: "Retinoblastoma hereditario",
    tipo: "Caso clínico",
    enunciado: `
      <p>Un niño desarrolla retinoblastoma bilateral durante el primer año de vida.</p>

      <p>Explique:</p>

      <ol>
        <li>¿Qué gen se asocia clásicamente?</li>
        <li>¿Por qué se relaciona con la hipótesis two-hit?</li>
        <li>¿Por qué la forma hereditaria suele ser bilateral y precoz?</li>
      </ol>
    `,
    solucion: `
      <p>El retinoblastoma se asocia clásicamente al gen RB1, un gen supresor tumoral ubicado en 13q14.</p>

      <p>RB regula el paso G1/S del ciclo celular. Si ambas copias se inactivan, la célula pierde control proliferativo.</p>

      <p>En la forma hereditaria, el niño nace con una copia alterada en todas sus células. Solo necesita perder la segunda copia en una célula retiniana.</p>

      <p>Por eso aparece temprano y puede afectar ambos ojos.</p>
    `
  },

  {
    titulo: "TP53 y guardián del genoma",
    tipo: "Desarrollo conceptual",
    enunciado: `
      <p>Explique por qué TP53/p53 es llamado “guardián del genoma”.</p>

      <p>Incluya:</p>

      <ol>
        <li>Qué detecta p53.</li>
        <li>Qué puede hacer frente al daño del ADN.</li>
        <li>Qué ocurre si TP53 se inactiva.</li>
      </ol>
    `,
    solucion: `
      <p>p53 detecta daño genético y coordina respuestas celulares protectoras.</p>

      <p>Si el daño puede repararse, p53 detiene el ciclo celular para permitir reparación del ADN.</p>

      <p>Si el daño es demasiado severo, p53 puede inducir apoptosis para eliminar la célula dañada.</p>

      <p>Cuando TP53 se inactiva, células con ADN dañado pueden sobrevivir, dividirse y acumular nuevas mutaciones, favoreciendo cáncer.</p>
    `
  },

  {
    titulo: "Cromosoma Philadelphia",
    tipo: "Caso molecular",
    enunciado: `
      <p>Un paciente con leucocitosis marcada presenta cromosoma Philadelphia.</p>

      <p>Explique:</p>

      <ol>
        <li>Qué alteración cromosómica corresponde.</li>
        <li>Qué gen de fusión se forma.</li>
        <li>Cómo favorece proliferación tumoral.</li>
      </ol>
    `,
    solucion: `
      <p>El cromosoma Philadelphia corresponde a una translocación entre los cromosomas 9 y 22: t(9;22).</p>

      <p>Esta translocación genera el gen de fusión BCR-ABL.</p>

      <p>BCR-ABL codifica una tirosina quinasa constitutivamente activa, es decir, permanentemente encendida.</p>

      <p>Esto estimula proliferación celular excesiva y se asocia clásicamente a leucemia mieloide crónica.</p>
    `
  },

  {
    titulo: "Angiogénesis tumoral",
    tipo: "Desarrollo aplicado",
    enunciado: `
      <p>Explique por qué la angiogénesis es necesaria para el crecimiento tumoral.</p>

      <p>Incluya:</p>

      <ol>
        <li>Qué necesita el tumor para crecer.</li>
        <li>Qué ocurre si no forma vasos nuevos.</li>
        <li>Cómo la angiogénesis favorece metástasis.</li>
      </ol>
    `,
    solucion: `
      <p>Un tumor necesita oxígeno y nutrientes para seguir creciendo.</p>

      <p>Cuando aumenta de tamaño, la difusión no basta para alimentar todas las células tumorales.</p>

      <p>Por eso las células tumorales estimulan formación de vasos sanguíneos nuevos.</p>

      <p>La angiogénesis no solo permite crecimiento, también facilita que células tumorales entren a la circulación y puedan metastatizar.</p>
    `
  },

  {
    titulo: "Metástasis",
    tipo: "Desarrollo integrador",
    enunciado: `
      <p>Describa las etapas generales que debe atravesar una célula tumoral para producir metástasis.</p>

      <p>Explique por qué este proceso se asocia a peor pronóstico.</p>
    `,
    solucion: `
      <p>Para producir metástasis, una célula tumoral debe invadir tejido local, atravesar membrana basal y degradar matriz extracelular.</p>

      <p>Luego debe entrar a vasos sanguíneos o linfáticos, sobrevivir en circulación, salir hacia otro tejido y colonizar un órgano distante.</p>

      <p>Este proceso es complejo e ineficiente, pero cuando ocurre indica mayor agresividad tumoral.</p>

      <p>La metástasis se asocia a peor pronóstico porque implica diseminación sistémica de la enfermedad.</p>
    `
  },

  {
    titulo: "Síndrome de Lynch",
    tipo: "Caso clínico-genético",
    enunciado: `
      <p>Una familia presenta varios casos de cáncer colorrectal diagnosticados antes de los 50 años. En el tumor se detecta inestabilidad microsatelital.</p>

      <p>Explique:</p>

      <ol>
        <li>Qué síndrome sospecha.</li>
        <li>Qué sistema de reparación está alterado.</li>
        <li>Por qué aparece inestabilidad microsatelital.</li>
      </ol>
    `,
    solucion: `
      <p>El cuadro orienta a síndrome de Lynch.</p>

      <p>Este síndrome se asocia a alteraciones en genes de reparación mismatch repair.</p>

      <p>El sistema mismatch repair corrige errores pequeños que aparecen durante la replicación del ADN.</p>

      <p>Cuando falla, se acumulan errores en regiones repetitivas llamadas microsatélites, produciendo inestabilidad microsatelital y mayor riesgo de cáncer colorrectal.</p>
    `
  },

  {
    titulo: "Telomerasa e inmortalidad celular",
    tipo: "Desarrollo molecular",
    enunciado: `
      <p>Explique el rol de los telómeros y la telomerasa en células normales y tumorales.</p>

      <p>Incluya:</p>

      <ol>
        <li>Qué ocurre con los telómeros en cada división.</li>
        <li>Qué pasa cuando se acortan demasiado.</li>
        <li>Cómo ayuda la telomerasa al tumor.</li>
      </ol>
    `,
    solucion: `
      <p>Los telómeros protegen los extremos cromosómicos, pero se acortan progresivamente con cada división celular.</p>

      <p>Cuando se acortan demasiado, la célula entra en senescencia o apoptosis.</p>

      <p>Muchas células tumorales reactivan telomerasa, enzima que mantiene los telómeros.</p>

      <p>Esto les permite dividirse indefinidamente y contribuye a la inmortalidad replicativa tumoral.</p>
    `
  },

  {
    titulo: "Oncogenes vs genes supresores",
    tipo: "Comparación integradora",
    enunciado: `
      <p>Compare oncogenes y genes supresores tumorales.</p>

      <p>Incluya:</p>

      <ol>
        <li>Tipo de alteración funcional.</li>
        <li>Rol en la célula.</li>
        <li>Número de copias que suelen alterarse.</li>
        <li>Ejemplos.</li>
      </ol>
    `,
    solucion: `
      <p>Los oncogenes derivan de protooncogenes activados. Actúan por ganancia de función y estimulan proliferación celular.</p>

      <p>Suelen comportarse como dominantes a nivel celular, porque una copia activada puede bastar.</p>

      <p>Ejemplos: RAS, HER2, BCR-ABL.</p>

      <p>Los genes supresores tumorales actúan como frenos celulares. Se alteran por pérdida de función.</p>

      <p>Generalmente requieren pérdida de ambas copias para perder completamente su función.</p>

      <p>Ejemplos: RB1, TP53, APC, BRCA1/2.</p>
    `
  },

  {
    titulo: "Ejercicio integrador de carcinogénesis",
    tipo: "Integrador avanzado",
    enunciado: `
      <p>Construya una explicación completa del proceso de carcinogénesis desde una mutación inicial hasta la aparición de un tumor metastásico.</p>

      <p>Debe incluir:</p>

      <ol>
        <li>Mutación inicial.</li>
        <li>Expansión clonal.</li>
        <li>Oncogenes y genes supresores.</li>
        <li>Inestabilidad genética.</li>
        <li>Angiogénesis.</li>
        <li>Invasión y metástasis.</li>
      </ol>
    `,
    solucion: `
      <p>La carcinogénesis comienza cuando una célula adquiere una mutación que le entrega ventaja proliferativa.</p>

      <p>Esa célula se multiplica y forma un clon. Durante sucesivas divisiones pueden aparecer nuevas mutaciones.</p>

      <p>La activación de oncogenes favorece proliferación, mientras que la pérdida de genes supresores elimina frenos del crecimiento celular.</p>

      <p>Si además fallan mecanismos de reparación del ADN, aparece inestabilidad genética y aumenta la heterogeneidad tumoral.</p>

      <p>El tumor necesita angiogénesis para crecer más allá de cierto tamaño.</p>

      <p>Finalmente, algunas células adquieren capacidad de invadir tejidos, ingresar a circulación y colonizar órganos distantes, produciendo metástasis.</p>
    `
  }
],

pesquisa_neonatal: [

{
titulo:"Pesquisa neonatal como estrategia preventiva",
tipo:"Desarrollo conceptual",

enunciado:`
<p>Explique por qué la pesquisa neonatal se considera una estrategia preventiva de salud pública.</p>

<p>Incluya:</p>

<ol>
<li>Objetivo principal.</li>
<li>Por qué muchas enfermedades pasan desapercibidas.</li>
<li>Consecuencias del diagnóstico tardío.</li>
<li>Importancia del tratamiento precoz.</li>
</ol>
`,

solucion:`
<p>La pesquisa neonatal corresponde a una estrategia preventiva porque busca detectar enfermedades antes de aparición de síntomas clínicos.</p>

<p>Muchas enfermedades pesquisadas producen daño progresivo e irreversible durante los primeros días o meses de vida.</p>

<p>Un problema importante es que numerosos recién nacidos afectados parecen clínicamente sanos al nacimiento.</p>

<p>Esto puede retrasar el diagnóstico hasta aparición de daño neurológico, metabólico o sistémico importante.</p>

<p>La detección precoz permite iniciar tratamiento oportuno y disminuir secuelas permanentes.</p>
`
},

{
titulo:"Tamizaje versus diagnóstico",
tipo:"Comparación",

enunciado:`
<p>Compare tamizaje neonatal y diagnóstico definitivo.</p>

<p>Explique:</p>

<ol>
<li>Objetivo de cada uno.</li>
<li>Qué ocurre después de un resultado positivo.</li>
<li>Por qué un tamizaje positivo no confirma enfermedad.</li>
</ol>
`,

solucion:`
<p>El tamizaje busca identificar individuos con mayor probabilidad de enfermedad.</p>

<p>El diagnóstico definitivo confirma presencia o ausencia de la enfermedad mediante pruebas específicas.</p>

<p>Una pesquisa positiva no confirma enfermedad porque la prueba está diseñada para detectar sospechosos y posee posibilidad de falsos positivos.</p>

<p>Todo resultado alterado requiere confirmación diagnóstica posterior.</p>
`
},

{
titulo:"Sensibilidad y especificidad",
tipo:"Aplicación",

enunciado:`
<p>Explique por qué en pesquisa neonatal suele priorizarse sensibilidad alta.</p>

<p>Describa además:</p>

<ol>
<li>Qué son falsos negativos.</li>
<li>Qué son falsos positivos.</li>
<li>Por qué uno es más grave que otro.</li>
</ol>
`,

solucion:`
<p>La sensibilidad corresponde a la capacidad de detectar correctamente individuos enfermos.</p>

<p>Una sensibilidad elevada disminuye falsos negativos.</p>

<p>Un falso negativo ocurre cuando una persona enferma recibe un resultado aparentemente normal.</p>

<p>Un falso positivo corresponde a un individuo sano con resultado alterado.</p>

<p>En pesquisa neonatal es más grave un falso negativo porque podría retrasar diagnóstico y tratamiento en un recién nacido enfermo.</p>
`
},

{
titulo:"Interpretación matemática de sensibilidad",
tipo:"Ejercicio matemático",

enunciado:`
<p>En una población de 10.000 recién nacidos, 40 presentan una enfermedad metabólica.</p>

<p>La prueba detectó correctamente 38 pacientes enfermos.</p>

<p>Calcule sensibilidad.</p>
`,

solucion:`
<p>Fórmula:</p>

<p>Sensibilidad = verdaderos positivos / (verdaderos positivos + falsos negativos)</p>

<p>Sensibilidad = 38 / 40</p>

<p>Sensibilidad = 0,95</p>

<p>Sensibilidad = 95%</p>
`
},

{
titulo:"Interpretación matemática de especificidad",
tipo:"Ejercicio matemático",

enunciado:`
<p>En una población de 10.000 recién nacidos:</p>

<ul>
<li>9960 son sanos</li>
<li>9900 fueron correctamente identificados como sanos</li>
</ul>

<p>Calcule especificidad.</p>
`,

solucion:`
<p>Especificidad = verdaderos negativos/(verdaderos negativos + falsos positivos)</p>

<p>Especificidad=9900/9960</p>

<p>Especificidad=0,994</p>

<p>Especificidad ≈99,4%</p>
`
},

{
titulo:"Error preanalítico",
tipo:"Caso clínico",

enunciado:`
<p>Una muestra fue tomada antes de las primeras 12 horas de vida.</p>

<p>Explique:</p>

<ol>
<li>Qué error ocurrió.</li>
<li>Por qué puede alterar resultados.</li>
<li>Qué consecuencia puede generar.</li>
</ol>
`,

solucion:`
<p>Ocurrió obtención demasiado precoz.</p>

<p>Algunos metabolitos requieren alimentación previa para alcanzar niveles detectables.</p>

<p>La toma temprana puede generar falsos negativos.</p>

<p>Esto podría retrasar diagnóstico y tratamiento.</p>
`
},

{
titulo:"Hipotiroidismo congénito",
tipo:"Desarrollo fisiopatológico",

enunciado:`
<p>Explique por qué el hipotiroidismo congénito puede producir daño neurológico irreversible.</p>
`,

solucion:`
<p>Las hormonas tiroideas participan en maduración cerebral, migración neuronal, mielinización y formación de conexiones neuronales.</p>

<p>Durante los primeros meses de vida estas funciones son críticas.</p>

<p>La ausencia prolongada de hormonas tiroideas puede alterar desarrollo neurológico y producir daño permanente.</p>
`
},

{
titulo:"Caso clínico hipotiroidismo",
tipo:"Caso clínico",

enunciado:`
<p>Recién nacido con pesquisa alterada presenta TSH elevada.</p>

<p>Explique:</p>

<ol>
<li>Qué enfermedad sospecha.</li>
<li>Por qué inicialmente podría parecer sano.</li>
<li>Qué tratamiento puede utilizarse.</li>
</ol>
`,

solucion:`
<p>Se sospecha hipotiroidismo congénito.</p>

<p>Inicialmente puede parecer sano por aporte hormonal materno durante embarazo.</p>

<p>El tratamiento consiste en reemplazo precoz con levotiroxina.</p>
`
},

{
titulo:"Fenilcetonuria",
tipo:"Desarrollo",

enunciado:`
<p>Explique mecanismo fisiopatológico de fenilcetonuria.</p>
`,

solucion:`
<p>La enfermedad se produce por déficit de fenilalanina hidroxilasa.</p>

<p>La enzima normalmente transforma fenilalanina en tirosina.</p>

<p>Su déficit produce acumulación de fenilalanina.</p>

<p>El exceso resulta tóxico para sistema nervioso central.</p>
`
},

{
titulo:"Espectrometría de masas",
tipo:"Aplicación",

enunciado:`
<p>Explique por qué la espectrometría de masas en tándem mejoró programas de pesquisa neonatal.</p>
`,

solucion:`
<p>Permite detectar múltiples metabolitos simultáneamente utilizando una sola muestra.</p>

<p>Esto aumentó la cantidad de enfermedades pesquisables y mejoró eficiencia diagnóstica.</p>
`
},

{
titulo:"Integrador final",
tipo:"Integrador avanzado",

enunciado:`
<p>Integre los siguientes conceptos:</p>

<ul>
<li>Tamizaje</li>
<li>Sensibilidad</li>
<li>Errores preanalíticos</li>
<li>Hipotiroidismo congénito</li>
<li>Fenilcetonuria</li>
</ul>

<p>Explique cómo todos participan en el éxito de la pesquisa neonatal.</p>
`,

solucion:`
<p>La pesquisa neonatal utiliza pruebas de tamizaje para detectar enfermedades antes de aparición de síntomas.</p>

<p>La sensibilidad elevada busca evitar falsos negativos.</p>

<p>Los errores preanalíticos pueden alterar resultados y disminuir eficacia diagnóstica.</p>

<p>Enfermedades como hipotiroidismo congénito y fenilcetonuria requieren detección precoz para prevenir daño irreversible.</p>

<p>La utilidad final depende de calidad de muestra, detección temprana y tratamiento oportuno.</p>
`
}

],

};