export function renderProjects(projects, target) {
  target.innerHTML = projects
    .map((project, index) => {
      const [featuredScreenshot, ...secondaryScreenshots] = project.screenshots;

      return `
        <article class="project-card">
          <button
            class="project-preview"
            type="button"
            data-lightbox-src="${featuredScreenshot.src}"
            data-lightbox-alt="${featuredScreenshot.alt}"
            data-lightbox-caption="${project.title} - hlavní screenshot"
            aria-label="Otevřít hlavní screenshot projektu ${project.title}"
          >
            <img src="${featuredScreenshot.src}" alt="" loading="lazy" />
          </button>
          <div class="project-card__top">
            <span class="private-label">${project.repository}</span>
            <button
              class="project-card__detail"
              type="button"
              data-project-detail="${index}"
              aria-label="Otevřít detail projektu ${project.title}"
            >
              Detail projektu
            </button>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="stack-list" aria-label="Tech stack">
            ${project.stack.map((tech) => `<span>${tech}</span>`).join('')}
          </div>
          <div class="screenshot-strip" aria-label="Další screenshoty projektu ${project.title}">
            ${secondaryScreenshots
              .map(
                (screenshot, screenshotIndex) => `
                  <button
                    class="screenshot-thumb"
                    type="button"
                    data-lightbox-src="${screenshot.src}"
                    data-lightbox-alt="${screenshot.alt}"
                    data-lightbox-caption="${project.title} - screenshot ${screenshotIndex + 2}"
                    aria-label="Otevřít screenshot ${screenshotIndex + 2} projektu ${project.title}"
                  >
                    <img src="${screenshot.src}" alt="" loading="lazy" />
                  </button>
                `,
              )
              .join('')}
          </div>
        </article>
      `;
    })
    .join('');
}

export function createProjectDetail(project) {
  const caseStudyLink = project.caseStudyUrl?.startsWith('[')
    ? '<span class="button button--disabled" aria-disabled="true">Case study není doplněná</span>'
    : `<a class="button button--primary" href="${project.caseStudyUrl}">Case study</a>`;

  return `
    <header class="project-detail">
      <span class="private-label">${project.repository}</span>
      <h2 id="project-modal-title">${project.title}</h2>
      <p>${project.description}</p>
    </header>
    <div class="stack-list stack-list--large" aria-label="Tech stack projektu">
      ${project.stack.map((tech) => `<span>${tech}</span>`).join('')}
    </div>
    <section class="detail-section" aria-labelledby="features-title">
      <h3 id="features-title">Hlavní funkce</h3>
      <ul>
        ${project.features.map((feature) => `<li>${feature}</li>`).join('')}
      </ul>
    </section>
    <section class="detail-section" aria-labelledby="gallery-title">
      <h3 id="gallery-title">Galerie</h3>
      <div class="detail-gallery">
        ${project.screenshots
          .map(
            (screenshot, index) => `
              <button
                class="detail-gallery__item"
                type="button"
                data-lightbox-src="${screenshot.src}"
                data-lightbox-alt="${screenshot.alt}"
                data-lightbox-caption="${project.title} - screenshot ${index + 1}"
              >
                <img src="${screenshot.src}" alt="${screenshot.alt}" loading="lazy" />
              </button>
            `,
          )
          .join('')}
      </div>
    </section>
    ${caseStudyLink}
  `;
}
