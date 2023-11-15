import React from 'react';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaRegBookmark,
    FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function BookCard({
    items,
    title,
    description,
    category,
    published,
    area,
    price,
}) {
    return (
        <>
            {items.map((item) => (
                <div class='shadow-lg mb-8 '>
                    <div className='bg-gray-100 p-4'>
                        <img
                            alt='person capturing an image'
                            src={item.image}
                            class='focus:outline-none w-full h-44 object-contain'
                        />
                    </div>
                    <div class='bg-white'>
                        <div class='flex items-center justify-between px-4 pt-4'>
                            <div>
                                {/* <img
                                    class='dark:bg-white focus:outline-none'
                                    src='https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-2-col-grid-svg1.svg'
                                    alt='bookmark'
                                /> */}
                                <FaRegBookmark />
                            </div>
                            <div class='bg-yellow-200 py-1.5 px-6 rounded-full'>
                                <p class='focus:outline-none text-xs text-yellow-700'>
                                    Featured
                                </p>
                            </div>
                        </div>
                        <div class='px-4 pt-4 pb-2'>
                            <div class='flex items-center'>
                                <h2 class='focus:outline-none text-lg text-gray-800 font-semibold'>
                                    {item.title}
                                </h2>
                                <p class='focus:outline-none text-xs text-gray-600  pl-5'>
                                    {item.published}
                                </p>
                            </div>
                            <p class='focus:outline-none text-xs text-gray-800  mt-2 text-left'>
                                {item.description}
                            </p>
                            <div class='flex justify-between mt-4'>
                                <div>
                                    <p class='focus:outline-none text-xs text-gray-600  px-2 bg-gray-200 py-1'>
                                        #{item.category}
                                    </p>
                                </div>
                                {item.tag === 'borrow' ? (
                                    <button className='bg-black px-4 py-1 text-sm font-semibold rounded-[2px] text-white hover:bg-gray-800 hover:text-gray-200 hover:shadow-xl focus:outline-none flex transition duration-300'>
                                        Borrow
                                    </button>
                                ) : item.tag === 'exchange' ? (
                                    <button className='bg-black px-4 py-1 text-sm font-semibold rounded-[2px] text-white hover:bg-gray-800 hover:text-gray-200 hover:shadow-xl focus:outline-none flex transition duration-300'>
                                        Exchange
                                    </button>
                                ) : item.tag === 'lend' ? (
                                    <button className='bg-black px-4 py-1 text-sm font-semibold rounded-[2px] text-white hover:bg-gray-800 hover:text-gray-200 hover:shadow-xl focus:outline-none flex transition duration-300'>
                                        Lend
                                    </button>
                                ) : null}
                            </div>
                            <div class='flex items-center justify-between py-2 border-b border-gray-100'>
                                <h2 class='focus:outline-none text-indigo-700 text-xs font-semibold'>
                                    {item.area}
                                </h2>
                            </div>
                            <Link to='/itemSlug'>
                                <div class='inline-flex items-center text-center mx-auto my-2 '>
                                    {/* <div class="text-sm text-white font-light">Travel</div> */}
                                    <div class=' flex text-center '>
                                        <a
                                            href='/#'
                                            className='mx-2 hover:shadow-xl hover:text-yellow-600  transition duration-300 justify-between'
                                        >
                                            <FaLinkedinIn className='text-sm' />
                                        </a>
                                        <a
                                            href='/#'
                                            className='mx-2 rounded-full  hover:shadow-xl  hover:text-yellow-600 transition duration-300 justify-between'
                                        >
                                            <FaTwitter className='text-sm' />
                                        </a>
                                        <a
                                            href='/#'
                                            className='mx-2 rounded-full  hover:shadow-xl  hover:text-yellow-600  transition duration-300 justify-between'
                                        >
                                            <FaFacebookF className='text-sm' />
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
