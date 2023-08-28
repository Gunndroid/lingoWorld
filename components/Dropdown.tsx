// Dropdown.tsx
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";

interface DropdownProps {
  setCurrentView: Dispatch<SetStateAction<string>>;
}

const Dropdown: React.FC<DropdownProps> = ({ setCurrentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-black border text-white px-2 py-2 rounded-lg w-14 h-14"
      >
        <svg
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          //   xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          //   class="iconify iconify--noto"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M63.4 62.24S7 67.27 7.26 71.11s.93 17.87 4.37 21.98s16.42 12.18 26.22 17.34s27.67 13.9 37.6 13.64c9.93-.26 27.94-16.02 28.73-20.12c.79-4.1-.26-18.8-.26-18.8L63.4 62.24z"
              fill="#c9cabb"
            ></path>
            <path
              d="M44.6 29.4l-17.34 5.96s.44 5.07 1.32 8.47c1.06 4.1 3.57 13.77 12.05 17.34c8.47 3.57 54.81 13.9 57.59 13.11c2.78-.79 11.39-7.81 14.56-10.46c3.18-2.65-30.72-36.67-30.72-36.67L44.6 29.4z"
              fill="#c9cabb"
            ></path>
            <path
              d="M51.75 28.08l-19.99 4.1s2.38 18.93 6.49 21.98s53.49 15.49 56.53 15.09c3.05-.4 14.3-8.74 14.3-8.74s3.05-10.59 2.91-10.99c-.13-.39-60.24-21.44-60.24-21.44z"
              fill="#ffffff"
            ></path>
            <path
              d="M12.17 72.43s.79 14.3 2.78 16.81c1.99 2.52 12.84 11.12 27.14 18.01s28.07 11.12 33.63 11.25c5.56.13 22.51-13.24 23.83-15.89S98.09 85 98.09 85L12.17 72.43z"
              fill="#ffffff"
            ></path>
            <path
              d="M24.74 39.59c4.53 2.07 7.55-7.02 21.45-7.15c13.9-.13 26.48 7.28 35.22 11.65s26.74 18.93 32.17 20.52c5.43 1.59 10.46-3.84 10.33-11.12c-.13-7.28-3.18-26.88-23.04-39.59S55.37 2.1 40.01 9.51C24.6 16.97 16.23 35.7 24.74 39.59z"
              fill="#ff6110"
            ></path>
            <path
              d="M37.43 40.35c.21 1.55 2.33 1.75 4.56 1.38c1.64-.27 3.82-1.11 3.5-2.97c-.23-1.37-2.81-1.75-4.72-1.32s-3.55 1.37-3.34 2.91z"
              fill="#d4d3d4"
            ></path>
            <path
              d="M74.95 50.57c-.31 1.84 1.96 2.54 4.4 2.81c2.44.26 4.24.21 4.61-1.54c.37-1.75-2.12-2.6-3.97-2.81s-4.73-.36-5.04 1.54z"
              fill="#d4d3d4"
            ></path>
            <path
              d="M90.9 56.51c-1.14.99-.69 2.54 1.54 4.56c2.23 2.01 3.71 2.01 4.56 1.06c.85-.95-.53-3.18-1.8-4.35c-1.28-1.16-3.09-2.33-4.3-1.27z"
              fill="#d4d3d4"
            ></path>
            <path
              d="M16.76 85.18c-1.36 1.6-.05 3.5 2.28 5.46s4.27 3.8 5.72 2.38c1.96-1.91-1.01-4.56-2.65-5.99c-1.64-1.43-3.86-3.6-5.35-1.85z"
              fill="#d4d3d4"
            ></path>
            <path
              d="M26.2 85.6c-.7 1.29.09 2.67 2.49 3.87c2.33 1.17 3.6 1.11 4.4-.16s-1.06-3.02-2.86-3.82c-1.81-.79-3.35-1.16-4.03.11z"
              fill="#d4d3d4"
            ></path>
            <path
              d="M28.21 96.01c-.09 1.5.45 2.68 5.02 3.12c4.57.45 5.43-.95 5.47-2.12c.06-1.67-1.56-2.62-4.91-2.85c-3.35-.22-5.47-.05-5.58 1.85z"
              fill="#d4d3d4"
            ></path>
            <path
              d="M31.38 37.22c-.53-2.82-1.15-6.63-.27-11.24c1.4-7.35 6.75-14.2 15.91-19.17c4.08-1.33 8.89-2.12 12.71-2.46c1.44-.13 2.74-.19 3.81-.2c-2.19.71-6.87 1.8-11.49 3.96c-9.8 4.58-15.49 11.44-16.79 18.27c-.62 3.26-.5 6.3-.18 8.63c-1.3.73-2.64 1.48-3.7 2.21z"
              fill="#fe8e6e"
            ></path>
            <path
              d="M53.64 33.05c-.03-3.42.68-8.18 4.13-12.15C63.46 14.35 72.5 11 78.29 9.45c3.05-.82 6.58-1.32 10.02-1.61c1.55.53 4.35 1.53 7.77 3.31c-4.39-.06-10.04.2-14.77 1.47c-9.1 2.45-16.64 6.47-20.29 10.67c-2.95 3.39-3.4 7.73-3.29 10.64c-1.69-.4-2.72-.62-4.09-.88z"
              fill="#fe8e6e"
            ></path>
            <path
              d="M73.26 39.96c1.04-3.01 3-6.81 6.72-9.87c9.67-7.94 20.18-8.85 23.45-9.19c2.03-.21 4.03-.31 5.84-.33c1.24 1.2 2.77 2.83 3.65 3.97c-2.22-.1-5.16-.11-8.18.22c-2.13.23-13.75 1.7-21.79 8.3c-3.26 2.68-5.01 6.15-5.94 8.8c-1.3-.64-2.19-1.13-3.75-1.9z"
              fill="#fe8e6e"
            ></path>
            <path
              d="M91.01 50.03c1.5-2.22 4.15-5.5 8.12-8.07c6.64-4.31 12.71-5.78 20.16-5.78c.23 0 .46 0 .69.01c.73 1.61 1.22 3.11 1.56 4.1c-.7-.07-1.45-.11-2.25-.11c-6.63 0-12.01 1.46-17.96 5.32c-3.39 2.2-5.7 4.99-6.99 6.83c-1.6-1.09-2.59-1.77-3.33-2.3z"
              fill="#fe8e6e"
            ></path>
            <path
              d="M30.37 19.98c.98.53.62 3.05-.62 4.96c-1.24 1.9-2.52 3.41-3.94 2.74c-1.42-.66-.44-3.72.44-5.13c.89-1.42 2.49-3.45 4.12-2.57z"
              fill="#f6fffe"
            ></path>
            <path
              d="M49.76 16.4c1.94 2.22-1.77 3.76-1.99 5.84c-.22 2.08 1.53 1.21 1.42 3.41c-.13 2.52-9.25 4.29-10.49-.22c-1.25-4.52 8.36-12.13 11.06-9.03z"
              fill="#f6fffe"
            ></path>
            <path
              d="M70.19 21.68c-1.47-1.51-5.18-.22-7.35 2.08c-2.17 2.3-2.74 6.28 1.19 7.74c3.94 1.46 4.87-.71 4.6-1.64c-.17-.61-.66-2.04-.09-3.05c.59-1.01 3.42-3.31 1.65-5.13z"
              fill="#f6fffe"
            ></path>
            <path
              d="M40.59 57.91S5.04 62.03 4.33 65.3c-.84 3.88-.19 6.75 1.38 8.67c2.72 3.33 14.01 4.51 29.2 11.66c13.83 6.51 19.37 10.02 27.5 14.14c8.13 4.12 14.14 5.79 20.04 4.34c5.9-1.45 12.69-3.9 18.37-8.46c4.29-3.45 5.84-8.32 5.45-13.25c-.33-4.2-2.56-8.68-5.34-10.91c-2.79-2.23-60.23-14.03-60.34-13.58z"
              fill="#cc1935"
            ></path>
            <path
              d="M31.57 47.33C11.2 51.11 3.89 63.04 4.38 65.69c.31 1.67 4.57.84 21.19 6.69c24.05 8.46 43.22 18.54 50.01 19.66c9.34 1.53 18.87-3.82 22.6-6.57c6.03-4.45 6.75-9.08 4.53-12.08c-2.24-3.01-15.25-15.39-34.62-22.28c-15.44-5.48-25.45-5.84-36.52-3.78z"
              fill="#ff605f"
            ></path>
            <path
              d="M17.16 55.13c-2.32-.26-10.7 4.99-7.74 9.71c2.97 4.73 16.93 4.04 17.23.56c.35-4.01-7.82-4-8.98-5.72c-1.16-1.71 2.22-4.24-.51-4.55z"
              fill="#f9ffff"
            ></path>
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
            <Link href="/history" passHref>
              <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                Menu
              </button>
            </Link>
            <Link href="/joinus" passHref>
              <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                Gallery
              </button>
            </Link>
            <Link href="/philosophy" passHref>
              <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg">
                Story
              </button>
            </Link>
            <a
              href="tel:+2243889024"
              className="block px-4 py-2 text-white bg-m-red hover:bg-white hover:text-m-red hover:border hover:border-black text-center rounded-lg"
            >
              Call
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
