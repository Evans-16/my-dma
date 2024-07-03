import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogPosts } from './contentfulService';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        const blogPosts = await fetchBlogPosts();
        console.log('Blog posts:', blogPosts);
        setPosts(blogPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    getBlogPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <div className="blog-container">
        {posts.map((post, index) => (
          <div key={index} className="blog-post">
            <h2>{post.blogTitle}</h2>
            <p><strong>Author:</strong> {post.blogAuthor}</p>
            <p><strong>Date:</strong> {new Date(post.createDate).toDateString()}</p>
            {post.blogImage && post.blogImage.fields && post.blogImage.fields.file && (
              <img src={`https:${post.blogImage.fields.file.url}`} alt={post.blogTitle} />
            )}
            <p>{post.blogSummary}</p>
            <Link to={`/blog/${post.id}`}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
