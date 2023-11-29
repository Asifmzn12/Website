/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Images, SevicesImage, } from "../config/ImageApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { useUserContext } from "../config/Usercontext";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/pagination";
import "../assets/css/home.css";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { boxes } from "../config/Homecard";
const Box = ({ type, content }) => {
  console.log();
  if (type === "image") {
    return <img src={content} alt="Box Image" className="img-fluid rounded hover" />;
  } else if (type === "text") {
    return (
      <div>
        <h3>{content.title}</h3>
        <p className="work-para">{content.para}</p>
      </div>
    );
  }

  return null;
};

function Home() {
  const data=useUserContext();
  const images=data.slice(0,3)
  console.log(images);
  return (
    <>
      <section id="hero">

        <div className="container my-5">
          <div className="row justify-content-between">
            <div className="col-lg-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="20" >
              <div className="d-flex flex-column gap-md-3 gap-0">
                <h1>We design digital products that help grow businesses</h1>
                <h2>
                  We are team of talented designers making websites with
                  Bootstrap
                </h2>
                <div className="text-center text-lg-start">
                  <a href="" className="btn-get-started scrollto text-decoration-none scale">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="20">
              <img
                src="images/Home-bg.png"
                className="img-fluid vert-move"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container pt-md-5 mb-2 py-2">
        <div className="text-center">
          <h2 className="my-4 my-md-0">What We Do</h2>
        </div>
        <div className="row py-1 py-lg-5 sectionbox justify-content-center align-items-center gy-5">
          {boxes.map((box, index) => (
            <div key={index} className="col-md-6  " data-aos="zoom-out" data-aos-delay="100">
              <Box type={box.type} content={box.content} />
            </div>
          ))}
        </div>
      </div>
      <section className="Services">
        <div className="container py-3 py-lg-4">
          <div className="text-center">
            <h2>Services</h2>
          </div>
          <div className="row sectionbox justify-content-center align-items-stretch py-3" data-aos="zoom-out" data-aos-delay="500"
          >
            {SevicesImage.map((images, index) => (
              <div key={index} className="d-flex col-xl-3 col-lg-4 col-sm-6 gy-3 " data-aos="zoom-in"  >
                <div class="icon-box card shadow hover d-flex  ">
                  <div className="d-flex justify-content-center align-content-center">
                    <img src={images.path} className="img-fluid img-hover"></img>
                  </div>
                  <div className="text mt-4">
                    <h3 className="" >{images.title}</h3>
                    <p>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
      <section className="testimonial">
        <div className="container py-lg-5 py-1">
          <div className="row py-5 justify-content-center align-items-center">
            <div className="col-md-5" data-aos="zoom-out" data-aos-delay="500">
              <h2>Testimonials</h2>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </div>

            <div className="col-md-7 shadow-lg mt-3 mt-md-0  " data-aos="zoom-out" data-aos-delay="500">
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
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
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
              >
                {Images.map((data, index) => (
                  <SwiperSlide key={index} className="hover">
                    <div className="testimonial-item py-5" >
                      <div className="d-flex">
                        <div>
                          <img
                            src="images/test3.jpg"
                            className="testimonial-img flex-shrink-0"
                          ></img>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-start">
                          <h3>Jena Karlis</h3>
                          <h4 className="">Store Owner</h4>
                          <div className="stars">
                            {[1, 2, 3, 4, 5].map((_, index) => (
                              <FaStar
                                key={index}
                                className="me-1 d-inline-block"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <FaQuoteLeft />{" "}
                        <span className="p-3">
                          Enim nisi quem export duis labore cillum quae magna
                          enim sint quorum nulla quem veniam duis minim tempor
                          labore quem eram duis noster aute amet eram fore quis
                          sint minim.
                        </span>
                        <FaQuoteRight />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-post">
        <div className="container py-3 py-lg-4">
          <div className="text-center">
            <h2>Recent Article</h2>
          </div>


          <div className="row gy-3 py-3">
            {images.map((ImageData, index) => (
              <div key={index} className="col-md-6 col-xl-4 rounded " data-aos="zoom-out" data-aos-delay="200">
                <article className="shadow hover">
                  <div className="post-img">
                    <img
                      src={ImageData.img}
                      alt=""
                      className="img-fluid "
                    />
                  </div>
                  <p className="post-category pt-2">Technology</p>
                  <h2 className="title">
                    <a href="#" className=" d-inline-block underline" >Dolorum optio tempore voluptas dignissimos</a>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src="images/blog-author.jpg"
                      alt=""
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">Maria Doe</p>
                      <p className="post-date">
                        <time datetime="2022-01-01">Jan 1, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
