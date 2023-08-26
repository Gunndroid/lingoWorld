/* eslint-disable @next/next/no-img-element */

import React, { Dispatch, SetStateAction, useState } from "react";
import Dropdown from "./Dropdown";

// Define the prop types for the Header component
interface HeaderProps {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

export default function Header({ setCurrentView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-white p-4">
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="flex h-fit items-center justify-between">
            {/* Logo */}
            <div className="md:flex md:items-center md:gap-12 w-2/12 sm:w-1/12">
              <button className="block text-mesaku-main">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=166,fit=crop,q=95/YD0809eXrXFNB68B/smalllogowhite-YyvXvBLz7lh3eZ9q.png"
                  alt="sushi image"
                  onClick={() => setCurrentView("home")}
                />
              </button>
            </div>

            {/* Desktop header links */}
            <div className="hidden sm:block">
              <nav aria-label="Global">
                <div className="flex items-center gap-6 text-sm ">
                  <button onClick={() => setCurrentView("home")}>Home</button>
                  <button onClick={() => setCurrentView("menu")}>Menu</button>
                  <button onClick={() => setCurrentView("gallery")}>
                    Gallery
                  </button>
                  <button onClick={() => setCurrentView("story")}>Story</button>
                  <div className="">
                    <a
                      type="button"
                      href="tel:+2243889024"
                      className="rounded border border-m-black bg-m-red p-2 text-md font-medium text-white hover:bg-white hover:text-m-red focus:outline-none hover:border-m-red"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </nav>
            </div>

            {/* dropdown */}

            <div className="sm:hidden">
              <Dropdown setCurrentView={setCurrentView} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
