

import React from 'react'

const Dates = () => {
  return (
    <div className='dates'>
        <div>
            <label htmlFor="start-date">Start Date: </label>
            <input id="start-date" type="date" />
        </div>
        <div>
            <label htmlFor="end-date">End Date: </label>
            <input id="end-date" type="date" />
        </div>
    </div>
  )
}

export default Dates