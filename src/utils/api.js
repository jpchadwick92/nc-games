import axios from "axios";

const api = axios.create({
  baseURL: "https://northcoders-games-project.herokuapp.com/api",
});

export const fetchReviews = (category) => {
  return api
    .get("/reviews", {
      params: {
        category,
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const fetchReviewById = (review_id) => {
  return api.get(`/reviews/${review_id}`).then(({ data }) => {
    return data;
  });
};

export const fetchCategories = () => {
  return api.get("/categories").then(({ data }) => {
    return data;
  });
};

export const incrementVotes = (review_id) => {
  return api
    .patch(`/reviews/${review_id}`, {
      inc_votes: 1,
    })
    .then(({ data }) => {
      return data;
    });
};
