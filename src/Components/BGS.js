// DoctorsList.js
import React from 'react';
import '../Styles/Apollo.css'; // Import your CSS file
import { Link } from 'react-router-dom'; 


// Static data for demonstration; replace with dynamic data if necessary
const doctors = [
    {
        name: "Dr. Anil Kumar B T",
        designation: "HOD and Sr Consultant-Nephrologist and Transplant Physician",
        experience: "27 Years",
        imageUrl: "https://www.gleneagleshospitals.co.in/assets/styles/doctor_profile/s3/doctors/migrate/m_820243_18.jpg?VersionId=YvANfhXca8wevyBbu8NrsjSAkjs93k9w&itok=NepU2vBt",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Rajeev Vijayakumar",
        designation: "Sr Consultant - Medical Oncologist,Hemato Oncologist and BMT Physician",
        experience: "20 Years",
        imageUrl: "https://www.gleneagleshospitals.co.in/assets/styles/doctor_profile/s3/doctors/migrate/m_820033_67.jpg?VersionId=C7jzsR02_H6m6SQysexdWK9_8ZToSS6J&itok=edmplFEh",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr P R L N Prasad",
        designation: "Consultant - Interventional Cardiologist",
        experience: "23 Years",
        imageUrl: "https://www.gleneagleshospitals.co.in/assets/styles/doctor_profile/s3/doctors/migrate/m_820185_21.jpg?VersionId=aNnyU_Hk8LniL7zTFWK8voNpfYBjw_kF&itok=PquXnPTx",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr Hemant H R",
        designation: "HOD and Sr Consultant Critical Care",
        experience: "29 Years",
        imageUrl: "https://www.gleneagleshospitals.co.in/assets/styles/doctor_profile/s3/doctors/migrate/m_820265_15.jpg?VersionId=PF9WV3Oq2tab_QkkAmbAmsnGch4ZUPCw&itok=oaiOdKGI",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr Raghavendra B R",
        designation: "Dentist",
        experience: "6 Years",
        imageUrl: "https://www.gleneagleshospitals.co.in/assets/styles/doctor_profile/s3/doctors/migrate/m_820171_26.jpg?VersionId=zwVL0w_7D4xvHWDRFJpxGWffWkWUmHgR&itok=1Z8p-vZI",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr Srinath Aswathiah",
        designation: "Consultant - Diabetologist & Endocrinologist",
        experience: "31 Years",
        imageUrl: "https://www.gleneagleshospitals.co.in/assets/styles/doctor_profile/s3/doctors/migrate/m_901144_25.jpg?VersionId=mNLBnzELzXoWiR4_zI.VbJEUokXQiadK&itok=kHuvfZwi",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr Kranthi Mohan",
        designation: "Consultant - Neurologist",
        experience: "10 Years",
        imageUrl: "https://www.gleneagleshospitals.co.in/assets/styles/doctor_profile/s3/doctors/migrate/m_820198_20.jpg?VersionId=qTD_FTCo8AuWWGhrV37EGoXPQFtyxKJn&itok=4jJDm-gE",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr Chetana T Nayak",
        designation: "Consultant - Ophthalmologist",
        // experience: "21 Years", // Uncomment if experience is available
        imageUrl: "https://www.gleneagleshospitals.co.in/assets/styles/doctor_profile/s3/doctors/migrate/m_820002_24.jpg?VersionId=JctBsr4J4rim3WvwxiIDZHrFRX1Y56ec&itok=gJDgJBf5",
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
