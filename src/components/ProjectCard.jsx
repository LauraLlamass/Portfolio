function ProjectCard({ index, project }) {
  const isdark = index % 2 === 0
  const sectionClasses = isdark
    ? 'bg-dark-bg text-dark-text'
    : 'bg-main-bg text-main-text'
  const headingColor = isdark ? 'text-cream' : 'text-dark'
  const tagClasses = isdark
    ? 'bg-card-bg text-card-text'
    : 'bg-dark-bg text-dark-text'
  const primaryLinkClasses = isdark
    ? 'bg-card-bg text-card-text'
    : 'bg-orange-bg text-orange-text'
  const secondaryLinkClasses = isdark
    ? 'border-cream text-cream'
    : 'border-dark text-dark'
  const imageBorder = isdark ? 'border-cream' : 'border-dark'

  return (
    <section className={`${sectionClasses} px-4 py-16 md:py-20`}>
      <div className="mx-auto max-w-6xl">
        <article className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-start">
          <div>
            <p className={`text-xs font-bold uppercase tracking-[0.2em] ${headingColor}`}>
              Project 0{index + 1} / {project.status}
            </p>
            <h2 className={`mt-3 font-display text-5xl font-black leading-none md:text-6xl ${headingColor}`}>
              {project.name}
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-base font-medium leading-7 md:text-lg">
              {project.description}
            </p>

            <p className="mt-4 max-w-3xl text-sm font-bold leading-6">
              {project.impact}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  className={`${tagClasses} rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.08em]`}
                  key={technology}
                >
                  {technology}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-sm font-semibold leading-6">
              {project.learning}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className={`${primaryLinkClasses} rounded-full px-5 py-3 text-sm font-bold`}
                href={project.github}
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  className={`${secondaryLinkClasses} rounded-full border-2 px-5 py-3 text-sm font-bold`}
                  href={project.demo}
                  rel="noreferrer"
                  target="_blank"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </article>

        {project.images && (
          <div className="mt-12 grid items-start gap-4 md:grid-cols-2">
            {project.images.map((image) => (
              <img
                alt={image.alt}
                className={`${imageBorder} w-full border-2 object-contain`}
                key={image.src}
                src={image.src}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectCard
