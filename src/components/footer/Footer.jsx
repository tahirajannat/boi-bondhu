import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';
import Logo from '../../assets/logo.png';
import SignUp from '../userAuth/SignUp';

export default function Footer() {
    return (
        <footer className='bg-gray-700 md:sticky top-0  border-b border-gray-500 shadow-lg transition-shadow font-serif z-20'>
            <div class='bg-gray-700 pt-5'>
                <div class='max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto'>
                    <div class='p-5 text-left'>
                        {/* <h3 class="font-bold text-xl text-indigo-600">Componentity</h3> */}
                        <a href='#about' className=' '>
                            <img
                                src={Logo}
                                alt='Logo'
                                className='max-w-full h-14 '
                            />
                        </a>
                        <div class='mt-8'>
                            <SignUp class='px-8 py-2 mt-5 bg-yellow-600 hover:bg-purple-900 rounded text-white' />
                        </div>
                    </div>
                    <div class='p-5 text-left'>
                        <div class='text-sm uppercase text-white font-bold'>
                            Resources
                        </div>
                        <a class='my-3 block text-gray-400' href='/#'>
                            Documentation{' '}
                            <span class='text-gray-300 text-xs p-1'></span>
                        </a>
                        <a class='my-3 block text-gray-400' href='/#'>
                            Tutorials{' '}
                            <span class='text-teal-600 text-xs p-1'></span>
                        </a>
                        <a class='my-3 block text-gray-400' href='/#'>
                            Support{' '}
                            <span class='text-yellow-600 text-xs p-1'>New</span>
                        </a>
                    </div>
                    <div class='p-5 text-left'>
                        <div class='text-sm uppercase text-white font-bold'>
                            Support
                        </div>
                        <a class='my-3 block text-gray-400' href='/#'>
                            Help Center{' '}
                            <span class='text-teal-600 text-xs p-1'></span>
                        </a>
                        <a class='my-3 block text-gray-400' href='/#'>
                            Privacy Policy{' '}
                            <span class='text-teal-600 text-xs p-1'></span>
                        </a>
                        <a class='my-3 block text-gray-400' href='/#'>
                            Conditions{' '}
                            <span class='text-teal-600 text-xs p-1'></span>
                        </a>
                    </div>
                    <div class='p-5 text-left'>
                        <div class='text-sm uppercase text-white font-bold'>
                            Contact us
                        </div>
                        <a class='my-3 block text-gray-400' href='/#'>
                            XXX XXXX, Floor 4 San Francisco, CA{' '}
                            <span class='text-teal-600 text-xs p-1'></span>
                        </a>
                        <a class='my-3 block text-gray-400' href='/#'>
                            contact@company.com{' '}
                            <span class='text-teal-600 text-xs p-1'></span>
                        </a>
                    </div>
                </div>
            </div>

            <div class='bg-gray-700 pt-2'>
                <div
                    class='flex pb-5 px-3 m-auto pt-5 border-t border-gray-600 text-gray-800 text-sm flex-col
      max-w-screen-lg items-center'
                >
                    <div class='md:flex-auto md:flex-row-reverse mt-2 flex-row flex'>
                        <a
                            href='/#'
                            className='p-2 mx-1 bg-white rounded-full justify-between'
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href='/#'
                            className='p-2 mx-1 bg-white rounded-full justify-between'
                        >
                            <FaLinkedinIn />
                        </a>
                        <a
                            href='/#'
                            className='p-2 mx-1 bg-white rounded-full justify-between'
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href='/#'
                            className='p-2 mx-1 bg-white rounded-full justify-between'
                        >
                            <FaFacebookF />
                        </a>
                    </div>
                    <div class='my-5 text-gray-500'>
                        © Copyright 2022. All Rights Reserved.
                    </div>
                </div>
            </div>

            {/* <a href="https://componentity.com" target="_blank" class="block">
  <img src="http://codenawis.com/componentity/wp-content/uploads/2020/08/Logo-componentity-%E2%80%93-9.png" class="w-48 mx-auto my-5">
</a> */}
        </footer>
    );
}
