import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Card({ data }) {
  return (
    <>
      {data.verified && (
        <span className="absolute top-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
          verified
        </span>
      )}
      <div className="border rounded shadow p-3 w-84">
        <img
          src={data.images[0]}
          alt="property"
          className="rounded h-36 object-cover w-full"
        />
        <p className="text-grey-800 text-2xl font-bold mt-2">{data.title}</p>
        <span className="text-blue-600 text-md font-bold mt-2 ">
          AED {data.price}K{" "}
        </span>
        <span className="text-gray-600  font-bold text-md mt-2">
          | {data.sqft} sq.ft{" "}
        </span>

        <p className="text-sm text-gray-600">{data.name}</p>
        <PersonIcon />
        <span className="text-sm text-gray-600">{data.seller.name}</span>
        <hr />
        <LocationOnIcon />
        <span className="text-sm text-gray-600">{data.address}</span>
        {/* <p className="text-xs">{data.location}</p> */}
      </div>
    </>
  );
}

export default Card;
