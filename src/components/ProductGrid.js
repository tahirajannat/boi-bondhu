import React from "react";
import Data from "../data";
import Product from "./Product";

export default function ProductGrid() {
  return (
    <div className="container mx-auto  px-4 py-10">
      <div className="grid grid-cols-12 gap-4">
        {Data.map((index) => (
          <div className="col-span-4">
            <Product />
          </div>
        ))}
      </div>
      <button class="bg-yellow-500 hover:bg-yellow-600 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
        Load More
      </button>
    </div>
  );
}
