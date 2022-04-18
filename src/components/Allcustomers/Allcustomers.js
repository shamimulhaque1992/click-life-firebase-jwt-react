import React from "react";
import useCustomers from "../../hooks/useCustomers";
import Customers from "../Customers/Customers";

const Allcustomers = () => {
  const [customers] = useCustomers();
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
