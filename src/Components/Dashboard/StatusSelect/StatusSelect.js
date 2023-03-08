import React from 'react';
import { useHistory } from 'react-router-dom';

const StatusSelect = ({id,status}) => {
    const history=useHistory();
    const handleChange=(e)=>{
        const value=e.target.value;
<<<<<<< HEAD
        fetch(`https://event-possible.up.railway.app/updateStatus/${id}`,{
=======
        fetch(`https://aqueous-dawn-15668.herokuapp.com/updateStatus/${id}`,{
>>>>>>> c6fd745f5c466065ee625b0fe018aa41b266f11e
            method: "PATCH",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({value})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert("status successfully updated to "+value);
                e.target.value=value;
                history.push("/dashboard/bookingList");
            }
        })
    }
    return (
        <select onChange={handleChange} class="form-select form-select-sm" value={status} name="status" id="status">
                  <option value="pending">pending</option>
                  <option value="ongoing">ongoing</option>
                  <option value="done">done</option>
        </select>
    );
};

export default StatusSelect;