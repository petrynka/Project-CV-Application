import '../styles/CVTemplate.css'
import html2pdf from 'html2pdf.js';

function CVTemplate({person}){
    const fullName = `${person.name} ${person.surName}`;

    const handleDownload = () => {
        const element = document.getElementById('cv-pdf');

        const opt = {
            margin:       0,
            filename:     'Resume.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
    }

    const handlePreview = () => {
        const element = document.getElementById('cv-pdf');

        const opt = {
            margin: 0,
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdf) {
            window.open(pdf.output('bloburl'), '_blank');
        });
    };

    return(
        <>
            <div className="btn-holder">
                <button onClick={handlePreview}>Preview PDF</button>
                <button onClick={handleDownload}>Download PDF</button>
            </div>
            <div id='cv-pdf' className="CVTemplate">
                <div className="leftSide">
                    <div className="avatarContainer">
                        {person.avatar ? (
                        <img src={person.avatar} alt="Profile" className="profile-pic" />) : (
                        <div className="placeholder-pic">No Image Selected</div>)}
                    </div>
                    <div className="textContent">
                        <h3>{fullName}</h3>

                        <p className='occupation'>{person.occupation}</p>

                        <p className="contact">Contact</p>

                        <div className="contactInfo">
                            <div className="infoElem">
                                <p>Address:</p>
                                <p>{person.address}</p>
                            </div>

                            <div className="infoElem">
                                <p>Phone:</p>
                                <p>{person.telNum}</p>
                            </div>

                            <div className="infoElem">
                                <p>Email:</p>
                                <p>{person.email}</p>
                            </div>

                            <div className="infoElem">
                                <p>LinkedIn:</p>
                                <p>{person.linkedIn}</p>
                            </div>

                            <div className="infoElem">
                                <p>Portfolio:</p>
                                <p>{person.portfolio}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightSide">
                    <div className="rightSideContainer">
                        <h3>{fullName}</h3>
                        <p className='occupation-right'>{person.occupation}</p>
                        <p className="right-AboutMe">{person.aboutMe}</p>
                        <h4 className='employment'>Employment</h4>
                        {person.employmentHistory.map((job) => (
                            <div key={job.id} className='EmploymentUnit'>
                                <div className='employment-title'>
                                    <p>{job.jobTitle}</p>
                                    <p>{job.startDate} - {job.endDate}</p>
                                </div>
                                <p className='cityAndEmployer'>{job.city} - {job.employer}</p>
                                <ul className="description-list">
                                    {job.jobDescription
                                        .split('\n') 
                                        .map(line => line.replace(/^[-•]\s*/, '')) 
                                        .filter(line => line.trim() !== '') 
                                        .map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <h4 className='employment'>Skills</h4>
                        <div className="skillHolder">
                            {person.skills.map((skill) =>(
                                <div key={skill.id} className='Skill'>
                                    {skill.name}
                                </div>
                            ))}
                        </div>

                        <h4 className='employment'>Education</h4>
                        {person.studyHistory.map((school) => (
                            <div key={school.id} className='EmploymentUnit'>
                                <div className='employment-title'>
                                    <p>{school.schoolName}</p>
                                    <p>{school.startDate} - {school.endDate}</p>
                                </div>
                                <p className='cityAndEmployer'>{school.city} - {school.degree}</p>
                                <p>{school.schoolDescription}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CVTemplate;