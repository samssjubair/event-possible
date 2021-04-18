import React from 'react';
import sabbir from '../../../Images/sabbir.png'
import imran from '../../../Images/imran.png'
import maha from '../../../Images/maha.png'
import jeni from '../../../Images/jeni.png'
import mizan from '../../../Images/mizan.png'
import jafar from '../../../Images/jafar.png'
import EmployeeCard from '../EmployeeCard/EmployeeCard';
const employees=[
    {
        name: 'Sabbir',
        email: 'sabbir@gmail.com',
        position: 'CEO',
        img: sabbir
    },
    {
        name: 'Maha',
        email: 'maha@gmail.com',
        position: 'Manager',
        img: maha
    },
    {
        name: 'Imran',
        email: 'imran@gmail.com',
        position: 'Event Planner',
        img: imran
    },
    {
        name: 'Jeni',
        email: 'jeni@gmail.com',
        position: 'Salesman',
        img: jeni
    },
    {
        name: 'Mizan',
        email: 'mizan@gmail.com',
        position: 'Chef',
        img: mizan
    },
    {
        name: 'Jafar',
        email: 'jafar@gmail.com',
        position: 'Tech Expert',
        img: jafar
    }
]

const OurEmployee = () => {
    return (
        <div id="employee" className="container-fluid text-center">
            <h1 className="  my-5">Our <span className="brand-color">Team</span></h1>
            <div className="row w-75 mx-auto">
                {
                    employees.map(emp=> <EmployeeCard employee={emp}></EmployeeCard> )
                }
            </div>
        </div>
    );
};

export default OurEmployee;