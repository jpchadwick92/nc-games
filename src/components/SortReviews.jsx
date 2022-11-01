const SortReviews = ({ sortBy, setSortBy, orderBy, setOrderBy }) => {
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
  };
  return (
    <section className="sort__by">
      <label htmlFor="sort">Sort By: </label>
      <select name="sort" id="sort" value={sortBy} onChange={handleSortChange}>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <label htmlFor="order">Order By: </label>
      <select
        name="order"
        id="order"
        value={orderBy}
        onChange={handleOrderChange}
      >
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </section>
  );
};

export default SortReviews;
