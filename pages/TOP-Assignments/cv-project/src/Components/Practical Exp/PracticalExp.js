import Dates from './Dates'
import './practicalExp.css'

const PracticalExp = () => {
  return (
    <div>
        <h2 className='title'>Practical Experience</h2>
        <div>
            <label htmlFor="company">Company: </label>
            <input id="company" type="text" />
        </div>
        <div>
            <label htmlFor="position">Position: </label>
            <input id="position" type="text" />
        </div>
        <div>
            <label htmlFor="tasks">Tasks: </label>
            <input id="tasks" type="text" />
        </div>
        <Dates />
    </div>
  )
}

export default PracticalExp