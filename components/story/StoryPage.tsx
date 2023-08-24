import React from "react";
import Chef from "./Chef";
import Video from "./Video";

export default function StoryPage() {
  return (
    <div className="text-black flex justify-center my-auto gap-6 m-10">
      <Chef />
      <Video />
    </div>
  );
}
