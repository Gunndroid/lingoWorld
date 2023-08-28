// pages/joinus.tsx
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";

const pinkButton =
  "mt-4 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-sm shadow-pink-500/50 dark:shadow-sm dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

const GalleryPage: React.FC = () => {
  return (
    <Layout>
      <div className="relative border border-black md:w-3/4 md:rounded-xl overflow-hidden h-40 md:h-60  mx-auto md:my-10 mb-10">
        <Image
          width={900}
          height={100}
          src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="image"
          className="absolute -top-24 "
        />
      </div>
      <div className="flex flex-col gap-14 text-center text-xl m-20">
        <h1 className="text-4xl ">Join Us</h1>
        <div>
          <h2>Want to run a Mundo Lingo in your city?</h2>
          <button type="button" className={pinkButton}>
            Run an Event in Your City
          </button>
        </div>
        <div>
          <h2>Shape the community by joining the local Ambassador Team</h2>
          <button type="button" className={pinkButton}>
            Become an Ambassador
          </button>{" "}
        </div>
        <div>
          <h2>Join our community of Photographers</h2>
          <button type="button" className={pinkButton}>
            Share Your Creativity
          </button>{" "}
        </div>
        <div>
          <h2>Know a venue we should be operating at?</h2>
          <button type="button" className={pinkButton}>
            Share the Venue
          </button>{" "}
        </div>
        <div>
          <h2>
            Promote Mundo Lingo in your Uni, Hostel, Café, Dorms, Language
            school or other location? <br /> We have a gift for you!
          </h2>
          <button type="button" className={pinkButton}>
            Add a Venue
          </button>{" "}
        </div>
        <div className="md:w-3/4 flex flex-col gap-6 bg-slate-200 border border-black rounded-lg mx-auto p-10">
          <div>
            <h2>Want to grow with Mundo Lingo?</h2>
          </div>
          <p>
            Our international team is spread around the world working remotely.
          </p>
          <p>
            Gain experience with us as an intern, or benefit us with your
            experience as a professional and taste the None-Location-Specific
            (or &quot;Digital Nomad&quot;) lifestyle, send us a brief cover
            letter, ball-park salary expectance and CV to:
          </p>
          <a href="mailto:talent@mundolingo.org">talent@mundolingo.org</a>
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
