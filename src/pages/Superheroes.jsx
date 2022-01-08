import {useContext, useEffect} from "react"
import SuperCard from "../components/SuperCard"

function Superheroes() {

    const [superArray, setSuperArray] = useContext(SuperContext);

    const fetchSuperheroes = () => {
        const apiUrl = "http(s)://gateway.marvel.com/"
        const apiKey = "apikey=99bd6fdc7f43aa8df9a26fabd645e5ee"
        
        fetch(apiUrl+'v1/public/characters?limit=200&'+apiKey)
            .then(res => res.json()
            .then(res => {
                res.results.forEach(superhero=>fetchSuperDetails(superhero))
            })
    }

    const fetchSuperDetails = (superhero) => {
        fetch(superhero.url)
            .then(res => res.json())
            .then(superhero => setSuperArray(prevState => [...prevState, superhero]))
    }

    useEffect(fetchSuperheroes, [])

    const renderSuperCard = () => {
        return superArray.map((superhero, index) => <SuperCard key={index} superhero={superhero} />)
    }

    return (
        <div className="SuperCard">
            <h1>Superheroes Page</h1>
            <div className="super-list">
                {renderSuperCard()}
            </div>
        </div>
    );
}

export default Superheroes;