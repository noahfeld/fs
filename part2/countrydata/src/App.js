import { useState, useEffect } from 'react'
import Countries from './components/Countries.js'
import Filter from './components/Filter.js'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => {
        response.json()
          .then(data => {
            setCountries(data)
          })
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const countriesToDisplay = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <Countries countriesToDisplay={countriesToDisplay} />
    </div>
  );
}

export default App
