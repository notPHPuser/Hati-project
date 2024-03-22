import React, { useEffect, useState } from 'react';
import './testPost.css';
import axios from 'axios';

function ListReg() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div>
        <h2 className='text'>Posts</h2>
        <ul className='test_posts'>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.email}</h3>
              <p>{post.login}</p>
              <p>{post.password}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListReg;
