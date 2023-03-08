import React from "react";
import StatusSelect from "../StatusSelect/StatusSelect";

const BookingListTable = ({ bookings }) => {
    
  return (
    <div className="px-5">
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-secondary text-left" scope="col">
              Sr No
            </th>
            <th className="text-secondary" scope="col">
              Name
            </th>
            <th className="text-secondary" scope="col">
              Email
            </th>
            <th className="text-secondary" scope="col">
              Service
            </th>
            <th className="text-secondary" scope="col">
              Book Time
            </th>
            <th className="text-secondary" scope="col">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((book, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{book.userName}</td>
              <td>{book.email}</td>
              <td>{book.service}</td>
              <td>{new Date(book.bookTime).toDateString()}</td>
              {/* <td>{book.status}</td>   */}
              <td>
                <StatusSelect status={book.status} id={book._id}></StatusSelect>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingListTable;
