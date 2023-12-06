import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { FaBars } from 'react-icons/fa';
import { GoHeart } from 'react-icons/go';

export default function Menu(props) {
    return (
        <header className='bg-gray-200 md:sticky top-0  border-b border-red-300 shadow-lg transition-shadow font-serif z-20'>
            <div className='container mx-auto px-20 py-4  gap-4 flex justify-between'>
                <nav className=' text-base items-center flex z-30'>
                    <input type='checkbox' id='check' />
                    <label
                        htmlFor='check'
                        className='checkbtn text-gray-900  float-right cursor-pointer text-2xl py-4'
                    >
                        <FaBars />
                    </label>

                    <ul className='menu flex items-center text-black'>
                        <a href='/' className='relative mx-5'>
                            Home
                        </a>
                        <a href='/about-boibondhu' className='relative mx-5'>
                            About Us
                        </a>
                        {/* <a href='/lend' className='relative mx-5'>
                            Lend
                        </a> */}

                        {/* <a href='/borrow' className='relative mx-5'>
                            Borrow
                        </a> */}
                        <a href='/book-share' className='relative mx-5'>
                            Bookshare
                        </a>

                        <a href='/shop' className=' relative mx-5'>
                            Buy & Sell
                        </a>
                        <a href='/blog' className=' relative mx-5'>
                            Blog
                        </a>
                        <a href='/contact' className=' relative mx-5'>
                            Contact
                        </a>
                    </ul>
                </nav>
                <div className='ml-4 lg:ml-6 flex'>
                    <a href='#' className='group -m-2 flex items-center p-2'>
                        <ShoppingBagIcon
                            className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                            aria-hidden='true'
                        />
                        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                            0
                        </span>
                        <span className='sr-only'>items in cart, view bag</span>
                    </a>
                    <a
                        href='#'
                        className='group -m-2 flex items-center p-2 relative'
                    >
                        <GoHeart
                            className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                            aria-hidden='true'
                        />
                        <span className='absolute right-0 top-0 bg-teal-600 w-4 h-4 rounded-full items-center text-white text-sm font-medium group-hover:text-gray-800'>
                            0
                        </span>
                        <span className='sr-only'>items in cart, view bag</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
