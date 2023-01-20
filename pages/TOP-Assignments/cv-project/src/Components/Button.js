import './button.css'

const Button = ({text, onClick}) => {
  return (
    <button className="button" type='button' onClick={onClick}>{text}</button>
  )
}

export default Button