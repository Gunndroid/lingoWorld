// components/Video.tsx
import React from "react";

const Video: React.FC = () => {
  return (
    <div className="flex items-center my-10 mx-auto">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Ag5d6ujms_c"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg overflow-hidden border-white border"
      />
    </div>
  );
};

export default Video;
