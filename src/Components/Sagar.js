// DoctorsList.js
import React from 'react';
import '../Styles/Apollo.css'; // Import your CSS file
import { Link } from 'react-router-dom'; 


// Static data for demonstration; replace with dynamic data if necessary
const doctors = [
    {
        name: "Dr. Vishruth K Raj",
        designation: "Consultant Urology & Robotic Surgeon",
        imageUrl: "https://www.sagarhospitals.in/wp-content/uploads/2024/05/Dr.-Vishruth-K-Raj.jpg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Shweta Vivek Gadge",
        designation: "Consultant ENT",
        imageUrl: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_799/https://www.sagarhospitals.in/wp-content/uploads/2024/04/Dr.-Shweta-Vivek-Gadge.jpg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Nagaraj S",
        designation: "Consultant Rheumatologist",
        imageUrl: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_799/https://www.sagarhospitals.in/wp-content/uploads/2024/02/Dr.-Nagaraj-S.jpg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Sandeepa HS",
        designation: "Consultant Interventional Pulmonologist",
        imageUrl: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_799/https://www.sagarhospitals.in/wp-content/uploads/2024/02/Dr.-Sandeepa.jpg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. A Rolson Sandeep Kumar",
        designation: "Consultant Maxillofacial Surgeon",
        imageUrl: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_799/https://www.sagarhospitals.in/wp-content/uploads/2024/02/dr-rolson-sandeep.jpg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Poorna Chandra K S",
        designation: "Chief Consultant Medical Gastroentrologist & Hepatologist",
        imageUrl: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_799/https://www.sagarhospitals.in/wp-content/uploads/2024/02/Dr-Poorna-Chandra.jpg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Arun L Naik",
        designation: "Sr. Consultant Neurosurgeon",
        imageUrl: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_800/https://www.sagarhospitals.in/wp-content/uploads/2024/01/Dr.Arun-L-Naik.jpg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Priyanka H K",
        designation: "Consultant Gynaecologist",
        imageUrl: "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_800/https://www.sagarhospitals.in/wp-content/uploads/2024/01/dr-priyanka.jpg",
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
