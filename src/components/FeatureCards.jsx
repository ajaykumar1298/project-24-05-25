import React from "react";

function FeatureCards({ featureData }) {
  return (
    <div className="flex justify-center gap-4 p-6 h-65">
      {featureData.map((data, ind) => (
        <div
          key={ind}
          className="w-1/3 bg-white shadow rounded p-4 text-start "
          style={{
            backgroundImage: `url(${data.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <img src={f.image} alt={f.title} className="mx-auto h-24 mb-4" /> */}
          <h3 className="font-semibold text-3xl text-gray-800">{data.title}</h3>
          <p className="text-sm text-grey-600 ">{data.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards;
