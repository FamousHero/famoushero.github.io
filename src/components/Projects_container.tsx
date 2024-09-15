import React from 'react'
import Project from '@/components/Project'
import Projects from '../app/Projects.json' assert {type : 'json'}

function Projects_container() {
  return (
    <section className='flex flex-wrap justify-evenly max-w-[1500px] mx-auto gap-8 py-10 ' >
        {
          Projects["Projects"].map((project, i) =>
            (
              <Project key={i} name={project.name} description={project.description}
              gallery={project.gallery} href={project.href} repo={project.repo}></Project>
            )
          )
        }
      </section>
  )
}

export default Projects_container