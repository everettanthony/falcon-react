import { useSelector } from 'react-redux';
import { selectBlogsMap, selectIsLoading } from '../../app/store/blogs/blogs.selector';
import BlogsList from '../../app/components/BlogList/BlogList';
import CallUs from '../../app/components/CallUs/CallUs';
import Spinner from '../../app/components/Spinner/Spinner';
import './BlogsPreview.scss';

function BlogsPreview() {
  const blogsMap = useSelector(selectBlogsMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="blogs">
      <div className="blogs-preview">
        <div className="blogs-col">
          <h1 className="blogs-title">Falcon Blogs</h1>
          <div className="blogs-list">
            {isLoading ? (
              <Spinner />
            ) : (
              <BlogsList blogs={blogsMap} />
            )}
          </div>
        </div>
      </div>
      <CallUs />
    </div>
  );
}

export default BlogsPreview;