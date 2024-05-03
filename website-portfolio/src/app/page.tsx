import Image from 'next/image'
import Project from '@/components/Project'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section id="Projects">
        <Project name= 'Spotify Playlist Search' gallery= {[]} description=''></Project>
      </section>
    </main>
  )
}
