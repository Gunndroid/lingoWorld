// // pages/joinus.tsx
// import React from "react";
// import Layout from "@/components/Layout";
// import Image from "next/image";

// const pinkButton =
//   "mt-4 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-sm shadow-pink-500/50 dark:shadow-sm dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

// const blueButton =
//   "mt-4 w-fit text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm shadow-blue-500/50 dark:shadow-sm dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

// const JoinUsPage: React.FC = () => {
//   return (
//     <Layout>
//       <div className="relative border border-black md:w-3/4 md:rounded-xl overflow-hidden h-40 md:h-60  mx-auto md:my-10 mb-10">
//         <Image
//           layout="fill"
//           objectFit="cover"
//           // width={900}
//           // height={100}
//           src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//           alt="image"
//           className="absolute -top-24 "
//         />
//       </div>
//       <div className="flex flex-col gap-14 text-center text-xl m-6">
//         <h1 className="text-4xl ">Join Us</h1>
//         <div>
//           <h2>Want to run a Mundo Lingo in your city?</h2>
//           <button type="button" className={pinkButton}>
//             Run an Event in Your City
//           </button>
//         </div>
//         <div>
//           <h2>Shape the community by joining the local Ambassador Team</h2>
//           <button type="button" className={pinkButton}>
//             Become an Ambassador
//           </button>{" "}
//         </div>
//         <div>
//           <h2>Join our community of Photographers</h2>
//           <button type="button" className={pinkButton}>
//             Share Your Creativity
//           </button>{" "}
//         </div>
//         <div>
//           <h2>Know a venue we should be operating at?</h2>
//           <button type="button" className={pinkButton}>
//             Share the Venue
//           </button>{" "}
//         </div>
//         <div>
//           <h2>
//             Promote Mundo Lingo in your Uni, Hostel, Café, Dorms, Language
//             school or other location? <br /> We have a gift for you!
//           </h2>
//           <button type="button" className={pinkButton}>
//             Add a Venue
//           </button>{" "}
//         </div>

//         <div className="md:w-3/4 text-center flex flex-col gap-6 bg-slate-200 border border-black rounded-lg mx-auto p-10">
//           <div>
//             <h2>Want to grow with Mundo Lingo?</h2>
//           </div>
//           <p>
//             Our international team is spread around the world working remotely.
//           </p>
//           <p>
//             Gain experience with us as an intern, or benefit us with your
//             experience as a professional and taste the None-Location-Specific
//             (or &quot;Digital Nomad&quot;) lifestyle, send us a brief cover
//             letter, ball-park salary expectance and CV to:
//           </p>
//           <div className="flex justify-center items-center">
//             <button className={blueButton}>
//               <a href="mailto:talent@mundolingo.org">talent@mundolingo.org</a>
//             </button>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default JoinUsPage;

// pages/joinus.tsx
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";

const pinkButton =
  "mt-4 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-sm shadow-pink-500/50 dark:shadow-sm dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

const blueButton =
  "mt-4 w-fit text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm shadow-blue-500/50 dark:shadow-sm dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

const goldButton =
  "border border-black mt-4 w-fit text-black bg-m-gold hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-m-gold dark:focus:ring-m-gold shadow-sm shadow-m-gold/50 dark:shadow-sm dark:shadow-m-gold/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

const JoinUsPage: React.FC = () => {
  return (
    <Layout>
      <div className="relative border border-black  overflow-hidden h-40 md:h-44 mx-auto mb-10">
        <Image
          layout="fill"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1619537903549-0981d6bca911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          // src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w2070&q=80"
          alt="image"
          className="absolute -top-24 "
        />
      </div>
      <div className="flex flex-col gap-14 text-center text-xl m-6 md:m-20">
        <h1 className="text-4xl font-crimson-pro  uppercase">Join Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center border-gray-400 border rounded-xl py-8 px-4">
            <h2>Want to run a Mundo Lingo in your city?</h2>
            <button type="button" className={pinkButton}>
              Run an Event in Your City
            </button>
          </div>
          <div className="flex flex-col items-center border-gray-400 border rounded-xl py-8 px-4">
            <h2>Shape the community by joining the local Ambassador Team</h2>
            <button type="button" className={pinkButton}>
              Become an Ambassador
            </button>{" "}
          </div>
          <div className="flex flex-col items-center border-gray-400 border rounded-xl py-8 px-4">
            <h2>Join our community of Photographers</h2>
            <button type="button" className={pinkButton}>
              Share Your Creativity
            </button>{" "}
          </div>
          <div className="flex flex-col items-center border-gray-400 border rounded-xl py-8 px-4">
            <h2>Know a venue we should be operating at?</h2>
            <button type="button" className={pinkButton}>
              Share the Venue
            </button>{" "}
          </div>
          <div className="flex flex-col items-center border-gray-400 border rounded-xl py-8 px-4">
            <h2>
              Promote Mundo Lingo in your Uni, Hostel, Café, Dorms, Language
              school or other location? We have a gift for you!
            </h2>
            <button type="button" className={pinkButton}>
              Add a Venue
            </button>{" "}
          </div>
        </div>

        <div className="md:w-3/4 text-center flex flex-col gap-6 bg-m-goldlight border border-gray-400 rounded-lg mx-auto p-10">
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
          <div className="flex justify-center items-center">
            <button className={goldButton}>
              <a href="mailto:talent@mundolingo.org">talent@mundolingo.org</a>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JoinUsPage;
