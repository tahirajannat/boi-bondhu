import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProductShop } from '../../../redux/reducers/productShopSlice';
import NotFound from '../../common/NotFound';
import ProductCard from '../../common/ProductCard';
import Sidebar from '../Sidebar';

export default function Archive() {
    const productShop = useSelector(selectProductShop);
    const [books, setBooks] = useState(productShop.allBooks);
    const [selectedAreas, setSelectedAreas] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);

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
        setBooks(
            filterBooks(productShop.allBooks, selectedAreas, selectedCategories)
        );
    }, [selectedAreas, selectedCategories]);

    const filterBooks = (books, selectedAreas, selectedCategories) => {
        let filteredBooks = books;

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

        return filteredBooks;
    };
    console.log('first book selected', books);
    console.log(' book areas', selectedPrices);
    return (
        <div className='container mx-auto px-20 grid grid-cols-12 gap-6'>
            <div className='col-span-3 bg-gray-50 mt-10'>
                <Sidebar
                    onCategoryChange={handleCategoryChange}
                    onAreaChange={handleAreaChange}
                />
            </div>
            <div className='col-span-9'>
                {/* You can add a title here if needed */}
                {/* <h2 className='text-xl font-bold text-gray-900'>Title</h2> */}

                <div className='grid grid-cols-3 gap-6 mt-10'>
                    {books.length > 0 ? (
                        <ProductCard items={books} />
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
