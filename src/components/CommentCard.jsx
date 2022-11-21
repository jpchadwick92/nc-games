import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { removeComment } from "../utils/api";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/User";
import Loading from "./Loading";

const CommentCard = ({ comment }) => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const handleOnClick = (e) => {
    setIsLoading(true);
    removeComment(comment.comment_id).then(() => {
      setIsDeleted(true);
      setIsLoading(false);
    });
  };
  let date = new Date(comment.created_at);

  if (isDeleted) {
    return <p>Comment deleted</p>;
  }

  return comment.author === user.username ? (
    <Loading isLoading={isLoading}>
      <li className="comment" key={comment.comment_id}>
        <h4>
          {comment.author} at {date.toLocaleTimeString().substring(0, 5)} on{" "}
          {date.toLocaleDateString()}
        </h4>
        <p>{comment.body}</p>
        <p>
          <FontAwesomeIcon icon={solid("heart")} color="red" /> {comment.votes}{" "}
          <button className="delete__button" onClick={handleOnClick}>
            <FontAwesomeIcon icon={solid("trash")} />
          </button>
        </p>
      </li>
    </Loading>
  ) : (
    <Loading isLoading={isLoading}>
      <li className="comment" key={comment.comment_id}>
        <h4>
          {comment.author} at {date.toLocaleTimeString().substring(0, 5)} on{" "}
          {date.toLocaleDateString()}
        </h4>
        <p>{comment.body}</p>
        <p>
          <FontAwesomeIcon icon={solid("heart")} color="red" /> {comment.votes}{" "}
        </p>
      </li>
    </Loading>
  );
};

export default CommentCard;
