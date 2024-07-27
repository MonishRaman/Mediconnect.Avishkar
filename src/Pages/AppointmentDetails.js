import React from "react";
import { useLocation } from "react-router-dom";
import "../Styles/AppointmentDetails.css"; // Import the CSS file
import { Link } from "react-router-dom";

const ConfirmationPage = () => {
  const location = useLocation();
  const { state } = location;

  const joinZoomMeeting = () => {
    // Replace with your Zoom meeting URL
    window.open("https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1", "_blank");
  };

  return (
    <div className="confirmation-page">
      <header>
        <div className="container">
        <h1 className="legal-siteTitle">
        <Link to="/">
          Medi <span className="legal-siteSign">Connect</span>
        </Link>
      </h1>
          {/* <h1>Choose a Specialist</h1> */}
        </div>
      </header>
      <h1>Appointment Confirmation</h1>
      <div className="confirmation-details">
        <p><strong>Patient Name:</strong> {state.patientName}</p>
        <p><strong>Phone Number:</strong> {state.patientNumber}</p>
        <p><strong>Gender:</strong> {state.patientGender}</p>
        <p><strong>Appointment Time:</strong> {new Date(state.appointmentTime).toLocaleString()}</p>
        <p><strong>Preferred Mode:</strong> {state.preferredMode}</p>
      </div>
      <button onClick={joinZoomMeeting} className="join-zoom-btn">
        Join Zoom Meeting
      </button>
      <div className="legal-footer">
        <p>© 2024-2025 MediConnect. All rights reserved.</p>
      </div>
    </div>
    
  );
};

export default ConfirmationPage;
