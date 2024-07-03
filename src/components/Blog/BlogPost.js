import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import './BlogPost.css'; // Import your CSS file

const client = createClient({
  space: 'yz7ykimbw7tb',
  accessToken: 'NZFes6tW1EermLU7GmLboKXSyY3Ok34IHjDvDjvIchA' 
});

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const entry = await client.getEntry(id);
        setPost(entry.fields);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-post">
      <h1>{post.blogTitle}</h1>
      <p><strong>Author:</strong> {post.blogAuthor}</p>
      <p><strong>Date:</strong> {new Date(post.createDate).toDateString()}</p>
      {post.blogImage && post.blogImage.fields && post.blogImage.fields.file && (
        <img src={`https:${post.blogImage.fields.file.url}`} alt={post.blogTitle} />
      )}
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.postContent }}></div>
    </div>
  );
};

export default BlogPost;
