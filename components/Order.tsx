import React from "react";

const Order: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-yellow-400 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Hungry?</h2>
      <p className="text-xl mb-4">Give us a call now and place your order!</p>
      <a
        href="tel:+1234567890"
        className="text-white bg-black px-6 py-2 rounded text-center font-semibold"
      >
        Call +1 (234) 567-890
      </a>
    </div>
  );
};

export default Order;
