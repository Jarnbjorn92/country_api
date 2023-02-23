import React, {useState, useEffect} from "react";
import CountrySelector from "../components/CountrySelector";
import CountryDetail from "../components/CountryDetail";
import FavouriteCountriesList from "../components/FavouriteCountriesList";

const CountriesContainer = () => {
    
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [favouriteCountries, setFavouriteCountries] = useState("")

    useEffect(() => {
        loadCountries()
    }, [])

    const loadCountries = function(){
        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))
    }

    const onCountrySelected = function(country){
        setSelectedCountry(country);
    }

    const onCountryClicked = function(country){
        const updatedFavouriteCountries = [...favouriteCountries, country];
        console.log("hi")
        setFavouriteCountries(updatedFavouriteCountries);
    }


    return(
        <div>
        <h2>Eliza and Connor's Magic Country App!</h2>
        <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/>
        {selectedCountry ? <CountryDetail  onCountryClicked={onCountryClicked} country={selectedCountry}/> : null}
        <FavouriteCountriesList favouriteCountries={favouriteCountries}/>
        </div>
    )
}

export default CountriesContainer;