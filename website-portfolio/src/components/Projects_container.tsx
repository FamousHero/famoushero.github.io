import React from 'react'
import Project from '@/components/Project'
import Projects from '../app/Projects.json' assert {type : 'json'}

function Projects_container() {
  return (
    <section className='flex justify-around w-[80%] h-screen pt-10' id="Projects">
        {
          Projects["Projects"].map((project, i) =>
            (
              <Project key={i} name={project.name} description={project.description}
              gallery={project.gallery}></Project>
            )
          )
        }
      </section>
  )
}

export default Projects_container