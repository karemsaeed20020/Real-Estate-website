import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Rescidences.css";
import { sliderSettings } from "../../utils/Common";
import data from '../../utils/slider.json';
const Rescidences = () => {
  return (
    <section className='r-wrapper'>
        <div className='paddings innerWidth r-container'>
            <div className='r-head flexColStart'>
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Residencies</span>
            </div>

            <Swiper {...sliderSettings}>
                <SwiperButtons />
                {
                    data.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className='flexColStart r-card'>
                                <img src={card.image} alt="home" />
                                <span className='secondaryText r-price'>
                                    <span>$</span>
                                    <span style={{color: "orange"}}>{card.price}</span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            
        </div>
    </section>
  )
}

export default Rescidences
const SwiperButtons = () => {
    const swiper = useSwiper();
    return (
        <div className='r-buttons'>
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}