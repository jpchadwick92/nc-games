import { Link } from "react-router-dom";
const ReviewCard = ({ review }) => {
  const {
    review_id,
    title,
    category,
    review_body,
    review_img_url,
    votes,
    created_at,
  } = review;
  return (
    <li className="card" id="review-card">
      <img src={review_img_url} alt={title} />
      <Link to={`/reviews/${review_id}`}>
        <h2>{title}</h2>
      </Link>
      <h3>Category: {category[0].toUpperCase() + category.substring(1)}</h3>
      <p>{review_body}</p>
      <p>
        &#10084;&#65039; {votes} {"   "}
        <i className="far fa-comment-dots"> </i>
        {review.comment_count}
      </p>
      <p>{new Date(created_at).toLocaleDateString()}</p>
    </li>
  );
};
export default ReviewCard;
