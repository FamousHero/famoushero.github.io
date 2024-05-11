import React from 'react'
let refs = [{name: "Linkedin", href: "https://www.linkedin.com/in/dahf/"}, 
{name: "Github", href: "https://github.com/FamousHero"},
{name: "Gmail", href: "mailto:danielfranco2011@gmail.com"}]


function Socials() {
  return (
    <section className='flex justify-center items-center gap-12 py-10'>
        {refs.map((ref)=>
                (
                    <a href={ref.href} className='hover:text-cyan-500'>{ref.name}</a>
                )
            )
        }
    </section>
  )
}

export default Socials