import React from 'react';

export default function TitleSection({ title }) {
    return (
        <div class='w-full mb-10 text-left my-8 py-3 border-b flex justify-between'>
            <h2 class='text-xl text-black font-bold pb-2'>{title}</h2>
            <button className='px-4 py-1.5 rounded-[4px] border border-yellow-600 hover:bg-slate-100 duration-75 transition-all '>
                View All
            </button>
        </div>
    );
}
