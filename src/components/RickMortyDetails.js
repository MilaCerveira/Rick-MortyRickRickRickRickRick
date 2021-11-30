import { useState } from "react";
import RM from './RM.mp3';
import r from './r.png';
import pr from './pr.png';
import rick from './rick.png';


const RickMortyDetails = ({ character, loaded }) => {
    const [isActive, setActive] = useState("false");
    if (!loaded) {
        return (
            <p> “What, so everyone's supposed to sleep every single night now?</p>
        );
    };

    
    
    const ToggleClass = () => {setActive(!isActive);
    };

    const play = () => {
        const rick = new Audio(RM);
        rick.play();
        
    };
    
    return (
        <>
            <img className='rick' width="200" height="100" src={r} onClick={play} alt="title" />
            <img className='pickle' width="50" height="50" src={pr}  alt="pickle" />
            <img className={isActive ? "ric" : "animate"}onClick={ToggleClass}  width="50" height="50" src={rick}  alt="rick" />
            <h3>Character Name: {character.name}</h3>
            <h4> Status: {character.status}</h4>
            <h4> Location: {character.location.name}</h4>
            <h4>Gender: {character.gender}</h4>
            <img src={character.image} alt="character" width="400" height="400"></img>



        </>
    )

}
export default RickMortyDetails;
