import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const CommentList = ({ comments }) => {
  return (
    <section>
      <h3>Comments</h3>
      <ul className="comment__list">
        {comments.map((comment) => {
          let date = new Date(comment.created_at);
          return (
            <li className="comment" key={comment.comment_id}>
              <h4>
                {comment.author} at {date.toLocaleTimeString().substring(0, 5)}{" "}
                on {date.toLocaleDateString()}
              </h4>
              <p>{comment.body}</p>
              <p>
                <FontAwesomeIcon icon={solid("heart")} color="red" />{" "}
                {comment.votes}{" "}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CommentList;
