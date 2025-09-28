import './CardCharacter.css'

// props por destructuring dentro de la función del componente
export const CardCharacter = ({ image, name }) => {
    return (
        <figure id="card-container">
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </figure>
    )
}




















// // props sin destructuring
// export const CardCharacter = (props) => {
//     return (
//         <figure>
//             <img src={props.image} alt={props.name} />
//             <h3>{props.name}</h3>
//         </figure>
//     )
// }

// // props con destructuring fuera de los parámetros de la función del componente
// export const CardCharacter = (props) => {
//     const {name, image } = props;

//     return (
//         <figure>
//             <img src={image} alt={name} />
//             <h3>{name}</h3>
//         </figure>
//     )
// }