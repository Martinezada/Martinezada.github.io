export function renderTimeline(items, target, language = 'cs') {
  target.innerHTML = items
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-item__meta">
            <span>${localize(item.period, language)}</span>
            <span>${item.location}</span>
          </div>
          <div class="timeline-item__body">
            <h3>${item.role}</h3>
            <p class="timeline-item__company">${item.company}</p>
            <p>${localize(item.summary, language)}</p>
            <ul>
              ${localize(item.highlights, language).map((highlight) => `<li>${highlight}</li>`).join('')}
            </ul>
          </div>
        </article>
      `,
    )
    .join('');
}

function localize(value, language) {
  return value?.[language] ?? value?.cs ?? value;
}
