import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProductShop } from '../../redux/reducers/productShopSlice';

export default function SellProductCard({ items, startIndex, endIndex }) {
    const productShop = useSelector(selectProductShop);
    const [allProducts, setAllProducts] = useState([productShop.products]);

    // Slice the products array based on the provided startIndex and endIndex
    const slicedProducts = items.slice(startIndex, endIndex);

    return (
        <>
            {slicedProducts.map((product) => (
                <div key={product.id} className='col-span-1'>
                    <div className='relative'>
                        <div className='relative h-72 w-full overflow-hidden rounded-lg'>
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className='h-52 w-full object-contain object-center mt-9'
                            />
                        </div>
                        <div className='relative mt-4'>
                            <h3 className='text-sm font-medium text-gray-900'>
                                {product.name}
                            </h3>
                            <p className='mt-1 text-sm text-gray-500'>
                                {product.color}
                            </p>
                        </div>
                        <div className='absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4'>
                            <div
                                aria-hidden='true'
                                className='absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50'
                            />
                            <p className='relative text-lg font-semibold text-white'>
                                {product.price}
                            </p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <a
                            href={product.href}
                            className='relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200'
                        >
                            Add to bag
                            <span className='sr-only'>, {product.name}</span>
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
}
