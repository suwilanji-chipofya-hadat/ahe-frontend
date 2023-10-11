import React, { useState, useEffect } from 'react';
import { Carousel, IconButton } from "@material-tailwind/react";
import { Button } from 'flowbite-react';
export default function HorizontalGallery() {
  const imageFiles = ['WhatsAppImage2023-10-09at2.00.43PM.jpeg', 'WhatsAppImage2023-10-09at2.00.44PM(1).jpeg', 'WhatsAppImage2023-10-09at2.00.44PM.jpeg', 'WhatsAppImage2023-10-09at2.00.45PM(1).jpeg', 'WhatsAppImage2023-10-09at2.00.45PM(2).jpeg', 'WhatsAppImage2023-10-09at2.00.45PM.jpeg', 'WhatsAppImage2023-10-09at2.00.46PM.jpeg', 'WhatsAppImage2023-10-09at2.10.31PM(1).jpeg', 'WhatsAppImage2023-10-09at2.10.31PM.jpeg', 'WhatsAppImage2023-10-09at2.10.32PM(1).jpeg', 'WhatsAppImage2023-10-09at2.10.32PM(2).jpeg', 'WhatsAppImage2023-10-09at2.10.32PM(3).jpeg', 'WhatsAppImage2023-10-09at2.10.32PM(4).jpeg', 'WhatsAppImage2023-10-09at2.10.32PM(5).jpeg', 'WhatsAppImage2023-10-09at2.10.32PM.jpeg', 'WhatsAppImage2023-10-09at2.10.33PM(1).jpeg', 'WhatsAppImage2023-10-09at2.10.33PM.jpeg', 'WhatsAppImage2023-10-09at2.10.58PM(1).jpeg', 'WhatsAppImage2023-10-09at2.10.58PM.jpeg', 'WhatsAppImage2023-10-09at2.11.26PM(1).jpeg', 'WhatsAppImage2023-10-09at2.11.26PM.jpeg', 'WhatsAppImage2023-10-09at2.15.18PM(1).jpeg', 'WhatsAppImage2023-10-09at2.15.18PM(2).jpeg', 'WhatsAppImage2023-10-09at2.15.18PM(3).jpeg', 'WhatsAppImage2023-10-09at2.15.18PM.jpeg', 'WhatsAppImage2023-10-09at2.15.19PM(1).jpeg', 'WhatsAppImage2023-10-09at2.15.19PM(2).jpeg', 'WhatsAppImage2023-10-09at2.15.19PM(3).jpeg', 'WhatsAppImage2023-10-09at2.15.19PM.jpeg']
  const [fullGallery, setFullGallery] = useState(false)
  return (
    <div className="flex flex-col items-center space-y-4">
      {
        fullGallery ? (
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-2">
          {imageFiles.map((filename, index) => (
                      <img
                        src={`https://cdn.statically.io/gh/suwilanji-chipofya-hadat/ahte-static/main/${filename}`}
                        alt="Portfoli Work"
                        className="w-full object-cover h-full rounded-md"
                      />
                  ))}
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-2">
            <img
              src={`http://localhost:3001/${imageFiles[0]}`}
              alt="Portfoli Work"
              className="w-full object-cover h-full rounded-md"
            />
          <img
              src={`http://localhost:3001/${imageFiles[1]}`}
              alt="Portfoli Work"
              className="w-full object-cover h-full rounded-md"
            />
          <img
              src={`http://localhost:3001/${imageFiles[2]}`}
              alt="Portfoli Work"
              className="w-full object-cover h-full rounded-md"
            />
          <img
              src={`http://localhost:3001/${imageFiles[3]}`}
              alt="Portfoli Work"
              className="w-full object-cover h-full rounded-md"
            />
          </div>
        )
      }
    
    <div className="">
      <Button className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 text-black font-bold" onClick={() => setFullGallery(!fullGallery)}>VIEW GALLERY</Button>
    </div>
    </div>
  );
}
