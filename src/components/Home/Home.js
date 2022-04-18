import React from "react";
import useCustomers from "../../hooks/useCustomers";
import useServices from "../../hooks/useServices";
import Carousels from "../Carousels/Carousels";
import Customers from "../Customers/Customers";
import Services from "../Services/Services";
import "./Home.css"

const Home = () => {
  const [services] = useServices();
  const [customers]= useCustomers();
  console.log(services);
  
  return (
    <div>
      <div className="">
        <Carousels></Carousels>
        <h1 className="text-center p-5 text-primary">My Featured Services</h1>
        <div className="services-container">
          {services.slice(0, 6).map((service) => (
            <Services key={service.id} service={service} />
          ))}
        </div>
        <h1 className="text-center p-5 text-primary">My Happy Customers</h1>
        <div className="services-container">
          {customers.slice(0, 3).map((customer) => (
            <Customers key={customer.id} customer={customer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
