

import React from 'react'

const Dates = ({startRef, endRef}) => {
  return (
    <div className='dates'>
        <div>
            <label htmlFor="start-date">Start Date: </label>
            <input ref={startRef} id="start-date" type="date" />
        </div>
        <div>
            <label htmlFor="end-date">End Date: </label>
            <input ref={endRef} id="end-date" type="date" />
        </div>
    </div>
  )
}

export default Dates