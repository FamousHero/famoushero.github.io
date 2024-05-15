
import Head from 'next/head'
import About from '@/components/About'
import Projects_container from '@/components/Projects_container'
import Socials from '@/components/Socials'
import IPCatcher from '@/components/IPCatcher'
export default function Home() {
  return (
    <main className="min-h-screen">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <h1 id='About' className='pt-[100px] text-center text-3xl text-fade font-bold'>About {/*<IPCatcher/>*/}</h1>
      <About/>
      <h1 id='Projects' className='pt-[100px] text-center text-3xl text-fade font-bold'>Projects</h1>
      <Projects_container/>
      <h1 id='Socials' className='pt-[100px] text-center text-3xl text-fade font-bold'>Socials</h1>
      <Socials/>
    </main>
  )
}
