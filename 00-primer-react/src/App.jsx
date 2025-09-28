import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0) // valor inicial de count = 0

  const cambiarEstado = () => {
    setCount((valorActualDeCount) => {
      return valorActualDeCount + 1
    })
  }
  
  console.log('esto es count', count);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hola qué tal</h1>
      <div className="card">
        <button onClick={() => cambiarEstado()}>
          count is {count}
        </button>
        <p>
          Vamos a enredar con la variable de estado COUNT
        </p>
      </div>
      <p className="read-the-docs">
        😀
      </p>
    </>
  )
}

export default App
