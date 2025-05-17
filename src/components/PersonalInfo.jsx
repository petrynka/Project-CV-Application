import '../styles/PersonalInfo.css'

function PersonalInfo({person, updatePerson}){
    const handleFileChange = (e) =>{
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = () => {
                updatePerson({...person,avatar: reader.result});
            };
            reader.readAsDataURL(file);
        }
    }

    return(
        <>
            <form action="" className='personalInfoForm'>
                <div className="InputRow">
                    <div className="inputItem">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id='firstName'
                            value={person.name}
                            onChange={(e) => updatePerson({...person,name:e.target.value})}
                        />
                    </div>

                    <div className="inputItem">
                        <label htmlFor="LastName">Last Name:</label>
                        <input
                            type="text"
                            id='LastName'
                            value={person.surName}
                            onChange={(e) => updatePerson({...person,surName:e.target.value})}
                        />
                    </div>
                </div>

                <div className="InputRow">
                    <div className="inputItem">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id='email'
                            value={person.email}
                            onChange={(e) => updatePerson({...person,email:e.target.value})}
                        />
                    </div>

                    <div className="inputItem">
                        <label htmlFor="PhoneNumber">Phone Number:</label>
                        <input
                            type="tel"
                            id='PhoneNumber'
                            value={person.telNum}
                            onChange={(e) => updatePerson({...person,telNum:e.target.value})}
                        />
                    </div>
                </div>

                <div className="InputRow">
                    <div className="inputItem">
                        <label htmlFor="Address">Address:</label>
                        <input
                            type="text"
                            id='Address'
                            value={person.address}
                            onChange={(e) => updatePerson({...person,address:e.target.value})}
                        />
                    </div>

                    <div className="inputItem">
                        <label htmlFor="Occupation">Occupation:</label>
                        <input
                            type="text"
                            id='Occupation'
                            value={person.occupation}
                            onChange={(e) => updatePerson({...person,occupation:e.target.value})}
                        />
                    </div>
                </div>

                <div className="InputRow">
                    <div className="inputItem">
                        <label htmlFor="LinkedIn">LinkedIn:</label>
                        <input
                            type="url"
                            id='LinkedIn'
                            value={person.linkedIn}
                            onChange={(e) => updatePerson({...person,linkedIn:e.target.value})}
                        />
                    </div>

                    <div className="inputItem">
                        <label htmlFor="Portfolio">Portfolio:</label>
                        <input
                            type="url"
                            id='Portfolio'
                            value={person.portfolio}
                            onChange={(e) => updatePerson({...person,portfolio:e.target.value})}
                        />
                    </div>
                </div>

                <label htmlFor="AboutMe">About Me:</label>
                <textarea 
                    id="AboutMe"
                    value={person.aboutMe}
                    rows="6" 
                    onChange={(e) => updatePerson({...person,aboutMe:e.target.value})}
                ></textarea>

                <label for="avatar" className="upload-btn">Upload Photo</label>
                <input 
                    type="file" 
                    id="avatar" 
                    name="avatar" 
                    accept="image/png, image/jpeg"
                    onChange={handleFileChange} 
                    style={{ display: "none" }}  
                />
            </form>

            
        </>
    );
}

export default PersonalInfo;