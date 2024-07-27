// DoctorsList.js
import React from 'react';
import '../Styles/Apollo.css'; // Import your CSS file
import { Link } from 'react-router-dom'; 


// Static data for demonstration; replace with dynamic data if necessary
const doctors = [
    {
        name: "Dr. Akshatha Nayak U",
        designation: "Adults Haemato-Oncology and BMT",
        imageUrl: "https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/doctors/April2024/wmvJU8faeuXnfPqSlvtq.webp?w=128&q=75",
        link: "/Health-Plus/appointment"
    },
    {
        name: "(COL) Dr. Akshita Singh",
        designation: "Breast Oncology & Oncoplastic Surgery",
        imageUrl: "https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/doctors/April2024/AaEk6oVUcvHCEzkaPFlt.webp?w=128&q=75",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Matam Sri Anusha",
        designation: "Clinical Immunology & Rheumatology, Rheumatology",
        imageUrl: "https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/doctors/April2024/bIexcMa2Ltcy46k5dZzp.webp?w=128&q=75",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Shalini Rajesh",
        designation: "Diabetology",
        imageUrl: "https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/doctors/January2024/ILAtDZkX76L38eyjWBXG.jpg?w=128&q=75",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Rohit Raghunath Ranade",
        designation: "Gynaecologic Oncology, Obstetrics & Gynaecology, Gynaecology - Oncology",
        imageUrl: "https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/doctors/February2024/CH3oGHmIY4e1NPqzzKf7.webp?w=128&q=75",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Sharart Damodar",
        designation: "Haematology, Adult Haemato-Oncology And Bmt",
        imageUrl: "https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/doctors/February2024/qpRXXfiY3jrp2XrPxUFP.webp?w=128&q=75",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Ganesh Srinivasan Prasad P",
        designation: "Nephrology",
        imageUrl: "https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/doctors/May2024/Ippjcbul47E4PHzEor5b.webp?w=128&q=75",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Kuldeep Shetty",
        designation: "Neurplogy",
        imageUrl: "https://stgaccinwbsdevlrs01.blob.core.windows.net/newcorporatewbsite/doctors/February2024/7nfkX2xgxLeWHK05UYgU.webp?w=128&q=75",
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
            {/* <p><strong>Experience:</strong> {doctor.experience} </p> */}
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
