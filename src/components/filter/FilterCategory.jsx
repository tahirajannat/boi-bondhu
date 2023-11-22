export default function FilterCategory({ items, onChange }) {
    return (
        <div>
            <div className='border-b border-gray-200 py-6'>
                <h3 className='-my-3 flow-root'>
                    <button
                        type='button'
                        className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'
                        aria-controls='filter-section-0'
                        aria-expanded='false'
                    >
                        <span className='font-medium text-gray-900'>
                            Books Category
                        </span>
                        <span className='ml-6 flex items-center'>
                            <svg
                                className='h-5 w-5'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                            >
                                <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z' />
                            </svg>

                            <svg
                                className='h-5 w-5'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </span>
                    </button>
                </h3>

                <div className='pt-6' id='filter-section-0'>
                    <div className='space-y-4'>
                        {items.map((item) => (
                            <div className='flex items-center' key={item}>
                                <input
                                    id={item}
                                    name={item}
                                    value={item}
                                    type='checkbox'
                                    onChange={onChange}
                                    className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                />
                                <label
                                    htmlFor={item}
                                    className='ml-3 text-sm text-gray-600 capitalize'
                                >
                                    {item}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
