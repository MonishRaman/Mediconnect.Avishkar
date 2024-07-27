// DoctorsList.js
import React from 'react';
import '../Styles/Apollo.css'; // Import your CSS file
import { Link } from 'react-router-dom'; 


// Static data for demonstration; replace with dynamic data if necessary
const doctors = [
    {
        name: "Dr. K Shankar",
        designation: "Psychiatrist",
        experience: "21 Years",
        imageUrl: "https://www.sehat.com/sht-new-img/new/male.png",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. K Seshagiri Rao",
        designation: "General Surgeon",
        experience: "15 Years",
        imageUrl: "https://www.sehat.com/sht-new-img/new/male.png",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr B N Thyagaraj",
        designation: "Surgical Gastroenterologist",
        experience: "18 Years",
        imageUrl: "https://www.sehat.com/sht-new-img/new/male.png",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr R Anil Kumar",
        designation: "ENT Surgeon",
        experience: "25 Years",
        imageUrl: "https://www.sehat.com/sht-new-img/new/male.png",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. M.D. Patil",
        designation: "Cardiothoracic Surgeon",
        experience: "28 Years",
        imageUrl: "https://www.sehat.com/sht-new-img/new/male.png",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. S.S. HARSOOR",
        designation: "Anaesthesiologist",
        experience: "31 Years",
        imageUrl: "https://www.sehat.com/sht-new-img/new/male.png",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. S. SACCHIDANAND",
        designation: "Dermatologist",
        experience: "10 Years",
        imageUrl: "https://www.sehat.com/sht-new-img/new/male.png",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Ramesh Krishna",
        designation: "Orthopaedicist",
        experience: "19 Years",
        imageUrl: "https://www.sehat.com/sht-new-img/new/male.png",
        link: "/Health-Plus/appointment"
    }


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
