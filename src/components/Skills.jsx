import { v4 as uuidv4 } from "uuid";
import '../styles/Skills.css';

function Skills({person,updatePerson}){
    const handleChange = (id,field,value) => {
        const updatedSkills = person.skills.map((skill) => 
            skill.id === id ? {...skill, [field] : value} : skill
        );

        updatePerson({...person, skills: updatedSkills});
    }

    const addSkill = () => {
        const newSkill = {
            id: uuidv4(),
            name: ''
        }

        updatePerson({...person, skills:[...person.skills, newSkill]})
    }

    const removeSkill = (id) => {
        const updatedSkills = person.skills.filter((skill) => skill.id !== id); 

        updatePerson({...person, skills: updatedSkills});
    }

    return(
        <>
            <h2>Skills</h2>

            {person.skills.map((skill) => (
                <div key={skill.id} className="SkillForm">
                    <label htmlFor={`skill-${skill.id}`}>Skill:</label>
                    <input
                        type="text"
                        id={`skill-${skill.id}`}
                        value={skill.name}
                        onChange={(e) => handleChange(skill.id,'name',e.target.value)}
                    />

                    <button type='button' onClick={() => removeSkill(skill.id)}>Remove</button>
                </div>
            ))}

            <div className="buttonDiv">
                <button
                    type='button'
                    className='add-btn'
                    onClick={() => addSkill()}
                >Add Skill</button>
            </div>
        </>
    );
}

export default Skills;