import { Disclosure } from "@headlessui/react";
import Lottie from "lottie-react";
import { Fragment, useEffect, useState } from "react";
import { FaMapMarkerAlt, FaRegStar, FaStar } from "react-icons/fa";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { Link } from "react-router-dom";
import getController from "../apiController/getController";
import waitAnimation from "./animations/birdWait.json";

const subCategories = [
  { name: "Lend Books", href: "#" },
  { name: "Borrow Books", href: "#" },
  { name: "Exchange Books", href: "#" },
];
const filters = [
  {
    id: "area",
    name: "Area",
  },
  {
    id: "category",
    name: "Category",
  },
];

export default function Example() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [genre, setGenre] = useState([]);
  const [allBooks, setAllBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState({
    areas: null,
    category: null,
  });

  const [checkedMarkedFilter, setCheckedMarkedFilter] = useState({
    areas: "",
    category: "",
    filterActive: "",
  });

  useEffect(() => {
    getFilterOptions();
  }, []);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const response = await getController.getBooks();
    // console.log(
    //   `🔥 ~ file: Login.js ~ line 73 ~ handleFormSubmit1 ~ response`,
    //   await response?.data?.length
    // );
    if ((await response?.data?.length) > 0) {
      setAllBooks(response?.data);
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  };
  const getFilterOptions = async (e) => {
    const response = await getController.getOptions();

    if ((await response?.status) == 200) {
      response?.data?.length > 0 &&
        setFilterOptions({
          areas: JSON.parse(response?.data[0]?.areas),
          category: JSON.parse(response?.data[0]?.category),
        });
    }
  };
  const handleChange = (e) => {
    if (e.target.checked) {
      setGenre([...genre, e.target.value]);
    } else {
      setGenre(genre.filter((id) => id !== e.target.value));
    }
  };

  return (
    <div>
      {loading ? (
        <div className="h-64 w-64 mx-auto">
          <Lottie animationData={waitAnimation} loop={true} />
        </div>
      ) : (
        <div className="bg-white container mx-auto px-10">
          <div>
            <main className="mx-auto ">
              <section
                aria-labelledby="products-heading"
                className="pt-6 pb-24"
              >
                <div className="grid grid-cols-12 gap-x-8 gap-y-10 ">
                  {/* Filters */}
                  <div className="col-span-2">
                    <form className="hidden lg:block">
                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-b border-gray-200 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <HiMinusSm
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <HiPlusSm
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <Fragment>
                                  {(section?.name === "Area"
                                    ? filterOptions?.areas
                                    : filterOptions?.category
                                  ).map((filterOpt, index) => (
                                    <div class="flex items-center">
                                      <input
                                        id="filter-mobile-color-0"
                                        name="color[]"
                                        value={filterOpt}
                                        type="radio"
                                        // onChange={handleChange}
                                        onChange={(e) =>
                                          setCheckedMarkedFilter({
                                            areas:
                                              section?.name === "Area"
                                                ? e.target.value
                                                : "",
                                            category:
                                              section?.name === "Category"
                                                ? e.target.value
                                                : "",
                                            filterActive: section?.name,
                                          })
                                        }
                                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label class="ml-3 min-w-0 flex-1 text-gray-500 text-left">
                                        {filterOpt}
                                      </label>
                                    </div>
                                  ))}
                                </Fragment>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                    <button onClick={() => setCheckedMarkedFilter("")}>
                      Clear All Filters
                    </button>
                  </div>

                  {/* Product grid */}
                  <div className=" col-span-10 grid grid-cols-12 gap-x-8 gap-y-10">
                    {/* <ItemAll /> */}
                    {allBooks &&
                      allBooks
                        .filter((filterOpt) => {
                          console.log(
                            `🔥 ~ file: AllBooks.js ~ line 329 ~ Example ~ checkedMarkedFilter`,
                            checkedMarkedFilter
                          );

                          if (
                            checkedMarkedFilter?.filterActive == "" ||
                            checkedMarkedFilter == ""
                          ) {
                            return filterOpt;
                          } else if (
                            checkedMarkedFilter?.filterActive === "Area" &&
                            filterOpt?.bookLocation ===
                              checkedMarkedFilter?.areas
                          ) {
                            return filterOpt;
                          } else if (
                            checkedMarkedFilter?.filterActive === "Category" &&
                            filterOpt?.bookCat === checkedMarkedFilter?.category
                          ) {
                            return filterOpt;
                          }
                        })
                        .map((book, index) => (
                          <div className="col-span-4">
                            <div class="bg-gray-100 rounded-lg m-h-56  transform hover:translate-y-1 shadow-xl transition duration-300">
                              <figure class="mb-3 pt-3">
                                <img
                                  src={book?.bookImageURL}
                                  alt=""
                                  class="h-36  ml-auto mr-auto"
                                />
                              </figure>
                              <div class="rounded-b-lg px-4 py-3  flex flex-col text-center relative border-t border-red-100">
                                <div>
                                  <div className="mt-10">
                                    <h5 class="text-black text-xl font-bold leading-none capitalize my-3">
                                      {book?.bookTitle}
                                    </h5>
                                    <h2 class="text-rose-900  font-bold leading-none capitalize my-3">
                                      genre: {book?.bookCat}
                                    </h2>
                                    <span class="text-sm text-gray-400 leading-5 line-clamp-3 ">
                                      {book?.bookDesc}
                                    </span>
                                  </div>
                                </div>
                                <div class="py-2 text-center border-t border-red-100 mt-2">
                                  <span class="inline-block text-center  rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">
                                    <FaMapMarkerAlt /># {book.bookLocation}
                                  </span>
                                </div>

                                <Link to={`/itemSlug?bookId=${book?.bookID}`}>
                                  <div class="inline-flex items-center text-center my-2">
                                    {/* <div class="text-sm text-white font-light">Travel</div> */}
                                    <div class=" flex text-center text-red-300  mx-8">
                                      <span className="flex items-center text-yellow-500">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaRegStar />
                                      </span>
                                    </div>

                                    <a href={{}}>
                                      <button class="rounded-full bg-red-300 justify-between mx-8 text-white hover:bg-white hover:text-red-300 hover:shadow-xl focus:outline-none w-8 h-8 flex  transition duration-300 ">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          height="20"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          class="stroke-current m-auto"
                                        >
                                          <line
                                            x1="12"
                                            y1="5"
                                            x2="12"
                                            y2="19"
                                          ></line>
                                          <line
                                            x1="5"
                                            y1="12"
                                            x2="19"
                                            y2="12"
                                          ></line>
                                        </svg>
                                      </button>
                                    </a>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}
