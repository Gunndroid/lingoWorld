/* eslint-disable @next/next/no-img-element */
// components/Gallery.tsx
import React from "react";

const Gallery: React.FC = () => {
  // Generate the image URLs dynamically
  const imageUrls = Array.from(
    { length: 31 },
    (_, i) => `/sushi/mesakuSushi${i + 1}.jpeg`
  );

  return (
    <div className="grid md:grid-cols-3 gap-4 m-20">
      {imageUrls.map((url, index) => (
        <img
          key={index}
          className="object-cover w-full h-full rounded-md shadow-sm shadow-black border-white border"
          src={url}
          alt={`Food ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Gallery;
