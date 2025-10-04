import { useState } from "react";

export const useCounter = (initialValue = 1) => {
    const [counter, setCounter] = useState(initialValue)

    // incremento
    const increment = (value = 1) => setCounter(value + counter)
    // decremento
    const decrement = (value = 1) => setCounter(counter - value)
    // reseteo
    const reset = () => setCounter(initialValue)

    return {
        counter,
        increment,
        decrement,
        reset
    }
}