import './cv.css'

import React from 'react'

const CV = ({genInfoRefs, pracExpRefs, edRefs}) => {
  return (
    <div className='cv'>
        <div className='cv-inner'>
            <h2>General Info</h2>
            <p>Name: {genInfoRefs['nameRef'].current.value}</p>
            <p>Phone #: {genInfoRefs['phoneRef'].current.value}</p>
            <p>Email: {genInfoRefs['emailRef'].current.value}</p>
        </div>
        <div className='cv-inner'>
            <h2>Education</h2>
            <p>School: {edRefs['schoolRef'].current.value}</p>
            <p>Major: {edRefs['majorRef'].current.value}</p>
            <p>Start Date: {edRefs['startRef'].current.value}</p>
            <p>End Date: {edRefs['endRef'].current.value}</p>
        </div>
        <div className='cv-inner'>
            <h2>Practical Experience</h2>
            <p>Company: {pracExpRefs['companyRef'].current.value}</p>
            <p>Position: {pracExpRefs['positionRef'].current.value}</p>
            <p>Tasks: {pracExpRefs['tasksRef'].current.value}</p>
            <p>Start Date: {pracExpRefs['startRef'].current.value}</p>
            <p>End Date: {pracExpRefs['endRef'].current.value}</p>

        </div>
    </div>
  )
}

export default CV