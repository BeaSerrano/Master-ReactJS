// donde van todas las citas -- donde usamos el customHook
import './components.css'
import { useCounter, useFetch } from '../hooks'
import { Loading, Quote } from './index'

export const PrintQuote = () => {
    const { counter, increment, decrement, reset } = useCounter()

    const { data, isLoading, hasError } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
    )

    const { quote, author } = !!data && data[0];

    if(hasError){
        return <div className="error">{hasError.toString()}</div>
    } else {
        return isLoading ? (
            <Loading />
        ) : (
            <>
                <Quote quote={quote} author={author} />
                {counter > 1 && <button onClick={() => decrement()}>PREV QUOTE</button>}
                <button onClick={() => increment()}>NEXT QUOTE</button>
                <button onClick={() => reset()}>RESET</button>
            </>
        )
    }
}