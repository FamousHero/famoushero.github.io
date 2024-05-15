'use client'
 import { useState, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import About from '@/components/About'
import Projects_container from '@/components/Projects_container'
import Socials from '@/components/Socials'
import {headers} from 'next/headers'

export default function Home() {
  const [IP, setIP] = useState<string>("");

  useEffect(() =>{
    const fetchData = async () =>{
      //Get client ip from ipify.org
      try{  
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        //extract ip from returned json
        console.log(data);
        setIP(oldIP => {return data["ip"]});    
      }
      catch{
        console.log('Promise failed: ip not received')
      }
    }
    fetchData().catch(console.error);
  },[]);
  return (
    <main className="min-h-screen">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <h1 id='About' className='pt-[100px] text-center text-3xl text-fade font-bold'>About {IP}</h1>
      <About/>
      <h1 id='Projects' className='pt-[100px] text-center text-3xl text-fade font-bold'>Projects</h1>
      <Projects_container/>
      <h1 id='Socials' className='pt-[100px] text-center text-3xl text-fade font-bold'>Socials</h1>
      <Socials/>
    </main>
  )
}
