import images from "../../images/images"
import TestimonialBoxes from "./TestimonialBoxes";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Button from '../commonComponents/Button'

const TestimonialSection = () => {
    return (
        <section className="testimonialsSection h-[600px] pt-50 mb-30 ">
            <div className="container">

                <div className={`commonHeading flex justify-between items-end`}>
                    <div>
                        <h5 className='text-lg font-semibold text-white'>Our Testimonial</h5>
                        <h2 className='text-5xl font-bold text-white'>Our Client Reviews</h2>
                    </div>
                    <Button val='See All Reviews' />
                </div >


                <div className='mt-20'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}

                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <TestimonialBoxes name='David Smith' img={images.test1} logo={images.testLogo1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialBoxes name='Mark Jone' img={images.test2} logo={images.testLogo2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialBoxes name='Lord Korn' img={images.test3} logo={images.testLogo3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialBoxes name='Mark Jone' img={images.test2} logo={images.testLogo2} />
                        </SwiperSlide>

                    </Swiper>
                </div>



            </div>
        </section>
    );
};

export default TestimonialSection;
