const ReviewCard = ({ title, category, img, body, votes }) => {
  return (
    <li className="card" id="review-card">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h3>Category: {category[0].toUpperCase() + category.substring(1)}</h3>
      <p>{body}</p>
      <p>Votes: {votes}</p>
    </li>
  );
};
export default ReviewCard;
