// SingleSelect.js

import React from 'react';
import Select from 'react-select';

export default function SingleSelect({ optionList }) {
    // Dot function
    const dot = (color = '#0C9488') => ({
        alignItems: 'center',
        display: 'flex',
        ':before': {
            backgroundColor: color,
            borderRadius: 10,
            content: '" "',
            display: 'block',
            marginRight: 6,
            height: 10,
            width: 10,
        },
    });
    // Define colourStyles
    const colourStyles = {
        control: (styles) => ({ ...styles, backgroundColor: 'white' }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? undefined
                    : isSelected
                    ? '#fff'
                    : isFocused
                    ? '#fff'
                    : '#fff',
                color: isDisabled
                    ? '#fff'
                    : isSelected
                    ? data.background
                        ? 'white'
                        : 'black'
                    : '#0C9488',
                cursor: isDisabled ? 'not-allowed' : 'default',
                ':active': {
                    ...styles[':active'],
                    backgroundColor: !isDisabled
                        ? isSelected
                            ? '#0C9488'
                            : '#eeeeee'
                        : undefined,
                    color: !isDisabled
                        ? isSelected
                            ? '#fff'
                            : '#000'
                        : undefined,
                },
                ':hover': {
                    ...styles[':hover'],
                    backgroundColor: !isDisabled ? '#eeeeee' : undefined,
                    color: !isDisabled ? '#000' : undefined,
                },
            };
        },
        input: (styles) => ({ ...styles, ...dot() }),
        placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
        singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
    };

    // Use the correct property for the value of each option
    // const mappedOptionList = optionList.map((option) => ({
    //     value: option.value, // Use the correct property here (e.g., option.value)
    //     label: option.area_name.bn ? option.area_name.bn : option.area_name.bn,
    // }));
    // console.log('mappedOptionList', mappedOptionList);

    // Define the SelectComponent as a functional component
    return (
        <div>
            <Select options={optionList} styles={colourStyles} />
        </div>
    );
}
