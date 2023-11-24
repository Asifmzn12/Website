
import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoYoutube } from 'react-icons/bi'
import { AiFillTwitterCircle } from 'react-icons/ai'
import '../assets/css/footer.css'
function Footer() {
    return (
        <footer className="footerbg">
            <div className="container py-5 overflow-hidden">
                <div className="row py-lg-3 py-1  justify-content-center align-items-start ">
                    <div className="col-md-6">
                        <p className='footer-about'>is simply dummy text of thprinting and typesetting ndustry.Lorem Ipsum has been the industry&apos;s stand ard dummy text ever since
                            is simply dummy text of thprinting and typesetting ndustry.Lorem Ipsum has been the industry&apos;s stand ard dummy text ever since.

                        </p>
                    </div>
                    <div className="col-md-3 col-12 col-sm-6 mt-3 mt-md-0 d-flex flex-column justify-content-center align-items-start align-items-lg-center">
                        <div className="navlinks">
                            <h5 className='nav-title'>About</h5>
                            <ul className=" list-unstyled footernav" >
                                <h5>Lorem ipsum</h5>
                                <h5>Lorem ipsum</h5>
                                <h5>Lorem ipsum</h5>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-12 mt-3 mt-md-0 col-sm-6 d-flex flex-column justify-content-center align-items-start align-items-lg-center">
                        <div className="navlinks">
                            <h5 className='nav-title'>Service</h5>
                            <ul className=" list-unstyled footernav">
                                <h5>Lorem ipsum</h5>
                                <h5>Lorem ipsum</h5>
                                <h5>Lorem ipsum</h5>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="subfooter position-relative w-100 ">
                <div className="container py-3">
                    <div className="row justify-content-between align-items-center ">
                        <div className="col-md-6 py-3 ">
                            <p className='subfooter-text text-lg-start text-center' >© Copyright 2023 Asif Ali</p>
                        </div>
                        <div className="col-md-6 icons d-flex justify-content-center socialicons  gap-5 align-items-center py-3">
                            <BiLogoFacebookCircle size={"30px"} />
                            <span className='bg-white  rounded-pill'>
                                <BiLogoInstagramAlt size={"26px"} style={{ color: "black" }} />
                            </span>

                            <AiFillTwitterCircle size={"30px"} />
                            <span className='bg-white  rounded-pill '>
                                <BiLogoYoutube size={"26px"} style={{ color: "black" }} /></span>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

