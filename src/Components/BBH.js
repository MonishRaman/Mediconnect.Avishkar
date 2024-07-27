// DoctorsList.js
import React from 'react';
import '../Styles/Apollo.css'; // Import your CSS file
import { Link } from 'react-router-dom'; 


// Static data for demonstration; replace with dynamic data if necessary
const doctors = [
    {
        name: "Dr. Abey Verghese Chacko",
        designation: "Consultant",
        experience: "24 Years",
        imageUrl: "https://bbh.org.in/wp-content/uploads/2019/08/ABEY-260x352.jpg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Abhijit Jawali A.",
        designation: "Consultant - Orthopaedics & Joint Replacement",
        experience: "9 Years",
        imageUrl: "https://bbh.org.in/wp-content/uploads/2019/09/ABHIJITH-scaled-e1591158575109-260x352-1.jpg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Afsar Fatima",
        designation: "Consultant - Endocrinologist",
        experience: "5 Years",
        imageUrl: "https://bbh.org.in/wp-content/uploads/2022/11/Dr.-Afsar-Fatima-Photo-260x352.jpg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Ajay Handa",
        designation: "Visiting Consultant - Pulmonology",
        experience: "18 Years",
        imageUrl: "https://bbh.org.in/wp-content/uploads/2020/05/PHOTO-2020-06-03-08-20-58-260x352.jpg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Anjali S Raj",
        designation: "Consultant Neonatologist",
        experience: "10 Years",
        imageUrl: "https://bbh.org.in/wp-content/uploads/2024/04/Dr.Anjali-S-Raj-260x352.jpg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Anupama Darapu",
        designation: "Consultant - Radiation Oncology",
        experience: "8 Years",
        imageUrl: "https://bbh.org.in/wp-content/uploads/2020/04/DR-ANUPAMA-DARAPU-260x352.jpg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Ashish Varghese",
        designation: "Sr. Consultant - ENT",
        experience: "24 Years",
        imageUrl: "https://bbh.org.in/wp-content/uploads/2024/01/Dr.Ashish-John-Varghese-260x352.jpg",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Bilcy Philip",
        designation: "Dental Consultant",
        experience: "25 Years",
        imageUrl: "https://bbh.org.in/wp-content/uploads/2019/08/BILCY-260x352.jpg",
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
