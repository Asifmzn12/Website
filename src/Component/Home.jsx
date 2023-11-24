/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../assets/css/home.css"
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
        {[1,2,3,4].map((_,index) => (
          <div key={index} className="col-md-3 gy-3 ">
          <div className='card p-3'>
          <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quaerat officiis corporis eligendi, doloremque vitae fuga dignissimos blanditiis dolor nemo!</p>
          
          </div>
         
          </div>
        ))}
      </div>



    </div>
    </>


  )
}
export default Home