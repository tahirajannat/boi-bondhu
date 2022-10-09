import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import getController from "../apiController/getController";

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

export default function ProductCard({ size }) {
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
      <div class=" items-center bg-white ">
        <div class="container mx-auto ">
          <div className="grid grid-cols-12 gap-4">
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
                    filterOpt?.bookLocation === checkedMarkedFilter?.areas
                  ) {
                    return filterOpt;
                  } else if (
                    checkedMarkedFilter?.filterActive === "Category" &&
                    filterOpt?.bookCat === checkedMarkedFilter?.category
                  ) {
                    return filterOpt;
                  }
                })
                .slice(0, 8)
                .map((book, index) => (
                  <div class={`mr-3 ${size ? size : "col-span-3"}`}>
                    <div className={size}>
                      <div class="bg-gray-100 rounded-lg m-h-56  transform hover:translate-y-1 shadow-xl transition duration-300">
                        <figure class="py-3 bg-white border rounded-t-lg">
                          <img
                            src={book?.bookImageURL}
                            alt=""
                            class="h-40  ml-auto mr-auto bg-white"
                          />
                        </figure>
                        <div class="rounded-b-lg px-4 py-3 flex flex-col text-center relative border-t border-red-100">
                          <div>
                            <div className="">
                              <h5 class="text-black text-lg font-medium leading-none capitalize my-3">
                                {book?.bookTitle}
                              </h5>
                              <h2 class="text-rose-900 font-normal text-base leading-none capitalize my-3">
                                genre: {book?.bookCat}
                              </h2>
                              <span class="text-sm text-gray-600 leading-5 line-clamp-2 ">
                                {book?.bookDesc}
                              </span>
                            </div>
                          </div>
                          <div class="py-2 text-center border-t border-red-100 mt-2">
                            <span class="inline-flex text-center  rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">
                              <FaMapMarkerAlt className="mr-2" />{" "}
                              {book.bookLocation}
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
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                  </svg>
                                </button>
                              </a>
                            </div>
                          </Link>
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
