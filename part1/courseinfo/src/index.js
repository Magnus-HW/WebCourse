import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/course'


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