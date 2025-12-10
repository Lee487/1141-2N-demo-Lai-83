import { FaGlobe } from "react-icons/fa6";
import { FaBeerMugEmpty } from "react-icons/fa6";
import {Link} from "react-router-dom";

const Blog2_83 = ({ id, img, category, title, descrip ,removeitem}) => {
  return (
    <article key={id} className="blog">
      <img src={img} alt="Coffee photo" className="img blog-img" />
      <div className="blog-content">
        <span className="flex">
          {category}
          {category === "lifestyle" ? (<FaBeerMugEmpty className='ml-1' color="blue"/>) : (<FaGlobe className='ml-1'color="blue" />)}
        </span>
        <h3>{title}</h3>
        <p>{descrip}</p>
        <div className='flex justify-between items-center'>
           <Link to='#'>read more</Link>
      <button type='button' className='text-red-700 bg-red-100 capitalize px-2 py-1 hover:bg-red-300 rounded'
      onClick={() => removeitem(id)}
      >
        delete
        </button>
     </div>
      </div>
</article>
  );
};

export default Blog2_83;