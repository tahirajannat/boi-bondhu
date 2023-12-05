import { useState } from 'react';
import { HiOutlinePuzzle } from 'react-icons/hi';
import { HiOutlineTag, HiRss, HiShare } from 'react-icons/hi2';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductShop } from '../../redux/reducers/productShopSlice';

const secondaryNavigation = [
    { name: 'Website redesign', href: '#', initial: 'W', current: false },
    { name: 'GraphQL API', href: '#', initial: 'G', current: false },
    {
        name: 'Customer migration guides',
        href: '#',
        initial: 'C',
        current: false,
    },
    { name: 'Profit sharing program', href: '#', initial: 'P', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function SideNav({ title }) {
    const dispatch = useDispatch();
    const productShop = useSelector(selectProductShop);
    const [products, setProducts] = useState(productShop.allBooks);

    // Assuming each product has a 'preference' property
    const preferences = products.map((product) => product.preference);
    // console.log('all preferences', preferences);

    const preferenceCounts = preferences.reduce((counts, preference) => {
        counts[preference] = (counts[preference] || 0) + 1;
        return counts;
    }, {});

    const {
        exchange: exchangeCount = 0,
        lend: lendCount = 0,
        borrow: borrowCount = 0,
        buySell: buySellCount = 0,
    } = preferenceCounts;

    // const totalCount = exchangeCount + lendCount + borrowCount;
    const navigation = [
        {
            name: 'Exchange',
            href: '/exchange',
            icon: HiShare,
            count: exchangeCount,
            current: true,
        },
        {
            name: 'Borrow',
            href: '/borrow',
            icon: HiRss,
            count: borrowCount,
            current: false,
        },
        {
            name: 'Lend',
            href: 'lend',
            icon: HiOutlinePuzzle,
            count: lendCount,
            current: false,
        },
        {
            name: 'Buy & Sell',
            href: '/shop',
            icon: HiOutlineTag,
            count: buySellCount,
            current: false,
        },
    ];
    return (
        <nav className='bg-white shadow-sm px-4 py-3' aria-label='Sidebar'>
            <div className='text-sm font-bold leading-6 text-teal-600 text-left mb-3'>
                {title}
            </div>
            <ul role='list' className='-mx-2 space-y-1 block'>
                {navigation.map((item) => (
                    <li key={item.name} className='block items-center '>
                        <a
                            href={item.href}
                            className={classNames(
                                item.current
                                    ? 'bg-gray-50 text-teal-600 hover:text-teal-700 '
                                    : 'text-gray-700 hover:text-teal-700 hover:bg-gray-50',
                                'group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                            )}
                        >
                            <item.icon
                                className={classNames(
                                    item.current
                                        ? 'text-teal-600'
                                        : 'text-gray-400 group-hover:text-teal-600',
                                    'h-4 w-4 shrink-0'
                                )}
                                aria-hidden='true'
                            />
                            {item.name}
                            {item.count ? (
                                <span
                                    className={classNames(
                                        item.current
                                            ? 'bg-white '
                                            : ' bg-gray-50 ',
                                        'ml-auto  items-center flex justify-center whitespace-nowrap rounded-full shadow-sm w-5 h-5 text-center text-xs font-medium leading-5 text-teal-600'
                                    )}
                                    aria-hidden='true'
                                >
                                    {item.count}
                                </span>
                            ) : null}
                        </a>
                    </li>
                ))}
            </ul>
            {/* <div>
                <div className='text-xs font-semibold leading-6 text-gray-400'>
                    Projects
                </div>
                <ul role='list' className='-mx-2 mt-2 space-y-1'>
                    {secondaryNavigation.map((item) => (
                        <li key={item.name} className='block'>
                            <a
                                href={item.href}
                                className={classNames(
                                    item.current
                                        ? 'bg-gray-50 text-indigo-600'
                                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                            >
                                <span
                                    className={classNames(
                                        item.current
                                            ? 'text-indigo-600 border-indigo-600'
                                            : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600',
                                        'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                    )}
                                >
                                    {item.initial}
                                </span>
                                <span className='truncate'>{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div> */}
        </nav>
    );
}
