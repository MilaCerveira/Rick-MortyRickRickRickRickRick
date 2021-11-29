const RickMortySelector = ({onSelectedCharacterIncrement, onSelectedCharacterDecrement}) => {
    return(
<>
<button onClick={onSelectedCharacterDecrement}>Previous Character</button>
<button onClick={onSelectedCharacterIncrement}>Next Character</button>
</>
    )
}

export default RickMortySelector;