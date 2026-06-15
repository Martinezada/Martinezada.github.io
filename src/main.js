import './styles.css';
import { experience, professionalStartDate } from './data/experience.js';
import { projects } from './data/projects.js';
import { skills } from './data/skills.js';
import { renderTimeline } from './components/renderTimeline.js';
import { renderProjects, createProjectDetail } from './components/renderProjects.js';
import { renderSkills } from './components/renderSkills.js';

const root = document.documentElement;
const navToggle = document.querySelector('[data-nav-toggle]');
const navPanel = document.querySelector('[data-nav-panel]');
const navLinks = [...document.querySelectorAll('.nav-link')];
const themeToggle = document.querySelector('[data-theme-toggle]');
const projectModal = document.querySelector('[data-project-modal]');
const projectModalPanel = projectModal.querySelector('.modal__panel');
const projectModalContent = document.querySelector('[data-project-modal-content]');
const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = document.querySelector('[data-lightbox-image]');
const lightboxCaption = document.querySelector('[data-lightbox-caption]');
let lastFocusedElement = null;

renderTimeline(experience, document.querySelector('[data-experience-list]'));
renderProjects(projects, document.querySelector('[data-project-list]'));
renderSkills(skills, document.querySelector('[data-skills-list]'));

document.querySelector('[data-current-year]').textContent = new Date().getFullYear();
document.querySelector('[data-years-experience]').textContent = calculateYearsOfExperience(professionalStartDate);

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  navPanel.dataset.open = String(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navPanel.dataset.open = 'false';
  });
});

document.addEventListener('click', (event) => {
  const detailButton = event.target.closest('[data-project-detail]');
  const lightboxButton = event.target.closest('[data-lightbox-src]');
  const closeModalButton = event.target.closest('[data-close-modal]');
  const closeLightboxButton = event.target.closest('[data-close-lightbox]');

  if (detailButton) {
    openProjectModal(projects[Number(detailButton.dataset.projectDetail)], detailButton);
  }

  if (lightboxButton) {
    openLightbox(lightboxButton);
  }

  if (closeModalButton) {
    closeProjectModal();
  }

  if (closeLightboxButton || event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') {
    return;
  }

  if (!lightbox.hidden) {
    closeLightbox();
  } else if (!projectModal.hidden) {
    closeProjectModal();
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        link.toggleAttribute('aria-current', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 },
);

document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));

function calculateYearsOfExperience(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const hasAnniversaryPassed =
    now.getMonth() > start.getMonth() || (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());

  if (!hasAnniversaryPassed) {
    years -= 1;
  }

  return Math.max(years, 0);
}

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Přepnout světlý režim' : 'Přepnout tmavý režim');
}

function openProjectModal(project, trigger) {
  lastFocusedElement = trigger;
  projectModalContent.innerHTML = createProjectDetail(project);
  projectModal.hidden = false;
  document.body.dataset.modalOpen = 'true';
  projectModalPanel.focus();
}

function closeProjectModal() {
  projectModal.hidden = true;
  document.body.dataset.modalOpen = 'false';
  projectModalContent.innerHTML = '';
  lastFocusedElement?.focus();
}

function openLightbox(trigger) {
  lastFocusedElement = trigger;
  lightboxImage.src = trigger.dataset.lightboxSrc;
  lightboxImage.alt = trigger.dataset.lightboxAlt;
  lightboxCaption.textContent = trigger.dataset.lightboxCaption;
  lightbox.hidden = false;
  document.body.dataset.modalOpen = 'true';
  lightbox.querySelector('button').focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = '';
  lightboxImage.alt = '';
  lightboxCaption.textContent = '';
  document.body.dataset.modalOpen = String(!projectModal.hidden);
  lastFocusedElement?.focus();
}
