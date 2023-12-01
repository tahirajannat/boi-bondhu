import { HiTag } from 'react-icons/hi';
import { HiClock, HiUser } from 'react-icons/hi2';

const BlogSingle = () => {
    return (
        <div class='relative my-16'>
            <div class='container mx-auto px-20 mb-10 rounded overflow-hidden flex flex-col text-center'>
                <a
                    href='#'
                    class='my-10 mx-auto text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block'
                >
                    The Best Activewear from the Nordstrom Anniversary Sale
                </a>

                <a href='#'>
                    <img
                        class='w-full my-4'
                        src='https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=625.0&sharp=10&w=1500'
                        alt='Sunset in the mountains'
                    />
                </a>
                <p class='text-gray-700 text-base leading-8 max-w-2xl mx-auto'>
                    Machu Picchu is a 15th-century Inca citadel situated on a
                    mountain ridge 2,430 metres (7,970 ft) above sea level. It
                    is located in the Cusco Region.
                </p>
                <div class='py-5 text-sm font-regular text-gray-900 flex gap-2 items-center justify-center'>
                    <span class='mr-3 flex flex-row items-center'>
                        <HiClock className='text-teal-500 text-base' />
                        <span class='ml-1.5'>6 mins ago</span>
                    </span>
                    <a
                        href='#'
                        class='flex flex-row items-center hover:text-indigo-600  mr-3'
                    >
                        <HiUser className='text-teal-500 text-base' />

                        <span class='ml-1.5'>AliSher Azimi</span>
                    </a>
                    <a
                        href='#'
                        class='flex flex-row items-center hover:text-indigo-600'
                    >
                        <HiTag className='text-teal-500 text-base' />

                        <span class='ml-1.5'>activewear</span>
                    </a>
                </div>
                <hr />
            </div>

            <div class='container mx-auto px-20'>
                <div class='mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal'>
                    <div class=''>
                        <p class='text-base leading-8 my-5'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                        <h3 class='text-2xl font-bold my-5'>
                            #1. What is Lorem Ipsum?
                        </h3>
                        <p class='text-base leading-8 my-5'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                        <blockquote class='text-md italic leading-8 my-5 p-5 text-indigo-600 font-semibold'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s
                        </blockquote>
                        <p class='text-base leading-8 my-5'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                        <a
                            href='#'
                            class='text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out'
                        >
                            #Election
                        </a>
                        ,{' '}
                        <a
                            href='#'
                            class='text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out'
                        >
                            #people
                        </a>
                        ,{' '}
                        <a
                            href='#'
                            class='text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out'
                        >
                            #Election2020
                        </a>
                        ,{' '}
                        <a
                            href='#'
                            class='text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out'
                        >
                            #trump
                        </a>
                        ,
                        <a
                            href='#'
                            class='text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out'
                        >
                            #Joe
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSingle;
