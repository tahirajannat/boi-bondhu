import React, { useRef } from 'react';
// Import Swiper React components
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { heroBanner } from '../../utility/data';

export default function BannerSlider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                navigation={{
                    prevEl: '.swiper-custom-button-prev',
                    nextEl: '.swiper-custom-button-next',
                }}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className='mySwiper '
            >
                {heroBanner.map((item) => (
                    <SwiperSlide className='bg-product-bg-1'>
                        <img src={item.src} alt='' srcset='' className='' />
                        <div className='absolute top-1/2 left-0 -translate-y-1/2'>
                            <div class='w-3/4 mb-10 text-left my-8 p-8 '>
                                <h1 className='text-yellow-600 font-bold text-lg'>
                                    With Boibondhu
                                </h1>
                                <h2 class='text-6xl text-white font-normal pb-2   leading-tight'>
                                    {item.title}

                                    {/* <span className='text-yellow-500'>
                                        with boibondhu
                                    </span> */}
                                </h2>
                                <button className='mt-8 px-4 py-2 rounded-[4px]  text-white bg-teal-600 border border-teal-600 hover:bg-slate-100 hover:text-teal-600 duration-75 transition-all '>
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className=' container mr-6'>
                    <div className='swiper-custom-button-prev'>
                        {/* <HiArrowLongRight className='text-3xl text-[#ca8a04 p-1' /> */}
                        <HiArrowLongLeft className='text-3xl text-[#ca8a04] p-1 bg-white shadow-sm rounded-l-sm' />
                    </div>
                    <div className='swiper-custom-button-next'>
                        <HiArrowLongRight className='text-3xl text-[#ca8a04 p-1 bg-white shadow-sm rounded-r-sm' />
                    </div>
                    <div className='autoplay-progress' slot='container-end'>
                        <svg
                            viewBox='0 0 48 48'
                            ref={progressCircle}
                            fill='text-yellow-600'
                        >
                            <circle cx='24' cy='24' r='20'></circle>
                        </svg>
                        <span
                            className='text-[#ca8a04]'
                            ref={progressContent}
                        ></span>
                    </div>
                </div>
            </Swiper>
        </>
    );
}
