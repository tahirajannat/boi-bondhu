import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProductShop } from '../../../redux/reducers/productShopSlice';
import BookCard from '../../common/BookCard';
import Sidebar from '../Sidebar';

const Archive = () => {
    const productShop = useSelector(selectProductShop);
    const [allProducts, setAllProducts] = useState([productShop.products]);

    // }, [productsAll]);

    console.log(productShop.products);
    return (
        <div className='container mx-auto px-20 grid grid-cols-12 gap-6'>
            <div className='col-span-4'>
                <Sidebar />
            </div>
            <div className='col-span-8 my-8'>
                <h2 className='text-xl font-bold text-gray-900'>
                    {/* {productShop.allBooks.title} */}
                </h2>

                <div className='grid grid-cols-3 gap-6 mt-8'>
                    {/* <SellProductCard items={allProducts} /> */}
                    <BookCard items={productShop.allBooks} />
                </div>
            </div>
        </div>
    );
};

export default Archive;
