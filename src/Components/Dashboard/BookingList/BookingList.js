import React, { useState } from 'react';
import BookingListTable from '../BookingListTable/BookingListTable';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [bookings,setBookings]=useState([]);
    useState(()=>{
        fetch("http://localhost:5055/allBookings")
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[])
    return (
        <div className="row container-fluid ps-0">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 text-center">
                <h1 className="my-5">All <span className="brand-color">Bookings</span></h1>
                <BookingListTable bookings={bookings}></BookingListTable>
            </div>
        </div>
    );
};

export default BookingList;