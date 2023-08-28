// pages/Cities.tsx
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { cities } from "@/utils/cities";

const CitiesPage: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredCities = cities.filter(
    (city) =>
      city.name.toLowerCase().includes(search.toLowerCase()) ||
      city.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <h1 className="font-cinzel text-center p-6 text-4xl mt-10">
        Mundo Lingo Cities
      </h1>
      <p className="text-center text-xl">
        Here is a list of cities where our events take place
      </p>
      <div className="m-20 ">
        <div className="flex flex-col mb-4 gap-2">
          <label>Search</label>
          <input
            type="text"
            placeholder="Search by city or country"
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4 p-2 w-1/2 rounded-md"
          />
        </div>
        <div className="grid grid-cols-3 gap-6 ">
          {filteredCities.map((city, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md w-72 h-72 bg-cover bg-center overflow-hidden border-black border"
              style={{
                backgroundImage: `url(https://source.unsplash.com/random/300x300/?${city.name})`,
              }}
            >
              {/* Shape Div */}
              <div className="flex flex-col justify-center items-center h-full p-6 space-y-8 bg-black bg-opacity-40 text-white">
                {/* Text Divs */}
                <div className="space-y-2 text-center">
                  {/* City */}
                  <h2
                    id="city"
                    className="text-2xl font-semibold tracking-wide text-shadow"
                  >
                    <Link href={`/cities/${city.name}`} legacyBehavior>
                      {city.name}
                    </Link>
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
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CitiesPage;
