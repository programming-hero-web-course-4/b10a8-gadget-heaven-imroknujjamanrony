/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="flex flex-col justify-start gap-2 w-52 ">
      {categories.map((category) => (
        <Link
          key={category.category}
          to={`/category/${category.category}`}
          className="tab btn"
          role="tab"
        >
          {category.category}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
