import React from 'react';

const EmployeeCard = ({employee}) => {
    return (
        <div className="col-md-4">
            <div  className="p-2 m-4 shadow-sm">
                <h3 className="mt-4">{employee.name}</h3>
                <img style={{height: '120px',margin: "10px 0",width: '120px', borderRadius: '100%'}} src={employee.img} alt=""/>
                
                <h4 className="brand-color">{employee.position}</h4>
                <p className="text-secondary">Contact: {employee.email}</p>
            </div>
        </div>
    );
};

export default EmployeeCard;