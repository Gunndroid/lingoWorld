// pages/Page404.tsx
import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

const Page404: React.FC = () => {
  return (
    <Layout>
      {/* <div className="h-[80vh] bg-m-gold ">
        <span className="text-4xl text-center text-white font-crimson-pro ">
          It appears you have wandered too far...{" "}
        </span>
        <Link href="/" className="border border-black rounded-lg p-8 m-10">
          Go Back
        </Link>
      </div> */}
      {/* This is an example component */}
      <div className=" w-screen flex items-center h-[80vh]">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md font-crimson-pro">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn&apos;t find this page.
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link href="/">
              {" "}
              <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-m-gold">
                back to homepage
              </button>
            </Link>
          </div>
          <div className="max-w-lg">
            <svg></svg>
          </div>
        </div>
        <div></div>
      </div>
    </Layout>
  );
};

export default Page404;
