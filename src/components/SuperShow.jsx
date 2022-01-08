import { useParams } from "react-router-dom";
import { SuperheroContext } from "../contexts/SuperheroContext.js";
import { useContext, useState, useEffect } from "react";

function SuperShow() {

    const {superName} = useParams()
    const [superhero, setSuperhero] = useState(null)

    const fetchSuperheroes = () => {
        const apiUrl = "http(s)://gateway.marvel.com/"
        const apiKey = "apikey=99bd6fdc7f43aa8df9a26fabd645e5ee"
        
        fetch(apiUrl+'v1/public/characters?name='+superName+'&'+apiKey)
            .then(res => res.json())
            .then(data => setSuperhero(data))
    }

    useEffect(() => {
        const findSuperhero = superArray.find(({name}) => name === superName)
        if(!findSuperhero) fetchSuperheroes(superName)
        if(findSuperhero) setSuperhero(findSuperhero)
    },[])

    const [superArray, setSuperArray] = useContext(SuperheroContext)
    return (
        <div className="SuperCard">
            <h1>{superhero?.name}</h1>
            <img src={superhero.thumbnail.path + '.' + superhero.thumbnail.extension} alt={superhero.name} />
            URLs: {superhero?.urls.map( t => t.url.url).join(", ")}
        </div>
    );
}

export default SuperShow;