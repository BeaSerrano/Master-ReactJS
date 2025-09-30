import { useRef, useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const inputRef = useRef(null)
  const errorRef = useRef(null)
  const [value, setValue] = useState("")

  useEffect(() => {
    console.log("VALUE 👁️", value);
    console.log("VALOR INPUTREF 🖖", inputRef.current.value);
    value != "Uma" && (errorRef.current.style.color = "red")
  }, [value])

  return (
    <>
      <h1>useRef</h1>

      <input 
        type="text"
        name="example"
        id="example"
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
      />

      {value != "Uma" && (
        <p ref={errorRef}>Ha introducido un valor incorrecto</p>
      )}
    </>
  )
}

export default App
