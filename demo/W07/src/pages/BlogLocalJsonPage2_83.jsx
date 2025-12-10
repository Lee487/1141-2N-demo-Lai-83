import { useState } from 'react';
import blogData_xx from '../assets/data/blogData.json';
import Blog2_83 from '../components/Blog2_83.jsx';
import Wrapper from '../../src/assets/wrappers/Blog2_xx.jsx';
import Alert_83 from '../components/Alert_83.jsx';

const BlogLocalJsonPage2_83 = () => {
  const [name, setName] = useState('Lai');
  const [id, setId] = useState(213410383);
  const [blogs_xx, setBlogs_xx] = useState(blogData_xx);
  const [alert,setAlert] = useState({show:false,msg:'',type:''});


const showAlert =(show=false,msg='',type='')=>{
  setAlert({show,msg,type});
};

const removeItem = (id) => {
  showAlert(true,'item removed','danger');
  setBlogs_xx(blogs_xx.filter((blog) => blog.id !== id));
}

const clearAllBlogs = () => {
  showAlert(true,'all blogs cleared','danger');
  setBlogs_xx([]);
};

const localAllBlogs = () => {
  showAlert(true,'all blogs loaded','success');
  setBlogs_xx([]);
  setBlogs_xx(blogData_xx);
};

return ( 
<Wrapper>
  {alert.show && <Alert_83 alert={alert} showAlert={showAlert} />}
  <section className='blogs'>
    <div className='section-title'>
      <h2>
        blogs from local json -- {name}, {id}
      </h2>
    </div>
  
  </section>
  </Wrapper>
  );  
};

export default BlogLocalJsonPage2_83;