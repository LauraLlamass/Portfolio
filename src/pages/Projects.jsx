import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <main>
      <section className="bg-main-bg px-4 py-24 text-main-text">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-display text-[4.8rem] font-bold uppercase leading-[0.8] text-dark md:text-[7rem]">
            Projects
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-7 md:text-lg">
            A selection of projects where I combine design, code and problem solving.
          </p>
        </div>
      </section>

      {projects.map((project, index) => (
        <ProjectCard index={index} key={project.name} project={project} />
      ))}
    </main>
  )
}

export default Projects
