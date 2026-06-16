export const projects = [
  {
    title: 'Solana Copy-Trade Wallet Scanner',
    description: {
      cs: 'Privátní nástroj pro monitoring vybraných Solana peněženek a analýzu obchodních signálů v praktickém workflow.',
      en: 'A private tool for monitoring selected Solana wallets and analyzing trading signals in a practical workflow.',
    },
    stack: ['JavaScript', 'TypeScript', 'Node.js', 'REST APIs', 'SQL', 'Automation'],
    features: {
      cs: [
        'Sledování vybraných peněženek a transakčních vzorců.',
        'Filtrování relevantních událostí pro rychlé rozhodování.',
        'Příprava dat pro notifikace a další automatizaci.',
      ],
      en: [
        'Monitoring selected wallets and transaction patterns.',
        'Filtering relevant events for faster decision making.',
        'Preparing data for notifications and further automation.',
      ],
    },
    repository: 'Private repository',
    caseStudyUrl: '[CASE_STUDY_URL]',
    screenshots: [
      {
        src: './screenshots/solana-wallet-scanner-dashboard.png',
        alt: {
          cs: 'Dashboard Solana Wallet Scanneru s filtrováním wallet dat, skóre, ROI a tabulkou sledovaných peněženek',
          en: 'Solana Wallet Scanner dashboard with wallet data filters, score, ROI and a table of tracked wallets',
        },
      },
      {
        src: './screenshots/solana-wallet-scanner-table.png',
        alt: {
          cs: 'Tabulka Solana Wallet Scanneru s wallet adresami, skóre, ROI, winrate a realizovaným PnL',
          en: 'Solana Wallet Scanner table with wallet addresses, score, ROI, win rate and realized PnL',
        },
      },
      {
        src: './screenshots/solana-wallet-scanner-filters.png',
        alt: {
          cs: 'Filtry Solana Wallet Scanneru pro ROI, winrate, tokeny, balance, hold time a sniper/non-standard nastavení',
          en: 'Solana Wallet Scanner filters for ROI, win rate, tokens, balance, hold time and sniper/non-standard settings',
        },
      },
    ],
  },
  {
    title: 'Polymarket Wallet Scanner',
    description: {
      cs: 'Analytický scanner pro práci s veřejně dostupnými wallet daty, signalizaci aktivit a strukturované vyhodnocování tržních pohybů.',
      en: 'An analytics scanner for working with publicly available wallet data, activity signals and structured evaluation of market movements.',
    },
    stack: ['JavaScript', 'TypeScript', 'Node.js', 'API Integration', 'Data Modelling'],
    features: {
      cs: [
        'Zpracování wallet aktivit do přehledných datových struktur.',
        'Vyhodnocování změn a prioritizace zajímavých událostí.',
        'Oddělení datové vrstvy od prezentační logiky.',
      ],
      en: [
        'Processing wallet activity into clear data structures.',
        'Evaluating changes and prioritizing interesting events.',
        'Separating the data layer from presentation logic.',
      ],
    },
    repository: 'Private repository',
    caseStudyUrl: '[CASE_STUDY_URL]',
    screenshots: [
      {
        src: './screenshots/polymarket-dashboard.png',
        alt: {
          cs: 'Dashboard Polymarket Wallet Scanneru s přehledem bankrollu, signálů, strategií a watchlistu',
          en: 'Polymarket Wallet Scanner dashboard with bankroll, signals, strategies and watchlist overview',
        },
      },
      {
        src: './screenshots/polymarket-telegram-signal.png',
        alt: {
          cs: 'Telegram notifikace z Polymarket scanneru s kopírovaným signálem a parametry vstupu',
          en: 'Telegram notification from the Polymarket scanner with copied signal and entry parameters',
        },
      },
      {
        src: './screenshots/polymarket-telegram-summary-1.png',
        alt: {
          cs: 'Telegram paper summary s počtem watchlist peněženek, signálů a otevřených pozic',
          en: 'Telegram paper summary with watchlist wallet count, signals and open positions',
        },
      },
      {
        src: './screenshots/polymarket-telegram-summary-2.png',
        alt: {
          cs: 'Telegram paper summary s detailním záznamem zkopírovaného Polymarket signálu',
          en: 'Telegram paper summary with a detailed copied Polymarket signal',
        },
      },
    ],
  },
];
