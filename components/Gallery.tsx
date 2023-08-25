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
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 lg:gap-8 md:m-20 m-6">
      {imageUrls.map((url, index) => (
        <img
          key={index}
          className="object-cover w-full h-full rounded-sm shadow-sm shadow-black border-white border"
          src={url}
          alt={`Food ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Gallery;
