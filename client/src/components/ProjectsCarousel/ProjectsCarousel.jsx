import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import styles from './ProjectsCarousel.module.css';
import ProjectCard from './ProjectCard/ProjectCard';

function ProjectCarousel({ projects }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.fondo}>
      <div
      id="projects"
      ref={containerRef}
      className={`${styles.container} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <h2 className={styles.sectionTitle}>Projects</h2>
      <Swiper
        ref={containerRef}
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


    </section>
    
  );
}

export default ProjectCarousel;
