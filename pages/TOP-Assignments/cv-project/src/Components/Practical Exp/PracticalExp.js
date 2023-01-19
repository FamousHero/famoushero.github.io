import Dates from '../Dates'
import '../dates.css'

const PracticalExp = ({titleClass}) => {
  return (
    <div>
        <h2 className={titleClass}>Practical Experience</h2>
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