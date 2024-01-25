import "./banner.scss";
import bannerOne from "../../assets/bannerOne.jpg"
import bannerTwo from "../../assets/bannerTwo.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';


const Banner = () => {
  return (
    <>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> <img src={bannerOne} /></SwiperSlide>
      <SwiperSlide><img src={bannerTwo} /></SwiperSlide>
    
      ...
    </Swiper>
    {/* <img src={bannerOne} />
    <img src={bannerTwo} />

      <section id="banner">Banner</section> */}
    </>
  );
};

export default Banner;
