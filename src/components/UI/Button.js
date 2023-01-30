
const Button = (props) => {
  return (
    <button className='buttonAdd' onClick={props.handleDo}>{props.children}</button>
  )
}

export default Button 