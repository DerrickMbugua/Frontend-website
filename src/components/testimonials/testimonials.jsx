import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/portfolio1.jpg'
import AVTR2 from '../../assets/portfolio2.jpg'
import AVTR3 from '../../assets/portfolio3.jpg'
import AVTR4 from '../../assets/portfolio4.jpg'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container' 
       // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
      <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt="Avatar" />
          </div>
          <h5 className='client__name'>Derrick M</h5>
            <small className='client__review'>
            Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. My aim is to make life easier using my code.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt="Avatar" />
          </div>
          <h5 className='client__name'>Derrick M</h5>
            <small className='client__review'>
            Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. My aim is to make life easier using my code.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3} alt="Avatar" />
          </div>
          <h5 className='client__name'>Derrick M</h5>
            <small className='client__review'>
            Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. My aim is to make life easier using my code.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR4} alt="Avatar" />
          </div>
          <h5 className='client__name'>Derrick M</h5>
            <small className='client__review'>
            Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. My aim is to make life easier using my code.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default testimonials