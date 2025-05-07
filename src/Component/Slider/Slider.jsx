import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "./styles.css"

const Slider = ({ data }) => {
    // console.log("from slide", data);

    return (
        <div className=" h-[450px] object-cover">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                centeredSlides={true}
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,

                }}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper "
            >
                {
                    data.map(slide => <SwiperSlide><img className='h-[450px] object-cover object-top' src={slide.thumbnail} alt="" /></SwiperSlide>)
                }



            </Swiper>

        </div>
    );
};

export default Slider;