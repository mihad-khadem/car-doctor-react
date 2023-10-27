import React from "react";

import { BsBoxArrowInRight } from "react-icons/bs";
import { Link } from "react-router-dom";

// BsBoxArrowInRight
const ServiceCard = ({ service }) => {
  const { _id, img, price, title } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-4 pt-8">
          <img src={img} alt={title} className="rounded-xl w-[350px]" />
        </figure>
        <div className="card-body items-center">
          <h2 className="text-2xl text-left text-[#444] font-semibold">
            {title}
          </h2>
          <div className="card-actions flex gap-20 items-center mt-3">
            <p className="text-xl text-[#FF3811]">Price : {price}</p>
            <Link to={`/book/${_id}`}>
              
              <button className="text-[#FF3811] text-2xl">
                <BsBoxArrowInRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
