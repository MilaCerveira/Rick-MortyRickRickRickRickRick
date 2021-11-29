import { useEffect, useState } from "react";
import RickMortyDetails from "../components/RickMortyDetails";
import RickMortySelector from "../components/RickMortySelector";

const RickMortyBox = () => {
    const [character, setCharacter] = useState({});
    const [selectedCharacterId, setSelectedCharacterId] = useState(1);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getCharacter();
    }, []);

    useEffect(() => {
        getCharacter();
    }, [selectedCharacterId]);

    const getCharacter = async () => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${selectedCharacterId}`)
            const data = await response.json();
            await setCharacter(data);
            await setLoaded(true);
        }
        catch (error) {
            console.log(error)
        }
    };

    const incrementSelectedCharacterId = () => {
        if (selectedCharacterId >= 826) {
            return;
        }
        setSelectedCharacterId(selectedCharacterId + 1);
    };

    const decrementSelectedCharacterId = () => {
        if (selectedCharacterId <= 1) {
            return;
        }
        setSelectedCharacterId(selectedCharacterId - 1);
    };

    return (
        <>


            <RickMortySelector onSelectedCharacterIncrement={incrementSelectedCharacterId} onSelectedCharacterDecrement={decrementSelectedCharacterId} />
            <RickMortyDetails character={character} loaded={loaded} />
        </>
    )
}

export default RickMortyBox;
