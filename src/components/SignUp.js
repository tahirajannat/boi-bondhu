import React, { useState } from 'react';
import { FaAsterisk, FaUserAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { RiCloseCircleFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import createController from '../apiController/createController';

export default function SignUp() {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPass, setUserPass] = useState(null);

  const handleSignUp = async () => {
    const response = await createController.signUp({
      username: userName,
      email: userEmail,
      password: userPass,
    });
    if (response?.status === 'Ok') {
      toast(`Successfully SignedUP`);
    } else {
      toast(`${response?.errorMessage}`);
    }
    // toast(`${response?.message}`);
  };
  return (
    <>
      <button
        className='bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mr-4 active:bg-gray-600  shadow hover:shadow-lg outline-none  ease-linear transition-all duration-150'
        type='button'
        onClick={() => setShowModal(true)}
      >
        Get started
      </button>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}

                <div className='flex items-center justify-end  rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase py-2 text-2xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    <RiCloseCircleFill />
                  </button>
                </div>
                {/*body*/}
                <div class='bg-white p-6 md:px-12 md:pt-12 border-t-10 border-solid border-indigo-600'>
                  <h2 class='text-3xl text-gray-800 text-center'>
                    Create Your Account
                  </h2>

                  <div class='signup-form mt-6 md:mt-12'>
                    <div class='border-2 border-solid rounded flex items-center mb-4'>
                      <div class='w-10 h-10 flex justify-center items-center flex-shrink-0'>
                        {/* <span class="far fa-user text-gray-500"></span> */}
                        <FaUserAlt />
                      </div>
                      <div class='flex-1'>
                        <input
                          type='text'
                          placeholder='Username'
                          className='h-10 py-1 pr-3 w-full text-gray-500'
                          onChange={(e) => {
                            setUserName(e?.target?.value);
                          }}
                        />
                      </div>
                    </div>

                    <div class='border-2 border-solid rounded flex items-center mb-4'>
                      <div class='w-10 h-10 flex justify-center items-center flex-shrink-0'>
                        {/* <span class="far fa-envelope text-gray-500"></span> */}
                        <HiMail />
                      </div>
                      <div class='flex-1'>
                        <input
                          type='text'
                          placeholder='E-mail'
                          className='h-10 py-1 pr-3 w-full text-gray-500'
                          onChange={(e) => {
                            setUserEmail(e?.target?.value);
                          }}
                        />
                      </div>
                    </div>

                    <div class='border-2 border-solid rounded flex items-center mb-4'>
                      <div class='w-10 h-10 flex justify-center items-center flex-shrink-0'>
                        {/* <span class="fas fa-asterisk text-gray-500"></span> */}
                        <FaAsterisk />
                      </div>
                      <div class='flex-1'>
                        <input
                          type='password'
                          placeholder='Password'
                          className='h-10 py-1 pr-3 w-full text-gray-500'
                          onChange={(e) => {
                            setUserPass(e?.target?.value);
                          }}
                        />
                      </div>
                    </div>

                    <p class='text-sm text-center mt-6'>
                      By signing up, you agree to our{' '}
                      <a href='#' class='text-indigo-600 hover:underline'>
                        Terms
                      </a>
                      and
                      <a href='#' class='text-indigo-600 hover:underline'>
                        Privacy Policy
                      </a>
                    </p>

                    <div class='text-center mt-6 md:mt-12'>
                      <button
                        class='bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300'
                        onClick={() => {
                          handleSignUp();
                        }}
                      >
                        Sign Up <span class='far fa-paper-plane ml-2'></span>
                      </button>
                    </div>
                  </div>

                  <div class='border-t border-solid mt-6 md:mt-12 pt-4'>
                    <p class='text-gray-500 text-center'>
                      Already have an account,{' '}
                      <a href='#' class='text-indigo-600 hover:underline'>
                        Sign In
                      </a>
                    </p>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className='opacity-75 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
