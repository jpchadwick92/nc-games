import { useState } from "react";
import { incrementVotes } from "../utils/api";

const Vote = ({ review }) => {
  const [votes, setVotes] = useState(review.votes);

  const voteOnReview = (review_id) => {
    setVotes((currVotes) => {
      return (currVotes += 1);
    });
    incrementVotes(review_id).catch((err) => {
      setVotes((currVotes) => {
        return (currVotes -= 1);
      });
    });
  };

  return (
    <button
      className="vote"
      votes={votes}
      onClick={() => {
        voteOnReview(review.review_id);
      }}
    >
      &#10084;&#65039;
    </button>
  );
};

export default Vote;
