import React, { useState } from 'react';
import { AiOutlineCloudUpload, AiOutlineCamera } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';

const UploadPrescription = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleCameraUpload = () => {
    alert("Camera functionality will be implemented here!");
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center bg-light"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/7564276/pexels-photo-7564276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="card shadow-lg" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="card-body text-center">
          <h2 className="card-title text-success mb-3">Upload Your Prescription</h2>
          <p className="card-text text-muted">
            Upload a clear image of your prescription to get your medicines quickly.
          </p>
          <div
            className="border border-dashed rounded p-4 mb-4 text-center"
            style={{
              borderStyle: 'dashed',
              borderColor: '#28a745',
              cursor: 'pointer',
              backgroundColor: '#f9f9f9',
            }}
            onClick={() => document.getElementById('fileInput').click()}
          >
            <AiOutlineCloudUpload size={50} className="text-success mb-3" />
            <p className="text-muted">Drag and drop your prescription here or click to upload.</p>
            <input
              id="fileInput"
              type="file"
              multiple
              accept="image/*, application/pdf"
              className="d-none"
              onChange={handleFileUpload}
            />
          </div>
          <button
            className="btn btn-outline-success rounded-circle mb-3"
            onClick={handleCameraUpload}
          >
            <AiOutlineCamera size={30} />
          </button>
          <button className="btn btn-success w-100 mb-3">
            Submit Prescription
          </button>
          {uploadedFiles.length > 0 && (
            <div>
              <h5 className="text-muted">Uploaded Files:</h5>
              <ul className="list-group">
                {uploadedFiles.map((file, index) => (
                  <li key={index} className="list-group-item">
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="mt-4 text-muted">
            Need help uploading?{' '}
            <a href="/contact-us" className="text-success">
              Contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadPrescription;
