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
                    <SwiperSlide>
                        <img src={item.src} alt='' srcset='' className='' />
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
