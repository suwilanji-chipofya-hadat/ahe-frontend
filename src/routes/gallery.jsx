import React, { useState, useEffect } from 'react';
import DialogWithImage from "../components/gallery-modal"
export default function Gallery() {
  const [imageFiles, setImageFiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/images/names')
      .then((response) => response.json())
      .then((data) => {
        setImageFiles(data.filenames);
      })
      .catch((error) => {
        console.error('Error fetching image filenames:', error);
      });
  }, []);
  useEffect(() => {
    console.log(`http://localhost:3001/${imageFiles[0]}`)
  }, [imageFiles])
  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide container mx-auto p-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2">
      {
        imageFiles.map((filename, index) => (
            <div class="w-full max-w-xs bg-white rounded-lg shadow-md">
                <DialogWithImage
                  src={`http://localhost:3001/${filename}`}
                />
            </div>
        ))
      }
    </div>
  );
}