/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import Images from '../config/ImageApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import "../assets/css/home.css"
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { boxes } from '../config/Homecard';
const Box = ({ type, content }) => {
  console.log();
  if (type === 'image') {
    return <img src={content} alt="Box Image" className='img-fluid rounded' />;
  } else if (type === 'text') {
    return <div>
      <h2>{content.title}</h2>
      <p>{content.para}</p>
    </div>
  }

  return null;
};



function Home() {
  return (
    <>
      <section id="hero">

        <div className="container my-5">
          <div className="row justify-content-between">
            <div className="col-lg-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
              <div className='d-flex flex-column gap-md-3 gap-0'>
                <h1>We design digital products that help grow businesses</h1>
                <h2>We are team of talented designers making websites with Bootstrap</h2>
                <div className="text-center text-lg-start">
                  <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 hero-img">
              <img src="images/Home-bg.png" className="img-fluid animated" alt="" />
            </div>
          </div>
        </div>

      </section>

      <div className='container my-5'>
        <div className="row py-1 py-lg-5 sectionbox justify-content-center align-items-center gy-5">
          {boxes.map((box, index) => (
            <div key={index} className="col-md-6 ">
              <Box type={box.type} content={box.content} />
            </div>
          ))}
        </div>
      </div>
      <div className='container my-5'>
        <div className="row sectionbox justify-content-center align-items-center">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="col-md-3 gy-3 ">
              <div className='card p-3'>
                <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quaerat officiis corporis eligendi, doloremque vitae fuga dignissimos blanditiis dolor nemo!</p>

              </div>

            </div>
          ))}
        </div>
      </div>
      <section className='testimonial'>
        <div className='container py-lg-5 py-1'>
          <div className='row py-5 justify-content-center align-items-center'>
            <div className='col-md-5'>
              <h2>Testimonials</h2>
              <p>

                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>

            </div>
          
          <div className='col-md-7 shadow-lg mt-3 mt-md-0 '>
          <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          spaceBetween={50}
          loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {
            Images.map((data,index)=>(
              <SwiperSlide key={index}>
                   <div className='testimonial-item py-5'>
                     <div className='d-flex'>
                       <div>
                         <img src='images/test3.jpg' className='testimonial-img flex-shrink-0'></img>
                       </div>
                       <div className='d-flex flex-column justify-content-center align-items-start'>
                         <h3>Jena Karlis</h3>
                         <h4 className=''>Store Owner</h4>
                         <div className='stars'>
                           {[1, 2, 3, 4, 5].map((_, index) => (
                             <FaStar key={index} className='me-1 d-inline-block' />
     
                           ))
     
                           }
     
                         </div>
                       </div>
                     </div>
                     <div className='mt-3'>
                       <FaQuoteLeft /> <span className='p-3'>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                       <FaQuoteRight />
                     </div>
                   </div>
     
              </SwiperSlide>

            ))
          }
          </Swiper>
          </div>





          </div>



        </div>




      </section>


    </>


  )
}
export default Home