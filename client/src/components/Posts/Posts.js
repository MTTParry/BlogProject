import React from "react";
import { useState, useEffect } from "react";
import EditPostForm from "./EditForm";
import AddPost from "./AddPost";

const emptyPost = {
  title: "",
  comic_name: "",
  comic_url: "",
  blog_content: "",
  top_image: "",
  mid_image: "",
  genre: "",
  rating: "",
};

function Posts() {
  //This needs an empty array, or the whole thing breaks
  const [posts, setPosts] = useState([]);
  const [editPostId, setEditPostId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5005/api/posts")
      .then((response) => response.json())
      .then((postData) => {
        setPosts(postData);
      });
  }, []);

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

  //PUT stuff
  // grabs the id of the post to be editted
  const editPost = (post) => {
    const editId = post.id;
    console.log(editId);
    setEditPostId(editId);
  };

  const updatePost = async (updatedPost) => {
    setPosts((posts) => {
      const newListPosts = [];
      for (let post of posts) {
        if (post.id === updatedPost.id) {
          newListPosts.push(updatedPost);
        } else {
          newListPosts.push(post);
        }
      }
      return newListPosts;
    });

    setEditPostId(null);
  };

  return (
    <div className="blogposts">
      <h2> Blog Posts </h2>

      {posts.map((post) => {
        if (post.id === editPostId) {
          return <AddPost initialPost={post} savePost={updatePost} />;
        } else {
          return (
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
                className="editbuttons"
                key={post.id}
                value={post.id}
                onClick={() => editPost(post)}
              >
                EDIT Post
              </button>

              <button
                className="deletebuttons"
                key={post.id}
                value={post.id}
                onClick={() => deletePost(post.id)}
              >
                DELETE Post
              </button>
              <div className="note">CAREFUL: Delete cannot be undone.</div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Posts;
