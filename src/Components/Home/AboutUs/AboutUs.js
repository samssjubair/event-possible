import React from 'react';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
const projectsData=[
    {
        number: '150',
        title: 'Happy Clients'
    },
    {
        number: '250',
        title: 'Successful Projects'
    },
    {
        number: '150K',
        title: 'Connections on social media'
    }
]

const AboutUs = () => {
    return (
        <div className="text-center">
            <p className="brand-color">Fun Facts</p>
            <h2 style={{width: '85%',margin: 'auto'}}>Completed 250+ Events Successfully in 2 years</h2>
            <div className="row">
            {
                projectsData.map(project=> <ProjectInfo project={project}></ProjectInfo> )
            }
            </div>
        </div>
    );
};

export default AboutUs;