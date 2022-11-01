const SortReviews = ({ sortBy, setSortBy }) => {
  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <section>
      <label htmlFor="sort">Sort By: </label>
      <select name="sort" id="sort" value={sortBy} onChange={handleChange}>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
    </section>
  );
};

export default SortReviews;
