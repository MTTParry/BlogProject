import { useState } from "react";

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

const AddPost = () => {
  const [post, setPost] = useState(emptyPost);

  //create functions that handle the event of the user typing into the form
  const handleChange = (event) => {
    // As long as <InputTextField name="XXXXXX"> is the same as the Key in the `post` object, it'll update it
    const name = event.target.name;
    const value = event.target.value;
    // no idea why [name] works, but it does
    setPost((post) => ({ ...post, [name]: value }));
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
        // props.addPost(data);
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
          name="title"
          value={post.title}
          onChange={handleChange}
        />
        <br />
        <label>Comic Name</label>
        <br />
        <input
          type="text"
          id="add-post-comic_name"
          placeholder="Comic by Person"
          name="comic_name"
          required
          value={post.comic_name}
          onChange={handleChange}
        />
        <br />
        <label>Comic 1st Episode URL</label>
        <br />
        <input
          type="text"
          id="add-post-comic_url"
          placeholder="1st Episode URL"
          required
          name="comic_url"
          value={post.comic_url}
          onChange={handleChange}
        />
        <br />
        <label>Blog Text</label>
        <br />
        <input
          type="text"
          id="add-post-blog_content"
          placeholder="..."
          required
          name="blog_content"
          value={post.blog_content}
          onChange={handleChange}
        />
        <br />
        <label>Header Image</label>
        <br />
        <input
          type="text"
          id="add-post-top_image"
          placeholder="Image URL"
          required
          name="top_image"
          value={post.top_image}
          onChange={handleChange}
        />
        <br />
        <label>Other Image</label>
        <br />
        <input
          type="text"
          id="add-post-mid_image"
          placeholder="Image URL"
          required
          name="mid_image"
          value={post.mid_image}
          onChange={handleChange}
        />
        <br />
        <label>Genre</label>
        <br />
        <input
          type="text"
          id="add-post-genre"
          placeholder="Romance, Fantasy"
          required
          name="genre"
          value={post.genre}
          onChange={handleChange}
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
          name="rating"
          value={post.rating}
          onChange={handleChange}
        />
        /10
        <br />
      </fieldset>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
