import React from 'react'
import Image from 'next/image'

function About() {
  return (
    
    <section id='About' className='flex mix-blend-difference gap-12'>
        <Image className='ml-24 my-24'src="/pfp.jpg" alt="Profile Picture" width={720} height={720}></Image>
        <p className='h-[720px] pt-72 pr-24'>
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