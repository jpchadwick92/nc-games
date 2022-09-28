import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://northcoders-games-project.herokuapp.com/api/categories")
      .then(({ data }) => {
        setCategories(data.categories);
      });
  }, []);
  return (
    <nav className="nav">
      <Link to="/">Home </Link>

      {categories.map(({ slug }) => {
        return (
          <Link key={slug} to={`/categories/${slug}`}>
            {slug[0].toUpperCase() + slug.substring(1) + " "}
          </Link>
        );
      })}
    </nav>
  );
};
export default Nav;
