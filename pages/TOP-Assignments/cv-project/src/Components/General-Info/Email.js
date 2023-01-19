

export default function Email({forwardRef}){
    return (
        <div>
            <label htmlFor="email">Email: </label>
            <input ref={forwardRef} type="text" id="email" />
        </div>
    )
}