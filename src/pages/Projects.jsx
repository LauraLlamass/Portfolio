import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <main>
      <section className="bg-main-bg px-4 py-24 text-main-text">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.36em] text-red">
            Selected projects
          </p>

          <h1 className="font-display text-[4.8rem] font-bold uppercase leading-[0.8] text-dark md:text-[7rem]">
            Projects
          </h1>
        </div>
      </section>

      {projects.map((project, index) => (
        <ProjectCard index={index} key={project.name} project={project} />
      ))}
    </main>
  )
}

export default Projects
