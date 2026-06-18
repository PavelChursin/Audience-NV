const criteria = [
  ["market", "Размер рынка"],
  ["competition", "Конкуренция"],
  ["dealSpeed", "Скорость решения"],
  ["ticket", "Средний чек"],
  ["buyProb", "Вероятность покупки"],
  ["urgency", "Срочность боли"],
  ["budget", "Бюджет"],
  ["decisionAccess", "Доступ к ЛПР"]
];

const segments = [
  { name: "Remittance / EMI / cross-border payments", market: 8, competition: 5, dealSpeed: 7, ticket: 8, buyProb: 9, urgency: 10, budget: 8, decisionAccess: 6, score: 7.85 },
  { name: "Криптобиржи", market: 7, competition: 5, dealSpeed: 7, ticket: 8, buyProb: 9, urgency: 10, budget: 8, decisionAccess: 6, score: 7.70 },
  { name: "Маркетплейсы", market: 9, competition: 6, dealSpeed: 6, ticket: 8, buyProb: 8, urgency: 8, budget: 8, decisionAccess: 6, score: 7.55 },
  { name: "Криптообменники / on-off ramps", market: 6, competition: 6, dealSpeed: 8, ticket: 6, buyProb: 9, urgency: 10, budget: 6, decisionAccess: 7, score: 7.35 },
  { name: "iGaming / online casino", market: 8, competition: 5, dealSpeed: 6, ticket: 8, buyProb: 8, urgency: 9, budget: 8, decisionAccess: 5, score: 7.35 },
  { name: "Финтех", market: 9, competition: 4, dealSpeed: 7, ticket: 7, buyProb: 8, urgency: 8, budget: 7, decisionAccess: 6, score: 7.20 },
  { name: "Брокеры / trading / wealthtech", market: 7, competition: 5, dealSpeed: 6, ticket: 8, buyProb: 8, urgency: 9, budget: 8, decisionAccess: 5, score: 7.20 },
  { name: "Банки", market: 8, competition: 3, dealSpeed: 3, ticket: 10, buyProb: 7, urgency: 9, budget: 10, decisionAccess: 3, score: 7.00 },
  { name: "Betting / sportsbook", market: 7, competition: 5, dealSpeed: 6, ticket: 7, buyProb: 8, urgency: 9, budget: 7, decisionAccess: 5, score: 6.95 },
  { name: "Международные SaaS-сервисы", market: 9, competition: 6, dealSpeed: 6, ticket: 7, buyProb: 7, urgency: 6, budget: 7, decisionAccess: 6, score: 6.85 },
  { name: "МФО / digital lenders", market: 7, competition: 6, dealSpeed: 8, ticket: 5, buyProb: 8, urgency: 8, budget: 5, decisionAccess: 7, score: 6.80 },
  { name: "HR-tech", market: 7, competition: 7, dealSpeed: 7, ticket: 6, buyProb: 7, urgency: 7, budget: 6, decisionAccess: 7, score: 6.75 },
  { name: "Страховые компании", market: 8, competition: 5, dealSpeed: 4, ticket: 8, buyProb: 7, urgency: 7, budget: 8, decisionAccess: 5, score: 6.70 },
  { name: "Delivery-сервисы", market: 7, competition: 6, dealSpeed: 7, ticket: 6, buyProb: 7, urgency: 7, budget: 7, decisionAccess: 6, score: 6.65 },
  { name: "Телеком", market: 7, competition: 6, dealSpeed: 4, ticket: 9, buyProb: 6, urgency: 7, budget: 8, decisionAccess: 4, score: 6.55 },
  { name: "Сервисы аренды", market: 7, competition: 6, dealSpeed: 7, ticket: 6, buyProb: 6, urgency: 7, budget: 6, decisionAccess: 6, score: 6.40 },
  { name: "Образовательные платформы", market: 6, competition: 7, dealSpeed: 5, ticket: 5, buyProb: 5, urgency: 5, budget: 4, decisionAccess: 6, score: 5.35 }
];

