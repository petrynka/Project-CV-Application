import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import CVTemplate from './components/CVTemplate'

function App() {
  const [person,setPerson] = useState({
    name:'John',
    surName:'Dou',
    email:'example@mail.com', 
    telNum:'555-555-555',
    address: 'Your address in the world',
    occupation: 'Frontend Developer',
    linkedIn: 'linkedin.com/in/johndoe',
    portfolio: 'https://johndou.github.io/Portfolio/',
    aboutMe: 'Creative developer who loves building elegant UIs',
    avatar: false
  })

  return (
    <>
      <div className='leftContainer'>
        <h1>Resume Builder</h1>
        <h2>Personal Info</h2>
        <PersonalInfo person = {person} updatePerson = {setPerson}/>
      </div>
      <div className='rightContainer'>
        <CVTemplate person={person}/>
      </div>
    </>
  )
}

export default App
