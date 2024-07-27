// DoctorsList.js
import React from 'react';
import '../Styles/Apollo.css'; // Import your CSS file
import { Link } from 'react-router-dom'; 


// Static data for demonstration; replace with dynamic data if necessary
const doctors = [
    {
        name: "Dr Julian Crasta",
        designation: "Pathology",
        imageUrl: "https://www.stjohns.in/medicalcollege/staff/Dr-Julian-Crasta.JPG",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Purushotham Manvi",
        designation: "Dental Surgery",
        imageUrl: "https://www.stjohns.in/medicalcollege/staff/Purushotham_Manvi.JPG",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr Vijay Aithal",
        designation: "Dermatology",
        imageUrl: "https://www.stjohns.in/medicalcollege/staff/DrVijay.JPG",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr Kiron Varghese",
        designation: "Cardiology",
        imageUrl: "https://www.stjohns.in/medicalcollege/staff/HOD-Cardiology.JPG",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. V. Srinivas",
        designation: "ENT Head Neck Surgery",
        imageUrl: "https://www.stjohns.in/medicalcollege/staff/Sreenivas.JPG",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Govindaraj Sridhar",
        designation: "General Surgery",
        imageUrl: "https://www.stjohns.in/medicalcollege/staff/SridarG.JPG",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Prashant G. Kedlaya",
        designation: "Nephrology",
        imageUrl: "https://www.stjohns.in/medicalcollege/staff/Prashant_Kedlaya.JPG",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr Thomas Mathew",
        designation: "Neurology",
        imageUrl: "https://www.stjohns.in/medicalcollege/staff/DrThomas_Photo.JPG",
        link: "/Health-Plus/appointment"
    },


    // Add other doctors here...
];


const DoctorInfo = ({ doctor }) => (
    <a href={doctor.link} className="doctor-info">
        <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image" />
        <div className="doctor-details">
            <h3>{doctor.name}</h3>
            <p><strong>Designation:</strong> {doctor.designation}</p>
            <p><strong>Experience:</strong> {doctor.experience} </p>
        </div>
    </a>
);

const DoctorsList = () => (
  <div>
        <header>
            <div className="container">
                <h1 className="legal-siteTitle">
                    <Link to="/">
                        Medi <span className="legal-siteSign">Connect</span>
                    </Link>
                </h1>
            </div>
        </header>
    <div className="container">
        <h2>List of Doctors</h2>
        <div className="doctor-list">
            {doctors.map((doctor, index) => (
                <DoctorInfo key={index} doctor={doctor} />
            ))}
        </div>
        <div className="legal-footer">
        <p>© 2024-2025 MediConnect. All rights reserved.</p>
      </div>
    </div>
    </div>
);

export default DoctorsList;
