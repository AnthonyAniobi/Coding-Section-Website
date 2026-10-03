export const site = {
  name: 'Anthony',
  studio: 'Atelier',
  role: 'Game Designer & Systems Programmer',
  tagline: 'Worlds you can feel.',
  email: 'hello@anthony.dev',
  location: 'Remote / Earth',
  availability: "Available '26",
  socials: [
    { label: 'Itch.io', href: 'https://itch.io' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'X', href: 'https://x.com' },
  ],
  tools: [
    'Unreal Engine',
    'Unity',
    'Godot',
    'C++',
    'C#',
    'HLSL',
    'Blueprints',
    'Blender',
    'Substance',
    'Wwise',
    'Perforce',
    'Git',
  ],
  skills: [
    { name: 'Gameplay systems', level: 94 },
    { name: 'Level design', level: 88 },
    { name: 'Technical art', level: 82 },
    { name: 'Narrative design', level: 80 },
    { name: 'Prototyping', level: 96 },
    { name: 'Shader work', level: 76 },
  ],
  timeline: [
    {
      year: '2026',
      title: 'Independent',
      body: 'Shipping Ember Protocol and prototyping two smaller worlds.',
    },
    {
      year: '2024',
      title: 'Systems Designer',
      body: 'Owned encounter loops, AI perception, and player feel on a mid-size stealth title.',
    },
    {
      year: '2022',
      title: 'Gameplay Programmer',
      body: 'Built camera, combat, and tool pipelines in Unity and Unreal.',
    },
    {
      year: '2020',
      title: 'First ship',
      body: 'A jam game that taught me systems beat set pieces.',
    },
  ],
} as const

export const navLinks = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
] as const
