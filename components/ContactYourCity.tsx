import React, { useState } from "react";

const managers = [
  { name: "Sébastien Vigny", city: "Geneva" },
  { name: "Vitaly Berg", city: "Oslo" },
  { name: "Benji Moreira", city: "Cordoba" },
  { name: "Alexandre Quach-Hiep", city: "Paris" },
  { name: "Hồ Liam", city: "Saigon" },
  { name: "Samantha Encalada Rafael", city: "Lima" },
  { name: "Martin Javier Monteoliva Ramos", city: "Cordoba" },
  { name: "Simon Potvin", city: "Yangon" },
  { name: "Pann Thitsar", city: "Yangon" },
  { name: "Zhang Laurel", city: "Nanjing" },
  { name: "Polina Feofanova", city: "Rio de Janeiro" },
  { name: "Mirjam Tanner", city: "La Plata" },
  { name: "Olivia Sumich", city: "Auckland" },
  { name: "Kelly Chan", city: "Singapore" },
  { name: "Victoria Galmarini", city: "Buenos Aires" },
  { name: "ibelitze zambrano", city: "Lima" },
  { name: "Meigh Banchanurat", city: "Bangkok" },
  { name: "Mai Tran", city: "Hanoi" },
  { name: "ANTONIO NETO", city: "São Paulo" },
  { name: "Mélissa Dauber", city: "Paris" },
  { name: "Girish Bhagat", city: "London" },
  { name: "Effie Bobae Kim", city: "Daegu" },
  { name: "Israel Almaraz", city: "San Francisco" },
  { name: "Amanda Torres", city: "Philadelphia" },
  { name: "Minske Moltzen", city: "Wellington" },
  { name: "Hazal Parmaksiz", city: "Cologne" },
  { name: "Edgar Vargas", city: "Monterrey" },
  { name: "Paula Costa", city: "Porto" },
  { name: "Gina Melchner", city: "Amsterdam" },
  { name: "Igor Knezic", city: "Toronto" },
  { name: "Tony Visicontti", city: "Toronto" },
  { name: "Senote Keriakes", city: "Melbourne" },
];

export default function ContactYourCity() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredManagers = managers.filter((manager) =>
    manager.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col gap-2">
        {" "}
        <h1>Contact Your Local Manager</h1>
        <input
          type="text"
          placeholder="Search by city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid gap-4 h-[80vh] overflow-y-scroll border border-black p-10 rounded-lg">
        {filteredManagers.map((manager, index) => (
          <div
            key={index}
            className="max-w-md p-4 sm:flex sm:space-x-6 rounded-xl border border-black "
          >
            <div className="flex-shrink-0 w-1/3">
              <img
                src={`https://source.unsplash.com/100x100/?portrait?${index}`}
                alt={`${manager.name}'s Avatar`}
                className="object-cover object-center w-full rounded-full dark:bg-gray-500"
              />
            </div>
            <div className="flex flex-col space-y-4 ta">
              <div className="flex flex-col">
                <h2 id="name" className="text-2xl font-semibold">
                  {manager.name}
                </h2>

                <span id="city" className="text-sm ">
                  {manager.city}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
