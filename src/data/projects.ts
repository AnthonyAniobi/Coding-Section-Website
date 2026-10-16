export type ProjectTag = 'Systems' | 'Narrative' | 'Arcade' | 'Strategy'

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
    cover: '/images/zombie-survivor.jpg',
    images: ['/images/zombie-survivor.jpg', '/images/zombie-survivor-2.jpg'],
    excerpt: 'Survive a zombie apocalypse in a first person shooter.',
    description: 'Zombie Survivor is a first person shooter about surviving a zombie apocalypse.',
    accent: '#e4b25a',
    featured: false,
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
      '/images/avatar-clash/Screenshot_Combat4.png',
      '/images/avatar-clash/Screenshot_Chase1.png',
      '/images/avatar-clash/Screenshot_Chase2.png',
      '/images/avatar-clash/avatarclashPicture1.png',
      '/images/avatar-clash/avatarclashPicture2.png',
    ],
    excerpt: 'Fast 1v1 arena fights — timing, combos, and who blinks first.',
    description:
      'Avatar Clash is a realtime 1v1 2D fighting game built for head-to-head matches with friends. Players pick a fighter, learn move timing, and chain combos in short competitive rounds. I designed the combat feel, responsive controls, and clean arcade presentation for side-by-side or remote challenge play.',
    accent: '#ff5c1a',
    featured: true,
    // storeUrl: 'https://play.google.com/store/apps/details?id=com.anonsoft.fighting_game',
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
    cover: '/images/die-another-century/dacPicture8.jpg',
    images: [
      '/images/die-another-century/dacPicture1.jpg',
      '/images/die-another-century/dacPicture2.jpg',
      '/images/die-another-century/dacPicture3.jpg',
      '/images/die-another-century/dacPicture4.jpg',
      '/images/die-another-century/dacPicture5.jpg',
      '/images/die-another-century/dacPicture6.jpg',
      '/images/die-another-century/dacPicture7.jpg',
      '/images/die-another-century/dacPicture8.jpg',
      '/images/die-another-century/dacPicture9.jpg',
    ],
    excerpt: 'Carry a light through a forest that does not want to be found.',
    description:
      'Last Lantern is a walking story about grief as geography. Paths close when you look at them too long. I laid out the forest as a looping memory, wrote the lantern as both UI and character, and used Godot to keep the whole world in one breath.',
    accent: '#e4b25a',
    featured: false,
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
      '/images/human-chess/humanChessPicture3.png',
    ],
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
    role: 'Solo Developer / ML',
    engine: 'Flutter',
    genre: 'Strategy / Multiplayer',
    tag: 'Systems',
    cover: '/images/chess.png',
    images: [
      '/images/chess.png',
      '/images/chess-2.webp',
      '/images/chess-3.webp',
      '/images/chess-4.webp',
    ],
    excerpt: 'Online chess with AI lords, coin stakes, and on-device attention detection.',
    description:
      'A full online chess experience for casual play and ranked competition: solo practice, friend challenges, and global matchmaking. Wins earn coins; advanced AI opponents push skill. Game history supports replay and analysis. A research-driven feature uses on-device machine-learning face detection to model player attention during matches.',
    accent: '#e4b25a',
    featured: true,
    // storeUrl: 'https://play.google.com/store/apps/details?id=org.anonglobal.chess_game',
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
    cover: '/images/sudokku.png',
    images: [
      '/images/sudokku.png',
      '/images/sudokku-2.webp',
      '/images/sudokku-3.webp',
      '/images/sudokku-4.webp',
    ],
    excerpt: 'Classic Sudoku scaled from 4×4 warm-ups to 25×25 brain burners — solo or 1v1.',
    description:
      'Sudokku (Sudoku Multiplayer) is a competitive take on the classic grid. Board sizes span 4×4 through 25×25. Modes cover solo solving, 1v1 against friends, and group matches with coin rewards and leaderboards. I focused on a clean, distraction-free UI that stays readable when the grid gets huge.',
    accent: '#7ec8c8',
    featured: true,
    // storeUrl: 'https://play.google.com/store/apps/details?id=org.anonglobal.sudokku',
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
    cover: '/images/oya.png',
    images: [
      '/images/oya.png',
      '/images/oya-2.webp',
      '/images/oya-3.webp',
      '/images/oya-4.webp',
    ],
    excerpt: 'Press-your-luck dice and cards — bank the score, or whisper “one more.”',
    description:
      'Oya One More is a fast press-your-luck dice and card game. Match five dice to a card pattern, bank safely, or keep rolling for bigger rewards — bust and the turn is gone. Ninety cards include twenty specials (steal, change a die, re-roll, double points). Shipped at NibCard E-Games with Flutter and a Supabase realtime backend.',
    accent: '#ff3d8b',
    featured: false,
    // storeUrl: 'https://play.google.com/store/apps/details?id=com.oyaonemore.game',
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
    cover: '/images/justus.webp',
    images: [
      '/images/justus.webp',
      '/images/justus-2.webp',
      '/images/justus-3.webp',
    ],
    excerpt: 'Question games that break the ice — then go deeper with friends and partners.',
    description:
      'Just Us turns ordinary hangouts into conversation games: category prompts from light and funny to deep, custom questions, community decks, and private groups for dates or teams. Built at NibCard E-Games with Flutter, Supabase Auth/Realtime, encrypted in-game communication, and voice features with waveform playback.',
    accent: '#c084fc',
    featured: false,
    // storeUrl: 'https://play.google.com/store/apps/details?id=com.justus.game',
    credits: [
      { label: 'Platform', value: 'iOS / Android' },
      { label: 'Status', value: 'Live on stores' },
      { label: 'Team', value: 'NibCard E-Games' },
    ],
  },
  // {
  //   slug: 'ember-protocol',
  //   title: 'Ember Protocol',
  //   year: '2025',
  //   role: 'Lead Designer / Systems',
  //   engine: 'Unreal Engine 5',
  //   genre: 'Stealth / Sci-Fi',
  //   tag: 'Systems',
  //   cover: '/images/ember.jpg',
  //   images: ['/images/ember.jpg', '/images/ember-2.jpg', '/images/setup.jpg'],
  //   excerpt: 'A silent operator. A dying foundry. One protocol left to burn.',
  //   description:
  //     'Ember Protocol is a first-person stealth game about moving through a collapsing industrial city without becoming a signal. I designed the perception model, noise economy, and the way light itself becomes a resource — bright enough to read the room, loud enough to get you killed.',
  //   accent: '#ff5c1a',
  //   featured: true,
  //   credits: [
  //     { label: 'Platform', value: 'PC' },
  //     { label: 'Status', value: 'Vertical slice' },
  //     { label: 'Team', value: 'Solo + contractors' },
  //   ],
  // },
  // {
  //   slug: 'hollow-tide',
  //   title: 'Hollow Tide',
  //   year: '2024',
  //   role: 'Director / Narrative',
  //   engine: 'Unity',
  //   genre: 'Atmospheric Puzzle',
  //   tag: 'Narrative',
  //   cover: '/images/hollow.jpg',
  //   images: ['/images/hollow.jpg', '/images/hollow-2.jpg'],
  //   excerpt: 'A boat, a black sea, and statues that remember your name.',
  //   description:
  //     'Hollow Tide is a quiet puzzle voyage across an ocean that edits itself. Each island is a memory you can rearrange, and the water keeps the pieces you refuse to face. I wrote the world logic, the boat traversal, and the rule that no puzzle ever explains itself twice.',
  //   accent: '#7ec8c8',
  //   featured: true,
  //   credits: [
  //     { label: 'Platform', value: 'PC / Console' },
  //     { label: 'Status', value: 'Prototype' },
  //     { label: 'Team', value: '3 people' },
  //   ],
  // },
  // {
  //   slug: 'neon-drift',
  //   title: 'Neon Drift',
  //   year: '2024',
  //   role: 'Gameplay / Feel',
  //   engine: 'Unreal Engine 5',
  //   genre: 'Arcade Racer',
  //   tag: 'Arcade',
  //   cover: '/images/neon.jpg',
  //   images: ['/images/neon.jpg', '/images/neon-2.jpg'],
  //   excerpt: 'Rain, neon, and a car that drifts like a lie you almost believe.',
  //   description:
  //     'Neon Drift is a night racer about flow more than finish lines. I tuned the drift model, camera spring, and the way the city “sings” when you hold a perfect line. The goal was arcade honesty: easy to start, vicious to master, pretty when you fail.',
  //   accent: '#ff3d8b',
  //   featured: true,
  //   credits: [
  //     { label: 'Platform', value: 'PC' },
  //     { label: 'Status', value: 'Playable demo' },
  //     { label: 'Team', value: 'Solo' },
  //   ],
  // },
  // {
  //   slug: 'last-lantern',
  //   title: 'Last Lantern',
  //   year: '2023',
  //   role: 'Narrative / Level Design',
  //   engine: 'Godot',
  //   genre: 'Adventure',
  //   tag: 'Narrative',
  //   cover: '/images/lantern.jpg',
  //   images: ['/images/lantern.jpg', '/images/lantern-2.jpg'],
  //   excerpt: 'Carry a light through a forest that does not want to be found.',
  //   description:
  //     'Last Lantern is a walking story about grief as geography. Paths close when you look at them too long. I laid out the forest as a looping memory, wrote the lantern as both UI and character, and used Godot to keep the whole world in one breath.',
  //   accent: '#e4b25a',
  //   featured: false,
  //   credits: [
  //     { label: 'Platform', value: 'PC' },
  //     { label: 'Status', value: 'Shipped jam+' },
  //     { label: 'Team', value: '2 people' },
  //   ],
  // },
  // {
  //   slug: 'dusk-array',
  //   title: 'Dusk Array',
  //   year: '2023',
  //   role: 'Systems / Tech Art',
  //   engine: 'Unity',
  //   genre: 'Tactical Mystery',
  //   tag: 'Systems',
  //   cover: '/images/dusk.jpg',
  //   images: ['/images/dusk.jpg', '/images/hero.jpg', '/images/setup.jpg'],
  //   excerpt: 'An observatory that maps people instead of stars.',
  //   description:
  //     'Dusk Array is a systems mystery set in a ruined observatory. You align lenses, intercept signals, and slowly realize the array is watching you back. I built the signal-crafting tools, the day-night simulation, and the shaders that make distant storms feel like incoming mail.',
  //   accent: '#c084fc',
  //   featured: false,
  //   credits: [
  //     { label: 'Platform', value: 'PC' },
  //     { label: 'Status', value: 'Vertical slice' },
  //     { label: 'Team', value: '4 people' },
  //   ],
  // },
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
