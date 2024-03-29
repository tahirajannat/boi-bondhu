import React from 'react';

export default function Accordion({ title, isOpen, onClick }) {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleAccordion = () => {
    //     setIsOpen(!isOpen);
    // };
    return (
        <div>
            <button
                onClick={onClick}
                type='button'
                className='flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500'
                aria-controls='filter-section-0'
                aria-expanded='false'
            >
                <span className='font-medium text-gray-900'>{title}</span>
                <span className='items-center'>
                    {isOpen ? (
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
                    ) : (
                        <svg
                            className='h-5 w-5'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                            aria-hidden='true'
                        >
                            <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z' />
                        </svg>
                    )}
                </span>
            </button>
        </div>
    );
}
