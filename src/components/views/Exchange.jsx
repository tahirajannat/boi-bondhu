import React from 'react';
import { productData } from '../../utility/data';

export default function Exchange() {
    return (
        <div>
            <div className=' items-left bg-white '>
                <div className='container mx-auto py-20'>
                    <div className='w-full mb-10 text-left'>
                        <h1 className='text-3xl text-gray-700 font-bold'>
                            Exchange Your Books to Help Others
                        </h1>
                    </div>
                    <div className='grid grid-cols-12 gap-4'>
                        {productData.slice(0, 4).map((index, key) => (
                            <div className=' col-span-3 '>
                                <div className='bg-indigo-100 rounded-lg m-h-56  transhtmlForm hover:translate-y-2 hover:shadow-xl transition duration-300'>
                                    <figure className='mb-3 pt-3'>
                                        <img
                                            src={index.image}
                                            alt=''
                                            className='h-52  ml-auto mr-auto'
                                        />
                                    </figure>
                                    <div className='rounded-b-lg px-4 py-3 bg-gray-600 flex flex-col text-left'>
                                        <div>
                                            <h5 className='text-white text-xl font-bold leading-none'>
                                                iPhone 11
                                            </h5>
                                            {/* <span className="text-xs text-gray-400 leading-none">
                      Just the right amount of everything.
                    </span> */}
                                        </div>
                                        <div className='flex items-center mt-2'>
                                            <div className='text-sm text-white font-light'>
                                                Travel
                                            </div>
                                            <button className='rounded-md bg-yellow-600 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none px-4 py-2 flex ml-auto transition duration-300'>
                                                Exchange Books
                                            </button>
                                            {/* <Router>
                      <Link to="/itemSlug">
                        <button className="rounded-full bg-yellow-600 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-8 h-8 flex ml-auto transition duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-current m-auto"
                          >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button>
                      </Link>
                      <Routes>
                        <Route path="/itemSlug" element={<ItemSingle />} />
                      </Routes>
                    </Router> */}
                                        </div>
                                        <div className='py-2 text-left border-t mt-2'>
                                            <span className='inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2'>
                                                #photography
                                            </span>
                                            <span className='inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2'>
                                                #travel
                                            </span>
                                            <span className='inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700'>
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
