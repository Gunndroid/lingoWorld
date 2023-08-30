/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
// import history from "../public/mundoLingo/mundolingo-history.jpg";
// type MenuProps = {
//   setCurrentView: React.Dispatch<React.SetStateAction<string>>;
// };

import history from "../public/mundoLingo/mundolingo-history.jpg";

const Menu: React.FC = () => {
  return (
    <div>
      <div className="relative border border-black  overflow-hidden h-40 md:h-44 mx-auto mb-10">
        <Image layout="fill" objectFit="cover" src={history} alt="image" />
      </div>
      <div className="flex flex-col justify-center px-10 md:px-40 md:py-10 pb-20">
        <h1 className="font-cinzel text-center text-4xl pb-6">History</h1>
        <p className="text-lg">
          The story so far...
          <br />
          <br /> <strong>In March 2011</strong> a foreigner lost in Buenos Aires
          observed the difficulty of befriending locals (despite their
          enthusiastically friendly nature towards foreigners). A problem was
          identified; A social convention was needed to unite locals and
          internationals. The first Mundo Lingo was organised on July 7th with
          the aim of offering Argentines an opportunity to practice languages
          and foreigners a chance to befriend the local Argentines.
          <br />
          <br />
          That same year,{" "}
          <strong>Mundo Lingo grew to some 300 monthly visits.</strong> A flag
          sticker format was devised to allow participants to self-organise
          without direct help from organisers. This would become the unique
          identifying feature of Mundo Lingo.
          <br />
          <br />
          By 2014 the format proved popular, receiving 2500+ monthly visits. We
          decided to export the &apos;buena onda&apos; to new cities starting in
          Cologne, London, Montreal.{" "}
          <strong>
            Over the next 5 years Mundo Lingo would open in yet more cities
            reaching 18K+ monthly visits across North + South America, Europe
            and Asia,
          </strong>{" "}
          as well as an online community of 100k&apos;s with dozens of
          volunteer-moderated community forums.
          <br />
          <br />
          In January 2020 we suspended events in Nanjing, other cities would
          quickly follow in just a few short weeks. We decided to use this
          down-time to take Mundo Lingo into a bigger mission of enabling
          communities to self-organise in cities around the world.
          <br />
          <br />
          <strong>In 2022 Mundo Lingo launched a new proposal</strong> to
          organise communities, establish consensus and promote solidarity, with
          an initial soft launch in Buenos Aires…
        </p>
      </div>
    </div>
  );
};

export default Menu;
