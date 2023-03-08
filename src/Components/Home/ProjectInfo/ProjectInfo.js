import React from 'react';

const ProjectInfo = ({project}) => {
    return (
        <div className="col-md-4 mt-5">
            <h1 className="brand-color">{project.number}<sup>+</sup> </h1>
            <p className="text-secondary">{project.title}</p>
        </div>
    );
};

export default ProjectInfo;