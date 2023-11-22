import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductShop } from '../../../redux/reducers/productShopSlice';
import BookCard from '../../common/BookCard';
import Sidebar from '../Sidebar';

// Define a separate filter function

const Archive = () => {
    const productShop = useSelector(selectProductShop);
    const dispatch = useDispatch();
    const [books, setBooks] = useState(productShop.allBooks);
    const [selectedAreas, setSelectedAreas] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

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
    useEffect(() => {
        // Use the filter function to update the books state
        setBooks(filterBooksByAreas(productShop.allBooks, selectedAreas));

        console.log('selectedCategories:', selectedAreas);
    }, [selectedAreas]);

    useEffect(() => {
        // Use the filter function to update the books state
        setBooks(
            filterBooksByCategories(productShop.allBooks, selectedCategories)
        );

        console.log('selectedCategories:', selectedCategories);
    }, [selectedCategories]);

    const filterBooksByAreas = (books, selectedAreas) => {
        if (selectedAreas.length > 0) {
            return books.filter((book) => selectedAreas.includes(book.area));
        } else {
            return books;
        }
    };
    const filterBooksByCategories = (books, selectedCategories) => {
        if (selectedCategories.length > 0) {
            return books.filter((book) =>
                selectedCategories.includes(book.category)
            );
        } else {
            return books;
        }
    };

    return (
        <div className='container mx-auto px-20 grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
                <Sidebar
                    onCategoryChange={handleCategoryChange}
                    onAreaChange={handleAreaChange}
                />
                <div className='border-b border-gray-200 py-6'></div>
            </div>
            <div className='col-span-9 '>
                <h2 className='text-xl font-bold text-gray-900'></h2>

                <div className='grid grid-cols-3 gap-6 mt-8'>
                    <BookCard items={books} />
                </div>
            </div>
        </div>
    );
};

export default Archive;
