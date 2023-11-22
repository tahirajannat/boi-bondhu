import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductShop } from '../../redux/reducers/productShopSlice';
import FilterArea from '../filter/FilterArea';
import FilterCategory from '../filter/FilterCategory';

export default function Sidebar({ onChange, onAreaChange, onCategoryChange }) {
    const dispatch = useDispatch();
    const productShop = useSelector(selectProductShop);
    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState(productShop.allBooks);

    // Convert Categories array to a Set to remove duplicates
    const uniqueCategoriesSet = new Set(
        products.map((product) => product.category)
    );
    // Convert the Set back to an array
    const uniqueCategories = [...uniqueCategoriesSet];

    // Convert Areas array to a Set to remove duplicates
    const uniqueAreasSet = new Set(products.map((product) => product.area));
    // Convert the Set back to an array

    const uniqueAreas = [...uniqueAreasSet];
    // console.log('uniqueCategories: ', uniqueCategories);

    return (
        <div>
            <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <section
                    aria-labelledby='products-heading'
                    className='pt-6 pb-24'
                >
                    <form className='hidden lg:block'>
                        <h3 className='sr-only'>Categories</h3>
                        <ul
                            role='list'
                            className='space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900 text-left'
                        >
                            <li>
                                <a href='/lend-books'>Lend Books</a>
                            </li>
                            <li>
                                <a href='/borrow-books'>Borrow Books</a>
                            </li>
                            <li>
                                <a href='/exchange-books'>Exchange Books</a>
                            </li>
                        </ul>

                        <div className='border-b border-gray-200 py-6'>
                            <FilterArea
                                onChange={onAreaChange}
                                items={uniqueAreas}
                            />
                        </div>

                        <div className='border-b border-gray-200 py-6'>
                            <FilterCategory
                                onChange={onCategoryChange}
                                items={uniqueCategories}
                            />
                        </div>

                        <div className='border-b border-gray-200 py-6'>
                            {/* Your FilterPreferences component here */}
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
}
