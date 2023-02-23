import React from "react";
import OptionItem from "./OptionItem";

const CountrySelector = ({countries, onCountrySelected}) => {

    const countryOption = countries.map((country, index) => {
        return <OptionItem key={index} country={country} index={index}/>
    })

    const handleChange = function(event){
        const chosenCountry = countries[event.target.value];
        onCountrySelected(chosenCountry);
    }
    
    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="">Select a Country</option>
            {countryOption}
        </select>
    )
}

export default CountrySelector;