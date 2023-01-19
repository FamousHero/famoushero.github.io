import Dates from '../Dates'
import '../dates.css'

const EducationSec = ({titleClass, refs}) => {
  return (
    <div>
        <h2 className={titleClass}>Education</h2>
        <div>
            <label htmlFor="school">School: </label>
            <input ref={refs['schoolRef']} id="school" type="text" />
        </div>
        <div>
            <label htmlFor="major">Major: </label>
            <input ref={refs['majorRef']} id="major" type="text" />
        </div>
        < Dates startRef={refs['startRef']} endRef={refs['endRef']} />
    </div>
  )
}

export default EducationSec