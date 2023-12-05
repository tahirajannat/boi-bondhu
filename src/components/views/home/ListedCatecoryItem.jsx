import { useState } from 'react';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductShop } from '../../../redux/reducers/productShopSlice';
import BookCard from '../../common/BookCard';
import NotFound from '../../common/NotFound';
import Tab from '../../tab/Tab';
import Tabs from '../../tab/Tabs';

export default function ListedCatecoryItem() {
    const [active, setActive] = useState(0);
    const productShop = useSelector(selectProductShop);
    const dispatch = useDispatch();
    const [books, setBooks] = useState(productShop.allBooks);
    const [borrow, setBorrow] = useState(productShop.allBooks);
    const [lend, setLend] = useState(productShop.allBooks);
    const [buySell, setBuySell] = useState(productShop.allBooks);

    const [link, setLink] = useState();
    const [products, setProducts] = useState(productShop.allBooks);

    const preferences = products.map((product) => product.preference);
    // console.log('all preferences', preferences);

    useEffect(() => {
        setBooks(filterBooks(productShop.allBooks, preferences));
        setBorrow(filterBorrow(productShop.allBooks, preferences));
        setLend(filterLend(productShop.allBooks, preferences));
        setBuySell(filterBuySell(productShop.allBooks, preferences));
    }, [productShop.allBooks]);

    const filterBooks = (books, preferences) => {
        let filteredBooks = books;
        if (preferences.length > 0) {
            filteredBooks = filteredBooks.filter(
                (book) => book.preference === 'exchange'
            );
        }

        return filteredBooks;
    };

    const filterBorrow = (borrow, preferences) => {
        let filteredBorrow = borrow;
        if (preferences.length > 0) {
            filteredBorrow = filteredBorrow.filter(
                (book) => book.preference === 'borrow'
            );
        }

        return filteredBorrow;
    };
    const filterLend = (lend, preferences) => {
        let filterLend = lend;
        if (preferences.length > 0) {
            filterLend = filterLend.filter(
                (book) => book.preference === 'lend'
            );
        }

        return filterLend;
    };
    const filterBuySell = (buySell, preferences) => {
        let filterBuySell = buySell;
        if (preferences.length > 0) {
            // Assuming preferences is an array, filter books with preference 'borrow'
            filterBuySell = filterBuySell.filter(
                (book) => book.preference === 'buySell'
            );
        }

        return filterBuySell;
    };

    console.log('books', borrow);
    const handleChange = (newActive) => {
        setActive(newActive);

        if (newActive === 3) {
            setLink('/shop');
        } else {
            setLink('/borrow');
        }

        // Now you can use the link variable as needed

        // ... rest of your code
    };
    console.log('Link:', link);

    return (
        <div className='text-left'>
            <Tabs
                active={active}
                onChange={handleChange}
                displayButton={true}
                link={link}
            >
                <Tab title='Exchange'>
                    <div className='my-10 grid grid-cols-4 gap-6 text-center'>
                        {books.length > 0 ? (
                            <BookCard items={books} />
                        ) : (
                            <div className='col-span-3 mt-32'>
                                <NotFound />
                            </div>
                        )}
                    </div>
                </Tab>
                <Tab title='Borrow'>
                    <div className='my-10 grid grid-cols-4 gap-6 text-center'>
                        {/* <BookCard items={books} /> */}
                        {borrow.length > 0 ? (
                            <BookCard items={borrow} />
                        ) : (
                            <div className='col-span-3 mt-32'>
                                <NotFound />
                            </div>
                        )}
                    </div>
                </Tab>
                <Tab title='Lend'>
                    <div className='my-10 grid grid-cols-4 gap-6 text-center'>
                        {/* <BookCard items={books} /> */}
                        {lend.length > 0 ? (
                            <BookCard items={lend} />
                        ) : (
                            <div className='col-span-3 mt-32'>
                                <NotFound />
                            </div>
                        )}
                    </div>
                </Tab>
                <Tab title='Buy & Sell'>
                    <div className='my-10 grid grid-cols-4 gap-6 text-center'>
                        {/* <BookCard items={books} /> */}
                        {buySell.length > 0 ? (
                            <BookCard items={buySell} />
                        ) : (
                            <div className='col-span-3 mt-32'>
                                <NotFound />
                            </div>
                        )}
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}
