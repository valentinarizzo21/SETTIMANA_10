/* eslint-disable react/prop-types */

import { Card, Col, Button } from "react-bootstrap";

const SingleBook = ({ book, changeSelectedBook, selectedBook }) => {
  const handleCardClick = () => {
    changeSelectedBook(selectedBook === book.asin ? null : book.asin);
  };

  return (
    <Col className="p-1">
      <Card
        onClick={handleCardClick}
        style={{
          border: selectedBook === book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={book.img} style={{ height: "400px" }} />
        <Card.Body className="d-flex flex-column justify-content-between w-100 p-3">
          <Card.Title style={{ height: "80px" }} className="h4 overflow-scroll">
            {book.title}
          </Card.Title>
          <Card.Text className="h2 fw-light">{book.price} $</Card.Text>
          <Card.Text className="align-self-end">
            <i>{book.category}</i>
          </Card.Text>
          <Button variant="primary">Shop Now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
