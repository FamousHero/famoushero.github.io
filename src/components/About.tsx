import React from 'react'
import Image from 'next/image'
/** TODO: Fix for mobile
 * Currently working for 1200p and above
 */
function About() {
  return (
    
    <section className='flex justify-center items-center gap-12'>
        <Image className='ml-24 mt-10'src="/pfp.jpg" alt="Profile Picture" width={720} height={720}></Image>
        <p className='pr-24 tracking-wider'>
            Hello, my name is Daniel. <br/>
            I am a Computer Game Science graduate from the University of California, Irvine. 
            My hobbies include going to the gym, expanding my knowledge of computers, and taking my dogs out on walks.
            I have created projects in web development, game development and software develpment.
            My current focus is on taking my CompTIA Security+ Exam and learning the different vulerabilities and exploits 
            in both web development and software development. If you&apos;d like to reach out to me I am available on Linkedin 
            or @ gmail.
        </p>
    </section>
  )
}

export default About
