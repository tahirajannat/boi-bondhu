import React from 'react';
// import BottomNav from "./BottomNav";
// import ItemsCard from "./ItemsCard";
import { books } from '../../utility/data';
import BannerSlider from '../common/BannerSlider';
import BookCard from '../common/BookCard';
import ProductCard from '../common/ProductCard';

export default function Home() {
    return (
        <>
            {/* <Slider /> */}
            <BannerSlider />
            {/* <BottomNav /> */}
            <div className='container mx-auto my-16'>
                <div class='w-full mb-10 text-left my-8 py-3 border-b flex justify-between'>
                    <h1 class='text-xl text-black font-bold pb-2'>
                        Featured Books
                    </h1>
                    <button className='px-4 py-2 border border-yellow-600'>
                        View All
                    </button>
                </div>
                {/* <ProductCard /> */}
                {/* <ProductSlider /> */}
                <div className='grid grid-cols-4 gap-6'>
                    <BookCard items={books} />
                </div>
            </div>
            <div className='container mx-auto my-16'>
                <div class='w-full mb-10 text-left my-8 py-3 border-b flex justify-between'>
                    {/* <h1 class='text-xl text-black font-bold pl-4 pb-2 border-l-2 border-t-2 border-yellow-600  w-56'>
                        All Listed Books
                    </h1> */}
                    <h1 class='text-xl text-black font-bold pb-2'>
                        All Listed Books
                    </h1>
                    <button className='px-4 py-2 border border-yellow-600'>
                        View All
                    </button>

                    {/* <div className='mt-3 flex relative w-48'>
                        <span className='flex mr-4  absolute border-b-2  left-0 border-yellow-600 w-32'></span>

                        <div className='absolute mr-3 -mt-4 right-9 text-yellow-700'>
                            ..
                        </div>
                        <div className='absolute mr-4 right-0 border-yellow-500 border-b-2  w-7'></div>
                    </div> */}
                </div>
                {/* <ProductCard /> */}
                {/* <ProductSlider /> */}
                <div className=' gap-6'>
                    <ProductCard />
                </div>
            </div>

            {/* <ItemsCard /> */}
            {/* <Testimonial /> */}
        </>
    );
}
