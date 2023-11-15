import { Carousel } from "@trendyol-js/react-carousel";
import React from "react";
import Testimonial from "./Testimonial";

export default function TestimonialSlider() {
  return (
    <div>
      {/* <Carousel show={3.5} slide={3} swiping={true}>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </Carousel> */}
      <Carousel show={3.5} slide={2} transition={0.5}>
        <Testimonial color="#f27a1a">We love Trendyol orange</Testimonial>
        <Testimonial color="#d53f8c">This is our github</Testimonial>
        <Testimonial color="#16be48">We love Trendyol green</Testimonial>
        <Testimonial color="#3f51b5">This is our website</Testimonial>
      </Carousel>
    </div>
  );
}
