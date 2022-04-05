import { useState, useEffect } from "react";
import BlogForm from "./BlogForm";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/api/posts")
      .then((response) => response.json())
      .then((postData) => {
        setPosts(postData);
      });
  }, []);

  const addPost = (newPost) => {
    setPosts((posts) => [...posts, newPost]);
  };

  return (
    <div className="students">
      <h2> Blog Posts </h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {" "}
            {post.title} <br />
            {post.comic_name}
          </li>
        ))}
      </ul>
      <BlogForm addPost={addPost} />
    </div>
  );
}

export default Posts;
