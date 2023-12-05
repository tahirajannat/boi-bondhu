import { useState } from 'react';
import Accordion from '../common/Accordion';

export default function FilterPreferences({
    items,
    onChange,
    endIndex,
    startIndex,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const slicedBooks = items.slice(startIndex, endIndex);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='border-b border-gray-200 py-6'>
            <Accordion
                title={'Preferences'}
                onClick={toggleAccordion}
                isOpen={isOpen}
            />
            {isOpen && (
                <div className='pt-6' id='filter-section-0'>
                    <div className='space-y-4'>
                        {slicedBooks.map((item) => (
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
            )}
        </div>
    );
}
