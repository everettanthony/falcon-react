import BlogItem from "../BlogItem/BlogItem";

function BlogList({ blogs }) {
  return (   
    <div className="blogs-list-container">   
      {blogs.map(blog => (
        <BlogItem key={blog.id} blog={blog} />     
      ))}   
    </div>
  );
}

export default BlogList;