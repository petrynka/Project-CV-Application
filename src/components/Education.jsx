import { v4 as uuidv4 } from 'uuid';
import '../styles/Education.css';

function Education({person,updatePerson}){
    const handleChange = (id, field, value) => {
        const updatedEducationHistory = person.studyHistory.map((school) =>{
            return school.id === id ? {...school, [field] : value} : school;
        }); 

        updatePerson({...person, employmentHistory: updatedEducationHistory});
    }

    const addEducation = () => {
        const newSchool = {
            id: uuidv4(),
            jobTitle: '',
            employer: '',
            startDate: '',
            endDate: '',
            city: '',
            jobDescription: ''
        }

        updatePerson({
            ...person, studyHistory:[...person.studyHistory,newSchool],
        });
    }

    const removeEducation = (id) => {
        const updatedEducationHistory = person.studyHistory.filter((school) => {
            return school.id !== id;
        });
        updatePerson({...person, studyHistory: updatedEducationHistory});
    }

    return(
        <>
            <h2>Education</h2>

            {person.studyHistory.map((school) => (
                <div key={school.id} className='employmentForm'>
                    <div className="InputRow">
                    <div className="inputItem">
                        <label htmlFor={`schoolName-${school.id}`}>School:</label>
                        <input
                            type="text"
                            id={`schoolName-${school.id}`}
                            value={school.schoolName}
                            onChange={(e) => handleChange(school.id,'jobTitle',e.target.value)}
                        />
                    </div>

                    <div className="inputItem">
                        <label htmlFor={`Degree-${school.id}`}>Degree:</label>
                        <input
                            type="text"
                            id={`Degree-${school.id}`}
                            value={school.degree}
                            onChange={(e) => handleChange(school.id,'employer',e.target.value)}
                        />
                    </div>
                </div>

                <div className="inputRow-Wide">
                    <div className="inputItem">
                        <label htmlFor={`startDate-${school.id}`}>Start Date:</label>
                        <input
                            type="text"
                            id={`startDate-${school.id}`}
                            value={school.startDate}
                            onChange={(e) => handleChange(school.id,'startDate',e.target.value)}
                        />
                    </div>
                    <div className="inputItem">
                        <label htmlFor={`endDate-${school.id}`}>End Date:</label>
                        <input
                            type="text"
                            id={`endDate-${school.id}`}
                            value={school.endDate}
                            onChange={(e) => handleChange(school.id,'endDate',e.target.value)}
                        />
                    </div>
                    <div className="inputItem">
                        <label htmlFor={`City-${school.id}`}>City:</label>
                        <input
                            type="text"
                            id={`City-${school.id}`}
                            value={school.city}
                            onChange={(e) => handleChange(school.id,'city',e.target.value)}
                        />
                    </div>
                </div>

                <label htmlFor={`jobDescription-${school.id}`}>Description:</label>
                <textarea 
                    id={`schoolDescription-${school.id}`}
                    value={school.schoolDescription}
                    rows="6" 
                    onChange={(e) => handleChange(school.id,'jobDescription',e.target.value)}
                ></textarea>

                <button type='button' onClick={() => removeEducation(school.id)}>Remove</button>
                </div>
            ))}

            <div className="buttonDiv">
                <button
                    type='button'
                    className='add-btn'
                    onClick={() => addEducation()}
                >Add Education</button>
            </div>

        </>
    );
}

export default Education;