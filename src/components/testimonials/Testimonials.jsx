import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

//import swiper core and required modules
import { Pagination } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'


const data = [
  {
    avatar: AVTR1,
    name: 'Erika Monserrat',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas earum adipisci natus doloremque laborum voluptas culpa tempora, dicta omnis nesciunt eius necessitatibus magnam ad voluptatibus ratione temporibus corrupti! At, vero.'
  },
  {
    avatar: AVTR2,
    name: 'Noah Whites',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas earum adipisci natus doloremque laborum voluptas culpa tempora, dicta omnis nesciunt eius necessitatibus magnam ad voluptatibus ratione temporibus corrupti! At, vero.'
  },
  {
    avatar: AVTR3,
    name: 'Olivia Adams',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas earum adipisci natus doloremque laborum voluptas culpa tempora, dicta omnis nesciunt eius necessitatibus magnam ad voluptatibus ratione temporibus corrupti! At, vero.'
  },
  {
    avatar: AVTR4,
    name: 'Amelia Mathis',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas earum adipisci natus doloremque laborum voluptas culpa tempora, dicta omnis nesciunt eius necessitatibus magnam ad voluptatibus ratione temporibus corrupti! At, vero.'
  }, 
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">     {review}</small>
              </SwiperSlide>
            )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials