import React from "react";
import Chef from "./Chef";
import Video from "./Video";

export default function StoryPage() {
  return (
    <div>
      <h1 className="font-cinzel text-center  text-4xl mt-16 p-6">Our Story</h1>

      <div className="md:text-4xl text-2xl font-cinzel flex flex-col text-center  gap-4">
        <h1>MESAKU Japanese cuisine</h1>
        <h1>Low Price, High quality</h1>
      </div>
      <div className="text-black flex flex-col lg:flex-row justify-center my-auto gap-6 md:m-10">
        <Chef />
        <Video />
      </div>
    </div>
  );
}
