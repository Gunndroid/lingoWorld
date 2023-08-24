// components/Video.tsx
import React from "react";

const Video: React.FC = () => {
  return (
    <div className="">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Ag5d6ujms_c"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg overflow-hidden"
      />
    </div>
  );
};

export default Video;
