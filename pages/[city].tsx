// pages/[city].tsx
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import CityInfo from "@/components/CityInfo";
import { cityData } from "@/utils/cityData";
import Meetups from "@/components/Meetups";
import MembersList from "@/components/MembersList";
import Link from "next/link";
import QuestionsList from "@/components/QuestionsList";
import ProposalsList from "@/components/ProposalsList";
import Image from "next/image";

type CityDataType = {
  name: string;
  country: string;
  description: string;
  continent: string;
  meetups?: {
    title: string;
    time: string;
    location: string;
    description: string;
    image: string;
  }[];
  members?: {
    name: string;
    bio: string;
    imgUrl: string;
  }[];
  questions?: {
    name: string;
    question: string;
    imgUrl: string;
    answer: string;
  }[];
  proposals?: {
    name: string;
    proposal: string;
    imgUrl: string;
  }[];
  // members: {
  //   name: string;
  //   bio: string;
  //   imgUrl: string;
  // }[];
};

const blueButton =
  "mt-4 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm shadow-blue-500/50 dark:shadow-sm dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

const CityPage: React.FC = () => {
  const router = useRouter();
  const { city } = router.query;
  const imageUrl = `https://source.unsplash.com/featured/?${city},city&${Date.now()}`;

  const [selected, setSelected] = useState("meetups");
  const [cityInfo, setCityInfo] = useState<CityDataType | undefined>(undefined);

  useEffect(() => {
    if (city) {
      // Ensure city is a string before calling toLowerCase
      const cityStr = Array.isArray(city) ? city[0] : city;
      const data = cityData.find(
        (cityItem) => cityItem.name.toLowerCase() === cityStr.toLowerCase()
      );
      setCityInfo(data);
    }
  }, [city]);

  if (!cityInfo) {
    return (
      <Layout>
        <div className="relative border border-black w-full overflow-hidden h-40 md:h-44 mx-auto mb-10">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-crimson-pro uppercase text-center text-4xl text-black z-10 border border-black rounded-lg w-fit p-6 bg-white">
            {city}
          </h1>
          <Image
            layout="fill"
            objectFit="cover"
            src={imageUrl}
            alt="image"
            className="absolute md:-top-24 z-0"
          />
        </div>
        <div className="text-left ml-10">
          <Link href="/cities" className={blueButton}>
            {" "}
            Back to Cities
          </Link>
        </div>
        {/* <h1 className="font-crimson-pro uppercase text-center text-4xl m-10 mt-14">
          {city}
        </h1> */}
        <CityInfo
          city={"missing"}
          selected={selected}
          setSelected={setSelected}
        />

        <div className="text-center m-20">Nothing found... </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative border border-black w-full overflow-hidden h-40 md:h-52 mx-auto mb-10 bg-black">
        <h1 className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-crimson-pro uppercase text-center text-2xl md:text-4xl text-black z-10 border border-black rounded-md w-fit p-4 md:p-6 bg-white">
          {cityInfo.name}, <br />
          {cityInfo.country}
        </h1>
        <Image
          layout="fill"
          objectFit="cover"
          src={imageUrl}
          alt="image"
          className="absolute md:-top-24 z-0 opacity-40"
        />
      </div>

      <div className="mb-20">
        <div className="text-left ml-10">
          <Link href="/cities" className={blueButton}>
            {" "}
            Back to Cities
          </Link>
        </div>
        {/* <h1 className="font-crimson-pro uppercase text-center text-4xl  mt-14">
          {cityInfo.name}, <br />
          {cityInfo.country}
        </h1> */}
        <CityInfo
          city={cityInfo.name}
          selected={selected}
          setSelected={setSelected}
        />
        {/* conditionally rendered view based on selected button */}
        <div className="lg:w-2/3 mx-auto">
          {/* {selected === "meetups" && <Meetups meetups={cityInfo.meetups} />} */}
          {selected === "meetups" && cityInfo.meetups && (
            <Meetups meetups={cityInfo.meetups} />
          )}
        </div>
        <div className="">
          {selected === "members" && cityInfo.members && (
            <MembersList members={cityInfo.members} />
          )}
        </div>
        <div className="">
          {selected === "questions" && cityInfo.questions && (
            // <QuestionsList questions={cityInfo.questions} />
            <QuestionsList questions={cityInfo.questions} />
          )}
        </div>
        <div className="">
          {selected === "proposals" && cityInfo.proposals && (
            // <QuestionsList questions={cityInfo.questions} />
            <ProposalsList proposals={cityInfo.proposals} />
          )}
        </div>
        {/* <MembersList members={cityInfo.members} /> */}
      </div>
    </Layout>
  );
};

export default CityPage;
