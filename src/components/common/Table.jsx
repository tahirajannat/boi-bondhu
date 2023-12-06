import React from 'react';

import cn from '../../utils/cn';

const Head = ({ children }) => {
    return <thead>{children}</thead>;
};

const Row = ({ children }) => {
    return <tr>{children}</tr>;
};
const Body = ({ children }) => {
    return <tbody>{children}</tbody>;
};

const Data = ({ index, itemCount, children, className = '' }) => {
    return (
        <td
            className={cn(
                'tcd-py-4 tcd-pl-4 tcd-text-sm tcd-text-gray-900',
                className,
                {
                    'tcd-border-b tcd-border-gray-200': index !== itemCount - 1,
                    'tcd-bg-gray-50': index % 2 === 1,
                    'tcd-bg-white': index % 2 === 0,
                }
            )}
        >
            {children}
        </td>
    );
};

const Heading = ({ children, className = '' }) => {
    return (
        <th
            scope='col'
            className={cn(
                'tcd-sticky tcd-text-base tcd-top-8 tcd-bg-gray-100 tcd-z-10 tcd-border-b tcd-border-t tcd-border-gray-300 tcd-py-3.5 tcd-pl-4 tcd-pr-3 tcd-text-left tcd-font-semibold tcd-text-gray-900',
                className
            )}
        >
            {children}
        </th>
    );
};
const Table = ({ children }) => {
    return (
        <table className='tcd-min-w-full tcd-border-separate tcd-border-spacing-0'>
            {children}
        </table>
    );
};

Table.Head = Head;
Table.Row = Row;
Table.Body = Body;
Table.Data = Data;
Table.Heading = Heading;
export default Table;
