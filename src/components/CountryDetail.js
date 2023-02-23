import { FiHeart} from "react-icons/fi";

const CountryDetail = ({country, onCountryClicked}) => {
    
    const currency = Object.keys(country.currencies)

    const handleClick = () => {
        onCountryClicked(country)
        console.log(country)
    }

    return(
        <div>
            <img src={country.flags.png} alt={country.flags.alt}/>
            <h1>{country.name.common}</h1>
            <h3>Population: {country.population}</h3>
            <h3>Capital: {country.capital}</h3>
            <h4>Currency: {country.currencies[currency].symbol} - {country.currencies[currency].name}</h4>
            <button onClick={handleClick} className="favorite-button"><FiHeart className="heart"/></button>
        </div>
    )
}

export default CountryDetail;