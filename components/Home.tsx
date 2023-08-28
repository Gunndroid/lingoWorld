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

        <div className="font-thin bg-gray-900">
          <h2>Our Mission</h2>
          <p>
            "Build community and solidarity in-real-life, online and around the
            world.”
          </p>
          <br />
          <h2>We pivoted… upwards!</h2>
          <p>
            Pre-2020 we built communities in 30+ cities around the world. 2020
            ‘happened’, and we gave ourselves an additional mission; “to
            organise the world’s communities.”
          </p>
          <br />
          <h2>Our battle cry - “Take community economy back”</h2>
          <p className="">
            Our communities are suffocating as local shops, small traders, are
            pushed out of business, unable to compete with large corps and big
            tech. Help your city counterbalance this by reinforcing local
            community+businesses. Say no to regional poverty, slow the flight of
            local wealth to overseas tax havens by consuming local goods and
            services, and acting on local ideas and collaboration – we’re
            building a space with the tools to do that right here.
          </p>
          <br />
          <h2>Mundo Lingo Promise</h2>
          <p>
            Integrity - We do not sell your data, nor sell you as advertising
            space. Dignity - Personal space respected, on and offline. Community
            - We don’t interfere, build your community freely.
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
        </div>
        {/* <button
          onClick={() => setCurrentView("order")}
          className="mt-10 rounded border border-m-black bg-m-red px-12 py-3 text-lg font-medium text-white hover:bg-white hover:text-m-red focus:outline-none "
        >
          Order Now
        </button> */}
        {/* <div className="mt-10 text-center md:text-left">
          <a
            type="button"
            href="tel:+"
            className="rounded border border-m-black bg-m-red px-12 py-3 text-lg font-medium text-white hover:bg-white hover:text-m-red focus:outline-none "
          >
            Call to Order Now
          </a>
        </div> */}
      </section>
    </div>
  );
};

export default About;
