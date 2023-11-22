import React, { useState } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
// import {
//   passwordDecryption,
//   passwordEncryption,
// } from "../utility/passwordEncryption";
export default function Login() {
    const [showModal, setShowModal] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [successMsg, setSuccessMsg] = useState('');

    const handleEmailChange = (e) => {
        setSuccessMsg('');
        setEmailError('');
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setSuccessMsg('');
        setPasswordError('');
        setPassword(e.target.value);
    };

    const handlehtmlFormSubmit = (e) => {
        e.preventDefault();

        if (email !== '') {
            const emailRegex =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (emailRegex.test(email)) {
                setEmailError('');
                if (email === 'admin@demo.com') {
                    setEmailError('');
                    if (password === 'demo') {
                        setSuccessMsg('You are succesfully logged in');
                    } else {
                        setPasswordError('password does not match');
                    }
                } else {
                    setEmailError('Email does not match');
                }
            } else {
                setEmailError('Invalid Email');
            }
        } else {
            setEmailError('Email Required');
        }

        if (password !== '') {
        } else {
            setPasswordError('Passwoed Required');
        }
    };

    const handlehtmlFormSubmit1 = (e) => {
        e.preventDefault();
        // console.log(`💩`, passwordEncryption("jkl"));
        // console.log(`💩`, passwordDecryption("jkl"));

        console.log(`💩`, { email, password });

        if (email !== '') {
        } else {
            setEmailError('Email Required');
        }

        if (password !== '') {
        } else {
            setPasswordError('Passwoed Required');
        }

        //   const requestOptions = {
        //     method: "GET",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //       email: userEmail,
        //       password: userPass,
        //     }),
        //   };
        //   try {
        //     const response = await fetch(
        //       "http://localhost:3009/api/user",
        //       requestOptions
        //     );
        //     const data = await response.json();
        //     console.log(`💩 ~ file: SignUp.js ~ line 22 ~ handleSignUp ~ data`, data);
        //     if (data) {
        //       toast(`${data?.message}`);
        //     } else toast("Something Wrong !!");
        //   } catch (error) {
        //     toast("Something Wrong Or Duplicate Email !!");
        //   }
        // };
    };

    return (
        <>
            <button
                className='bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mr-4 active:bg-gray-600  shadow hover:shadow-lg outline-none  ease-linear transition-all duration-150'
                type='button'
                onClick={() => setShowModal(true)}
            >
                Sign In
            </button>
            {showModal ? (
                <>
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                        <div className='w-full bg-white rounded shadow-lg md:max-w-sm md:mx-auto'>
                            <div className='flex items-center justify-end rounded-b '>
                                <button
                                    className='text-red-500 background-transparent font-bold uppercase py-2 text-2xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                    type='button'
                                    onClick={() => setShowModal(false)}
                                >
                                    <RiCloseCircleFill />
                                </button>
                            </div>
                            <div className='p-6'>
                                <h2 className='text-3xl text-gray-800 text-center mb-4'>
                                    Login to Your Account
                                </h2>

                                {successMsg && (
                                    <div className='text-white bg-teal-500 py-4 mb'>
                                        {successMsg}
                                    </div>
                                )}

                                <htmlForm
                                    className='mb-4 text-left'
                                    action='/'
                                    method='post'
                                    autoComplete='off'
                                    onSubmit={handlehtmlFormSubmit1}
                                >
                                    <div className='mb-4 md:w-full'>
                                        <label
                                            htmlFor='email'
                                            className='block text-xs mb-1'
                                        >
                                            Username or Email
                                        </label>
                                        <input
                                            className='w-full border rounded p-2 outline-none focus:shadow-outline text-gray-500'
                                            type='email'
                                            name='email'
                                            id='email'
                                            placeholder='Username or Email'
                                            onChange={handleEmailChange}
                                            value={email}
                                        />
                                    </div>
                                    {emailError && (
                                        <div className='error-msg text-red-500 mb-4'>
                                            {emailError}
                                        </div>
                                    )}
                                    <div className='mb-6 md:w-full'>
                                        <label
                                            htmlFor='password'
                                            className='block text-xs mb-1'
                                        >
                                            Password
                                        </label>
                                        <input
                                            className='w-full border rounded p-2 outline-none focus:shadow-outline text-gray-500'
                                            type='password'
                                            name='password'
                                            id='password'
                                            placeholder='Password'
                                            onChange={handlePasswordChange}
                                            value={password}
                                        />
                                    </div>
                                    {passwordError && (
                                        <div className='error-msg text-red-500 mb-4'>
                                            {passwordError}
                                        </div>
                                    )}
                                    <button className='bg-yellow-500 hover:bg-yellow-600 text-white uppercase text-sm font-semibold px-4 py-2 rounded'>
                                        Login
                                    </button>
                                </htmlForm>
                                <a
                                    className='text-blue-700 text-left text-sm'
                                    href='/login'
                                >
                                    htmlForgot password?
                                </a>
                                <p className='text-sm text-center mt-4'>
                                    By signing up, you agree to our{' '}
                                    <a
                                        href='#'
                                        className='text-indigo-600 hover:underline'
                                    >
                                        Terms
                                    </a>{' '}
                                    and{' '}
                                    <a
                                        href='#'
                                        className='text-indigo-600 hover:underline'
                                    >
                                        Privacy Policy
                                    </a>
                                </p>
                                <div className='border-t border-solid mt-4 pt-4'>
                                    <p className='text-gray-500 text-center'>
                                        Don't have an account,{' '}
                                        <a
                                            href='#'
                                            className='text-indigo-600 hover:underline'
                                        >
                                            Sign Up
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='opacity-75 fixed inset-0 z-40 bg-black'></div>
                </>
            ) : null}
        </>
    );
}
