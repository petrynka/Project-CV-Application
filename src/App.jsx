import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import CVTemplate from './components/CVTemplate'

function App() {
  const [person,setPerson] = useState({name:'John',surName:'Dou',age:23})

  return (
    <>
      <h1>Resume Builder</h1>
      <PersonalInfo person = {person} updatePerson = {setPerson}/>
      <CVTemplate person={person}/>
    </>
  )
}

export default App
