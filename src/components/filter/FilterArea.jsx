import React from 'react';

export default function FilterArea({ label, value, items, onClick }) {
    return (
        <div>
            <div class='border-b border-gray-200 py-6'>
                <h3 class='-my-3 flow-root'>
                    <button
                        type='button'
                        class='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'
                        aria-controls='filter-section-0'
                        aria-expanded='false'
                    >
                        <span class='font-medium text-gray-900'>Area</span>
                        <span class='ml-6 flex items-center'>
                            <svg
                                class='h-5 w-5'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                            >
                                <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z' />
                            </svg>

                            <svg
                                class='h-5 w-5'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    fill-rule='evenodd'
                                    d='M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z'
                                    clip-rule='evenodd'
                                />
                            </svg>
                        </span>
                    </button>
                </h3>

                <div class='pt-6' id='filter-section-0'>
                    <div class='space-y-4'>
                        {items.map((item) => (
                            <div class='flex items-center' key={item.value}>
                                <input
                                    id={item.value}
                                    name=''
                                    value={item.value}
                                    type='checkbox'
                                    onClick={onclick}
                                    class='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                />
                                <label
                                    for={item.value}
                                    class='ml-3 text-sm text-gray-600 capitalize'
                                >
                                    {item.value}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
