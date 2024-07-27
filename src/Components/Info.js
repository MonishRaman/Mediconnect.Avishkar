import React from "react";
import InformationCard from "./InformationCard";
import {  faTruckMedical, faMobileButton } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        At MediConnect, we bridge the gap between local doctors and specialist advice, offering personalized online consultations and essential healthcare services. Our platform ensures quick access to expert medical guidance, emergency support, and tailored care for your well-being. </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Appointment Booking"
          description="Our Appointment Booking service makes scheduling medical consultations effortless. Whether you need to see a general physician or a specialist, our user-friendly platform allows you to book appointments quickly and conveniently, ensuring you get the care you need at a time that suits you."
          icon={faMobileButton}
        />

        {/* <InformationCard
          title="Dental Care"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
          icon={faTooth}
        /> */}
      </div>
    </div>
  );
}

export default Info;
