import { useUserContext } from '../config/Usercontext';
import Accordion from 'react-bootstrap/Accordion';

import Images from '../config/ImageApi'
import Marquee from 'react-fast-marquee';
import '../assets/css/about.css';

function Aboutus() {

    const data = useUserContext()
    if (data.length === 0) {
        return null
    }


    return (
        <>
            <div className="container-fluid">

                <div className="container">
                    <h2 className="my-5 text-center">Our Mission</h2>
                    <div className="row py-4 " data-aos="zoom-out" data-aos-delay="20">
                        <div className='col-md-6' >
                            <img src="images/blog-1.jpg" className='img-fluid aboutus rounded-2 hover' />

                        </div>
                        <div className='col-md-6 p-3'>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium delectus, officiis consequatur, cupiditate impedit molestiae quam nihil nobis eligendi illum dolores ex fugiat culpa neque repudiandae, enim minus soluta odio saepe! Voluptatem quae cupiditate modi culpa. Laborum debitis, quos deserunt, dolorem soluta architecto quod dolores nobis harum neque sint sapiente adipisci nemo iure, culpa exercitationem distinctio facilis aspernatur iusto!</p>


                        </div>

                    </div>
                </div>


                <div className="container">
                    <div className="row py-4" data-aos="zoom-in" data-aos-delay="20">
                        <h2 className="my-4 text-center">Our Teams</h2>
                        {data.map((data, index) => (
                            <div key={index} className="col-md-4 col-lg- col-sm-6 col-12 gy-4 hover" >
                                <div className="card" data-aos="zoom-in" data-aos-delay="30">
                                    <img src={data.image} className=" img-fluid" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container-fluid ">
                    <div className="row py-4 text-center" data-aos="zoom-out" data-aos-delay="20">
                        <h2 className="my-4">Our Trusted Partners</h2>
                        <Marquee className="">
                            {Images && Images.map((image, index) => (
                                <div key={index} className="mx-1 hover">
                                    <div className=" py-4">
                                        <img src={image.path} className="card-image" alt={data.name} />
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>

                <section id="why-us" className="why-us section-bg my-4">
                    <div className="container" data-aos="zoom-out" data-aos-delay="20">
                        <h2 className="my-4 text-center">Any Query</h2>
                        <div className="row py-5">
                            <div className="col-lg-5 align-items-stretch ">
                                <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
                                <h5>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                </h5>


                            </div>

                            <div className="col-lg-7">
                                {
                                    [1, 2, 3, 4].map((data, index) => (
                                        <Accordion key={index}>
                                            <Accordion.Item  eventKey="0" className='my-3'>
                                                <Accordion.Header>Accordion Item {index}</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                  
                                                </Accordion.Body>
                                            </Accordion.Item>

                                        </Accordion>


                                    ))
                                }




                            </div>


                        </div>

                    </div>
                </section>


            </div>
        </>
    );
}

export default Aboutus;
