(() => {
  const q = (selector) => document.querySelector(selector);
  const setHTML = (selector, value) => {
    const node = q(selector);
    if (node) node.innerHTML = value;
  };
  const setText = (selector, value) => {
    const node = q(selector);
    if (node) node.textContent = value;
  };
  const replaceNode = (selector, markup) => {
    const node = q(selector);
    if (node) node.outerHTML = markup;
  };

  document.title = 'STOCH CNC × Егор — больше возможностей и быстрее ответ';
  const setMeta = (selector, value) => {
    const node = q(selector);
    if (node) node.setAttribute('content', value);
  };
  setMeta('meta[name="description"]', 'Предложение для STOCH CNC: как раньше находить квалифицированный спрос, быстрее готовить инженерный ответ и системно управлять следующим шагом по сделке.');
  setMeta('meta[property="og:title"]', 'STOCH CNC × Егор — предложение по развитию продаж с AI');
  setMeta('meta[property="og:description"]', 'Три коммерческие точки роста, два практических примера и безопасный путь к одному измеримому MVP.');

  setHTML('.brand > span:last-child', 'STOCH CNC × Егор<small>рост продаж и управляемость воронки</small>');

  setText('.hero .eyebrow', 'Предложение по росту продаж STOCH');
  setHTML('.hero h1', 'Больше квалифицированных возможностей и быстрее ответ — <span>при той же инженерной команде</span>');
  setText('.hero .lead', 'STOCH уже умеет подбирать, поставлять и запускать сложное оборудование. Я предлагаю проверить, может ли AI усилить коммерческую часть этой работы: раньше выявлять реальный спрос, быстрее готовить запрос для инженера и системно контролировать следующий шаг по сделке.');
  setText('.hero .muted', 'Начать можно с одного процесса и одной исходной метрики. Технические решения, цены, сроки и обязательства остаются за специалистами STOCH.');
  setHTML('.hero-actions', '<a class="btn btn-primary" href="#sales-outcomes">Посмотреть, где возникает результат</a><button class="btn btn-outline" data-open-tab="presentation" type="button">Увидеть два практических примера</button>');
  setText('.hero-card .badge', 'Что получает Филипп после 45 минут');
  setText('.hero-card blockquote', 'Одностраничную карту одного процесса: где теряется время или возможность, какая метрика станет исходной, кто участвует и что означает STOP / GO.');
  setText('.hero-card > p', 'Без обязательства покупать проект и без доступа к конфиденциальным данным на первой встрече.');
  setText('.hero-card .brand-note', 'Фокус разговора — одна коммерческая задача, а не AI вообще.');

  const tabs = document.querySelectorAll('.tab-trigger');
  if (tabs[0]) tabs[0].textContent = 'Возможность для STOCH';
  if (tabs[1]) tabs[1].textContent = 'Краткая презентация';
  if (tabs[2]) tabs[2].textContent = 'Подробное предложение';

  const overviewHead = q('#panel-overview .section-head');
  if (overviewHead) overviewHead.id = 'sales-outcomes';
  setText('#panel-overview .section-kicker', 'Где возникает коммерческий эффект');
  setText('#panel-overview h2', 'Три результата, которые можно проверить на реальном процессе STOCH');
  setText('#panel-overview .section-note', 'AI ускоряет подготовку и координацию. Инженеры и Филипп сохраняют контроль над техническими решениями, условиями и отношениями с клиентом.');
  const cards = document.querySelectorAll('#panel-overview .overview-card');
  if (cards[0]) cards[0].innerHTML = '<div class="overview-index">1</div><h3>Больше своевременно найденных возможностей</h3><p>Закупки, инвестиционные проекты, расширение производств и другие сигналы превращаются не в ленту новостей, а в приоритетную карточку для продаж.</p><div class="result">На выходе: компания, причина контакта, вопросы квалификации и решение Go / No-Go.</div>';
  if (cards[1]) cards[1].innerHTML = '<div class="overview-index">2</div><h3>Короче путь от запроса до инженерного ответа</h3><p>Письмо, ТЗ и вложения собираются в структурированный brief с отмеченными пробелами и вопросами клиенту.</p><div class="result">На выходе: подготовленный запрос для технолога и меньше повторной ручной работы.</div>';
  if (cards[2]) cards[2].innerHTML = '<div class="overview-index">3</div><h3>Меньше сделок без следующего шага</h3><p>Для каждой активной возможности фиксируются владелец, этап, причина паузы, действие и дата.</p><div class="result">На выходе: Филипп видит, где требуется решение, информация или follow-up.</div>';
  setHTML('#panel-overview .callout', '<strong>Разница — не в ещё одном инструменте генерации текста.</strong> Я беру на себя создание и ведение процесса: поиск возможностей, правила анализа, подготовку материалов для команды, контроль качества и результат по согласованной метрике.');
  const valueCards = document.querySelectorAll('#panel-overview .download-card');
  if (valueCards[0]) valueCards[0].innerHTML = '<span>Для продаж</span><b>Приоритетные возможности</b><small>Компании с подтверждённым сигналом, причиной контакта и следующим действием.</small>';
  if (valueCards[1]) valueCards[1].innerHTML = '<span>Для инженера</span><b>Подготовленный запрос</b><small>Структурированный brief, недостающие данные и вопросы клиенту до начала подбора.</small>';
  if (valueCards[2]) valueCards[2].innerHTML = '<span>Для Филиппа</span><b>Управляемая воронка</b><small>Понимание, где требуется решение, кто отвечает и какое действие должно произойти дальше.</small>';

  setText('#panel-presentation .section-kicker', 'Краткая презентация решения');
  setText('#panel-presentation h2', 'Шесть слайдов: от коммерческой возможности до одного проверяемого MVP');
  setText('#panel-presentation .section-note', 'Презентация показывает, где возникает эффект, как сохраняется инженерный контроль, два практических примера и решение, которое можно принять после первой встречи.');
  const captions = [
    'Три коммерческих результата: больше возможностей, быстрее ответ и меньше потерянных сделок.',
    'Как связать поиск спроса, подготовку ответа и контроль воронки в один управляемый процесс.',
    'Практический пример: как короткое закупочное окно превращается в своевременное решение Go / No-Go.',
    'Практический пример: как сократить ручной разбор запроса и не допустить технически необоснованный подбор.',
    'Шесть вопросов, которые позволяют выбрать процесс, владельца, метрику и критерий продолжения.',
    'Путь от интервью к проверке на 3–5 кейсах, прототипу и рабочему MVP.'
  ];
  document.querySelectorAll('#panel-presentation figcaption span').forEach((node, index) => { if (captions[index]) node.textContent = captions[index]; });
  setText('#stageCaption', captions[0]);

  setText('#panel-report .section-kicker', 'Подробное предложение');
  setText('#panel-report .report-card > h2', 'Как проверить рост продаж без риска для текущего процесса');
  setHTML('#panel-report .report-intro', '<p><strong>Филипп, добрый день.</strong></p><p>STOCH уже обладает технической экспертизой, продуктовой линейкой и сервисной моделью. Предложение состоит не в замене этой системы, а в том, чтобы увеличить её коммерческую пропускную способность: раньше находить подходящий спрос, быстрее передавать инженеру качественные вводные и не терять следующий шаг по сделке.</p><p>Начать предлагаю с одного процесса, одной исходной метрики и проверки на реальных кейсах. Если ценность не подтверждается, корректным результатом становится STOP. Если подтверждается — появляется основание для прототипа и рабочего MVP.</p>');

  const sectionTitles = {
    'report-section-1': '1. Где STOCH может получить коммерческий эффект',
    'report-section-2': '2. Почему это применимо именно к STOCH',
    'report-section-3': '3. Что уже подготовлено для предметного разговора',
    'report-section-4': '4. Как это выглядит на практике',
    'report-section-5': '5. Какой бизнес-эффект предлагается проверить',
    'report-section-6': '6. Какую ответственность беру на себя',
    'report-section-7': '7. Что стоит проверить за 45 минут',
    'report-section-8': '8. Что STOCH получает после встречи',
    'report-section-9': '9. Как может выглядеть следующий этап',
    'report-section-10': '10. Граница предварительного предложения и реальной работы',
    'report-section-11': '11. Предлагаемый следующий шаг',
    'report-section-12': '12. Как принять решение по материалу',
    'report-section-13': 'Источники и статус доказательности'
  };
  for (const [id, title] of Object.entries(sectionTitles)) setText(`#${id} summary span`, title);

  setHTML('#report-section-3 .accordion-content', '<p>Чтобы встреча сразу была предметной, я разобрал публичную модель STOCH, спроектировал целевую коммерческую цепочку и подготовил два практических примера на открытых и тестовых данных:</p><ul><li>сигнал о потенциальном спросе с логикой квалификации Go / No-Go;</li><li>разбор RFQ / ТЗ с фиксацией критических пробелов и передачей технологу;</li><li>шесть вопросов для выбора процесса, владельца, исходной метрики и критерия продолжения.</li></ul><p>Полная база предприятий, рабочие агенты, внутренняя база знаний и CRM-интеграции создаются уже внутри согласованного сотрудничества.</p>');
  setHTML('#report-section-6 .accordion-content', '<p>Я не заменяю технолога и не беру на себя техническое решение. Моя роль — организовать коммерческий процесс вокруг экспертизы STOCH:</p><ul><li>находить и квалифицировать рыночные сигналы;</li><li>настраивать правила анализа и точки человеческой проверки;</li><li>готовить структурированные материалы для менеджера и инженера;</li><li>фиксировать следующий шаг и управленческий статус в CRM;</li><li>контролировать качество и показывать результат по согласованной метрике.</li></ul><p><strong>STOCH сохраняет техническую и коммерческую истину:</strong> применимость оборудования, окончательный подбор, цену, срок, комплектацию, условия ПНР и отношения с клиентом.</p><blockquote><strong>Почему нужен ответственный оператор, а не набор AI-инструментов:</strong> ценность создаёт не генерация отдельного текста, а повторяемый процесс с владельцем, правилами проверки, CRM и измеримым результатом.</blockquote>');
  setHTML('#report-section-12 .accordion-content', '<p>Сначала оцените краткую презентацию: она показывает коммерческую логику, два практических примера и безопасный путь к MVP. Подробное предложение отвечает на вопросы о роли, метриках, рисках и границах работы.</p><p>После чтения требуется одно решение: есть ли смысл обсудить один конкретный процесс на 45-минутной встрече — без обязательства покупать проект и без преждевременного доступа к внутренним данным.</p>');

  const reportTools = q('.report-tools');
  if (reportTools) {
    setText('.report-tools .badge', 'Быстрый переход');
    const toolButtons = reportTools.querySelectorAll('button');
    if (toolButtons[0]) toolButtons[0].textContent = 'Посмотреть 6 слайдов';
    if (toolButtons[1]) toolButtons[1].textContent = 'Раскрыть подробности';
    if (toolButtons[2]) toolButtons[2].textContent = 'Сохранить для обсуждения';
    const links = reportTools.querySelectorAll('a');
    Object.values(sectionTitles).forEach((title, index) => { if (links[index]) links[index].textContent = title; });
  }

  setHTML('#panel-report .closing', '<h3>Следующий шаг: выбрать один процесс для проверки</h3><p>Если хотя бы одна из трёх точек роста соответствует текущему приоритету STOCH, предлагаю 45-минутный разговор. После него у Филиппа останется одностраничная карта процесса, исходная метрика и решение: STOP, прототип или реализация.</p><p><strong>Егор Локтионов</strong><br><span class="muted">AI-enabled business development и проектирование коммерческих агентных процессов</span></p>');
  setText('footer', 'Предложение Егора Локтионова по AI-усилению продаж STOCH CNC. Подготовлено на основе открытых данных для предметного обсуждения.');

  const textReplacements = [
    ['proof of work', 'практический пример'],
    ['proof-of-work', 'практических'],
    ['исходной презентации', 'презентации'],
    ['полная пояснительная записка', 'подробное предложение'],
    ['полную записку', 'подробное предложение']
  ];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    for (const [from, to] of textReplacements) node.nodeValue = node.nodeValue.replaceAll(from, to).replaceAll(from[0].toUpperCase() + from.slice(1), to[0].toUpperCase() + to.slice(1));
  }

  window.STOCH_SLIDE_CAPTIONS = captions;
})();
