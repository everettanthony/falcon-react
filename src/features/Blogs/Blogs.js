import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { fetchBlogsStart } from '../../app/store/blogs/blogs.action';
import BlogsPreview from '../BlogsPreview/BlogsPreview';
import Blog from '../Blog/Blog';

function Blogs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogsStart());
  }, [dispatch]);

  return(
    <Routes>
      <Route index element={<BlogsPreview />}></Route>  
      <Route path=':blog' element={<Blog />} />
    </Routes>
  );
}

export default Blogs;