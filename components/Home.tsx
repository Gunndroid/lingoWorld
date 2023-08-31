/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// components/About.tsx
import React from "react";
import Link from "next/link";

import { Cinzel } from "next/font/google";
const cinzel = Cinzel({ subsets: ["latin"] });

// type AboutProps = {
//   setCurrentView: React.Dispatch<React.SetStateAction<string>>;
// };
//
const About: React.FC = () => {
  return (
    <div>
      <section className="bg-m-gold text-black md:py-28 py-20 text-xl ">
        <div>
          <h2 className="text-white pb-10 md:text-5xl text-5xl text-center font-crimson-pro up">
            Mundo Lingo&apos;s <br /> Community Hub
          </h2>
          <h3 className="text-white pb-10 md:text-2xl text-2xl text-center font-crimson-pro">
            Connect with your community on every level
          </h3>
        </div>

        <section className="  ">
          {/* container */}
          <div className=" mx-auto md:space-y-20">
            {/* Feature 1 */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row m-6 border border-black">
              <div className="flex-shrink-0 flex-1">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center flex-1 p-6  bg-white">
                {/* <span className="text-xs uppercase ">
                  Join, it's free
                </span> */}
                <h3 className="text-3xl font-bold">Our Mission</h3>
                <p className="my-6 ">
                  Build community and solidarity in-real-life, online and around
                  the world.
                </p>
                {/* <button type="button" className="self-start">
                  Action
                </button> */}
              </div>
            </div>
            {/* Feature 2 */}
            {/* group of 2 */}
            <div className="flex md:flex-row flex-col  m-6 gap-4">
              <div className="flex flex-col flex-1 overflow-hidden rounded-md shadow-sm  border border-black">
                <img
                  src="https://images.unsplash.com/photo-1550096141-7263640aa48c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
                  alt=""
                  className="h-80 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-center flex-1 p-6 bg-white">
                  {/* <span className="text-xs uppercase ">
                    Join, it's free
                  </span> */}
                  <h3 className="text-3xl font-bold">We pivoted… upwards!</h3>
                  <p className="my-6 ">
                    Pre-2020 we built communities in 30+ cities around the
                    world.
                    <br />
                    <br />
                    2020 &apos;happened&apos;, and we gave ourselves an
                    additional mission... to organise the world&apos;s
                    communities!
                  </p>
                  {/* <button type="button" className="self-start">
                    Action
                  </button> */}
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col md:flex-col-reverse flex-1 overflow-hidden rounded-md shadow-sm  border border-black">
                <img
                  src="https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbW11bml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
                  alt=""
                  className="h-80 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-center flex-1 p-6 bg-white">
                  {/* <span className="text-xs uppercase ">
                  Join, it's free
                </span> */}
                  <h3 className="text-3xl font-bold">Mundo Lingo Promise</h3>

                  <p className="my-6 ">
                    Integrity: we do not sell your data, nor sell you as
                    advertising space.
                    <br />
                    <br />
                    Dignity: personal space respected, online and offline.
                    <br />
                    <br />
                    Community: we don&apos;t interfere, build your community
                    freely.
                  </p>
                  {/* <button type="button" className="self-start">
                  Action
                </button> */}
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse m-6 border border-black">
              <div className="flex-shrink-0 flex-1">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center flex-1 p-6 bg-white">
                {/* <span className="text-xs uppercase ">
                    Join, it's free
                  </span> */}
                <h3 className="text-3xl font-bold">
                  Our Battle Cry:
                  <br />
                  <br />
                  &quot;Take community economy back&quot;
                </h3>
                <p className="my-6 ">
                  Our communities are suffocating as local shops, small traders,
                  are pushed out of business, unable to compete with large corps
                  and big tech.
                  <br />
                  <br />
                  Help your city counterbalance this by reinforcing local
                  community+businesses. Say no to regional poverty, slow the
                  flight of local wealth to overseas tax havens by consuming
                  local goods and services, and acting on local ideas and
                  collaboration; we&apos;re building a space with the tools to
                  do that right here.
                </p>
                {/* <button type="button" className="self-start">
                    Action
                  </button> */}
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row m-6 border border-black">
              <div className="flex-shrink-0 flex-1">
                <img
                  src="https://images.unsplash.com/photo-1461709444300-a6217cec3dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxjb21tdW5pdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center flex-1 p-6 bg-white">
                {/* <span className="text-xs uppercase ">
                  Join, it's free
                </span> */}
                <h3 className="text-3xl font-bold">
                  Mundo Lingo IRL Format + Spaces
                </h3>
                <p className="my-6 ">
                  Native language at the top, the rest below stand to mingle,
                  sit to quit
                </p>
                {/* <br /> */}
                {/* <h3 className="text-3xl font-bold">Mundo Lingo IRL Spaces</h3> */}
                <p className="mb-6 ">
                  None-interfering music, beautiful venues, personal space is
                  respected.
                </p>
                {/* <button type="button" className="self-start">
                  Action
                </button> */}
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default About;
