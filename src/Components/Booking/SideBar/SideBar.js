import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import logo from '../../../Images/white-logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faHistory,
  faGripHorizontal,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      
      <ul  className="list-unstyled">
      <img style={{height: '80px',marginBottom: '30px'}} src={logo} alt=""/>
        <li>
          <Link style={{textDecoration: 'none'}} to="/book/history"  className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book</span>
          </Link>
        </li>

        <li>
          <Link style={{textDecoration: 'none'}} to="/book/history" className="text-white">
            <FontAwesomeIcon icon={faHistory} /> <span>Booking History</span>
          </Link>
        </li>
        <li>
          <Link style={{textDecoration: 'none'}}  to="/book/review" className="text-white">
            <FontAwesomeIcon icon={faQuoteRight} /> <span>Review</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
