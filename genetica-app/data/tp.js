const TPS = {
  citogenetica: [
  {
    id: "tp1-cito-p1-a",
    problema: "Problema 1",
    inciso: "a",
    tema: "Indicaciones del diagnóstico citogenético",
    pregunta: "¿En qué situaciones está indicado realizar diagnóstico citogenético?",
    respuesta: `
      <p>Está indicado cuando se sospecha una alteración cromosómica numérica o estructural.</p>

      <ul>
        <li>Recién nacido con malformaciones congénitas múltiples o dismorfias.</li>
        <li>Retraso mental o retraso del desarrollo sin causa conocida.</li>
        <li>Trastornos del desarrollo sexual o genitales ambiguos.</li>
        <li>Abortos espontáneos recurrentes.</li>
        <li>Infertilidad, azoospermia u oligospermia.</li>
        <li>Edad materna avanzada, especialmente ≥ 35 años.</li>
        <li>Hijo previo con cromosomopatía.</li>
        <li>Marcadores ecográficos alterados o screening prenatal positivo.</li>
        <li>Cáncer, especialmente leucemias y linfomas, con valor diagnóstico y pronóstico.</li>
      </ul>
    `,
    clave:
      "Pensar en cariotipo cuando el problema parece cromosómico: malformaciones múltiples, retraso del desarrollo, infertilidad, abortos o sospecha prenatal.",
    errorComun:
      "Pedir cariotipo para enfermedades monogénicas conocidas, como fibrosis quística, donde corresponde estudio molecular."
  },

  {
    id: "tp1-cito-p1-b",
    problema: "Problema 1",
    inciso: "b",
    tema: "Obtención del cariograma",
    pregunta: "¿Cómo se obtiene un cariograma?",
    respuesta: `
      <p>Se obtiene a partir de células nucleadas capaces de dividirse, típicamente linfocitos T de sangre periférica.</p>

      <ol>
        <li>Extracción de sangre periférica.</li>
        <li>Cultivo de linfocitos con fitohemaglutinina para estimular división celular.</li>
        <li>Arresto en metafase con colchicina.</li>
        <li>Choque hipotónico para hinchar las células y separar cromosomas.</li>
        <li>Fijación con Carnoy.</li>
        <li>Extensión sobre portaobjetos.</li>
        <li>Bandeo cromosómico, habitualmente bandeo G.</li>
        <li>Observación microscópica, fotografía, ordenamiento e interpretación.</li>
      </ol>

      <p><strong>Cariograma:</strong> imagen ordenada de los cromosomas. <strong>Cariotipo:</strong> descripción del complemento cromosómico.</p>
    `,
    clave:
      "El paso clave es detener en metafase, porque ahí los cromosomas están condensados y visibles.",
    errorComun:
      "Confundir cariotipo con cariograma: uno es la constitución cromosómica/descripción; el otro es la imagen ordenada."
  },

  {
    id: "tp1-cito-p1-c-i",
    problema: "Problema 1",
    inciso: "c.i",
    tema: "Bandeos cromosómicos",
    pregunta: "Si el bandeo G resulta ambiguo, ¿qué otras coloraciones podrían aplicarse?",
    respuesta: `
      <ul>
        <li><strong>Bandeo R:</strong> patrón reverso al G. Marca regiones ricas en GC, más ricas en genes y de replicación temprana.</li>
        <li><strong>Bandeo C:</strong> tiñe heterocromatina constitutiva, especialmente regiones centroméricas.</li>
        <li><strong>Bandeo Q:</strong> usa quinacrina fluorescente y requiere microscopía de fluorescencia.</li>
        <li><strong>Bandeo NOR:</strong> permite estudiar regiones organizadoras nucleolares.</li>
      </ul>

      <p>La elección depende de qué región o tipo de alteración se quiere aclarar.</p>
    `,
    clave:
      "G y R son complementarios; C es útil para heterocromatina centromérica.",
    errorComun:
      "Creer que todos los bandeos muestran lo mismo. Cada uno resalta regiones diferentes."
  },

  {
    id: "tp1-cito-p1-c-ii",
    problema: "Problema 1",
    inciso: "c.ii",
    tema: "Alta resolución",
    pregunta: "Si el problema es falta de resolución, ¿qué variantes podrían ensayarse?",
    respuesta: `
      <p>Puede usarse bandeo de alta resolución, analizando cromosomas en estadios menos condensados que la metafase clásica.</p>

      <ul>
        <li><strong>Prometafase:</strong> cromosomas más largos, con más bandas visibles.</li>
        <li><strong>Profase:</strong> aún menos condensados, con mayor resolución.</li>
      </ul>

      <p>A menor condensación, mayor cantidad de bandas observables y mayor capacidad para detectar alteraciones pequeñas.</p>
    `,
    clave:
      "Más resolución = cromosomas menos condensados = más bandas visibles.",
    errorComun:
      "Pensar que metafase siempre es lo mejor. Para más detalle conviene prometafase/profase."
  },

  {
    id: "tp1-cito-p1-c-iii",
    problema: "Problema 1",
    inciso: "c.iii",
    tema: "Sitios frágiles",
    pregunta: "¿Qué son los sitios frágiles y cómo se procesan las muestras para detectarlos?",
    respuesta: `
      <p>Los sitios frágiles son regiones cromosómicas que, bajo condiciones especiales de cultivo, pueden verse como constricciones, gaps o zonas de tinción débil.</p>

      <p>Para detectarlos se cultivan células bajo condiciones que generan estrés replicativo o dificultan la síntesis de ADN. Luego se realiza análisis citogenético para observar la expresión del sitio frágil.</p>

      <p>El sitio frágil clínicamente más conocido es el asociado al síndrome de X frágil.</p>
    `,
    clave:
      "Los sitios frágiles no se ven necesariamente en un cultivo estándar; requieren condiciones especiales.",
    errorComun:
      "Confundir sitio frágil con deleción visible. No es lo mismo."
  },

  {
    id: "tp1-cito-p2-a",
    problema: "Problema 2",
    inciso: "a",
    tema: "Clasificación cromosómica",
    pregunta: "¿Cómo se clasifican los cromosomas según la posición del centrómero?",
    respuesta: `
      <ul>
        <li><strong>Metacéntricos:</strong> centrómero central, brazos similares.</li>
        <li><strong>Submetacéntricos:</strong> centrómero desplazado, brazos desiguales.</li>
        <li><strong>Acrocéntricos:</strong> centrómero cercano a un extremo; brazo p muy corto. En humanos: 13, 14, 15, 21 y 22.</li>
        <li><strong>Telocéntricos:</strong> centrómero terminal; no hay cromosomas telocéntricos normales en humanos.</li>
      </ul>
    `,
    clave:
      "Los acrocéntricos humanos importantes son 13, 14, 15, 21 y 22.",
    errorComun:
      "Decir que humanos tienen cromosomas telocéntricos normales."
  },

  {
    id: "tp1-cito-p2-b",
    problema: "Problema 2",
    inciso: "b",
    tema: "Nomenclatura cromosómica",
    pregunta: "¿Cómo se nombran las bandas cromosómicas?",
    respuesta: `
      <p>Las bandas se numeran desde el centrómero hacia los telómeros.</p>

      <p>La nomenclatura incluye:</p>

      <ul>
        <li>Número del cromosoma.</li>
        <li>Brazo: <strong>p</strong> para brazo corto, <strong>q</strong> para brazo largo.</li>
        <li>Región.</li>
        <li>Banda.</li>
        <li>Subbanda, si corresponde.</li>
      </ul>

      <p>Ejemplo: <strong>7q31.2</strong> = cromosoma 7, brazo largo, región 3, banda 1, subbanda 2.</p>
    `,
    clave:
      "Siempre se lee: cromosoma + brazo + región + banda + subbanda.",
    errorComun:
      "Leer q31.2 como un número decimal. No es decimal; son niveles de localización."
  },

  {
    id: "tp1-cito-p2-c-1",
    problema: "Problema 2",
    inciso: "c",
    tema: "Interpretación ISCN",
    pregunta: "Interprete: 46,XY,inv(5)(p12q12)[20]",
    respuesta: `
      <p>Corresponde a un varón con 46 cromosomas y una inversión en el cromosoma 5.</p>

      <p>Los puntos de ruptura son <strong>p12</strong> y <strong>q12</strong>. Como involucra ambos brazos y atraviesa el centrómero, corresponde a una <strong>inversión pericéntrica</strong>.</p>

      <p><strong>[20]</strong> indica que se analizaron 20 células.</p>
    `,
    clave:
      "Si la inversión incluye el centrómero, es pericéntrica.",
    errorComun:
      "Confundir pericéntrica con paracéntrica. Paracéntrica ocurre dentro de un solo brazo y no incluye centrómero."
  },

  {
    id: "tp1-cito-p2-c-2",
    problema: "Problema 2",
    inciso: "c",
    tema: "Interpretación ISCN",
    pregunta: "Interprete: 45,XX,rob(14;21)(q10;q10)[20]",
    respuesta: `
      <p>Corresponde a una mujer con 45 cromosomas y una translocación robertsoniana entre los cromosomas 14 y 21.</p>

      <p>Los cromosomas 14 y 21 son acrocéntricos. En una translocación robertsoniana se fusionan los brazos largos y se pierden los brazos cortos, que contienen material redundante.</p>

      <p>La portadora puede ser fenotípicamente normal, pero tiene riesgo reproductivo aumentado, incluyendo descendencia con síndrome de Down por translocación.</p>
    `,
    clave:
      "Robertsoniana = fusión de cromosomas acrocéntricos.",
    errorComun:
      "Pensar que 45 cromosomas siempre implica enfermedad. En una Robertsoniana balanceada puede haber fenotipo normal."
  },

  {
    id: "tp1-cito-p2-c-3",
    problema: "Problema 2",
    inciso: "c",
    tema: "Mosaicismo",
    pregunta: "Interprete: 47,XX,+8[5]/46,XX[15]",
    respuesta: `
      <p>Corresponde a una mujer mosaico.</p>

      <ul>
        <li><strong>47,XX,+8[5]:</strong> 5 células con trisomía 8.</li>
        <li><strong>46,XX[15]:</strong> 15 células con cariotipo femenino normal.</li>
      </ul>

      <p>El mosaicismo puede originarse por errores mitóticos postcigóticos, como no disyunción mitótica o pérdida cromosómica en divisiones tempranas.</p>
    `,
    clave:
      "La barra “/” separa líneas celulares distintas.",
    errorComun:
      "Interpretar esto como dos personas diferentes. Es un mismo individuo con dos líneas celulares."
  },

  {
    id: "tp1-cito-p3-a",
    problema: "Problema 3",
    inciso: "a",
    tema: "Diagnóstico prenatal",
    pregunta: "¿Cuáles son las principales indicaciones de diagnóstico citogenético prenatal?",
    respuesta: `
      <ul>
        <li>Edad materna avanzada.</li>
        <li>Hijo previo con anomalía cromosómica.</li>
        <li>Progenitor portador de anomalía cromosómica balanceada.</li>
        <li>Marcadores ecográficos alterados.</li>
        <li>Screening prenatal positivo.</li>
        <li>Abortos espontáneos recurrentes.</li>
        <li>Antecedentes familiares de cromosomopatía.</li>
      </ul>
    `,
    clave:
      "Prenatal se indica cuando hay riesgo aumentado de anomalía cromosómica fetal.",
    errorComun:
      "Confundir screening con diagnóstico. El screening estima riesgo; el diagnóstico confirma."
  },

  {
    id: "tp1-cito-p3-b",
    problema: "Problema 3",
    inciso: "b",
    tema: "Fibrosis quística",
    pregunta: "¿Está indicado estudio citogenético prenatal si una pareja tuvo un hijo con fibrosis quística?",
    respuesta: `
      <p>No como estudio principal.</p>

      <p>La fibrosis quística es una enfermedad monogénica causada por variantes en el gen <strong>CFTR</strong>. Por lo tanto, corresponde estudio molecular dirigido al gen o a las variantes familiares conocidas.</p>

      <p>El cariotipo no es la técnica adecuada para detectar mutaciones puntuales o pequeñas variantes en CFTR.</p>
    `,
    clave:
      "Fibrosis quística = estudio molecular, no citogenético convencional.",
    errorComun:
      "Creer que todo lo genético se estudia con cariotipo."
  },

  {
    id: "tp1-cito-p3-c",
    problema: "Problema 3",
    inciso: "c",
    tema: "Clasificación de anomalías cromosómicas",
    pregunta: "¿Cómo se clasifican las anomalías cromosómicas?",
    respuesta: `
      <ul>
        <li><strong>Numéricas:</strong> alteran el número de cromosomas. Ej: trisomía 21, monosomía X.</li>
        <li><strong>Estructurales:</strong> alteran la organización del cromosoma. Ej: deleciones, duplicaciones, inversiones, translocaciones.</li>
        <li><strong>Autosómicas:</strong> afectan autosomas.</li>
        <li><strong>Gonosómicas:</strong> afectan cromosomas sexuales.</li>
        <li><strong>Balanceadas:</strong> no hay pérdida ni ganancia neta de material genético.</li>
        <li><strong>Desbalanceadas:</strong> hay pérdida o ganancia de material genético.</li>
      </ul>
    `,
    clave:
      "La clasificación más útil combina tipo de alteración y si hay o no desequilibrio de material genético.",
    errorComun:
      "Asumir que balanceada significa irrelevante. Puede ser relevante para reproducción."
  },

  {
    id: "tp1-cito-p4-a",
    problema: "Problema 4",
    inciso: "a",
    tema: "Abortos recurrentes",
    pregunta: "¿Qué anomalías pueden explicar abortos recurrentes en una pareja fenotípicamente normal?",
    respuesta: `
      <p>Las principales sospechas son anomalías estructurales balanceadas en alguno de los progenitores.</p>

      <ul>
        <li>Translocaciones recíprocas balanceadas.</li>
        <li>Translocaciones robertsonianas balanceadas.</li>
        <li>Inversiones pericéntricas o paracéntricas.</li>
      </ul>

      <p>El portador puede ser sano porque no pierde ni gana material genético. Sin embargo, durante la meiosis puede generar gametos desbalanceados, lo que aumenta el riesgo de abortos o descendencia afectada.</p>
    `,
    clave:
      "Fenotipo normal + abortos recurrentes = pensar en portador balanceado.",
    errorComun:
      "Descartar causa cromosómica porque los padres son sanos."
  },

  {
    id: "tp1-cito-p4-b",
    problema: "Problema 4",
    inciso: "b",
    tema: "Diagnóstico preimplantacional",
    pregunta: "¿Qué alternativa reproductiva puede considerarse en una pareja con anomalía balanceada y abortos recurrentes?",
    respuesta: `
      <p>Puede considerarse fertilización in vitro con diagnóstico genético preimplantacional.</p>

      <p>Permite analizar embriones antes de transferirlos, buscando seleccionar aquellos sin desequilibrios cromosómicos relevantes.</p>

      <p>No elimina totalmente el riesgo, pero puede reducir la probabilidad de transferir embriones cromosómicamente desbalanceados.</p>
    `,
    clave:
      "El diagnóstico preimplantacional se usa antes de transferir el embrión.",
    errorComun:
      "Confundir diagnóstico prenatal con preimplantacional. Uno ocurre durante el embarazo; el otro antes de la implantación."
  },

  {
    id: "tp1-cito-p5-a",
    problema: "Problema 5",
    inciso: "a",
    tema: "Síndrome de Down",
    pregunta: "¿Cuáles son los mecanismos cromosómicos del síndrome de Down?",
    respuesta: `
      <ul>
        <li><strong>Trisomía libre 21:</strong> forma más frecuente, generalmente por no disyunción meiótica.</li>
        <li><strong>Translocación robertsoniana:</strong> material extra del cromosoma 21 unido a otro acrocéntrico.</li>
        <li><strong>Mosaicismo:</strong> coexistencia de una línea celular normal y otra con trisomía 21.</li>
      </ul>

      <p>El mecanismo debe determinarse porque modifica el consejo genético.</p>
    `,
    clave:
      "No basta decir “Down”; hay que saber si es libre, translocación o mosaico.",
    errorComun:
      "No estudiar a los padres cuando hay Down por translocación."
  },

  {
    id: "tp1-cito-p5-b",
    problema: "Problema 5",
    inciso: "b",
    tema: "Consejo genético",
    pregunta: "¿Por qué es importante estudiar el cariotipo parental en algunos casos de síndrome de Down?",
    respuesta: `
      <p>Es importante cuando el niño tiene síndrome de Down por translocación robertsoniana.</p>

      <p>Uno de los padres puede ser portador balanceado. Aunque sea fenotípicamente sano, puede producir gametos desbalanceados con material extra del cromosoma 21.</p>

      <p>Esto aumenta el riesgo de recurrencia en futuros embarazos.</p>
    `,
    clave:
      "Down por translocación obliga a pensar en portador balanceado parental.",
    errorComun:
      "Aplicar el mismo riesgo de recurrencia a todos los tipos de Down."
  },

  {
    id: "tp1-cito-p6-a",
    problema: "Problema 6",
    inciso: "a",
    tema: "Microdeleciones",
    pregunta: "¿Qué son los síndromes de microdeleción?",
    respuesta: `
      <p>Son síndromes causados por pérdidas pequeñas de material cromosómico que pueden no observarse en cariotipo convencional.</p>

      <p>Estas pérdidas afectan regiones con genes clínicamente importantes y producen fenotipos reconocibles.</p>

      <ul>
        <li><strong>Cri du chat:</strong> deleción 5p.</li>
        <li><strong>Williams:</strong> deleción 7q11.23.</li>
        <li><strong>DiGeorge/velocardiofacial:</strong> deleción 22q11.2.</li>
      </ul>
    `,
    clave:
      "Microdeleción = puede ser invisible al cariotipo convencional.",
    errorComun:
      "Descartar microdeleción porque el cariotipo salió normal."
  },

  {
    id: "tp1-cito-p6-b",
    problema: "Problema 6",
    inciso: "b",
    tema: "FISH y microdeleciones",
    pregunta: "¿Cómo puede diagnosticarse una microdeleción mediante FISH?",
    respuesta: `
      <p>Se usa una sonda de secuencia única complementaria a la región sospechada.</p>

      <p>Si la región está presente, aparece señal fluorescente. Si está delecionada, falta la señal en uno de los cromosomas homólogos.</p>

      <p>Esto permite confirmar microdeleciones específicas, como 22q11.2 en DiGeorge.</p>
    `,
    clave:
      "FISH requiere sospecha o región blanco. No busca todo al azar.",
    errorComun:
      "Creer que FISH detecta cualquier alteración genética sin hipótesis previa."
  },

  {
    id: "tp1-cito-p7-a",
    problema: "Problema 7",
    inciso: "a",
    tema: "Impronta genómica",
    pregunta: "¿Qué es la impronta genómica?",
    respuesta: `
      <p>Es un mecanismo epigenético por el cual ciertos genes se expresan de manera diferente según si fueron heredados del padre o de la madre.</p>

      <p>Se relaciona principalmente con metilación del ADN y modificaciones de histonas.</p>

      <p>La impronta se borra y se restablece durante la formación de gametos, según el sexo del individuo que transmite el cromosoma.</p>
    `,
    clave:
      "La impronta depende del origen parental del alelo.",
    errorComun:
      "Pensar que madre y padre siempre aportan genes equivalentes en expresión."
  },

  {
    id: "tp1-cito-p7-b",
    problema: "Problema 7",
    inciso: "b",
    tema: "Prader-Willi y Angelman",
    pregunta: "¿Por qué alteraciones en 15q11-q13 pueden causar Prader-Willi o Angelman?",
    respuesta: `
      <p>Porque la región 15q11-q13 contiene genes sometidos a impronta genómica.</p>

      <ul>
        <li><strong>Prader-Willi:</strong> pérdida de expresión de genes paternos.</li>
        <li><strong>Angelman:</strong> pérdida de expresión materna, especialmente de UBE3A en neuronas.</li>
      </ul>

      <p>La región puede ser la misma, pero el síndrome depende de si se afecta la copia materna o paterna.</p>
    `,
    clave:
      "Prader-Willi = problema de la copia paterna. Angelman = problema de la copia materna.",
    errorComun:
      "Pensar que una misma deleción siempre produce el mismo síndrome sin importar origen parental."
  }
],

tecnicas_mol: [
  {
    id: "tp2-tm-p1-a",
    problema: "Problema 1",
    inciso: "a",
    tema: "Técnicas de transferencia",
    pregunta: "¿Para qué se utiliza Southern, Northern y Western blot?",
    respuesta: `
      <ul>
        <li><strong>Southern blot:</strong> detecta secuencias específicas de ADN. Sirve para estudiar deleciones, duplicaciones, RFLP o presencia/ausencia de un gen.</li>
        <li><strong>Northern blot:</strong> detecta ARN, principalmente ARNm. Permite saber si un gen se transcribe y evaluar el tamaño del transcripto.</li>
        <li><strong>Western blot:</strong> detecta proteínas. Permite estudiar presencia, ausencia, tamaño o alteración de una proteína específica.</li>
      </ul>
    `,
    clave: "Southern = ADN, Northern = ARN, Western = proteína.",
    errorComun: "Confundir Northern con proteínas o Western con ARN."
  },

  {
    id: "tp2-tm-p1-b",
    problema: "Problema 1",
    inciso: "b",
    tema: "Enzimas de restricción",
    pregunta: "¿Qué son las enzimas de restricción y qué características tienen?",
    respuesta: `
      <p>Son endonucleasas bacterianas que cortan el ADN en secuencias específicas, muchas veces palindrómicas.</p>

      <ul>
        <li>Reconocen secuencias cortas y definidas.</li>
        <li>Generan fragmentos de ADN de distintos tamaños.</li>
        <li>Son parte del sistema de defensa bacteriana contra ADN extraño.</li>
        <li>El ADN bacteriano propio suele estar metilado y por eso no es cortado.</li>
        <li>Se usan en técnicas como Southern blot y PCR-RFLP.</li>
      </ul>
    `,
    clave: "Restricción = corte específico del ADN.",
    errorComun: "Pensar que las enzimas de restricción amplifican ADN. Eso lo hace la PCR."
  },

  {
    id: "tp2-tm-p1-c",
    problema: "Problema 1",
    inciso: "c",
    tema: "Comparación de blot",
    pregunta: "Compare Southern, Northern y Western blot según muestra, procesamiento y detección.",
    respuesta: `
      <ul>
        <li><strong>Southern:</strong> parte de ADN. Se digiere con enzimas de restricción, se separa en gel, se transfiere a membrana y se detecta con sonda de ADN marcada.</li>
        <li><strong>Northern:</strong> parte de ARN. Se separa en gel desnaturalizante, se transfiere a membrana y se detecta con sonda complementaria.</li>
        <li><strong>Western:</strong> parte de proteínas. Se separa por electroforesis, se transfiere a membrana y se detecta con anticuerpos específicos.</li>
      </ul>

      <p>En los tres casos existe una lógica común: separación, transferencia y detección específica.</p>
    `,
    clave: "La diferencia central está en la molécula estudiada: ADN, ARN o proteína.",
    errorComun: "Usar cualquier tejido para Northern o Western. Debe ser un tejido donde se exprese el gen o proteína."
  },

  {
    id: "tp2-tm-p2-a",
    problema: "Problema 2",
    inciso: "a",
    tema: "Sondas en Southern",
    pregunta: "¿Qué tipos de sondas pueden utilizarse en Southern blot?",
    respuesta: `
      <p>Se pueden utilizar sondas marcadas complementarias a la secuencia de interés.</p>

      <ul>
        <li><strong>Sondas de ADN clonado:</strong> detectan regiones grandes o genes completos.</li>
        <li><strong>Oligonucleótidos específicos de alelo:</strong> permiten detectar variantes puntuales conocidas.</li>
        <li><strong>Sondas marcadas radioactivas, fluorescentes o quimioluminiscentes:</strong> permiten visualizar la hibridación.</li>
      </ul>
    `,
    clave: "La sonda debe ser complementaria a la región que se quiere detectar.",
    errorComun: "Creer que Southern detecta cualquier mutación puntual sin usar una sonda específica."
  },

  {
    id: "tp2-tm-p2-b-i",
    problema: "Problema 2",
    inciso: "b.i",
    tema: "β-talasemia y Southern",
    pregunta: "¿Qué mutaciones de β-globina pueden detectarse con Southern blot usando sondas estándar?",
    respuesta: `
      <p>Southern blot puede detectar alteraciones que cambian el tamaño o presencia de fragmentos de ADN.</p>

      <ul>
        <li>Grandes deleciones.</li>
        <li>Duplicaciones.</li>
        <li>Reordenamientos que alteren fragmentos de restricción.</li>
        <li>Algunos RFLP asociados.</li>
      </ul>

      <p>En cambio, las mutaciones puntuales pequeñas no se detectan bien con sondas estándar, salvo que modifiquen un sitio de restricción o se use una sonda alelo-específica.</p>
    `,
    clave: "Southern estándar detecta mejor cambios grandes que mutaciones puntuales.",
    errorComun: "Responder que Southern siempre detecta mutaciones puntuales."
  },

  {
    id: "tp2-tm-p2-b-ii",
    problema: "Problema 2",
    inciso: "b.ii",
    tema: "Oligonucleótidos específicos de alelo",
    pregunta: "¿Qué son los oligonucleótidos específicos de alelo y qué detectan?",
    respuesta: `
      <p>Son sondas cortas diseñadas para hibridar solo si está presente una secuencia específica, por ejemplo una variante puntual determinada.</p>

      <p>Permiten distinguir entre alelo normal y alelo mutado cuando la diferencia es pequeña, como una sustitución de una base.</p>
    `,
    clave: "Sirven para mutaciones conocidas y específicas.",
    errorComun: "Usarlos como método de búsqueda amplia sin conocer la variante."
  },

  {
    id: "tp2-tm-p2-b-iii",
    problema: "Problema 2",
    inciso: "b.iii",
    tema: "Transcripción génica",
    pregunta: "Si el gen de β-globina está presente, ¿cómo confirmaría que se transcribe?",
    respuesta: `
      <p>Para confirmar transcripción se debe estudiar ARN.</p>

      <ul>
        <li><strong>Northern blot:</strong> permite detectar ARNm y su tamaño.</li>
        <li><strong>RT-PCR:</strong> convierte ARN en ADNc y luego amplifica la región de interés.</li>
        <li><strong>qRT-PCR:</strong> permite además cuantificar expresión.</li>
      </ul>

      <p>Debe usarse un tejido donde el gen se exprese, como células eritroides.</p>
    `,
    clave: "Presencia del gen ≠ expresión del gen.",
    errorComun: "Usar Southern para saber si el gen se transcribe. Southern estudia ADN."
  },

  {
    id: "tp2-tm-p3-a",
    problema: "Problema 3",
    inciso: "a",
    tema: "PCR",
    pregunta: "¿Qué es la PCR y cuáles son sus componentes?",
    respuesta: `
      <p>La PCR permite amplificar una región específica de ADN mediante ciclos repetidos de temperatura.</p>

      <ul>
        <li>ADN molde.</li>
        <li>Primers o cebadores.</li>
        <li>dNTPs.</li>
        <li>ADN polimerasa termoestable, como Taq polimerasa.</li>
        <li>Buffer y MgCl₂.</li>
      </ul>
    `,
    clave: "PCR amplifica una región específica determinada por los primers.",
    errorComun: "Pensar que PCR amplifica todo el genoma."
  },

  {
    id: "tp2-tm-p3-b",
    problema: "Problema 3",
    inciso: "b",
    tema: "Ciclos de PCR",
    pregunta: "Explique las etapas de un ciclo de PCR.",
    respuesta: `
      <ol>
        <li><strong>Desnaturalización:</strong> separación de las dos hebras de ADN por alta temperatura.</li>
        <li><strong>Alineamiento:</strong> unión de primers a las secuencias complementarias.</li>
        <li><strong>Extensión:</strong> síntesis de nuevas cadenas por la polimerasa termoestable.</li>
      </ol>

      <p>Estos ciclos se repiten muchas veces, generando amplificación exponencial del fragmento blanco.</p>
    `,
    clave: "Desnaturalización → alineamiento → extensión.",
    errorComun: "Confundir alineamiento con extensión."
  },

  {
    id: "tp2-tm-p3-c",
    problema: "Problema 3",
    inciso: "c",
    tema: "Variantes de PCR",
    pregunta: "¿Qué variantes de PCR existen y para qué sirven?",
    respuesta: `
      <ul>
        <li><strong>RT-PCR:</strong> estudia ARN convertido a ADNc.</li>
        <li><strong>qPCR:</strong> permite cuantificar en tiempo real usando fluorescencia.</li>
        <li><strong>PCR-RFLP:</strong> combina PCR con enzimas de restricción para detectar variantes que cambian sitios de corte.</li>
        <li><strong>PCR multiplex:</strong> amplifica varias regiones en una misma reacción.</li>
      </ul>
    `,
    clave: "La variante se elige según la pregunta: ADN, ARN, cantidad, varios blancos o sitios de restricción.",
    errorComun: "Decir RT-PCR cuando se quiere decir qPCR. No son lo mismo."
  },

  {
    id: "tp2-tm-p4-a",
    problema: "Problema 4",
    inciso: "a",
    tema: "Factor V Leiden",
    pregunta: "¿Cómo puede detectarse una variante como Factor V Leiden mediante PCR-RFLP?",
    respuesta: `
      <p>Primero se amplifica por PCR la región que contiene la variante. Luego el producto se digiere con una enzima de restricción.</p>

      <p>Si la variante crea o elimina un sitio de corte, el patrón de fragmentos cambia. Al correrlos en gel, se puede diferenciar:</p>

      <ul>
        <li>Homocigota normal.</li>
        <li>Heterocigota.</li>
        <li>Homocigota mutado.</li>
      </ul>
    `,
    clave: "PCR-RFLP detecta variantes que modifican sitios de restricción.",
    errorComun: "Creer que toda mutación puntual puede detectarse por PCR-RFLP. Solo si afecta un sitio de corte."
  },

  {
    id: "tp2-tm-p5-a",
    problema: "Problema 5",
    inciso: "a",
    tema: "RT-PCR cuantitativa",
    pregunta: "¿Qué es RT-PCR cuantitativa y para qué se usa?",
    respuesta: `
      <p>La RT-PCR cuantitativa combina transcripción reversa y PCR en tiempo real.</p>

      <ol>
        <li>Se extrae ARN.</li>
        <li>Se convierte en ADNc mediante transcriptasa reversa.</li>
        <li>Se amplifica y cuantifica mediante fluorescencia.</li>
      </ol>

      <p>Se usa para medir niveles de expresión génica o carga viral si el material inicial es ARN.</p>
    `,
    clave: "RT = parte de ARN. qPCR = cuantifica en tiempo real.",
    errorComun: "Pensar que RT significa real time. En este contexto RT es reverse transcription."
  },

  {
    id: "tp2-tm-p6-a",
    problema: "Problema 6",
    inciso: "a",
    tema: "CGH / array-CGH",
    pregunta: "¿Qué es la hibridación genómica comparativa y qué detecta?",
    respuesta: `
      <p>La CGH compara ADN de un paciente con ADN control para detectar diferencias en cantidad de material genético.</p>

      <ul>
        <li>Detecta deleciones.</li>
        <li>Detecta duplicaciones.</li>
        <li>Detecta ganancias o pérdidas cromosómicas.</li>
      </ul>

      <p>En array-CGH, la comparación se realiza sobre un microarreglo con muchas sondas distribuidas en el genoma.</p>
    `,
    clave: "CGH detecta cambios de dosis genética.",
    errorComun: "Esperar que CGH detecte translocaciones balanceadas. Si no cambia la cantidad de ADN, puede no detectarlas."
  },

  {
    id: "tp2-tm-p6-b",
    problema: "Problema 6",
    inciso: "b",
    tema: "Limitaciones de CGH",
    pregunta: "¿Por qué CGH no detecta bien reordenamientos balanceados?",
    respuesta: `
      <p>Porque los reordenamientos balanceados no implican pérdida ni ganancia neta de material genético.</p>

      <p>CGH compara cantidad relativa de ADN entre paciente y control. Si la cantidad total se conserva, la técnica puede no mostrar alteraciones.</p>
    `,
    clave: "CGH ve dosis, no ubicación.",
    errorComun: "Creer que más resolución significa detectar cualquier tipo de alteración."
  },

  {
    id: "tp2-tm-p7-a",
    problema: "Problema 7",
    inciso: "a",
    tema: "Secuenciación Sanger",
    pregunta: "Explique el principio de la secuenciación Sanger.",
    respuesta: `
      <p>Sanger utiliza didesoxinucleótidos terminadores de cadena.</p>

      <p>Cuando se incorpora un ddNTP, la síntesis se detiene porque falta el grupo necesario para agregar el siguiente nucleótido.</p>

      <p>Esto genera fragmentos de distintos tamaños que permiten reconstruir la secuencia.</p>
    `,
    clave: "Sanger = ddNTPs terminadores de cadena.",
    errorComun: "Confundir Sanger con NGS. Sanger no secuencia millones de fragmentos en paralelo."
  },

  {
    id: "tp2-tm-p7-b",
    problema: "Problema 7",
    inciso: "b",
    tema: "NGS",
    pregunta: "¿Qué diferencia existe entre Sanger y NGS?",
    respuesta: `
      <ul>
        <li><strong>Sanger:</strong> útil para estudiar una región específica con alta precisión.</li>
        <li><strong>NGS:</strong> secuencia millones de fragmentos en paralelo.</li>
      </ul>

      <p>NGS permite estudiar paneles multigénicos, exoma o genoma completo, siendo muy útil cuando hay heterogeneidad genética.</p>
    `,
    clave: "Sanger = dirigido. NGS = masivo/paralelo.",
    errorComun: "Pedir Sanger de un solo gen cuando la enfermedad puede deberse a decenas de genes distintos."
  },

  {
    id: "tp2-tm-p7-c",
    problema: "Problema 7",
    inciso: "c",
    tema: "Secuenciación de ARN",
    pregunta: "¿Para qué puede utilizarse la secuenciación de ARN?",
    respuesta: `
      <p>La secuenciación de ARN permite estudiar el transcriptoma, es decir, qué genes se están expresando y en qué cantidad.</p>

      <ul>
        <li>Evaluar expresión génica.</li>
        <li>Detectar transcritos anómalos.</li>
        <li>Identificar fusiones génicas.</li>
        <li>Estudiar splicing alternativo.</li>
      </ul>
    `,
    clave: "ARN-seq estudia expresión y transcritos, no solo secuencia de ADN.",
    errorComun: "Usar ARN-seq como si fuera lo mismo que secuenciar ADN genómico."
  }
],

herencia_mendel: [
  {
    id: "hm-tp-p1-a",
    problema: "Problema 1",
    inciso: "a",
    tema: "Herencia autosómica dominante",
    pregunta:
      "¿Cuáles son las características clásicas de una enfermedad autosómica dominante?",
    respuesta: `
      <ul>
        <li>Una sola copia alterada basta para producir enfermedad.</li>
        <li>La transmisión suele ser vertical.</li>
        <li>Afecta hombres y mujeres por igual.</li>
        <li>Existe transmisión padre-hijo.</li>
        <li>Los afectados suelen ser heterocigotos.</li>
        <li>Cada hijo de un afectado heterocigoto tiene 50% de riesgo.</li>
      </ul>

      <p>En general, los individuos sanos no transmiten la enfermedad.</p>
    `,
    clave:
      "AD = transmisión vertical + 50% de riesgo + ambos sexos afectados.",
    errorComun:
      "Confundir AD con XR solo porque hay muchos hombres afectados en una familia pequeña."
  },

  {
    id: "hm-tp-p1-b",
    problema: "Problema 1",
    inciso: "b",
    tema: "Mutaciones de novo",
    pregunta:
      "¿Cómo puede explicarse una enfermedad autosómica dominante sin antecedentes familiares?",
    respuesta: `
      <p>Puede deberse a una mutación de novo.</p>

      <p>Estas variantes aparecen por primera vez en el individuo afectado, generalmente durante formación de gametos o en etapas embrionarias tempranas.</p>

      <p>Ejemplos clásicos:</p>

      <ul>
        <li>Acondroplasia.</li>
        <li>Neurofibromatosis tipo 1.</li>
      </ul>
    `,
    clave:
      "Ausencia de antecedentes NO descarta enfermedad AD.",
    errorComun:
      "Asumir que toda enfermedad dominante debe tener historia familiar."
  },

  {
    id: "hm-tp-p2-a",
    problema: "Problema 2",
    inciso: "a",
    tema: "Herencia autosómica recesiva",
    pregunta:
      "¿Cuáles son las características típicas de una enfermedad autosómica recesiva?",
    respuesta: `
      <ul>
        <li>Se requieren dos variantes patogénicas para producir enfermedad.</li>
        <li>Los padres suelen ser portadores sanos.</li>
        <li>Puede saltar generaciones.</li>
        <li>Afecta hombres y mujeres por igual.</li>
        <li>La consanguinidad aumenta frecuencia.</li>
      </ul>

      <p>Cuando ambos padres son heterocigotos:</p>

      <ul>
        <li>25% afectado.</li>
        <li>50% portador.</li>
        <li>25% sano.</li>
      </ul>
    `,
    clave:
      "AR = padres sanos + hijos afectados + riesgo 25%.",
    errorComun:
      "Creer que los portadores presentan necesariamente síntomas."
  },

  {
    id: "hm-tp-p2-b",
    problema: "Problema 2",
    inciso: "b",
    tema: "Consanguinidad",
    pregunta:
      "¿Por qué la consanguinidad aumenta enfermedades autosómicas recesivas?",
    respuesta: `
      <p>La consanguinidad aumenta la probabilidad de que ambos progenitores compartan variantes heredadas desde un ancestro común.</p>

      <p>Esto aumenta la probabilidad de que un hijo herede ambas copias alteradas del mismo gen.</p>
    `,
    clave:
      "Consanguinidad aumenta homocigosis.",
    errorComun:
      "Pensar que consanguinidad crea mutaciones nuevas."
  },

  {
    id: "hm-tp-p3-a",
    problema: "Problema 3",
    inciso: "a",
    tema: "Ligada al X recesiva",
    pregunta:
      "¿Cuáles son las características clásicas de herencia ligada al X recesiva?",
    respuesta: `
      <ul>
        <li>Predominio de hombres afectados.</li>
        <li>No existe transmisión padre-hijo.</li>
        <li>Las mujeres heterocigotas suelen ser portadoras.</li>
        <li>Las hijas de un afectado son portadoras obligadas.</li>
      </ul>

      <p>Esto ocurre porque los hombres poseen una sola copia del cromosoma X.</p>
    `,
    clave:
      "XR = hombres afectados + no hay transmisión padre-hijo.",
    errorComun:
      "Confundir ausencia de transmisión padre-hijo con herencia mitocondrial."
  },

  {
    id: "hm-tp-p3-b",
    problema: "Problema 3",
    inciso: "b",
    tema: "Riesgo XR",
    pregunta:
      "Una mujer portadora de hemofilia tiene hijos con un hombre sano. ¿Cuál es el riesgo para sus hijos?",
    respuesta: `
      <ul>
        <li>50% de hijos hombres afectados.</li>
        <li>50% de hijos hombres sanos.</li>
        <li>50% de hijas portadoras.</li>
        <li>50% de hijas sanas no portadoras.</li>
      </ul>
    `,
    clave:
      "Las mujeres transmiten el cromosoma X a hijos e hijas.",
    errorComun:
      "Decir que todos los hijos hombres estarán afectados."
  },

  {
    id: "hm-tp-p4-a",
    problema: "Problema 4",
    inciso: "a",
    tema: "Ligada al X dominante",
    pregunta:
      "¿Qué característica distingue una enfermedad ligada al X dominante?",
    respuesta: `
      <p>La característica más importante es que un hombre afectado transmite la enfermedad a TODAS sus hijas y a NINGUNO de sus hijos hombres.</p>

      <p>Esto ocurre porque transmite su cromosoma X exclusivamente a las hijas.</p>
    `,
    clave:
      "XD = todas las hijas afectadas desde padre afectado.",
    errorComun:
      "Pensar que existe transmisión padre-hijo."
  },

  {
    id: "hm-tp-p5-a",
    problema: "Problema 5",
    inciso: "a",
    tema: "Herencia mitocondrial",
    pregunta:
      "¿Cuáles son las características clásicas de herencia mitocondrial?",
    respuesta: `
      <ul>
        <li>La transmisión es exclusivamente materna.</li>
        <li>Tanto hombres como mujeres pueden afectarse.</li>
        <li>Un hombre afectado NO transmite la enfermedad.</li>
        <li>Todos los hijos de una mujer afectada pueden heredar la variante.</li>
      </ul>

      <p>La severidad puede variar por heteroplasmia.</p>
    `,
    clave:
      "Mitocondrial = solo transmite la madre.",
    errorComun:
      "Pensar que un hombre afectado transmite a sus hijos."
  },

  {
    id: "hm-tp-p5-b",
    problema: "Problema 5",
    inciso: "b",
    tema: "Heteroplasmia",
    pregunta:
      "¿Qué es heteroplasmia y por qué es importante?",
    respuesta: `
      <p>La heteroplasmia corresponde a coexistencia de mitocondrias normales y mutadas dentro de una célula.</p>

      <p>La proporción de mitocondrias alteradas influye directamente en severidad clínica y variabilidad fenotípica.</p>
    `,
    clave:
      "Más carga mutada = mayor severidad potencial.",
    errorComun:
      "Creer que todas las células tienen igual proporción de mitocondrias mutadas."
  },

  {
    id: "hm-tp-p6-a",
    problema: "Problema 6",
    inciso: "a",
    tema: "Penetrancia",
    pregunta:
      "¿Qué es penetrancia incompleta?",
    respuesta: `
      <p>La penetrancia corresponde a la proporción de individuos con un genotipo específico que manifiestan el fenotipo esperado.</p>

      <p>En penetrancia incompleta algunos portadores de la variante no desarrollan enfermedad clínica.</p>

      <p>Esto puede dificultar reconocimiento del patrón hereditario.</p>
    `,
    clave:
      "Penetrancia = presencia o ausencia del fenotipo.",
    errorComun:
      "Confundir penetrancia con severidad clínica."
  },

  {
    id: "hm-tp-p6-b",
    problema: "Problema 6",
    inciso: "b",
    tema: "Expresividad variable",
    pregunta:
      "¿Qué es expresividad variable?",
    respuesta: `
      <p>Corresponde a diferencias en intensidad o severidad clínica entre individuos con la misma enfermedad genética.</p>

      <p>Dos individuos con igual variante pueden presentar manifestaciones muy distintas.</p>

      <p>Ejemplos clásicos:</p>

      <ul>
        <li>Neurofibromatosis tipo 1.</li>
        <li>Síndrome de Marfan.</li>
      </ul>
    `,
    clave:
      "Expresividad = gravedad/intensidad del fenotipo.",
    errorComun:
      "Decir que expresividad significa que algunos pacientes no presentan síntomas."
  },

  {
    id: "hm-tp-p7-a",
    problema: "Problema 7",
    inciso: "a",
    tema: "Anticipación",
    pregunta:
      "¿Qué es anticipación genética?",
    respuesta: `
      <p>La anticipación corresponde a aparición más precoz o mayor severidad de enfermedad en generaciones sucesivas.</p>

      <p>Se relaciona clásicamente con expansión de repeticiones trinucleotídicas.</p>

      <p>Ejemplos:</p>

      <ul>
        <li>Huntington.</li>
        <li>Distrofia miotónica.</li>
        <li>Síndrome X frágil.</li>
      </ul>
    `,
    clave:
      "Anticipación = empeora o aparece antes en nuevas generaciones.",
    errorComun:
      "Confundir anticipación con penetrancia."
  },

  {
    id: "hm-tp-p8-a",
    problema: "Problema 8",
    inciso: "a",
    tema: "Impronta genómica",
    pregunta:
      "¿Qué es impronta genómica?",
    respuesta: `
      <p>Es un fenómeno epigenético donde la expresión génica depende del origen parental del alelo.</p>

      <p>La misma región cromosómica puede producir enfermedades distintas dependiendo de si la alteración proviene del padre o de la madre.</p>
    `,
    clave:
      "Impronta depende del origen parental.",
    errorComun:
      "Pensar que madre y padre siempre expresan genes de igual manera."
  },

  {
    id: "hm-tp-p8-b",
    problema: "Problema 8",
    inciso: "b",
    tema: "Prader-Willi y Angelman",
    pregunta:
      "¿Por qué alteraciones en 15q11-q13 pueden causar Prader-Willi o Angelman?",
    respuesta: `
      <ul>
        <li>Prader-Willi: pérdida de expresión paterna.</li>
        <li>Angelman: pérdida de expresión materna.</li>
      </ul>

      <p>La región cromosómica es similar, pero el fenotipo cambia según origen parental del alelo alterado.</p>
    `,
    clave:
      "Prader = paterno; Angelman = materno.",
    errorComun:
      "Pensar que ambos síndromes son idénticos porque afectan misma región."
  },

  {
    id: "hm-tp-p9-a",
    problema: "Problema 9",
    inciso: "a",
    tema: "Heterogeneidad genética",
    pregunta:
      "¿Qué es heterogeneidad genética?",
    respuesta: `
      <p>Un mismo fenotipo puede deberse a alteraciones en distintos genes.</p>

      <p>Puede clasificarse en:</p>

      <ul>
        <li>Heterogeneidad alélica: distintas variantes en un mismo gen.</li>
        <li>Heterogeneidad de locus: genes distintos producen el mismo fenotipo.</li>
      </ul>
    `,
    clave:
      "Heterogeneidad = múltiples causas genéticas para un mismo cuadro.",
    errorComun:
      "Creer que una enfermedad siempre corresponde a un único gen."
  },

  {
    id: "hm-tp-p10-a",
    problema: "Problema 10",
    inciso: "a",
    tema: "Consejo genético",
    pregunta:
      "¿Cuál es el objetivo del consejo genético?",
    respuesta: `
      <p>El consejo genético busca entregar información sobre:</p>

      <ul>
        <li>Diagnóstico.</li>
        <li>Patrón de herencia.</li>
        <li>Riesgo de recurrencia.</li>
        <li>Opciones diagnósticas y reproductivas.</li>
        <li>Impacto familiar y psicológico.</li>
      </ul>

      <p>Debe ser no directivo y permitir decisiones informadas.</p>
    `,
    clave:
      "Consejo genético = informar, orientar y apoyar.",
    errorComun:
      "Confundir consejo genético con decidir por la familia."
  }
],

genetica_poblaciones: [
  {
    id: "gp-tp-p1-a",
    problema: "Problema 1",
    inciso: "a",
    tema: "Hardy-Weinberg",
    pregunta:
      "Explique el principio de Hardy-Weinberg y su importancia en genética médica.",
    respuesta: `
      <p>El principio de Hardy-Weinberg establece que las frecuencias alélicas y genotípicas permanecen constantes entre generaciones si no actúan fuerzas evolutivas.</p>

      <p>Corresponde a un modelo teórico de equilibrio genético poblacional.</p>

      <p>Es importante porque permite:</p>

      <ul>
        <li>Estimar frecuencia de portadores.</li>
        <li>Calcular riesgos poblacionales.</li>
        <li>Analizar enfermedades autosómicas recesivas.</li>
        <li>Detectar desviaciones evolutivas.</li>
      </ul>
    `,
    clave:
      "Hardy-Weinberg = modelo teórico de equilibrio poblacional.",
    errorComun:
      "Pensar que todas las poblaciones reales cumplen perfectamente el equilibrio."
  },

  {
    id: "gp-tp-p1-b",
    problema: "Problema 1",
    inciso: "b",
    tema: "Ecuaciones Hardy-Weinberg",
    pregunta:
      "¿Qué representan p, q, p², 2pq y q²?",
    respuesta: `
      <ul>
        <li>p = frecuencia del alelo dominante.</li>
        <li>q = frecuencia del alelo recesivo.</li>
        <li>p² = frecuencia de homocigotos dominantes.</li>
        <li>2pq = frecuencia de heterocigotos.</li>
        <li>q² = frecuencia de homocigotos recesivos.</li>
      </ul>

      <p>Ecuaciones:</p>

      <ul>
        <li>p + q = 1</li>
        <li>p² + 2pq + q² = 1</li>
      </ul>
    `,
    clave:
      "2pq = portadores.",
    errorComun:
      "Confundir q² con q."
  },

  {
    id: "gp-tp-p2-a",
    problema: "Problema 2",
    inciso: "a",
    tema: "Cálculo Hardy-Weinberg",
    pregunta:
      "Una enfermedad autosómica recesiva afecta a 1/10.000 individuos. Calcule q, p y frecuencia de portadores.",
    respuesta: `
      <p>q² = 1/10.000 = 0.0001</p>

      <p>q = √0.0001 = 0.01</p>

      <p>p = 1 − 0.01 = 0.99</p>

      <p>Portadores:</p>

      <p>2pq = 2 × 0.99 × 0.01</p>

      <p>2pq = 0.0198 ≈ 2%</p>
    `,
    clave:
      "Siempre partir identificando q².",
    errorComun:
      "Usar directamente q² como frecuencia alélica."
  },

  {
    id: "gp-tp-p2-b",
    problema: "Problema 2",
    inciso: "b",
    tema: "Interpretación clínica",
    pregunta:
      "¿Por qué las enfermedades AR pueden ser frecuentes aunque existan pocos afectados?",
    respuesta: `
      <p>Porque los heterocigotos portadores suelen ser mucho más frecuentes que los afectados.</p>

      <p>La frecuencia de afectados corresponde a q², mientras que los portadores corresponden a 2pq.</p>

      <p>En enfermedades raras, 2pq suele ser considerablemente mayor que q².</p>
    `,
    clave:
      "Portadores >> afectados.",
    errorComun:
      "Pensar que pocos afectados implica pocos portadores."
  },

  {
    id: "gp-tp-p3-a",
    problema: "Problema 3",
    inciso: "a",
    tema: "Supuestos Hardy-Weinberg",
    pregunta:
      "Mencione los supuestos necesarios para mantener equilibrio Hardy-Weinberg.",
    respuesta: `
      <ul>
        <li>Población grande.</li>
        <li>Apareamiento aleatorio.</li>
        <li>Ausencia de mutación.</li>
        <li>Ausencia de selección natural.</li>
        <li>Ausencia de migración.</li>
        <li>Ausencia de deriva genética.</li>
      </ul>
    `,
    clave:
      "Si un supuesto se rompe, puede cambiar frecuencia alélica.",
    errorComun:
      "Olvidar tamaño poblacional."
  },

  {
    id: "gp-tp-p3-b",
    problema: "Problema 3",
    inciso: "b",
    tema: "Desequilibrio poblacional",
    pregunta:
      "¿Qué ocurre si una población no cumple los supuestos de Hardy-Weinberg?",
    respuesta: `
      <p>Las frecuencias alélicas pueden cambiar entre generaciones.</p>

      <p>Esto significa que la población sale del equilibrio genético.</p>

      <p>Las fuerzas evolutivas modifican la distribución genética poblacional.</p>
    `,
    clave:
      "Desequilibrio = cambio de frecuencias alélicas.",
    errorComun:
      "Creer que el equilibrio significa ausencia de enfermedades."
  },

  {
    id: "gp-tp-p4-a",
    problema: "Problema 4",
    inciso: "a",
    tema: "Consanguinidad",
    pregunta:
      "Explique cómo la consanguinidad modifica frecuencias genotípicas.",
    respuesta: `
      <p>La consanguinidad aumenta la probabilidad de heredar dos copias iguales de un alelo.</p>

      <p>Esto produce:</p>

      <ul>
        <li>Aumento de homocigosis.</li>
        <li>Disminución relativa de heterocigosis.</li>
        <li>Aumento de enfermedades autosómicas recesivas.</li>
      </ul>
    `,
    clave:
      "Consanguinidad aumenta homocigosis.",
    errorComun:
      "Pensar que consanguinidad crea mutaciones."
  },

  {
    id: "gp-tp-p5-a",
    problema: "Problema 5",
    inciso: "a",
    tema: "Deriva genética",
    pregunta:
      "¿Qué es deriva genética y en qué poblaciones tiene mayor efecto?",
    respuesta: `
      <p>La deriva genética corresponde a cambios aleatorios de frecuencias alélicas.</p>

      <p>Es especialmente importante en poblaciones pequeñas.</p>

      <p>Puede provocar:</p>

      <ul>
        <li>Pérdida de variabilidad genética.</li>
        <li>Fijación de alelos.</li>
        <li>Desaparición de alelos.</li>
      </ul>
    `,
    clave:
      "Deriva = azar.",
    errorComun:
      "Confundir deriva con selección natural."
  },

  {
    id: "gp-tp-p5-b",
    problema: "Problema 5",
    inciso: "b",
    tema: "Selección vs deriva",
    pregunta:
      "Diferencie deriva genética de selección natural.",
    respuesta: `
      <ul>
        <li>Deriva genética: cambios por azar.</li>
        <li>Selección natural: cambios relacionados con fitness biológico.</li>
      </ul>

      <p>La deriva es más intensa en poblaciones pequeñas; la selección favorece genotipos ventajosos.</p>
    `,
    clave:
      "Deriva = azar; selección = adaptación.",
    errorComun:
      "Pensar que ambos mecanismos funcionan igual."
  },

  {
    id: "gp-tp-p6-a",
    problema: "Problema 6",
    inciso: "a",
    tema: "Efecto fundador",
    pregunta:
      "Explique el efecto fundador.",
    respuesta: `
      <p>El efecto fundador ocurre cuando pocos individuos originan una nueva población.</p>

      <p>Esto genera:</p>

      <ul>
        <li>Baja diversidad genética.</li>
        <li>Cambios aleatorios en frecuencias alélicas.</li>
        <li>Posible aumento de enfermedades raras.</li>
      </ul>

      <p>Es un tipo especial de deriva genética.</p>
    `,
    clave:
      "Pocos fundadores → alelos raros pueden hacerse frecuentes.",
    errorComun:
      "Confundir efecto fundador con migración."
  },

  {
    id: "gp-tp-p6-b",
    problema: "Problema 6",
    inciso: "b",
    tema: "Cuello de botella",
    pregunta:
      "Explique el fenómeno de cuello de botella.",
    respuesta: `
      <p>Corresponde a reducción drástica del tamaño poblacional.</p>

      <p>Los sobrevivientes determinan el nuevo pool génico.</p>

      <p>Consecuencias:</p>

      <ul>
        <li>Disminución de variabilidad genética.</li>
        <li>Aumento relativo de deriva genética.</li>
        <li>Cambios alélicos aleatorios.</li>
      </ul>
    `,
    clave:
      "Cuello de botella = reducción poblacional brusca.",
    errorComun:
      "Pensar que la población mantiene exactamente mismas frecuencias."
  },

  {
    id: "gp-tp-p7-a",
    problema: "Problema 7",
    inciso: "a",
    tema: "Selección natural",
    pregunta:
      "¿Qué es selección natural?",
    respuesta: `
      <p>La selección natural corresponde a reproducción diferencial de ciertos genotipos.</p>

      <p>Los individuos con mayor fitness biológico tienen mayor probabilidad de transmitir sus genes.</p>

      <p>Esto modifica frecuencias alélicas poblacionales.</p>
    `,
    clave:
      "Selección favorece mayor fitness.",
    errorComun:
      "Pensar que selección siempre elimina enfermedades."
  },

  {
    id: "gp-tp-p7-b",
    problema: "Problema 7",
    inciso: "b",
    tema: "Ventaja heterocigota",
    pregunta:
      "Explique ventaja heterocigota usando anemia falciforme.",
    respuesta: `
      <p>Los heterocigotos para anemia falciforme poseen resistencia parcial frente a malaria.</p>

      <p>Esto aumenta su fitness en regiones endémicas.</p>

      <p>Aunque los homocigotos afectados presentan enfermedad severa, el alelo persiste por ventaja heterocigota.</p>
    `,
    clave:
      "Heterocigoto más ventajoso que ambos homocigotos.",
    errorComun:
      "Pensar que el alelo persiste por azar exclusivamente."
  },

  {
    id: "gp-tp-p8-a",
    problema: "Problema 8",
    inciso: "a",
    tema: "Migración",
    pregunta:
      "¿Qué es flujo génico y cómo afecta poblaciones?",
    respuesta: `
      <p>El flujo génico corresponde al movimiento de alelos entre poblaciones.</p>

      <p>Puede:</p>

      <ul>
        <li>Aumentar diversidad genética.</li>
        <li>Modificar frecuencias alélicas.</li>
        <li>Disminuir diferencias entre poblaciones.</li>
      </ul>
    `,
    clave:
      "Migración introduce alelos nuevos.",
    errorComun:
      "Pensar que flujo génico siempre disminuye diversidad."
  },

  {
    id: "gp-tp-p9-a",
    problema: "Problema 9",
    inciso: "a",
    tema: "Tamizaje poblacional",
    pregunta:
      "¿Cuál es la utilidad clínica del tamizaje poblacional?",
    respuesta: `
      <p>Permite identificar individuos afectados o portadores antes de aparición clínica.</p>

      <p>Aplicaciones:</p>

      <ul>
        <li>Prevención.</li>
        <li>Diagnóstico precoz.</li>
        <li>Consejo genético.</li>
        <li>Planificación reproductiva.</li>
      </ul>
    `,
    clave:
      "Tamizaje = detección precoz.",
    errorComun:
      "Pensar que screening solo sirve en pacientes enfermos."
  },

  {
    id: "gp-tp-p10-a",
    problema: "Problema 10",
    inciso: "a",
    tema: "Integración poblacional",
    pregunta:
      "Explique cómo mutación, migración, selección natural y deriva genética modifican frecuencias alélicas.",
    respuesta: `
      <ul>
        <li>Mutación: genera nuevos alelos.</li>
        <li>Migración: introduce alelos desde otras poblaciones.</li>
        <li>Selección natural: favorece alelos con mayor fitness.</li>
        <li>Deriva genética: modifica frecuencias por azar.</li>
      </ul>

      <p>Todas son fuerzas evolutivas que alteran equilibrio Hardy-Weinberg.</p>
    `,
    clave:
      "Toda fuerza evolutiva cambia frecuencias alélicas.",
    errorComun:
      "Pensar que solo selección natural modifica poblaciones."
  }
],

variabilidad: [
  {
    id: "vg-tp-p1-a",
    problema: "Problema 1",
    inciso: "a",
    tema: "Conceptos generales",
    pregunta:
      "Defina variabilidad genética y explique su importancia biológica.",
    respuesta: `
      <p>La variabilidad genética corresponde a las diferencias genéticas existentes entre individuos de una población.</p>

      <p>Es fundamental porque:</p>

      <ul>
        <li>Permite evolución biológica.</li>
        <li>Favorece adaptación.</li>
        <li>Explica diferencias fenotípicas.</li>
        <li>Modifica susceptibilidad a enfermedades.</li>
      </ul>
    `,
    clave:
      "Sin variabilidad genética no existe evolución.",
    errorComun:
      "Pensar que toda variabilidad es patológica."
  },

  {
    id: "vg-tp-p1-b",
    problema: "Problema 1",
    inciso: "b",
    tema: "Fuentes de variabilidad",
    pregunta:
      "Mencione las principales fuentes de variabilidad genética.",
    respuesta: `
      <ul>
        <li>Mutaciones.</li>
        <li>Crossing-over.</li>
        <li>Segregación independiente.</li>
        <li>Reproducción sexual.</li>
        <li>Migración.</li>
        <li>Variabilidad epigenética.</li>
      </ul>
    `,
    clave:
      "Mutación = fuente primaria.",
    errorComun:
      "Olvidar recombinación genética."
  },

  {
    id: "vg-tp-p2-a",
    problema: "Problema 2",
    inciso: "a",
    tema: "SNP",
    pregunta:
      "Explique qué es un SNP y por qué es importante clínicamente.",
    respuesta: `
      <p>Un SNP corresponde a una variación de una sola base del ADN.</p>

      <p>Es importante porque:</p>

      <ul>
        <li>Es la forma más frecuente de variabilidad genética.</li>
        <li>Puede modificar riesgo de enfermedad.</li>
        <li>Participa en farmacogenética.</li>
        <li>Se utiliza en estudios GWAS.</li>
      </ul>
    `,
    clave:
      "SNP = single nucleotide polymorphism.",
    errorComun:
      "Pensar que todos los SNP producen enfermedad."
  },

  {
    id: "vg-tp-p2-b",
    problema: "Problema 2",
    inciso: "b",
    tema: "Polimorfismos",
    pregunta:
      "¿Qué diferencia existe entre mutación y polimorfismo?",
    respuesta: `
      <p>Actualmente ambos corresponden a variantes genéticas.</p>

      <p>Sin embargo:</p>

      <ul>
        <li>Polimorfismo = variante frecuente (>1%).</li>
        <li>Mutación = término históricamente asociado a enfermedad.</li>
      </ul>

      <p>Muchos polimorfismos son benignos.</p>
    `,
    clave:
      "Frecuencia poblacional diferencia polimorfismo.",
    errorComun:
      "Asumir que polimorfismo significa enfermedad."
  },

  {
    id: "vg-tp-p3-a",
    problema: "Problema 3",
    inciso: "a",
    tema: "STR y VNTR",
    pregunta:
      "Explique qué son STR/VNTR y mencione sus aplicaciones.",
    respuesta: `
      <p>Los STR y VNTR son secuencias repetidas en tándem con variación en número de repeticiones.</p>

      <p>Aplicaciones:</p>

      <ul>
        <li>Pruebas de paternidad.</li>
        <li>Identificación forense.</li>
        <li>Mapeo genético.</li>
        <li>Estudios poblacionales.</li>
      </ul>
    `,
    clave:
      "Alta variabilidad entre individuos.",
    errorComun:
      "Confundir STR con SNP."
  },

  {
    id: "vg-tp-p4-a",
    problema: "Problema 4",
    inciso: "a",
    tema: "CNV",
    pregunta:
      "Defina CNV y explique cómo pueden producir enfermedad.",
    respuesta: `
      <p>Las CNV son variantes del número de copias de segmentos genómicos.</p>

      <p>Pueden producir enfermedad mediante:</p>

      <ul>
        <li>Pérdida de genes.</li>
        <li>Duplicación génica.</li>
        <li>Alteración de dosis génica.</li>
        <li>Interrupción regulatoria.</li>
      </ul>
    `,
    clave:
      "CNV = copy number variants.",
    errorComun:
      "Pensar que todas las CNV son anormales."
  },

  {
    id: "vg-tp-p5-a",
    problema: "Problema 5",
    inciso: "a",
    tema: "Crossing-over",
    pregunta:
      "Explique el crossing-over y su importancia biológica.",
    respuesta: `
      <p>El crossing-over corresponde al intercambio de segmentos entre cromátidas no hermanas de cromosomas homólogos.</p>

      <p>Ocurre durante profase I de meiosis.</p>

      <p>Importancia:</p>

      <ul>
        <li>Aumenta diversidad genética.</li>
        <li>Genera nuevas combinaciones alélicas.</li>
        <li>Reduce ligamiento genético.</li>
      </ul>
    `,
    clave:
      "Profase I + cromátidas no hermanas.",
    errorComun:
      "Decir que ocurre entre cromátidas hermanas."
  },

  {
    id: "vg-tp-p5-b",
    problema: "Problema 5",
    inciso: "b",
    tema: "Segregación independiente",
    pregunta:
      "Explique cómo la segregación independiente aumenta variabilidad genética.",
    respuesta: `
      <p>Durante meiosis los cromosomas homólogos se distribuyen aleatoriamente.</p>

      <p>Cada gameto recibe combinaciones distintas de cromosomas maternos y paternos.</p>

      <p>Esto produce enorme cantidad de combinaciones genéticas posibles.</p>
    `,
    clave:
      "Distribución aleatoria cromosómica.",
    errorComun:
      "Confundir con crossing-over."
  },

  {
    id: "vg-tp-p6-a",
    problema: "Problema 6",
    inciso: "a",
    tema: "Ligamiento genético",
    pregunta:
      "¿Qué es ligamiento genético?",
    respuesta: `
      <p>Genes cercanos en un mismo cromosoma tienden a heredarse juntos.</p>

      <p>Esto ocurre porque poseen menor probabilidad de separación por recombinación.</p>
    `,
    clave:
      "Genes cercanos se heredan juntos.",
    errorComun:
      "Pensar que genes ligados nunca se separan."
  },

  {
    id: "vg-tp-p6-b",
    problema: "Problema 6",
    inciso: "b",
    tema: "Recombinación",
    pregunta:
      "¿Cómo afecta crossing-over al ligamiento genético?",
    respuesta: `
      <p>El crossing-over puede separar genes ligados.</p>

      <p>Mientras mayor distancia exista entre genes, mayor probabilidad de recombinación.</p>
    `,
    clave:
      "Distancia genética ↑ recombinación.",
    errorComun:
      "Pensar que ligamiento es absoluto."
  },

  {
    id: "vg-tp-p7-a",
    problema: "Problema 7",
    inciso: "a",
    tema: "Penetrancia",
    pregunta:
      "Defina penetrancia y explique penetrancia incompleta.",
    respuesta: `
      <p>La penetrancia corresponde a la proporción de individuos con un genotipo específico que expresan el fenotipo.</p>

      <p>Penetrancia incompleta significa que algunos individuos con la variante NO presentan enfermedad clínica.</p>
    `,
    clave:
      "Penetrancia = presencia/ausencia.",
    errorComun:
      "Confundir penetrancia con gravedad."
  },

  {
    id: "vg-tp-p7-b",
    problema: "Problema 7",
    inciso: "b",
    tema: "Expresividad",
    pregunta:
      "¿Qué es expresividad variable?",
    respuesta: `
      <p>La expresividad variable corresponde a diferencias en intensidad clínica entre individuos con el mismo genotipo.</p>

      <p>Todos presentan enfermedad, pero con distinta gravedad.</p>
    `,
    clave:
      "Expresividad = severidad clínica.",
    errorComun:
      "Pensar que ausencia de síntomas corresponde a expresividad."
  },

  {
    id: "vg-tp-p8-a",
    problema: "Problema 8",
    inciso: "a",
    tema: "Epigenética",
    pregunta:
      "Explique qué es epigenética.",
    respuesta: `
      <p>La epigenética estudia cambios en expresión génica sin modificar secuencia del ADN.</p>

      <p>Mecanismos:</p>

      <ul>
        <li>Metilación ADN.</li>
        <li>Modificaciones histonas.</li>
        <li>ARN no codificante.</li>
      </ul>
    `,
    clave:
      "No cambia secuencia ADN.",
    errorComun:
      "Confundir epigenética con mutación."
  },

  {
    id: "vg-tp-p8-b",
    problema: "Problema 8",
    inciso: "b",
    tema: "Impronta",
    pregunta:
      "Explique impronta genómica y mencione ejemplos clínicos.",
    respuesta: `
      <p>La impronta genómica corresponde a expresión génica dependiente del origen parental.</p>

      <p>Es un fenómeno epigenético.</p>

      <p>Ejemplos:</p>

      <ul>
        <li>Prader-Willi.</li>
        <li>Angelman.</li>
      </ul>
    `,
    clave:
      "Origen parental modifica expresión.",
    errorComun:
      "Pensar que cambia secuencia ADN."
  },

  {
    id: "vg-tp-p9-a",
    problema: "Problema 9",
    inciso: "a",
    tema: "Mosaicismo",
    pregunta:
      "Defina mosaicismo y explique su importancia clínica.",
    respuesta: `
      <p>El mosaicismo corresponde a presencia de líneas celulares genéticamente distintas derivadas del mismo cigoto.</p>

      <p>Importancia clínica:</p>

      <ul>
        <li>Variabilidad fenotípica.</li>
        <li>Recurrencia familiar inesperada.</li>
        <li>Mosaicismo gonadal.</li>
      </ul>
    `,
    clave:
      "Mismo cigoto.",
    errorComun:
      "Confundir con quimerismo."
  },

  {
    id: "vg-tp-p9-b",
    problema: "Problema 9",
    inciso: "b",
    tema: "Quimerismo",
    pregunta:
      "Diferencie mosaicismo y quimerismo.",
    respuesta: `
      <ul>
        <li>Mosaicismo = un cigoto.</li>
        <li>Quimerismo = múltiples cigotos.</li>
      </ul>

      <p>El quimerismo puede originarse por fusión embrionaria o trasplantes.</p>
    `,
    clave:
      "Número de cigotos diferencia ambos fenómenos.",
    errorComun:
      "Creer que son sinónimos."
  },

  {
    id: "vg-tp-p10-a",
    problema: "Problema 10",
    inciso: "a",
    tema: "Interacción gen-ambiente",
    pregunta:
      "Explique cómo ambiente modifica expresión fenotípica.",
    respuesta: `
      <p>El ambiente puede modificar expresión génica y desarrollo clínico.</p>

      <p>Factores importantes:</p>

      <ul>
        <li>Dieta.</li>
        <li>Tóxicos.</li>
        <li>Medicamentos.</li>
        <li>Radiación.</li>
        <li>Infecciones.</li>
      </ul>

      <p>Esto explica diferencias clínicas entre individuos con mismo genotipo.</p>
    `,
    clave:
      "Fenotipo = genética + ambiente.",
    errorComun:
      "Pensar que genes determinan completamente el fenotipo."
  }
],

enf_monogenicas: [
  {
    id: "em-tp-p1-a",
    problema: "Problema 1",
    inciso: "a",
    tema: "Conceptos generales",
    pregunta:
      "Defina enfermedad monogénica.",
    respuesta: `
      <p>Las enfermedades monogénicas corresponden a patologías producidas por alteraciones en un solo gen.</p>

      <p>Generalmente siguen patrones de herencia mendeliana.</p>
    `,
    clave:
      "Un solo gen alterado.",
    errorComun:
      "Confundir enfermedades monogénicas con cromosómicas."
  },

  {
    id: "em-tp-p1-b",
    problema: "Problema 1",
    inciso: "b",
    tema: "Herencia mendeliana",
    pregunta:
      "Mencione los principales patrones de herencia mendeliana.",
    respuesta: `
      <ul>
        <li>Autosómica dominante.</li>
        <li>Autosómica recesiva.</li>
        <li>Ligada al X dominante.</li>
        <li>Ligada al X recesiva.</li>
        <li>Mitocondrial.</li>
      </ul>
    `,
    clave:
      "Conocer todos los patrones clásicos.",
    errorComun:
      "Olvidar herencia mitocondrial."
  },

  {
    id: "em-tp-p2-a",
    problema: "Problema 2",
    inciso: "a",
    tema: "Autosómica dominante",
    pregunta:
      "Describa características clásicas de herencia autosómica dominante.",
    respuesta: `
      <ul>
        <li>Transmisión vertical.</li>
        <li>Afecta ambos sexos.</li>
        <li>Existe transmisión padre-hijo.</li>
        <li>50% de riesgo de recurrencia.</li>
        <li>Múltiples generaciones afectadas.</li>
      </ul>
    `,
    clave:
      "Transmisión vertical + padre-hijo.",
    errorComun:
      "Pensar que AD afecta solo hombres."
  },

  {
    id: "em-tp-p2-b",
    problema: "Problema 2",
    inciso: "b",
    tema: "Enfermedades AD",
    pregunta:
      "Mencione ejemplos clásicos de enfermedades autosómicas dominantes.",
    respuesta: `
      <ul>
        <li>Marfan.</li>
        <li>Huntington.</li>
        <li>Neurofibromatosis tipo 1.</li>
        <li>Acondroplasia.</li>
        <li>Hipercolesterolemia familiar.</li>
      </ul>
    `,
    clave:
      "Conocer enfermedades típicas AD.",
    errorComun:
      "Confundir fibrosis quística como AD."
  },

  {
    id: "em-tp-p3-a",
    problema: "Problema 3",
    inciso: "a",
    tema: "Autosómica recesiva",
    pregunta:
      "Describa características clásicas de herencia autosómica recesiva.",
    respuesta: `
      <ul>
        <li>Patrón horizontal.</li>
        <li>Padres generalmente sanos.</li>
        <li>Afecta ambos sexos.</li>
        <li>25% riesgo recurrencia.</li>
        <li>Mayor frecuencia con consanguinidad.</li>
      </ul>
    `,
    clave:
      "Padres sanos + patrón horizontal.",
    errorComun:
      "Esperar múltiples generaciones afectadas."
  },

  {
    id: "em-tp-p3-b",
    problema: "Problema 3",
    inciso: "b",
    tema: "Enfermedades AR",
    pregunta:
      "Mencione ejemplos clásicos de enfermedades autosómicas recesivas.",
    respuesta: `
      <ul>
        <li>Fibrosis quística.</li>
        <li>Fenilcetonuria.</li>
        <li>Anemia falciforme.</li>
        <li>Tay-Sachs.</li>
        <li>Albinismo.</li>
      </ul>
    `,
    clave:
      "La mayoría corresponden a pérdida de función.",
    errorComun:
      "Confundir Huntington como AR."
  },

  {
    id: "em-tp-p4-a",
    problema: "Problema 4",
    inciso: "a",
    tema: "Ligada al X recesiva",
    pregunta:
      "Describa características clásicas de herencia ligada al X recesiva.",
    respuesta: `
      <ul>
        <li>Predominio masculino.</li>
        <li>No existe transmisión padre-hijo.</li>
        <li>Mujeres suelen ser portadoras.</li>
        <li>Hijos hombres heredan X materno.</li>
      </ul>
    `,
    clave:
      "Nunca transmisión varón-varón.",
    errorComun:
      "Pensar que padre transmite X a hijos hombres."
  },

  {
    id: "em-tp-p4-b",
    problema: "Problema 4",
    inciso: "b",
    tema: "Enfermedades XR",
    pregunta:
      "Mencione ejemplos clásicos de enfermedades XR.",
    respuesta: `
      <ul>
        <li>Hemofilia A.</li>
        <li>Duchenne.</li>
        <li>Daltonismo.</li>
        <li>Deficiencia G6PD.</li>
      </ul>
    `,
    clave:
      "Duchenne y hemofilia son clásicas XR.",
    errorComun:
      "Confundirlas con enfermedades AD."
  },

  {
    id: "em-tp-p5-a",
    problema: "Problema 5",
    inciso: "a",
    tema: "Herencia mitocondrial",
    pregunta:
      "Describa características clásicas de herencia mitocondrial.",
    respuesta: `
      <ul>
        <li>Herencia exclusivamente materna.</li>
        <li>Madre transmite a toda descendencia.</li>
        <li>Hombres no transmiten.</li>
        <li>Alta variabilidad clínica.</li>
      </ul>
    `,
    clave:
      "Solo mujeres transmiten.",
    errorComun:
      "Pensar que hombres afectados transmiten enfermedad."
  },

  {
    id: "em-tp-p5-b",
    problema: "Problema 5",
    inciso: "b",
    tema: "Heteroplasmia",
    pregunta:
      "Explique heteroplasmia.",
    respuesta: `
      <p>La heteroplasmia corresponde a coexistencia de mitocondrias normales y mutadas.</p>

      <p>Explica variabilidad clínica en enfermedades mitocondriales.</p>
    `,
    clave:
      "Mitocondrias normales + mutadas.",
    errorComun:
      "Confundir heteroplasmia con mosaicismo."
  },

  {
    id: "em-tp-p6-a",
    problema: "Problema 6",
    inciso: "a",
    tema: "Penetrancia",
    pregunta:
      "Defina penetrancia.",
    respuesta: `
      <p>La penetrancia corresponde a proporción de individuos con un genotipo específico que expresan el fenotipo.</p>
    `,
    clave:
      "Presencia o ausencia del fenotipo.",
    errorComun:
      "Confundir con gravedad clínica."
  },

  {
    id: "em-tp-p6-b",
    problema: "Problema 6",
    inciso: "b",
    tema: "Expresividad",
    pregunta:
      "Defina expresividad variable.",
    respuesta: `
      <p>La expresividad variable corresponde a diferencias en gravedad clínica entre individuos con la misma variante genética.</p>
    `,
    clave:
      "Todos presentan enfermedad, pero con distinta intensidad.",
    errorComun:
      "Pensar que ausencia clínica corresponde a expresividad."
  },

  {
    id: "em-tp-p7-a",
    problema: "Problema 7",
    inciso: "a",
    tema: "Anticipación genética",
    pregunta:
      "Explique anticipación genética.",
    respuesta: `
      <p>La anticipación genética corresponde a aparición más precoz o grave de enfermedad en generaciones sucesivas.</p>

      <p>Frecuentemente causada por expansión de tripletes.</p>
    `,
    clave:
      "Expansión de tripletes.",
    errorComun:
      "Confundir con penetrancia."
  },

  {
    id: "em-tp-p7-b",
    problema: "Problema 7",
    inciso: "b",
    tema: "Enfermedades con anticipación",
    pregunta:
      "Mencione enfermedades clásicas asociadas a anticipación genética.",
    respuesta: `
      <ul>
        <li>Huntington.</li>
        <li>Distrofia miotónica.</li>
        <li>X frágil.</li>
      </ul>
    `,
    clave:
      "Huntington = clásico.",
    errorComun:
      "Confundir fibrosis quística."
  },

  {
    id: "em-tp-p8-a",
    problema: "Problema 8",
    inciso: "a",
    tema: "Pleiotropía",
    pregunta:
      "Explique pleiotropía usando síndrome de Marfan.",
    respuesta: `
      <p>La pleiotropía ocurre cuando una sola variante genética afecta múltiples órganos.</p>

      <p>En Marfan:</p>

      <ul>
        <li>Aorta.</li>
        <li>Ojos.</li>
        <li>Esqueleto.</li>
      </ul>
    `,
    clave:
      "Un gen → múltiples sistemas.",
    errorComun:
      "Confundir con heterogeneidad genética."
  },

  {
    id: "em-tp-p8-b",
    problema: "Problema 8",
    inciso: "b",
    tema: "Heterogeneidad genética",
    pregunta:
      "Defina heterogeneidad genética.",
    respuesta: `
      <p>La heterogeneidad genética ocurre cuando un mismo fenotipo puede originarse por alteraciones en genes distintos.</p>
    `,
    clave:
      "Mismo fenotipo, genes diferentes.",
    errorComun:
      "Confundir con pleiotropía."
  },

  {
    id: "em-tp-p9-a",
    problema: "Problema 9",
    inciso: "a",
    tema: "Fibrosis quística",
    pregunta:
      "Explique aspectos importantes de fibrosis quística.",
    respuesta: `
      <ul>
        <li>Herencia autosómica recesiva.</li>
        <li>Gen CFTR.</li>
        <li>Alteración transporte cloro.</li>
        <li>Infecciones respiratorias recurrentes.</li>
        <li>Insuficiencia pancreática.</li>
      </ul>
    `,
    clave:
      "CFTR + AR.",
    errorComun:
      "Pensar que afecta solo pulmón."
  },

  {
    id: "em-tp-p9-b",
    problema: "Problema 9",
    inciso: "b",
    tema: "Huntington",
    pregunta:
      "Explique aspectos importantes de Huntington.",
    respuesta: `
      <ul>
        <li>Herencia autosómica dominante.</li>
        <li>Expansión CAG.</li>
        <li>Corea.</li>
        <li>Deterioro cognitivo.</li>
        <li>Anticipación genética.</li>
      </ul>
    `,
    clave:
      "CAG + AD + anticipación.",
    errorComun:
      "Confundir patrón hereditario."
  },

  {
    id: "em-tp-p10-a",
    problema: "Problema 10",
    inciso: "a",
    tema: "Consejo genético",
    pregunta:
      "¿Cuáles son objetivos principales del consejo genético?",
    respuesta: `
      <ul>
        <li>Calcular riesgo de recurrencia.</li>
        <li>Explicar patrón hereditario.</li>
        <li>Orientar diagnóstico.</li>
        <li>Discutir opciones reproductivas.</li>
      </ul>
    `,
    clave:
      "Orientación familiar y riesgo.",
    errorComun:
      "Pensar que solo entrega diagnóstico."
  }
],

enf_complejas: [
  {
    id: "ec-tp-p1-a",
    problema: "Problema 1",
    inciso: "a",
    tema: "Conceptos generales",
    pregunta:
      "Defina enfermedades complejas o multifactoriales.",
    respuesta: `
      <p>Las enfermedades complejas corresponden a trastornos producidos por interacción entre múltiples factores genéticos y ambientales.</p>

      <p>No siguen herencia mendeliana clásica.</p>
    `,
    clave:
      "Genes + ambiente.",
    errorComun:
      "Pensar que son exclusivamente ambientales."
  },

  {
    id: "ec-tp-p1-b",
    problema: "Problema 1",
    inciso: "b",
    tema: "Características generales",
    pregunta:
      "Mencione características importantes de enfermedades complejas.",
    respuesta: `
      <ul>
        <li>Agregación familiar.</li>
        <li>No mendelianas.</li>
        <li>Participación ambiental.</li>
        <li>Múltiples genes involucrados.</li>
        <li>Mayor concordancia MZ que DZ.</li>
      </ul>
    `,
    clave:
      "MZ > DZ.",
    errorComun:
      "Confundirlas con enfermedades monogénicas."
  },

  {
    id: "ec-tp-p2-a",
    problema: "Problema 2",
    inciso: "a",
    tema: "Agregación familiar",
    pregunta:
      "Explique qué significa agregación familiar.",
    respuesta: `
      <p>La enfermedad aparece con mayor frecuencia en familiares de individuos afectados respecto a población general.</p>

      <p>Sugiere participación genética.</p>
    `,
    clave:
      "Mayor frecuencia familiar.",
    errorComun:
      "Pensar que demuestra genética exclusivamente."
  },

  {
    id: "ec-tp-p2-b",
    problema: "Problema 2",
    inciso: "b",
    tema: "Familiares",
    pregunta:
      "¿Cómo cambia el riesgo según grado de parentesco?",
    respuesta: `
      <p>El riesgo disminuye progresivamente a medida que el parentesco es más lejano.</p>
    `,
    clave:
      "Más parentesco = más riesgo.",
    errorComun:
      "Pensar que todos los familiares poseen mismo riesgo."
  },

  {
    id: "ec-tp-p3-a",
    problema: "Problema 3",
    inciso: "a",
    tema: "Riesgo relativo λr",
    pregunta:
      "¿Qué mide λr?",
    respuesta: `
      <p>λr mide agregación familiar comparando prevalencia en familiares respecto a población general.</p>
    `,
    clave:
      "Mide agregación familiar.",
    errorComun:
      "Confundir λr con penetrancia."
  },

  {
    id: "ec-tp-p3-b",
    problema: "Problema 3",
    inciso: "b",
    tema: "Interpretación λr",
    pregunta:
      "Explique significado de λr = 1 y λr elevado.",
    respuesta: `
      <ul>
        <li>λr = 1 → no existe agregación familiar.</li>
        <li>λr elevado → importante componente genético.</li>
      </ul>
    `,
    clave:
      "Mayor λr = mayor evidencia genética.",
    errorComun:
      "Pensar que λr elevado demuestra causalidad absoluta."
  },

  {
    id: "ec-tp-p4-a",
    problema: "Problema 4",
    inciso: "a",
    tema: "Concordancia",
    pregunta:
      "Defina concordancia y discordancia.",
    respuesta: `
      <ul>
        <li>Concordancia → ambos individuos presentan enfermedad.</li>
        <li>Discordancia → solo uno presenta enfermedad.</li>
      </ul>
    `,
    clave:
      "Concordancia = mismo fenotipo.",
    errorComun:
      "Confundir concordancia con parentesco."
  },

  {
    id: "ec-tp-p4-b",
    problema: "Problema 4",
    inciso: "b",
    tema: "Gemelos",
    pregunta:
      "¿Qué demuestra mayor concordancia MZ respecto a DZ?",
    respuesta: `
      <p>Demuestra existencia de importante componente genético.</p>
    `,
    clave:
      "MZ > DZ = genética.",
    errorComun:
      "Pensar que demuestra herencia mendeliana."
  },

  {
    id: "ec-tp-p5-a",
    problema: "Problema 5",
    inciso: "a",
    tema: "Ambiente",
    pregunta:
      "¿Qué demuestra concordancia MZ menor a 100%?",
    respuesta: `
      <p>Demuestra influencia ambiental importante.</p>
    `,
    clave:
      "Ambiente participa.",
    errorComun:
      "Pensar que genética explica completamente enfermedad."
  },

  {
    id: "ec-tp-p5-b",
    problema: "Problema 5",
    inciso: "b",
    tema: "Gemelos",
    pregunta:
      "Compare gemelos monocigóticos y dicigóticos.",
    respuesta: `
      <ul>
        <li>MZ comparten ~100% genes.</li>
        <li>DZ comparten ~50% genes.</li>
      </ul>
    `,
    clave:
      "MZ = mismo cigoto.",
    errorComun:
      "Pensar que DZ comparten misma genética."
  },

  {
    id: "ec-tp-p6-a",
    problema: "Problema 6",
    inciso: "a",
    tema: "Herencia umbral",
    pregunta:
      "Explique modelo de herencia umbral.",
    respuesta: `
      <p>La enfermedad aparece cuando predisposición genética y ambiental supera cierto nivel crítico.</p>
    `,
    clave:
      "Acumulación de factores.",
    errorComun:
      "Pensar que depende de un solo gen."
  },

  {
    id: "ec-tp-p6-b",
    problema: "Problema 6",
    inciso: "b",
    tema: "Rasgos",
    pregunta:
      "Diferencie rasgos cualitativos y cuantitativos.",
    respuesta: `
      <ul>
        <li>Cualitativos → presencia o ausencia.</li>
        <li>Cuantitativos → variables medibles.</li>
      </ul>
    `,
    clave:
      "Cuantitativos = medibles.",
    errorComun:
      "Confundir ambos conceptos."
  },

  {
    id: "ec-tp-p7-a",
    problema: "Problema 7",
    inciso: "a",
    tema: "GWAS",
    pregunta:
      "Explique qué son los GWAS.",
    respuesta: `
      <p>Los GWAS buscan asociaciones entre SNPs y enfermedades complejas utilizando grandes poblaciones.</p>
    `,
    clave:
      "GWAS = asociación genética.",
    errorComun:
      "Pensar que prueban causalidad."
  },

  {
    id: "ec-tp-p7-b",
    problema: "Problema 7",
    inciso: "b",
    tema: "Limitaciones GWAS",
    pregunta:
      "Mencione limitaciones importantes de GWAS.",
    respuesta: `
      <ul>
        <li>Falsos positivos.</li>
        <li>No prueban causalidad.</li>
        <li>No consideran completamente interacciones génicas.</li>
      </ul>
    `,
    clave:
      "Asociación ≠ causalidad.",
    errorComun:
      "Asumir causalidad directa."
  },

  {
    id: "ec-tp-p8-a",
    problema: "Problema 8",
    inciso: "a",
    tema: "DM1",
    pregunta:
      "Mencione genes HLA importantes en DM1.",
    respuesta: `
      <ul>
        <li>HLA DR3.</li>
        <li>HLA DR4.</li>
      </ul>

      <p>HLA DR2 posee efecto protector.</p>
    `,
    clave:
      "DR3 y DR4 aumentan susceptibilidad.",
    errorComun:
      "Confundir DR2 como factor riesgo."
  },

  {
    id: "ec-tp-p8-b",
    problema: "Problema 8",
    inciso: "b",
    tema: "Concordancia DM1",
    pregunta:
      "¿Qué demuestra concordancia MZ cercana a 40% en DM1?",
    respuesta: `
      <p>Demuestra que existe participación ambiental importante además del componente genético.</p>
    `,
    clave:
      "MZ < 100% = ambiente.",
    errorComun:
      "Pensar que DM1 es exclusivamente genética."
  },

  {
    id: "ec-tp-p9-a",
    problema: "Problema 9",
    inciso: "a",
    tema: "DM2",
    pregunta:
      "Mencione características importantes de DM2 respecto a genética.",
    respuesta: `
      <ul>
        <li>Fuerte componente genético.</li>
        <li>Importante influencia ambiental.</li>
        <li>Alta concordancia MZ (~80%).</li>
      </ul>
    `,
    clave:
      "Genética + ambiente.",
    errorComun:
      "Pensar que es exclusivamente ambiental."
  },

  {
    id: "ec-tp-p9-b",
    problema: "Problema 9",
    inciso: "b",
    tema: "Alzheimer",
    pregunta:
      "Mencione genes importantes asociados a Alzheimer.",
    respuesta: `
      <ul>
        <li>APOE ε4.</li>
        <li>APP.</li>
        <li>PS1.</li>
        <li>PS2.</li>
      </ul>
    `,
    clave:
      "APOE ε4 = clásico.",
    errorComun:
      "Confundir genes de Alzheimer con HLA."
  },

  {
    id: "ec-tp-p10-a",
    problema: "Problema 10",
    inciso: "a",
    tema: "Factores ambientales",
    pregunta:
      "Mencione factores ambientales importantes en enfermedades complejas.",
    respuesta: `
      <ul>
        <li>Dieta.</li>
        <li>Infecciones.</li>
        <li>Tóxicos.</li>
        <li>Estilo de vida.</li>
        <li>Ambiente intrauterino.</li>
      </ul>
    `,
    clave:
      "Ambiente modula susceptibilidad.",
    errorComun:
      "Pensar que ambiente no participa."
  },

  {
    id: "ec-tp-p10-b",
    problema: "Problema 10",
    inciso: "b",
    tema: "Comparación",
    pregunta:
      "Compare enfermedades monogénicas y complejas.",
    respuesta: `
      <ul>
        <li>Monogénicas → un gen, mendelianas.</li>
        <li>Complejas → múltiples genes + ambiente.</li>
      </ul>
    `,
    clave:
      "Complejas ≠ mendelianas.",
    errorComun:
      "Analizar enfermedades complejas como dominantes/recesivas."
  }
],

cancer: [
  {
    id: "ca-tp-p1-a",
    problema: "Problema 1",
    inciso: "a",
    tema: "Concepto general",
    pregunta:
      "Explique por qué el cáncer se considera una enfermedad genética celular.",
    respuesta: `
      <p>El cáncer se considera una enfermedad genética celular porque se origina por alteraciones en el ADN de una célula.</p>

      <p>Estas alteraciones modifican genes que controlan proliferación, reparación del ADN, apoptosis, diferenciación y estabilidad genómica.</p>

      <p>Como consecuencia, la célula pierde controles normales y puede dividirse de forma desregulada.</p>
    `,
    clave:
      "Cáncer = alteraciones genéticas acumuladas en células.",
    errorComun:
      "Pensar que cáncer significa solo crecimiento rápido, sin relacionarlo con cambios genéticos."
  },

  {
    id: "ca-tp-p1-b",
    problema: "Problema 1",
    inciso: "b",
    tema: "Proceso multietapa",
    pregunta:
      "¿Por qué el cáncer se describe como un proceso multietapa?",
    respuesta: `
      <p>Porque la mayoría de los tumores no aparecen por una única mutación.</p>

      <p>El desarrollo tumoral requiere acumulación progresiva de alteraciones genéticas y epigenéticas.</p>

      <p>Cada alteración puede entregar ventajas como mayor proliferación, evasión de apoptosis, angiogénesis, invasión o metástasis.</p>

      <p>Por eso la carcinogénesis suele ocurrir durante años o décadas.</p>
    `,
    clave:
      "Multietapa = acumulación progresiva de eventos.",
    errorComun:
      "Creer que una sola mutación siempre basta para formar un tumor maligno."
  },

  {
    id: "ca-tp-p2-a",
    problema: "Problema 2",
    inciso: "a",
    tema: "Origen monoclonal",
    pregunta:
      "Explique el concepto de origen monoclonal del cáncer.",
    respuesta: `
      <p>El origen monoclonal significa que muchas neoplasias derivan inicialmente de una sola célula alterada.</p>

      <p>Esta célula adquiere una ventaja proliferativa y comienza a dividirse, generando un clon celular.</p>

      <p>Luego, durante la progresión tumoral, ese clon puede acumular nuevas mutaciones y originar subclones diferentes.</p>
    `,
    clave:
      "Un tumor puede iniciar desde una célula alterada.",
    errorComun:
      "Pensar que todo el tumor nace desde muchas células independientes al mismo tiempo."
  },

  {
    id: "ca-tp-p2-b",
    problema: "Problema 2",
    inciso: "b",
    tema: "Heterogeneidad tumoral",
    pregunta:
      "¿Por qué un tumor puede volverse heterogéneo si inicialmente tiene origen monoclonal?",
    respuesta: `
      <p>Aunque el tumor puede iniciar desde una sola célula, sus células hijas siguen dividiéndose y acumulando nuevas alteraciones genéticas.</p>

      <p>Algunas de esas alteraciones entregan ventajas adicionales, generando subclones más agresivos o resistentes.</p>

      <p>Esto produce heterogeneidad tumoral, donde distintas células del mismo tumor pueden tener características diferentes.</p>
    `,
    clave:
      "Monoclonal al inicio, heterogéneo durante progresión.",
    errorComun:
      "Creer que monoclonal significa que todas las células tumorales serán idénticas para siempre."
  },

  {
    id: "ca-tp-p3-a",
    problema: "Problema 3",
    inciso: "a",
    tema: "Mutaciones somáticas",
    pregunta:
      "Defina mutación somática y explique su importancia en cáncer.",
    respuesta: `
      <p>Una mutación somática es una alteración adquirida durante la vida en células del cuerpo.</p>

      <p>No está presente en todas las células del organismo y no se transmite a la descendencia.</p>

      <p>La mayoría de los cánceres son esporádicos y se originan por acumulación de mutaciones somáticas.</p>
    `,
    clave:
      "Somática = adquirida, no heredable.",
    errorComun:
      "Confundir mutación somática con mutación hereditaria."
  },

  {
    id: "ca-tp-p3-b",
    problema: "Problema 3",
    inciso: "b",
    tema: "Mutaciones germinales",
    pregunta:
      "Defina mutación germinal y explique su relación con cáncer hereditario.",
    respuesta: `
      <p>Una mutación germinal está presente desde la concepción porque fue heredada a través del óvulo o espermatozoide.</p>

      <p>Está presente en prácticamente todas las células del organismo y puede transmitirse a la descendencia.</p>

      <p>En cáncer hereditario, la persona hereda una predisposición genética, no el cáncer ya formado.</p>
    `,
    clave:
      "Germinal = heredable + predisposición.",
    errorComun:
      "Decir que en cáncer hereditario se hereda directamente el tumor."
  },

  {
    id: "ca-tp-p4-a",
    problema: "Problema 4",
    inciso: "a",
    tema: "Cáncer hereditario vs esporádico",
    pregunta:
      "Compare cáncer hereditario y cáncer esporádico.",
    respuesta: `
      <p><strong>Cáncer esporádico:</strong></p>
      <ul>
        <li>Se produce por mutaciones somáticas adquiridas.</li>
        <li>Suele aparecer a edades más avanzadas.</li>
        <li>No suele mostrar patrón familiar claro.</li>
        <li>Representa la mayoría de los cánceres.</li>
      </ul>

      <p><strong>Cáncer hereditario:</strong></p>
      <ul>
        <li>Se asocia a mutación germinal heredada.</li>
        <li>Produce predisposición desde nacimiento.</li>
        <li>Suele aparecer a edades más tempranas.</li>
        <li>Puede haber múltiples familiares afectados, bilateralidad o tumores múltiples.</li>
      </ul>
    `,
    clave:
      "Esporádico = somático; hereditario = germinal.",
    errorComun:
      "Pensar que todo cáncer familiar necesariamente es hereditario."
  },

  {
    id: "ca-tp-p5-a",
    problema: "Problema 5",
    inciso: "a",
    tema: "Protooncogenes",
    pregunta:
      "¿Qué son los protooncogenes?",
    respuesta: `
      <p>Los protooncogenes son genes normales que participan en crecimiento, proliferación, supervivencia celular y señalización.</p>

      <p>En condiciones fisiológicas se activan y desactivan de forma regulada.</p>

      <p>Cuando sufren alteraciones activadoras pueden transformarse en oncogenes.</p>
    `,
    clave:
      "Protooncogén = gen normal de crecimiento celular.",
    errorComun:
      "Pensar que un protooncogén siempre es patológico."
  },

  {
    id: "ca-tp-p5-b",
    problema: "Problema 5",
    inciso: "b",
    tema: "Oncogenes",
    pregunta:
      "Explique qué es un oncogén y cómo favorece carcinogénesis.",
    respuesta: `
      <p>Un oncogén es un protooncogén activado de forma anormal.</p>

      <p>Actúa por ganancia de función, generando proteínas hiperactivas, sobreexpresadas o reguladas incorrectamente.</p>

      <p>Esto mantiene señales proliferativas activas y favorece crecimiento tumoral.</p>

      <p>A nivel celular, suele bastar una copia alterada para producir efecto.</p>
    `,
    clave:
      "Oncogén = gain of function + proliferación.",
    errorComun:
      "Confundir oncogén con gen supresor tumoral."
  },

  {
    id: "ca-tp-p6-a",
    problema: "Problema 6",
    inciso: "a",
    tema: "Activación oncogénica",
    pregunta:
      "Mencione mecanismos por los cuales puede activarse un oncogén.",
    respuesta: `
      <ul>
        <li><strong>Mutación puntual:</strong> puede dejar una proteína permanentemente activa, como RAS.</li>
        <li><strong>Amplificación génica:</strong> aumenta copias del gen y sobreexpresión proteica, como HER2.</li>
        <li><strong>Translocación:</strong> puede generar genes de fusión o sobreexpresión, como BCR-ABL.</li>
        <li><strong>Sobreexpresión:</strong> producción excesiva de una proteína proliferativa.</li>
      </ul>
    `,
    clave:
      "Oncogenes se activan por aumento de función.",
    errorComun:
      "Pensar que solo las mutaciones puntuales activan oncogenes."
  },

  {
    id: "ca-tp-p6-b",
    problema: "Problema 6",
    inciso: "b",
    tema: "Cromosoma Philadelphia",
    pregunta:
      "Explique el mecanismo del cromosoma Philadelphia.",
    respuesta: `
      <p>El cromosoma Philadelphia corresponde a una translocación entre cromosomas 9 y 22: t(9;22).</p>

      <p>Esta translocación genera el gen de fusión BCR-ABL.</p>

      <p>BCR-ABL codifica una tirosina quinasa constitutivamente activa, que permanece encendida sin regulación normal.</p>

      <p>Esto estimula proliferación celular excesiva y se asocia clásicamente a leucemia mieloide crónica.</p>
    `,
    clave:
      "t(9;22) → BCR-ABL → tirosina quinasa activa.",
    errorComun:
      "Nombrar Philadelphia sin explicar cómo favorece proliferación."
  },

  {
    id: "ca-tp-p7-a",
    problema: "Problema 7",
    inciso: "a",
    tema: "Genes supresores tumorales",
    pregunta:
      "¿Qué son los genes supresores tumorales?",
    respuesta: `
      <p>Son genes que actúan como frenos del crecimiento celular.</p>

      <p>Participan en detención del ciclo celular, reparación del ADN, apoptosis y mantenimiento de estabilidad genómica.</p>

      <p>Cuando se inactivan, la célula pierde mecanismos de control y aumenta el riesgo de transformación tumoral.</p>
    `,
    clave:
      "Supresor tumoral = freno celular.",
    errorComun:
      "Pensar que los supresores tumorales causan cáncer cuando están activos."
  },

  {
    id: "ca-tp-p7-b",
    problema: "Problema 7",
    inciso: "b",
    tema: "Two-hit",
    pregunta:
      "Explique la hipótesis de los dos eventos de Knudson.",
    respuesta: `
      <p>La hipótesis two-hit plantea que, para inactivar completamente muchos genes supresores tumorales, deben perderse ambas copias del gen.</p>

      <p>En cáncer hereditario, el primer evento puede estar presente como mutación germinal desde el nacimiento.</p>

      <p>El segundo evento ocurre somáticamente en una célula específica.</p>

      <p>En cáncer esporádico, ambos eventos ocurren somáticamente.</p>
    `,
    clave:
      "Two-hit = pérdida de ambas copias.",
    errorComun:
      "Aplicar two-hit a oncogenes como si fuera lo mismo."
  },

  {
    id: "ca-tp-p8-a",
    problema: "Problema 8",
    inciso: "a",
    tema: "RB1 y retinoblastoma",
    pregunta:
      "Explique el rol de RB1 en retinoblastoma.",
    respuesta: `
      <p>RB1 es un gen supresor tumoral ubicado en 13q14.</p>

      <p>La proteína RB regula el paso G1/S del ciclo celular.</p>

      <p>Cuando ambas copias de RB1 se inactivan, la célula pierde control proliferativo.</p>

      <p>El retinoblastoma es el ejemplo clásico de la hipótesis two-hit.</p>
    `,
    clave:
      "RB1 controla G1/S.",
    errorComun:
      "Decir solo que RB1 causa retinoblastoma sin explicar su función."
  },

  {
    id: "ca-tp-p8-b",
    problema: "Problema 8",
    inciso: "b",
    tema: "Retinoblastoma hereditario",
    pregunta:
      "¿Por qué el retinoblastoma hereditario suele ser precoz y bilateral?",
    respuesta: `
      <p>Porque el individuo nace con una copia de RB1 alterada en todas sus células.</p>

      <p>Solo necesita perder la segunda copia en una célula retiniana para desarrollar el tumor.</p>

      <p>Como todas las células retinianas ya tienen el primer hit, existe mayor probabilidad de múltiples focos tumorales y afectación bilateral.</p>
    `,
    clave:
      "Primer hit germinal → aparición precoz.",
    errorComun:
      "Pensar que bilateralidad ocurre por metástasis entre ojos."
  },

  {
    id: "ca-tp-p9-a",
    problema: "Problema 9",
    inciso: "a",
    tema: "TP53",
    pregunta:
      "Explique por qué p53 es llamado guardián del genoma.",
    respuesta: `
      <p>p53 detecta daño en el ADN y coordina respuestas protectoras.</p>

      <p>Puede detener el ciclo celular para permitir reparación.</p>

      <p>Si el daño es irreparable, puede inducir apoptosis.</p>

      <p>Así evita que células con ADN dañado sobrevivan y sigan dividiéndose.</p>
    `,
    clave:
      "p53 detiene ciclo o induce apoptosis.",
    errorComun:
      "Pensar que p53 estimula proliferación tumoral."
  },

  {
    id: "ca-tp-p9-b",
    problema: "Problema 9",
    inciso: "b",
    tema: "Li-Fraumeni",
    pregunta:
      "Explique la relación entre TP53 y síndrome de Li-Fraumeni.",
    respuesta: `
      <p>El síndrome de Li-Fraumeni se asocia a mutaciones germinales en TP53.</p>

      <p>Como TP53 es clave para controlar daño genético, su pérdida aumenta riesgo de múltiples tumores.</p>

      <p>Se caracteriza por predisposición hereditaria a cánceres de inicio precoz y en distintos tejidos.</p>
    `,
    clave:
      "Li-Fraumeni = TP53 germinal.",
    errorComun:
      "Confundir Li-Fraumeni con Lynch."
  },

  {
    id: "ca-tp-p10-a",
    problema: "Problema 10",
    inciso: "a",
    tema: "Reparación ADN",
    pregunta:
      "Explique cómo los defectos de reparación del ADN favorecen cáncer.",
    respuesta: `
      <p>El ADN sufre daño constantemente por errores replicativos y agentes ambientales.</p>

      <p>Los sistemas de reparación corrigen estos errores antes de que se fijen como mutaciones.</p>

      <p>Cuando estos sistemas fallan, aumenta la acumulación de mutaciones.</p>

      <p>Esto favorece inestabilidad genómica y aumenta riesgo de transformación tumoral.</p>
    `,
    clave:
      "Falla reparación → más mutaciones.",
    errorComun:
      "Pensar que reparación ADN solo importa después de que aparece el cáncer."
  },

  {
    id: "ca-tp-p10-b",
    problema: "Problema 10",
    inciso: "b",
    tema: "Síndrome de Lynch",
    pregunta:
      "Explique el síndrome de Lynch y la inestabilidad microsatelital.",
    respuesta: `
      <p>El síndrome de Lynch es un síndrome hereditario asociado a defectos en reparación mismatch.</p>

      <p>El sistema mismatch repair corrige errores pequeños producidos durante la replicación del ADN.</p>

      <p>Cuando falla, se acumulan errores en secuencias repetitivas llamadas microsatélites.</p>

      <p>Esto produce inestabilidad microsatelital y aumenta riesgo de cáncer colorrectal hereditario.</p>
    `,
    clave:
      "Lynch = mismatch repair + inestabilidad microsatelital.",
    errorComun:
      "Confundir Lynch con poliposis adenomatosa familiar."
  },

  {
    id: "ca-tp-p11-a",
    problema: "Problema 11",
    inciso: "a",
    tema: "BRCA1/2",
    pregunta:
      "Explique la relación entre BRCA1/2 y cáncer hereditario.",
    respuesta: `
      <p>BRCA1 y BRCA2 participan en reparación del ADN, especialmente daño de doble cadena.</p>

      <p>Cuando existen mutaciones germinales en estos genes, disminuye la capacidad de reparar daño genético.</p>

      <p>Esto favorece acumulación de mutaciones y aumenta riesgo de cáncer de mama y ovario hereditario.</p>
    `,
    clave:
      "BRCA = reparación ADN + mama/ovario hereditario.",
    errorComun:
      "Pensar que BRCA produce cáncer directamente sin eventos adicionales."
  },

  {
    id: "ca-tp-p11-b",
    problema: "Problema 11",
    inciso: "b",
    tema: "APC",
    pregunta:
      "Explique la relación entre APC y poliposis adenomatosa familiar.",
    respuesta: `
      <p>APC es un gen supresor tumoral relacionado con regulación de proliferación del epitelio intestinal.</p>

      <p>Las mutaciones germinales en APC producen poliposis adenomatosa familiar.</p>

      <p>Los pacientes desarrollan numerosos pólipos colónicos, aumentando mucho la probabilidad de que alguno acumule nuevas alteraciones y progrese a cáncer colorrectal.</p>
    `,
    clave:
      "APC = múltiples pólipos + riesgo colorrectal.",
    errorComun:
      "Confundir APC con genes mismatch repair."
  },

  {
    id: "ca-tp-p12-a",
    problema: "Problema 12",
    inciso: "a",
    tema: "Telomerasa",
    pregunta:
      "Explique cómo la telomerasa favorece inmortalidad replicativa tumoral.",
    respuesta: `
      <p>Los telómeros protegen los extremos cromosómicos y se acortan con cada división celular.</p>

      <p>Cuando se acortan demasiado, la célula entra en senescencia o apoptosis.</p>

      <p>Muchas células tumorales reactivan telomerasa, enzima que mantiene la longitud telomérica.</p>

      <p>Esto permite divisiones indefinidas y favorece inmortalidad celular tumoral.</p>
    `,
    clave:
      "Telomerasa mantiene telómeros.",
    errorComun:
      "Pensar que telomerasa repara cualquier mutación."
  },

  {
    id: "ca-tp-p12-b",
    problema: "Problema 12",
    inciso: "b",
    tema: "Apoptosis",
    pregunta:
      "Explique por qué evadir apoptosis favorece cáncer.",
    respuesta: `
      <p>La apoptosis elimina células dañadas o peligrosas mediante muerte celular programada.</p>

      <p>Si una célula con daño genético severo evade apoptosis, puede sobrevivir y seguir dividiéndose.</p>

      <p>Esto permite acumulación de nuevas mutaciones y favorece progresión tumoral.</p>
    `,
    clave:
      "Evadir apoptosis = sobreviven células dañadas.",
    errorComun:
      "Pensar que apoptosis siempre es perjudicial para el organismo."
  },

  {
    id: "ca-tp-p13-a",
    problema: "Problema 13",
    inciso: "a",
    tema: "Angiogénesis",
    pregunta:
      "Explique por qué la angiogénesis es importante en tumores.",
    respuesta: `
      <p>Un tumor necesita oxígeno y nutrientes para continuar creciendo.</p>

      <p>Cuando aumenta de tamaño, la difusión no basta para sostener todas las células.</p>

      <p>Por eso las células tumorales inducen formación de nuevos vasos sanguíneos.</p>

      <p>La angiogénesis permite crecimiento tumoral y además facilita diseminación metastásica.</p>
    `,
    clave:
      "Angiogénesis = vasos nuevos para nutrir tumor.",
    errorComun:
      "Pensar que un tumor puede crecer indefinidamente sin irrigación."
  },

  {
    id: "ca-tp-p13-b",
    problema: "Problema 13",
    inciso: "b",
    tema: "Metástasis",
    pregunta:
      "Describa las etapas generales necesarias para que ocurra metástasis.",
    respuesta: `
      <ul>
        <li>Invasión local del tejido vecino.</li>
        <li>Degradación de matriz extracelular y membrana basal.</li>
        <li>Entrada a vasos sanguíneos o linfáticos.</li>
        <li>Supervivencia en circulación.</li>
        <li>Salida hacia otro órgano.</li>
        <li>Colonización y crecimiento en tejido distante.</li>
      </ul>

      <p>La metástasis se asocia a mayor gravedad clínica y peor pronóstico.</p>
    `,
    clave:
      "Metástasis = invasión + circulación + colonización.",
    errorComun:
      "Pensar que cualquier célula tumoral que entra a sangre necesariamente forma metástasis."
  },

  {
    id: "ca-tp-p14-a",
    problema: "Problema 14",
    inciso: "a",
    tema: "MicroARN y oncomirs",
    pregunta:
      "Explique qué son los oncomirs.",
    respuesta: `
      <p>Los microARN son ARN pequeños no codificantes que regulan expresión génica.</p>

      <p>Pueden disminuir traducción o favorecer degradación de ARN mensajeros.</p>

      <p>Cuando un microARN favorece desarrollo tumoral se denomina oncomir.</p>

      <p>Los oncomirs pueden contribuir a proliferación, evasión de apoptosis, invasión o progresión tumoral.</p>
    `,
    clave:
      "Oncomir = microARN que favorece cáncer.",
    errorComun:
      "Pensar que solo proteínas participan en cáncer."
  },

  {
    id: "ca-tp-p14-b",
    problema: "Problema 14",
    inciso: "b",
    tema: "Driver y passenger mutations",
    pregunta:
      "Diferencie mutaciones driver y passenger.",
    respuesta: `
      <p><strong>Mutaciones driver:</strong> contribuyen directamente al desarrollo o progresión tumoral porque entregan ventajas proliferativas o de supervivencia.</p>

      <p><strong>Mutaciones passenger:</strong> aparecen durante la evolución tumoral, pero no tienen un rol causal importante en el crecimiento del tumor.</p>

      <p>Distinguirlas es importante porque las driver pueden ser blancos terapéuticos.</p>
    `,
    clave:
      "Driver impulsa; passenger acompaña.",
    errorComun:
      "Creer que toda mutación encontrada en un tumor es causal."
  },

  {
    id: "ca-tp-p15-a",
    problema: "Problema 15",
    inciso: "a",
    tema: "Clasificación tumoral",
    pregunta:
      "Clasifique tumores según tejido de origen.",
    respuesta: `
      <ul>
        <li><strong>Carcinomas:</strong> tumores de origen epitelial.</li>
        <li><strong>Sarcomas:</strong> tumores de origen mesenquimático, como hueso, músculo o tejido conectivo.</li>
        <li><strong>Leucemias y linfomas:</strong> tumores de origen hematopoyético o linfoide.</li>
      </ul>
    `,
    clave:
      "Carcinoma = epitelio; sarcoma = mesénquima.",
    errorComun:
      "Usar carcinoma como sinónimo de cualquier cáncer."
  },

  {
    id: "ca-tp-p15-b",
    problema: "Problema 15",
    inciso: "b",
    tema: "Integración",
    pregunta:
      "Integre oncogenes, genes supresores y reparación ADN en carcinogénesis.",
    respuesta: `
      <p>La activación de oncogenes estimula proliferación celular excesiva.</p>

      <p>La pérdida de genes supresores elimina frenos del ciclo celular, apoptosis o reparación.</p>

      <p>Los defectos en reparación del ADN aumentan acumulación de mutaciones.</p>

      <p>En conjunto, estos mecanismos favorecen transformación tumoral, progresión, heterogeneidad e invasión.</p>
    `,
    clave:
      "Cáncer = aceleradores activados + frenos perdidos + reparación fallida.",
    errorComun:
      "Estudiar cada mecanismo aislado sin integrarlos."
  }
],

pesquisa_neonatal: [

{
id:"pn-tp-p1-a",
problema:"Problema 1",
inciso:"a",
tema:"Concepto general",

pregunta:"Explique qué es la pesquisa neonatal y cuál es su objetivo principal.",

respuesta:`
<p>La pesquisa neonatal corresponde a un programa de tamizaje realizado en recién nacidos para detectar enfermedades graves antes de aparición de síntomas clínicos.</p>

<p>Su objetivo principal es identificar precozmente enfermedades tratables y prevenir daño irreversible mediante intervención temprana.</p>
`,

clave:"Tamizaje precoz + prevención de daño irreversible.",

errorComun:"Confundir pesquisa neonatal con diagnóstico definitivo."
},

{
id:"pn-tp-p1-b",
problema:"Problema 1",
inciso:"b",
tema:"Objetivos",

pregunta:"Explique por qué muchas enfermedades pesquisadas no se detectan clínicamente al nacimiento.",

respuesta:`
<p>Muchas enfermedades metabólicas, endocrinas y genéticas no producen manifestaciones evidentes durante los primeros días de vida.</p>

<p>Por esta razón numerosos recién nacidos afectados parecen sanos inicialmente.</p>

<p>Sin pesquisa neonatal el diagnóstico podría retrasarse hasta aparición de síntomas graves.</p>
`,

clave:"RN aparentemente sano ≠ ausencia enfermedad.",

errorComun:"Pensar que un recién nacido sano excluye enfermedad."
},

{
id:"pn-tp-p2-a",
problema:"Problema 2",
inciso:"a",
tema:"Tamizaje",

pregunta:"Explique diferencia entre tamizaje y diagnóstico definitivo.",

respuesta:`
<p>El tamizaje identifica individuos con mayor probabilidad de enfermedad.</p>

<p>El diagnóstico definitivo confirma presencia o ausencia de la enfermedad mediante pruebas específicas.</p>

<p>Una pesquisa alterada requiere confirmación diagnóstica posterior.</p>
`,

clave:"Tamizaje selecciona; diagnóstico confirma.",

errorComun:"Pensar que un tamizaje positivo confirma enfermedad."
},

{
id:"pn-tp-p2-b",
problema:"Problema 2",
inciso:"b",
tema:"Sensibilidad",

pregunta:"Explique por qué en pesquisa neonatal se prioriza sensibilidad alta.",

respuesta:`
<p>La sensibilidad corresponde a la capacidad de detectar correctamente individuos enfermos.</p>

<p>Una alta sensibilidad disminuye falsos negativos.</p>

<p>En pesquisa neonatal es más grave dejar sin diagnóstico un recién nacido enfermo que estudiar uno sano adicional.</p>
`,

clave:"Alta sensibilidad → menos falsos negativos.",

errorComun:"Confundir sensibilidad con especificidad."
},

{
id:"pn-tp-p3-a",
problema:"Problema 3",
inciso:"a",
tema:"Errores preanalíticos",

pregunta:"¿Qué son los errores preanalíticos?",

respuesta:`
<p>Son errores ocurridos antes del procesamiento de laboratorio.</p>

<p>Pueden alterar calidad de la muestra y producir resultados incorrectos o inválidos.</p>
`,

clave:"Ocurren antes del análisis.",

errorComun:"Creer que corresponden a errores diagnósticos."
},

{
id:"pn-tp-p3-b",
problema:"Problema 3",
inciso:"b",
tema:"Errores preanalíticos",

pregunta:"Mencione ejemplos de errores preanalíticos.",

respuesta:`
<ul>
<li>Muestra insuficiente.</li>
<li>Contaminación.</li>
<li>Secado incorrecto.</li>
<li>Obtención demasiado precoz.</li>
<li>Muestra mal rotulada.</li>
</ul>
`,

clave:"Conocer errores clásicos.",

errorComun:"Nombrar enfermedades en vez de errores."
},

{
id:"pn-tp-p4-a",
problema:"Problema 4",
inciso:"a",
tema:"Muestra insuficiente",

pregunta:"Explique qué se considera una muestra insuficiente.",

respuesta:`
<p>Corresponde a una muestra donde la sangre no impregna completamente el papel filtro o presenta cantidad escasa.</p>

<p>Puede dificultar mediciones correctas y producir resultados inválidos.</p>
`,

clave:"Impregnación incompleta.",

errorComun:"Pensar que cualquier gota sirve."
},

{
id:"pn-tp-p4-b",
problema:"Problema 4",
inciso:"b",
tema:"Obtención precoz",

pregunta:"Explique por qué una muestra tomada demasiado temprano puede producir errores.",

respuesta:`
<p>Algunos metabolitos requieren alimentación previa para alcanzar concentraciones detectables.</p>

<p>Una toma precoz puede producir falsos negativos.</p>
`,

clave:"Muestra precoz → falsos negativos.",

errorComun:"Pensar que antes siempre es mejor."
},

{
id:"pn-tp-p5-a",
problema:"Problema 5",
inciso:"a",
tema:"Hipotiroidismo congénito",

pregunta:"Explique qué es el hipotiroidismo congénito.",

respuesta:`
<p>Es una enfermedad caracterizada por déficit de hormonas tiroideas desde nacimiento.</p>

<p>Estas hormonas son fundamentales para crecimiento y desarrollo neurológico.</p>
`,

clave:"Déficit hormonal tiroideo.",

errorComun:"Confundirlo con hipertiroidismo."
},

{
id:"pn-tp-p5-b",
problema:"Problema 5",
inciso:"b",
tema:"Hipotiroidismo",

pregunta:"¿Por qué un recién nacido con hipotiroidismo congénito puede parecer sano inicialmente?",

respuesta:`
<p>Durante embarazo existe aporte hormonal materno a través de placenta.</p>

<p>Tras nacimiento desaparece esta compensación y aparecen síntomas progresivamente.</p>
`,

clave:"Hormonas maternas.",

errorComun:"Creer que la enfermedad aparece después del nacimiento."
},

{
id:"pn-tp-p6-a",
problema:"Problema 6",
inciso:"a",
tema:"Fenilcetonuria",

pregunta:"Explique fisiopatología de la fenilcetonuria.",

respuesta:`
<p>La enfermedad se produce por déficit de fenilalanina hidroxilasa.</p>

<p>La enzima transforma fenilalanina en tirosina.</p>

<p>Su ausencia produce acumulación tóxica de fenilalanina.</p>
`,

clave:"Déficit PAH → fenilalanina elevada.",

errorComun:"Confundir tirosina con fenilalanina."
},

{
id:"pn-tp-p6-b",
problema:"Problema 6",
inciso:"b",
tema:"Fenilcetonuria",

pregunta:"Explique tratamiento principal de fenilcetonuria.",

respuesta:`
<p>El tratamiento principal consiste en dieta restringida en fenilalanina.</p>

<p>El objetivo es evitar acumulación tóxica y prevenir daño neurológico.</p>
`,

clave:"Restricción fenilalanina.",

errorComun:"Pensar que se trata con hormona tiroidea."
},

{
id:"pn-tp-p7-a",
problema:"Problema 7",
inciso:"a",
tema:"Errores innatos metabolismo",

pregunta:"¿Qué son los errores innatos del metabolismo?",

respuesta:`
<p>Son enfermedades genéticas causadas por alteraciones en enzimas metabólicas.</p>

<p>Producen acumulación de metabolitos tóxicos o déficit de productos esenciales.</p>
`,

clave:"Déficit enzimático.",

errorComun:"Pensar que son infecciones."
},

{
id:"pn-tp-p7-b",
problema:"Problema 7",
inciso:"b",
tema:"Espectrometría",

pregunta:"Explique utilidad de espectrometría de masas en tándem.",

respuesta:`
<p>Permite detectar múltiples metabolitos simultáneamente utilizando una sola muestra.</p>

<p>Esto amplió cantidad de enfermedades pesquisables.</p>
`,

clave:"Múltiples metabolitos.",

errorComun:"Pensar que detecta una sola enfermedad."
},

{
id:"pn-tp-p8-a",
problema:"Problema 8",
inciso:"a",
tema:"Fibrosis quística",

pregunta:"¿Qué gen se altera en fibrosis quística y qué consecuencia produce?",

respuesta:`
<p>El gen alterado es CFTR.</p>

<p>Su alteración produce secreciones espesas que afectan principalmente pulmones y sistema digestivo.</p>
`,

clave:"CFTR → secreciones espesas.",

errorComun:"Confundir con fenilcetonuria."
},

{
id:"pn-tp-p8-b",
problema:"Problema 8",
inciso:"b",
tema:"Hiperplasia suprarrenal",

pregunta:"¿Cuál es la causa más frecuente de hiperplasia suprarrenal congénita?",

respuesta:`
<p>La causa más frecuente corresponde a déficit de 21-hidroxilasa.</p>
`,

clave:"21-hidroxilasa.",

errorComun:"Confundir con fenilalanina hidroxilasa."
},

{
id:"pn-tp-p9-a",
problema:"Problema 9",
inciso:"a",
tema:"Seguimiento",

pregunta:"Explique por qué una pesquisa positiva requiere seguimiento.",

respuesta:`
<p>Porque el tamizaje no confirma diagnóstico.</p>

<p>La pesquisa alterada requiere confirmación diagnóstica y tratamiento oportuno.</p>
`,

clave:"Confirmación + tratamiento.",

errorComun:"Pensar que termina al obtener el resultado."
},

{
id:"pn-tp-p9-b",
problema:"Problema 9",
inciso:"b",
tema:"Integración",

pregunta:"Integre sensibilidad, errores preanalíticos y tratamiento precoz dentro de pesquisa neonatal.",

respuesta:`
<p>La sensibilidad elevada busca disminuir falsos negativos.</p>

<p>Los errores preanalíticos pueden alterar resultados y disminuir eficacia diagnóstica.</p>

<p>La detección precoz permite iniciar tratamiento oportunamente y prevenir daño irreversible.</p>
`,

clave:"Tamizaje + calidad muestra + tratamiento.",

errorComun:"Estudiar conceptos aislados."
}

],

};