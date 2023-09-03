// root/components/Meetups.tsx
import React, { useEffect, useState } from "react";

type Meetup = {
  title: string;
  time: string;
  location: string;
  description: string;
  image?: string;
};

type MeetupsProps = {
  meetups: Meetup[];
};

const Meetups: React.FC<MeetupsProps> = ({ meetups }) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const urls = meetups.map((meetup, index) => {
      const randomNum = Math.floor(Math.random() * 100) + 1;
      return `https://source.unsplash.com/random/?abstract,${randomNum}`;
    });
    setImageUrls(urls);
  }, [meetups]);

  return (
    <>
      <div className="grid md:grid-cols-2 m-6 md:m-10 gap-4 md:gap-10">
        {meetups.map((event, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden rounded-md shadow-sm border border-black  "
          >
            <img
              // src={event.image}
              src={imageUrls[index]}
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
