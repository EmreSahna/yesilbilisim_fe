import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

interface IProps {
    slider: string[]
}

const SwiperCompanies = ({ slider } : IProps) => {

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={2}
            slidesPerGroup={1}
            loop={true}
            direction="horizontal"
            breakpoints={{
                574: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                992: {
                    slidesPerView: 5,
                    slidesPerGroup: 1,
                },
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="w-full h-[150px]"
        >
            {slider &&
                slider.map((item, index) => {
                    return (
                        <SwiperSlide className="border-main-blue border-l-[1px] items-center !flex" key={index}>
                            <img src={`http://localhost:8080/img/${item}`} className="max-sm w-[50%] mx-auto h-[50%] object-contain grayscale hover:grayscale-0" alt="" />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default SwiperCompanies;