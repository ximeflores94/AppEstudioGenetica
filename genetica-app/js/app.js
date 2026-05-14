function renderPlan() {
  const el = document.getElementById("plan-content");

  const completed = JSON.parse(localStorage.getItem("completedTasks")) || [];

  const filter = localStorage.getItem("planFilter") || "pendientes";

  let pendientes = "";
  let completados = "";

  PLAN.forEach((w) => {
    let weekContent = "";

    w.days.forEach((d, index) => {
      const id = `${w.week}-${index}`;

      const checked = completed.includes(id);

      const card = `

<div class="day-card ${checked ? "done" : ""}">

<div class="card-left">

<label class="task-check">

<input
type="checkbox"
${checked ? "checked" : ""}
onchange="toggleTask('${id}')"
/>

<span class="custom-check">
✓
</span>

</label>

</div>

<div class="day-content">

<div class="day-task">

${d.task}

<span class="day-badge badge-${d.badge}">
${d.badge}
</span>

</div>

<div class="day-detail">
${d.detail}
</div>

</div>

</div>

`;

      if (filter === "pendientes" && !checked) {
        weekContent += card;
      }

      if (filter === "completados" && checked) {
        completados += card;
      }

      if (filter === "todos") {
        if (checked) {
          completados += card;
        } else {
          weekContent += card;
        }
      }
    });

    if (weekContent) {
      pendientes += `

<div class="week-block">

<div
class="week-header"
style="border-left-color:${w.color}"
>

<h3>
📆 ${w.week}
</h3>

<span>
${w.dates}
</span>

</div>

${weekContent}

</div>

`;
    }
  });

  el.innerHTML = `

<div class="plan-filters">

<button
class="filter-btn ${filter === "pendientes" ? "active" : ""}"
onclick="setPlanFilter('pendientes')"
>
📌 Pendientes
</button>

<button
class="filter-btn ${filter === "completados" ? "active" : ""}"
onclick="setPlanFilter('completados')"
>
✅ Completados
</button>

<button
class="filter-btn ${filter === "todos" ? "active" : ""}"
onclick="setPlanFilter('todos')"
>
📚 Todos
</button>

</div>

${
  filter === "completados" || filter === "todos"
    ? `

<div class="completed-section">

<h2>
✅ Completado
</h2>

${
  completados ||
  `
<div class="empty">
Nada completado aún 💀
</div>
`
}

</div>

`
    : ""
}

${pendientes}

`;
}

function toggleTask(id) {
  let completed = JSON.parse(localStorage.getItem("completedTasks")) || [];

  if (completed.includes(id)) {
    completed = completed.filter((x) => x !== id);
  } else {
    completed.push(id);
  }

  localStorage.setItem("completedTasks", JSON.stringify(completed));

  renderPlan();
  updateCountdown();
}

function setPlanFilter(filter) {
  localStorage.setItem("planFilter", filter);
  renderPlan();
}

// ===================================
// COUNTDOWN
// ===================================
function updateCountdown() {
  const deadline = new Date("2026-06-01T08:00:00");
  const now = new Date();
  const diff = deadline - now;
  if (diff <= 0) {
    document.getElementById("d-days").textContent = "0";
    document.getElementById("d-hrs").textContent = "00";
    document.getElementById("d-mins").textContent = "00";
    document.getElementById("d-secs").textContent = "00";
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hrs = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  document.getElementById("d-days").textContent = days;
  document.getElementById("d-hrs").textContent = String(hrs).padStart(2, "0");
  document.getElementById("d-mins").textContent = String(mins).padStart(2, "0");
  document.getElementById("d-secs").textContent = String(secs).padStart(2, "0");
  document.getElementById("nav-days").textContent = days;
  // Progress: from May 5 to June 1 = 27 days
  const completed = JSON.parse(localStorage.getItem("completedTasks")) || [];

  const totalTasks = PLAN.reduce((acc, week) => acc + week.days.length, 0);

  const completedTasks = completed.length;

  const pct =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-pct").textContent = `${pct}%`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// ===================================
// NAVIGATION
// ===================================
function showSection(id) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".nav-tab")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".nav-tab").forEach((b) => {
    if (b.getAttribute("onclick").includes(id)) b.classList.add("active");
  });
  if (id === "repasar") {
    renderReviewSection();
  }
  if (id === "tp") {
    initTPTopics();
  }
  if (id === "flashcards") {
    renderFlashcard();
  }

  if (id === "multiple") {
    renderQuiz();
  }

  if (id === "ejercicios") {
    loadEjercicios();
  }
  if (id === "test-final") {
    initFinalTestSection();
  }
}

// ===================================
// POPULATE SELECTS
// ===================================
function populateSelects() {
  ["fc-topic-select", "quiz-topic-select", "ej-topic-select"].forEach((id) => {
    const sel = document.getElementById(id);
    sel.innerHTML = TOPICS.map(
      (t) => `<option value="${t.id}">${t.emoji} ${t.label}</option>`,
    ).join("");
  });
  // Resumen topic buttons
  const nav = document.getElementById("resumen-topics");
  nav.innerHTML = TOPICS.map(
    (t) => `
    <button class="topic-btn" onclick="loadResumen('${t.id}', this)">${t.emoji} ${t.label.split(".")[1]?.trim() || t.label}</button>
  `,
  ).join("");
}

