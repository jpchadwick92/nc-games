import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Loading from "./Loading";
import axios from "axios";

const ReviewList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://northcoders-games-project.herokuapp.com/api/reviews")
      .then(({ data }) => {
        setReviews(data.reviews);
        setIsLoading(false);
      });
  }, []);

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
