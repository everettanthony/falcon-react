import { Link } from 'react-router-dom';
import './BlogItem.scss';

const options = { year: 'numeric', month: 'long', day: 'numeric' };

function BlogItem({ blog }) {
  const { intro, imageUrl, title, postDate, route } = blog;
  const dateNew = new Date(postDate.seconds * 1000).toLocaleDateString('en-US', options);

  return (
    <div className="blog-item">
      <div className="blog-item-col img-col">
        <div className="blog-item-img">
          <Link to={`${route}`} title="Read more">
            <img src={imageUrl} alt={title} />
          </Link>
        </div>
      </div>
      <div className="blog-item-col info-col">
        <h2 className="blog-item-title"><Link to={`${route}`}>{title}</Link></h2>
        <div className="blog-item-date">{dateNew}</div>
        <div className="blog-item-post">{intro} <Link to={`${route}`}>Read more</Link></div>
      </div>
    </div>
  );
}

export default BlogItem;