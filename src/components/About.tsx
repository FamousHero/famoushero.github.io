import React from 'react'
import Image from 'next/image'
/** TODO: Fix for mobile
 * Currently working for 1200p and above
 */
function About() {
  return (
    
    <section className='flex flex-wrap  1300px:flex-nowrap justify-center items-center gap-12'>
        <Image className='w-[80%] max-w-[720px] 1300px:w-[720px] 1300px:ml-24 mt-10'src="/pfp.jpg" alt="Profile Picture" width={720} height={720}></Image>
        <p className='px-4 text-center 1300px:text-left 1300px:px-24 tracking-wider inline-block'>
            <span className=' font-xl font-semibold 1300px:text-left '>Hello, my name is Daniel.</span><br/>
            I am a Computer Game Science graduate from the University of California, Irvine. 
            My hobbies include going to the gym, expanding my knowledge of computers, and taking my dogs out on walks.
            I have created projects in web development, game development and software develpment.
            My current focus is on taking my CompTIA Security+ Exam and learning the different vulerabilities and exploits 
            in both web development and software development. If you&apos;d like to reach out to me I am available on Linkedin 
            or @ gmail. The cycle of hate ends with me ❤️.
        </p>
    </section>
  )
}

export default About
