export const projects = [
  {
    name: 'Ann C. Kigal',
    status: 'Finished MVP',
    description:
      'Professional website for a Valencian writer, illustrator and philologist, created to present her personal brand, her book Dos legados de furia, the fantasy world of Ídreka and her creative services.',
    impact:
      'For this paid client project, I defined the content architecture and designed and developed an accessible, responsive editorial experience that connects her work, services and contact paths within one cohesive visual identity.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'UX/UI Design',
      'Content Architecture',
      'Responsive Design',
      'Accessibility',
      'Image Optimization',
      'SEO Metadata',
      'Vercel',
    ],
    github: 'https://github.com/LauraLlamass/ann_kigal.git',
    demo: 'https://ann-kigal.vercel.app/',
    images: [
      {
        src: '/images/projects/ann-kigal-home.png',
        alt: 'Editorial homepage designed for writer and illustrator Ann C. Kigal',
      },
      {
        src: '/images/projects/ann-kigal-book.png',
        alt: 'Dos legados de furia book page within the fantasy world of Ídreka',
      },
    ],
    learning:
      'Delivering an end-to-end website for a real client, from content strategy and visual direction to a production-ready frontend. The newsletter is planned for a later phase.',
  },
  {
    name: 'Carpintería Las Artesanas',
    status: 'Finished',
    description:
      'Business web application that combines a public website for a carpentry company with a custom private inventory for managing products and internal data.',
    impact:
      'I translated the company workflows into protected inventory views, implemented authentication with OAuth and built a public-facing experience tailored to the business.',
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
        alt: 'Inventory dashboard for Carpintería Las Artesanas',
      },
      {
        src: '/images/projects/carpinteria-home.png',
        alt: 'Landing page for Carpintería Las Artesanas',
      },
    ],
    learning:
      'Architecting public and private areas within one Next.js application, including secure access, server-rendered interfaces and a production deployment.',
  },
  {
    name: 'The Black Cat Brew',
    status: 'Finished MVP',
    description:
      'Full-stack coffee discovery app where users can search for coffees and organize tasting notes by origin, acidity and intensity.',
    impact:
      'I built the typed React interface and routing structure, then connected it to an Express backend to support coffee searches and structured tasting notes.',
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
      'Coordinating a typed frontend with an API, keeping navigation, data flow and the search experience consistent across the application.',
  },
]
