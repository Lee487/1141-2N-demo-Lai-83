import { useState } from 'react';
import blogData_xx from '../assets/data/blogData.json';
import Blog_83 from '../components/Blog_83';

const BlogLocalJsonPage_83 = () => {
  const [name, setName] = useState('Lai');
  const [id, setId] = useState(213410383);
  const [blogs_xx, setBlogs_xx] = useState(blogData_xx);

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2>
          blogs from local json -- {name}, {id}
        </h2>
      </div>

      <div className='blogs-center'>
        {blogs_xx.map((item) => {
          const { id, title, descrip, category, img } = item;
          return (
            <Blog_83
              key={id}
              id={id}
              title={title}
              descrip={descrip}
              category={category}
              img={img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BlogLocalJsonPage_83;
