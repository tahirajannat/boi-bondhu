import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductShop } from '../../redux/reducers/productShopSlice';
import BookCard from './BookCard';

export default function SearchList() {
    const productShop = useSelector(selectProductShop);
    const dispatch = useDispatch();
    const [books, setBooks] = useState(productShop.allBooks);
    return (
        <div>
            <BookCard items={books} />
        </div>
    );
}
