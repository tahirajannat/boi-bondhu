import React, { useState } from 'react';

export default function Login2() {
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    function validatehtmlForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className='flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center'>
            <div className='flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md'>
                <div className='p-4 py-6 text-white bg-teal-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly'>
                    <div className='my-3 text-4xl font-bold tracking-wider text-center'>
                        <a href='#'>বই বন্ধু</a>
                    </div>
                    {/* <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
            With the power of K-WD, you can now focus only on functionaries htmlFor
            your digital products, while leaving the UI design on us!
          </p> */}
                    <p className='flex flex-col items-center justify-center mt-10 text-center'>
                        <span>Don't have an account?</span>
                        <a href='#' className='underline'>
                            Get Started!
                        </a>
                    </p>
                    <p className='mt-6 text-sm text-center text-gray-300'>
                        Read our{' '}
                        <a href='#' className='underline'>
                            terms
                        </a>{' '}
                        and{' '}
                        <a href='#' className='underline'>
                            conditions
                        </a>
                    </p>
                </div>
                <div className='p-5 bg-white md:flex-1'>
                    <h3 className='my-4 text-2xl font-semibold text-gray-700'>
                        Account Login
                    </h3>
                    <htmlForm action='#' className='flex flex-col space-y-5'>
                        <div className='flex flex-col space-y-1'>
                            <label
                                htmlFor='email'
                                className='text-sm font-semibold text-gray-500 text-left'
                            >
                                Email address
                            </label>
                            <input
                                type='email'
                                id='email'
                                autofocus
                                className='px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200'
                                placeholder='Email address'
                            />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <div className='flex items-center justify-between'>
                                <label
                                    htmlFor='password'
                                    className='text-sm font-semibold text-gray-500'
                                >
                                    Password
                                </label>
                                <a
                                    href='#'
                                    className='text-sm text-blue-600 hover:underline focus:text-blue-800'
                                >
                                    htmlForgot Password?
                                </a>
                            </div>
                            <div className='relative'>
                                <input
                                    className='p-2 rounded border w-full'
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                />
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='16'
                                    height='16'
                                    fill='gray'
                                    className='bi bi-eye absolute top-1/2 right-3 -translate-y-1/2'
                                    viewBox='0 0 16 16'
                                >
                                    <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z' />
                                    <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z' />
                                </svg>
                            </div>
                        </div>

                        <div className='flex items-center space-x-2'>
                            <input
                                type='checkbox'
                                id='remember'
                                className='w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200'
                            />
                            <label
                                htmlFor='remember'
                                className='text-sm font-semibold text-gray-500'
                            >
                                Remember me
                            </label>
                        </div>
                        <div>
                            <button
                                type='submit'
                                className='w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-yellow-500 rounded-md shadow hover:bg-yellow-600 focus:outline-none focus:ring-blue-200 focus:ring-4'
                            >
                                Log in
                            </button>
                        </div>
                        <div className='flex flex-col space-y-5'>
                            <span className='flex items-center justify-center space-x-2'>
                                <span className='h-px bg-gray-400 w-14'></span>
                                <span className='font-normal text-gray-500'>
                                    or login with
                                </span>
                                <span className='h-px bg-gray-400 w-14'></span>
                            </span>
                            <div className='flex flex-col space-y-4'>
                                <a
                                    href='#'
                                    className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none'
                                >
                                    <span>
                                        <svg
                                            className='mr-3'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 48 48'
                                            width='25px'
                                        >
                                            <path
                                                fill='#FFC107'
                                                d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
                                            />
                                            <path
                                                fill='#FF3D00'
                                                d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
                                            />
                                            <path
                                                fill='#4CAF50'
                                                d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
                                            />
                                            <path
                                                fill='#1976D2'
                                                d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
                                            />
                                        </svg>
                                    </span>
                                    <span className='text-sm font-medium text-gray-800 group-hover:text-white'>
                                        Gmail
                                    </span>
                                </a>
                                <a
                                    href='#'
                                    className='flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none'
                                >
                                    <span>
                                        <svg
                                            className='text-blue-500 group-hover:text-white'
                                            width='20'
                                            height='20'
                                            fill='currentColor'
                                        >
                                            <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84'></path>
                                        </svg>
                                    </span>
                                    <span className='text-sm font-medium text-blue-500 group-hover:text-white'>
                                        Twitter
                                    </span>
                                </a>
                            </div>
                        </div>
                    </htmlForm>
                </div>
            </div>
        </div>
    );
}
