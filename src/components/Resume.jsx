const education = [
  {
    date: '2024-2026',
    title: 'Ceac FP',
    description: 'Web Application Development',
  },
  {
    date: '2019-2023',
    title: 'University of Malaga',
    description: 'Labour Relations and Human Resources',
  },
]

const experience = [
  {
    date: 'March-Jun 2026',
    title: 'Corner',
    description: 'Fullstack Web Development Program',
  },
  {
    date: 'July-Dec 2024',
    title: 'Cristalware consulting services',
    description: 'Administrative Assistant',
  },
  {
    date: 'May-Jun 2024',
    title: 'Moove cars',
    description: 'Driver',
  },
]

const technicalSkills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Next.js',
  'HTML5',
  'CSS3',
  'TailwindCSS',
]

const tools = ['GitHub', 'Vercel']

const languages = [
  {
    language: 'English',
    level: 'B2',
  },
  {
    language: 'Spanish',
    level: 'Native',
  },
]

function Resume() {
  return (
    <section id="resume" className="bg-dark-bg px-4 py-10 text-dark-text md:py-14">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <TimelineSection title="Education" items={education} />
          <TimelineSection
            items={experience}
            title="Experience"
            variant="orange"
          />
        </div>

        <div>
          <p className="ml-12 font-display text-[4.6rem] font-bold uppercase leading-[0.78] text-transparent md:ml-20 md:text-[5.8rem]">
            <span className="block [-webkit-text-stroke:1px_var(--color-orange)]">
              Resume
            </span>
            <span className="block [-webkit-text-stroke:1px_var(--color-orange)]">
              Resume
            </span>
            <span className="block [-webkit-text-stroke:1px_var(--color-orange)]">
              Resume
            </span>
          </p>

          <div className="mt-14 w-full max-w-md text-dark-text md:ml-12 md:mt-20">
            <p className="font-display text-4xl font-bold text-orange">
              Technical skills
            </p>

            <div className="mt-5 grid gap-6 text-sm font-semibold sm:grid-cols-2">
              <SkillGroup title="Software skills" items={tools} compact />
              <SkillGroup title="Coding skills" items={technicalSkills} />
            </div>

            <div className="mt-8">
              <p className="font-display text-4xl font-bold text-orange">
                Language
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {languages.map((item) => (
                  <div key={item.language}>
                    <p className="font-display text-xl font-bold">
                      {item.language}
                    </p>
                    <p className="text-sm font-semibold">{item.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineSection({ title, items, tags = [], variant = 'dark' }) {
  const isOrange = variant === 'orange'
  const sectionClasses = isOrange
    ? 'bg-orange-bg p-6 text-orange-text'
    : 'text-dark-text'
  const titleColor = isOrange ? 'text-ink' : 'text-orange'
  const iconColor = isOrange ? 'text-cream' : 'text-orange'

  return (
    <div className={sectionClasses}>
      <h2 className={`font-display text-4xl font-bold ${titleColor}`}>
        {title}
      </h2>

      <div className="mt-5 space-y-5">
        {items.map((item) => (
          <article
            className="grid grid-cols-[1.25rem_5.5rem_1fr] gap-3"
            key={`${item.date}-${item.title}`}
          >
            <span className={`mt-1 text-2xl font-black leading-none ${iconColor}`}>
              +
            </span>
            <p className="pt-1 text-sm font-black">{item.date}</p>
            <div>
              <h3 className="font-display text-xl font-bold leading-tight">
                {item.title}
              </h3>
              <p className="mt-1 text-xs font-semibold leading-5">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {tags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              className="rounded-full bg-dark-bg px-5 py-2 text-xs font-bold uppercase tracking-[0.08em] text-dark-text"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function SkillGroup({ title, items, compact = false }) {
  return (
    <div>
      <p className="font-display text-xl font-bold">{title}</p>
      <div className={`mt-3 flex flex-wrap ${compact ? 'gap-1.5' : 'gap-2'}`}>
        {items.map((item) => (
          <span
            className="rounded-full bg-card-bg px-3 py-1.5 text-xs font-black uppercase tracking-[0.08em] text-card-text"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Resume
