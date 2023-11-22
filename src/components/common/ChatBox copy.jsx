import React from 'react';

export default function ChatBox() {
    return (
        <div className='container mx-auto px-52'>
            <div className=' h-screen bg-gray-300'>
                <div className=''>
                    <nav className='w-full h-10 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center'>
                        <div className='flex justify-center items-center'>
                            <i className='mdi mdi-arrow-left font-normal text-gray-300 ml-1'></i>
                            <img
                                src='https://i.imgur.com/IAgGUYF.jpg'
                                className='rounded-full ml-1'
                                width='25'
                                height='25'
                            />
                            <span className='text-xs font-medium text-gray-300 ml-1'>
                                Alex cairo
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <i className='mdi mdi-video text-gray-300 mr-4'></i>
                            <i className='mdi mdi-phone text-gray-300 mr-2'></i>
                            <i className='mdi mdi-dots-vertical text-gray-300 mr-2'></i>
                        </div>
                    </nav>
                    <div
                        className='overflow-auto px-1 py-1'
                        id='journal-scroll'
                    >
                        <div className='flex items-center pr-10'>
                            {' '}
                            <img
                                src='https://i.imgur.com/IAgGUYF.jpg'
                                className='rounded-full shadow-xl'
                                width='15'
                                height='15'
                            />
                            <span className='flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end'>
                                Hi Dr.Hendrikson, I haven't been feeling well
                                htmlFor past few days.
                                <span className='text-gray-400 pl-1'>
                                    01:25am
                                </span>
                            </span>
                        </div>
                        <div className='flex justify-end pt-2 pl-10'>
                            <span className='bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end flex justify-end '>
                                Lets jump on a video call.
                                <span className='text-gray-400 pl-1'>
                                    02.30am
                                </span>
                            </span>
                        </div>
                        <div className='flex justify-center'>
                            <span className='text-gray-500 text-xs pt-4'>
                                Call started at 02:33 am
                            </span>
                        </div>
                        <div className='flex justify-center'>
                            <span className='text-gray-500 text-xs'>
                                Call ended at 02:33 am
                            </span>
                        </div>
                        <div className='flex items-center pr-10 mt-1'>
                            <img
                                src='https://i.imgur.com/IAgGUYF.jpg'
                                className='rounded-full shadow-xl'
                                width='15'
                                height='15'
                            />
                            <span className='flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs p-1 font-normal rounded-sm px-1 items-end'>
                                How often should i take the medicine?{' '}
                                <span className='text-gray-400 pl-1'>
                                    01:25am
                                </span>
                            </span>
                        </div>
                        <div className='flex justify-end pt-2 pl-10'>
                            <span className='bg-green-900 h-auto text-gray-200 text-xs font-normal p-1 rounded-sm px-1 items-end flex justify-end '>
                                Twice a day, at breakfast and behtmlFore bed.
                                <span className='text-gray-400 pl-1'>
                                    02.30am
                                </span>
                            </span>
                        </div>
                        <div className='flex items-center pr-10 pt-2'>
                            <img
                                src='https://i.imgur.com/IAgGUYF.jpg'
                                className='rounded-full shadow-xl'
                                width='15'
                                height='15'
                            />
                            <span className='flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end'>
                                Thanks a lot doc
                                <span className='text-gray-400 pl-1'>
                                    01:25am
                                </span>
                            </span>
                        </div>
                        <div className='flex justify-end pt-2 pl-10'>
                            <span className='bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end flex justify-end '>
                                Thats my duty, mention not{' '}
                                <span className='text-gray-400 pl-1'>
                                    02.30am
                                </span>
                            </span>
                        </div>
                        <div className='flex items-center pr-10 pt-2'>
                            <img
                                src='https://i.imgur.com/IAgGUYF.jpg'
                                className='rounded-full shadow-xl'
                                width='15'
                                height='15'
                            />
                            <span className='flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end'>
                                sorry to bother again but can i ask you one more
                                favour?
                                <span className='text-gray-400 pl-1'>
                                    01:25am
                                </span>
                            </span>
                        </div>
                        <div className='flex justify-end pt-2 pl-10'>
                            <span className='bg-green-900 h-auto text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end flex justify-end '>
                                yeah sure, go ahead?
                                <span className='text-gray-400 pl-1'>
                                    02.30am
                                </span>
                            </span>
                        </div>
                        <div className='flex items-center pr-10 pt-2'>
                            <img
                                src='https://i.imgur.com/IAgGUYF.jpg'
                                className='rounded-full shadow-xl'
                                width='15'
                                height='15'
                            />
                            <span className='flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-1 p-1 items-end'>
                                I really had a scary feeling about this, can
                                please advice some tricks to overcome my
                                anxiety?
                                <span className='text-gray-400 pl-1'>
                                    01:25am
                                </span>
                            </span>
                        </div>
                        <div className=' ' id='chatmsg'></div>
                    </div>
                </div>

                <div className=' w-full flex justify-between bg-green-100 bottom-0'>
                    <textarea
                        className='flex-grow m-2 py-2 px-4 mr-1 outline-none rounded-full border border-gray-300 bg-gray-200 resize-none'
                        rows='1'
                        placeholder='Message...'
                    ></textarea>
                    <button className='m-2 outline-none'>
                        <svg
                            className='svg-inline--fa text-green-400 fa-paper-plane fa-w-16 w-12 h-12 py-2 mr-2'
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='paper-plane'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                        >
                            <path
                                fill='currentColor'
                                d='M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z'
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
