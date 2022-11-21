import CommentCard from "./CommentCard";

const CommentList = ({ comments }) => {
  return (
    <section>
      <h3>Comments</h3>
      <ul className="comment__list">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </section>
  );
};

export default CommentList;
