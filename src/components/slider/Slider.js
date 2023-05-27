import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import './slider.scss';
import '../../fonts/fonts.scss';
import {slides} from './Slides'



const Slider = () => {
    
  return (
    <Swiper className="swiper"
    modules={[Navigation, Pagination]}
    grabCursor={true}
    spaceBetween={30}
    slidesPerView={'auto'}
    speed={800}
    centeredSlides={true}
    loop={true}
    navigation = {{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable: true,
    }}>

        {slides.map(user =>(
            <SwiperSlide key={user.id} className="swiper-slide">
                <div className="block">
                    <div className="cards__img">
                        <img src={user.img} alt='img'/>
                    </div>
                    <div className="cards__text">
                        <h3>{user.title}</h3>
                        <p>{user.text}</p>
                    </div>
                </div>
                <div className="cards__btn">
                    <button>Generate</button>
                    <a href="*" > Learn more <span className='arrow'></span></a>
                </div>
            </SwiperSlide>
        ))}
         
        <div className='showcaseSlider-nav' >
            <button  className='swiper-button-prev showcaseSlider-prev'></button>
            <button className='swiper-button-next showcaseSlider-next'></button>
        </div>
  </Swiper>
 
  )
}

export default Slider