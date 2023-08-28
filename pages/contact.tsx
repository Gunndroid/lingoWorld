// pages/history.tsx
import React from "react";
import Layout from "@/components/Layout";
import Contact from "@/components/Contact";
import ContactYourCity from "@/components/ContactYourCity";

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex gap-10 m-20">
        <div className="w-1/2">
          <Contact />
        </div>
        <div className="w-1/2">
          <ContactYourCity />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
