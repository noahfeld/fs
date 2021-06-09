import { useState, useEffect } from 'react'
import Weather from './Weather.js'

const Country = ( {country, showAll} ) => {

  const [ showState, setShowState ] = useState(showAll)

  useEffect(() => {
    setShowState(showAll);
  }, [showAll]);

  const handleShowStateChange = () => {
    setShowState(!showState)
  }

  if (showState) {
    return (
      <div>
        <h2>{country.name} <button type="button" onClick={handleShowStateChange}>hide</button></h2>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>
        <h3>languages</h3>
        <ul>
          {country.languages.map(language =>
            <li key={language.name}>{language.name}</li>)}
        </ul>
        <img src={country.flag} alt='' width="100" height="100"/>
        <Weather cityName={country.capital} />
      </div>
    )
  }

  return (
    <div>
      {country.name} <button type="button" onClick={handleShowStateChange}>show</button>
    </div>
  )
}

const Countries = ( {countriesToDisplay} ) => {
  const showAll = countriesToDisplay.length === 1 ? true : false;
  if (countriesToDisplay.length <= 10) {
    return (
      <div>
        {countriesToDisplay.map(country =>
          <Country key={country.name} country={country} showAll={showAll} />)}
      </div>
    )
  } else {
    return (
      <div>Too many matches, be more specific</div>
    )
  }
}

export default Countries
