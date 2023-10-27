import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";

const CheckOut = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;
  console.log(service);
  return (
    <div>
      <Navbar />
      <div className="text-center text-white bg-[#FF3811] py-5 rounded-md mt-10">
        <h2 className="font-bold text-xl">Your Selected Service : {title}</h2>
        <p>Service Charge : {price} $</p>
      </div>
      <div className="bg-base-200 p-8 my-5 rounded-xl">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="form-control">
              
              <input
                type="text"
                placeholder="First Name"
                className="input "
                required
              />
            </div>
            <div className="form-control">
              
              <input
                type="text"
                placeholder="Last Name"
                className="input "
                required
              />
            </div>
            <div className="form-control">
              
              <input
                type="text"
                placeholder="Your Phone"
                className="input "
                required
              />
            </div>
            <div className="form-control">
              
              <input
                type="text"
                placeholder="Your Email"
                className="input "
                required
              />
            </div>
          </div>
          <div className="form-control pt-4">
            <input
              type="text"
              placeholder="Your Message"
              className="input py-14"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-[#FF3811] text-white"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CheckOut;
