const slideTitles = window.STOCH_SLIDE_TITLES || [];
const slideCaptions = window.STOCH_SLIDE_CAPTIONS || [];
const slideSources = Array.from({ length: 6 }, (_, i) => `assets/slides/slide-${i + 1}.webp`);
let activeSlide = 0;

const stageImage = document.getElementById('stageImage');
const stageTitle = document.getElementById('stageTitle');
const stageCaption = document.getElementById('stageCaption');
const thumbs = [...document.querySelectorAll('.slide-thumb')];

function setSlide(index) {
  activeSlide = (index + slideSources.length) % slideSources.length;
  stageImage.src = slideSources[activeSlide];
  stageImage.alt = `Слайд ${activeSlide + 1} исходной презентации`;
  stageTitle.textContent = `Слайд ${activeSlide + 1}. ${slideTitles[activeSlide]}`;
  stageCaption.textContent = slideCaptions[activeSlide];
  thumbs.forEach((thumb, i) => thumb.classList.toggle('is-active', i === activeSlide));
}
thumbs.forEach((thumb) => thumb.addEventListener('click', () => setSlide(Number(thumb.dataset.slide))));
document.getElementById('prevSlide').addEventListener('click', () => setSlide(activeSlide - 1));
document.getElementById('nextSlide').addEventListener('click', () => setSlide(activeSlide + 1));

const dialog = document.getElementById('slideDialog');
const dialogImage = document.getElementById('dialogImage');
const dialogTitle = document.getElementById('dialogTitle');
function openDialog(index) {
  dialogImage.src = slideSources[index];
  dialogImage.alt = `Увеличенный слайд ${index + 1}`;
  dialogTitle.textContent = `Слайд ${index + 1}. ${slideTitles[index]}`;
  dialog.showModal();
}
document.getElementById('openStage').addEventListener('click', () => openDialog(activeSlide));
stageImage.addEventListener('click', () => openDialog(activeSlide));
document.querySelectorAll('[data-open-slide]').forEach((button) => button.addEventListener('click', () => openDialog(Number(button.dataset.openSlide))));
document.getElementById('closeDialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

const triggers = [...document.querySelectorAll('.tab-trigger')];
const panels = [...document.querySelectorAll('.tab-panel')];
function openTab(name, scroll = true) {
  triggers.forEach((trigger) => {
    const active = trigger.dataset.tab === name;
    trigger.dataset.state = active ? 'active' : 'inactive';
    trigger.setAttribute('aria-selected', String(active));
  });
  panels.forEach((panel) => panel.classList.toggle('active', panel.id === `panel-${name}`));
  if (scroll) document.getElementById(`panel-${name}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
}
triggers.forEach((trigger) => trigger.addEventListener('click', () => openTab(trigger.dataset.tab)));
document.querySelectorAll('[data-open-tab]').forEach((button) => button.addEventListener('click', () => openTab(button.dataset.openTab)));

const expandButton = document.getElementById('expandReport');
expandButton.addEventListener('click', () => {
  const items = [...document.querySelectorAll('[data-report-section]')];
  const allOpen = items.every((item) => item.open);
  items.forEach((item) => { item.open = !allOpen; });
  expandButton.textContent = allOpen ? 'Раскрыть все разделы' : 'Свернуть все разделы';
});

document.getElementById('copyLink').addEventListener('click', async (event) => {
  try {
    await navigator.clipboard.writeText(location.href);
    event.currentTarget.textContent = 'Ссылка скопирована';
    setTimeout(() => { event.currentTarget.textContent = 'Скопировать ссылку'; }, 1800);
  } catch {
    event.currentTarget.textContent = 'Скопируйте адрес браузера';
  }
});

const progress = document.getElementById('progress');
function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? Math.min(100, window.scrollY / max * 100) : 0}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
