// FileUploadPage.jsx
import React, { useRef } from 'react';

function FileUploadPage() {
  const fileInputRef = useRef();

  const handleFileUpload = () => {
    // Access the uploaded file using fileInputRef.current.files[0]
    const uploadedFile = fileInputRef.current.files[0];
    // Perform actions with the file, such as sending it to the server
    console.log('Uploaded file:', uploadedFile);
  };

  return (
    <div>
      <h2>File Upload Page</h2>
      <input type="file" ref={fileInputRef} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
}

export default FileUploadPage;
