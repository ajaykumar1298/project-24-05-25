import { Component, useEffect, useState } from "react";

import RegionsTabs from "./components/RegionsTabs";
import Property from "./components/Property";
import FeatureCards from "./components/FeatureCards";
import img1 from "../public/img1.jpg";
import img2 from "../public/img2.jpg";
import img3 from "../public/img3.jpg";
import Header from "./components/Header";

function App() {
  let regionData = [
    {
      name: "All",
      slug: "",
    },
    {
      name: "Abhu Dhabi",
      slug: "abu dhabi",
    },
    {
      name: "Dubai",
      slug: "dubai",
    },
    {
      name: "Sharjah",
      slug: "sharjah",
    },
    {
      name: "Ajman",
      slug: "ajman",
    },
    {
      name: "Ras AL Khaima",
      slug: "ras al khaima",
    },
  ];
  let [tabs, setTabs] = useState(regionData);
  let [selectedTab, setSelectedTab] = useState(0);
  let selectRegion = regionData[selectedTab].slug;
  let [input, setInput] = useState("");
  let [data, setData] = useState([]);
  const featureData = [
    {
      title: "TruEstimate",
      desc: "Find out how much your property is worth",
      image: img1,
    },
    {
      title: "Search 2.0",
      desc: "Find homes by drive time",
      image: img2,
    },
    {
      title: "Map View",
      desc: "Search by preferred area",
      image: img3,
    },
  ];

  let fetchData = async () => {
    try {
      let response = await fetch(
        `api/api/properties?search=${!input.trim() ? selectRegion : input}`
      );
      let data = await response.json();
      setData(data);
      // console.log(data);
    } catch (error) {
      // console.log(error);
      setData([]);
    }
  };

  useEffect(() => {
    let timer;

    if (input) {
      timer = setTimeout(fetchData, 300);
    } else {
      fetchData();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [input, selectedTab]);
  return (
    <>
      <Header input={input} setInput={setInput} />
      {/* <Navbar />
      <HeroSection /> */}
      <FeatureCards featureData={featureData} />
      <h2 className="text-center text-2xl font-semibold mt-8">
        Browse New Projects in the UAE
      </h2>
      <RegionsTabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <Property data={data} />
    </>
  );
}

export default App;
