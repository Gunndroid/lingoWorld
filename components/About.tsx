/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// components/About.tsx
import React from "react";

type AboutProps = {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
};

const About: React.FC<AboutProps> = ({ setCurrentView }) => {
  return (
    <div>
      <div className="relative mx-auto ">
        <img
          src="https://images.unsplash.com/photo-1599569955274-e46bfc0cef6a?auto=format&fit=crop&w=2880"
          className="shadow-lg w-full"
          alt="Japanese Cuisine Background"
        />

        <div className="absolute inset-0 flex flex-col justify-center md:bottom-40 bottom-14 left-10  p-10">
          <p className="md:text-6xl text-3xl text-m-red">MESAKU </p>
          <p className="md:text-3xl text-xl font-extralight mb-4">
            {" "}
            JAPANESE CUISINE
          </p>
          <button
            onClick={() => setCurrentView("menu")}
            className=" md:w-1/6 w-1/3 rounded border border-m-black bg-m-red  py-2 md:text-lg font-medium text-white hover:bg-white hover:text-m-red focus:outline-none hover:border-m-red "
          >
            View Menu
          </button>
        </div>
      </div>

      <section className="bg-m-feldgrau text-white md:px-32 px-10 py-28 text-2xl ">
        <h2 className="text-white pb-10 md:text-5xl text-3xl text-center ">
          Welcome to Mesaku Sushi
        </h2>
        <div className="font-thin ">
          <p className="">
            In Japanese, &quot;Mesaku&quot; translates to
            &quot;Masterpiece&quot;, which spotlights our commitment to
            delivering the freshest and highest-quality sushi at affordable
            prices. Our restaurant always puts customers first, ensuring they
            savor the finest sushi that showcases the beauty and intricacies of
            Japanese cuisine. Our competitive pricing ensures that everyone can
            enjoy premium-quality sushi.
          </p>
          <br />
          <p>Come visit us and savor a taste of Japan for yourself!</p>
          <br />
          <p className="font-semibold">
            Please note that we no longer offer dine-in services. We appreciate
            your understanding and request that you plan your visits
            accordingly.
          </p>
          <br />
          <p>
            As we primarily focus on catering and carryout services now, we
            kindly request that you call ahead to place your order. This ensures
            that it will be ready for pickup upon your arrival.
          </p>
          <br />

          <p>Thank you!</p>
        </div>
        <button
          onClick={() => setCurrentView("order")}
          className="mt-10 rounded border border-m-black bg-m-red px-12 py-3 text-lg font-medium text-white hover:bg-white hover:text-m-red focus:outline-none "
        >
          Order Now!
        </button>
      </section>
    </div>
  );
};

export default About;
