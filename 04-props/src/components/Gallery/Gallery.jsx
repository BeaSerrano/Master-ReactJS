import './Gallery.css'
import { dataRicky } from '../../data/rickyData'
import { CardCharacter } from '../CardCharacter/CardCharacter';

export const Gallery = () => {
    const data = dataRicky;

    return (
        <div id="gallery-container">
            {
                data.results.map((character) => (
                    <CardCharacter key={character.id} image={character.image} name={character.name} />
                ))
            }
        </div>
    )
}
