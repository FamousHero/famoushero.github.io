import Name from './Name'
import Phone from './Phone'
import Email from './Email'
import './generalInfo.css'

export default function GeneralInfo(){
    return (
        <div className="general-info">
            <h2 className="title">General Info</h2>
            <Name />
            <Phone />
            <Email />
        </div>
    )
}