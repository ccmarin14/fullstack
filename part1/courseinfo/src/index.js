import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <h1>{props.course}</h1>
)

const Content = (props) => {
  const parte1 = props.partes[0].name + ": " + props.partes[0].exercises; 
  const parte2 = props.partes[1].name + ": " + props.partes[1].exercises; 
  const parte3 = props.partes[2].name + ": " + props.partes[2].exercises;
  return (
    <Parts 
      parte1 = {parte1}
      parte2 = {parte2}
      parte3 = {parte3}
    />
  )
}

const Parts = (props) => {
  return (
    <div>
      <p>{props.parte1}</p>
      <p>{props.parte2}</p>
      <p>{props.parte3}</p>
    </div>
  )
}

const Total = (props) => (
    <p>Number of exercises: {props.total}</p>
)


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const total= course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises

  return (
    <div>
      <Header course={course.name} />
      <Content partes = {course.parts} />
      <Total total={total} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
