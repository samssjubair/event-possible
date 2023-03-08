import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import HistoryCard from '../HistoryCard/HistoryCard';
import SideBar from '../SideBar/SideBar';

const BookingHistory = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [userHistory,setUserHistory]=useState([]);
    useEffect(()=>{
        fetch("https://event-possible.up.railway.app/userBookings",{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>{
            
            setUserHistory(data);
            
        })
    },[])
    return (
        <div className="row ps-0 container-fluid">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10   text-center">
                <h1 className="my-5">Your Booking <span className="brand-color ">History</span></h1>
                <div className="row  mx-auto ">
                    {
                        userHistory.map(history=> <HistoryCard history={history}></HistoryCard> )
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingHistory;