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

  //  const deletePosts
  const deletePost = async (id) => {
    try {
      const deleteResponse = await fetch(
        `http://localhost:5005/api/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      if (deleteResponse.status === 200) {
        setPosts(posts.filter((post) => post.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="blogposts">
      <h2> Blog Posts </h2>
      {posts.map((post) => (
        <div className="card" key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.top_image} className="card_img"></img>
          <ul className="comic_facts">
            <li>
              <a href={post.comic_url} target="_blank">
                {post.comic_name}
              </a>
            </li>
            <li>{post.rating}/10</li>
            <li>{post.genre}</li>
          </ul>
          <p>{post.blog_content}</p>
          <br />
          <button
            className="deletebuttons"
            key={post.id}
            value={post.id}
            onClick={() => deletePost(post.id)}
          >
            Delete {post.title}
          </button>
          <div className="note">CAREFUL: Delete cannot be undone.</div>
        </div>
      ))}
      <BlogForm addPost={addPost} />
    </div>
  );
}

export default Posts;
