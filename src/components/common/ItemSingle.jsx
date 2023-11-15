import React from 'react';
import { FaFacebookF, FaRegStar, FaStar, FaTwitter } from 'react-icons/fa';
import { HiChat } from 'react-icons/hi';
import { RiWhatsappFill } from 'react-icons/ri';
import CommentBox from './CommentBox';
import ProductCard from './ProductCard';

export default function ItemSingle() {
    return (
        <div>
            {/* s */}

            {/* .......... */}

            <section className='text-gray-700 body-font overflow-hidden bg-white'>
                <div className='container px-24 py-20 mx-auto'>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-5'>
                            <img
                                alt='ecommerce'
                                className=' object-cover object-center rounded border border-gray-200'
                                src='https://www.whitmorerarebooks.com/pictures/medium/2465.jpg'
                            />
                        </div>
                        <div className='col-span-7 lg:pl-10 lg:py-6 mt-6 lg:mt-0 text-left'>
                            <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                                CATEGORY NAME
                            </h2>
                            <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                                The Catcher in the Rye
                            </h1>
                            <div className='flex mb-4'>
                                <span className='flex items-center text-yellow-500'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStar />

                                    <span className='text-gray-600 ml-3'>
                                        4 Reviews
                                    </span>
                                </span>
                                <span className='flex ml-3 pl-3 py-2 border-l-2 border-gray-200'>
                                    <a
                                        href='https://www.facebook.com/S0NJ0Y'
                                        target='_blank'
                                        className='p-1.5 mx-1 bg-gray-300 rounded-full justify-between text-sm'
                                    >
                                        <FaFacebookF />
                                    </a>
                                    <a className='ml-2 p-1.5 mx-1 bg-gray-300 rounded-full justify-between text-sm'>
                                        <FaTwitter />
                                    </a>
                                    <a className='ml-2 p-1.5 mx-1 bg-gray-300 rounded-full justify-between text-sm'>
                                        <RiWhatsappFill />
                                    </a>
                                    <a
                                        href='/chat'
                                        className='ml-2 p-1.5 mx-1 bg-gray-300 rounded-full justify-between text-sm'
                                    >
                                        <HiChat />
                                    </a>
                                </span>
                            </div>
                            <p className='leading-relaxed'>
                                Fam locavore kickstarter distillery. Mixtape
                                chillwave tumeric sriracha taximy chia
                                microdosing tilde DIY. XOXO fam indxgo
                                juiceramps cornhole raw denim forage brooklyn.
                                Everyday carry +1 seitan poutine tumeric.
                                Gastropub blue bottle austin listicle pour-over,
                                neutra jean shorts keytar banjo tattooed umami
                                cardigan.
                            </p>

                            <div className='flex border-t-2 border-gray-200 mt-5'>
                                <a href='/chat'>
                                    <button className='flex mt-5 text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded'>
                                        Chat With The Owner
                                    </button>
                                </a>

                                {/* <a href="">
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 hover:text-red-600 ml-4">
                    <FaHeart />
                  </button>
                </a> */}
                            </div>
                            {/* <Comment /> */}
                        </div>
                    </div>
                </div>
                <div className='container px-24'>
                    <CommentBox />
                </div>
                {/* <ItemsCard /> */}
                <div className='container mx-auto my-16'>
                    <div class='w-full mb-10 text-left'>
                        <h1 class='text-3xl text-black font-bold'>
                            Best Reviewed
                        </h1>

                        <div className='border-b-4 border-red-400 w-24 mt-4 text-center mr-auto'></div>
                    </div>
                    <ProductCard />
                </div>
            </section>
        </div>
    );
}
