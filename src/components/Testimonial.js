import React from "react";

export default function Testimonial() {
  return (
    <div class="bg-white my-10 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
      <div class="sm:flex sm:items-center px-6 py-4">
        <img
          class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
          src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4"
          alt=""
        />
        <div class="text-center sm:text-left sm:flex-grow">
          <div class="mb-4">
            <p class="text-xl leading-tight">Adam Wathan</p>
            <p class="text-sm leading-tight text-grey-dark">
              Developer at NothingWorks Inc.
            </p>
          </div>
          <div>
            <a href="/table">
              <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-red-300">
                Message
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
