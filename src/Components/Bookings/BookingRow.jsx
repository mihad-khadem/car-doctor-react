import { data } from "autoprefixer";
import React from "react";
import Swal from "sweetalert2";

const BookingRow = ({ booking, handleDelete, confirmBooking }) => {
  const {
    _id,
    serviceName,
    img,
    customerName,
    selectedDate,
    customerEmail,
    dueAmount,
    status
  } = booking;
  return (
    <tr>
      <th>
        <label>
          <button className="btn btn-circle btn-outline" onClick={() => handleDelete(_id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
          </div>
        </div>
      </td>
      <td>
        {customerName} <br />
        {customerEmail}
      </td>
      <td>{dueAmount} $</td>
      <td>{selectedDate}</td>
      <th>
        {status === 'Confirmed' ? <span>Confirmed</span> : <button onClick={() => confirmBooking(_id)} className="btn btn-ghost btn-xs">Confirm</button>}
      </th>
    </tr>
  );
};

export default BookingRow;
