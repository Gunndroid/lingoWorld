// components/Layout.tsx
import React, { useState, SetStateAction } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div className="bg-white text-black font">
      <div className="sticky top-0 z-50 shadow-md">
        <Header
          setIsLoginOpen={setIsLoginOpen}
          setCurrentView={(value: SetStateAction<string>): void => {
            throw new Error("Function not implemented.");
          }}
        />
      </div>

      {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <Login
            isLoginOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
            setIsSignUpOpen={setIsSignUpOpen} // Pass setIsSignUpOpen to Login
          />
        </div>
      )}

      {isSignUpOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <SignUp
            isSignUpOpen={isSignUpOpen}
            setIsLoginOpen={setIsLoginOpen}
            onClose={() => setIsSignUpOpen(false)}
          />
        </div>
      )}

      {children}
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
