/* eslint-disable react/prop-types */
import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer inserisci-qui-il-tuo-token",
          },
        }
      );
      if (response.ok) {
        alert("La recensione è stata elimata!");
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <ListGroup.Item className="d-flex align-content-center justify-content-between">
        {comment.comment}
        <Button
          variant="info"
          className="p-1 mx-1"
          onClick={() => deleteComment(comment._id)}
        >
          🗑️
        </Button>
      </ListGroup.Item>
    </div>
  );
};

export default SingleComment;
