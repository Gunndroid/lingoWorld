// root/pages/cityInfoPage.tsx
import CityInfo from "@/components/CityInfo";
import Layout from "@/components/Layout";
import Meetups from "@/components/Meetups";
import MemberList from "@/components/MembersList";
import React, { useState } from "react";

export default function cityInfoPage() {
  // const [selected, setSelected] = useState("meetups");

  return (
    <div>
      <Layout>
        <h1 className="font-crimson-pro uppercase text-center text-4xl m-10 mt-14   ">
          City Name
        </h1>{" "}
        {/* <CityInfo city={city} selected={selected} setSelected={setSelected} />        <div className="w-2/3 mx-auto">
          {selected === "meetups" && <Meetups />}
        </div> */}
        {/* {selected === "members" && <MemberList />} */}
        {/* {selected === "meetups" && <Meetups />}
        {selected === "meetups" && <Meetups />} */}
        {/* <Manager /> */}
      </Layout>
    </div>
  );
}
