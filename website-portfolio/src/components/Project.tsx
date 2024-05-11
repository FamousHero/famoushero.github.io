import Image from "next/image"
import React from 'react'
interface ProjectProps {
    name: string,
    gallery: Array<string>,
    description: string,
    href: string,
}
function Project({name, gallery, description, href}: ProjectProps) {
  return (
    <div className='w-[720px] shrink-0 h-fit rounded text-center hover:bg-gray-700 p-2'>
        <a href={href}>
          <h2 className='border-b-2 text-2xl border-gray-400/60'>{name}</h2>
          <p className="mt-4 mb-2">{description}</p>
          <div className="w-fit mx-auto">{/**Gallery Container */}
            <Image src={gallery[0]} alt="" width={720} height={422}></Image>
              {/**map through gallery and create jsx */}
          </div>
        </a>
    </div>
  )
}

export default Project