import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { FaRegStar, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
// import { FaFunnelDollar } from "react-icons/fa";
import {
  HiChevronDown,
  HiFilter,
  HiMinusSm,
  HiPlusSm,
  HiViewGrid,
  HiX,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import getController from '../apiController/getController';
// import ItemAll from "./ItemAll";

import Lottie from 'lottie-react';
import waitAnimation from './animations/birdWait.json';
const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];
const subCategories = [
  { name: 'Lend Books', href: '#' },
  { name: 'Borrow Books', href: '#' },
  { name: 'Exchange Books', href: '#' },
];
const filters = [
  {
    id: 'area',
    name: 'Area',
    options: [
      { value: 'mirpur', label: 'Mirpur', checked: false },
      { value: 'dhanmondi', label: 'Dhanmondi', checked: false },
      { value: 'azimpur', label: 'Azimpur', checked: true },
      { value: 'mohammadpur', label: 'Mohammadpur', checked: false },
      { value: 'basundhora', label: 'Basundhora', checked: false },
      { value: 'shyamoli', label: 'Shyamoli', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'novel', label: 'Novel', checked: false, dataFilter: '.novel' },
      { value: 'thrilar', label: 'Thrilar', checked: false },
      { value: 'travel', label: 'Thrilar', checked: true },
      { value: 'cook-book', label: 'Cook Book', checked: false },
      { value: 'megazine', label: 'Megazine', checked: false },
    ],
  },
  {
    id: 'preferences',
    name: 'Preferences',
    options: [
      { value: 'most-popular', label: 'Most Popular', checked: true },
      { value: 'best-rating', label: 'Best Rating', checked: false },
      { value: 'newest', label: 'Newest', checked: false },
      { value: 'top-lended', label: 'Top Lended', checked: false },
      { value: 'top-borrowed', label: 'Top Borrowed', checked: false },
      { value: 'top-exchanged', label: 'Top Exchanged', checked: false },
    ],
  },
];
const movieData = [
  {
    title: 'movie 1',
    genre: ['action', 'thriller'],
  },
  {
    title: 'movie 2',
    genre: ['comedy', 'drama'],
  },
  {
    title: 'movie 3',
    genre: ['comedy', 'action'],
  },
  { title: 'movie 4', genre: 'thriller' },
  {
    title: 'movie 5',
    genre: 'comedy',
  },
  {
    title: 'movie 6',
    genre: 'action',
  },
  {
    title: 'movie 7',
    genre: 'drama',
  },
  { value: 'most-popular' },
  { value: 'Best Rating' },
  { value: 'Top Lended' },
  { value: 'Top-Borrowed' },
  {
    id: 'preferences',
    name: 'Preferences',
    options: [
      { value: 'most-popular', label: 'Most Popular', checked: true },
      { value: 'best-rating', label: 'Best Rating', checked: false },
      { value: 'newest', label: 'Newest', checked: false },
      { value: 'top-lended', label: 'Top Lended', checked: false },
      { value: 'top-borrowed', label: 'Top Borrowed', checked: false },
      { value: 'top-exchanged', label: 'Top Exchanged', checked: false },
    ],
  },
];

const movie = [
  { genre: 'thriller' },
  { genre: 'comedy' },
  { genre: 'action' },
  { genre: 'drama' },
];

export default function Example() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const [genre, setGenre] = useState([]);
  const [filteredGenre, setFilteredGenre] = useState([]);
  const [allBooks, setAllBooks] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const handleChange = (e) => {
    if (e.target.checked) {
      setGenre([...genre, e.target.value]);
    } else {
      setGenre(genre.filter((id) => id !== e.target.value));
    }
  };

  useEffect(() => {
    if (genre.length === 0) {
      setFilteredGenre(movieData);
    } else {
      setFilteredGenre(
        movieData.filter((movie) =>
          genre.some((category) => [movie.genre].flat().includes(category))
        )
      );
    }
  }, [genre]);

  return (
    <div>
      {loading ? (
        <div className='h-64 w-64 mx-auto'>
          <Lottie animationData={waitAnimation} loop={true} />
        </div>
      ) : (
        <div className='bg-white container mx-auto px-10'>
          <div>
            {/* Mobile filter dialog */}

            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
              <Dialog
                as='div'
                className='relative z-40 lg:hidden'
                onClose={setMobileFiltersOpen}
              >
                <Transition.Child
                  as={Fragment}
                  enter='transition-opacity ease-linear duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='transition-opacity ease-linear duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 z-40 flex'>
                  <Transition.Child
                    as={Fragment}
                    enter='transition ease-in-out duration-300 transform'
                    enterFrom='translate-x-full'
                    enterTo='translate-x-0'
                    leave='transition ease-in-out duration-300 transform'
                    leaveFrom='translate-x-0'
                    leaveTo='translate-x-full'
                  >
                    <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl'>
                      <div className='flex items-center justify-between px-4'>
                        <h2 className='text-lg font-medium text-gray-900'>
                          Filters
                        </h2>
                        <button
                          type='button'
                          className='-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400'
                          onClick={() => setMobileFiltersOpen(false)}
                        >
                          <span className='sr-only'>Close menu</span>
                          <HiX className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>

                      {/* Filters */}
                      <form className='mt-4 border-t border-gray-200'>
                        <h3 className='sr-only'>Categories</h3>
                        <ul
                          role='list'
                          className='px-2 py-3 font-medium text-gray-900'
                        >
                          {subCategories.map((category) => (
                            <li key={category.name}>
                              <a
                                href={category.href}
                                className='block px-2 py-3'
                              >
                                {category.name}
                              </a>
                            </li>
                          ))}
                        </ul>

                        {filters.map((section) => (
                          <Disclosure
                            as='div'
                            key={section.id}
                            className='border-t border-gray-200 px-4 py-6'
                          >
                            {({ open }) => (
                              <>
                                <h3 className='-mx-2 -my-3 flow-root'>
                                  <Disclosure.Button className='flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500'>
                                    <span className='font-medium text-gray-900'>
                                      {section.name}
                                    </span>
                                    <span className='ml-6 flex items-center'>
                                      {open ? (
                                        <HiMinusSm
                                          className='h-5 w-5'
                                          aria-hidden='true'
                                        />
                                      ) : (
                                        <HiPlusSm
                                          className='h-5 w-5'
                                          aria-hidden='true'
                                        />
                                      )}
                                    </span>
                                  </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className='pt-6'>
                                  <div className='space-y-6'>
                                    {section.options.map(
                                      (option, optionIdx) => (
                                        <div
                                          key={option.value}
                                          className='flex items-center'
                                        >
                                          <input
                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                            name={`${section.id}[]`}
                                            defaultValue={option.value}
                                            type='checkbox'
                                            defaultChecked={option.checked}
                                            className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                          />
                                          <label
                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                            className='ml-3 min-w-0 flex-1 text-gray-500'
                                          >
                                            {option.label}
                                          </label>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        ))}
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root>

            <main className='mx-auto '>
              <div className='flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6'>
                <div className='flex items-center'>
                  <Menu as='div' className='relative inline-block text-left'>
                    <div>
                      <Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
                        Sort
                        <HiChevronDown
                          className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                          aria-hidden='true'
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='py-1'>
                          {sortOptions.map((option) => (
                            <Menu.Item key={option.name}>
                              {({ active }) => (
                                <a
                                  href={option.href}
                                  className={classNames(
                                    option.current
                                      ? 'font-medium text-gray-900'
                                      : 'text-gray-500',
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  {option.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <button
                    type='button'
                    className='-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7'
                  >
                    <span className='sr-only'>View grid</span>
                    <HiViewGrid className='h-5 w-5' aria-hidden='true' />
                  </button>
                  <button
                    type='button'
                    className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
                    onClick={() => setMobileFiltersOpen(true)}
                  >
                    <span className='sr-only'>Filters</span>
                    <HiFilter className='h-5 w-5' aria-hidden='true' />
                  </button>
                </div>
              </div>

              <section
                aria-labelledby='products-heading'
                className='pt-6 pb-24'
              >
                <h2 id='products-heading' className='sr-only'>
                  Products
                </h2>

                <div className='grid grid-cols-12 gap-x-8 gap-y-10 '>
                  {/* Filters */}
                  {/* <div className="col-span-2">
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href}>{category.name}</a>
                      </li>
                    ))}
                  </ul>

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
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    data-filter={option.dataFilter}
                                    onClick={handleChange}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}

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
                              <input
                                value={genre}
                                fullWidth
                                onChange={handleChange}
                              />

                              {movie.map((movie) => (
                                <div class="flex items-center">
                                  <input
                                    id="filter-mobile-color-0"
                                    name="color[]"
                                    value={movie.genre}
                                    type="checkbox"
                                    onChange={handleChange}
                                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label class="ml-3 min-w-0 flex-1 text-gray-500">
                                    {movie.genre}
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
              </div> */}
                  {/* ................NEW FILTERS............. */}

                  {/* ................NEW FILTERS............. */}
                  {/* Product grid */}
                  <div className=' col-span-10 grid grid-cols-12 gap-x-8 gap-y-10'>
                    {/* Replace with your content */}
                    {/* <ItemAll /> */}
                    {allBooks &&
                      allBooks.map((book, index) => (
                        <div className='col-span-4'>
                          <div class='bg-gray-100 rounded-lg m-h-56  transform hover:translate-y-1 shadow-xl transition duration-300'>
                            <figure class='mb-3 pt-3'>
                              <img
                                src={book?.bookImageURL}
                                alt=''
                                class='h-36  ml-auto mr-auto'
                              />
                            </figure>
                            <div class='rounded-b-lg px-4 py-3  flex flex-col text-center relative border-t border-red-100'>
                              {/* <div class=' absolute top-0 left-2/4 -translate-x-1/2 -translate-y-1/2 fixed'>
                                <img
                                  src='https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                                  alt='Setting User Avatar In Specific Size, Without Breaking - Avatar Png@pngkey.com'
                                />
                              </div> */}
                              <div>
                                <div className='mt-10'>
                                  <h5 class='text-black text-xl font-bold leading-none capitalize my-3'>
                                    {book?.bookTitle}
                                  </h5>
                                  <h2 class='text-rose-900  font-bold leading-none capitalize my-3'>
                                    genre: {book?.bookCat}
                                  </h2>
                                  <span class='text-sm text-gray-400 leading-5 line-clamp-3 '>
                                    {book?.bookDesc}
                                  </span>
                                </div>
                              </div>
                              <div class='py-2 text-center border-t border-red-100 mt-2'>
                                <span class='inline-block text-center  rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2'>
                                  {/* https://imgbin.com/png/JEwpyjvQ/location-icon-pin-icon-contact-us-icon-png */}
                                  {/* <img
                                src='https://img.icons8.com/arcade/2x/experimental-marker-arcade.png'
                                alt='location'
                                width='28'
                                height='28'
                              /> */}
                                  <FaMapMarkerAlt /># {book.bookLocation}
                                  {/* #LOCATION : */}
                                </span>
                                {/* <span class='inline-block bg-red-50 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2'>
                              #travel
                            </span>
                            <span class='inline-block bg-red-50 rounded-full px-2 py-1 text-xs font-semibold text-gray-700'>
                              #winter
                            </span> */}
                              </div>
                              {/* {filteredGenre.map((movie, index) => (
                          <div class="py-2 text-center border-t border-red-100 mt-2">
                            <h2 gutterBottom variant="h6" noWrap>
                              title: {movie.title}
                            </h2>
                            <h4 gutterBottom variant="h6" noWrap>
                              genre: {movie.genre}
                            </h4>
                          </div>
                        ))} */}
                              {/* {section
                          .filter(
                            (val) =>
                              val.CategoryName === "MotorcycleParts" &&
                              val.ProductQuantity !== 0
                          )
                          .map((val) => {
                            return (
                              <div>
                                <div>
                                  <div class="buyNowBtnDiv">
                                    {localStorage.getItem("username") === "" ||
                                    localStorage.length === 0 ? (
                                      <div id="buyAddBtn"></div>
                                    ) : (
                                      <div id="buyAddBtn"></div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })} */}
                              {/* {section.category.map((option) => {
                          <div class="py-2 text-center border-t border-red-100 mt-2">
                            <span class="inline-block bg-red-50 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">
                              {section.label}
                            </span>
                            <span class="inline-block bg-red-50 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">
                              #travel
                            </span>
                            <span class="inline-block bg-red-50 rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                              #winter
                            </span>
                          </div>;
                        })} */}
                              <Link to={`/itemSlug?bookId=${book?.bookID}`}>
                                <div class='inline-flex items-center text-center my-2'>
                                  {/* <div class="text-sm text-white font-light">Travel</div> */}
                                  <div class=' flex text-center text-red-300  mx-8'>
                                    <span className='flex items-center text-yellow-500'>
                                      <FaStar />
                                      <FaStar />
                                      <FaStar />
                                      <FaStar />
                                      <FaRegStar />
                                    </span>
                                  </div>

                                  <a href={{}}>
                                    <button class='rounded-full bg-red-300 justify-between mx-8 text-white hover:bg-white hover:text-red-300 hover:shadow-xl focus:outline-none w-8 h-8 flex  transition duration-300 '>
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='20'
                                        height='20'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        stroke-width='2'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        class='stroke-current m-auto'
                                      >
                                        <line
                                          x1='12'
                                          y1='5'
                                          x2='12'
                                          y2='19'
                                        ></line>
                                        <line
                                          x1='5'
                                          y1='12'
                                          x2='19'
                                          y2='12'
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
