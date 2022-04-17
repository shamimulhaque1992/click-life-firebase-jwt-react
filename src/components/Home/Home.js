import React from 'react';
import Carousels from '../Carousels/Carousels';
import Services from '../Services/Services';

const Home = () => {
    /* const [photos, setPhoto] = useState([])
    useEffect(() => {
        fetch('carousel.json')
        .then((response) => response.json())
        .then(data =>setPhoto(data))
    }) */
    return (
        <div>
            <div className="">
                <Carousels></Carousels>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;