import { useState } from "react";

const BlogForm = (props) => {
  const [post, setPost] = useState({
    title: "",
    comic_name: "",
    comic_url: "",
    blog_content: "",
    top_image: "",
    mid_image: "",
    genre: "",
    rating: "",
  });

  //create functions that handle the event of the user typing into the form
  const handleTitleChange = (event) => {
    const title = event.target.value;
    setPost((post) => ({ ...post, title }));
  };

  const handleComicNameChange = (event) => {
    const comic_name = event.target.value;
    setPost((post) => ({ ...post, comic_name }));
  };

  const handleComicUrlChange = (event) => {
    const comic_url = event.target.value;
    setPost((post) => ({ ...post, comic_url }));
  };

  const handleBlogContentChange = (event) => {
    const blog_content = event.target.value;
    setPost((post) => ({ ...post, blog_content }));
  };

  const handleTopImageChange = (event) => {
    const top_image = event.target.value;
    setPost((post) => ({ ...post, top_image }));
  };

  const handleMidImageChange = (event) => {
    const mid_image = event.target.value;
    setPost((post) => ({ ...post, mid_image }));
  };

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setPost((post) => ({ ...post, genre }));
  };

  const handleRatingChange = (event) => {
    const rating = event.target.value;
    setPost((post) => ({ ...post, rating }));
  };

  //A function to handle the post request
  const postBlogPost = (newPost) => {
    return fetch("http://localhost:5005/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        props.addPost(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postBlogPost(post);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Blog Post</h3>
      <fieldset>
        <label>Post Title</label>
        <br />
        <input
          type="text"
          id="add-post-title"
          placeholder="Post Title"
          required
          value={post.title}
          onChange={handleTitleChange}
        />
        <br />
        <label>Comic Name</label>
        <br />
        <input
          type="text"
          id="add-post-comic_name"
          placeholder="Comic by Person"
          required
          value={post.comic_name}
          onChange={handleComicNameChange}
        />
        <br />
        <label>Comic 1st Episode URL</label>
        <br />
        <input
          type="text"
          id="add-post-comic_url"
          placeholder="1st Episode URL"
          required
          value={post.comic_url}
          onChange={handleComicUrlChange}
        />
        <br />
        <label>Blog Text</label>
        <br />
        <input
          type="text"
          id="add-post-blog_content"
          placeholder="..."
          required
          value={post.blog_content}
          onChange={handleBlogContentChange}
        />
        <br />
        <label>Header Image</label>
        <br />
        <input
          type="text"
          id="add-post-top_image"
          placeholder="Image URL"
          required
          value={post.top_image}
          onChange={handleTopImageChange}
        />
        <br />
        <label>Other Image</label>
        <br />
        <input
          type="text"
          id="add-post-mid_image"
          placeholder="Image URL"
          required
          value={post.mid_image}
          onChange={handleMidImageChange}
        />
        <br />
        <label>Genre</label>
        <br />
        <input
          type="text"
          id="add-post-genre"
          placeholder="Romance, Fantasy"
          required
          value={post.genre}
          onChange={handleGenreChange}
        />
        <br />
        <label>Rating</label>
        <br />
        <input
          type="number"
          min="0"
          max="10"
          id="add-post-comic_name"
          placeholder="0"
          required
          value={post.rating}
          onChange={handleRatingChange}
        />
        /10
        <br />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default BlogForm;
