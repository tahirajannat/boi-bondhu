import { HiOutlinePuzzle, HiOutlineTag, HiRss, HiShare } from 'react-icons/hi';

const navigation = [
    {
        name: 'Exchange',
        href: '#',
        icon: HiShare,
        count: '5',
        current: true,
    },
    {
        name: 'Borrow',
        href: '#',
        icon: HiRss,
        count: '12',
        current: false,
    },
    {
        name: 'Lend',
        href: '#',
        icon: HiOutlinePuzzle,
        count: '20+',
        current: false,
    },
    {
        name: 'Buy & Sell',
        href: '#',
        icon: HiOutlineTag,
        count: '120+',
        current: false,
    },
];
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

export default function SideNav() {
    return (
        <nav className='bg-white shadow-sm px-4 py-6' aria-label='Sidebar'>
            <div className='text-xs font-bold leading-6 text-teal-600 text-left mb-4'>
                Projects
            </div>
            <ul role='list' className='-mx-2 space-y-1 block'>
                {navigation.map((item) => (
                    <li key={item.name} className='block items-center '>
                        <a
                            href={item.href}
                            className={classNames(
                                item.current
                                    ? 'bg-gray-50 text-indigo-600'
                                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                'group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                            )}
                        >
                            <item.icon
                                className={classNames(
                                    item.current
                                        ? 'text-indigo-600'
                                        : 'text-gray-400 group-hover:text-indigo-600',
                                    'h-4 w-4 shrink-0'
                                )}
                                aria-hidden='true'
                            />
                            {item.name}
                            {item.count ? (
                                <span
                                    className='ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200'
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
