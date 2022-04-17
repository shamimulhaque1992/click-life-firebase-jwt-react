import React from "react";
import { Carousel } from "react-bootstrap";
import './Carousels.css'

const Carousels = () => {
  return (
    <div>
      <Carousel fade className="w-75 mx-auto mt-3 text-black carousels-container">
        <Carousel.Item>
          <img
            className="d-block w-100 h-50 img-fluid rounded"
            src="../../images/birthday.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carosel-text mb-3 rounded">
            <h3 className="font">Happy Birthday!</h3>
            <p className="font">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="../../images/nature.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="carosel-text mb-3 rounded">
            <h3 className="font">Natural Beauty!</h3>
            <p className="font">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="../../images/wedding.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="carosel-text mb-3 rounded">
            <h3 className="font">Congratulations! on Your Wedding.</h3>
            <p className="font">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="../../images/weidding2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="carosel-text mb-3 rounded">
            <h3 className="font">Wedding Ceremony.</h3>
            <p className="font">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
