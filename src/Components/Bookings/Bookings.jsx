import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

import Navbar from "../Header/Navbar/Navbar";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const handleDelete = id => {
    const proceed = Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        fetch(`http://localhost:5000/bookings/${id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          if(data){
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining)
          }
        })

      }
      else{
        Swal.fire(
          'Cenceled!',
          'Your file is safe',
          'success'
        )
      }
    })
    

  }
  // console.log(bookings);
  return (
    <div>
      <Navbar />
      <div className="my-10 bg-base-200 p-4 rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead >
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox hidden" />
                  </label>
                </th>
                <th>Service Name</th>
                <th>User Details</th>
                <th>Payable Amaount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {
                bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete}></BookingRow>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
