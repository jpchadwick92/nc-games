import { useState } from "react";
import { postNewComment } from "../utils/api";
import { UserContext } from "../contexts/User";
import { useContext } from "react";
import Loading from "./Loading";

const CommentAdder = ({ review_id, setComments }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    postNewComment(review_id, user.username, newComment).then(({ comment }) => {
      setComments((currComments) => {
        return [comment, ...currComments];
      });
      setIsLoading(false);
      setNewComment("");
    });
  };

  return (
    <Loading isLoading={isLoading}>
      <form className="comment__adder" onSubmit={handleSubmit}>
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
    </Loading>
  );
};
export default CommentAdder;
