// import { Route, Router, Routes } from "react-router-dom";
import Logo from '../../assets/logo-4.png';
import Login from '../userAuth/Login';
// import Shop from "./Shop";
import SignUp from '../userAuth/SignUp';

export default function MainNav(props) {
    return (
        <header className='bg-white  shadow-lg transition-shadow font-serif z-20'>
            <div className='container mx-auto  px-20 py-6 grid grid-cols-12 gap-4'>
                <div className=' col-span-4'>
                    <a href='/' className=' '>
                        <img
                            src={Logo}
                            alt='Logo'
                            className='max-w-full h-14 '
                        />
                    </a>
                </div>
                <div className='col-span-4 mt-2'>
                    <form>
                        <div class='flex'>
                            <div class='relative w-full'>
                                <input
                                    type='search'
                                    id='location-search"'
                                    class='block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300  focus:ring-transparent focus:border-gray-400 focus:outline-none'
                                    placeholder='Search for city or address'
                                    required=''
                                />
                                <button
                                    type='submit'
                                    class='absolute top-0 right-0 p-2 text-sm font-medium text-black bg-gray-300 rounded-r-md border border-gray-400 hover:bg-gray-400 focus:ring-0 focus:outline-none active:outline-none'
                                >
                                    <svg
                                        aria-hidden='true'
                                        class='w-5 h-5'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            stroke-linecap='round'
                                            stroke-linejoin='round'
                                            stroke-width='2'
                                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                        ></path>
                                    </svg>
                                    <span class='sr-only'>Search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className=' col-span-4 text-right flex-wrap mt-3'>
                    <div className=' flex-wrap text-right'>
                        <Login />
                        <SignUp />
                        <select
                            class='classic appearance-none py-1 pl-4 pr-8 rounded-md  bg-transparent text-black focus:outline-nones text-left border border-black'
                            name='whatever'
                            id='frm-whatever'
                        >
                            <option value=''>En</option>
                            <option value='1'>Bn</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
}
