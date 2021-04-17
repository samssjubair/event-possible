import React from 'react';

const StatusSelect = ({id,status}) => {
    const handleChange=(e)=>{
        const value=e.target.value;
        fetch(`http://localhost:5055/updateStatus/${id}`,{
            method: "PATCH",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({value})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert("status successfully updated to "+value);
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