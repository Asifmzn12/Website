import { useUserContext } from '../config/Usercontext';

import Marquee from 'react-fast-marquee';
import '../assets/css/about.css';

function Aboutus() {
    const data=useUserContext()
    console.log(data);
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row py-2">
            <h2 className="my-4 text-center">Our Teams</h2>
            {data.map((data, index) => (
                <div key={index} className="col-md-4 col-lg- col-sm-6 col-12 gy-4">
                  <div className="card">
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

        <div className="container">
          <div className="row py-2 text-center">
            <h2 className="my-4">Our Trusted Partners</h2>
            <Marquee className="">
              {data.map((data, index) => (
                <div key={index} className="mx-2">
                  <div className=" py-4">
                    <img src="images/ibm.png" className="card-image" alt={data.name} />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
