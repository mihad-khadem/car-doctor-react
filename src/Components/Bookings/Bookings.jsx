import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { data } from 'autoprefixer';
import Navbar from '../Header/Navbar/Navbar';

const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])
    console.log(bookings);
    return (
        <div>
            <Navbar/>

            
        </div>
    );
};

export default Bookings;