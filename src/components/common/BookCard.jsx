import React from 'react';
import {
    FaBookmark,
    FaFacebookF,
    FaLinkedinIn,
    FaRegBookmark,
    FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function BookCard({
    items,
    startIndex,
    endIndex,
    addToBookmark,
    onClick,
}) {
    const slicedBooks = items.slice(startIndex, endIndex);
    const displayedItems = endIndex ? items.slice(0, endIndex) : items;

    // const handleBuyNowClick = (product) => {
    //     dispatch(setProductDetails(product));

    //     // Redirect to the single product page
    //     history.push('/shop/:id');
    // };
    // // console.log('history', history);
    const getBackgroundImage = (index) => {
        const images = [
            'bg-product-bg-1',
            'bg-product-bg-2',
            'bg-product-bg-4',
        ];
        return images[index % images.length]; // Cycling through colors htmlFor each product
    };

    return (
        <>
            {slicedBooks.map((item, index) => (
                <div className='shadow mb-8 text-center '>
                    <div
                        key={index}
                        className={`bg-slate-100  p-4 relative bg-cover  bg-center bg-no-repeat ${getBackgroundImage(
                            index
                        )}`}
                    >
                        <h2 className='focus:outline-none text-xl text-white my-2'>
                            {item.author}
                        </h2>
                        <img
                            alt='person capturing an image'
                            src={item.image}
                            className='focus:outline-none w-full h-40 object-contain'
                        />
                        {item.tag && (
                            <div className='bg-yellow-200 py-1 px-2 rounded-[2px] absolute top-2 right-2'>
                                <p className='focus:outline-none text-xs text-yellow-900'>
                                    Featured
                                </p>
                            </div>
                        )}

                        <div className='absolute top-2 left-2'>
                            {item.isBookmarked ? (
                                <FaBookmark
                                    className='text-teal-600 cursor-pointer hover:text-yellow-500 duration-75 transition-all'
                                    onClick={() => addToBookmark(item)}
                                />
                            ) : (
                                <FaRegBookmark
                                    className='text-teal-600 cursor-pointer hover:text-yellow-500 duration-75 transition-all'
                                    onClick={() => addToBookmark(item)}
                                />
                            )}
                        </div>
                    </div>
                    <div className='bg-white'>
                        <div className='px-4 pt-4 pb-2'>
                            <div className='flex items-center'>
                                <h2 className='focus:outline-none text-lg text-gray-800 font-semibold'>
                                    {item.title}
                                </h2>
                                <p className='focus:outline-none text-xs text-gray-600  pl-5'>
                                    {item.published}
                                </p>
                            </div>
                            <p className='focus:outline-none text-xs text-gray-800  mt-2 text-left line-clamp-2'>
                                {item.description}
                            </p>
                            {item.price === '' ? (
                                <>
                                    <div className='flex justify-between mt-4'>
                                        <div>
                                            <p className='focus:outline-none text-xs text-gray-600  px-2 bg-gray-200 py-1'>
                                                #{item.category}
                                            </p>
                                        </div>
                                        {item.preference === 'borrow' ? (
                                            <Link
                                                state={item}
                                                to={`/shop/${item.id}`}
                                            >
                                                {' '}
                                                <button className='bg-teal-600 text-white px-2 py-1 text-xs font-bold rounded-[4px] border hover:border-teal-600 hover:bg-slate-100 hover:text-teal-600 hover:shadow-xl focus:outline-none flex transition duration-300'>
                                                    Borrow
                                                </button>
                                            </Link>
                                        ) : item.preference === 'exchange' ? (
                                            <Link
                                                state={item}
                                                to={`/shop/${item.id}`}
                                            >
                                                {' '}
                                                <button className='bg-teal-600 text-white px-2 py-1 text-xs font-bold rounded-[4px] border hover:border-teal-600 hover:bg-slate-100 hover:text-teal-600 hover:shadow-xl focus:outline-none flex transition duration-300'>
                                                    Exchange
                                                </button>
                                            </Link>
                                        ) : item.preference === 'lend' ? (
                                            <Link
                                                state={item}
                                                to={`/shop/${item.id}`}
                                            >
                                                <button className='bg-teal-600 text-white px-2 py-1 text-xs font-bold rounded-[4px] border hover:border-teal-600 hover:bg-slate-100 hover:text-teal-600 hover:shadow-xl focus:outline-none flex transition duration-300'>
                                                    Lend
                                                </button>
                                            </Link>
                                        ) : null}
                                    </div>
                                    <div className='flex items-center justify-between py-2 border-b border-gray-100'>
                                        <h2 className='focus:outline-none text-teal-500 text-xs font-semibold'>
                                            {item.area}
                                        </h2>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='flex justify-between mt-4'>
                                        <div>
                                            <p className='focus:outline-none text-xs text-gray-600  px-2 bg-gray-200 py-1'>
                                                #{item.category}
                                            </p>
                                        </div>
                                        <h2 className='focus:outline-none text-teal-500 text-xs font-semibold'>
                                            {item.area}
                                        </h2>
                                    </div>
                                    <div className='flex items-center justify-between py-2 border-b border-gray-100'>
                                        <h2 className='focus:outline-none text-teal-500 text-base font-bold'>
                                            {/* {item.price} */}
                                            $50
                                        </h2>
                                        <Link
                                            state={item}
                                            to={`/shop/${item.id}`}
                                        >
                                            <button
                                                className='bg-teal-600 text-white px-2 py-1 text-xs font-bold rounded-[4px] border hover:border-teal-600 hover:bg-slate-100 hover:text-teal-600 hover:shadow-xl focus:outline-none flex transition duration-300'
                                                // onClick={() => handleBuyNowClick(item)}
                                            >
                                                Buy Now
                                            </button>
                                        </Link>
                                    </div>
                                </>
                            )}

                            <Link to='/itemSlug'>
                                <div className='inline-flex items-center text-center mx-auto my-2 '>
                                    {/* <div className="text-sm text-white font-light">Travel</div> */}
                                    <div className=' flex text-center '>
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
