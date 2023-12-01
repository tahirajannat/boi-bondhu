import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Ad from '../../assets/images/ad.png';
import { selectProductShop } from '../../redux/reducers/productShopSlice';
import BannerSlider from '../common/BannerSlider';
import BookCard from '../common/BookCard';
import TitleSection from '../common/TitleSection';
import SideNav from '../header/SideNav';
import ListedCatecoryItem from './home/ListedCatecoryItem';

export default function Home() {
    const productShop = useSelector(selectProductShop);
    const dispatch = useDispatch();
    const [books, setBooks] = useState(productShop.allBooks);
    const [featured, setFeatured] = useState([...productShop.allBooks]);
    const [selectedAreas, setSelectedAreas] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPreferences, setSelectedPreferences] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);

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
                productShop.allBooks,
                selectedAreas,
                selectedCategories,
                selectedPreferences
            )
        );
    }, [selectedAreas, selectedCategories, selectedPreferences]);

    const filterBooks = (
        books,
        selectedAreas,
        selectedCategories,
        selectedPreferences
    ) => {
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
        if (selectedPreferences.length > 0) {
            filteredBooks = filteredBooks.filter((book) =>
                selectedPreferences.includes(book.preference)
            );
        }

        return filteredBooks;
    };

    return (
        <div className='my-8 container mx-auto px-20'>
            <div className='grid grid-cols-12 gap-6 container mx-auto'>
                <div className=' col-span-3'>
                    <SideNav title={'Preferences'} />
                    <div>
                        <img
                            alt='promotional AD'
                            src={Ad}
                            className='focus:outline-none w-full h-auto object-contain mt-5'
                        />
                    </div>

                    {/* <BookCard items={books} endIndex={1} /> */}
                </div>
                <div className='col-span-9 h-fit border-l border-b border-slate-100'>
                    <BannerSlider />
                </div>
            </div>
            <div className='container mx-auto my-16'>
                {featured.length > 0 && (
                    <>
                        <TitleSection title={'Featured Books'} />
                        <div className='grid grid-cols-4 gap-6'>
                            <BookCard items={featured} endIndex={4} />
                        </div>
                    </>
                )}

                {/* <TitleSection title={'Featured Books'} />
                <div className='grid grid-cols-4 gap-6'>
                    {featured.tag && <BookCard items={featured} endIndex={4} />}
                </div> */}
            </div>
            <div className='container mx-auto my-16'>
                {/* <TitleSection title={' All Listed Books'} /> */}

                {/* <ProductCard /> */}
                {/* <ProductSlider /> */}
                <div className=' gap-6'>
                    <ListedCatecoryItem />
                    {/* <ProductCard /> */}
                </div>
            </div>
            {/* <Filter /> */}
            {/* <ItemsCard /> */}
            {/* <Testimonial /> */}
        </div>
    );
}
