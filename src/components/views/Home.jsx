import React from 'react';
// import BottomNav from "./BottomNav";
// import ItemsCard from "./ItemsCard";
import { books } from '../../utility/data';
import BannerSlider from '../common/BannerSlider';
import BookCard from '../common/BookCard';
import Testimonial from '../common/Testimonial';

export default function Home() {
    return (
        <>
            {/* <Slider /> */}
            <BannerSlider />
            {/* <BottomNav /> */}
            <div className='container mx-auto my-16'>
                <div class='w-full mb-10 text-center'>
                    <h1 class='text-3xl text-black font-bold'>
                        Featured Listing
                    </h1>

                    <div className='border-b-2 border-red-400 w-24 mt-4 text-center mx-auto'></div>
                </div>
                {/* <ProductCard /> */}
                {/* <ProductSlider /> */}
                <div className='grid grid-cols-4 gap-6'>
                    <BookCard items={books} />
                </div>
            </div>

            {/* <ItemsCard /> */}
            <Testimonial />
        </>
    );
}
