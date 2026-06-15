# Developer Portfolio & Interactive Resume

Moderní statické portfolio postavené na Vite, čistém JavaScriptu, HTML a CSS. Projekt je připravený pro GitHub Pages a používá relativní asset cesty přes `base: './'`.

## Instalace

```bash
npm install
```

## Spuštění lokálně

```bash
npm run dev
```

## Build

```bash
npm run build
```

Výstup bude ve složce `dist/`.

## Nasazení na GitHub Pages

1. Nahrajte projekt do GitHub repozitáře.
2. V nastavení repozitáře otevřete `Settings` -> `Pages`.
3. V části `Build and deployment` nastavte `Source` na `GitHub Actions`.
4. Push do větve `main` automaticky spustí workflow `.github/workflows/deploy.yml`.
5. Vite konfigurace v `vite.config.js` používá `base: './'`, takže assety fungují i v projektové cestě typu `https://uzivatel.github.io/repozitar/`.

## Kde upravit osobní údaje

Upravte placeholdery v:

- `index.html`: jméno, e-mail, LinkedIn, GitHub, SEO title a Open Graph texty.
- `src/data/experience.js`: firma, období, lokalita, popis zkušeností a datum začátku praxe.
- `src/data/projects.js`: projekty, popisy, case study odkazy, tech stack, funkce a screenshoty.

Zbývající placeholdery jsou záměrně ve formátu `[CASE_STUDY_URL]` a další hodnoty můžete doplnit podle potřeby.

## Kde přidat screenshoty

Screenshoty patří do:

```text
public/screenshots/
```

Poté upravte pole `screenshots` v `src/data/projects.js`.

Příklad:

```js
screenshots: [
  {
    src: './screenshots/solana-dashboard.png',
    alt: 'Dashboard projektu Solana Copy-Trade Wallet Scanner',
  },
]
```

## Kde vyměnit PDF životopis

Nahraďte soubor:

```text
public/resume.pdf
```

Odkaz v hero sekci už míří na `./resume.pdf`.

## Jak přidat nový projekt

V souboru `src/data/projects.js` přidejte další objekt do pole `projects`:

```js
{
  title: 'Název projektu',
  description: 'Krátký popis projektu.',
  stack: ['JavaScript', 'Node.js'],
  features: ['Hlavní funkce 1', 'Hlavní funkce 2'],
  repository: 'Private repository',
  caseStudyUrl: '[CASE_STUDY_URL]',
  screenshots: [
    {
      src: './screenshots/project.png',
      alt: 'Popis screenshotu',
    },
  ],
}
```

Karty i detail projektu se vyrenderují automaticky.

## Jak upravit datum začátku profesionální praxe

V `src/data/experience.js` změňte:

```js
export const professionalStartDate = '2023-01-01';
```

Web dynamicky vypočítá počet dokončených let praxe. Nepoužívá dynamický věk.
