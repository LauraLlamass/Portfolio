const skills = ['React', 'JavaScript', 'Tailwind', 'HTML', 'CSS', 'Git']

function About() {
  return (
    <section id="about" className="bg-main-bg px-4 py-12 text-main-text md:py-16">
      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.08fr_0.92fr] md:items-center">
        <div className="relative z-10">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-red">
            About me
          </p>

          <h2 className="font-display text-[4.8rem] font-bold leading-[0.8] text-dark md:text-[7.4rem]">
            Hello,
            <span className="block">I&apos;m Laura</span>
          </h2>

          <div className="mt-8 max-w-xl space-y-4 text-base font-medium leading-7 text-ink md:text-lg">
            <p>
              I&apos;m a junior frontend developer who has just finished her
              studies and is ready to keep learning through real projects.
            </p>
            <p>
              I like building interfaces that feel clear, useful and full of
              personality, with special care for layout, responsive details and
              small interactions.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-orange-bg px-6 py-3 text-sm font-bold text-orange-text transition hover:bg-red-bg hover:text-red-text"
              href="/projects"
            >
              View my projects
            </a>
            <a
              className="rounded-full border-2 border-dark px-6 py-3 text-sm font-bold text-dark transition hover:bg-dark-bg hover:text-dark-text"
              href="/contact"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="relative min-h-[360px] md:min-h-[500px]">
          <div className="absolute left-0 top-24 z-20 w-[250px] bg-dark-bg p-6 text-dark-text md:w-[290px]">
            <p className="font-display text-3xl font-bold">Studies</p>
            <p className="mt-3 text-sm font-semibold leading-6">
              Frontend development, web design basics and modern JavaScript
              workflows.
            </p>
          </div>

          <div className="absolute right-0 top-56 z-20 w-[280px] bg-card-bg p-6 text-card-text md:w-[340px]">
            <p className="font-display text-3xl font-bold">Technical skills</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  className="rounded-full bg-dark-bg px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-dark-text"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
