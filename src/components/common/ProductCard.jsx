import React from 'react';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaRegBookmark,
    FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { productData } from '../../utility/data';

export default function ProductCard() {
    return (
        <div>
            <div class=' items-center bg-white '>
                <div class='container mx-auto '>
                    <div className='grid grid-cols-12 gap-4'>
                        {productData.slice(0, 4).map((index, key) => (
                            <div class=' col-span-3 '>
                                <div class='bg-gray-100 rounded-lg m-h-56  transform hover:translate-y-1 shadow-xl transition duration-300'>
                                    <figure class='mb-3 pt-3 relative'>
                                        <img
                                            src={index.image}
                                            alt=''
                                            class='h-44  ml-auto mr-auto'
                                        />

                                        <FaRegBookmark className='absolute top-4 left-4 cursor-pointer hover:text-yellow-500 duration-75 transition-all' />
                                    </figure>
                                    <div class='rounded-b-lg px-4 py-3  flex flex-col text-center relative border-t border-red-100'>
                                        <div class=' absolute top-0 left-2/4 -translate-x-1/2 -translate-y-1/2 '>
                                            <img
                                                class='block h-16 sm:h-20 rounded-full mx-auto border-2 border-red-200'
                                                src='https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4'
                                                alt=''
                                            />
                                        </div>
                                        <div>
                                            <div className='mt-10'>
                                                <h5 class='text-black text-xl font-bold leading-none capitalize my-3'>
                                                    Book Title
                                                </h5>

                                                <p class='text-sm text-gray-400 leading-5 line-clamp-2 '>
                                                    Lorem ipsum dolor sit amet
                                                    consectetur adipisicing
                                                    elit. Explicabo fugit odio
                                                    rem vero natus, ducimus sint
                                                    non quia dicta excepturi
                                                    accusantium illum soluta
                                                    inventore doloremque
                                                    consequuntur. Alias at
                                                    aliquid quos!
                                                </p>
                                            </div>
                                            {/* <div className='flex justify-between'>
                                                <FaRegBookmark />
                                                <button className='px-2 py-1 border border-yellow-600'>
                                                    Details
                                                </button>
                                            </div> */}
                                        </div>
                                        <div class='py-2 text-center border-t border-red-100 mt-2'>
                                            <span class='inline-block bg-red-50 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2'>
                                                #photography
                                            </span>
                                            <span class='inline-block bg-red-50 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2'>
                                                #travel
                                            </span>
                                            <span class='inline-block bg-red-50 rounded-full px-2 py-1 text-xs font-semibold text-gray-700'>
                                                #winter
                                            </span>
                                        </div>
                                        <Link to='/itemSlug'>
                                            <div class='inline-flex items-center text-center mx-auto my-2'>
                                                {/* <div class="text-sm text-white font-light">Travel</div> */}
                                                <div class=' flex text-center text-red-300  '>
                                                    <a
                                                        href='/#'
                                                        className='p-2 mx-1 bg-white rounded-full  hover:shadow-xl   transition duration-300 justify-between'
                                                    >
                                                        <FaLinkedinIn />
                                                    </a>
                                                    <a
                                                        href='/#'
                                                        className='p-2 mx-1 bg-white rounded-full  hover:shadow-xl transition duration-300 justify-between'
                                                    >
                                                        <FaTwitter />
                                                    </a>
                                                    <a
                                                        href='/#'
                                                        className='p-2 mx-1 bg-white rounded-full  hover:shadow-xl  transition duration-300 justify-between'
                                                    >
                                                        <FaFacebookF />
                                                    </a>
                                                </div>

                                                <button class='rounded-full bg-red-300 justify-between ml-1 text-white hover:bg-white hover:text-red-300 hover:shadow-xl focus:outline-none w-8 h-8 flex  transition duration-300'>
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
                                            </div>
                                        </Link>
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
