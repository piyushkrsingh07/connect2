import React, { useState, useEffect } from 'react';


const AdminUpload = ({ onUpload, onDelete, hasImage }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      onUpload(file);
      setFile(null); 
    }
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <h2 className="text-2xl font-bold mb-4">Admin Upload</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2"
      >
        Upload Timetable
      </button>
      {hasImage && (
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete Timetable
        </button>
      )}
    </div>
  );
};

const TimetableDisplay = ({ image }) => {
  if (!image) return <p className="text-lg">No timetable uploaded yet.</p>;

  return (
    <div className="flex justify-center">
      <img src={URL.createObjectURL(image)} alt="Timetable" className="rounded-lg shadow-lg" />
    </div>
  );
};


const Timetable = () => {
  const [timetableImage, setTimetableImage] = useState(null);

 
  useEffect(() => {
    const storedImage = localStorage.getItem('timetableImage');
    if (storedImage) {
      const imageFile = new File([new Blob([storedImage])], "timetable.png", { type: "image/png" });
      setTimetableImage(imageFile);
    }
  }, []);

  
  const handleUpload = (file) => {
    setTimetableImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      localStorage.setItem('timetableImage', reader.result); 
    };
    reader.readAsDataURL(file); 
  };

  
  const handleDelete = () => {
    setTimetableImage(null);
    localStorage.removeItem('timetableImage'); 
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Timetable Page</h1>
      <AdminUpload onUpload={handleUpload} onDelete={handleDelete} hasImage={!!timetableImage} />
      <TimetableDisplay image={timetableImage} />
    </div>
  );
};

export default Timetable;
