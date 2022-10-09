/* eslint-disable react-hooks/exhaustive-deps */
import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import logo from "../assets/logo-4.png";
import { UseUser } from "../contexts/AuthContext";
import { capitalizeFirstLetter } from "../utils";
import Login from "./Login";
import SignUp from "./SignUp";

export default function MainNav(props) {
  const [isLogin, setIsLogin] = useState(false);
  const { user, setUser } = UseUser();

  // function classNames(...classes) {
  //   return classes.filter(Boolean).join(' ');
  // }
  useEffect(() => {
    const getUser = localStorage.getItem("user");

    if (getUser) {
      setUser(JSON.parse(getUser));
    }
  }, []);

  useEffect(() => {
    //
    user?.userID ? setIsLogin(true) : setIsLogin(false);
  }, [user?.userID]);

  const logOut = () => {
    //clear localstorage
    window.localStorage.clear();

    //clear authContext
    setUser(null);
  };

  return (
    <header className="bg-white  shadow-lg transition-shadow font-serif z-20">
      <div className="container mx-auto  px-20 py-6 grid grid-cols-12 gap-4">
        <div className=" col-span-4">
          <a href="/" className=" ">
            <img src={logo} alt="logo" className="max-w-full h-14 " />
          </a>
        </div>
        <div className="col-span-5 mt-2">
          <form>
            <div class="flex">
              <div class="relative w-full">
                <input
                  type="search"
                  id='location-search"'
                  class="block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300  focus:ring-transparent focus:border-gray-400 focus:outline-none"
                  placeholder="Search for city or address"
                  required=""
                />
                <button
                  type="submit"
                  class="absolute top-0 right-0 p-2 text-sm font-medium text-black bg-gray-300 rounded-r-md border border-gray-400 hover:bg-gray-400 focus:ring-0 focus:outline-none active:outline-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className=" col-span-3 ml-12">
          <div className=" grid grid-cols-2">
            {!isLogin ? (
              <Fragment>
                <Login />
                <SignUp />
              </Fragment>
            ) : (
              <Fragment>
                <Menu as="div" className="relative inline-block col-span-2">
                  <div className="shadow-sm">
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      <div className="flex items-center justify-between">
                        <img
                          className="rounded-full w-10 h-10 border border-pink-400 overflow-hidden bg-cover bg-no-repeat mr-4"
                          src={`https://avatars.dicebear.com/api/avataaars/:${user?.userID}.svg`}
                          alt="avatar"
                        />
                        <h2>
                          Welcome {capitalizeFirstLetter(user?.username || "")}
                        </h2>
                        <HiChevronDown
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </div>
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1 text-left">
                        <Menu.Item>
                          {({ active }) => (
                            <div class="py-1" role="none">
                              <a
                                href="/dashboard"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                Account settings
                              </a>
                              <a
                                href="/dashboard"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                Upload Books
                              </a>
                              <a
                                href="/book_list"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                role="menuitem"
                              >
                                Uploaded Book List
                              </a>

                              <button
                                className="w-full px-4 py-2 text-right hover:bg-gray-300"
                                onClick={() => logOut()}
                              >
                                <FaSignOutAlt className="text-xl" />
                              </button>
                            </div>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
