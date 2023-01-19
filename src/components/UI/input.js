import { useRef } from "react"

function Input ({ title, setValue }) {

  const inputRef = useRef()

  // console.log(inputRef.current.value)

  return (
    <input ref={inputRef} value={title} onChange={(e) => setValue(e.target.value)} className="mainInput" placeholder="Name"/>
  )
}

export default Input
