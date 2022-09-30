import { useState } from "react";
import { postNewComment } from "../utils/api";
import { UserContext } from "../contexts/User";
import { useContext } from "react";

const CommentAdder = ({ review_id, setComments }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewComment(review_id, user.username, newComment).then(({ comment }) => {
      setComments((currComments) => {
        return [comment, ...currComments];
      });
      setNewComment("");
    });
  };

  return (
    <form className="comment__adder" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="newComment">Add a comment</label>
      <br />
      <textarea
        id="newComment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <br />
      <button>Add</button>
    </form>
  );
};
export default CommentAdder;
