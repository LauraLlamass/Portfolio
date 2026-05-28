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
    name: 'Moodboard',
    status: 'In progress',
    description:
      'Creative moodboard app for saving aesthetic boards for personal projects, inspiration and daily visual moods.',
    impact:
      'I am focusing on reusable UI components, responsive composition and a more interactive visual editing experience.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/LauraLlamass/moodboard.git',
    demo: '',
    learning:
      'Building a more visual and interactive frontend app, organizing reusable components and improving UI composition with Tailwind CSS.',
  },
]
