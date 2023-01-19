import Name from './Name'
import Phone from './Phone'
import Email from './Email'
import './generalInfo.css'

export default function GeneralInfo({titleClass}){
    return (
        <div>
            <h2 className={titleClass}>General Info</h2>
            <Name />
            <Phone />
            <Email />
        </div>
    )
}