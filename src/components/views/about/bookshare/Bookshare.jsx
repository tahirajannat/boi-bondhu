import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductShop } from '../../../../redux/reducers/productShopSlice';
import BookCard from '../../../common/BookCard';
import NotFound from '../../../common/NotFound';
import Sidebar from '../../Sidebar';

export default function Bookshare() {
    const productShop = useSelector(selectProductShop);
    const dispatch = useDispatch();
    const [selectedAreas, setSelectedAreas] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPreferences, setSelectedPreferences] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [buySell, setBuySell] = useState([]);
    const [books, setBooks] = useState(buySell);

    const [products, setProducts] = useState(productShop.allBooks);

    const preferences = products.map((product) => product.preference);
    console.log('all preferences', preferences);

    const filterBuySell = (buySell, preferences) => {
        let filteredBuySell = buySell;
        if (preferences.length > 0) {
            filteredBuySell = filteredBuySell.filter(
                (book) =>
                    book.preference === 'borrow' ||
                    book.preference === 'exchange' ||
                    book.preference === 'lend'
            );
        }

        return filteredBuySell;
    };

    useEffect(() => {
        setBuySell(filterBuySell(productShop.allBooks, preferences));
    }, [productShop.allBooks]);

    console.log('buySell', buySell);

    const handleAreaChange = (event) => {
        const { value, checked } = event.target;
        setSelectedAreas((prevAreas) =>
            checked
                ? [...prevAreas, value]
                : prevAreas.filter((area) => area !== value)
        );
    };

    const handleCategoryChange = (event) => {
        const { value, checked } = event.target;
        setSelectedCategories((prevCategories) =>
            checked
                ? [...prevCategories, value]
                : prevCategories.filter((category) => category !== value)
        );
    };
    const handlePreferenceChange = (event) => {
        const { value, checked } = event.target;
        setSelectedPreferences((prevPreferences) =>
            checked
                ? [...prevPreferences, value]
                : prevPreferences.filter((preference) => preference !== value)
        );
    };
    useEffect(() => {
        // Use the spread operator to create a new array with the elements of productShop.allBooks
        setSelectedPrices([...productShop.allBooks]);
    }, [productShop.allBooks]);

    console.log('first price', selectedPrices.price);
    useEffect(() => {
        // Use the filter function to update the books state
        setBooks(
            filterBooks(
                buySell,
                selectedAreas,
                selectedCategories,
                selectedPreferences
            )
        );
    }, [buySell, selectedAreas, selectedCategories, selectedPreferences]);

    const filterBooks = (
        buySell,
        selectedAreas,
        selectedCategories,
        selectedPreferences
    ) => {
        let filteredBooks = buySell;

        if (selectedAreas.length > 0) {
            filteredBooks = filteredBooks.filter((book) =>
                selectedAreas.includes(book.area)
            );
        }

        if (selectedCategories.length > 0) {
            filteredBooks = filteredBooks.filter((book) =>
                selectedCategories.includes(book.category)
            );
        }
        if (selectedPreferences.length > 0) {
            filteredBooks = filteredBooks.filter((book) =>
                selectedPreferences.includes(book.preference)
            );
        }

        return filteredBooks;
    };

    return (
        <div className='container  mx-auto px-20 grid grid-cols-12 gap-6'>
            <div className='col-span-3 bg-gray-50 mt-10'>
                <Sidebar
                    onCategoryChange={handleCategoryChange}
                    onAreaChange={handleAreaChange}
                    onPreferenceChange={handlePreferenceChange}
                />
            </div>
            <div className='col-span-9 '>
                <h2 className='text-xl font-bold text-gray-900'></h2>

                <div className='grid grid-cols-3 gap-6 my-16'>
                    {/* {books.length > 0 && books.proce.length === 0 ? (
                        <BookCard items={books} />
                    ) : (
                        'empty'
                    )} */}
                    {books.length > 0 ? (
                        <BookCard items={books} />
                    ) : (
                        <div className='col-span-3 mt-32'>
                            <NotFound />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
