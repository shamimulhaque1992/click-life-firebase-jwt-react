import React from "react";
import useServices from "../../hooks/useServices";
import Services from "../Services/Services";

const Allservices = () => {
  const [services] = useServices();
  return (
    <div>
      <div className="services-container">
        {services.map((service) => (
          <Services key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Allservices;
