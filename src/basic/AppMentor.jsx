import React, { useState } from 'react'

function AppMentor() {
  const [person, setPerson] = useState({
    name:'Woody',
    title:'Developer',
    mentor:{
      name:'Ellie',
      title:'Senior',
    },
  })
    
  return (
    <div>
      <div>{person.name}'s {person.mentor.name} is ({person.mentor.title}).</div>
      <button onClick={()=>{
        const name = prompt(`Mentor's name?`);
        setPerson(prev=>({
          ...prev, 
          mentor:{...prev.mentor, name},
        }))
      }}> Change mentor's name</button>
      <button onClick={()=>{
        const title = prompt(`Mentor's title?`);
        setPerson(prev=>({
          ...prev, 
          mentor:{...prev.mentor, title},
        }))
      }}> Change mentor's title</button>
    
    </div>
  )
}

export default AppMentor
