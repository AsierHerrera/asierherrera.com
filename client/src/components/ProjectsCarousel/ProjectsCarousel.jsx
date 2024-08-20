import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import styles from './ProjectsCarousel.module.css';
import ProjectCard from './ProjectCard/ProjectCard';

function ProjectCarousel({ projects }) {
  const swiperRef = useRef(null);

  return (
    <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Projects</h2>
         <Swiper
        ref={swiperRef}
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
        pagination={{ 
          el: `.${styles.swiperPagination}`, 
          clickable: true,
          bulletClass: styles.swiperPaginationBullet,
          bulletActiveClass: styles.swiperPaginationBulletActive,
        }}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiperContainer}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              sourceCodeUrl={project.sourceCodeUrl}
              demoUrl={project.demoUrl}
            />
          </SwiperSlide>
        ))}

        <div className={styles.sliderController}>
          <div className={styles.swiperPagination}></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ProjectCarousel;
