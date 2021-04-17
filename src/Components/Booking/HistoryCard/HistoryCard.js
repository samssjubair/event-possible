import React from 'react';

const HistoryCard = ({history}) => {
    return (
        <div className="col-md-4 p-4">
            <div style={{borderRadius: '10px'}} className="shadow p-4">
                <div className="d-flex justify-content-between">
                    <h5 className="brand-color" style={{textTransform: 'uppercase'}}>{history.service}</h5>
                    <p className="border border-danger bg-light rounded px-2">{history.status}</p>
                </div>
                <p className="mt-3" style={{textAlign: 'left'}}><strong>Booked Time:</strong>  {(new Date(history.bookTime)).toDateString()}</p>
                <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum nem iure.</p>
            </div>
        </div>
    );
};

export default HistoryCard;