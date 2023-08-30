import React, { useState } from "react";
import { managers } from "../utils/managers";

interface ContactYourCityProps {
  setSelectedManager: React.Dispatch<React.SetStateAction<string>>;
}

const ContactYourCity: React.FC<ContactYourCityProps> = ({
  setSelectedManager,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedManagerName, setSelectedManagerName] = useState<string | null>(
    null
  );

  const filteredManagers = managers.filter((manager) =>
    manager.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleManagerSelect = (managerName: string) => {
    setSelectedManager(managerName);
    setSelectedManagerName(managerName); // Update this line
  };

  return (
    <div>
      {/* Search Box */}

      <div className="flex flex-col gap-2">
        {" "}
        <h1>1. Select Your Local Manager</h1>
        <input
          type="text"
          placeholder="Search by city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
      </div>
      {/* Contacts List */}
      <div className="grid gap-4 max-h-[80vh] overflow-y-scroll overflow-x-hidden border border-gray-400 p-4 md:p-10 rounded-lg">
        {filteredManagers.map((manager, index) => (
          // CARD
          <div
            onClick={() => handleManagerSelect(manager.name)} // changed to use handleManagerSelect
            key={index}
            className={`p-3 flex gap-4 sm:space-x-6 rounded-lg border border-gray-400 ${
              selectedManagerName === manager.name ? "bg-m-gold" : "bg-gray-50"
            } hover:cursor-pointer`}
          >
            <div className="flex-shrink-0 w-16 md:w-1/5  ">
              <img
                src={`https://source.unsplash.com/100x100/?portrait?${index}`}
                alt={`${manager.name}'s Avatar`}
                className="object-cover object-center w-full rounded-full dark:bg-gray-500 shadow-sm shadow-black"
              />
            </div>
            <div className="flex flex-col space-y-4 ">
              <div className="flex flex-col">
                <h2 id="name" className="text-2xl font-semibold">
                  {manager.name}
                </h2>

                <span id="city" className="text-black ">
                  {manager.city}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactYourCity;
