const placeholderScreenshots = [
  {
    src: './screenshots/project-placeholder-1.svg',
    alt: 'Placeholder screenshotu projektu - seznam dat',
  },
  {
    src: './screenshots/project-placeholder-2.svg',
    alt: 'Placeholder screenshotu projektu - detail workflow',
  },
];

export const projects = [
  {
    title: 'Solana Copy-Trade Wallet Scanner',
    description:
      'Privátní nástroj pro monitoring vybraných Solana peněženek a analýzu obchodních signálů v praktickém workflow.',
    stack: ['JavaScript', 'TypeScript', 'Node.js', 'REST APIs', 'SQL', 'Automation'],
    features: [
      'Sledování vybraných peněženek a transakčních vzorců.',
      'Filtrování relevantních událostí pro rychlé rozhodování.',
      'Příprava dat pro notifikace a další automatizaci.',
    ],
    repository: 'Private repository',
    caseStudyUrl: '[CASE_STUDY_URL]',
    screenshots: [
      {
        src: './screenshots/solana-wallet-scanner-dashboard.png',
        alt: 'Dashboard Solana Wallet Scanneru s filtrováním wallet dat, skóre, ROI a tabulkou sledovaných peněženek',
      },
    ],
  },
  {
    title: 'Polymarket Wallet Scanner',
    description:
      'Analytický scanner pro práci s veřejně dostupnými wallet daty, signalizaci aktivit a strukturované vyhodnocování tržištních pohybů.',
    stack: ['JavaScript', 'TypeScript', 'Node.js', 'API Integration', 'Data Modelling'],
    features: [
      'Zpracování wallet aktivit do přehledných datových struktur.',
      'Vyhodnocování změn a prioritizace zajímavých událostí.',
      'Oddělení datové vrstvy od prezentační logiky.',
    ],
    repository: 'Private repository',
    caseStudyUrl: '[CASE_STUDY_URL]',
    screenshots: [
      {
        src: './screenshots/polymarket-dashboard.png',
        alt: 'Dashboard Polymarket Wallet Scanneru s přehledem bankrollu, signálů, strategií a watchlistu',
      },
      {
        src: './screenshots/polymarket-telegram-signal.png',
        alt: 'Telegram notifikace z Polymarket scanneru s kopírovaným signálem a parametry vstupu',
      },
      {
        src: './screenshots/polymarket-telegram-summary-1.png',
        alt: 'Telegram paper summary s počtem watchlist peněženek, signálů a otevřených pozic',
      },
      {
        src: './screenshots/polymarket-telegram-summary-2.png',
        alt: 'Telegram paper summary s detailním záznamem zkopírovaného Polymarket signálu',
      },
    ],
  },
];
