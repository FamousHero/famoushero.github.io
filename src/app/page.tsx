import Image from 'next/image'
import Head from 'next/head'
import About from '@/components/About'
import Projects_container from '@/components/Projects_container'
import Socials from '@/components/Socials'
import {headers} from 'next/headers'
export default function Home() {
  const header = headers();
  const ip =  (header.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0].replace(/^.*:/, '');
  return (
    <main className="min-h-screen">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <h1 id='About' className='pt-[100px] text-center text-3xl text-fade font-bold'>About {ip}</h1>
      <About/>
      <h1 id='Projects' className='pt-[100px] text-center text-3xl text-fade font-bold'>Projects</h1>
      <Projects_container/>
      <h1 id='Socials' className='pt-[100px] text-center text-3xl text-fade font-bold'>Socials</h1>
      <Socials/>
    </main>
  )
}
