import React from "react";

const VideoPlayer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-5/6 mx-auto  lg:h-[100vh] sm:h-[80vh] md:h-[90vh] h-[50vh]">
      <iframe
        style={{
          width: "100%",
          height: "60%", // Note: I changed this from 50% to 100% to fill the space
          borderRadius: "10px", // Ensures the content inside iframe also has rounded corners
          border: "solid",
          borderColor: "black",
        }}
        src="https://www.youtube.com/embed/Ag5d6ujms_c"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
