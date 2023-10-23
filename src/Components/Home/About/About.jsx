import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
        <h2 className="text-4xl text-center py-4">About us</h2>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
          <img
            src={person}
            className=" w-3/4 rounded-lg shadow-2xl"
          />
          <img src={parts} className="w-1/2 sm:absolute top-1/2 right-5 border-white border-8 rounded-lg" alt="" />
          </div>
          <div className="py-16 lg:py-2 lg:w-1/2">
            <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn btn-error text-white text my-3">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
