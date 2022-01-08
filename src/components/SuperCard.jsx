import { link } from 'react-router-dom'

function SuperCard({superhero}) {
    return (
        <Link to={`/Superheroes/${superhero.name}`} >
            <div className="SuperShow">
                <h1>{superhero.name}</h1>
                <img src={superhero.thumbnail.path + '.' + superhero.thumbnail.extension} alt={superhero.name} />
            </div>
        </Link>
    );
}

export default SuperCard;