import React, { Dispatch, SetStateAction, useState } from "react";

// Define the prop types for the Header component
interface HeaderProps {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

export default function Header({ setCurrentView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-white p-4">
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12 w-16">
              <button className="block text-mesaku-main">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=166,fit=crop,q=95/YD0809eXrXFNB68B/smalllogowhite-YyvXvBLz7lh3eZ9q.png"
                  alt="sushi image"
                  onClick={() => setCurrentView("home")}
                />
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`transition duration-300 ${
                isOpen ? "block" : "hidden"
              } md:block`}
            >
              <nav aria-label="Global">
                <div className=" items-center gap-6 text-sm ">
                  <button onClick={() => setCurrentView("home")}>Home</button>
                  <button onClick={() => setCurrentView("menu")}>Menu</button>
                  <button onClick={() => setCurrentView("gallery")}>
                    🍣 Gallery
                  </button>
                  <button onClick={() => setCurrentView("story")}>Story</button>
                  <div className="">
                    <a
                      type="button"
                      href="tel:+1234567890"
                      className="rounded border border-m-black bg-m-red p-2 text-md font-medium text-white hover:bg-white hover:text-m-red focus:outline-none hover:border-m-red"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
