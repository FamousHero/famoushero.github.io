import React from 'react'
interface ProjectProps {
    name: string,
    gallery: Array<string>,
    description: string,
}
function Project({name, gallery, description}: ProjectProps) {
  return (
    <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <div>{/**Gallery Container */}
            {/**map through gallery and create jsx */}
        </div>
    </div>
  )
}

export default Project