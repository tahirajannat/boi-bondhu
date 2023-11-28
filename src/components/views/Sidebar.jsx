import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductShop } from '../../redux/reducers/productShopSlice';
import FilterArea from '../filter/FilterArea';
import FilterCategory from '../filter/FilterCategory';
import FilterPreferences from '../filter/FilterPreferences';
import SideNav from '../header/SideNav';

export default function Sidebar({
    onChange,
    onAreaChange,
    onCategoryChange,
    onPreferenceChange,
}) {
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
    const uniquePreferencesSet = new Set(
        products.map((product) => product.preference)
    );
    // Convert the Set back to an array

    const uniquePreferences = [...uniquePreferencesSet];
    // console.log('uniqueCategories: ', uniqueCategories);

    return (
        <div>
            <main className='mx-auto'>
                <section aria-labelledby='products-heading' className='pb-24'>
                    <form className='hidden lg:block'>
                        <h3 className='sr-only'>Categories</h3>
                        <SideNav />
                        <div className='px-4 sm:px-6 lg:px-8'>
                            <FilterPreferences
                                onChange={onPreferenceChange}
                                items={uniquePreferences}
                            />
                        </div>
                        <div className='px-4 sm:px-6 lg:px-8'>
                            <FilterArea
                                onChange={onAreaChange}
                                items={uniqueAreas}
                            />
                        </div>

                        <div className='px-4 sm:px-6 lg:px-8'>
                            <FilterCategory
                                onChange={onCategoryChange}
                                items={uniqueCategories}
                            />
                        </div>

                        {/* <div className='border-b border-gray-200 py-6'>
                            Your FilterPreferences component here
                        </div> */}
                    </form>
                </section>
            </main>
        </div>
    );
}
