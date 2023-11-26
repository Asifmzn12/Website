
import { useState, useEffect } from 'react';

const GalleryComponent = () => {
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(1);
    const [currentSearch, setCurrentSearch] = useState('');
    const [photos, setPhotos] = useState([]);

    const apiKey = "qZjvBbchWrKERHdTV2EHC96tHdStmiOHWheiR6zMlhXST6BqhJ22VQMS";

    const fetchApi = async (url) => {
        try {
            const dataFetch = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: apiKey,
                },
            });
            const data = await dataFetch.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return null;
        }
    };

    const curatedPhotos = async () => {
        const fetchLink = `https://api.pexels.com/v1/curated?per_page=16&page=${page}`;
        const dataFetch = await fetchApi(fetchLink);
        if (dataFetch) {
            setPhotos(dataFetch.photos);
        }
    };

    const searchPhotos = async () => {
        const fetchLink = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=16&page=${page}`;
        const dataFetch = await fetchApi(fetchLink);
        if (dataFetch) {
            setPhotos(dataFetch.photos);
        }
    };

    const expandPage = async () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentSearch(searchValue);
        setPage(1);
    };

    useEffect(() => {
        if (currentSearch) {
            searchPhotos();
        } else {
            curatedPhotos();
        }
    }, [currentSearch, page]); 

    return (
        <div className='container py-5 my-5'>
            <form onSubmit={handleSearch}>
                <div className='row my-4 g-0 gap-3 justify-content-center'>
                    <div className='col-md-4'>

                        <input
                        className='form-control'
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Search for photos..."
                        />
                    </div>
                    <div className='col-md-6'>
                        <button type="submit" className='btn btn-primary scale'>Search</button>
                    </div>
                </div>



            </form>
            <div className='container'>
                <div className='row gy-4 '>
                    {photos.map((photo) => (
                        <div key={photo.id} className="gallery-layout col-xl-3 col-md-4 col-sm-6 ">
                            <img src={photo.src.large} alt={photo.photographer} className='img-fluid rounded mb-3 hover' />
                             
                        </div>
                    ))}
                    <div className='text-center'>
                    <button className="btn btn-secondary w-50 text-white fw-medium" onClick={expandPage}>
                        Load More
                    </button>
                    </div>



                </div>


            </div>
        </div>
    );
};

export default GalleryComponent;
