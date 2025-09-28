export const ButtonCustom = ({ state, setState, textButton }) => {
    return (
        <button onClick={() => setState()}>
            {textButton} {state}
        </button>
    )
}