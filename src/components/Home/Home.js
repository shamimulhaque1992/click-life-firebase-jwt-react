import React from "react";
import useCustomers from "../../hooks/useCustomers";
import useServices from "../../hooks/useServices";
import Carousels from "../Carousels/Carousels";
import Customers from "../Customers/Customers";
import Services from "../Services/Services";
import "./Home.css"

const Home = () => {
  const [services, setServices] = useServices();
  const [customers, setCustomers]= useCustomers();
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
          {services.slice(0, 6).map((service) => (
            <Services key={service.id} service={service} />
          ))}
        </div>
        <div className="services-container">
          {customers.slice(0, 6).map((customer) => (
            <Customers key={customer.id} customer={customer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
