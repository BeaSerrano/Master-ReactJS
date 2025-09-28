import { useEffect } from "react"

export const H1 = (props) => {
    // traemos el estado que cambia el valor y que vamos a usar en el array de dependencias
    // lo traemos por las props que hemos usado en el componente H1 en la Home
    const {estadoPadre} = props;

    useEffect(() => {
        console.log('me monto o cambia el valor de cambiarValor 👌');
    }, [estadoPadre])

    return (
        <h1>
            {props.title}
        </h1>
    )
}


//! TEORIA

//* 1) --- Sin array de dependencias - NO recomendado, pierde su efecto

    // useEffect(() => {
    //     console.log('Esta lógica solo se ejecuta en cada renderizado');
    // })


//* 2) --- Array de dependecias vacío

    // useEffect(() => {
    //     console.log('La lógica se ejecuta una sola vez, cuando el componente se monta');
    // }, [])

//* 3) --- Escuchando algo en su array de dependencias -- MÁS USADO Y ÚTIL

    // useEffect(() => {
    //     console.log(`La lógica se ejecuta cada vez que ${algo} cambie`);
    // }, [algo])