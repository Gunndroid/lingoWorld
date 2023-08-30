// components/Layout.tsx
import React, { useState, SetStateAction } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Login from "@/components/Login";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="bg-white text-black font">
      <div className="sticky top-0 z-20 shadow-md">
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
          />
        </div>
      )}

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
