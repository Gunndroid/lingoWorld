/* eslint-disable @next/next/no-img-element */
// components/Gallery.tsx
import React from "react";

const Gallery: React.FC = () => {
  // Replace with your actual image URLs
  const imageUrls = new Array(31).fill("https://via.placeholder.com/150");

  return (
    <div className="grid grid-cols-3 gap-4 mx-10">
      {imageUrls.map((url, index) => (
        <img
          key={index}
          className="object-cover w-full h-32 rounded-md shadow-sm"
          src={url}
          alt={`Food ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Gallery;
