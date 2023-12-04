import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectProductShop } from '../../redux/reducers/productShopSlice';

export default function SearchPage() {
    const productShop = useSelector(selectProductShop);
    const dispatch = useDispatch();
    const [apiUsers, setApiUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchItem, setSearchItem] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        setApiUsers([...productShop.allBooks]);
        setFilteredUsers([...productShop.allBooks]);
        setLoading(false);
    }, [productShop.allBooks]);
    // console.log('apiUsers', apiUsers);
    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm);

        // filter the items using the apiUsers state
        const filteredItems = apiUsers.filter(
            (allBooks) =>
                allBooks.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                allBooks.author
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                allBooks.area.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredUsers(filteredItems);
    };

    return (
        <div className='relative'>
            <div className='flex'>
                <div className='relative w-full'>
                    <input
                        type='text'
                        value={searchItem}
                        onChange={handleInputChange}
                        placeholder='Type to search'
                        className='block p-2 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-transparent focus:border-gray-400 focus:outline-none'
                        required=''
                    />
                    <button
                        type='submit'
                        className='absolute top-0 right-0 p-2 text-sm font-medium text-black bg-gray-300 rounded-r-md border border-gray-400 hover:bg-gray-400 focus:ring-0 focus:outline-none active:outline-none'
                    >
                        <svg
                            aria-hidden='true'
                            className='w-5 h-5'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                            ></path>
                        </svg>
                        <span className='sr-only'>Search</span>
                    </button>
                </div>
            </div>
            <div className='absolute z-50 bg-white shadow-sm w-full p-4 rounded-[2px]'>
                {loading && <p>Loading...</p>}
                {error && <p>There was an error loading the users</p>}
                {!loading && !error && filteredUsers.length === 0 ? (
                    <p>No users found</p>
                ) : (
                    <>
                        {searchItem.length > 0 && (
                            <ul>
                                {filteredUsers.map((book) => (
                                    <li key={book.id}>
                                        <Link
                                            state={book}
                                            to={`/shop/${book.id}`}
                                        >
                                            {book.title}
                                        </Link>
                                        {/* {book.title} */}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
