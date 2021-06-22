import { useState, useEffect } from 'react'
import Persons from './components/Persons.js'
import PersonForm from './components/PersonForm.js'
import Filter from './components/Filter.js'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const hook = () => {
    personService.getAll()
      .then(response => {
        setPersons(response)
      })
  }

  const peopleToDisplay = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    const matchingPersonArray = persons.filter(person => person.name === newName)

    if (matchingPersonArray.length === 0) {
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(personObject))
        })
    }
    else {
      const message = `${newName} is already in the phonebook. Would you like to update their number?`
      if(window.confirm(message)) {
        const changedPerson = { ...matchingPersonArray[0], number: newNumber }
        personService
          .update(changedPerson.id, personObject)
          .then(response => {
            setPersons(persons.map(person => person.id !== changedPerson.id ? person : response))
          })
      }
    }

    setNewName('')
    setNewNumber('')
  }

  const delPerson = (person) => {
    const message = `Delete ${person.name}?`

    if (window.confirm(message)) {
      personService
        .del(person.id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== person.id))
        })

    }
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
      <Persons peopleToDisplay={peopleToDisplay} delPerson={delPerson}/>
    </div>
  )
}

export default App
