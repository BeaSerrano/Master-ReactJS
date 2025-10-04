import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { 
    decrement, 
    fetchFirst, 
    increment, 
    incrementManual, 
    reset, 
    selectCount, 
    selectError, 
    selectStatus 
} from "./counterSlice";

export const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(selectCount)
    const status = useSelector(selectStatus)
    const error = useSelector(selectError)

    const [manual, setManual] = useState('5')

    const addManual = () => {
        const num = Number(manual)
        if (!Number.isNaN(num)){
            dispatch(incrementManual(num))
        }
    }

    return (
        <div>
            <h2>CONTADOR</h2>

            <p>Valor del contador: <strong>{count}</strong></p>

            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(reset())}>Reset</button>

            <div>
                <input 
                    type="number"
                    value={manual}
                    onChange={(e) => setManual(e.target.value)}
                />
                <button onClick={addManual}>Sumar cantidad manual</button>
            </div>

            <div>
                <button disabled={status === 'loading'} onClick={() => dispatch(fetchFirst())}>
                    {status === 'loading' ? 'Cargando...' : 'Cargar valor inicial (async)'}
                </button>
            </div>

            {status === 'error'&& <p style={{ color:'red' }}>Error: {error}</p>}
        </div>
    )
}