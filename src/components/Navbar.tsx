import React from 'react'
const navList = [
  {title: 'About', href: "#About"},
  {title: 'Projects', href: "#Projects"},
  {title: 'Socials', href: "#Socials"}
]
/** TODO: Fix on mobile!! 
 * Currently works on 900p and above
*/
const Navbar = () => {
  return (
  
    <header className='w-full fixed z-10 bg-black text-white  py-4 border-b-2 border-white/70'>
      <nav className='mx-24 flex justify-around gap-6 px-2 '>
        <div>

        {navList.map((item, index)=>{
          let classes = 'rounded-md w-[80px] h-[40px] px-3 py-2 text-small font-medium text-gray-300 \
          hover:bg-neutral-800/50 hover:text-white \
          '
          //Want the focus of a button and functionality of a tag 
          //Didn't want to make a click function just for that
          return (  <a key={index} className={classes} href={item.href}>
                    {item.title}
                  </a>
               )
              }
            )}
        </div>
        <div>
          Computer Scientist | Software Engineer
        </div>
      </nav>
    </header>
  )
}

export default Navbar