const channels = [
  ["Финтех", 4, 5, 3, 5, 4, 4],
  ["Банки", 3, 4, 2, 5, 4, 5],
  ["МФО", 3, 4, 4, 4, 4, 3],
  ["Криптобиржи", 4, 4, 5, 4, 4, 4],
  ["Криптообменники", 3, 3, 5, 3, 4, 3],
  ["Betting", 3, 4, 4, 5, 4, 4],
  ["iGaming", 3, 4, 4, 5, 4, 4],
  ["Маркетплейсы", 4, 5, 3, 4, 4, 5],
  ["Delivery", 3, 4, 3, 4, 4, 4],
  ["Сервисы аренды", 4, 4, 3, 3, 4, 4],
  ["HR-tech", 4, 5, 3, 4, 5, 4],
  ["Образование", 3, 4, 2, 4, 4, 3],
  ["Страхование", 3, 4, 2, 5, 4, 5],
  ["Телеком", 3, 4, 2, 5, 4, 5],
  ["Международные SaaS", 5, 5, 3, 4, 5, 4],
  ["Remittance / EMI", 4, 5, 3, 5, 4, 5],
  ["Брокеры / trading", 4, 4, 4, 5, 4, 4]
];

const economics = [
  ["Финтех", "$25k–120k", "$3k–10k", "1.5–4 мес.", "4–8", "$250–700", "$6k–25k", "$75k–400k"],
  ["Банки", "$100k–500k+", "$10k–40k", "6–12 мес.", "8–16", "$800–2,500", "$30k–120k", "$500k–3m+"],
  ["МФО", "$15k–60k", "$2k–8k", "1–3 мес.", "3–6", "$150–400", "$4k–12k", "$45k–150k"],
  ["Криптобиржи", "$40k–250k", "$5k–20k", "2–5 мес.", "4–9", "$300–900", "$10k–40k", "$150k–900k"],
  ["Криптообменники", "$20k–80k", "$2k–8k", "1–3 мес.", "3–6", "$200–500", "$5k–18k", "$60k–240k"],
  ["Betting", "$30k–150k", "$4k–12k", "2–4 мес.", "4–8", "$300–800", "$8k–30k", "$120k–500k"],
  ["iGaming", "$40k–200k", "$5k–15k", "2–4 мес.", "4–8", "$350–900", "$10k–35k", "$150k–700k"],
  ["Маркетплейсы", "$40k–250k", "$5k–20k", "2–5 мес.", "5–9", "$300–900", "$10k–45k", "$150k–900k"],
  ["Delivery", "$25k–120k", "$3k–10k", "1.5–4 мес.", "4–7", "$250–700", "$8k–25k", "$90k–350k"],
  ["Сервисы аренды", "$20k–100k", "$3k–8k", "1.5–4 мес.", "4–7", "$250–650", "$7k–22k", "$75k–300k"],
  ["HR-tech", "$20k–90k", "$2k–8k", "1–3 мес.", "3–6", "$200–600", "$6k–20k", "$70k–250k"],
  ["Образование", "$15k–70k", "$2k–6k", "2–5 мес.", "4–8", "$200–500", "$6k–18k", "$45k–180k"],
  ["Страхование", "$50k–250k", "$5k–20k", "3–6 мес.", "5–10", "$400–1,000", "$12k–45k", "$200k–900k"],
  ["Телеком", "$80k–400k", "$8k–30k", "4–9 мес.", "6–12", "$600–1,500", "$20k–70k", "$300k–1.5m"],
  ["Международные SaaS", "$20k–120k", "$2k–10k", "1–4 мес.", "3–7", "$200–700", "$6k–25k", "$75k–350k"],
  ["Remittance / EMI", "$50k–250k", "$5k–20k", "2–5 мес.", "4–9", "$350–1,000", "$12k–45k", "$180k–900k"],
  ["Брокеры / trading", "$40k–200k", "$5k–15k", "2–5 мес.", "4–9", "$300–900", "$10k–35k", "$150k–700k"]
];

