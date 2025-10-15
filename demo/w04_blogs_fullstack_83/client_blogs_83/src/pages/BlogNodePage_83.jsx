import { useState ,useEffect} from 'react';



//import blogData_xx from '../assets/data/blogData.json';


import Blog_83 from '../components/Blog_83';


const api_url = 'http://localhost:3001/api/blogs_83';

const BlogNodePage_83 = () => {
  const [name, setName] = useState('Lai');
  const [id, setId] = useState(213410383);
  const [blogs_xx, setBlogs_xx] = useState([]);

  const fetchBlogFromNodeSever = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('blogs',data);
      setBlogs_xx(data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {fetchBlogFromNodeSever();}, []);

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2>
          blogs from Node Sever -- {name}, {id}
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

export default BlogNodePage_83;
