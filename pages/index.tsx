// import React, { useState } from "react";
// import "../app/globals.css";

// import About from "@/components/About";
// import Chef from "@/components/story/Chef";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Menu from "@/components/Menu";
// import Gallery from "@/components/Gallery";
// import StoryPage from "@/components/story/StoryPage";
// import Order from "@/components/Order";

// const HomePage: React.FC = () => {
//   const [currentView, setCurrentView] = useState("home");

//   return (
//     <div className="bg-white text-black font">
//       <div className="sticky top-0 z-20 shadow-md">
//         <Header setCurrentView={setCurrentView} />
//       </div>

//       {currentView === "home" && <About setCurrentView={setCurrentView} />}
//       {currentView === "menu" && <Menu setCurrentView={setCurrentView} />}
//       {currentView === "gallery" && <Gallery />}
//       {currentView === "story" && <StoryPage />}
//       {/* {currentView === "order" && <Order />} */}

//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

// pages/home.tsx
import React from "react";
import Layout from "@/components/Layout";
import About from "@/components/About";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default HomePage;
