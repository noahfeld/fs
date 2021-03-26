import { useState } from 'react'
import Persons from './components/Persons.js'
import PersonForm from './components/PersonForm.js'
import Filter from './components/Filter.js'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '760-636-6527'}
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const peopleToDisplay = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    const matchingPerson = persons.filter(person => person.name === newName)

    if (matchingPerson.length === 0) {
      setPersons(persons.concat(personObject))
    }
    else {
      window.alert(`${newName} is already in the phonebook`)
    }

    setNewName('')
    setNewNumber('')
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        newFilter={newFilter}
        handleFilterChange={handleFilterChange}
      />
      <h2>Add</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons peopleToDisplay={peopleToDisplay} />
    </div>
  )
}

export default App
