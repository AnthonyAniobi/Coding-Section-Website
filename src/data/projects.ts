export type ProjectTag = 'Systems' | 'Narrative' | 'Arcade' | 'Strategy'

/** Layout for stills and gameplay video on the project page. The cover is unaffected. */
export type GalleryOrientation = 'portrait' | 'landscape'

export type Project = {
  slug: string
  title: string
  year: string
  role: string
  engine: string
  genre: string
  tag: ProjectTag
  cover: string
  images: string[]
  orientation: GalleryOrientation
  video?: string
  /** Store and web pages. Only entries you set appear on the project page. */
  links?: { label: string; href: string }[]
  excerpt: string
  description: string
  accent: string
  featured: boolean
  credits: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    slug: 'zombie-survivor',
    title: 'Zombie Survivor',
    year: '2026',
    role: 'Gameplay / Narrative',
    engine: 'Unreal Engine 5',
    genre: 'First Person Shooter',
    tag: 'Arcade',
    cover: '/images/zombie-survivor/Screenshot3.png',
    images: [
      '/images/zombie-survivor/Screenshot1.png',
      '/images/zombie-survivor/Screenshot2.png',
      '/images/zombie-survivor/Screenshot4.png',
      '/images/zombie-survivor/Screenshot5.png',
      '/images/zombie-survivor/Screenshot6.png',
      '/images/zombie-survivor/Screenshot7.png',
    ],
    orientation: 'landscape',
    video: '/images/zombie-survivor/ZombieSurvivor.mp4',
    excerpt: 'Survive a zombie apocalypse in a first person shooter.',
    description: 'Zombie Survivor is a first person shooter about surviving a zombie apocalypse.',
    accent: '#e4b25a',
    featured: false,
    links: [
      { label: 'Github', href: 'https://github.com/AnthonyAniobi/First_Person_Shotter_Unity' },
    ],
    credits: [
      { label: 'Platform', value: 'PC' },
      { label: 'Status', value: 'In Development' },
      { label: 'Team', value: 'Solo' },
    ],
  },
  {
    slug: 'avatar-clash',
    title: 'Avatar Clash',
    year: '2025',
    role: 'Solo Developer',
    engine: 'Flutter',
    genre: '2D Fighting / Multiplayer',
    tag: 'Arcade',
    cover: '/images/avatar-clash/feature_graphic.png',
    images: [
      '/images/avatar-clash/Screenshot_Combat1.png',
      '/images/avatar-clash/Screenshot_Combat2.png',
      '/images/avatar-clash/Screenshot_Combat3.png',
      '/images/avatar-clash/Screenshot_Chase1.png',
      '/images/avatar-clash/Screenshot_Chase2.png',
      '/images/avatar-clash/avatarclashPicture1.png',
      '/images/avatar-clash/avatarclashPicture2.png',
    ],
    orientation: 'landscape',
    excerpt: 'Fast 1v1 arena fights — timing, combos, and who blinks first.',
    description:
      'Avatar Clash is a realtime 1v1 2D fighting game built for head-to-head matches with friends. Players pick a fighter, learn move timing, and chain combos in short competitive rounds. I designed the combat feel, responsive controls, and clean arcade presentation for side-by-side or remote challenge play.',
    accent: '#ff5c1a',
    featured: true,
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.anonsoft.fighting_game' },
    ],
    credits: [
      { label: 'Platform', value: 'Android' },
      { label: 'Status', value: 'Live on Play Store' },
      { label: 'Team', value: 'Solo' },
    ],
  },
  {
    slug: 'die-another-century',
    title: 'Die Another Century',
    year: '2026',
    role: 'Solo Developer',
    engine: 'Unity',
    genre: 'Adventure',
    tag: 'Arcade',
    cover: '/images/die-another-century/screenshot.png',
    images: [
      '/images/die-another-century/dacPicture1.png',
      '/images/die-another-century/dacPicture2.png',
      '/images/die-another-century/dacPicture3.png',
      '/images/die-another-century/dacPicture4.png',
      '/images/die-another-century/dacPicture5.png',
      '/images/die-another-century/dacPicture6.png',
      '/images/die-another-century/dacPicture7.png',
      '/images/die-another-century/dacPicture8.png',
      '/images/die-another-century/dacPicture9.png',
    ],
    orientation: 'portrait',
    video: '/images/die-another-century/DieAnotherCentury.mp4',
    excerpt: 'Carry a light through a forest that does not want to be found.',
    description:
      'Last Lantern is a walking story about grief as geography. Paths close when you look at them too long. I laid out the forest as a looping memory, wrote the lantern as both UI and character, and used Godot to keep the whole world in one breath.',
    accent: '#e4b25a',
    featured: false,
    links: [
      { label: 'Itch.io', href: 'https://codingsection.itch.io/die-another-century' },
      { label: 'Github', href: 'https://github.com/AnthonyAniobi/Die-Another-Century' },

    ],
    credits: [
      { label: 'Platform', value: 'Web' },
      { label: 'Status', value: 'Shipped jam+' },
      { label: 'Team', value: 'Solo' },
    ],
  },
  {
    slug: 'human-chess',
    title: 'Human Chess',
    year: '2026',
    role: 'Solo Developer',
    engine: 'Unreal Engine 5',
    genre: 'Adventure',
    tag: 'Arcade',
    cover: '/images/human-chess/humanChessPicture3.png',
    images: [
      '/images/human-chess/humanChessPicture1.png',
      '/images/human-chess/humanChessPicture2.png',
    ],
    orientation: 'landscape',
    video: '/images/human-chess/HumanChess.mp4',
    excerpt: 'A Realistic VR Chess Game.',
    description: 'Human Chess is a realistic chess game. It is a game where you can play chess with your friends. It is a game where you can play chess with your friends. It is a game where you can play chess with your friends',
    accent: '#e4b25a',
    featured: false,
    credits: [
      { label: 'Platform', value: 'VR' },
      { label: 'Status', value: 'In Development' },
      { label: 'Team', value: 'Solo' },
    ],
  },
  {
    slug: 'chess-multiplayer',
    title: 'Chess Multiplayer',
    year: '2025',
    role: 'Solo Developer',
    engine: 'Flutter',
    genre: 'Strategy / Multiplayer',
    tag: 'Systems',
    cover: '/images/chess/Banner-image.png',
    images: [
      '/images/chess/screenshot_chess1.webp',
      '/images/chess/screenshot_chess3.webp',
      '/images/chess/screenshot_chess4.webp',
    ],
    orientation: 'portrait',
    excerpt: 'Online chess with AI lords, coin stakes, and on-device attention detection.',
    description:
      'A full online chess experience for casual play and ranked competition: solo practice, friend challenges, and global matchmaking. Wins earn coins; advanced AI opponents push skill. Game history supports replay and analysis. A research-driven feature uses on-device machine-learning face detection to model player attention during matches.',
    accent: '#e4b25a',
    featured: true,
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=org.anonglobal.chess_game' },
    ],
    credits: [
      { label: 'Platform', value: 'Android' },
      { label: 'Status', value: 'Live on Play Store' },
      { label: 'Team', value: 'Solo' },
    ],
  },
  {
    slug: 'sudokku',
    title: 'Sudokku',
    year: '2025',
    role: 'Solo Developer',
    engine: 'Flutter',
    genre: 'Puzzle / Multiplayer',
    tag: 'Systems',
    cover: '/images/sudokku/feature_graphic.png',
    images: [
      '/images/sudokku/sudokku_screenshot1.webp',
      '/images/sudokku/sudokku_screenshot2.webp',
      '/images/sudokku/screenshot_sudokku3.webp',
    ],
    orientation: 'portrait',
    excerpt: 'Classic Sudoku scaled from 4×4 warm-ups to 25×25 brain burners — solo or 1v1.',
    description:
      'Sudokku (Sudoku Multiplayer) is a competitive take on the classic grid. Board sizes span 4×4 through 25×25. Modes cover solo solving, 1v1 against friends, and group matches with coin rewards and leaderboards. I focused on a clean, distraction-free UI that stays readable when the grid gets huge.',
    accent: '#7ec8c8',
    featured: true,
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=org.anonglobal.sudokku' },
    ],
    credits: [
      { label: 'Platform', value: 'Android' },
      { label: 'Status', value: 'Live on Play Store' },
      { label: 'Team', value: 'Solo' },
    ],
  },
  {
    slug: 'oya-one-more',
    title: 'Oya One More',
    year: '2026',
    role: 'Game Developer — NibCard',
    engine: 'Flutter / Supabase',
    genre: 'Dice / Party',
    tag: 'Arcade',
    cover: '/images/oya_one_more/oom.webp',
    images: [
      '/images/oya_one_more/oom1.webp',
      '/images/oya_one_more/oom2.webp',
      '/images/oya_one_more/oom3.webp',
    ],
    orientation: 'portrait',
    excerpt: 'Press-your-luck dice and cards — bank the score, or whisper “one more.”',
    description:
      'Oya One More is a fast press-your-luck dice and card game. Match five dice to a card pattern, bank safely, or keep rolling for bigger rewards — bust and the turn is gone. Ninety cards include twenty specials (steal, change a die, re-roll, double points). Shipped at NibCard E-Games with Flutter and a Supabase realtime backend.',
    accent: '#ff3d8b',
    featured: false,
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.oyaonemore.game' },
    ],
    credits: [
      { label: 'Platform', value: 'iOS / Android' },
      { label: 'Status', value: 'Live on stores' },
      { label: 'Team', value: 'NibCard E-Games' },
    ],
  },
  {
    slug: 'just-us',
    title: 'Just Us',
    year: '2026',
    role: 'Game Developer — NibCard',
    engine: 'Flutter / Supabase',
    genre: 'Social / Party',
    tag: 'Narrative',
    cover: '/images/justus/banner_image.png',
    images: [
      '/images/justus/justus.webp',
      '/images/justus/justus1.webp',
      '/images/justus/justus2.webp',
    ],
    orientation: 'portrait',
    excerpt: 'Question games that break the ice — then go deeper with friends and partners.',
    description:
      'Just Us turns ordinary hangouts into conversation games: category prompts from light and funny to deep, custom questions, community decks, and private groups for dates or teams. Built at NibCard E-Games with Flutter, Supabase Auth/Realtime, encrypted in-game communication, and voice features with waveform playback.',
    accent: '#c084fc',
    featured: false,
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.justus.game' },
      { label: 'AppStore', href: 'https://apps.apple.com/us/app/just-us-conversations/id6765485082' },
    ],
    credits: [
      { label: 'Platform', value: 'iOS / Android' },
      { label: 'Status', value: 'Live on stores' },
      { label: 'Team', value: 'NibCard E-Games' },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return { prev: undefined, next: undefined }
  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  }
}
