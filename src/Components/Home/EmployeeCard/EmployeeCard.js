import React from 'react';

const EmployeeCard = ({employee}) => {
    return (
        <div className="col-md-4">
            <div  className="p-2 m-4 shadow-sm">
                <img style={{height: '150px',width: '150px', borderRadius: '100%'}} src={employee.img} alt=""/>
                <h4 className="mt-4">{employee.name}</h4>
                <h3 className="brand-color">{employee.position}</h3>
                <p className="text-secondary">Contact: {employee.email}</p>
            </div>
        </div>
    );
};

export default EmployeeCard;