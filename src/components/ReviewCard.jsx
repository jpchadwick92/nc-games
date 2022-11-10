import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

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
        <FontAwesomeIcon icon={solid("heart")} color="red" /> {votes} {"   "}
        <FontAwesomeIcon
          icon={regular("comment-dots")}
          className="comment__icon"
        />
        {"   "}
        {review.comment_count}
      </p>
      <p>{new Date(created_at).toLocaleDateString()}</p>
    </li>
  );
};
export default ReviewCard;
