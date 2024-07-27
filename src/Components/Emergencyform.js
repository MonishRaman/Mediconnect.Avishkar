import React from 'react';
import '../Styles/Emergencyform.css'; // Assuming your CSS is in this file
import { Link } from "react-router-dom";

function EmergencyPage() {
  const redirectToZoom = (url) => {
    window.location.href = url;
  };

  const specialists = [
    {
      name: "General Physician",
      image: "https://cdn-icons-png.freepik.com/512/4751/4751109.png",
      infoLink: "/Health-Plus/general",
      zoomLink: "https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1",
    },
    {
      name: "Gynaecology",
      image: "https://img.freepik.com/premium-vector/pregnant-mother-vector-illustration-design_670330-228.jpg?w=740",
      infoLink: "/Health-Plus/Gynaecology",
      zoomLink: "https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1",
    },
    {
      name: "Dermatology",
      image: "https://www.practo.com/consult/static/images/top-speciality-dermatologist.svg",
      infoLink: "/Health-Plus/Dermatology",
      zoomLink: "https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1",
    },
    
    {
      name: "Stomach and Digestion",
      image: "https://www.practo.com/consult/static/images/top-speciality-stomach.svg",
      infoLink: "/Health-Plus/Stomach",
      zoomLink: "https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1",
    },
    {
      name: "Pediatrics",
      image: "https://www.practo.com/consult/static/images/top-speciality-pediatric.svg",
      infoLink: "/Health-Plus/Pediatrics",
      zoomLink: "https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1",
    },
    {
      name: "Ear, Nose, Throat",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKXFYaesaLxM5d5tswxSebCD6cSPy5OMSNnBU53XZGopVw_WfVVP9tBLpkrFDZo5rB8g&usqp=CAU",
      infoLink: "/Health-Plus/Eye",
      zoomLink: "https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1",
    },
    {
      name: "Urology",
      image: "https://www.practo.com/consult/static/images/top-speciality-kidney.svg",
      infoLink: "/Health-Plus/Urology",
      zoomLink: "https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1",
    },
    {
      name: "Orthopedic",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_-BekPMEwoxX_jLskc1diRe4mKvbcKT17FQ&s",
      infoLink: "/Health-Plus/Orthopedic",
      zoomLink: "https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1",
    },
    {
      name: "Neurology",
      image: "https://static.vecteezy.com/system/resources/previews/011/718/509/non_2x/brain-logo-template-design-brainstorm-logo-ideas-neurology-logo-think-idea-concept-free-vector.jpg",
      infoLink: "/Health-Plus/Neurology",
      zoomLink: "https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1",
    },
    {
      name: "Cardiology",
      image: "data:image/png;base64,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",
      infoLink: "/Health-Plus/Cardiology",
      zoomLink: "https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1",
    },
    {
      name: "Diabetology",
      image: "data:image/png;base64,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",
      infoLink: "/Health-Plus/Diabetology",
      zoomLink: "https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1",
    },
    {
      name: "Eye and Vision",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrMgEaIuyMSUrRgLQYbOA4CiRgqIPjn3CWSg&s",
      infoLink: "/Health-Plus/Optics",
      zoomLink: "https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1",
    },
    {
      name: "Pulmonology",
      image: "data:image/jpeg;base64,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",
      infoLink: "/Health-Plus/Pulmonology",
      zoomLink: "https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1",
    },
    
    {
      name: "Nephrology",
      image: "data:image/jpeg;base64,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",
      infoLink: "/Health-Plus/Nephrology",
      zoomLink: "https://us05web.zoom.us/j/89984002054?pwd=k2S8siG9oIZ5vCKbYUVgZym6hrPUdh.1",
    },

    // Add more specialists as needed
  ];

  return (
    <div>
      <header>
        <div className="container">
        <h1 className="legal-siteTitle">
        <Link to="/">
          Medi <span className="legal-siteSign">Connect</span>
        </Link>
      </h1>
          {/* <h1>Choose a Specialist</h1> */}
        </div>
      </header>
      <section id="choose-specialities">
      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>
          {specialists.map((specialist, index) => (
            <a key={index} href={specialist.infoLink} className="hospital-button">
              <div className="common-issue-option">
                <button className="small-circle-button" onClick={() => redirectToZoom(specialist.zoomLink)}>
                  <img src={specialist.image} alt={specialist.name} className="small-circle-button-icon" />
                </button>
                <div className="text-container">
                  <span>{specialist.name}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <div className="legal-footer">
        <p>© 2024-2025 MediConnect. All rights reserved.</p>
      </div>
    </div>
    
  );
}

export default EmergencyPage;
