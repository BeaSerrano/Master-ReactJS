// las citas con sus autores
import './components.css'

export const Quote = ({ quote, author }) => {
    return (
        <blockquote>
            <p>{quote}</p>
            <small>{author}</small>
        </blockquote>
    )
}
