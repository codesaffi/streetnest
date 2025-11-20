import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
  const videos = ["/videos/IMG_5962.MP4", "/videos/IMG_5975.MP4"];

  return (
    <div className='w-full border border-gray-400'>
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect='fade'
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        className='w-full h-auto'
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <video
              src={video}
              autoPlay
              muted
              loop={false}
              playsInline
              onEnded={(e) => e.target.play()}
              className='w-full h-auto object-cover'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;