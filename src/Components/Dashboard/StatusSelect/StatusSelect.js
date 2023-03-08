import React from 'react';
import { useHistory } from 'react-router-dom';

const StatusSelect = ({id,status}) => {
    const history=useHistory();
    const handleChange=(e)=>{
        const value=e.target.value;
        fetch(`https://event-possible.up.railway.app/updateStatus/${id}`,{
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