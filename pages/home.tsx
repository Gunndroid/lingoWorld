import React, { useState } from "react";
import "../app/globals.css";

import About from "@/components/About";
import Chef from "@/components/story/Chef";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import StoryPage from "@/components/story/StoryPage";

const HomePage: React.FC = () => {
  const [currentView, setCurrentView] = useState("home");

  return (
    <div className="bg-m-feldgrau text-black">
      <Header setCurrentView={setCurrentView} />

      {currentView === "home" && <About />}
      {currentView === "menu" && <Menu />}
      {currentView === "gallery" && <Gallery />}
      {currentView === "story" && <StoryPage />}

      <Footer />
    </div>
  );
};

export default HomePage;
