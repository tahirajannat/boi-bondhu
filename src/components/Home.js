import React from "react";
// import BottomNav from "./BottomNav";
// import ItemsCard from "./ItemsCard";
import ProductCard from "./ProductCard";
import Slider from "./Slider";
import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <>
      <Slider />
      {/* <BottomNav /> */}
      <div className="container mx-auto my-16">
        <div class="w-full mb-10 text-center">
          <h1 class="text-3xl text-black font-bold">Best Reviewed</h1>

          <div className="border-b-4 border-red-400 w-24 mt-4 text-center mx-auto"></div>
        </div>
        <ProductCard />
      </div>

      {/* <ItemsCard /> */}
      <Testimonial />
    </>
  );
}
