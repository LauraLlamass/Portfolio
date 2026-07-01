const skills = ['React', 'JavaScript', 'TypeScript', 'Tailwind', 'HTML', 'CSS', 'Git']

const highlights = [
  {
    label: 'Current focus',
    text: 'Building responsive React interfaces with clean structure and thoughtful visual details.',
  },
  {
    label: 'Looking for',
    text: 'Junior frontend roles, internships or teams where I can keep growing through real projects.',
  },
  {
    label: 'What I bring',
    text: 'A careful eye for layout, curiosity, consistency and the patience to polish the small things.',
  },
]

function About() {
  return (
    <section id="about" className="bg-main-bg px-4 py-12 text-main-text md:py-16">
      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.08fr_0.92fr] md:items-center">
        <div className="relative z-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-red sm:tracking-[0.36em]">
            About me
          </p>

          <h2 className="font-display text-[3.8rem] font-bold leading-[0.82] text-dark sm:text-[4.8rem] md:text-[7.4rem]">
            Hello,
          </h2>



          <div className="mt-8 max-w-xl space-y-4 text-base font-medium leading-7 text-ink md:text-lg">
            <p>
              I&apos;m a junior frontend developer focused on building clear,
              responsive and expressive interfaces with React, JavaScript and
              Tailwind CSS.
            </p>
            <p>
              I enjoy turning ideas into usable screens, organizing components
              and shaping details that make a product feel easier to understand
              across devices.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="rounded-full bg-orange-bg px-6 py-3 text-center text-sm font-bold text-orange-text transition hover:bg-red-bg hover:text-red-text"
              href="/projects"
            >
              View my projects
            </a>
            <a
              className="rounded-full border-2 border-dark px-6 py-3 text-center text-sm font-bold text-dark transition hover:bg-dark-bg hover:text-dark-text"
              href="/contact"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:pt-16">
          {highlights.map((item, index) => (
            <article
              className={`p-6 ${
                index === 1
                  ? 'bg-dark-bg text-dark-text'
                  : 'bg-card-bg text-card-text'
              }`}
              key={item.label}
            >
              <p
                className={`text-xs font-bold uppercase tracking-[0.24em] ${
                  index === 1 ? 'text-orange' : 'text-red'
                }`}
              >
                {item.label}
              </p>
              <p className="mt-3 font-display text-xl font-bold leading-tight sm:text-2xl">
                {item.text}
              </p>
            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default About
