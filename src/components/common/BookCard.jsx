import React from 'react';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaRegBookmark,
    FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function BookCard({ items, startIndex, endIndex }) {
    const slicedBooks = items.slice(startIndex, endIndex);

    const getBackgroundImage = (index) => {
        const images = [
            'bg-product-bg-1',
            'bg-product-bg-2',
            // 'bg-product-bg-3',
            'bg-product-bg-4',
        ];
        return images[index % images.length]; // Cycling through colors for each product
    };
    return (
        <>
            {slicedBooks.map((item, index) => (
                <div class='shadow mb-8 '>
                    <div
                        key={index}
                        className={`bg-slate-100  p-4 relative bg-cover  bg-center bg-no-repeat ${getBackgroundImage(
                            index
                        )}`}
                    >
                        <h2 class='focus:outline-none text-xl text-white my-2'>
                            {item.author}
                        </h2>
                        <img
                            alt='person capturing an image'
                            src={item.image}
                            class='focus:outline-none w-full h-40 object-contain'
                        />
                        <div class='bg-yellow-200 py-1 px-2 rounded-[2px] absolute top-2 right-2'>
                            <p class='focus:outline-none text-xs text-yellow-900'>
                                Featured
                            </p>
                        </div>
                        <div className='absolute top-2 left-2'>
                            <FaRegBookmark className=' text-teal-600 cursor-pointer hover:text-yellow-500 duration-75 transition-all' />
                        </div>
                    </div>
                    <div class='bg-white'>
                        {/* <div class='flex items-center justify-between px-4 pt-4'>
                            <div>
                                <FaRegBookmark />
                            </div>
                            <div class='bg-yellow-200 py-1.5 px-4 rounded-[2px]'>
                                <p class='focus:outline-none text-xs text-yellow-700'>
                                    Featured
                                </p>
                            </div>
                        </div> */}
                        <div class='px-4 pt-4 pb-2'>
                            <div class='flex items-center'>
                                <h2 class='focus:outline-none text-lg text-gray-800 font-semibold'>
                                    {item.title}
                                </h2>
                                <p class='focus:outline-none text-xs text-gray-600  pl-5'>
                                    {item.published}
                                </p>
                            </div>
                            <p class='focus:outline-none text-xs text-gray-800  mt-2 text-left line-clamp-2'>
                                {item.description}
                            </p>
                            <div class='flex justify-between mt-4'>
                                <div>
                                    <p class='focus:outline-none text-xs text-gray-600  px-2 bg-gray-200 py-1'>
                                        #{item.category}
                                    </p>
                                </div>
                                {item.tag === 'borrow' ? (
                                    <button className='bg-teal-600 text-white px-2 py-1 text-xs font-bold rounded-[4px] border hover:border-teal-600 hover:bg-slate-100 hover:text-teal-600 hover:shadow-xl focus:outline-none flex transition duration-300'>
                                        Borrow
                                    </button>
                                ) : item.tag === 'exchange' ? (
                                    <button className='bg-teal-600 text-white px-2 py-1 text-xs font-bold rounded-[4px] border hover:border-teal-600 hover:bg-slate-100 hover:text-teal-600 hover:shadow-xl focus:outline-none flex transition duration-300'>
                                        Exchange
                                    </button>
                                ) : item.tag === 'lend' ? (
                                    <button className='bg-teal-600 text-white px-2 py-1 text-xs font-bold rounded-[4px] border hover:border-teal-600 hover:bg-slate-100 hover:text-teal-600 hover:shadow-xl focus:outline-none flex transition duration-300'>
                                        Lend
                                    </button>
                                ) : null}
                            </div>
                            <div class='flex items-center justify-between py-2 border-b border-gray-100'>
                                <h2 class='focus:outline-none text-teal-500 text-xs font-semibold'>
                                    {item.area}
                                </h2>
                            </div>
                            <Link to='/itemSlug'>
                                <div class='inline-flex items-center text-center mx-auto my-2 '>
                                    {/* <div class="text-sm text-white font-light">Travel</div> */}
                                    <div class=' flex text-center '>
                                        <a
                                            href='/#'
                                            className='mx-2  justify-between'
                                        >
                                            <FaLinkedinIn className='text-sm hover:shadow-xl hover:text-teal-600  transition duration-300' />
                                        </a>
                                        <a
                                            href='/#'
                                            className='mx-2 rounded-full  justify-between'
                                        >
                                            <FaTwitter className='text-sm hover:shadow-xl  hover:text-teal-600 transition duration-300 ' />
                                        </a>
                                        <a
                                            href='/#'
                                            className='mx-2 rounded-full   justify-between'
                                        >
                                            <FaFacebookF className='text-sm hover:shadow-xl  hover:text-teal-600  transition duration-300' />
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
