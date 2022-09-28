import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../utils/api";
const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(({ categories }) => {
      setCategories(categories);
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
