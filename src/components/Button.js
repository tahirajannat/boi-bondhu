import React from "react";

export default function Button({ children, onClickBtn }) {
  return (
    <div>
      <button
        className="bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mr-4 active:bg-gray-600  shadow hover:shadow-lg outline-none  ease-linear transition-all duration-150"
        type="button"
        onClick={onClickBtn}
      >
        {children}
      </button>
    </div>
  );
}
