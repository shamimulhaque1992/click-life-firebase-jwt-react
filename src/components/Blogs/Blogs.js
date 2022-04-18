import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Accordion
      className="w-75 mx-auto pt-4 mt-4 pb-4 mb-4"
      defaultActiveKey={["0"]}
      alwaysOpen
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          What is context api and why it's used for?
        </Accordion.Header>
        <Accordion.Body>
          Context api is a solution for props drilling. In react application
          data flows top to bottom. That occars a problem of unwanted shearing
          of props. But for certain type of props that could be cumbersome.
          Context api gives us a solution to shear those props between two
          components without shearing those props through the components
          inbetween. It is mainly used when we have to produce global variables
          that need to be sheared to all available components but without the
          interface of the components inbetween.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>What is semantic tag?</Accordion.Header>
        <Accordion.Body>
          Symantic tags are those tags which name are self describing. That
          means this tags are written in a way by which human as well as machine
          cah understand those tags very easily. This tags clearly define the
          purpose of them. It also describe the type of content that the element
          should contain. <br></br>
          <strong>Example:</strong> header, nav, article, section, aside,
          footer, etc.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Difference between inline and inline-elements{" "}
        </Accordion.Header>
        <Accordion.Body>
          <strong>Block Elements:</strong> Block Elements takes the ful width of
          the screen and other elements have to take place from the next of it.
          A block element every time starts on a new line, and fills up the
          horizontal space left and right on the web page. We can add margins
          and padding on all four sides of any block element — top, right, left,
          and bottom.<br></br>
          <small>Example: div</small>
          <br></br>
          <strong>Inline Elements:</strong>
          Unlike the block element it dlock elements it doesn't take the whole
          width of the screen. Inline elements don’t start on a new line, they
          appear on the same line as the content and tags beside them. <br></br>
          <small>Example: img</small>
          <br></br>
          <strong>Inline-Block Elements:</strong>
          Inline-block elements are one kind of inline elements, just they can
          have padding and margins added on all four sides. You’ll have to
          declare display: inline-block in your CSS code. commonly we use it for
          creating navigation links horizontally, as shown below. I’ve created a
          horizontal navigation menu with an orange background color.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Blogs;