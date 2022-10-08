import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import getController from "../apiController/getController";
import waitAnimation from "./animations/waiting.json";
import Button from "./Button";
import CommentBox from "./CommentBox";
import ProductCard from "./ProductCard";

export default function ItemSingle() {
  const [bookInfo, setBookInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const bookId = queryParams.get("bookId");
    bookId && getBooks(bookId);
  }, []);

  const getBooks = async (bookId) => {
    const response = await getController.getSingleBookInfo(bookId);
    if ((await response?.data?.length) > 0) {
      setBookInfo(response?.data[0]);
      console.log(
        `🔥 ~ file: ItemSingle.js ~ line 24 ~ getBooks ~ response?.data`,
        response?.data
      );

      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="h-52 w-52 mx-auto">
          <Lottie animationData={waitAnimation} loop={true} />
        </div>
      ) : (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-24 py-20 mx-auto">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-5">
                <img
                  alt="ecommerce"
                  className=" object-contain h-72 w-full object-center rounded border border-gray-200"
                  src={bookInfo?.bookImageURL}
                />
              </div>
              <div className="col-span-7 lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-left">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  CATEGORY NAME {bookInfo?.bookCat}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {bookInfo?.bookTitle}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />

                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    {show ? (
                      <a href="/chat">
                        <Button children="Chat With The Owner" />
                      </a>
                    ) : null}
                    <button onClick={() => setShow(!show)}>
                      {!show ? " Say Hi to the owner" : null}
                    </button>
                  </span>
                </div>
                <p className="leading-relaxed">{bookInfo?.bookDesc}</p>
              </div>
            </div>
          </div>
          <div className="container px-24">
            <CommentBox />
          </div>
          {/* <ItemsCard /> */}
          <div className="container mx-auto my-16">
            <div class="w-full mb-10 text-left">
              <h1 class="text-3xl text-black font-bold">Best Reviewed</h1>

              <div className="border-b-4 border-red-400 w-24 mt-4 text-center mr-auto"></div>
            </div>
            <ProductCard />
          </div>
        </section>
      )}
    </div>
  );
}
