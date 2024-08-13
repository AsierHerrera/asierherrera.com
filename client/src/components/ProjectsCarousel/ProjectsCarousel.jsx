// ProjectCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../assets/images/img_1.jpg';
import slide_image_2 from '../../assets/images/img_2.jpg';
import slide_image_3 from '../../assets/images/img_3.jpg';
import slide_image_4 from '../../assets/images/img_4.jpg';
import slide_image_5 from '../../assets/images/img_5.jpg';
import slide_image_6 from '../../assets/images/img_6.jpg';
import slide_image_7 from '../../assets/images/img_7.jpg';

import styles from './ProjectsCarousel.module.css';

function ProjectCarousel() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: `.${styles.swiperPagination}`, clickable: true }}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiperContainer}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className={styles.sliderController}>
          <div className={`${styles.swiperButtonPrev} ${styles.sliderArrow}`}>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className={`${styles.swiperButtonNext} ${styles.sliderArrow}`}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className={styles.swiperPagination}></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ProjectCarousel;