const detailTables = {
  roles: {
    headers: ["Роль", "KPI", "Мотивация", "Страхи", "Возражение", "Влияние"],
    rows: [
      ["CEO", "Revenue growth, margin, regulatory stability", "Ускорить рост без скандалов и штрафов", "Fraud scandal, blocked expansion, conversion loss", "Это не стратегический приоритет", "Очень высокое"],
      ["COO", "Cost-to-serve, onboarding SLA, ops productivity", "Уменьшить ручные проверки и очереди", "Рост backlog, ручные издержки", "Слишком много изменений в операциях", "Высокое"],
      ["CPO", "Activation, onboarding CVR, UX", "Снизить drop-off и false reject", "UX friction, негативный NPS", "KYC убьет конверсию", "Высокое"],
      ["CTO", "Reliability, integration effort, platform risk", "Надежная интеграция и масштабируемость", "Vendor lock-in, latency, SDK issues", "Сложно внедрять и поддерживать", "Высокое"],
      ["CIO", "Architecture governance, security, vendor compliance", "Контроль над данными и рисками", "Non-compliant vendor, data exposure", "Нам нужен private/on-prem вариант", "Средне-высокое"],
      ["Head of Risk", "Loss rate, suspicious case quality", "Снизить fraud loss и false approval", "Deepfakes, synthetic IDs, ATO", "Не доказана точность на наших кейсах", "Очень высокое"],
      ["Head of Compliance", "Audit readiness, AML/KYC adherence", "Закрыть regulatory gaps", "Fine, remediation plan, failed audit", "Нужен полный audit trail и policy fit", "Очень высокое"],
      ["AML Officer / MLRO", "CDD quality, EDD workload, SAR quality", "Автоматизировать low-risk поток", "Missing red flags, regulator scrutiny", "Нам мало просто IDV — нужен workflow fit", "Высокое"],
      ["Fraud Manager", "Fraud rate, abuse detection, manual review ratio", "Быстрее ловить новые паттерны", "Account farming, ID renting, document fraud", "Сейчас больше болит behavioral fraud", "Очень высокое"],
      ["Product Manager", "Time-to-launch, approval rate, support tickets", "Запустить flow без product debt", "Long integration, poor UX, retries", "Слишком тяжело для roadmap", "Среднее"],
      ["Security Manager", "Data security, privacy, access controls", "Минимизировать breach/exfiltration risk", "PII leakage, third-party exposure", "Не видим достаточного security posture", "Средне-высокое"]
    ]
  },
  triggers: {
    headers: ["Что произошло", "Почему возникает потребность", "Срочность"],
    rows: [
      ["Вырос fraud rate на onboarding", "Текущий flow пропускает synthetic / fake IDs / deepfakes", "Очень высокая"],
      ["Регулятор усилил KYC/AML требования", "Нужен формально приемлемый CDD flow", "Очень высокая"],
      ["Компания получает лицензию", "Без KYC vendor нельзя пройти readiness", "Очень высокая"],
      ["Выход в новую страну", "Нужна поддержка локальных документов и policy logic", "Высокая"],
      ["Резко вырос объем пользователей", "Ручная команда не справляется", "Высокая"],
      ["Участились chargebacks / first-party fraud", "Нужен stronger identity gate", "Высокая"],
      ["Audit / inspection выявил gaps", "Нужна remediation program", "Очень высокая"],
      ["Текущий поставщик поднял цену", "Ищут лучшую unit economics", "Средняя"],
      ["Текущий поставщик дает низкий pass rate", "Потери в конверсии становятся заметными", "Высокая"],
      ["Появилась deepfake/media-injection атака", "Нужны stronger liveness / face checks", "Очень высокая"],
      ["Банк-партнер требует stronger controls", "Иначе рискуют потерять banking rails", "Очень высокая"]
    ]
  },
  pains: {
    headers: ["Категория", "Боль", "Последствия", "Стоимость для бизнеса", "Как NeuroVision решает"],
    rows: [
      ["Финансовая", "Высокий fraud loss на onboarding", "Прямые потери, chargebacks, write-offs", "От сотен тысяч до миллионов в год", "Face match + liveness + document fraud checks снижают допуск bad actors"],
      ["Финансовая", "Низкий pass rate хороших пользователей", "Потеря выручки и CAC inefficiency", "Рост CPA/CAC и падение LTV", "Улучшение UX, fewer retries, лучшее document handling"],
      ["Операционная", "Большой manual review backlog", "SLA ломается, клиенты ждут", "Рост FTE и OPEX", "Автоматизация low-risk cases и case routing"],
      ["Операционная", "Много повторных попыток / user confusion", "Support load и churn", "Рост тикетов и drop-off", "Смарт-подсказки, mobile capture optimization"],
      ["Техническая", "Слабая интеграция с текущим стеком", "Долгое внедрение и product debt", "Медленный rollout, delayed launch", "API/SDK-first integration и modular deployment"],
      ["Техническая", "Непрозрачная модель принятия решений", "Команда не понимает false rejects", "Trust gap внутри компании", "Audit trail, explainable review states, evidence storage"],
      ["Юридическая", "Несоответствие AML/KYC/CIP требованиям", "Fines, remediation, licensing risk", "Очень высокая", "Формализованный flow идентификации и доказуемый контроль"],
      ["Репутационная", "Недоверие банков-партнеров / PSP", "Потеря payment rails / higher reserve", "Критично для growth", "Более зрелый risk posture и доказуемые controls"]
    ]
  },
  objections: {
    headers: ["Возражение", "Что за ним стоит", "Контраргумент"],
    rows: [
      ["Дорого", "Сравнивают только cost/check", "Считать нужно cost per approved good user и cost per fraud prevented"],
      ["Уже используем Sumsub", "Не видят причины менять", "Не rip and replace, а benchmark по pass rate / false reject / latency"],
      ["Долго внедрять", "Product team боится roadmap impact", "Phased integration: pilot, one flow, one geo, one segment"],
      ["Мы не хотим передавать PII третьей стороне", "Privacy / security risk", "Private cloud / on-prem / regional processing, если это сильная сторона"],
      ["Не доказана точность", "Нужны собственные данные", "Blind test на historical cases"],
      ["Нам важнее AML, а не просто IDV", "Хотят end-to-end workflow", "Identity core в AML/KYC stack, а не isolated selfie tool"],
      ["Мы боимся false rejects", "Product pressure on conversion", "Threshold tuning и segment-specific policy rules"],
      ["У нас много стран и документов", "Coverage concern", "Country pack, fallback logic и acceptance matrix"],
      ["Боюсь vendor lock-in", "Technical governance concern", "API-first, exportability, audit data portability"]
    ]
  },
  competitors: {
    headers: ["Конкурент", "Позиционирование", "Сильные стороны", "Слабые стороны", "Целевая аудитория"],
    rows: [
      ["Smart Engines", "Document-centric OCR/ID auth, часто on-prem", "Сильное распознавание документов, локальные/on-prem сценарии", "Менее сильный full-stack global KYC brand", "Банки, МФО, telecom, гос/enterprise"],
      ["VisionLabs", "Биометрия, face recognition, liveness", "Сильная face tech и enterprise CV reputation", "Не всегда end-to-end AML/KYC orchestration layer", "Банки, security-heavy enterprise"],
      ["Regula", "Full-stack IDV + document forensics", "Глубокая document authenticity, 16k+ документов", "Может быть тяжелее для SMB/self-serve", "Enterprise, travel, banking, gov"],
      ["Sumsub", "Full-cycle KYC/KYB/AML/fraud", "Сильное присутствие в fintech, crypto, gaming; visible pricing", "Crowded default vendor; price pressure at scale", "Fintech, crypto, gaming, marketplaces"],
      ["Veriff", "Fast identity verification with self-serve entry", "230+ countries, self-serve pricing", "Менее broad full-stack AML story", "Startups, fintech, marketplaces, SaaS"],
      ["Entrust IDV / Onfido", "Enterprise IDV under identity-security suite", "Enterprise trust, workflow tooling, 195 countries", "Sales-led, выше procurement friction", "Banks, payments, regulated enterprise"],
      ["Persona", "Flexible identity platform / orchestration", "Гибкость workflows, KYB-KYC, fraud + cases", "Может быть дорогим при росте usage", "Fintech, marketplaces, SaaS"],
      ["Trulioo", "Global data-source-heavy verification", "450+ data sources, 195+ countries", "Меньше public pricing, сложнее для simple UX-led flow", "Cross-border fintech, marketplaces"],
      ["Jumio", "AI-powered enterprise identity platform", "5,000+ ID types, 200 countries", "Sales-led, public pricing нет", "Banking, regulated enterprise, travel"],
      ["AU10TIX", "Fraud-heavy KYC automation", "Strong document/authentication positioning", "Sales-led and enterprise-oriented", "Enterprise fintech, crypto, gaming"]
    ]
  }
};

