export function renderSkills(skills, target) {
  target.innerHTML = skills
    .map(
      (skill) => `
        <span class="skill-pill">
          <span>${skill.name}</span>
          <small>${skill.group}</small>
        </span>
      `,
    )
    .join('');
}
