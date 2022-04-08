import { useState } from "react";

const EditPostForm = (props) => {
  //An initial student if there is one in props
  const {
    initialPost = {
      title: "",
      comic_name: "",
      comic_url: "",
      blog_content: "",
      top_image: "",
      mid_image: "",
      genre: "",
      rating: "",
    },
  } = props;

  // Initial State
  const [post, setPost] = useState(initialPost);

  //create functions that handle the event of the user typing into the form
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setPost((post) => ({ ...post, [name]: value }));
  };

  //A function to handle the PUT request
  const putBlogPost = async (existingPost) => {
    return fetch("http://localhost:5005/api/posts/${existingPost.id}", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(existingPost),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("From the post ", data);
        props.updatePost(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.id) {
      putBlogPost(post);
    } else {
      console.log("something's going wrong...");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Blog Post</h3>
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
      <button type="submit">SAVE changes</button>
    </form>
  );
};

export default EditPostForm;
