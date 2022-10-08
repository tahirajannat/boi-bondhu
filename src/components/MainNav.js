/* eslint-disable react-hooks/exhaustive-deps */
// import { Route, Router, Routes } from "react-router-dom";
import React, { Fragment, useEffect, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import logo from '../assets/logo-4.png';
import { UseUser } from '../contexts/AuthContext';
import { capitalizeFirstLetter } from '../utils';
import Login from './Login';
// import Shop from "./Shop";
import SignUp from './SignUp';
export default function MainNav(props) {
  const [isLogin, setIsLogin] = useState(false);
  const { user, setUser } = UseUser();

  useEffect(() => {
    const getUser = localStorage.getItem('user');

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
    <header className='bg-white  shadow-lg transition-shadow font-serif z-20'>
      <div className='container mx-auto  px-20 py-6 grid grid-cols-12 gap-4'>
        <div className=' col-span-4'>
          <a href='/' className=' '>
            <img src={logo} alt='logo' className='max-w-full h-14 ' />
          </a>
        </div>
        <div className='col-span-5 mt-2'>
          <form>
            <div class='flex'>
              <div class='relative w-full'>
                <input
                  type='search'
                  id='location-search"'
                  class='block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300  focus:ring-transparent focus:border-gray-400 focus:outline-none'
                  placeholder='Search for city or address'
                  required=''
                />
                <button
                  type='submit'
                  class='absolute top-0 right-0 p-2 text-sm font-medium text-black bg-gray-300 rounded-r-md border border-gray-400 hover:bg-gray-400 focus:ring-0 focus:outline-none active:outline-none'
                >
                  <svg
                    aria-hidden='true'
                    class='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    ></path>
                  </svg>
                  <span class='sr-only'>Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className=' col-span-3 ml-12'>
          <div className=' grid grid-cols-2'>
            {!isLogin ? (
              <Fragment>
                <Login />
                <SignUp />
              </Fragment>
            ) : (
              <Fragment>
                <header className='col-span-2 bg-white '>
                  <div class='flex justify-center shadow-sm'>
                    <div>
                      <details
                        open
                        x-data
                        x-ref='dropdown'
                        class='relative inline-block text-left'
                      >
                        <summary>
                          <div className='flex items-center justify-between'>
                            <img
                              className='rounded-full w-16 h-16  hover:border-pink-400 overflow-hidden bg-cover bg-no-repeat'
                              src={`https://avatars.dicebear.com/api/avataaars/:${user?.id}.svg`}
                              alt='avatar'
                            />
                            <h2>
                              Welcome{' '}
                              {capitalizeFirstLetter(user?.username || '')}
                            </h2>
                            <svg
                              className='w-4 h-4 ml-2'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                            >
                              <path
                                fill-rule='evenodd'
                                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                clip-rule='evenodd'
                              />
                            </svg>
                          </div>
                        </summary>

                        <details-menu
                          role='menu'
                          class='z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                        >
                          <div class='py-1' role='none'>
                            <a
                              href='/dashboard'
                              class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                              role='menuitem'
                            >
                              Account settings
                            </a>
                            <a
                              href='/dashboard'
                              class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                              role='menuitem'
                            >
                              Create Book Post
                            </a>
                            <a
                              href='/book_list'
                              class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                              role='menuitem'
                            >
                              All Book List
                            </a>

                            <button
                              className='w-full px-6 py-2 text-left hover:bg-gray-300'
                              onClick={() => logOut()}
                            >
                              <FaSignOutAlt />
                            </button>
                          </div>
                        </details-menu>
                      </details>
                    </div>
                  </div>
                </header>
              </Fragment>
            )}

            {/* <select
              class="classic appearance-none py-1 pl-4 pr-8 rounded-md  bg-transparent text-black focus:outline-nones text-left border border-black"
              name="whatever"
              id="frm-whatever"
            >
              <option value="">En</option>
              <option value="1">Bn</option>
            </select> */}
          </div>
        </div>
      </div>
    </header>
  );
}
