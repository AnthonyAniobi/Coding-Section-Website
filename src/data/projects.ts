export type ProjectTag = 'Systems' | 'Narrative' | 'Arcade'

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
    slug: 'ember-protocol',
    title: 'Ember Protocol',
    year: '2025',
    role: 'Lead Designer / Systems',
    engine: 'Unreal Engine 5',
    genre: 'Stealth / Sci-Fi',
    tag: 'Systems',
    cover: '/images/ember.jpg',
    images: ['/images/ember.jpg', '/images/ember-2.jpg', '/images/setup.jpg'],
    excerpt: 'A silent operator. A dying foundry. One protocol left to burn.',
    description:
      'Ember Protocol is a first-person stealth game about moving through a collapsing industrial city without becoming a signal. I designed the perception model, noise economy, and the way light itself becomes a resource — bright enough to read the room, loud enough to get you killed.',
    accent: '#ff5c1a',
    featured: true,
    credits: [
      { label: 'Platform', value: 'PC' },
      { label: 'Status', value: 'Vertical slice' },
      { label: 'Team', value: 'Solo + contractors' },
    ],
  },
  {
    slug: 'hollow-tide',
    title: 'Hollow Tide',
    year: '2024',
    role: 'Director / Narrative',
    engine: 'Unity',
    genre: 'Atmospheric Puzzle',
    tag: 'Narrative',
    cover: '/images/hollow.jpg',
    images: ['/images/hollow.jpg', '/images/hollow-2.jpg'],
    excerpt: 'A boat, a black sea, and statues that remember your name.',
    description:
      'Hollow Tide is a quiet puzzle voyage across an ocean that edits itself. Each island is a memory you can rearrange, and the water keeps the pieces you refuse to face. I wrote the world logic, the boat traversal, and the rule that no puzzle ever explains itself twice.',
    accent: '#7ec8c8',
    featured: true,
    credits: [
      { label: 'Platform', value: 'PC / Console' },
      { label: 'Status', value: 'Prototype' },
      { label: 'Team', value: '3 people' },
    ],
  },
  {
    slug: 'neon-drift',
    title: 'Neon Drift',
    year: '2024',
    role: 'Gameplay / Feel',
    engine: 'Unreal Engine 5',
    genre: 'Arcade Racer',
    tag: 'Arcade',
    cover: '/images/neon.jpg',
    images: ['/images/neon.jpg', '/images/neon-2.jpg'],
    excerpt: 'Rain, neon, and a car that drifts like a lie you almost believe.',
    description:
      'Neon Drift is a night racer about flow more than finish lines. I tuned the drift model, camera spring, and the way the city “sings” when you hold a perfect line. The goal was arcade honesty: easy to start, vicious to master, pretty when you fail.',
    accent: '#ff3d8b',
    featured: true,
    credits: [
      { label: 'Platform', value: 'PC' },
      { label: 'Status', value: 'Playable demo' },
      { label: 'Team', value: 'Solo' },
    ],
  },
  {
    slug: 'last-lantern',
    title: 'Last Lantern',
    year: '2023',
    role: 'Narrative / Level Design',
    engine: 'Godot',
    genre: 'Adventure',
    tag: 'Narrative',
    cover: '/images/lantern.jpg',
    images: ['/images/lantern.jpg', '/images/lantern-2.jpg'],
    excerpt: 'Carry a light through a forest that does not want to be found.',
    description:
      'Last Lantern is a walking story about grief as geography. Paths close when you look at them too long. I laid out the forest as a looping memory, wrote the lantern as both UI and character, and used Godot to keep the whole world in one breath.',
    accent: '#e4b25a',
    featured: false,
    credits: [
      { label: 'Platform', value: 'PC' },
      { label: 'Status', value: 'Shipped jam+' },
      { label: 'Team', value: '2 people' },
    ],
  },
  {
    slug: 'dusk-array',
    title: 'Dusk Array',
    year: '2023',
    role: 'Systems / Tech Art',
    engine: 'Unity',
    genre: 'Tactical Mystery',
    tag: 'Systems',
    cover: '/images/dusk.jpg',
    images: ['/images/dusk.jpg', '/images/hero.jpg', '/images/setup.jpg'],
    excerpt: 'An observatory that maps people instead of stars.',
    description:
      'Dusk Array is a systems mystery set in a ruined observatory. You align lenses, intercept signals, and slowly realize the array is watching you back. I built the signal-crafting tools, the day-night simulation, and the shaders that make distant storms feel like incoming mail.',
    accent: '#c084fc',
    featured: false,
    credits: [
      { label: 'Platform', value: 'PC' },
      { label: 'Status', value: 'Vertical slice' },
      { label: 'Team', value: '4 people' },
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
