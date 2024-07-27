// DoctorsList.js
import React from 'react';
import '../Styles/Apollo.css'; // Import your CSS file
import { Link } from 'react-router-dom'; 


// Static data for demonstration; replace with dynamic data if necessary
const doctors = [
    {
        name: "(COL) Dr. Avnish Seth VSM",
        designation: "Chairman, Manipal Institute Of Gastroenterology & Hepato-Biliary-Pancreatic Sciences",
        imageUrl: "https://www.manipalhospitals.com/uploads/doctors_photo/dr-avnish-seth-organ-transplant-surgeon-in-bangalore_1677482263.webp",
        link: "/Health-Plus/appointment"
    },
    {
        name: "(COL) Dr. Monik Mehta",
        designation: "Senior Consultant - Cardiology",
        imageUrl: "https://www.manipalhospitals.com/uploads/doctors_photo/heart-specialist-in-gurgaon-col-dr-monik-mehta.png",
        link: "/Health-Plus/appointment"
    },
    {
        name: "(LT COL) Dr. Leena N Sreedhar",
        designation: "HOD And Consultant - Obstetrics & Gynaecology, HOD DEPARTMENT OF ACADEMICS AND RESEARCH",
        imageUrl: "https://www.manipalhospitals.com/uploads/doctors_photo/dr-lt-col-leena-n-sreedhar-hod-mother-and-child-care-obstetrics-gynaecology_1676021186.webp",
        link: "/Health-Plus/appointment"
    },
    {
        name: "(LT COL) Dr. C S Narayanan,VSM",
        designation: "Chairman, Manipal Institute Of Neuro Sciences",
        imageUrl: "https://www.manipalhospitals.com/uploads/doctors_photo/dr-lt-gen-c-s-narayanan-vsm-hod-neurology.jpeg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Abraham S S",
        designation: "Consultant - Physiotherapist",
        imageUrl: "https://www.manipalhospitals.com/uploads/doctors_photo/physiotherapist-in-bangalore-abraham-s-s.webp",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Ashwin Bhat H",
        designation: "Physiotherapist",
        imageUrl: "https://www.manipalhospitals.com/uploads/doctors_photo/best-physiotherapist-in-old-airport-road-bangalore-ashwin-bhat-h.webp",
        link: "/Health-Plus/appointment"
    },
    {
        name: "COL(Dr) Aradhana Sood",
        designation: "Consultant - Dermatology And Cosmetology",
        imageUrl: "https://www.manipalhospitals.com/uploads/doctors_photo/col-dr-aradhana-sood-consultant-dermatology-cosmetology1.png",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Abhishek Nandi",
        designation: "Consultant - Paediatric Orthopaedician",
        imageUrl: "https://www.manipalhospitals.com/uploads/doctors_photo/best-ortho-doctor-in-kolkata-dr-abhishek-nandi.webp",
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
