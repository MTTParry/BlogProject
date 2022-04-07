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
}
const BlogForm = (props) => {
  const [post, setPost] = useState(emptyPost);
  console.log(post)

  //create functions that handle the event of the user typing into the form
  const handleChange = (event) => {
    // As long as <InputTextField name="XXXXXX"> is the same as the Key in the `post` object, it'll update it
    const name = event.target.name
    const value = event.target.value
    // no idea why [name] works, but it does
    setPost((post) => ({ ...post, [name]: value }));
  }

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

  // name === key of field you want to change
  const textFields = [
    { label:"Post Title", name:"title", placeholder:"Post Title", value:post.title},
    { label:"Comic Name", name:"comic_name", placeholder:"Comic by Person", value:post.comic_name},
    { label:"Comic 1st Episode URL", name:"comic_url", placeholder:"1st Episode URL", value:post.comic_url},
    { label:"Blog Text", name:"blog_content", placeholder:". . .", value:post.blog_content}
  ]

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Blog Post</h3>
      <fieldset>
        {/* Map the Fields using {...fieldData}
        The `key=` property needs to be in the map closure for React to handle it, not in the React Component below
       */}
        {textFields.map(fieldData => {
          return <InputTextField key={fieldData.name} {...fieldData} handleChange={handleChange}/>
        })}
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
          name="genre"
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

const InputTextField = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <br />
      <input
        type="text"
        id={"add-post-" + props.name }
        placeholder={props.placeholder}
        required
        // name should match key on post object
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      />
      <br />
    </>
  );
}

export default BlogForm;
