import { FaBars } from 'react-icons/fa';

export default function Menu(props) {
    return (
        <header className='bg-gray-200 md:sticky top-0  border-b border-red-300 shadow-lg transition-shadow font-serif z-20'>
            <div className='container mx-auto  px-10 py-4  grid grid-cols-1 gap-4'>
                <nav className=' text-base  mx-auto text-center items-center flex z-30'>
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
                        <a href='/borrow' className='relative mx-5'>
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
            </div>
        </header>
    );
}
