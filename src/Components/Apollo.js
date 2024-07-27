// DoctorsList.js
import React from 'react';
import '../Styles/Apollo.css'; // Import your CSS file
import { Link } from 'react-router-dom'; 


// Static data for demonstration; replace with dynamic data if necessary
const doctors = [
    {
        name: "Dr. Girish B Navasundi",
        designation: "Senior Consultant Cardiologist & Certified TAVR Specialist, Lead Consultant - Structural Heart Disease & Heart Failure",
        experience: "21 Years",
        imageUrl: "https://images.apollo247.in/doctors/de1624b2-ef5c-43fc-a13d-10b4cd652a5c-1704301117376.png?tr=w-375,h-150,c-at_max,f-auto",
        link: "/Health-Plus/appointment"
    },
    {
        name: "(COL) Dr. Vishwanath S",
        designation: "Professor and Senior Consultant- Medical Oncology",
        experience: "12 Years",
        imageUrl: "https://images.apollo247.in/doctors/8605d29d-cd66-4c76-9dcf-8001c254102b.jpg?tr=w-375,h-150,c-at_max,f-auto",
        link: "/Health-Plus/appointment"
    },
    {
      name: "Dr. Ravindra M Mehta",
      designation: "Sr Consultant Interventional Pulmonology &Critical Care Medicine",
      experience: "21 Years",
      imageUrl: "https://images.apollo247.in/doctors/13257775-ab9a-4d25-aad2-94392b15b15f-1710258907313.png?tr=w-375,h-150,c-at_max,f-auto",
      link: "/Health-Plus/appointment"
  },
  {
    name: "Dr. Satish Nair",
    designation: "Head & Neck Surgical Oncology",
    experience: "25 Years ",
    imageUrl: "https://images.apollo247.in/doctors/93363485-7c2e-4877-b367-453a51ebe5e4-1704301131122.png?tr=w-375,h-150,c-at_max,f-auto",
    link: "/Health-Plus/appointment"
},
{
  name: "Dr. Prashant Bafna",
  designation: "Consultant - Rheumatology",
  experience: "12 Years",
  imageUrl: "https://images.apollo247.in/doctors/dbe20e07-2abf-42e3-96bb-fba87263c7ab.jpeg?tr=w-375,h-150,c-at_max,f-auto",
  link: "/Health-Plus/appointment"
},
{
  name: "Dr. Aashish R Shah",
  designation: "Director – Minimal Access, GI, Bariatric and Robotic Surgery",
  experience: "27 Years",
  imageUrl: "https://images.apollo247.in/doctors/8605d29d-cd66-4c76-9dcf-8001c254102b.jpg?tr=w-375,h-150,c-at_max,f-auto",
  link: "/Health-Plus/appointment"
},
{
  name: "Dr. Satishchandra P",
  designation: " Sr. Consultant & Advisor - Neurology",
  experience: "44 Years",
  imageUrl: "https://images.apollo247.in/doctors/3a8183c9-6441-43a4-a906-28f5a69392a4-1705397792600.png?tr=w-375,h-150,c-at_max,f-auto",
  link: "/Health-Plus/appointment"
},
{
  name: "Dr. Manohar T",
  designation: "Chief of Urology Services, Uro-oncology and Kidney Transplantation, Laser, Laparoscopic and Robotic Surgeon Apollo Institute of Renal Sciences",
  experience: "21 Years",
  imageUrl: "https://images.apollo247.in/doctors/65fa4c9e-eaaf-427b-97da-7d0b9f5cccdd.jpg?tr=w-375,h-150,c-at_max,f-auto",
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
