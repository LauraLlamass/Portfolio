export const projects = [
  {
    name: 'Carpinteria Las Artesanas',
    status: 'Finished',
    description:
      'Business web app for a carpentry company, including a custom inventory system for managing company products and internal data.',
    impact:
      'I built protected inventory views, authentication flows and a public landing page connected to the business needs.',
    technologies: [
      'Next.js 15',
      'App Router',
      'Server Components',
      'TypeScript',
      'Tailwind CSS',
      'shadcn/ui',
      'NextAuth.js',
      'OAuth',
      'SEO metadata',
      'Vercel',
    ],
    github: 'https://github.com/LauraLlamass/Carpinteria.git',
    demo: 'https://carpinteria-six.vercel.app/',
    images: [
      {
        src: '/images/projects/carpinteria-inventory.png',
        alt: 'Inventory dashboard for Carpinteria Las Artesanas',
      },
      {
        src: '/images/projects/carpinteria-home.png',
        alt: 'Landing page for Carpinteria Las Artesanas',
      },
    ],
    learning:
      'Building a full Next.js app with authentication, protected areas, server components, SEO metadata and deployment with Vercel.',
  },
  {
    name: 'The Black Cat Brew',
    status: 'Finished MVP',
    description:
      'Coffee search app where users can explore coffee information and take notes about origin, acidity and intensity.',
    impact:
      'I worked on the React interface, routing structure and backend connection for searching and organizing coffee notes.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'React Router',
      'Trello',
    ],
    github: 'https://github.com/LauraLlamass/The-black-cat-brew.git',
    demo: 'https://the-black-cat-brew.vercel.app/',
    images: [
      {
        src: '/images/projects/black-cat-search.png',
        alt: 'Coffee search page from The Black Cat Brew',
      },
    ],
    learning:
      'Working with a React frontend, routing, TypeScript structure and a backend with Node.js and Express.',
  },
  {
    name: 'Laura Keres',
    status: 'In progress',
    description:
    'Personal author website designed to present my writing, published work and creative identity in a clear and atmospheric experience.',
    impact:
    'I am designing and developing the complete visual identity, responsive layout and content structure from the perspective of both creator and user.',
  technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Responsive Design'],
    github: 'https://github.com/LauraLlamass/LauraKeres.git',
    demo: '',
     images: [
    {
      src: '',
      alt: '',
    },
    {
      src: '',
      alt: '',
    },
  ],
  learning:
    'Translating a personal creative identity into an accessible interface, creating a cohesive visual system and designing responsively across devices.',
}
]