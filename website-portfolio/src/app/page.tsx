import Image from 'next/image'

import About from '@/components/About'
import Projects_container from '@/components/Projects_container'

export default function Home() {
  return (
    <main className="min-h-screen">
      <About/>
      <Projects_container/> 
    </main>
  )
}
