import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

//<Part name={props.name} exercise={props.exercises} />)

const Content = ({parts}) => {
  
  /*example of map
  let pert = parts.map(p => p.id+'kek')
  console.log(pert)
*/
  return(
  <>
    {parts.map(part => 
      <Part key={part.id} name={part.name} exercises={part.exercises}/>)
    }
  </>
  )
}
 
const Part = ({id, name, exercises}) => {
  //console.log(id , name, exercises)
  return(
    <> 
      <p key={id}>
        {name} {exercises}
      </p>
    </>
  )
}

const Total = ({parts}) => {
  
  var totalEx = parts.reduce((sum, parts)=>{
    //console.log("heelo", sum , parts)
    return (sum + parts.exercises)
  },0)
  return (
    <p>{totalEx}</p>
  )
}

const Course = ({course}) => {
  return(
    <div key={course.id}>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
  )
}

const Completed = ({courses}) => {
  
  return(
  courses.map((course)=> {
    return(
    <div key={course.id}>
      <Course course={course}/>
    </div>
    )
    })
  )
}

const App = () => {

  const courses = [
    {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  },

  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]


    return (
      <>
        <Completed courses={courses}/>
      </>
    )
    
}



ReactDOM.render(<App />, document.getElementById('root'))