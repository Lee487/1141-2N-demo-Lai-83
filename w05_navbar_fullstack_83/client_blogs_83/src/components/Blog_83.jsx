import { FaGlobe } from "react-icons/fa6";
import { FaBeerMugEmpty } from "react-icons/fa6";

const Blog_83 = ({ id, img, category, title, descrip }) => {
  return (
    <article key={id} className="blog">
      <img src={img} alt="Coffee photo" className="img blog-img" />
      <div className="blog-content">
        <span>
          {category}
          {category === "lifestyle" ? <FaBeerMugEmpty /> : <FaGlobe />}
        </span>
        <h3>{title}</h3>
        <p>{descrip}</p>
        <a href="#">read more</a>
      </div>
    </article>
  );
};

export default Blog_83;