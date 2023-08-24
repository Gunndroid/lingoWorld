/* eslint-disable @next/next/no-img-element */
import React from "react";

const Chef: React.FC = () => {
  return (
    <div className="md:w-1/2 p-6 rounded-md shadow-md md:mx-auto bg-white text-black m-10">
      <img
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=1063,fit=crop/YD0809eXrXFNB68B/download-dWxexLjZDZio6oZL.png"
        alt="Chef Chan Kim"
        className="object-cover object-center w-2/5 mx-auto rounded-md"
      />
      <div className="mt-6 mb-2">
        <span className="block text-lg font-medium tracki uppercase text-m-red">
          OUR CHEF
        </span>
        <h2 className="text-xl font-semibold tracki">Chef Chan Kim</h2>
      </div>
      <p className="">
        Chef Chan Kim has been making sushi for over 19 years and has much
        experience with bringing top-quality sushi to his customers.
      </p>
      <br />
      <p className="">
        &quot;I know many people who have been wanting to try sushi for a long
        time, but because of the price, they have been unable to experience the
        taste of sushi. With Mesaku Sushi, you only need less than ten dollars
        in order to fill your stomach with the wonders of Japan.
      </p>
      <br />

      <p className="">
        I encourage everyone to try this type of unique and cultural food as it
        is a very special type of cuisine that you should get to taste at least
        once in your lifetime. Who knows, maybe you &apos;ll get addicted!
        &quot;
      </p>
      <br />

      <p className="">-Chef Chan Kim</p>
    </div>
  );
};

export default Chef;
