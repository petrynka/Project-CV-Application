import '../styles/CVTemplate.css'

function CVTemplate({person}){
    const fullName = person.name + ' ' + person.surName
    return(
        <>
            <h2>{fullName}</h2>
        </>
    );
}

export default CVTemplate;