import React from 'react';
// import BottomNav from "./BottomNav";
// import ItemsCard from "./ItemsCard";
import Ad from '../../assets/images/ad.png';
import { books } from '../../utility/data';
import BannerSlider from '../common/BannerSlider';
import BookCard from '../common/BookCard';
import TitleSection from '../common/TitleSection';
import SideNav from '../header/SideNav';
import ListedCatecoryItem from './home/ListedCatecoryItem';

export default function Home() {
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
                <TitleSection title={'Featured Books'} />
                <div className='grid grid-cols-4 gap-6'>
                    <BookCard items={books} endIndex={4} />
                </div>
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
