import '../styles/PersonalInfo.css'

function PersonalInfo({person, updatePerson}){
    return(
        <>
            <form action="">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id='firstName' value={person.name} onChange={(e) => updatePerson({...person,name:e.target.value})}/>
            </form>

            
        </>
    );
}

export default PersonalInfo;