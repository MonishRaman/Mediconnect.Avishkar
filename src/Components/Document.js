import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/Document.css'; // Assuming your CSS is in this file
import { Link } from "react-router-dom";


const App = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:3001/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      setUploadStatus(`File uploaded successfully. File ID: ${response.data.fileId}`);
    })
    .catch(error => {
      console.error('Error uploading file:', error);
      setUploadStatus('Error uploading file');
    });
  };

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
      <h1>Upload File to Google Drive</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{uploadStatus}</p>


      <div className="legal-footer">
        <p>© 2024-2025 MediConnect. All rights reserved.</p>
      </div>
    </div>
  );
};

export default App;
