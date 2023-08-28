// Dropdown.tsx
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";

interface DropdownProps {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

const Dropdown: React.FC<DropdownProps> = ({ setCurrentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const pinkButton =
    "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-sm shadow-pink-500/50 dark:shadow-sm dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

  return (
    <div className="relative ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-black border text-white p-2 rounded-md w-12 h-12"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z"
              fill="#1C274C"
            ></path>{" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z"
              fill="#1C274C"
            ></path>{" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z"
              fill="#1C274C"
            ></path>{" "}
          </g>
        </svg>
      </button>

      {/* {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg   shadow-md shadow-gray-400 bg-white">
          <div className="flex flex-col p-2 gap-1">
            <button
              onClick={() => setCurrentView("home")}
              className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              Home
            </button>
            <button
              onClick={() => setCurrentView("menu")}
              className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              Menu
            </button>
            <button
              onClick={() => setCurrentView("gallery")}
              className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              Gallery
            </button>
            <button
              onClick={() => setCurrentView("story")}
              className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              Story
            </button>
            <a
              href="tel:+2243889024"
              className="block px-4 py-2 text-white bg-m-red hover:bg-white hover:text-m-red hover:border hover:border-black text-center rounded-lg"
            >
              Call
            </a>
          </div>
        </div>
      )} */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-md shadow-gray-400 bg-white">
          <div className="flex flex-col p-2 gap-1">
            <Link href="/home" passHref>
              <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                Home
              </button>
            </Link>
            <Link href="/cities" passHref>
              <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                Cities
              </button>
            </Link>
            <Link href="/history" passHref>
              <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                History
              </button>
            </Link>
            <Link href="/philosophy" passHref>
              <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                Philosophy
              </button>
            </Link>
            <Link href="/joinus" passHref>
              <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                Join Us
              </button>
            </Link>
            <Link href="/contact" passHref>
              <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                Contact
              </button>
            </Link>

            {/* <a className="block px-4 py-2 text-white bg-m-red hover:bg-white hover:text-m-red hover:border hover:border-black text-center rounded-lg">
              Contact
            </a> */}
            <button className={pinkButton}>Log In</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
