import Country from "./Country"

const FavouriteCountriesList = ({favouriteCountries}) => {
    
    if(!favouriteCountries) {
        return null;
    }

    const favNodes = favouriteCountries.map((country, index) => {
        return <Country key={index} country={country}/>
    })

    return(
    <div>
        <h2>Favorite Countries:</h2>
        <ul>
            {favNodes}
        </ul>
        </div>
    )
}

export default FavouriteCountriesList;