import { useState } from "react";
import { Container, Row, Modal, Alert, Button } from "react-bootstrap";

function MyAlert() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container className="my-5">
      <Row>
        <Alert variant="primary" className="my-5">
          <Alert.Heading>Hey, nice to see you again!</Alert.Heading>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            corporis quam esse, accusantium, totam iusto fuga porro pariatur
            ullam dolor rem quaerat ab placeat, animi amet numquam! Ex,
            provident dignissimos? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusantium commodi perferendis asperiores odit
            eaque? Enim at est assumenda illo cupiditate exercitationem debitis
            delectus omnis culpa, dolore harum totam tenetur cum?
          </p>
          <hr />
          <h4 className="mb-0">
            Courious to see the offers? Don&apos;t hesitate and click here!
          </h4>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-warning my-2 py-3 px-4"
              onClick={handleShow}
            >
              See Offers!
            </button>
          </div>
        </Alert>
      </Row>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <i>Exclusive Offers!</i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Here are the best offers for you!</p>
          {"Buy 2 get 1 free"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Go to Shop
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default MyAlert;
