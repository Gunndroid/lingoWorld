import React from "react";

type MenuProps = {
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
};

const Menu: React.FC<MenuProps> = ({ setCurrentView }) => {
  return (
    <div className="flex flex-col justify-center my-10 border border-black bg-m-white md:w-1/2 rounded-lg p-4 md:mx-auto mx-4">
      <h1 className="font-cinzel text-center p-6 text-4xl">MENU</h1>
      <img
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1134,h=5752,fit=crop/YD0809eXrXFNB68B/webmenu-1-A8525V9v13CWqnxP.png"
        alt="Menu"
      />

      <div className="flex items-center justify-center mt-4">
        <a
          type="button"
          href="tel:+1234567890"
          className="mx-auto mt-4 text-center w-3/4 rounded border border-m-black bg-m-red px-12 py-3 md:text-lg text-sm font-medium text-white hover:bg-white hover:text-m-red focus:outline-none"
        >
          Click to Call Now <br /> +224-388-9024
        </a>
      </div>
    </div>
  );
};

export default Menu;
