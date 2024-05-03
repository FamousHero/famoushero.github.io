import React from 'react'
const navList = [
  {title: 'About', href: "#About"},
  {title: 'Projects', href: "#Projects"},
  {title: 'Socials', href: "#Socials"}
]

const Navbar = () => {
  return (
    <header className='w-full absolute z-10 bg-black text-white py-4'>
      <nav className='max-w-[1440px] mx-auto flex justify-start gap-6 px-2 '>
        {navList.map((item, index)=>{
        let classes = 'rounded-md px-3 py-2 text-small font-medium text-gray-300 \
        focus:bg-gray-900 focus:text-white hover:bg-neutral-800/50 hover:text-white \
        '
        //Want the focus of a button and functionality of a tag 
        //Didn't want to make a click function just for that
        return ( <button key={index} className= {classes}>
                  <a href={item.href}>
                    {item.title}
                  </a>
                </button>)
        }
        )}
      </nav>
    </header>
  )
}

export default Navbar