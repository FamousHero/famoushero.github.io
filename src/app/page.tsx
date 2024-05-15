'use client'
 import { useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import About from '@/components/About'
import Projects_container from '@/components/Projects_container'
import Socials from '@/components/Socials'
import {headers} from 'next/headers'

export default function Home() {
  const IPFetch = useEffect(() =>{
  const fetchData = async () =>{
    const res = (await fetch("https://api.ipify.org?format=json")).json();
    if(!res){
      throw new Error('Failed to fetch');
    }
    return res;
  }
},[])
  return (
    <main className="min-h-screen">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <h1 id='About' className='pt-[100px] text-center text-3xl text-fade font-bold'>About {JSON.stringify(IPFetch)}</h1>
      <About/>
      <h1 id='Projects' className='pt-[100px] text-center text-3xl text-fade font-bold'>Projects</h1>
      <Projects_container/>
      <h1 id='Socials' className='pt-[100px] text-center text-3xl text-fade font-bold'>Socials</h1>
      <Socials/>
    </main>
  )
}