// ===================================
// TOPIC DATA FOR AI PROMPTS
// ===================================
const TOPIC_CONTEXT = {
  citogenetica: `Citogenética médica: estructura y clasificación de cromosomas (metacéntrico, submetacéntrico, acrocéntrico, telocéntrico), cariotipo humano 46 cromosomas, bandeo cromosómico (G, Q, C, R, NOR), FISH, bandeo alta resolución. Anomalías numéricas: aneuploidías por no disyunción meiótica (trisomías: Síndrome Down 47+21, Edwards 47+18, Patau 47+13), monosomías (Síndrome Turner 45X). Cromosomas sexuales: Klinefelter 47XXY, triple X, XYY. Anomalías estructurales: deleciones (Wolf-Hirschhorn del4p, Cri-du-chat del5p, Williams del7, DiGeorge del22q11), duplicaciones, inversiones pericéntricas e inversiones paracéntricas, translocaciones recíprocas y robertsonianas, isocromosomas, cromosomas dicéntricos. Mosaicismos. Síndromes de microdeleción. Impronta genómica: Prader-Willi y Angelman (deleción 15q11-q13). Indicaciones de diagnóstico citogenético prenatal.`,

  tecnicas_mol: `Técnicas de Biología Molecular: PCR (componentes: TAC polimerasa, primers, dNTPs; etapas: desnaturalización 95°, alineamiento, extensión; 30-40 ciclos). Variantes PCR: RT-PCR, PCR en tiempo real (qPCR), PCR-RFLP, PCR multiplex. Secuenciación Sanger (didesoxinucleótidos terminadores de cadena, electroforesis capilar, fluorescencia). NGS segunda generación (secuenciación masiva en paralelo, microchip, menores cantidades de muestra, mayor velocidad). Aplicaciones NGS: secuenciación de gen único, paneles, exoma, genoma completo, identificación de mosaicos. Tercera generación TGS (cadenas individuales sin amplificación). Técnicas de transferencia: Southern (ADN), Northern (ARN), Western (proteínas). Enzimas de restricción. Microarreglos ADN y ARN. CGH (hibridación genómica comparativa) para tumores. FISH (hibridación fluorescente in situ).`,

  herencia_mendel: `Herencia Mendeliana: Leyes de Mendel (1ª segregación, 2ª independencia). Cuadro de Punnett, cruzamiento de prueba. Patrones herencia monogénica: autosómica dominante (AD), autosómica recesiva (AR), dominante ligada X, recesiva ligada X, ligada Y, pseudoautosómica. Análisis de pedigrís. Fenotipos dominantes: haploinsuficiencia, efecto negativo dominante, ganancia de función. Desviaciones mendelianas: penetrancia reducida (mano hendida gen HOXD13 70%), expresividad variable, pleiotropía (neurofibromatosis NF1 gen supresor 17q11.2), codominancia (grupo ABO), dominancia incompleta, anticipación (expansión tripletes), impronta genómica (Prader-Willi vs Angelman), mosaicismo, heterogeneidad alélica y de locus. Herencia pseudoautosómica (discondrosteosis gen Xp e Yp).`,

  genetica_poblaciones: `Genética de Poblaciones: población mendeliana, acervo genético, frecuencias alélicas y genotípicas. Ley Hardy-Weinberg 1908 (p²+2pq+q²=1): condiciones (población grande, cruza aleatoria, sin mutación apreciable, sin selección, sin migración). Cálculo frecuencias: co-dominancia (sistema MN), AR, AD. Fuerzas evolutivas: mutación (tasa mutación), selección natural (eficacia biológica, selección a favor del heterocigota: malaria-hemoglobina S, talasemias, G6PDH, Tay-Sachs), deriva genética, efecto fundador (Huntington en Lago Maracaibo Venezuela), cuello de botella, migración/flujo génico. Consanguinidad (aumento homocigotas). Aplicaciones: cálculo frecuencia portadores en fenilcetonuria, fibrosis quística.`,

  variabilidad: `Variabilidad Genética: tipos de variaciones (SNPs, indels, CNVs, microsatélites/STRs, minisatélites/VNTRs). Polimorfismo genético (frecuencia alelo >1%). Variabilidad de novo vs heredada. Mutaciones: puntuales (silenciosas, missense, nonsense), inserciones, deleciones, duplicaciones. Expansión de tripletes (enfermedad Huntington CAG, X frágil CGG). Marcadores genéticos: características (polimórficos, herencia mendeliana, heterocigocidad alta, parámetros conocidos). Aplicaciones en medicina forense, identificación, diagnóstico. Proyectos HapMap y 1000 Genomas. Desequilibrio de ligamiento. Haplotipos.`,

  enf_monogenicas: `Enfermedades Monogénicas: bases moleculares. Tipos mutaciones según efecto proteico: pérdida de función (AR principalmente), ganancia de función (AD), efecto negativo dominante (colágeno en osteogénesis imperfecta), nueva propiedad. Inactivación cromosoma X (lyonización): parche de gato carey, portadoras manifiestas. Hemoglobinopatías: globinas alfa y beta, hemoglobinas inestables, drepanocitosis (HbS, mutación Glu→Val posición 6), talasemia alfa y beta (tipos I-IV, mutaciones puntuales y grandes deleciones). Defectos enzimáticos: G6PDH (deficiencia ligada X, crisis hemolíticas). Fibrosis Quística: gen CFTR >20 exones, 400+ mutaciones, delta-F508 70% casos (deleción Phe508), mutaciones Clase I-VI, canal cloruro. Distrofia Muscular Duchenne/Becker: gen distrofina Xp21 (gen más grande), proteína distrofina. Síndrome X frágil: expansión CGG en FMR1. Huntington: expansión CAG en HTT, anticipación, AD con penetrancia completa. Hipercolesterolemia familiar: receptor LDL.`,

  enf_complejas: `Enfermedades Complejas / Multifactoriales: no mendelianas, resultado interacción genes+ambiente. Características: agregación familiar, frecuencia disminuye en parientes lejanos, concordancia MZ>DZ pero MZ<100%. Riesgo relativo λr = riesgo en familiar/riesgo población. Concordancia y discordancia en gemelos. Herencia umbral (umbral de manifestación). GWAS (Genome Wide Association Studies): análisis miles de SNPs, desequilibrio de ligamiento, OR/RR, limitaciones (muchos individuos, falsos positivos, no considera interacciones). Diabetes Mellitus tipo 1: susceptibilidad HLA DR3 y DR4, alelos protectores DR2, concordancia MZ 40%, DZ 4.8%. Diabetes tipo 2: concordancia MZ 80%. Enfermedad Alzheimer: gen APOE ε4 (cromosoma 19), APP (crom 21), Presenilinas PS1 (crom 14) y PS2 (crom 1), péptido beta-amiloide. Esclerosis múltiple: λr 40 en 1er grado.`,

  cancer: `Genética del Cáncer: origen monoclonal (una célula con mutación ventaja proliferativa). Progresión tumoral: expansión clonal + mutaciones acumuladas + heterogeneidad. Genes implicados: protooncogenes→oncogenes (mutaciones ganancia función, basta un alelo mutado), genes supresores tumor (mutaciones pérdida función, necesarios AMBOS alelos: teoría dos golpes Knudson), genes reguladores apoptosis, reparación ADN, inmortalidad celular, miRNAs (oncomirs). Oncogenes: receptores factores crecimiento, tirosina quinasas, factores transcripción, ciclinas. Genes supresores tumor: RB (retinoblastoma, crom 13q14), TP53 (guardián genoma, crom 17p13), BRCA1/BRCA2 (cáncer mama/ovario), APC (cáncer colorrectal), NF-1. Retinoblastoma: herencia AD, mutación germinal + somática. Translocaciones en cáncer: Philadelphia t(9;22) BCR-ABL en LMC, t(8;14) c-myc en linfoma Burkitt. Telomerasa: inmortalización. Factores no genéticos: dieta, tabaco, radiación, productos químicos, virus. Tipos según origen: sarcomas (mesenquima), carcinomas (epitelio), hematopoyéticos. miRNA oncomirs: regulan oncogenes y supresores.`,

  pesquisa_neonatal: `Pesquisa Neonatal de Enfermedades Congénitas: concepto de tamizaje/screening neonatal universal. Marco legal argentino: Ley 23.413 (1986) fenilcetonuria obligatoria, Ley 23.874 (1990) hipotiroidismo congénito, Ley 24.438 (1995) fibrosis quística, Ley 26.279 (2007) amplía a 8 enfermedades. Enfermedades en programa obligatorio: fenilcetonuria (PKU: déficit fenilalanina hidroxilasa, acumulación Phe, daño neurológico, tratamiento dieta), hipotiroidismo congénito (déficit hormona tiroidea, medición TSH/T4), fibrosis quística (screening con IRT-IRT o IRT-ADN), galactosemia (déficit galactosa-1-fosfato uridiltransferasa), hiperplasia suprarrenal congénita (déficit 21-hidroxilasa, virilización), deficiencia de biotinidasa, retinopatía del prematuro, Chagas, sífilis. Momento de toma de muestra: entre 48h y 5-7 días de vida. Diagnóstico prenatal: técnicas invasivas (amniocentesis, biopsia vellosidades coriónicas, cordocentesis) y no invasivas (ecografía, ADN fetal libre en sangre materna). Consejo genético: proceso de comunicación sobre diagnóstico, pronóstico, herencia, opciones.`,
};

