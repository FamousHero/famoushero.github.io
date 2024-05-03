import Image from 'next/image'
import Project from '@/components/Project'
import Projects from './Projects.json' assert {type : 'json'}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className='flex justify-around w-[80%]' id="Projects">
        {
          Projects["Projects"].map((project, i) =>
            (
              <Project key={i} name={project.name} description={project.description}
              gallery={project.gallery}></Project>
            )
          )
        }
      </section>
    </main>
  )
}
