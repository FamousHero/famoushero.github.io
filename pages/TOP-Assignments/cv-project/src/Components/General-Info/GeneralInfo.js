import Name from './Name'
import Phone from './Phone'
import Email from './Email'
import './generalInfo.css'

export default function GeneralInfo({titleClass, nameRef, phoneRef, emailRef}){
    return (
        <div>
            <h2 className={titleClass}>General Info</h2>
            <Name forwardRef={nameRef} />
            <Phone forwardRef={phoneRef} />
            <Email forwardRef={emailRef} />
        </div>
    )
}