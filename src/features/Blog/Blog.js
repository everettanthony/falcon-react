import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectBlogsMap } from '../../app/store/blogs/blogs.selector';
import './Blog.scss';

const options = { year: 'numeric', month: 'long', day: 'numeric' };

function Blog() {
  const { blog } = useParams();
  const blogsMap = useSelector(selectBlogsMap);
  const [blogArray] = blogsMap.filter(item => item.route === blog);
  const [blogPost, setBlogPost] = useState(blogArray);
  const dateNew = new Date(blogPost.postDate.seconds * 1000).toLocaleDateString('en-US', options);

  useEffect(() => {
    setBlogPost(blogArray);
  }, [blogArray]);

  return (
    <div className="blog">
      <div className="blog-container">
        <div className="blog-post">
          <h1 className="blog-title">{blogPost.title}</h1>
          <div className="blog-date">{dateNew}</div>
          <div className="blog-feature-img">
            <img src={blogPost.imageUrl} alt={blogPost.title} />
          </div>
          <div class="blog-body" dangerouslySetInnerHTML={{__html: blogPost.body}}></div>
          <div className="blog-footer">
            <Link to="/blogs" className="btn-link btn-return">Return to Blogs</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;