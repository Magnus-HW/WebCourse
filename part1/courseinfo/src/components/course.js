import React from 'react'

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


  export default Course