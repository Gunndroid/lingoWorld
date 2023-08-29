// pages/history.tsx
import React from "react";
import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import ContactYourCity from "@/components/ContactYourCity";
import Image from "next/image";

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="relative border border-black md:w-3/4 md:rounded-xl overflow-hidden h-40 md:h-60  mx-auto md:my-10 mb-10">
        <Image
          src="https://images.unsplash.com/photo-1626388129566-b25c51bc1942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2231&q=80"
          alt="Contact Image"
          // width={900}
          // height={100}
          layout="fill"
          objectFit="cover"
          className="absolute md:-top-28 -top-10 "
        />{" "}
      </div>
      <div className="flex flex-col md:flex-row gap-10 m-10 md:m-20">
        <div className="md:w-1/2">
          <Contact />
        </div>
        <div className="md:w-1/2">
          <ContactYourCity />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
