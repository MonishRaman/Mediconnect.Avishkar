// DoctorsList.js
import React from 'react';
import '../Styles/Apollo.css'; // Import your CSS file
import { Link } from 'react-router-dom'; 


// Static data for demonstration; replace with dynamic data if necessary
const doctors = [
    {
        name: "Dr. Vivek Jawali",
        designation: "CHAIRMAN CARDIAC SCIENCES",
        types: "Cardiac Sciences | Adult CTVS (Cardiothoracic and Vascular Surgery) | Heart Transplant | Thoracic Surgery",
        experience: "39 Years",
        imageUrl: "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/2242.png?itok=xe4B8nn8",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Mohan Keshavamurthy",
        designation: "SENIOR DIRECTOR UROLOGY",
        types: "Urology | Paediatric Urology | Uro-Oncology | Kidney Transplant | Robotic Surgery | Organ Transplant",
        experience: "26 Years",
        imageUrl: "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/3519.png?itok=Zzp-FyGj",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Murali R Chakravarthy",
        designation: "SENIOR DIRECTOR ANAESTHESIA",
        types: "Support Specialties | Anaesthesia",
        experience: "34 Years",
        imageUrl: "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/2326.png?itok=bI62gdTB",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Narayan Hulse",
        designation: "SENIOR DIRECTOR ORTHOPAEDICS",
        types: "Orthopaedics | Orthopaedics and Joint Replacement | Robotic and Computer navigated Joint reconstruction",
        experience: "21 Years",
        imageUrl: "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/496.png?itok=z8k0py40",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Vivek Jawali",
        designation: "SENIOR DIRECTOR MEDICAL ONCOLOGY",
        types: "Oncology | Medical Oncology | Hemato-Oncology | Haematology | Paediatric Haematology and BMT",
        experience: "22 Years",
        imageUrl: "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/3320.png?itok=V2Lwsc_U",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Deshpande Vasudevarao Rajakumar",
        designation: "DIRECTOR NEURO SURGERY",
        types: "Neurosurgery | Neurosurgery | Neuro and Spine Surgery",
        experience: "31 Years",
        imageUrl: "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/55.png?itok=_VBaSLV3",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Ravindra B S",
        designation: "DIRECTOR & HOD GASTROENTEROLOGY",
        types: "Gastroenterology and Hepatobiliary Sciences | Gastroenterology",
        experience: "15 Years",
        imageUrl: "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/3649.png?itok=a2D8dZ56",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Sheela Murali Chakravarthy",
        designation: "DIRECTOR INTERNAL MEDICINE",
        types: "Internal Medicine | General Physician | Internal Medicine",
        experience: "38 Years",
        imageUrl: "https://www.fortishealthcare.com/drupal-data/styles/doctor_listing/azblob/doctors/1368.png?itok=XDeb_l53",
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
