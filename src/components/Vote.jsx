import { useState } from "react";
import { incrementVotes } from "../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

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
      <FontAwesomeIcon icon={solid("heart")} color="red" />
    </button>
  );
};

export default Vote;
