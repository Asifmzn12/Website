import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../assets/css/home.css"
import { useState,useEffect } from 'react';

function Home() {
const [slidercount,setSliderCount]=useState([])
  useEffect(() => {

      const fetchData = async () => {
          try {
              console.log("...loading");
              const userData = await fetch("https://jsonplaceholder.typicode.com/users");
              const result = await userData.json();
              setSliderCount(result);
          } catch (error) {
              console.error("Error fetching data:", error);
          }
      };

      fetchData();
  }, []);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,

      }}
      autoplay={{ delay: 3000 }}      
      

    >
      <div className='container-fluid overflow-hidden'>
{
  slidercount.map((data,id)=>(
<div key={id}>
<SwiperSlide className=" w-100 position-relative overflow-hidden">
<img
  src="images/Nature.jpg"
  className="img-fluid"

/>
<div className="row position-absolute top-0 h-100 justify-content-center align-items-start align-items-md-center w-100 text-white p-5">
  <div className="col-12 d-flex flex-column justify-content-start justify-content-md-center align-items-start align-items-md-center overflow-hidden">
    <h4 className="text-white fw-semibold">Lorem, ipsum.</h4>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, dolor?</p>
  </div>
</div>
</SwiperSlide>



</div>


  ))
}

      
      

       
      </div>
    </Swiper>
  )
}
export default Home