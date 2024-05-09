import React from 'react'
interface ProjectProps {
    name: string,
    gallery: Array<string>,
    description: string,
}
function Project({name, gallery, description}: ProjectProps) {
  return (
    <div className='w-80 h-64 rounded text-center hover:bg-gray-700 p-2'>
        <h2 className='border-b-2 border-gray-400/60'>{name}</h2>
        <p>{description}</p>
        <div>{/**Gallery Container */}
            {/**map through gallery and create jsx */}
        </div>
    </div>
  )
}

export default Project