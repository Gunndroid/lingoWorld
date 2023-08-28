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

const About: React.FC = () => {
  return (
    <div>
      {/* <div className="relative mx-auto ">
        <img
          src="https://images.unsplash.com/photo-1599569955274-e46bfc0cef6a?auto=format&fit=crop&w=2880"
          className="shadow-lg w-full"
          alt="Japanese Cuisine Background"
        />

        <div className="absolute inset-0 flex flex-col justify-center md:bottom-40 bottom-10 left-10  p-10">
          <p className="text-5xl text-m-red font-cinzel">MESAKU </p>
          <p className="text-xl  font-extralight mb-4"> JAPANESE CUISINE</p>
          <Link href="/history" passHref>
            <button
              // onClick={() => setCurrentView("menu")}
              className=" md:w-1/6 w-1/3 rounded border border-m-black bg-m-red text-sm  py-2 md:text-lg font-medium text-white hover:bg-white hover:text-m-red focus:outline-none hover:border-m-red "
              aria-label="View Menu"
            >
              View Menu
            </button>
          </Link>
        </div>
      </div> */}

      <section className="bg-m-feldgrau text-white md:px-32 px-10 md:py-28 py-20 text-xl ">
        <div>
          <h2 className="text-white pb-10 md:text-5xl text-4xl text-center font-cinzel">
            Mundo Lingo&apos;s Community Hub
          </h2>
          <h3 className="text-white pb-10 md:text-2xl text-2xl text-center font-cinzel">
            Connect with your community on every level
          </h3>
          <h4 className="text-white pb-10 md:text-2xl text-2xl text-center font-cinzel">
            Check out your city!
          </h4>
        </div>

        {/* <div className="font-thin bg-gray-900">
          <h2>Our Mission</h2>
          <p>
            &quot;Build community and solidarity in-real-life, online and around
            the world.&quot;
          </p>
          <br />
          <h2>We pivoted… upwards!</h2>
          <p>
            Pre-2020 we built communities in 30+ cities around the world. 2020
            &apos;happened&apos;, and we gave ourselves an additional mission;
            &quot;to organise the world&apos;s communities.&quot;
          </p>
          <br />
          <h2>Our battle cry - &quot;Take community economy back&quot;</h2>
          <p className="">
            Our communities are suffocating as local shops, small traders, are
            pushed out of business, unable to compete with large corps and big
            tech. Help your city counterbalance this by reinforcing local
            community+businesses. Say no to regional poverty, slow the flight of
            local wealth to overseas tax havens by consuming local goods and
            services, and acting on local ideas and collaboration – we&apos;re
            building a space with the tools to do that right here.
          </p>
          <br />
          <h2>Mundo Lingo Promise</h2>
          <p>
            Integrity - We do not sell your data, nor sell you as advertising
            space. Dignity - Personal space respected, on and offline. Community
            - We don&apos;t interfere, build your community freely.
          </p>
          <br />
          <br />
          <h2>Mundo Lingo IRL Format</h2>
          <p>
            Native language at the top, the rest below Stand to mingle, Sit to
            quit
          </p>
          <br />
          <h2>Mundo Lingo IRL Spaces</h2>
          <p>
            None-interfering music Beautiful Venues Personal space is respected.
          </p>
        </div> */}

        <section className="p-4 lg:p-8  ">
          <div className="container mx-auto space-y-12">
            {/* Feature 1 */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2321&q=80"
                alt=""
                className="h-80 dark:bg-gray-500 "
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                {/* <span className="text-xs uppercase dark:text-gray-400">
                  Join, it's free
                </span> */}
                <h3 className="text-3xl font-bold">Our Mission</h3>
                <p className="my-6 dark:text-gray-400">
                  &quot;Build community and solidarity in-real-life, online and
                  around the world.&quot;
                </p>
                {/* <button type="button" className="self-start">
                  Action
                </button> */}
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
              <img
                src="https://source.unsplash.com/640x480/?2"
                alt=""
                className="h-80 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                {/* <span className="text-xs uppercase dark:text-gray-400">
                  Join, it's free
                </span> */}
                <h3 className="text-3xl font-bold">We pivoted… upwards!</h3>

                <p className="my-6 dark:text-gray-400">
                  Pre-2020 we built communities in 30+ cities around the world.
                  2020 &apos;happened&apos;, and we gave ourselves an additional
                  mission; &quot;to organise the world&apos;s communities.&quot;
                </p>
                {/* <button type="button" className="self-start">
                  Action
                </button> */}
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2321&q=80"
                alt=""
                className="h-80 dark:bg-gray-500 "
                // aspect-video
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                {/* <span className="text-xs uppercase dark:text-gray-400">
                  Join, it's free
                </span> */}
                <h3 className="text-3xl font-bold">
                  Our battle cry - "Take community economy back"
                </h3>
                <p className="my-6 dark:text-gray-400">
                  Our communities are suffocating as local shops, small traders,
                  are pushed out of business, unable to compete with large corps
                  and big tech. Help your city counterbalance this by
                  reinforcing local community+businesses. Say no to regional
                  poverty, slow the flight of local wealth to overseas tax
                  havens by consuming local goods and services, and acting on
                  local ideas and collaboration – we're building a space with
                  the tools to do that right here.
                </p>
                {/* <button type="button" className="self-start">
                  Action
                </button> */}
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
              <img
                src="https://source.unsplash.com/640x480/?2"
                alt=""
                className="h-80 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                {/* <span className="text-xs uppercase dark:text-gray-400">
                  Join, it's free
                </span> */}
                <h3 className="text-3xl font-bold">Mundo Lingo Promise</h3>

                <p className="my-6 dark:text-gray-400">
                  Integrity - We do not sell your data, nor sell you as
                  advertising space. Dignity - Personal space respected, on and
                  offline. Community - We don't interfere, build your community
                  freely.
                </p>
                {/* <button type="button" className="self-start">
                  Action
                </button> */}
              </div>
            </div>
            {/* Feature 5 */}
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2321&q=80"
                alt=""
                className="h-80 dark:bg-gray-500 "
                // aspect-video
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                {/* <span className="text-xs uppercase dark:text-gray-400">
                  Join, it's free
                </span> */}
                <h3 className="text-3xl font-bold">Mundo Lingo IRL Format</h3>
                <p className="my-6 dark:text-gray-400">
                  Native language at the top, the rest below Stand to mingle,
                  Sit to quit
                </p>
                <br />
                <h3 className="text-3xl font-bold">Mundo Lingo IRL Spaces</h3>
                <p className="my-6 dark:text-gray-400">
                  None-interfering music Beautiful Venues Personal space is
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
