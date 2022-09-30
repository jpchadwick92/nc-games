import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../utils/api";
import { fetchComments } from "../utils/api";
import CommentAdder from "./CommentAdder";
import CommentList from "./CommentList";
import Loading from "./Loading";
import Vote from "./Vote";

const ReviewPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState({});
  const { review_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchReviewById(review_id).then(({ review }) => {
      setReview(review);
      setIsLoading(false);
    });
    fetchComments(review_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [review_id]);

  return (
    <section className="review__page">
      <Loading isLoading={isLoading}>
        <img src={review.review_img_url} alt="" />
        <h2>{review.title}</h2>
        <h3>By: {review.owner}</h3>
        <h3>Category: {review.category}</h3>
        <p>{review.review_body}</p>
        <p>
          <Vote review={review} />
          <i className="far fa-comment-dots"></i>
          {review.comment_count}
        </p>
        <CommentAdder review_id={review_id} setComments={setComments} />;
        <CommentList className="comments" comments={comments} />
      </Loading>
    </section>
  );
};

export default ReviewPage;
