import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";
import CommentArea from "./CommentArea";

const AllTheBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSelect = (book) => {
    if (selectedBook && selectedBook.asin === book.asin) {
      setSelectedBook(null);
    } else {
      setSelectedBook(book);
    }
  };

  return (
    <>
      <Row className="g-2">
        {fantasyBooks.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="p-1">
            <Card
              style={{ height: "fit-content" }}
              onClick={() => handleBookSelect(book)}
              border={
                selectedBook && selectedBook.asin === book.asin
                  ? "danger"
                  : "none"
              }
            >
              <Card.Img
                variant="top"
                src={book.img}
                style={{ height: "400px" }}
              />
              <Card.Body className="d-flex flex-column justify-content-between w-100 p-3">
                <Card.Title
                  style={{ height: "80px" }}
                  className="h4 overflow-scroll"
                >
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
        ))}
      </Row>
      {selectedBook && <CommentArea asin={selectedBook.asin} />}
    </>
  );
};

export default AllTheBooks;
