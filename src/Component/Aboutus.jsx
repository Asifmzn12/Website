import { useState } from 'react';
import { useUserContext } from '../config/Usercontext';
import Accordion from 'react-bootstrap/Accordion';
import { socialIcons } from '../config/Contactapi';
import { Images } from '../config/ImageApi'
import Marquee from 'react-fast-marquee';
import '../assets/css/about.css';

function Aboutus() {

    const data = useUserContext()
    const [activeAccordion, setActiveAccordion] = useState(0);


    console.log()
    return (
        <>
            <div className="container-fluid">

                <div className="container">
                    <h2 className="my-5 text-center">Our Mission</h2>
                    <div className="row py-4 pt-0 " data-aos="zoom-out" data-aos-delay="20">
                        <div className='col-md-6' >
                            <img src="images/blog-1.jpg" className='img-fluid aboutus rounded-2 hover' />

                        </div>
                        <div className='col-md-6 p-3'>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium delectus, officiis consequatur, cupiditate impedit molestiae quam nihil nobis eligendi illum dolores ex fugiat culpa neque repudiandae, enim minus soluta odio saepe! Voluptatem quae cupiditate modi culpa. Laborum debitis, quos deserunt, dolorem soluta architecto quod dolores nobis harum neque sint sapiente adipisci nemo iure, culpa exercitationem distinctio facilis aspernatur iusto!</p>


                        </div>

                    </div>
                </div>


                <div className="container">
                    <div className="row py-4 pt-0 mt-lg-2 position-relative overflow-hidden" data-aos="zoom-in" data-aos-delay="20">
                        <h2 className="my-4 text-center">Our Teams</h2>
                        {data.map((data, index) => (
                            <div key={index} className="col-md-4 col-lg-3 d-flex  col-sm-6 col-12 gy-4  team-box position-relative" >
                                <div className="card team-card text-center shadow">
                                    <img className="card-img-top" src={data.img} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text text-muted">{data.designation}</p>
                                    </div>

                                    <div className='team-social-icons position-absolute end-0 d-flex flex-column gap-2 mt-4  opacity-0 p-3 '>
                                        {socialIcons.map((social, index) => (
                                            <div key={index} className=''>
                                                <social.icons size={25} className='' />

                                            </div>

                                        ))
                                        }


                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container">
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
                        <div className="row py-5 align-items-center">
                            <div className="col-lg-5 align-items-stretch ">
                                <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                </p>


                            </div>

                            <div className="col-lg-7">
                                {
                                    [1, 2, 3, 4].map((_, index) => (
                                        <Accordion key={index} activeKey={activeAccordion} onSelect={(newKey) => setActiveAccordion(newKey)}>
                                            <Accordion.Item eventKey={index} className='my-3'>
                                                <Accordion.Header className='Ac-header'>Accordion Item {++index}</Accordion.Header>
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
