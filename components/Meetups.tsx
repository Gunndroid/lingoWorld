// root/components/Meetups.tsx
import React from "react";

type Meetup = {
  title: string;
  time: string;
  location: string;
  description: string;
};

type MeetupsProps = {
  meetups: Meetup[];
};

const Meetups: React.FC<MeetupsProps> = ({ meetups }) => {
  //   const events = [
  //     {
  //       title: "Mundo Lingo Thursdays",
  //       time: "Every Thursday at 9 PM",
  //       location: "📍Trova · Honduras 5903",
  //       description:
  //         "Locals and expats meet every week to chat, meet new people and share ideas. It's free and everyone is welcome",
  //     },
  //     {
  //       title: "Mundo Lingo Palermo",
  //       time: "Every Wednesday at 9 PM",
  //       location: "📍Baum Palermo · José A. Cabrera 4427",
  //       description:
  //         "Locals and expats meet every week to chat, meet new people and share ideas. It's free and everyone is welcome",
  //     },
  //     {
  //       title: "Mundo Lingo San Telmo",
  //       time: "Every Tuesday at 9 PM",
  //       location: "📍Temple Trastienda, Balcarce 470",
  //       description:
  //         "Locals and expats meet every week to chat, meet new people and share ideas. It's free and everyone is welcome",
  //     },
  //     {
  //       title: "Mundo Lingo BA - Chacarita",
  //       time: "Every Friday at 9 PM",
  //       location: "📍Chacarita",
  //       description:
  //         "100s of people from around the 🌎 meet weekly to socialise, have a drink, and meet foreign/local people of all ages. It's chilled, fun and free. Connect with us 👉 linktr.ee/mundolingo",
  //     },
  //   ];

  return (
    <>
      <div className="grid grid-cols-2 m-6 md:m-10 gap-4 md:gap-10">
        {meetups.map((event, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden rounded-md shadow-sm border border-black  "
          >
            <img
              src="https://images.unsplash.com/photo-1550096141-7263640aa48c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tbXVuaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
              alt="Meetup Image"
              className="h-60 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-white">
              <h2 className="text-3xl font-bold">{event.title}</h2>
              <p className="my-2">{event.time}</p>
              <p className="my-2">{event.location}</p>
              <p className="my-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Meetups;
