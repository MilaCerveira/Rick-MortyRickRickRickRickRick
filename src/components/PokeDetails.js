const PokeDetails = ({poke, loaded}) => {
    if(!loaded){
        return(
        <p>Catching them all...</p>
        );
    }
    return (
<>
<h3>{poke.name}</h3>
</>
    )
}
export default PokeDetails;