// ===================================
// AI API CALL
// ===================================
async function callClaudeAPI(prompt, maxTokens = 3000) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error.message);
  return data.content.map((c) => c.text || "").join("");
}

// ===================================
// RESUMENES
// ===================================
let currentResumenTopic = null;
const resumenCache = {};

function loadResumen(topicId, btn) {
  currentResumenTopic = topicId;

  document
    .querySelectorAll(".topic-btn")
    .forEach((b) => b.classList.remove("active"));

  if (btn) btn.classList.add("active");

  const topic = TOPICS.find((t) => t.id === topicId);
  const resumen = RESUMENES[topicId];
  const container = document.getElementById("resumen-content");

  if (!resumen) {
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-header">
          <h3>${topic ? `${topic.emoji} ${topic.label}` : "Tema no encontrado"}</h3>
        </div>
        <div class="content-card-body">
          <div class="error-state">
            Todavía no hay resumen cargado para este tema.
          </div>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="content-card">
      <div class="content-card-header">
        <h3>${topic.emoji} ${resumen.titulo}</h3>
        <span style="color:var(--text-muted);font-size:0.8rem">
          Fuente principal: resúmenes y teóricos de cátedra
        </span>
      </div>

      <div class="content-card-body">
        <div class="ai-content">
          ${renderResumen(resumen)}
        </div>
      </div>
    </div>
  `;
}

function renderResumen(resumen) {
  return resumen.secciones
    .map((seccion) => {
      if (seccion.tipo === "texto") {
        return `
          <h4>${seccion.titulo}</h4>
          ${seccion.contenido.map((p) => `<p>${p}</p>`).join("")}
        `;
      }

      if (seccion.tipo === "lista") {
        return `
          <h4>${seccion.titulo}</h4>
          <ul>
            ${seccion.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        `;
      }

      if (seccion.tipo === "alerta") {
        return `
          <div class="highlight-box">
            <strong>${seccion.titulo}:</strong> ${seccion.contenido}
          </div>
        `;
      }

      if (seccion.tipo === "advertencia") {
        return `
          <div class="warning-box">
            <strong>${seccion.titulo}:</strong> ${seccion.contenido}
          </div>
        `;
      }

      return "";
    })
    .join("");
}
// Auto-load first topic
document.addEventListener("DOMContentLoaded", () => {
  renderPlan();
  populateSelects();
  initTPTopics();
});

// ===================================
// FLASHCARDS
// ===================================
let fcCards = [];
let fcIndex = 0;
let fcCorrect = 0;
let fcIncorrect = 0;

function loadFlashcards() {
  const topicId = document.getElementById("fc-topic-select").value;
  const container = document.getElementById("fc-content");

  fcCards = FLASHCARDS[topicId] || [];
  fcIndex = 0;
  fcCorrect = 0;
  fcIncorrect = 0;

  if (!fcCards.length) {
    container.innerHTML = `
      <div class="error-state">
        Todavía no hay flashcards cargadas para este tema.
      </div>
    `;
    return;
  }

  renderFlashcard();
}

function renderFlashcard() {
  const container = document.getElementById("fc-content");
  if (!fcCards.length) return;

  const card = fcCards[fcIndex];
  const pct = Math.round((fcIndex / fcCards.length) * 100);
  const reviewId = `flashcard-${card.id || card.pregunta}`;

  container.innerHTML = `
    <div class="flashcard-progress">
      <span class="fc-count">${fcIndex + 1} / ${fcCards.length}</span>
      <div class="fc-bar"><div class="fc-fill" style="width:${pct}%"></div></div>
      <span style="font-size:0.8rem;color:var(--green)">✓ ${fcCorrect}</span>
      <span style="font-size:0.8rem;color:var(--red)">✗ ${fcIncorrect}</span>
    </div>

    <div class="flashcard" id="flashcard-main" onclick="flipCard()">
      <div class="flashcard-inner">
        <div class="fc-front">
          <div class="fc-label">Pregunta — Toca para ver respuesta</div>
          <div class="fc-question">${card.pregunta}</div>
          <div class="fc-hint">👆 Toca la tarjeta para ver la respuesta</div>
        </div>

        <div class="fc-back">
          <div class="fc-label">✅ Respuesta</div>
          <div class="fc-answer">${card.respuesta}</div>
        </div>
      </div>
    </div>

    <div class="review-btn-container">
      <button class="review-btn" onclick="toggleFlashcardReview()">
        ${
          isMarkedForReview(reviewId)
            ? "⭐ Marcada para repasar"
            : "☆ Marcar para repasar"
        }
      </button>
    </div>

    <div class="fc-controls">
      <button class="fc-btn danger" onclick="fcAnswer(false)">✗ No sabía</button>
      <button class="fc-btn success" onclick="fcAnswer(true)">✓ Lo supe</button>
    </div>

    ${
      fcIndex === fcCards.length - 1
        ? `<p style="text-align:center;margin-top:20px;color:var(--text-muted);font-size:0.85rem">¡Completaste todas las flashcards! ✨</p>`
        : ""
    }
  `;
}

function flipCard() {
  document.getElementById("flashcard-main")?.classList.toggle("flipped");
}

function fcAnswer(correct) {
  if (correct) fcCorrect++;
  else fcIncorrect++;
  fcIndex = (fcIndex + 1) % fcCards.length;
  renderFlashcard();
}

function toggleFlashcardReview() {
  const card = fcCards[fcIndex];

  const id = `flashcard-${card.id || card.pregunta}`;

  toggleReviewItem({
    id,
    tipo: "Flashcard",
    tema: document.getElementById("fc-topic-select").value,
    pregunta: card.pregunta,
    respuesta: card.respuesta,
  });

  renderFlashcard();
}

// ===================================
// MULTIPLE CHOICE
// ===================================
let quizData = [];
let quizAnswers = {};
let reviewItems = JSON.parse(localStorage.getItem("reviewItems")) || [];

function saveReviewItems() {
  localStorage.setItem("reviewItems", JSON.stringify(reviewItems));
}

function toggleReviewItem(item) {
  const exists = reviewItems.some((review) => review.id === item.id);

  if (exists) {
    reviewItems = reviewItems.filter((review) => review.id !== item.id);
  } else {
    reviewItems.push(item);
  }

  saveReviewItems();
}

function isMarkedForReview(id) {
  return reviewItems.some((item) => item.id === id);
}

function loadQuiz() {
  const topicId = document.getElementById("quiz-topic-select").value;
  const container = document.getElementById("quiz-content");

  quizData = QUIZ[topicId] || [];
  quizAnswers = {};

  if (!quizData.length) {
    document.getElementById("score-val").textContent = "0";
    document.getElementById("score-total").textContent = "0";
    document.getElementById("score-pct").textContent = "Sin preguntas cargadas";

    container.innerHTML = `
      <div class="error-state">
        Todavía no hay preguntas cargadas para este tema.
      </div>
    `;
    return;
  }

  renderQuiz();
}

function renderQuiz() {
  const container = document.getElementById("quiz-content");
  const correct = Object.values(quizAnswers).filter((a) => a.correct).length;
  const answered = Object.keys(quizAnswers).length;
  document.getElementById("score-val").textContent = correct;
  document.getElementById("score-total").textContent = answered;
  document.getElementById("score-pct").textContent =
    answered > 0
      ? `${Math.round((correct / answered) * 100)}% correcto`
      : "Responde las preguntas";

  container.innerHTML = quizData
    .map((q, qi) => {
      const ans = quizAnswers[qi];
      return `
    <div class="quiz-question-card">
      <div class="q-num">Pregunta ${qi + 1} de ${quizData.length}</div>
      <div class="q-text">${q.pregunta}</div>
      <div class="q-options">
        ${q.opciones
          .map((opt, oi) => {
            let cls = "q-option";
            if (ans) {
              if (oi === q.correcta) cls += " correct";
              else if (ans.chosen === oi) cls += " wrong";
            } else {
              if (quizAnswers[qi]?.chosen === oi) cls += " selected";
            }
            return `<div class="${cls}" onclick="selectAnswer(${qi}, ${oi})">
            <div class="q-option-key">${String.fromCharCode(65 + oi)}</div>
            <div>${opt.replace(/^[A-D]\)\s*/, "")}</div>
          </div>`;
          })
          .join("")}
      </div>
      <div class="review-btn-container">
  <button class="review-btn" onclick="toggleQuizReview(${qi})">
    ${
      isMarkedForReview(`quiz-${q.id || qi}`)
        ? "⭐ Marcada para repasar"
        : "☆ Marcar para repasar"
    }
  </button>
</div>
      <div class="q-explanation ${ans ? "show" : ""}">
        <strong>💡 Explicación:</strong> ${q.explicacion}
      </div>
    </div>`;
    })
    .join("");
}

function selectAnswer(qIdx, optIdx) {
  if (quizAnswers[qIdx]) return;
  quizAnswers[qIdx] = {
    chosen: optIdx,
    correct: optIdx === quizData[qIdx].correcta,
  };
  renderQuiz();
  document
    .querySelectorAll(".quiz-question-card")
    [qIdx]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function toggleQuizReview(qi) {
  const q = quizData[qi];
  const id = `quiz-${q.id || qi}`;

  toggleReviewItem({
    id,
    tipo: "Quiz",
    tema: document.getElementById("quiz-topic-select").value,
    pregunta: q.pregunta,
    respuesta: q.opciones[q.correcta],
    explicacion: q.explicacion,
  });

  renderQuiz();
}
// ===================================
// EJERCICIOS APLICADOS
// ===================================

function loadEjercicios() {
  const topicId = document.getElementById("ej-topic-select").value;
  const container = document.getElementById("ejercicios-content");

  const ejercicios = EJERCICIOS[topicId] || [];

  if (!ejercicios.length) {
    container.innerHTML = `
      <div class="error-state">
        Todavía no hay ejercicios cargados para este tema.
      </div>
    `;
    return;
  }

  container.innerHTML = ejercicios
    .map((ej, i) => {
      const marked = isMarkedForReview(ej.id);

      return `
        <div class="ejercicio-card">
          <div class="ejercicio-header">
            <div class="ejercicio-num">${i + 1}</div>
            <div class="ejercicio-title">${ej.titulo}</div>
            <span class="ejercicio-tag">${ej.tipo}</span>
          </div>

          <div class="ejercicio-text">${ej.enunciado}</div>

          <textarea
            class="ejercicio-input"
            id="respuesta-${ej.id}"
            placeholder="Escribe tu desarrollo aquí antes de ver la solución..."
          ></textarea>

          <div class="ejercicio-actions">
            <button class="ejercicio-btn" onclick="toggleSolucion(this)">
              🙈 Ver solución
            </button>

            <button class="review-btn" onclick="toggleEjercicioReview('${topicId}', '${ej.id}')">
              ${marked ? "⭐ Marcado para repasar" : "☆ Marcar para repasar"}
            </button>
          </div>

          <div class="ejercicio-solucion">
            <strong>✅ Solución sugerida:</strong><br>
            ${ej.solucion}
          </div>
        </div>
      `;
    })
    .join("");
}

function toggleEjercicioReview(topicId, ejercicioId) {
  const ejercicio = EJERCICIOS[topicId].find((ej) => ej.id === ejercicioId);

  if (!ejercicio) return;

  const respuestaUsuario =
    document.getElementById(`respuesta-${ejercicio.id}`)?.value || "";

  toggleReviewItem({
    id: ejercicio.id,
    tipo: "Ejercicio",
    tema: topicId,
    pregunta: ejercicio.enunciado,
    respuesta: ejercicio.solucion,
    respuestaUsuario: respuestaUsuario,
  });

  loadEjercicios();
}

function toggleSolucion(btn) {
  const card = btn.closest(".ejercicio-card");
  const sol = card.querySelector(".ejercicio-solucion");

  sol.classList.toggle("show");

  btn.textContent = sol.classList.contains("show")
    ? "🙉 Ocultar solución"
    : "🙈 Ver solución";
}

// ===================================
// REPASAR
// ===================================

let currentReviewFilter = "todos";

function renderReviewSection() {
  const container = document.getElementById("review-content");

  if (!container) return;

  const filteredItems =
    currentReviewFilter === "todos"
      ? reviewItems
      : reviewItems.filter((item) => item.tipo === currentReviewFilter);

  if (!filteredItems.length) {
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-body">
          <div class="error-state">
            Todavía no tienes preguntas marcadas para repasar.
          </div>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredItems
    .map((item) => {
      return `
        <div class="content-card review-card">
          <div class="content-card-header">
            <h3>${item.tipo}</h3>
            <span style="color:var(--text-muted);font-size:0.8rem">
              ${item.tema}
            </span>
          </div>

          <div class="content-card-body">
            <div class="q-text">${item.pregunta}</div>

            ${
              item.respuestaUsuario
                ? `
                  <div class="review-user-answer">
                    <strong>Tu respuesta:</strong><br>
                    ${item.respuestaUsuario}
                  </div>
                `
                : ""
            }

            <div class="q-explanation show">
              <strong>Respuesta / solución:</strong><br>
              ${item.respuesta}
            </div>

            ${
              item.explicacion
                ? `
                  <div class="q-explanation show">
                    <strong>Explicación:</strong><br>
                    ${item.explicacion}
                  </div>
                `
                : ""
            }

            <div class="review-btn-container">
              <button class="review-btn" onclick="removeReviewItem('${item.id}')">
                ✕ Quitar de repaso
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function removeReviewItem(id) {
  reviewItems = reviewItems.filter((item) => item.id !== id);
  saveReviewItems();

  // refresca la sección Repasar
  renderReviewSection();

  // refresca botones/estrellitas según la sección que esté abierta
  const activeSection = document.querySelector(".section.active")?.id;

  if (activeSection === "flashcards") {
    renderFlashcard();
  }

  if (activeSection === "multiple") {
    renderQuiz();
  }

  if (activeSection === "ejercicios") {
    loadEjercicios();
  }

  if (activeSection === "tp") {
    initTPTopics();
  }
}

function setReviewFilter(filter, btn) {
  currentReviewFilter = filter;

  document
    .querySelectorAll(".review-filter-nav .topic-btn")
    .forEach((b) => b.classList.remove("active"));

  btn.classList.add("active");

  renderReviewSection();
}

// ===================================
// TPS
// ===================================

function initTPTopics() {
  const container = document.getElementById("tp-topics");

  container.innerHTML = Object.keys(TPS)
    .map(
      (topicId, i) => `
        <button
          class="topic-btn ${i === 0 ? "active" : ""}"
          onclick="loadTP('${topicId}', this)"
        >
          ${TOPICS.find((t) => t.id === topicId)?.label || topicId}
        </button>
      `,
    )
    .join("");

  const first = Object.keys(TPS)[0];

  if (first) {
    loadTP(first);
  }
}

function loadTP(topicId, btn = null) {
  document
    .querySelectorAll("#tp-topics .topic-btn")
    .forEach((b) => b.classList.remove("active"));

  if (btn) btn.classList.add("active");

  const container = document.getElementById("tp-content");

  const preguntas = TPS[topicId] || [];

  if (!preguntas.length) {
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-body">
          <div class="error-state">
            No hay TP cargados para este tema.
          </div>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = preguntas
    .map(
      (p, i) => `
        <div class="tp-card">

          <div class="tp-top">
            <div class="tp-problem">
              ${p.problema || "TP"}
              ${p.inciso ? ` · ${p.inciso}` : ""}
            </div>

            ${p.tema ? `<div class="tp-topic">${p.tema}</div>` : ""}
          </div>

          <button class="tp-question" onclick="toggleTP(this)">
            <span>${i + 1}. ${p.pregunta}</span>
            <span class="tp-toggle">+</span>
          </button>

          <div class="tp-answer">

            <div class="tp-answer-content">
              ${p.respuesta}
            </div>

            ${
              p.clave
                ? `
                  <div class="tp-extra tp-key">
                    <strong>💡 Punto clave:</strong><br>
                    ${p.clave}
                  </div>
                `
                : ""
            }

            ${
              p.errorComun
                ? `
                  <div class="tp-extra tp-warning">
                    <strong>⚠️ Error común:</strong><br>
                    ${p.errorComun}
                  </div>
                `
                : ""
            }

            <div class="tp-actions">
  <button
    class="review-btn"
    onclick="toggleTPReview('${topicId}', ${i})"
  >
    ${
      isMarkedForReview(`tp-${topicId}-${p.id || i}`)
        ? "⭐ Marcado para repasar"
        : "☆ Marcar para repasar"
    }
  </button>
</div>

          </div>
        </div>
      `,
    )
    .join("");
}

function toggleTP(btn) {
  const answer = btn.nextElementSibling;

  answer.classList.toggle("show");

  btn.querySelector(".tp-toggle").textContent = answer.classList.contains(
    "show",
  )
    ? "−"
    : "+";
}

function toggleTPReview(topicId, index) {
  const item = TPS[topicId][index];
  const id = `tp-${topicId}-${item.id || index}`;

  toggleReviewItem({
    id,
    tipo: "TP",
    tema: topicId,
    pregunta: item.pregunta,
    respuesta: item.respuesta,
  });

  const btn = event.target;
  btn.textContent = isMarkedForReview(id)
    ? "⭐ Marcado para repasar"
    : "☆ Marcar para repasar";
}

// ===================================
// BUSQUEDA
// ===================================

function runGlobalSearch() {
  const query = document
    .getElementById("global-search")
    .value.toLowerCase()
    .trim();

  const container = document.getElementById("search-results");

  if (!query) {
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-body">
          Escribe algo para buscar.
        </div>
      </div>
    `;
    return;
  }

  const results = [];

  // RESUMENES
  Object.entries(RESUMENES).forEach(([topic, resumen]) => {
    resumen.secciones.forEach((seccion, index) => {
      const titulo = seccion.titulo || "";

      const contenido = [
        ...(seccion.contenido || []),
        ...(seccion.items || []),
      ].join(" ");

      const textoBuscable = `${resumen.titulo} ${titulo} ${contenido}`
        .replace(/<[^>]*>/g, "")
        .toLowerCase();

      if (textoBuscable.includes(query)) {
        results.push({
          tipo: "Resumen",
          tema: topic,
          index,
          titulo: `${resumen.titulo} — ${titulo}`,
          contenido: contenido.replace(/<[^>]*>/g, "").slice(0, 280) + "...",
        });
      }
    });
  });

  // FLASHCARDS
  Object.entries(FLASHCARDS).forEach(([topic, cards]) => {
    cards.forEach((card, index) => {
      if (
        card.pregunta.toLowerCase().includes(query) ||
        card.respuesta.toLowerCase().includes(query)
      ) {
        results.push({
          tipo: "Flashcard",
          tema: topic,
          index,
          titulo: card.pregunta,
          contenido: card.respuesta,
        });
      }
    });
  });

  // QUIZ
  Object.entries(QUIZ).forEach(([topic, preguntas]) => {
    preguntas.forEach((q, index) => {
      if (
        q.pregunta.toLowerCase().includes(query) ||
        q.explicacion.toLowerCase().includes(query)
      ) {
        results.push({
          tipo: "Quiz",
          tema: topic,
          index,
          titulo: q.pregunta,
          contenido: q.explicacion,
        });
      }
    });
  });

  // EJERCICIOS
  Object.entries(EJERCICIOS).forEach(([topic, ejercicios]) => {
    ejercicios.forEach((ej, index) => {
      if (
        ej.enunciado.toLowerCase().includes(query) ||
        ej.solucion.toLowerCase().includes(query)
      ) {
        results.push({
          tipo: "Ejercicio",
          tema: topic,
          index,
          titulo: ej.titulo,
          contenido: ej.solucion,
        });
      }
    });
  });

  // TPS
  Object.entries(TPS).forEach(([topic, preguntas]) => {
    preguntas.forEach((p, index) => {
      if (
        p.pregunta.toLowerCase().includes(query) ||
        p.respuesta.toLowerCase().includes(query)
      ) {
        results.push({
          tipo: "TP",
          tema: topic,
          index,
          titulo: p.pregunta,
          contenido: p.respuesta,
        });
      }
    });
  });

  if (!results.length) {
    container.innerHTML = `
      <div class="content-card">
        <div class="content-card-body">
          No se encontraron resultados.
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = results
    .map(
      (r) => `
        <div class="content-card search-result-card clickable"
        onclick="openSearchResult('${r.tipo}', '${r.tema}', ${r.index})">
          <div class="content-card-body">
            <div class="search-type">${r.tipo} • ${r.tema}</div>
            <h4>${r.titulo}</h4>
            <p>${r.contenido}</p>
          </div>
        </div>
      `,
    )
    .join("");
}

function openSearchResult(tipo, tema, index) {
  switch (tipo) {
    case "Resumen":
      showSection("resumenes");
      loadResumen(tema);

      setTimeout(() => {
        document
          .querySelectorAll(".ai-content h4")
          [index]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);
      break;

    case "Flashcard":
      showSection("flashcards");
      document.getElementById("fc-topic-select").value = tema;
      loadFlashcards();
      fcIndex = index;
      renderFlashcard();
      break;

    case "Quiz":
      showSection("multiple");
      document.getElementById("quiz-topic-select").value = tema;
      loadQuiz();
      setTimeout(() => {
        document
          .querySelectorAll(".quiz-question-card")
          [index]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
      break;

    case "Ejercicio":
      showSection("ejercicios");
      document.getElementById("ej-topic-select").value = tema;
      loadEjercicios();
      setTimeout(() => {
        document
          .querySelectorAll(".ejercicio-card")
          [index]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
      break;

    case "TP":
      showSection("tp");
      loadTP(tema);
      setTimeout(() => {
        const card = document.querySelectorAll(".tp-card")[index];
        if (card) {
          const btn = card.querySelector(".tp-question");
          const answer = card.querySelector(".tp-answer");

          if (!answer.classList.contains("show")) toggleTP(btn);

          card.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 50);
      break;
  }
}

// ===================================
// TEST FINAL
// ===================================

let currentFinalTest = null;
let finalAnswers = {};

function initFinalTestSection() {
  renderFinalTestHistory();

  const selector = document.getElementById("final-test-selector");
  if (!selector) return;

  selector.innerHTML = FINAL_TESTS.map(
    (test) => `
    <button class="final-test-btn" onclick="startFinalTest('${test.id}')">
      ${test.titulo}
    </button>
  `,
  ).join("");
}

function startFinalTest(testId) {
  currentFinalTest = FINAL_TESTS.find((t) => t.id === testId);
  finalAnswers = {};

  const container = document.getElementById("final-test-content");

  container.innerHTML = `
    <div class="final-test-box">
      <h3>${currentFinalTest.titulo}</h3>

      ${currentFinalTest.preguntas
        .map(
          (q, i) => `
        <div class="final-question">
          <div class="question-title">
            <span>${i + 1}.</span> ${q.pregunta}
          </div>

          <div class="question-topic">${q.tema}</div>

          ${
            q.tipo === "alternativa"
              ? q.opciones
                  .map(
                    (op, j) => `
                <label class="final-option">
                  <input type="radio" name="q-${i}" onchange="saveFinalAnswer(${i}, ${j})">
                  ${op}
                </label>
              `,
                  )
                  .join("")
              : `
                <textarea 
                  class="final-textarea" 
                  placeholder="Escribe tu desarrollo..."
                  oninput="saveFinalAnswer(${i}, this.value)"
                ></textarea>
              `
          }
        </div>
      `,
        )
        .join("")}

      <button class="final-submit" onclick="finishFinalTest()">
        Terminar prueba
      </button>
    </div>
  `;
}

function saveFinalAnswer(index, answer) {
  finalAnswers[index] = answer;
}

function finishFinalTest() {
  let correctas = 0;
  let totalAlternativas = 0;

  currentFinalTest.preguntas.forEach((q, i) => {
    if (q.tipo === "alternativa") {
      totalAlternativas++;

      if (finalAnswers[i] === q.correcta) {
        correctas++;
      }
    }
  });

  const nota =
    totalAlternativas === 0
      ? 0
      : ((correctas / totalAlternativas) * 10).toFixed(1);

  const result = {
    id: currentFinalTest.id,
    titulo: currentFinalTest.titulo,
    fecha: new Date().toLocaleDateString(),
    correctas,
    total: totalAlternativas,
    nota,
  };

  const history = JSON.parse(localStorage.getItem("finalTestHistory")) || [];
  history.push(result);

  localStorage.setItem("finalTestHistory", JSON.stringify(history));

  renderFinalResults(result);
  renderFinalTestHistory();
}

function renderFinalResults(result) {
  const container = document.getElementById("final-test-content");

  container.innerHTML = `
    <div class="final-result">
      <h3>Resultado: ${result.titulo}</h3>
      <p>Correctas: ${result.correctas}/${result.total}</p>
      <p>Nota: <strong>${result.nota}/10</strong></p>

      <h4>Corrección y desarrollo</h4>

      ${currentFinalTest.preguntas
        .map(
          (q, i) => `
        <div class="final-review-card">
          <strong>${i + 1}. ${q.pregunta}</strong>

          ${
            q.tipo === "alternativa"
              ? `
                <p>Tu respuesta: ${q.opciones[finalAnswers[i]] || "Sin responder"}</p>
                <p>Correcta: ${q.opciones[q.correcta]}</p>
                <p>${q.desarrollo}</p>
              `
              : `
                <p><strong>Tu desarrollo:</strong> ${finalAnswers[i] || "Sin responder"}</p>
                <p><strong>Pauta:</strong> ${q.pauta}</p>
              `
          }
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}

function renderFinalTestHistory() {
  const history = JSON.parse(localStorage.getItem("finalTestHistory")) || [];

  const box = document.getElementById("final-test-history");

  if (!box) return;

  if (history.length === 0) {
    box.innerHTML = `

<div class="empty-history">

🧪 Aún no has realizado pruebas

</div>

`;

    return;
  }

  box.innerHTML = history
    .map((item) => {
      const porcentaje = Math.round((item.correctas / item.total) * 100);

      let colorClass = "danger";

      if (porcentaje >= 80) {
        colorClass = "success";
      } else if (porcentaje >= 60) {
        colorClass = "warning";
      }

      return `

<div class="test-history-card">

<div class="history-left">

<div class="history-title">
${item.titulo}
</div>

<div class="history-date">
📅 ${item.fecha}
</div>

</div>

<div class="history-right">

<div class="
score-pill
${colorClass}
">

📊
${item.correctas}/${item.total}

</div>

<div class="
grade-pill
${colorClass}
">

⭐
${item.nota}/10

</div>

</div>

</div>

`;
    })
    .join("");
}

function clearFinalHistory(){

localStorage.removeItem(
"finalTestHistory"
);

renderFinalTestHistory();

}