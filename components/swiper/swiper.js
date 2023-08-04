 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ourProgramsData from '../../data/ourProgramData';

import { Autoplay, Pagination, Navigation } from 'swiper';

 

export default () => {
  return (
    <div className="mx-auto absolute bottom-10 w-full"> 
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
      delay: 5000,
      disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
         // when window width is >= 640px
         640: {
            slidesPerView:2,
         },
         // when window width is >= 768px
         1280: {
           slidesPerView: 3,
         },
       }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {ourProgramsData.items.map((program) => (
          <SwiperSlide key={program.Id}> 
          <div className="w-full cursor-pointer text-center items-center overflow-hidden md:rounded-lg bg-black/60 px-2 py-3 text-white backdrop-blur-md hover:bg-black/20">
            <h3 className="text-2xl">{program.Name}</h3>
             <p>{program.Description}</p>
          </div>
          </SwiperSlide>
        ))};
        
    </Swiper>
    </div>
  );
};