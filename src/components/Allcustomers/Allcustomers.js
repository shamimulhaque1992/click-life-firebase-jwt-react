import React from "react";
import useCustomers from "../../hooks/useCustomers";
import useServices from "../../hooks/useServices";
import Customers from "../Customers/Customers";
import Services from "../Services/Services";

const Allcustomers = () => {
  const [customers, setCustomers] = useCustomers();
  return (
    <div>
      <div className="services-container">
        {customers.map((customer) => (
          <Customers key={customer.id} customer={customer} />
        ))}
      </div>
    </div>
  );
};

export default Allcustomers;
