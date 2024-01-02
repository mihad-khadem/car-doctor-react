import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const BookService = () => {
  const service = useLoaderData();
  const { _id, title, price, img } = service;
  const { user } = useContext(AuthContext)
  const handleBookService = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = user?.email
    const date = form.get('date')
    const dueAmount = price;
    const type = title;
    const order = {
        customerName: name,
        customerEmail: email,
        selectedDate: date,
        dueAmount: dueAmount,
        img: img,
        serviceId: _id,
        serviceName: type,
    }
    // console.log(order);
    fetch('https://car-dr-server.vercel.app/bookings', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)

    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged === true){
            Swal.fire(
                'Booking Confirmed',
                'You booked service successfully',
                'success'
              )

        }
        else{
            Swal.fire(
                'Error!',
                'Something went wrong, try again',
                'error'
              )
        }
    })

  }
  return (
    <div>
      <Navbar />
      <div className="text-center text-white bg-[#FF3811] py-5 rounded-md mt-10">
        <h2 className="font-bold text-xl">Your Selected Service : {title}</h2>
        <p>Service Charge : {price} $</p>
      </div>
      <div className="bg-base-200 p-8 my-5 rounded-xl">
        <form onSubmit={handleBookService}>
        <div className="form-control">
              <input
                type="text"
                defaultValue={user?.displayName}
                name="name"
                className="input my-4"
                required
              />
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="form-control">
              <input
                type="text"
                defaultValue={user?.email}
                name="email"
                className="input "
                required
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                name="date"
                className="input "
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
               defaultValue={title}
               name="type"
                className="input "
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                defaultValue={`Due Amount: ${price}`}
                className="input "
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-[#FF3811] text-white"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default BookService;
