import Image from "next/image"
import React from 'react'
interface ProjectProps {
    name: string,
    gallery: Array<string>,
    description: string,
    href: string,
    repo: string,
    site: string,
}
// h-fit rounded text-center hover:bg-gray-700 p-2
function Project({name, gallery, description, repo, site, href}: ProjectProps) {
  return (
    <div className='text-center hover:bg-gray-700 p-2 1300px:w-[720px] 1200px:rounded'>
        <a href={href}>
          <h2 className='border-b-2 text-2xl border-gray-400/60'>{name}</h2>
          <p className="mt-4 mb-2">{description}</p>
          <p className="mt-4 mb-2">
          {site !== "" &&
            <p className="mt-4 mb-2">
              Website: <a className="hover:text-red-800" href={site}>{site}</a>
            </p>
          } 
            Repo: {repo === "TBA"? repo: <a className="hover:text-red-800" href={repo}>{repo}</a>}
          </p>
          <Image className="w-[80%] mx-auto"src={gallery[0]} alt="" width={720} height={422}></Image>
              {/**map through gallery and create jsx */}
        </a>
    </div>
  )
}

export default Project