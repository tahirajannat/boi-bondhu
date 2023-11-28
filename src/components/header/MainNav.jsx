// import { Route, Router, Routes } from "react-router-dom";
import { useState } from 'react';
import Logo from '../../assets/logo-4.png';
import Login from '../userAuth/Login';
// import Shop from "./Shop";
import { useDispatch, useSelector } from 'react-redux';
import { selectProductShop } from '../../redux/reducers/productShopSlice';
import SignUp from '../userAuth/SignUp';

export default function MainNav() {
    const dispatch = useDispatch();
    const productShop = useSelector(selectProductShop);
    const [films, setFilms] = useState(productShop.allBooks);
    const handeladd = (newmovie) => {
        setFilms([...films, newmovie]);
    };
    const [search, setSearch] = useState('');
    const handelserch = (searchedmovie) => {
        setSearch(searchedmovie);
    };
    const [ratin, setRating] = useState(0); // initial rating value

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate);
        // other logic
    };
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
                    <htmlForm>
                        <div className='flex'>
                            <div className='relative w-full'>
                                <input
                                    type='search'
                                    id='location-search"'
                                    className='block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300  focus:ring-transparent focus:border-gray-400 focus:outline-none'
                                    placeholder='Search htmlFor city or address'
                                    required=''
                                />
                                <button
                                    type='submit'
                                    className='absolute top-0 right-0 p-2 text-sm font-medium text-black bg-gray-300 rounded-r-md border border-gray-400 hover:bg-gray-400 focus:ring-0 focus:outline-none active:outline-none'
                                >
                                    <svg
                                        aria-hidden='true'
                                        className='w-5 h-5'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                        ></path>
                                    </svg>
                                    <span className='sr-only'>Search</span>
                                </button>
                            </div>
                        </div>
                    </htmlForm>
                    {/* <SearchBooks
                        searchp={search}
                        handelserchp={handelserch}
                        searchrate={ratin}
                        handelserchrate={handleRating}
                    />
                    <SearchList /> */}
                </div>
                <div className=' col-span-4 text-right flex-wrap mt-3'>
                    <div className=' flex-wrap text-right'>
                        <Login />
                        <SignUp />
                        <select
                            className='classic appearance-none py-1 pl-4 pr-8 rounded-md  bg-transparent text-black focus:outline-nones text-left border border-black'
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
