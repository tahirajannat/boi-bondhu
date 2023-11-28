import React from 'react';

export default function NotFound() {
    return (
        <div class=' w-3/4 mx-auto'>
            <div class='flex flex-col px-5 py-8 rounded-lg shadow bg-white'>
                <div class='flex flex-col items-center text-center'>
                    <div class='inline-block p-4 bg-yellow-50 rounded-full'>
                        <svg
                            class='w-12 h-12 fill-current text-yellow-500'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            <path d='M0 0h24v24H0V0z' fill='none' />
                            <path d='M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z' />
                        </svg>
                    </div>
                    <h1 className='text-3xl text-red-600 my-2 font-bold'>
                        {' '}
                        Sorry !
                    </h1>
                    <h2 class='my-2 font-semibold text-gray-800'>
                        No Products Match Your Criteria
                    </h2>
                    <p class='my-2 text-sm text-gray-600 leading-relaxed px-20'>
                        No products were found with the current filters. Try
                        adjusting or expanding your search criteria for better
                        results. Need help? Contact our support team.
                    </p>
                </div>

                <div class='flex items-center justify-center mt-3'>
                    {/* <button class='flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md'>
                        Cancel
                    </button> */}

                    <button class='block px-4 py-2 ml-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-md'>
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    );
}
