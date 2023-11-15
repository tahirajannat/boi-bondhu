import React, { useEffect, useRef, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const featuredProducts = [
  "/images/banner-1.jpg",
  "/images/banner-2.jpg",
  "/images/banner-3.jpg",
  "/images/banner-4.jpg",
];

let count = 0;
let slideInterval;

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  let myImages = "../";
  useEffect(() => {
    slideRef.current.addEventListener("animationed", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);
    startSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    // slideInterval = setInterval(() => {
    //   handleOnNext();
    // }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNext = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  console.log(currentIndex);

  const handleOnPrev = () => {
    const bannersLength = featuredProducts.length;
    count = (currentIndex + bannersLength - 1) % bannersLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  // console.log(slideRef);

  return (
    <div ref={slideRef} className="w-full select-none relative aspect-h-9">
      <img
        src={featuredProducts[currentIndex]}
        alt=""
        className="h-96 w-full object-center object-cover brightness-50 aspect-h-9 "
      />

      <div className="absolute w-full top-1/2	transform  -translate-y-1/2 py-2 px-3 flex justify-between items-center">
        <button onClick={handleOnPrev} className="bg-white p-3">
          <FaLongArrowAltLeft className="text-teal-500" />
        </button>
        <button onClick={handleOnNext} className="bg-white p-3">
          <FaLongArrowAltRight className="text-teal-500" />
        </button>
      </div>

      {/* <div className="flex flex-wrap projects">
        {resources.map((project) => (
          <a
            href={project.link}
            key={project.image}
            className="lg:w-1/6 sm:w-1/3 w-1/2 w-100 p-1"
          >
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-260 object-cover object-center"
                src={project.imageUrl}
              />
              <div className=" text-white overflow-hidden px-2 py-2 relative z-10 w-full h-260 border-4  bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition duration-700 ease-in-out delay-110 hover:-translate-y-1 hover:scale-150 ">
                <div children="mt-40">
                  <h2 className="tracking-widest text-sm font-serif font-medium text-green-400 mb-1 mt-40">
                    {project.subtitle}
                  </h2>
                  <h1 className="font-serif text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div> */}
    </div>
  );
}
