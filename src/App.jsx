import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import './App.css'
import PersonalInfo from './components/PersonalInfo'
import Employment from './components/Employment'
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
    avatar: false,
    employmentHistory: [{
      id: uuidv4(),
      jobTitle: 'Frontend Developer',
      employer: 'TechCorp',
      startDate: '2021',
      endDate: 'Present',
      city: 'Colorado',
      jobDescription: 'Developed responsive apps using React, Tailwind, and APIs.'
    }]
  })

  return (
    <>
      <div className='leftContainer'>
        <h1>Resume Builder</h1>
       
        <PersonalInfo person = {person} updatePerson = {setPerson}/>
        
        <Employment person = {person} updatePerson = {setPerson}/>
      </div>
      <div className='rightContainer'>
        <CVTemplate person={person}/>
      </div>
    </>
  )
}

export default App
