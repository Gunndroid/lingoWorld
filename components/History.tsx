/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
// import history from "../public/mundoLingo/mundolingo-history.jpg";
// type MenuProps = {
//   setCurrentView: React.Dispatch<React.SetStateAction<string>>;
// };

// import history from "../public/mundoLingo/mundolingo-history.jpg";

const Menu: React.FC = () => {
  return (
    <div className="mb-20">
      <div className="relative border border-black  overflow-hidden h-40 md:h-44 mx-auto mb-10">
        <Image
          layout="fill"
          objectFit="cover"
          src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
          alt="image"
        />
      </div>
      {/* <div className="flex flex-col justify-center px-10 md:px-40 md:py-10">
        <h1 className="font-crimson-pro text-center text-4xl pb-6 uppercase">
          History
        </h1>
        <p className="text-lg">
          The story so far...
          <br />
          <br /> <strong>In March 2011</strong> a foreigner lost in Buenos Aires
          observed the difficulty of befriending locals (despite their
          enthusiastically friendly nature towards foreigners). A problem was
          identified; A social convention was needed to unite locals and
          internationals. The first LingoWorld was organised on July 7th with
          the aim of offering Argentines an opportunity to practice languages
          and foreigners a chance to befriend the local Argentines.
          <br />
          <br />
          That same year,{" "}
          <strong>LingoWorld grew to some 300 monthly visits.</strong> A flag
          sticker format was devised to allow participants to self-organise
          without direct help from organisers. This would become the unique
          identifying feature of LingoWorld.
          <br />
          <br />
          By 2014 the format proved popular, receiving 2500+ monthly visits. We
          decided to export the &apos;buena onda&apos; to new cities starting in
          Cologne, London, Montreal.{" "}
          <strong>
            Over the next 5 years LingoWorld would open in yet more cities
            reaching 18K+ monthly visits across North + South America, Europe
            and Asia,
          </strong>{" "}
          as well as an online community of 100k&apos;s with dozens of
          volunteer-moderated community forums.
          <br />
          <br />
          In January 2020 we suspended events in Nanjing, other cities would
          quickly follow in just a few short weeks. We decided to use this
          down-time to take LingoWorld into a bigger mission of enabling
          communities to self-organise in cities around the world.
          <br />
          <br />
          <strong>In 2022 LingoWorld launched a new proposal</strong> to
          organise communities, establish consensus and promote solidarity, with
          an initial soft launch in Buenos Aires…
        </p>
      </div> */}
      <div className="flex flex-col justify-center px-10 md:px-40 md:py-10">
        <h1 className="font-crimson-pro text-center text-4xl pb-6 uppercase">
          History
        </h1>
        <p className="text-lg">
          A Journey Through Connections...
          <br />
          <br /> <strong>In 2011</strong>, in the bustling heart of MetroCity, a
          traveler realized the challenge of connecting with natives, despite
          their welcoming demeanor. The inaugural &apos;LingoWorld&apos; was
          held in July, aiming to offer natives an avenue for cultural exchanges
          and newcomers a chance to connect deeply with the city.
          <br />
          <br />
          The same year saw{" "}
          <strong>
            LingoWorld gaining traction with 300+ attendees monthly
          </strong>
          . A badge system was introduced, enabling attendees to network
          effortlessly, becoming the hallmark of LingoWorld.
          <br />
          <br />
          Come 2014, the concept had garnered a following of 2500 monthly
          enthusiasts. LingoWorld expanded its horizons to cities like NeoTown,
          EastVille, and TerraPort.{" "}
          <strong>
            Over half a decade, our presence spread across continents,
            witnessing 18K monthly visitors,
          </strong>{" "}
          and an online community in the hundreds of thousands, supported by
          numerous dedicated volunteers.
          <br />
          <br />
          2020 saw a pause in our gatherings, with the first halt in SunCity,
          followed by others. This period was utilized to envision a broader
          scope for LingoWorld, focusing on empowering global communities to
          come together.
          <br />
          <br />
          <strong>By 2022, LingoWorld unveiled an initiative</strong> centered
          on community building, consensus, and unity, piloted in MetroCity...
        </p>
      </div>
    </div>
  );
};

export default Menu;
