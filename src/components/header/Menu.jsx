import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GoHeartFill } from 'react-icons/go';
import { MdShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductShop } from '../../redux/reducers/productShopSlice';

export default function Menu(props) {
    const productShop = useSelector(selectProductShop);
    const dispatch = useDispatch();
    const [books, setBooks] = useState(productShop.wishlistItems);
    console.log('bookmarked product', books.length);
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
                    <li class='font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700'>
                        <a
                            href='#'
                            role='button'
                            class='relative flex items-center'
                        >
                            <MdShoppingCart className='text-[30px] flex-shrink-0 text-gray-400 group-hover:text-gray-500' />
                            <span class='absolute -right-1  -top-0.5 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-xs leading-tight text-center'>
                                {books.length}
                            </span>
                        </a>
                    </li>
                    <li class='font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700'>
                        <a
                            href='#'
                            role='button'
                            class='relative flex items-center'
                        >
                            <GoHeartFill className='text-2xl flex-shrink-0 text-gray-400 group-hover:text-gray-500' />
                            <span class='absolute -right-2  -top-0.5 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-xs leading-tight text-center'>
                                {books.length}
                            </span>
                        </a>
                    </li>
                </div>
            </div>
        </header>
    );
}
