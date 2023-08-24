// components/Gallery.tsx
import React from "react";

const Gallery: React.FC = () => {
  const imageUrls = [
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=652,fit=crop/YD0809eXrXFNB68B/slide47-YNqOq3al5afle7ZK.JPG",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=652,fit=crop/YD0809eXrXFNB68B/slide46-AVL3LjveDlhxbPon.JPG",
    "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=652,fit=crop/YD0809eXrXFNB68B/slide45-mnlnlGxP5ntrPgZV.JPG",
    // ... add more URLs here
  ];

  return (
    <div className="grid grid-cols-3 gap-4 m-20">
      {imageUrls.map((url, index) => (
        <img
          key={index}
          className="object-cover w-full h-56 rounded-md shadow-sm shadow-black border-white border"
          src={url}
          alt={`Food ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Gallery;
