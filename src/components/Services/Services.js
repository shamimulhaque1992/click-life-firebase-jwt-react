import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = ({service}) => {
    const {title, description, price, review, ratings, ratingsCount, img}= service;
  return (
    <div>
      <Card className="mx-auto m-5 card" style={{ width: "18rem" }}>
        <Card.Img className="border rounded mx-auto mt-2 p-1 card-img"variant="top" src={img} />
        <Card.Body>
          <Card.Title className="title">{title}</Card.Title>
          <Card.Text className="text">
            {description}
          </Card.Text>
          <Card.Text className="text">Price: {price}</Card.Text>
          <Card.Text className="text">Review: {review}</Card.Text>
          <Card.Text className="text">Ratings: {ratings}</Card.Text>
          <Card.Text className="text">Ratings Count: {ratingsCount}</Card.Text>
          <Link to='/checkout'>
            <Button variant="primary">Place Order📥</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Services;
