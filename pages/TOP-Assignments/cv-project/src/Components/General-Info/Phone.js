

export default function Phone({forwardRef}){
    return (
        <div>
            <label htmlFor="phone">Phone #: </label>
            <input ref={forwardRef} type="text" id="phone" />
        </div>
    )
}