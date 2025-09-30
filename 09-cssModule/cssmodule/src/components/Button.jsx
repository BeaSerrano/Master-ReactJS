import buttonStyle from './Button.module.css'

export const Button = ({setState, state}) => {
return (
        <button className={buttonStyle.boton} onClick={() => setState((count) => count + 1)}>
            count is {state}
        </button>
    )
}
