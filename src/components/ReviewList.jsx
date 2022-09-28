import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Loading from "./Loading";

const ReviewList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://northcoders-games-project.herokuapp.com/api/reviews")
      .then((response) => response.json())
      .then(({ reviews }) => {
        setReviews(reviews);
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <Loading isLoading={isLoading}>
        <ul className="review-list">
          {reviews.map((review) => {
            return (
              <ReviewCard
                key={review.review_id}
                title={review.title}
                category={review.category}
                body={review.review_body}
                img={review.review_img_url}
                votes={review.votes}
              />
            );
          })}
        </ul>
      </Loading>
    </section>
  );
};
export default ReviewList;
