import React from "react";

function RegionsTabs({ tabs, selectedTab, setSelectedTab }) {
  //   console.log(tabs);
  return (
    <div className="flex justify-center gap-1 p-4">
      {tabs.map((tab, ind) => {
        return (
          <button
            key={ind}
            className={`px-4 py-1 rounded-md border ${
              selectedTab == ind ? "bg-blue-700 text-white" : "bg-white"
            }`}
            onClick={() => {
              setSelectedTab(ind);
            }}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}

export default RegionsTabs;
