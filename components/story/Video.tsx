import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Video: React.FC = () => {
  return (
    <div className="flex items-center my-10 mx-auto">
      <div className="w-[93vw] lg:w-[50vw] rounded-lg overflow-hidden border-black border ">
        <LiteYouTubeEmbed
          aspectHeight={9}
          aspectWidth={16}
          id="Ag5d6ujms_c"
          poster="hqdefault"
          title="Some title"
        />
      </div>
    </div>
  );
};

export default Video;
