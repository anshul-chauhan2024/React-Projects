import images from "../assets/images/index.js";
import TestmonialCards from './TestmonialCards';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Testmonials() {
    return (
        <>
            <div className="testmonial_sec my-20">
                <div className="container">
                    <div className="common_heading text-center lg:*:w-[50%] mx-auto">
                        <h2 className="text-[32px] mb-3 font-semibold">What customers say about us</h2>
                        <p>Rapidiously morph transparent internal or "organic" sources whereas resource-sucking e-business. Conveniently innovate compelling internal.</p>
                    </div>

                    <Swiper
                        loop={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <TestmonialCards
                                img={images.testimonial_1}
                                name='James'
                                position='Web Developer'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestmonialCards
                                img={images.testimonial_2}
                                name='Angel'
                                position='Web Designer'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestmonialCards
                                img={images.testimonial_3}
                                name='Jack'
                                position='UI/UX'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestmonialCards
                                img={images.testimonial_4}
                                name='Thomos'
                                position='Graphic Designer'
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Testmonials;
