import '../styles/CVTemplate.css'

function CVTemplate({person}){
    const fullName = `${person.name} ${person.surName}`;
    return(
        <>
            <div className="cv-container">
                {person.avatar ? (
                <img src={person.avatar} alt="Profile" className="profile-pic" />) : (
                <div className="placeholder-pic">No Image Selected</div>)}

                <h2>{fullName}</h2>
                <h3>{person.occupation}</h3>
                <p>{person.email}</p>
                <p>{person.telNum}</p>
                <p>{person.address}</p>
                <a href="#">{person.linkedIn}</a>
                <a href="#">{person.portfolio}</a>
                <p>{person.aboutMe}</p>
            </div>
        </>
    );
}

export default CVTemplate;