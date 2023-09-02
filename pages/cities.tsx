// pages/Cities.tsx
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { cityData } from "@/utils/cityData";
import Image from "next/image";

type City = {
  name: string;
  country: string;
  description: string;
  continent: string;
  iconImage: string;
};

const CitiesPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid"); // Add this line to manage the view state

  const pinkButton =
    " text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-sm shadow-pink-500/50 dark:shadow-sm dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2";

  const blueButton =
    " text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm shadow-blue-500/50 dark:shadow-sm dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2";

  const filteredCities = cityData.filter(
    (city) =>
      city.name.toLowerCase().includes(search.toLowerCase()) ||
      city.country.toLowerCase().includes(search.toLowerCase())
  );

  // Add this function to sort the cities by continent and then alphabetically within that continent
  const sortedCities = [...filteredCities].sort((a, b) => {
    if (a.continent < b.continent) return -1;
    if (a.continent > b.continent) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  // Group cities by continent
  const groupedCities = sortedCities.reduce<Record<string, any[]>>(
    (groups, city) => {
      const key = city.continent;
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(city);
      return groups;
    },
    {}
  );

  return (
    <Layout>
      <div className="mb-20">
        {/* <div className="relative border border-black   overflow-hidden h-40 md:h-44 mx-auto mb-10">
          <Image
            layout="fill"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1615362217069-91c71091e4a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2145&q=80"
            alt="image"
            className="absolute md:-top-24"
          />
        </div> */}
        {/* Text */}
        <div className="mb-6">
          <h1 className="font-crimson-pro uppercase text-center text-4xl mt-14 pb-2 px-4">
            Mundo Lingo Cities
          </h1>
          <p className="text-center md:text-xl">
            Here is a list of cities where our events take place
          </p>
        </div>

        <div className="flex flex-row justify-center mb-10 mx- md:mx-12 gap-2 md:gap-4 ">
          {/* <label>Search</label> */}
          <div className="">
            <input
              type="text"
              placeholder="Search by city or country"
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-md md:w-60 "
            />
          </div>
          {/* Button */}
          <div className="flex flex-row text-center ">
            <button onClick={() => setView("grid")} className={pinkButton}>
              Grid View
            </button>
            <button onClick={() => setView("list")} className={blueButton}>
              List View
            </button>
          </div>
        </div>
        {view === "grid" ? (
          <div className="m-8 md:mx-20 ">
            {/* <div className="flex flex-col mb-4 gap-2">
              <label>Search</label>
              <input
                type="text"
                placeholder="Search by city or country"
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4 p-2 md:w-1/2 rounded-md"
              />
            </div> */}
            {/* GridView */}
            <div className="grid grid-cols-2  md:grid-cols-3 gap-6 ">
              {filteredCities.map((city: City, index: number) => (
                <Link key={index} href={`/${city.name}`} legacyBehavior>
                  {/* <a
                    className="rounded-xl shadow-md md:w-72 md:h-72 bg-cover bg-center overflow-hidden border-black border mx-auto"
                    style={{
                      backgroundImage: `url(https://source.unsplash.com/random/300x300/?${city.name.replace(
                        /\s/g,
                        ""
                      )})`,
                    }}
                  > */}
                  <a
                    className="rounded-xl shadow-md md:w-50 md:h-50 lg:w-72 lg:h-72 bg-cover bg-center overflow-hidden border-black border mx-auto"
                    style={{
                      backgroundImage: `url(${city.iconImage})`,
                    }}
                  >
                    {/* Shape Div */}
                    <div className="flex flex-col justify-center items-center h-full p-6 space-y-8 bg-black bg-opacity-50 text-white">
                      {/* Text Divs */}
                      <div className="space-y-2 text-center">
                        {/* City */}
                        <h2
                          id="city"
                          className="text-2xl font-semibold tracking-wide text-shadow"
                        >
                          {city.name}
                        </h2>
                        {/* Country */}
                        <h3
                          id="country"
                          className="text-xl font-semibold tracking-wide text-shadow"
                        >
                          {city.country}
                        </h3>
                        {/* Desc */}
                        <p id="description" className="text-shadow">
                          {city.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          // List View
          <div className="m-8 md:mx-20 ">
            <ul className="mb-20">
              {/* <div className="flex flex-col mb-4 gap-2">
                <label>Search</label>
                <input
                  type="text"
                  placeholder="Search by city or country"
                  onChange={(e) => setSearch(e.target.value)}
                  className="mb-4 p-2 md:w-1/2 rounded-md"
                />
              </div> */}
              {Object.entries(groupedCities).map(([continent, cityData]) => (
                <li key={continent}>
                  <h2 className="text-2xl m-4 mt-10 text-center">
                    {continent}
                  </h2>
                  {cityData.map((city: City, index: number) => (
                    <Link key={index} href={`/${city.name}`} legacyBehavior>
                      <span className="text-xl my-2.5 flex border border-gray-400 rounded-md p-2 md:w-1/2 w-11/12 mx-auto hover:cursor-pointer">
                        {city.name}, {city.country}
                      </span>
                    </Link>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CitiesPage;
