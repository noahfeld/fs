
const Person = ({ person }) => {
  return (
    <div>
      {person.name} {person.number}
    </div>
  )
}

const Persons = ({ peopleToDisplay }) => {
  return (
    <div>
      {peopleToDisplay.map(person =>
        <Person key={person.name} person={person} />
      )}
    </div>
  )
}

export default Persons
