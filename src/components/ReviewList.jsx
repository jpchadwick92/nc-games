import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../utils/api";
import SortReviews from "./SortReviews";

const ReviewList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const { category } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetchReviews(category, sortBy).then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category, sortBy]);

  return (
    <section>
      <Loading isLoading={isLoading}>
        <SortReviews sortBy={sortBy} setSortBy={setSortBy} />
        <ul className="review__list">
          {reviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })}
        </ul>
      </Loading>
    </section>
  );
};
export default ReviewList;
