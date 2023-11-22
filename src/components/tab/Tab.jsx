import React from 'react';

export default function Tab({ title, children }) {
    return (
        <>
            <h2 className='text-xl text-black font-bold pb-2'>{children}</h2>
        </>
    );
}
