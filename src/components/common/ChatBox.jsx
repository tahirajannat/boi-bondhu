import React from 'react';
import { BsEmojiSunglassesFill } from 'react-icons/bs';
import {
    FaArrowLeft,
    FaCamera,
    FaEllipsisV,
    FaMicrophone,
    FaPaperclip,
    FaPaperPlane,
    FaPhone,
    FaVideo,
} from 'react-icons/fa';

export default function ChatBox() {
    return (
        <div className=' '>
            <div className=' px-72 py-24 flex flex-col items-center justify-center  min-h-screen bg-gray-100 text-gray-800 p-10'>
                <nav className='w-full h-12 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center'>
                    <div className='flex justify-center items-center'>
                        <i className='font-normal text-gray-300 ml-1'>
                            <FaArrowLeft />
                        </i>
                        <img
                            src='https://i.imgur.com/IAgGUYF.jpg'
                            className='rounded-full ml-3'
                            width='30'
                            height='30'
                        />
                        <span className='text-xs font-medium text-gray-300 ml-3'>
                            Alex cairo
                        </span>
                    </div>
                    <div className='flex items-center'>
                        <i className=' text-gray-300 mr-6'>
                            <FaVideo />
                        </i>
                        <i className='text-gray-300 mr-6'>
                            <FaPhone />
                        </i>
                        <i className=' text-gray-300 mr-4'>
                            <FaEllipsisV />
                        </i>
                    </div>
                </nav>

                <div className='flex flex-col flex-grow w-full max-w-full bg-white shadow-xl rounded-lg overflow-hidden'>
                    <div className='flex flex-col flex-grow h-0 p-4 overflow-auto'>
                        <div className='flex w-full mt-2 space-x-3 max-w-xs'>
                            <div className='flex-shrink-0 h-10 w-10 rounded-full bg-gray-300'></div>
                            <div>
                                <div className='bg-gray-300 p-3 rounded-r-lg rounded-bl-lg'>
                                    <p className='text-sm'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </p>
                                </div>
                                <span className='text-xs text-gray-500 leading-none'>
                                    2 min ago
                                </span>
                            </div>
                        </div>
                        <div className='flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end'>
                            <div>
                                <div className='bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg'>
                                    <p className='text-sm'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod.
                                    </p>
                                </div>
                                <span className='text-xs text-gray-500 leading-none'>
                                    2 min ago
                                </span>
                            </div>
                            <div className='flex-shrink-0 h-10 w-10 rounded-full bg-gray-300'></div>
                        </div>
                        <div className='flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end'>
                            <div>
                                <div className='bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg'>
                                    <p className='text-sm'>
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <span className='text-xs text-gray-500 leading-none'>
                                    2 min ago
                                </span>
                            </div>
                            <div className='flex-shrink-0 h-10 w-10 rounded-full bg-gray-300'></div>
                        </div>
                        <div className='flex w-full mt-2 space-x-3 max-w-xs'>
                            <div className='flex-shrink-0 h-10 w-10 rounded-full bg-gray-300'></div>
                            <div>
                                <div className='bg-gray-300 p-3 rounded-r-lg rounded-bl-lg'>
                                    <p className='text-sm'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.{' '}
                                    </p>
                                </div>
                                <span className='text-xs text-gray-500 leading-none'>
                                    2 min ago
                                </span>
                            </div>
                        </div>
                        <div className='flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end'>
                            <div>
                                <div className='bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg'>
                                    <p className='text-sm'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.{' '}
                                    </p>
                                </div>
                                <span className='text-xs text-gray-500 leading-none'>
                                    2 min ago
                                </span>
                            </div>
                            <div className='flex-shrink-0 h-10 w-10 rounded-full bg-gray-300'></div>
                        </div>
                        <div className='flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end'>
                            <div>
                                <div className='bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg'>
                                    <p className='text-sm'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt.
                                    </p>
                                </div>
                                <span className='text-xs text-gray-500 leading-none'>
                                    2 min ago
                                </span>
                            </div>
                            <div className='flex-shrink-0 h-10 w-10 rounded-full bg-gray-300'></div>
                        </div>
                        <div className='flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end'>
                            <div>
                                <div className='bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg'>
                                    <p className='text-sm'>
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <span className='text-xs text-gray-500 leading-none'>
                                    2 min ago
                                </span>
                            </div>
                            <div className='flex-shrink-0 h-10 w-10 rounded-full bg-gray-300'></div>
                        </div>
                        <div className='flex w-full mt-2 space-x-3 max-w-xs'>
                            <div className='flex-shrink-0 h-10 w-10 rounded-full bg-gray-300'></div>
                            <div>
                                <div className='bg-gray-300 p-3 rounded-r-lg rounded-bl-lg'>
                                    <p className='text-sm'>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.{' '}
                                    </p>
                                </div>
                                <span className='text-xs text-gray-500 leading-none'>
                                    2 min ago
                                </span>
                            </div>
                        </div>
                        <div className='flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end'>
                            <div>
                                <div className='bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg'>
                                    <p className='text-sm'>
                                        Lorem ipsum dolor sit.
                                    </p>
                                </div>
                                <span className='text-xs text-gray-500 leading-none'>
                                    2 min ago
                                </span>
                            </div>
                            <div className='flex-shrink-0 h-10 w-10 rounded-full bg-gray-300'></div>
                        </div>
                    </div>

                    <div className='grid grid-cols-12 gap-2 justify-between items-center p-2 '>
                        <div className='col-span-10 relative'>
                            <i className=' absolute top-3 left-3 text-gray-400'>
                                <BsEmojiSunglassesFill />
                            </i>
                            <input
                                type='text'
                                className=' rounded-full pl-12 w-full py-2 focus:outline-none h-auto placeholder-gray-100 bg-gray-900 text-white'
                                placeholder='Type a message...'
                                id='typemsg'
                            />
                            <i className=' absolute right-12 top-3 transhtmlForm -rotate-90 text-gray-400'>
                                <FaPaperclip />
                            </i>
                            <i className=' absolute right-5 top-3 text-gray-400'>
                                <FaCamera />
                            </i>
                        </div>
                        <div className=' col-span-1 md:flex-auto md:flex-row-reverse flex-row flex'>
                            <a
                                href='/'
                                className='p-2 rounded-full bg-blue-300 text-center items-center justify-center hover:bg-gray-900 hover:text-white'
                            >
                                <FaMicrophone />
                            </a>
                        </div>
                        <div className='col-span-1  md:flex-auto  flex-row flex'>
                            <button className='p-2 rounded-full bg-blue-300 text-center items-center justify-center hover:bg-gray-900 hover:text-white'>
                                <FaPaperPlane />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
