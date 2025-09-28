export const Button = ({ funcionSeteadoraEstado, countEstado }) => {
    return (
        <button 
            onClick={() => funcionSeteadoraEstado((valorActualCount) => {
                return valorActualCount > 9 ? 0 : valorActualCount + 1
            })}
        >
            count is {countEstado}
        </button>
    )
}