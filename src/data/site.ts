export const site = {
  name: 'Coding',
  studio: 'Section',
  person: 'Anthony Ogadimma Aniobi',
  role: 'Game Developer',
  tagline: 'Games that run anywhere.',
  email: 'anthony@codingsection.com',
  url: 'https://codinsection.com',
  location: 'Lagos, Nigeria',
  availability: "Available '26",
  socials: [
    { label: 'Itch.io', href: 'https://itch.io/profile/codingsection' },
    { label: 'GitHub', href: 'https://github.com/AnthonyAniobi/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'X', href: 'https://x.com' },
  ],
  tools: [
    'Unreal Engine',
    'Unity',
    'Godot',
    'Flask',
    'C++',
    'C#',
    'Flutter',
    'Tiled',
    'Blender',
    'Git',
  ],
  skills: [
    { name: 'Cross-platform games', level: 94 },
    { name: 'Real-time multiplayer', level: 88 },
    { name: 'Applied machine learning', level: 82 },
    { name: 'Player attention', level: 80 },
    { name: 'Computer vision play', level: 96 },
    { name: 'Gameplay engineering', level: 76 },
  ],
  timeline: [
    {
      year: 'Now',
      title: 'Coding Section',
      body: 'Game development in Lagos. The aim is games that stay fast on every device they ship to.',
    },
    {
      year: 'ML',
      title: 'Applied machine learning',
      body: 'Modeling player attention and engagement inside interactive systems and games.',
    },
    {
      year: 'HCI',
      title: 'How players meet the game',
      body: 'Human–computer interaction, including computer vision as a way to play.',
    },
    {
      year: 'Net',
      title: 'Shared, live play',
      body: 'Real-time multiplayer architecture and cross-platform game engineering.',
    },
  ],
} as const

export const navLinks = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const
