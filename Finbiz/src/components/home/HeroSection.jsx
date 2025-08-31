import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import images from '../../images/images.js';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import HeroText from './HeroText.jsx';

export default function HeroSection() {
    return (
        <>
            <div className="heroSection relative">
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000, // 3 seconds
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={images.banner1} />
                        <HeroText
                            heading={
                                <>
                                    <span className="font-bold">Boosting</span> Your Business <br />
                                </>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images.banner2} />
                        <HeroText
                            heading={
                                <>
                                    <span className="font-bold">Making</span> Business Growth <br />
                                </>
                            }
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images.banner3} />
                        <HeroText
                            heading={
                                <>
                                    <span className="font-bold">Solving</span> Your Vision <br />
                                </>
                            }
                        />
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
}
