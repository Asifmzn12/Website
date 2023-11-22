import { useEffect, useState } from 'react';
import '../assets/css/about.css';

function Aboutus() {
    const [user, setUser] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                console.log("...loading");
                const userData = await fetch("https://jsonplaceholder.typicode.com/users");
                const result = await userData.json();
                setUser(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    console.log(user);
    return (
        <div className='container py-4'>
            <div className='row'>
                {
                    user.map((data, index) => (

                        <div key={index} className=' col-xl-3 col-12 gy-4'>
                            <div className="card align-items-center">
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Aboutus;
