export function renderProjects(projects, target, language = 'cs', ui) {
  target.innerHTML = projects
    .map((project, index) => {
      const [featuredScreenshot, ...secondaryScreenshots] = project.screenshots;
      const featuredAlt = localize(featuredScreenshot.alt, language);
      const screenshotStrip = secondaryScreenshots.length
        ? `
          <div class="screenshot-strip" aria-label="${ui.otherScreenshots} ${project.title}">
            ${secondaryScreenshots
              .map((screenshot, screenshotIndex) => {
                const screenshotAlt = localize(screenshot.alt, language);

                return `
                  <button
                    class="screenshot-thumb"
                    type="button"
                    data-lightbox-src="${screenshot.src}"
                    data-lightbox-alt="${screenshotAlt}"
                    data-lightbox-caption="${project.title} - ${ui.screenshot} ${screenshotIndex + 2}"
                    aria-label="${ui.openScreenshot} ${screenshotIndex + 2} ${project.title}"
                  >
                    <img src="${screenshot.src}" alt="" loading="lazy" />
                  </button>
                `;
              })
              .join('')}
          </div>
        `
        : '';

      return `
        <article class="project-card">
          <button
            class="project-preview"
            type="button"
            data-lightbox-src="${featuredScreenshot.src}"
            data-lightbox-alt="${featuredAlt}"
            data-lightbox-caption="${project.title} - ${ui.mainScreenshot}"
            aria-label="${ui.openMainScreenshot} ${project.title}"
          >
            <img src="${featuredScreenshot.src}" alt="" loading="lazy" />
          </button>
          <div class="project-card__top">
            <span class="private-label">${project.repository}</span>
            <button
              class="project-card__detail"
              type="button"
              data-project-detail="${index}"
              aria-label="${ui.openDetail} ${project.title}"
            >
              ${ui.detail}
            </button>
          </div>
          <h3>${project.title}</h3>
          <p>${localize(project.description, language)}</p>
          <div class="stack-list" aria-label="${ui.techStack}">
            ${project.stack.map((tech) => `<span>${tech}</span>`).join('')}
          </div>
          ${screenshotStrip}
        </article>
      `;
    })
    .join('');
}

export function createProjectDetail(project, language = 'cs', ui) {
  const caseStudyLink = project.caseStudyUrl?.startsWith('[')
    ? `<span class="button button--disabled" aria-disabled="true">${ui.caseStudyMissing}</span>`
    : `<a class="button button--primary" href="${project.caseStudyUrl}">${ui.caseStudy}</a>`;

  return `
    <header class="project-detail">
      <span class="private-label">${project.repository}</span>
      <h2 id="project-modal-title">${project.title}</h2>
      <p>${localize(project.description, language)}</p>
    </header>
    <div class="stack-list stack-list--large" aria-label="${ui.techStack}">
      ${project.stack.map((tech) => `<span>${tech}</span>`).join('')}
    </div>
    <section class="detail-section" aria-labelledby="features-title">
      <h3 id="features-title">${ui.features}</h3>
      <ul>
        ${localize(project.features, language).map((feature) => `<li>${feature}</li>`).join('')}
      </ul>
    </section>
    <section class="detail-section" aria-labelledby="gallery-title">
      <h3 id="gallery-title">${ui.gallery}</h3>
      <div class="detail-gallery">
        ${project.screenshots
          .map(
            (screenshot, index) => {
              const screenshotAlt = localize(screenshot.alt, language);

              return `
              <button
                class="detail-gallery__item"
                type="button"
                data-lightbox-src="${screenshot.src}"
                data-lightbox-alt="${screenshotAlt}"
                data-lightbox-caption="${project.title} - ${ui.screenshot} ${index + 1}"
              >
                <img src="${screenshot.src}" alt="${screenshotAlt}" loading="lazy" />
              </button>
            `;
            },
          )
          .join('')}
      </div>
    </section>
    ${caseStudyLink}
  `;
}

function localize(value, language) {
  return value?.[language] ?? value?.cs ?? value;
}
