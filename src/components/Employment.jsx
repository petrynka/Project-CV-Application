import { v4 as uuidv4 } from 'uuid';
import '../styles/Employment.css';

function Employment({person,updatePerson}){
    
    const handleChange = (id, field, value) => {
        const updatedEmploymentHistory = person.employmentHistory.map((job) =>{
            return job.id === id ? {...job, [field] : value} : job;
        }); 

        updatePerson({...person, employmentHistory: updatedEmploymentHistory});
    }

    const addEmployment = () => {
        const newEmployment = {
            id: uuidv4(),
            jobTitle: '',
            employer: '',
            startDate: '',
            endDate: '',
            city: '',
            jobDescription: ''
        }

        updatePerson({
            ...person, employmentHistory:[...person.employmentHistory,newEmployment],
        });
    }

    const removeEmployment = (id) => {
        const updatedEmploymentHistory = person.employmentHistory.filter((job) => {
            return job.id !== id;
        });
        updatePerson({...person, employmentHistory: updatedEmploymentHistory});
    }
    return(
        <>
            <h2>Employment</h2>

            {person.employmentHistory.map((job) => (
                <div key={job.id} className='employmentForm'>
                    <div className="InputRow">
                    <div className="inputItem">
                        <label htmlFor={`JobTitle-${job.id}`}>Job Title:</label>
                        <input
                            type="text"
                            id={`JobTitle-${job.id}`}
                            value={job.jobTitle}
                            onChange={(e) => handleChange(job.id,'jobTitle',e.target.value)}
                        />
                    </div>

                    <div className="inputItem">
                        <label htmlFor={`Employer-${job.id}`}>Employer:</label>
                        <input
                            type="text"
                            id={`Employer-${job.id}`}
                            value={job.employer}
                            onChange={(e) => handleChange(job.id,'employer',e.target.value)}
                        />
                    </div>
                </div>

                <div className="inputRow-Wide">
                    <div className="inputItem">
                        <label htmlFor={`startDate-${job.id}`}>Start Date:</label>
                        <input
                            type="text"
                            id={`startDate-${job.id}`}
                            value={job.startDate}
                            onChange={(e) => handleChange(job.id,'startDate',e.target.value)}
                        />
                    </div>
                    <div className="inputItem">
                        <label htmlFor={`endDate-${job.id}`}>End Date:</label>
                        <input
                            type="text"
                            id={`endDate-${job.id}`}
                            value={job.endDate}
                            onChange={(e) => handleChange(job.id,'endDate',e.target.value)}
                        />
                    </div>
                    <div className="inputItem">
                        <label htmlFor={`City-${job.id}`}>City:</label>
                        <input
                            type="text"
                            id={`City-${job.id}`}
                            value={job.city}
                            onChange={(e) => handleChange(job.id,'city',e.target.value)}
                        />
                    </div>
                </div>

                <label htmlFor={`jobDescription-${job.id}`}>Description:</label>
                <textarea 
                    id={`jobDescription-${job.id}`}
                    placeholder="- Built React UI\n- Connected APIs\n- Wrote tests"
                    value={job.jobDescription}
                    rows="6" 
                    onChange={(e) => handleChange(job.id,'jobDescription',e.target.value)}
                ></textarea>

                <small style={{ fontSize: '12px', color: '#555', display: 'block', marginBottom: '15px' }}>
                    Use "-" or new line for each responsibility
                </small>

                <button type='button' onClick={() => removeEmployment(job.id)}>Remove</button>
                </div>
            ))}

            <div className="buttonDiv">
                <button
                    type='button'
                    className='add-btn'
                    onClick={() => addEmployment()}
                >Add Employment</button>
            </div>

        </>
    );
}

export default Employment;