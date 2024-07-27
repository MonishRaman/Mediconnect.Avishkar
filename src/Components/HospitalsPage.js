import React from 'react';
import '../Styles/HospitalsPage.css'; // Import your CSS file
import { Link } from "react-router-dom";

const hospitals = [
    {
        name: "Fortis Hospital",
        address: "Building No. 119, Survey No. 23, 80 Feet Main Road, Nagarbhavi 2nd Stage, Krupa Layout, Bengaluru",
        phone: "080 22260882",
        timings: "Open 24x7",
        imageUrl: "https://content.jdmagicbox.com/quickquotes/listicle/listicle_1669877429754_79qbt_1040x500.jpg?impolicy=queryparam&im=Resize=(1080,384),aspect=fit&q=75",
        link: "/Health-Plus/fortis"
    },
    {
        name: "Manipal Hospital",
        address: "No. 98, HAL Old Airport Road, Bangalore",
        phone: "1800 102 4647",
        timings: "Open 24x7",
        email: "info@manipalhospitals.com",
        imageUrl: "https://content.jdmagicbox.com/quickquotes/listicle/listicle_1669877527862_ouygs_1040x500.jpg?impolicy=queryparam&im=Resize=(1080,384),aspect=fit&q=75",
        link: "/Health-Plus/manipal"
    },
    {
      name: "Apollo Hospitals",
      address: "Apollo Hospitals,154, 11, Bannerghatta Main Rd, Krishnaraju Layout, Amalodbhavi Nagar, Panduranga Nagar, Bengaluru",
      phone: "080 2630 4050",
      timings: "Open 24x7",
      // email: "info@manipalhospitals.com",
      imageUrl: "https://content.jdmagicbox.com/quickquotes/listicle/listicle_1669877811391_ja8f4_1040x500.jpg?impolicy=queryparam&im=Resize=(1080,384),aspect=fit&q=75",
      link: "/Health-Plus/apollo"
  },
  {
    name: "Narayana Hrudayalaya Hospital",
    address: "Sector 6, HSR Layout, Bengaluru, Karnataka",
    phone: "180 0309 0309 · +91 97384 97384",
    timings: "07:00 pm - 09:00 pm (Mon-Sat)",
    email: "info.hsr@narayanahealth.org",
    imageUrl: "https://content.jdmagicbox.com/comp/bangalore/p9/080pxx80.xx80.140218171736.b4p9/catalogue/narayana-hrudayalaya-hospital-bommasandra-industrial-area-bangalore-coronavirus-testing-centres-private-uojeq6ialn.jpg?impolicy=queryparam&im=Resize=(1080,384),aspect=fit&q=75",
    link: "/Health-Plus/narayana"
},
{
  name: "Aster CMI Hospital",
  address: "No. 43/2, New Airport Road, NH.7, Hebbal, Sahakara Nagar",
  phone: "080 4342 0100",
  timings: "08:00 am - 08:00 pm",
  // email: "info@manipalhospitals.com",
  imageUrl: "https://content.jdmagicbox.com/quickquotes/listicle/listicle_1669878040429_y6eb7_1040x500.jpg?impolicy=queryparam&im=Resize=(1080,384),aspect=fit&q=75",
  link: "/Health-Plus/aster"
},
{
  name: "Sagar Hospital",
  address: "44/54, 30th Cross, Tilaknagar, Jayanagar Extension",
  phone: "080 69555555",
  timings: "Open 24x7",
  email: "infobsk@sagarhospitals.in",
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNi8SBKiZ6QEZ2sZ72qqrUYDXIz-3-kfDuNg&s",
  link: "/Health-Plus/sagar"
},
{
  name: "Sparsh Super Speciality Hospital",
  address: "4/1, Tumkur Main Roadd, Yeshwanthpur Industrial Area, Phase 1, Yeswanthpur, Bengaluru",
  phone: "080 61 222 000",
  timings: "Open 24x7",
  // email: "info@manipalhospitals.com",
  imageUrl: "https://content.jdmagicbox.com/quickquotes/listicle/listicle_1669878143501_3f0pn_1040x500.jpg?impolicy=queryparam&im=Resize=(1080,384),aspect=fit&q=75",
  link: "/Health-Plus/sparsh"
},
{
  name: "BGS Gleneagles Global Hospital",
  address: "67, Uttarahalli Main Rd, Sunkalpalya, Bengaluru, Karnataka",
  phone: "1800 102 46471800 1231 1111",
  timings: "Open 24x7",
  // email: "info@manipalhospitals.com",
  imageUrl: "https://content.jdmagicbox.com/comp/bangalore/d1/080p1231233661g9r9d1/catalogue/bgs-gleneagles-global-hospital-kengeri-bangalore-hospitals-xe4fznki9n.jpg?impolicy=queryparam&im=Resize=(1080,384),aspect=fit&q=75",
  link: "/Health-Plus/bgs"
},
{
  name: "Bangalore Baptist Hospital",
  address: "Bellary Rd, Vinayakanagar, Hebbal, Bengaluru",
  phone: "+91 -80 - 22024700,+91 - 80 -46404700,+91 - 9448496602",
  timings: "Open 24x7",
  email: "talk2us@bbh.org.in",
  imageUrl: "https://content.jdmagicbox.com/comp/bangalore/k7/080pxx80.xx80.160701121711.t3k7/catalogue/bangalore-baptist-hospital-hebbal-bangalore-hospitals-fobdwn7ces.jpg?clr=#0a5c5c?impolicy=queryparam&im=Resize=(1080,384),aspect=fit&q=75",
  link: "/Health-Plus/bbh"
},
{
  name: "St Johns Medical College & Hospital",
  address: "Sarjapura Main Road, Koramangala, Bangalore",
  phone: "+91 080 22065000 / 5001",
  timings: "Open 24x7",
  email: "sjmch.infodesk@stjohns.in",
  imageUrl: "https://content.jdmagicbox.com/quickquotes/listicle/listicle_1669878526880_35z8q_1040x500.jpg?impolicy=queryparam&im=Resize=(1080,384),aspect=fit&q=75",
  link: "/Health-Plus/john"
},
{
  name: "Victoria Hospital",
  address: "SKPTCL Block, Mysore Road, Kalasipalyam, Bangalore",
  phone: "080-2670 1150 Ext 201-202",
  timings: "Open 24x7",
  email: "victoriahospitalbangalore@ymail.com /msvh1900@gmail.com",
  imageUrl: "https://content.jdmagicbox.com/quickquotes/listicle/listicle_1698260438857_z0fns_619x617.jpg?impolicy=queryparam&im=Resize=(1080,384),aspect=fit&q=75",
  link: "/Health-Plus/victoria"
},
    // Add other hospitals here...
];

const HospitalButton = ({ hospital }) => (
    <a href={hospital.link} className="hospital-button">
        <img src={hospital.imageUrl} alt={hospital.name} className="hospital-image" />
        <div className="hospital-info">
            <h3>{hospital.name}</h3>
            <p><strong>Address:</strong> {hospital.address}</p>
            <p><strong>Phone:</strong> {hospital.phone}</p>
            <p><strong>Timings:</strong> {hospital.timings}</p>
            {hospital.email && <p><strong>Email:</strong> {hospital.email}</p>}
        </div>
    </a>
);

const HospitalsList = () => (
    <div className="container">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Medi <span className="legal-siteSign">Connect</span>
        </Link>
      </h1>
       
        <h2 className="form-title">
          <span>List of Hospitals</span>
        </h2>
        {hospitals.map(hospital => (
            <HospitalButton key={hospital.name} hospital={hospital} />
        ))}
        <div className="legal-footer">
        <p>© 2024-2025 MediConnect. All rights reserved.</p>
      </div>
    </div>
);

export default HospitalsList;
