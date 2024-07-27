// DoctorsList.js
import React from 'react';
import '../Styles/Apollo.css'; // Import your CSS file

// Sample data for doctors; you can replace this with data from an API or other source
const doctors = [
    {
        name: "Prof. Dr. Somashekhar S P",
        speciality: "Surgical Oncology",
        experience: "40 Years",
        imageUrl: "https://www.asterhospitals.in/sites/default/files/styles/doctors_filter/public/2022-11/prof.dr_.somashekhar-sp-surgical-oncologist-in-bangalore.jpg.webp?itok=d1uNWDhQ",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Rohit Kumar C",
        speciality: "Surgical Oncology, Head and Neck Oncology",
        experience: "10 Years",
        imageUrl: "https://www.asterhospitals.in/sites/default/files/styles/doctors_filter/public/2023-03/Dr.%20Rohith%20web%203.png.webp?itok=-dTEyapu",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Anoop P",
        speciality: "Haematology, Haemato Oncology & BMT",
        experience: "18 Years",
        imageUrl: "https://www.asterhospitals.in/sites/default/files/styles/doctors_filter/public/2023-02/Dr.-Anoop-P-.png.webp?itok=a8XJ7fB_",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Chetan Ginigeri",
        speciality: "Paediatrics & Neonatology",
        experience: "17 Years",
        imageUrl: "https://www.asterhospitals.in/sites/default/files/styles/doctors_filter/public/CMI%20Bangalore/doctors/Dr.%20CHETAN%20GINIGERI.jpg.webp?itok=UKzgahWK",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Ravi Gopal Varma",
        speciality: "Neuro Surgery",
        experience: "25 Years",
        imageUrl: "https://www.asterhospitals.in/sites/default/files/styles/doctors_filter/public/2022-06/dr.ravi-gopal-varma-neurosurgeons-in-bangalore.jpg.webp?itok=X_8zzf4t",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Mythri Shankar",
        speciality: "Nuclear Medicine",
        experience: "20 Years",
        imageUrl: "https://www.asterhospitals.in/sites/default/files/styles/doctors_filter/public/2022-06/dr.mythri-shankar-nuclear-medicine-physician.jpg.webp?itok=UWzlUnhQ",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Ganeshakrishnan Iyer",
        speciality: "Cardiac Surgery",
        experience: "25 Years",
        imageUrl: "https://www.asterhospitals.in/sites/default/files/styles/doctors_filter/public/2022-03/dr-ganeshakrishnan-iyer-best-cardiac-surgeon-bangalore_0.jpg.webp?itok=X3MI-s7J",
        link: "/Health-Plus/appointment"
    },
    {
        name: "Dr. Raghavendra Pai K",
        speciality: "Anesthesiology",
        experience: "25 Years",
        imageUrl: "https://www.asterhospitals.in/sites/default/files/styles/doctors_filter/public/2022-06/dr.raghavendra-pai-k-anaesthesiologist-in-bangalore.jpg.webp?itok=t3VOKc29",
        link: "/Health-Plus/appointment"
    }
];

const DoctorInfo = ({ doctor }) => (
    <a href={doctor.link} className="doctor-info">
        <img src={doctor.imageUrl} alt={doctor.name} className="doctor-image" />
        <div className="doctor-details">
            <h3>{doctor.name}</h3>
            <p><strong>Speciality:</strong> {doctor.speciality}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
        </div>
    </a>
);

const DoctorsList = () => (
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
);

export default DoctorsList;
