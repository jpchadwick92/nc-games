import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-backend-project.cyclic.app/api",
});

export const fetchReviews = (category, sort_by, order) => {
  return api
    .get("/reviews", {
      params: {
        category,
        sort_by,
        order,
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
export const fetchComments = (review_id) => {
  return api.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data;
  });
};
export const postNewComment = (review_id, username, newComment) => {
  return api
    .post(`/reviews/${review_id}/comments`, {
      username,
      body: newComment,
    })
    .then(({ data }) => {
      return data;
    });
};

export const removeComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`);
};
