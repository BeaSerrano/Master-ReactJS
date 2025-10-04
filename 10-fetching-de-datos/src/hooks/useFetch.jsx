import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: null,
        hasError: null
    })

    const getFetch = async () => {
        // empieza la llamada a la api, entonces isLoading es true
        setState({ 
            ...state, 
            isLoading: true 
        })

        try {
            // hacemos la llamada con un fetch a la url del customHook
            const res = await fetch(url)

            // si la respuesta no es ok ---> res.ok = false ---> lanzo error
            // si la respuesta es ok ---> res.ok = true ---> traigo los datos de la api
            if(!res.ok) {
                throw new Error(`Ha habido un error ${res.status} ${res}`);
            } else {
                const dataJson = await res.json()
                // seteo los datos de la api en el estado state y pongo isLoading en false
                setState({ 
                    ...state, 
                    data: dataJson, 
                    isLoading: false 
                })
            }
        } catch (error) {
            // si entra por el catch --> cargo en hasError el error y pongo isLoading en false
            setState({
                ...state,
                isLoading: false,
                hasError: error
            })
        }
    }

    useEffect(() => {
        getFetch()
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        state
    }
}