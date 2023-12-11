import {
    CheckIcon,
    ClockIcon,
    XMarkIcon as XMarkIconMini,
} from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    selectProductShop,
    updateProductShop,
} from '../../../redux/reducers/productShopSlice';
import BookCard from '../../common/BookCard';

const navigation = {
    categories: [
        {
            id: 'women',
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc:
                        'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt:
                        'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc:
                        'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt:
                        'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Dresses', href: '#' },
                        { name: 'Pants', href: '#' },
                        { name: 'Denim', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'T-Shirts', href: '#' },
                        { name: 'Jackets', href: '#' },
                        { name: 'Activewear', href: '#' },
                        { name: 'Browse All', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Significant Other', href: '#' },
                    ],
                },
            ],
        },
        {
            id: 'men',
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc:
                        'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                    imageAlt:
                        'Drawstring top with elastic loop closure and textured interior padding.',
                },
                {
                    name: 'Artwork Tees',
                    href: '#',
                    imageSrc:
                        'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                    imageAlt:
                        'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
                },
            ],
            sections: [
                {
                    id: 'clothing',
                    name: 'Clothing',
                    items: [
                        { name: 'Tops', href: '#' },
                        { name: 'Pants', href: '#' },
                        { name: 'Sweaters', href: '#' },
                        { name: 'T-Shirts', href: '#' },
                        { name: 'Jackets', href: '#' },
                        { name: 'Activewear', href: '#' },
                        { name: 'Browse All', href: '#' },
                    ],
                },
                {
                    id: 'accessories',
                    name: 'Accessories',
                    items: [
                        { name: 'Watches', href: '#' },
                        { name: 'Wallets', href: '#' },
                        { name: 'Bags', href: '#' },
                        { name: 'Sunglasses', href: '#' },
                        { name: 'Hats', href: '#' },
                        { name: 'Belts', href: '#' },
                    ],
                },
                {
                    id: 'brands',
                    name: 'Brands',
                    items: [
                        { name: 'Re-Arranged', href: '#' },
                        { name: 'Counterfeit', href: '#' },
                        { name: 'Full Nelson', href: '#' },
                        { name: 'My Way', href: '#' },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
};
const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Sienna',
        inStock: true,
        size: 'Large',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in sienna.",
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Black',
        inStock: false,
        leadTime: '3–4 weeks',
        size: 'Large',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 3,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35.00',
        color: 'White',
        inStock: true,
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
        imageAlt: 'Insulated bottle with white base and black snap lid.',
    },
];
const relatedProducts = [
    {
        id: 1,
        name: 'Billfold Wallet',
        href: '#',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg',
        imageAlt: 'Front of Billfold Wallet in natural leather.',
        price: '$118',
        color: 'Natural',
    },
    // More products...
];
const footerNavigation = {
    products: [
        { name: 'Bags', href: '#' },
        { name: 'Tees', href: '#' },
        { name: 'Objects', href: '#' },
        { name: 'Home Goods', href: '#' },
        { name: 'Accessories', href: '#' },
    ],
    company: [
        { name: 'Who we are', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' },
    ],
    customerService: [
        { name: 'Contact', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Warranty', href: '#' },
        { name: 'Secure Payments', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Find a store', href: '#' },
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Bookmark() {
    const [open, setOpen] = useState(false);
    const productShop = useSelector(selectProductShop);
    const dispatch = useDispatch();
    const [allBookmark, setAllBookmark] = useState([]);

    const [products, setProducts] = useState(productShop.allBooks);
    const [tags, setTags] = useState([productShop.allBooks]);
    const [bookmarkCount, setBookmarkCount] = useState(0);

    const preference = products.map((product) => product.tag);

    useEffect(() => {
        setAllBookmark(...[productShop.bookmarkItems]);
    }, [productShop.bookmarkItems, allBookmark]);

    console.log('all bookmarked', allBookmark.id);

    useEffect(() => {
        setTags(filterFeatured(productShop.allBooks, preference));
    }, [productShop.allBooks]);
    console.log('Tags: ', allBookmark);

    const filterFeatured = (books, preferences) => {
        let filterFeatured = books;
        if (preferences.length > 0) {
            filterFeatured = filterFeatured.filter(
                (book) => book.tag === 'featured'
            );
        }

        return filterFeatured;
    };

    const [bookmarkedItems, setBookmarkedItems] = useState([]);

    useEffect(() => {
        setBookmarkedItems([...productShop.bookmarkItems]);
    }, [productShop.bookmarkItems]);

    console.log('first bookmarked items: ', bookmarkedItems);

    const removeBookmark = (item) => {
        const isBookmarked = bookmarkedItems.find(
            (bookmark) => bookmark.id === item.id
        );

        if (isBookmarked) {
            // If the item is bookmarked, remove it
            const updatedBookmarks = bookmarkedItems.filter(
                (bookmark) => bookmark.id !== item.id
            );
            setBookmarkedItems(updatedBookmarks);

            // Dispatch action to update the Redux store
            dispatch(updateProductShop({ bookmarkItems: updatedBookmarks }));
        } else {
            console.error('Item is not bookmarked:', item);
        }
    };

    return (
        <div className='bg-white'>
            <div className='container mx-auto px-20 pb-24 pt-16'>
                <h1 className='text-2xl font-bold tracking-tight text-gray-900 mb-10'>
                    Items in your Bookmark
                </h1>

                <section aria-labelledby='cart-heading' className=''>
                    <h2 id='cart-heading' className='sr-only'>
                        Items in your shopping cart
                    </h2>

                    <ul
                        role='list'
                        className='divide-y divide-gray-200 border-b border-t border-gray-200'
                    >
                        {allBookmark.map((product, productIdx) => (
                            <li key={product.id} className='flex py-6 '>
                                <div className='flex-shrink-0'>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className='h-auto w-20 rounded-md object-fit object-center'
                                    />
                                </div>

                                <div className='ml-4 flex flex-1 flex-col justify-between sm:ml-6'>
                                    <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                                        <div>
                                            <div className='flex justify-between'>
                                                <h3 className=' text-lg font-bold text-gray-700 hover:text-gray-800'>
                                                    <Link
                                                        state={product}
                                                        to={`/bookmark/${product.id}`}
                                                    >
                                                        {product.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                            <div className='mt-1 flex text-sm'>
                                                <p className='text-gray-500 capitalize'>
                                                    {product.category}
                                                </p>
                                                {product.size ? (
                                                    <p className='ml-4 border-l border-gray-200 pl-4 text-gray-500'>
                                                        {product.tag}
                                                    </p>
                                                ) : null}
                                            </div>
                                            <p className='mt-1 text-sm font-medium text-gray-900'>
                                                {product.price}৳
                                            </p>
                                        </div>

                                        <div className='mt-4 sm:mt-0 sm:pr-9'>
                                            <label
                                                htmlFor={`quantity-${productIdx}`}
                                                className='sr-only'
                                            >
                                                Quantity, {product.title}
                                            </label>
                                            <select
                                                id={`quantity-${productIdx}`}
                                                name={`quantity-${productIdx}`}
                                                className='max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
                                            >
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option>
                                                <option value={7}>7</option>
                                                <option value={8}>8</option>
                                            </select>

                                            {/* ... Remove Buttons... */}
                                            <div className='mt-2'>
                                                <button
                                                    type='button'
                                                    className='inline-flex items-center px-3 py-1.5 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-800'
                                                    onClick={() =>
                                                        removeBookmark(product)
                                                    }
                                                >
                                                    Remove from Bookmark
                                                </button>
                                            </div>
                                            <div className='absolute right-0 top-0'>
                                                <button
                                                    type='button'
                                                    className=' inline-flex p-1.5 bg-red-600 rounded-full text-white hover:text-red-600 hover:bg-gray-300  duration-150'
                                                    onClick={() =>
                                                        removeBookmark(product)
                                                    }
                                                >
                                                    <span className='sr-only'>
                                                        Remove
                                                    </span>
                                                    <XMarkIconMini
                                                        className='h-5 w-5'
                                                        aria-hidden='true'
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <p className='mt-4 flex space-x-2 text-sm text-gray-700'>
                                        {product.inStock ? (
                                            <CheckIcon
                                                className='h-5 w-5 flex-shrink-0 text-green-500'
                                                aria-hidden='true'
                                            />
                                        ) : (
                                            <ClockIcon
                                                className='h-5 w-5 flex-shrink-0 text-gray-300'
                                                aria-hidden='true'
                                            />
                                        )}

                                        <span>
                                            {product.inStock
                                                ? 'In stock'
                                                : `Ships in ${product.leadTime}`}
                                        </span>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Related products */}
                <section aria-labelledby='related-heading' className='mt-24'>
                    <h2
                        id='related-heading'
                        className='text-lg font-medium text-gray-900'
                    >
                        You may also like&hellip;
                    </h2>

                    <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                        <BookCard items={tags} endIndex={4} />
                    </div>
                </section>
            </div>
        </div>
    );
}