let selectedSegment = segments[0];

function el(id) {
  return document.getElementById(id);
}

function renderHeroStack() {
  el("heroTopSegments").innerHTML = segments.slice(0, 5).map((segment, index) => `
    <div>
      <b>${index + 1}</b>
      <span>${segment.name}</span>
    </div>
  `).join("");
}

function filteredSegments() {
  const query = el("segmentSearch").value.trim().toLowerCase();
  const minScore = Number(el("scoreRange").value);
  const sortKey = el("sortMode").value;
  return segments
    .filter((segment) => segment.score >= minScore && segment.name.toLowerCase().includes(query))
    .sort((a, b) => b[sortKey] - a[sortKey]);
}

function renderSegments() {
  const list = filteredSegments();
  el("visibleCount").textContent = `${list.length} из ${segments.length}`;
  el("segmentBars").innerHTML = list.map((segment) => `
    <button class="segment-row ${segment.name === selectedSegment.name ? "active" : ""}" type="button" data-name="${segment.name}">
      <span class="segment-name">${segment.name}</span>
      <span class="track" aria-hidden="true"><span class="fill" style="width:${segment.score * 10}%"></span></span>
      <span class="score">${segment.score.toFixed(2)}</span>
    </button>
  `).join("");

  document.querySelectorAll(".segment-row").forEach((row) => {
    row.addEventListener("click", () => {
      selectedSegment = segments.find((segment) => segment.name === row.dataset.name) || selectedSegment;
      renderSegments();
      renderProfile();
    });
  });
}

