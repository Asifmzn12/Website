import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../assets/css/home.css"

function Home() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,

      }
      }
      Autoplay={true}

    >
      <SwiperSlide className="position-relative">
        <img src='images/Nature.jpg' className='img-fluid'></img>
        <div className='row position-absolute top-0 h-100 justify-content-center align-items-center w-100 text-white p-5 '>
          <div className='col-12 d-flex flex-column justify-content-center align-items-center '>
          <h4 className='text-white fw-semibold'>Lorem, ipsum.</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, dolor?</p>
          </div>
         

        </div>
      </SwiperSlide>
      <SwiperSlide className="position-relative">
        <img src='images/Nature.jpg' className='img-fluid'></img>
        <div className='row position-absolute top-0 h-100 justify-content-center align-items-center w-100 text-white p-5 '>
          <div className='col-12 d-flex flex-column justify-content-center align-items-center '>
          <h4 className='text-white fw-semibold'>Lorem, ipsum.</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, dolor?</p>
          </div>
         

        </div>
      </SwiperSlide>
      <SwiperSlide className="position-relative">
      <img src='images/Nature.jpg' className='img-fluid'></img>
      <div className='row position-absolute top-0 h-100 justify-content-center align-items-center w-100 text-white p-5 '>
        <div className='col-12 d-flex flex-column justify-content-center align-items-center '>
        <h4 className='text-white fw-semibold'>Lorem, ipsum.</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, dolor?</p>
        </div>
       

      </div>
    </SwiperSlide>
    <SwiperSlide className="position-relative">
    <div className="overlay"></div>

    <img src='images/Nature.jpg' className='img-fluid'></img>
    <div className='row position-absolute top-0 h-100 justify-content-center align-items-center w-100 text-white p-5 '>
      <div className='col-12 d-flex flex-column justify-content-center align-items-center '>
      <h4 className='text-white fw-semibold'>Lorem, ipsum.</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, dolor?</p>
      </div>
     

    </div>
  </SwiperSlide>
    </Swiper>
  )
}
export default Home