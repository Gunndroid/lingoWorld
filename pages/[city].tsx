// pages/[city].tsx
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import CityInfo from "@/components/CityInfo";
import { cityData } from "@/utils/cityData";
import Meetups from "@/components/Meetups";
import MembersList from "@/components/MembersList";
import Link from "next/link";

type CityDataType = {
  name: string;
  country: string;
  description: string;
  continent: string;
  meetups: {
    title: string;
    time: string;
    location: string;
    description: string;
  }[];
  members: {
    name: string;
    bio: string;
    imgUrl: string;
  }[];
};

const blueButton =
  "mt-4 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm shadow-blue-500/50 dark:shadow-sm dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2";

const CityPage: React.FC = () => {
  const router = useRouter();
  const { city } = router.query;

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
        <div className="text-center m-20">Nothing found... </div>
        <CityInfo
          city={"missing"}
          selected={selected}
          setSelected={setSelected}
        />
        <div className="text-center">
          <Link href="/cities" className={blueButton}>
            {" "}
            Back to Cities
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="font-crimson-pro uppercase text-center text-4xl m-10 mt-14">
        {cityInfo.name}, <br />
        {cityInfo.country}
      </h1>
      <div className="text-center">
        <Link href="/cities" className={blueButton}>
          {" "}
          Back to Cities
        </Link>
      </div>
      <CityInfo
        city={cityInfo.name}
        selected={selected}
        setSelected={setSelected}
      />
      {/* Render the rest of the city information */}
      {/* <Meetups meetups={cityInfo.meetups} /> */}
      <div className="md:w-2/3 mx-auto">
        {selected === "meetups" && <Meetups meetups={cityInfo.meetups} />}
      </div>
      <div className="">
        {selected === "members" && <MembersList members={cityInfo.members} />}
      </div>
      {/* <MembersList members={cityInfo.members} /> */}
    </Layout>
  );
};

export default CityPage;
