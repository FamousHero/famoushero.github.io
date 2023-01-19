import Dates from '../Dates'
import '../dates.css'

const PracticalExp = ({titleClass, refs}) => {
  return (
    <div>
        <h2 className={titleClass}>Practical Experience</h2>
        <div>
            <label htmlFor="company">Company: </label>
            <input ref={refs['companyRef']} id="company" type="text" />
        </div>
        <div>
            <label htmlFor="position">Position: </label>
            <input ref={refs['positionRef']} id="position" type="text" />
        </div>
        <div>
            <label htmlFor="tasks">Tasks: </label>
            <input ref={refs['tasksRef']} id="tasks" type="text" />
        </div>
        <Dates startRef={refs['startRef']} endRef={refs['endRef']}/>
    </div>
  )
}

export default PracticalExp