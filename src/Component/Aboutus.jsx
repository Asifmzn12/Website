import { useUserContext } from '../config/Usercontext';
import Images from './ImageApi';
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
            <div className="row py-2 text-center">
                <h2 className="my-5">Our Mission</h2>
           <div className='col-md-6'>
           {data[0] && <img src={data[0].image} alt={data[0].name} className='img-fluid' />}

           </div>
           <div className='col-md-6'>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium delectus, officiis consequatur, cupiditate impedit molestiae quam nihil nobis eligendi illum dolores ex fugiat culpa neque repudiandae, enim minus soluta odio saepe! Voluptatem quae cupiditate modi culpa. Laborum debitis, quos deserunt, dolorem soluta architecto quod dolores nobis harum neque sint sapiente adipisci nemo iure, culpa exercitationem distinctio facilis aspernatur iusto!</p>
           
           
           </div>

</div>
</div>


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

                <div className="container-fluid">
                    <div className="row py-2 text-center">
                        <h2 className="my-4">Our Trusted Partners</h2>
                        <Marquee className="">
                             { Images && Images.map((image, index) => (
                                <div key={index} className="mx-1">
                                    <div className=" py-4">
                                        <img src={image.path} className="card-image" alt={data.name} />
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