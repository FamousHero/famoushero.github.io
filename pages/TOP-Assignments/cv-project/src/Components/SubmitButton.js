import './submitButton.css'

const SubmitButton = ({onClick}) => {
  return (
    <button className="submit" type='submit' onClick={onClick}>Submit</button>
  )
}

export default SubmitButton