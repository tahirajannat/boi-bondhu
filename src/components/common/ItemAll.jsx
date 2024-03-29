import React from 'react';
import ProductCard from './ProductCard';

export default function ItemAll() {
    return (
        <div>
            <section aria-labelledby='products-heading' className='pt-6 pb-24'>
                {/* <ItemsCard /> */}
                <ProductCard />
                <div className='flex justify-center mt-10 space-x-1'>
                    <button className='flex items-center justify-center h-8 w-8 rounded text-gray-400'>
                        <svg
                            className='h-5 w-5'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path
                                fillRule='evenodd'
                                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>
                    <button
                        className='flex items-center justify-center h-8 px-2 rounded text-sm font-medium text-gray-400'
                        disabled
                    >
                        Prev
                    </button>
                    <button
                        className='flex items-center justify-center h-8 w-8 rounded bg-gray-300 text-sm font-medium text-yellow-600'
                        disabled
                    >
                        1
                    </button>
                    <button className='flex items-center justify-center h-8 w-8 rounded hover:bg-gray-300 text-sm font-medium text-gray-600 hover:text-yellow-600'>
                        2
                    </button>
                    <button className='flex items-center justify-center h-8 w-8 rounded hover:bg-gray-300 text-sm font-medium text-gray-600 hover:text-yellow-600'>
                        3
                    </button>
                    <button className='flex items-center justify-center h-8 px-2 rounded hover:bg-gray-300 text-sm font-medium text-gray-600 hover:text-yellow-600'>
                        Next
                    </button>
                    <button className='flex items-center justify-center h-8 w-8 rounded hover:bg-gray-300 text-gray-600 hover:text-yellow-600'>
                        <svg
                            className='h-5 w-5'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                        >
                            <path
                                fillRule='evenodd'
                                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    );
}
