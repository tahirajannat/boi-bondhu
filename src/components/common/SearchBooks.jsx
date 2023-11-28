import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function SearchBooks({
    searchp,
    handelserchp,
    searchrate,
    handelserchrate,
}) {
    return (
        <div>
            Search{' '}
            <input
                type='text'
                onChange={(e) => handelserchp(e.target.value)}
                value={searchp}
            />{' '}
            <br />
            <FaStar
                onClick={handelserchrate}
                ratingValue={searchrate} /* Available Props */
            />
        </div>
    );
}
