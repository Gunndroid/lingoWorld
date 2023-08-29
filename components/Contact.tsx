import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-800 text-gray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2 mb-10">
            <h2 className="text-4xl font-bold leadi lg:text-5xl">
              Let&apos;s talk!
            </h2>
            <div className="dark:text-gray-400">
              Vivamus in nisl metus? Phasellus.
            </div>
          </div>
          {/* <img
            src="assets/svg/doodle.svg"
            alt=""
            className=" h-52 md:h-64 bg-white"
          /> */}
        </div>
        <form noValidate className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded dark:bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              className="w-full p-3 rounded dark:bg-gray-800"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;