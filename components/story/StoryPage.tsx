import React from "react";
import Chef from "./Chef";
import Video from "./Video";

export default function StoryPage() {
  return (
    <div className="text-black flex flex-col lg:flex-row justify-center my-auto gap-6 md:m-10">
      <Chef />
      <Video />
    </div>
  );
}
