import React from "react";

const Order: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center w-full mx-auto   z-20  items-center">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">Craving Our Delicious Sushi? 🍱</span>
          <span className="block text-white  mx-auto p-5 m-4  w-fit">
            Give us a call now and place your order!
          </span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              type="button"
              href="tel:+2243889024

"
              className="py-4 px-6  bg-m-red hover:bg-white 200 text-white hover:text-m-red w-full  text-center text-3xl font-semibold shadow-md rounded-md border-black border "
            >
              🍣 Click Here to Call 🍣
            </a>
          </div>
          <p className="text-white m-4 text-2xl">224-388-9024</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
