const ReviewCard = ({ review }) => {
  const { title, category, review_body, review_img_url, votes } = review;
  return (
    <li className="card" id="review-card">
      <img src={review_img_url} alt="" />
      <h2>{title}</h2>
      <h3>Category: {category[0].toUpperCase() + category.substring(1)}</h3>
      <p>{review_body}</p>
      <p>Votes: {votes}</p>
    </li>
  );
};
export default ReviewCard;
