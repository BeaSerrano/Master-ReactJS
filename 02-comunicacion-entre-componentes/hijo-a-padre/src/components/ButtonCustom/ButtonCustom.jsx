export const ButtonCustom = ({ state, setState, textButton }) => {
    return (
        <button onClick={() => setState((value) => value + 1)}>
            {textButton} {state}
        </button>
    )
}