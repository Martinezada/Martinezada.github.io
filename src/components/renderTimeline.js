export function renderTimeline(items, target) {
  target.innerHTML = items
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-item__meta">
            <span>${item.period}</span>
            <span>${item.location}</span>
          </div>
          <div class="timeline-item__body">
            <h3>${item.role}</h3>
            <p class="timeline-item__company">${item.company}</p>
            <p>${item.summary}</p>
            <ul>
              ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join('')}
            </ul>
          </div>
        </article>
      `,
    )
    .join('');
}