function renderProfile() {
  el("selectedSegmentName").textContent = selectedSegment.name;
  el("segmentProfile").innerHTML = criteria.map(([key, label]) => `
    <div class="profile-item">
      <span>${label}</span>
      <strong>${selectedSegment[key]}</strong>
      <div class="spark" aria-hidden="true"><i style="width:${selectedSegment[key] * 10}%"></i></div>
    </div>
  `).join("");
}

function renderHeatmap() {
  const headers = ["Сегмент", "Google", "LinkedIn", "Telegram", "Конф.", "Email / ABM", "Партнеры"];
  const cells = headers.map((header) => `<div class="head">${header}</div>`);
  channels.forEach(([segment, ...scores]) => {
    cells.push(`<div class="segment-cell">${segment}</div>`);
    scores.forEach((score) => {
      const colors = { 1: "#f2f4f7", 2: "#ffd8bd", 3: "#ffb579", 4: "#ff8a2a", 5: "#ff6a00" };
      cells.push(`<div class="heat" style="background:${colors[score]}">${score}</div>`);
    });
  });
  el("channelHeatmap").innerHTML = `<div class="heat-grid">${cells.join("")}</div>`;
}

function table(headers, rows) {
  return `
    <table>
      <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
}

function renderEconomics() {
  el("economicsTable").innerHTML = table(
    ["Сегмент", "Средний чек в год", "Пилот", "Сделка", "Встречи", "CPL", "CAC", "LTV"],
    economics
  );
}

function renderDetail(tab = "roles") {
  const data = detailTables[tab];
  el("detailPanel").innerHTML = table(data.headers, data.rows);
  document.querySelectorAll(".tabbar button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });
}

function init() {
  renderHeroStack();
  renderSegments();
  renderProfile();
  renderHeatmap();
  renderEconomics();
  renderDetail();

  ["segmentSearch", "scoreRange", "sortMode"].forEach((id) => {
    el(id).addEventListener("input", () => {
      el("scoreValue").textContent = `${Number(el("scoreRange").value).toFixed(2)}+`;
      renderSegments();
    });
  });

  document.querySelectorAll(".tabbar button").forEach((button) => {
    button.addEventListener("click", () => renderDetail(button.dataset.tab));
  });
}

init();
