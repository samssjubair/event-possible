import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash} from '@fortawesome/free-solid-svg-icons'

const ServiceTable = ({services}) => {
    const handleDelete=(id)=>{
        fetch("https://event-possible.onrender.com/deleteService",{
            method: 'DELETE',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({id})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert("Service successfully deleted")
                
            }
        })
    }
  return (
    <div className="px-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-secondary text-left" scope="col">
              Sr No
            </th>
            <th className="text-secondary" scope="col">
              Name
            </th>
            <th className="text-secondary" scope="col">
              Description
            </th>
            <th className="text-secondary" scope="col">
              Price
            </th>
            <th className="text-secondary" scope="col">
              
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{service.name}</td>
              <td>{(service.description).substring(0,20)}...</td>
              <td>{service.price}</td>
              
              {/* <td>{book.status}</td>   */}
              <td>
                <button onClick={()=>handleDelete(service._id)} className=" btn btn-danger btn-sm px-3"><FontAwesomeIcon  icon={faTrash} />&nbsp; Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;
