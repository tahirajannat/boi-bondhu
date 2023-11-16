import React from 'react';

export default function TitleSection({ title }) {
    return (
        <div class='w-full mb-10 text-left my-8 py-3 border-b flex justify-between'>
            <h2 class='text-xl text-black font-bold pb-2'>{title}</h2>
            <button className='px-2 py-1 text-sm font-bold rounded-[4px] text-teal-600 border border-teal-600 hover:bg-slate-100 duration-75 transition-all '>
                View All
            </button>
        </div>
    );
}
