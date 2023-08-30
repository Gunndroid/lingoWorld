import React from "react";

interface ContactProps {
  selectedManager: string;
}

const Contact: React.FC<ContactProps> = ({ selectedManager }) => {
  const goldButton =
    "border border-black mt-4 w-fit text-black bg-m-gold hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-m-gold dark:focus:ring-m-gold shadow-sm shadow-m-gold/50 dark:shadow-sm dark:shadow-m-gold/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

  return (
    <div className="flex justify-center items-center mt-8 pb-20">
      <div className=" grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  text-black  border border-gray-400">
        <div className="flex flex-col justify-between">
          <div className="space-y-2 mb-10">
            <span className="">2.</span>
            <h2 className="text-4xl font-bold py-4">
              <span className="text-m-gold">Contact</span> <br />{" "}
              {selectedManager || "Mundo Lingo"}
            </h2>
            <div className="dark:text-black">
              Reach out to Mundo Lingo and share your thoughts! We&apos;re
              always glad to connect.
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
              className="w-full p-3 rounded dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded dark:bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows={3}
              className="w-full p-3 rounded dark:bg-gray-100"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={goldButton}
              // className="w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
