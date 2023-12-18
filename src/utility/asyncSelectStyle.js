export const asyncSelectStyles = {
    input: (provided) => ({
        ...provided,
        padding: '4px 8px',
        borderRadius: '4px',
        outline: 'none',
        boxShadow: 'none !important',
        minWidth: '20px',
        fontSize: '16px',
        fontWeight: 400,
        margin: '0',
        '&:focus': {
            ...provided['&:focus'],
            backgroundColor: 'red',
        },
    }),
    placeholder: (provided) => ({
        ...provided,
        fontSize: '16px', // Adjust the font size as needed
        fontWeight: 400,
    }),
    ValueContainer: (provided) => ({
        padding: '0 8px',
    }),
    multiValueLabel: (provided) => ({
        ...provided,
        backgroundColor: 'lightblue',
        padding: '4px',
        borderRadius: '4px',
        color: 'blue',
        minWidth: '20px',
    }),
    control: (provided) => ({
        ...provided,
        fontSize: '16px', // Adjust the font size as needed
        fontWeight: 400,
        borderRadius: '4px',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        border: '1px solid rgba(241, 243, 247, 1)',
        '&:hover': {
            color: 'red',
        },
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        backgroundColor: 'blue',
        height: '0',
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: 'blue',
        '&:hover': {
            color: 'red',
        },
    }),
};
