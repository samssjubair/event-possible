import React, { useState } from 'react';
import SideBar from '../../Booking/SideBar/SideBar';
import BookingListTable from '../BookingListTable/BookingListTable';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [bookings,setBookings]=useState([]);
    useState(()=>{
        fetch("https://aqueous-dawn-15668.herokuapp.com/allBookings")
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[bookings])
    return (
        <div className="row container-fluid ps-0">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-10 text-center">
                <h1 className="my-5">All <span className="brand-color">Bookings</span></h1>
                <BookingListTable bookings={bookings}></BookingListTable>
            </div>
        </div>
    );
};

export default BookingList;