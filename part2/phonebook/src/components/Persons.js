
const Person = ({ person, delPerson }) => {
  return (
    <div>
      {person.name} {person.number} <button onClick={() => delPerson(person)}>delete</button>
    </div>
  )
}

const Persons = ({ peopleToDisplay, delPerson }) => {
  return (
    <div>
      {peopleToDisplay.map(person =>
        <Person key={person.name} person={person} delPerson={delPerson}/>
      )}
    </div>
  )
}

export default Persons
