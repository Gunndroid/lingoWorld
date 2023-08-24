/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// components/About.tsx
import React from "react";

const About: React.FC = ({ setCurrentView }) => {
  return (
    <div>
      <div>
        <div className="flex flex-col text-center p-10">
          <p className="text-2xl text-m-magenta">MESAKU </p>
          <p className="text-2xl font-extralight"> JAPANESE CUISINE</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1599569955274-e46bfc0cef6a?auto=format&fit=crop&w=2880"
          className="w-5/6 rounded-2xl shadow-lg mx-auto"
        ></img>
      </div>

      <section className="bg-m-feldgrau text-white px-32 py-28 text-2xl ">
        <h2 className="text-m-magenta pb-6 text-4xl">
          Welcome to Mesaku Sushi!
        </h2>
        <div className="font-thin">
          <p>
            In Japanese, &quot;Mesaku&quot; translates to
            &quot;Masterpiece&quot;, which epitomizes our commitment to
            delivering the freshest and highest-quality sushi at affordable
            prices. Our restaurant always puts customers first, ensuring they
            relish the finest sushi that showcases the beauty and intricacies of
            Japanese cuisine. Our competitive pricing ensures that everyone can
            enjoy premium-quality sushi.
          </p>
          <br />
          <p>Come visit us and savor a taste of Japan for yourself!</p>
          <br />
          <p>
            As we primarily focus on catering and carryout services now, we
            kindly request that you call ahead to place your order. This ensures
            that it will be ready for pickup upon your arrival.
          </p>
          <br />
          <p>
            Please note that we no longer offer dine-in services. We appreciate
            your understanding and request that you plan your visits
            accordingly.
          </p>
          <br />
          <p>Thank you!</p>
        </div>
        <button
          onClick={() => setCurrentView("menu")}
          className="mt-10 rounded border border-m-black bg-m-magenta px-12 py-3 text-lg font-medium text-white hover:bg-white hover:text-m-magenta focus:outline-none "
        >
          Order Now!
        </button>
      </section>
    </div>
  );
};

export default About;
