import React, { useState } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import getController from '../apiController/getController';
import { UseUser } from '../contexts/AuthContext';

// import {
//   passwordDecryption,
//   passwordEncryption,
// } from "../utility/passwordEncryption";
export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const { setUser } = UseUser();
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

  const handleFormSubmit = (e) => {
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

  const handleFormSubmit1 = async (e) => {
    e.preventDefault();
    // console.log(`💩`, { email, password });

    //
    const response = await getController.signIn({
      email,
      password,
    });
    console.log(
      `🔥 ~ file: Login.js ~ line 73 ~ handleFormSubmit1 ~ response`,
      await response
    );

    if ((await response?.status) == 200) {
      setUser(response?.userData);

      setShowModal(false);
    }
    // const myUser = {
    //   loggedIn: true,
    //   profile: {
    //     name: 'Tahira',
    //     email: 'tahira@gmail.com',
    //   },
    // };
    // setUser(myUser);

    // setShowModal(false);
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
            <div class='w-full bg-white rounded shadow-lg md:max-w-sm md:mx-auto'>
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
                <h2 class='text-3xl text-gray-800 text-center mb-4'>
                  Login to Your Account
                </h2>

                {successMsg && (
                  <div className='text-white bg-teal-500 py-4 mb'>
                    {successMsg}
                  </div>
                )}

                <form
                  class='mb-4 text-left'
                  action='/'
                  method='post'
                  autoComplete='off'
                  onSubmit={handleFormSubmit1}
                >
                  <div class='mb-4 md:w-full'>
                    <label for='email' class='block text-xs mb-1'>
                      Username or Email
                    </label>
                    <input
                      class='w-full border rounded p-2 outline-none focus:shadow-outline text-gray-500'
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
                  <div class='mb-6 md:w-full'>
                    <label for='password' class='block text-xs mb-1'>
                      Password
                    </label>
                    <input
                      class='w-full border rounded p-2 outline-none focus:shadow-outline text-gray-500'
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
                  <button class='bg-yellow-500 hover:bg-yellow-600 text-white uppercase text-sm font-semibold px-4 py-2 rounded'>
                    Login
                  </button>
                </form>
                <a class='text-blue-700 text-left text-sm' href='/login'>
                  Forgot password?
                </a>
                <p class='text-sm text-center mt-4'>
                  By signing up, you agree to our{' '}
                  <a href='#' class='text-indigo-600 hover:underline'>
                    Terms
                  </a>{' '}
                  and{' '}
                  <a href='#' class='text-indigo-600 hover:underline'>
                    Privacy Policy
                  </a>
                </p>
                <div class='border-t border-solid mt-4 pt-4'>
                  <p class='text-gray-500 text-center'>
                    Don't have an account,{' '}
                    <a href='#' class='text-indigo-600 hover:underline'>
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
