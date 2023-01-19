

export default function Name({forwardRef}){
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input ref={forwardRef} id="name"></input>
        </div>
    )
}