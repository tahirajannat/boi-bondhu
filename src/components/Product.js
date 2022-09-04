import React from "react";
import Data from "../data";

export default function Product() {
  return (
    <div>
      {Data.map((index) => (
        <div className="grid grid-cols-12 gap-4 my-6 bg-gray-200">
          <div className="col-span-5">
            <img
              src={index.image}
              alt="ProductImage"
              className="h-32 w-full object-fill"
            />
          </div>
          <div className="col-span-7 text-left">
            <h2 className=" text-xl font-bold my-4">{index.product_title}</h2>
            {/* <p>ProductShort Description</p> */}
            <p className=" ">{index.author_name}</p>
            <span className="text-teal-500 text-xs">{index.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
