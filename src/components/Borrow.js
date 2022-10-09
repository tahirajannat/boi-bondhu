import React from "react";
import Data from "../data";

export default function Borrow() {
  return (
    <div>
      <div class=" items-left bg-white ">
        <div class="container mx-auto py-20">
          <div class="w-full mb-10 text-left">
            <h1 class="text-3xl text-gray-700 font-bold">
              Borrow Your Choosen Books
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {Data.slice(0, 4).map((index, key) => (
              <div class=" col-span-3 ">
                <div class="bg-indigo-100 rounded-lg m-h-56  transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                  <figure class="mb-3 pt-3">
                    <img
                      src={index.image}
                      alt=""
                      class="h-52  ml-auto mr-auto"
                    />
                  </figure>
                  <div class="rounded-b-lg px-4 py-3 bg-gray-600 flex flex-col text-left">
                    <div>
                      <h5 class="text-white text-xl font-bold leading-none">
                        iPhone 11
                      </h5>
                    </div>
                    <div class="flex items-center mt-2">
                      <div class="text-sm text-white font-light">Travel</div>
                      <button class="rounded-md bg-yellow-600 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none px-4 py-2 flex ml-auto transition duration-300">
                        Borrow Books
                      </button>
                    </div>
                    <div class="py-2 text-left border-t mt-2">
                      <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">
                        #photography
                      </span>
                      <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">
                        #travel
                      </span>
                      <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                        #winter
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
