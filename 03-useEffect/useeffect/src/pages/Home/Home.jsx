import { useState } from 'react'
import './Home.css'
import { H1 } from '../../components'

export const Home = () => {
    // el estado montaje será true o false, con un estado inicial en false
    // lo vamos a usar para montar y desmontar el componente H1
    const [ montaje, setMontaje ] = useState(false)

    // lo que cambie el valor del H1 y se esuchará en su useEffect, en el array de dependencias
    const [cambiarValor, setCambiarValor] = useState(false)
    console.log('cambiarValor', cambiarValor);
    
    return (
        <div id="homeContainer">
            {/* renderizado condicional */}
            {montaje && (
                <H1 title="Componente H1 montaje"/>
            )}

            <button onClick={() => setMontaje(montajeValue => !montajeValue)}>MONTAR / DESMONTAR</button>

            {cambiarValor && (
                <H1 title="Componente H1 cmabiarValor" estadoPadre={cambiarValor} />
            )}

            <button onClick={() => setCambiarValor(cambioValor => !cambioValor)}>CAMBIAR VALOR DEL ARRAY DE DEPENDENCIAS DEL USEEFFECT DEL H1</button>
        </div>
    )
}