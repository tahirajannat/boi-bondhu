import React from 'react';

const Dashboard = () => {
    return (
        <div className='p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-lg'>
            <div className='flex items-start justify-between'>
                <div className='flex flex-col space-y-2'>
                    <span className='text-gray-400'>Total Users</span>
                    <span className='text-lg font-semibold'>100,221</span>
                </div>
                <div className='p-10 bg-gray-200 rounded-md'></div>
            </div>
            <div>
                <span className='inline-block px-2 text-sm text-white bg-green-300 rounded mr-2'>
                    14%
                </span>
                <span>from 2019</span>
            </div>
        </div>
    );
};

export default Dashboard;
