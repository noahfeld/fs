const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => {
    return s + p.exercises
  }, 0)

  return(
    <p>
      Total number of exercises {total}
    </p>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total parts={course.parts} />
    </div>
  )
}

export default Course
