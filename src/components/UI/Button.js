
const Button = (props) => {
    return (
      <button onClick={props.handleDo}>{props.children}</button>
    )
  }
  
  export default Button 