import images from '../../images/images';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import CommonHeading from '../commonComponents/CommonHeading'
import StudyBoxes from './StudyBoxes';

const CaseStudySection = () => {
    return (
        <div className='caseStudy mt-20 px-5'>
            <div className="">
                <CommonHeading 
                    small='Case Studies' 
                    big='Specialist Business Cases' 
                    className='text-center' 
                />

                <div className='mt-10'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true, // ✅ makes dots nicer
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 30 },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide><StudyBoxes img={images.study1} heading='Personal Skills'/></SwiperSlide>
                        <SwiperSlide><StudyBoxes img={images.study2} heading='Business Growth'/></SwiperSlide>
                        <SwiperSlide><StudyBoxes img={images.study3} heading='Company Skills'/></SwiperSlide>
                        <SwiperSlide><StudyBoxes img={images.study4} heading='Startup Solution'/></SwiperSlide>
                        <SwiperSlide><StudyBoxes img={images.study5} heading='Growth Manage'/></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CaseStudySection;
