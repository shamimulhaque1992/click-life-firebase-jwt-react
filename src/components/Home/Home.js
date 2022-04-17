import React from "react";
import useServices from "../../hooks/useServices";
import Carousels from "../Carousels/Carousels";
import Services from "../Services/Services";
import "./Home.css"

const Home = () => {
  const [services, setServices] = useServices();
  console.log(services);
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
        <div className="services-container">
          {services.slice(0, 3).map((service) => (
            <Services key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
