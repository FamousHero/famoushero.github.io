import Dates from '../Dates'
import '../dates.css'

const EducationSec = ({titleClass}) => {
  return (
    <div>
        <h2 className={titleClass}>Education</h2>
        <div>
            <label htmlFor="school">School: </label>
            <input id="school" type="text" />
        </div>
        <div>
            <label htmlFor="major">Major: </label>
            <input id="major" type="text" />
        </div>
        < Dates />
    </div>
  )
}

export default EducationSec