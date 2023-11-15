import React from 'react';
import ItemAll from '../common/ItemAll';
import Sidebar from '../views/Sidebar';

export default function Shop() {
    return (
        <div>
            {/* <ItemAll /> */}

            <main class='container  mx-auto px-10 text-right'>
                <div class=' grid grid-cols-1 border-b border-gray-200 pt-24 pb-6'>
                    {/* <h1 class="text-4xl font-bold tracking-tight text-gray-900">
            New Arrivals
          </h1> */}
                    <div class='text-right col-span-1'>
                        <div class=' items-center'>
                            <div class='relative inline-block text-left'>
                                <div>
                                    <button
                                        type='button'
                                        class='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'
                                        id='menu-button'
                                        aria-expanded='false'
                                        aria-haspopup='true'
                                    >
                                        Sort
                                        <svg
                                            class='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                            aria-hidden='true'
                                        >
                                            <path
                                                fill-rule='evenodd'
                                                d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                                                clip-rule='evenodd'
                                            />
                                        </svg>
                                    </button>
                                </div>

                                <div
                                    class='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'
                                    role='menu'
                                    aria-orientation='vertical'
                                    aria-labelledby='menu-button'
                                    tabindex='-1'
                                >
                                    <div class='py-1' role='none'>
                                        <a
                                            href='#'
                                            class='font-medium text-gray-900 block px-4 py-2 text-sm'
                                            role='menuitem'
                                            tabindex='-1'
                                            id='menu-item-0'
                                        >
                                            Most Popular
                                        </a>

                                        <a
                                            href='#'
                                            class='text-gray-500 block px-4 py-2 text-sm'
                                            role='menuitem'
                                            tabindex='-1'
                                            id='menu-item-1'
                                        >
                                            Best Rating
                                        </a>

                                        <a
                                            href='#'
                                            class='text-gray-500 block px-4 py-2 text-sm'
                                            role='menuitem'
                                            tabindex='-1'
                                            id='menu-item-2'
                                        >
                                            Newest
                                        </a>

                                        <a
                                            href='#'
                                            class='text-gray-500 block px-4 py-2 text-sm'
                                            role='menuitem'
                                            tabindex='-1'
                                            id='menu-item-3'
                                        >
                                            Price: Low to High
                                        </a>

                                        <a
                                            href='#'
                                            class='text-gray-500 block px-4 py-2 text-sm'
                                            role='menuitem'
                                            tabindex='-1'
                                            id='menu-item-4'
                                        >
                                            Price: High to Low
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <button
                                type='button'
                                class='-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7'
                            >
                                <span class='sr-only'>View grid</span>
                                <svg
                                    class='h-5 w-5'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                >
                                    <path
                                        fill-rule='evenodd'
                                        d='M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z'
                                        clip-rule='evenodd'
                                    />
                                </svg>
                            </button>
                            <button
                                type='button'
                                class='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
                            >
                                <span class='sr-only'>Filters</span>

                                <svg
                                    class='h-5 w-5'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                >
                                    <path
                                        fill-rule='evenodd'
                                        d='M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z'
                                        clip-rule='evenodd'
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class='grid grid-cols-1 gap-4 lg:grid-cols-4'>
                    <Sidebar />
                    <div class='lg:col-span-3'>
                        <ItemAll />
                    </div>
                </div>
            </main>
        </div>
    );
}
