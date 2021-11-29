import { useEffect, useState } from "react";
import PokeDetails from "../components/PokeDetails";

const PokeBox = () => {
    const [poke, setPoke] = useState({});
    const [selectedPokeId, setSelectedPokeId] = useState(1);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getPoke();
    }, []);

    useEffect(() => {
        getPoke();
    }, [selectedPokeId]);

    const getPoke = async () => {
        try{
        const response = await fetch(`https://pokeapi.co/api/v2/growth-rate/${selectedPokeId}`)
        const data = await response.json();
        await setPoke(data);
        await setLoaded(true);
    }
    catch(error){
        console.log(error)
    }
    };

    return (
        <>
<h1> Pokemon </h1>
<PokeDetails poke={poke} loaded={loaded}/>
</>
    )
}

export default PokeBox;
