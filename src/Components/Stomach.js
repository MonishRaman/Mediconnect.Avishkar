import React from 'react';
import '../Styles/general.css';
import { Link } from "react-router-dom";

const EmergencyDoctor = () => {
  return (
    
    <div className="container">
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
      <h2>Emergency Doctors</h2>
      <div className="doctor1-list">
        <a 
          href="https://us05web.zoom.us/j/86537618536?pwd=cCqdyH47fqRZEBvkWxQQopj32Z7LFY.1" 
          className="doctor1-info"
        >
          <img 
            src="https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/1185.jpg?itok=WlMW_THf" 
            alt="Dr. Gourdas Choudhuri" 
            className="doctor1-image" 
          />
          <div className="doctor1-details">
          <h3>Dr. Gourdas Choudhuri</h3>
                    <p><strong>Designation:</strong> CHAIRMAN-GASTROENTEROLOGY </p>
                    <p><strong>Experience:</strong> 42 Years </p>
          </div>
        </a>
        <div className="legal-footer">
        <p>© 2024-2025 MediConnect. All rights reserved.</p>
      </div>
      </div>
    </div>
  );
}

export default EmergencyDoctor;
