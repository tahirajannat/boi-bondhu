import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import AsyncSelect from 'react-select/async';
import { asyncSelectStyles } from '../../utility/asyncSelectStyle';
const CustomDropdownIndicator = (props) => {
    return (
        <div className='custom-dropdown-indicator' {...props}>
            <HiOutlineSearch
                className='wm-h-5 wm-w-5 wm-text-gray-400 wm-mr-2'
                aria-hidden='true'
            />
        </div>
    );
};
export default function SearchSelect({
    value,
    searchType,
    onChange,
    classes = 'wm-border-red-500',
    size = ' wm-w-72',
    loadOptions,
}) {
    return (
        <div className={` wm-h-auto selectSearchInput ${classes} ${size} `}>
            <AsyncSelect
                styles={asyncSelectStyles}
                cacheOptions
                placeholder='Search'
                components={{
                    DropdownIndicator: CustomDropdownIndicator,
                }}
                isMulti
                value={value}
                loadOptions={loadOptions}
                onChange={onChange}
            />
        </div>
    );
}
