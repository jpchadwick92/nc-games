import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../utils/api";

const ReviewList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetchReviews(category).then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category]);

  return (
    <section>
      <Loading isLoading={isLoading}>
        <ul className="review-list">
          {reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
        </ul>
      </Loading>
    </section>
  );
};
export default ReviewList;
