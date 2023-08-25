// components/Video.tsx
import React from "react";

const Video: React.FC = () => {
  return (
    <div className="flex items-center my-10 mx-auto">
      <div className="relative w-[90vw] lg:w-[50vw] aspect-w-16 aspect-h-9">
        <video
          controls
          className="w-full h-full rounded-lg overflow-hidden border-white border"
        >
          <source
            src="https://www.youtube.com/watch?v=Ag5d6ujms_c&list=TLGGbZ8aUtl7SGMyNTA4MjAyMw"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
