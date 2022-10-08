import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

import { Pagination, Navigation, Autoplay, EffectFlip } from "swiper";


const Carousel = ({ images }) => {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "black",
                    "--swiper-pagination-color": "black",
                    color: "#fff"
                }}
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                centeredSlides={true}
                effect={"cards"}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                
                navigation={true}
                modules={[EffectFlip, Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                {
                    images && images?.map((image, index) => (

                        <SwiperSlide key={index}>
                           <a href={image?.link} target="_blank" rel="noopener noreferrer">
                           <img src={image?.src} alt="articles" />
                           </a>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </>
    )
}

export default Carousel