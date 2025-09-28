import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'

const App = () => {

  const [count, setCount] = useState(0)

  const [alumno, setAlumno] = useState(() => {
    return {
      name: "",
      age: 0
    }
  })

  return (
    <>
      <h1>hola</h1>
      <Button funcionSeteadoraEstado={setCount} countEstado={count} />

      <p>Name: {alumno["name"]}  Edad: {alumno.age}</p>

      <input 
        type="text"
        name="name"
        id="name"
        onChange={(event) => (setAlumno((value) => {
          console.log("💙", event.target.value);
          
          return {
            ...value,
            name: event.target.value
          }
        }))}
      />

      <input 
        type="number"
        name="age"
        id="age"
        onChange={(event) => (setAlumno((value) => {
          return {
            ...value,
            age: event.target.value
          }
        }))}
      />
    </>
  )
}

export default App

// spread operator