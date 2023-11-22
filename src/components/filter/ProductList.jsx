import React from 'react';
import { books } from '../../utility/data';
import Product from './Product';
export default function ProductList() {
    return (
        <>
            <Product items={books} />
        </>
    );
}
