import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ButtonCustom, EnlacesCustom } from './components'
import infoUrl from './data/infoUrl'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {infoUrl.map((item) => (<EnlacesCustom key={item.altUrl} url={item.url} srcImg={item.srcImg} classLogo={item.classLogo} altUrl={item.altUrl} />))}
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <ButtonCustom 
          state={count}
          setState={setCount}
          textButton={"count is"}
        />
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
