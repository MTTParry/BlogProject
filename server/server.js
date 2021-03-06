const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("../server/db/db-connection.js");

const app = express();

const PORT = 5005;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.json({ message: "Hello from My ExpressJS" });
});

//create the get request
// BLOG POSTS
app.get("/api/posts", cors(), async (req, res) => {
  try {
    const { rows: posts } = await db.query(
      "SELECT * FROM posts ORDER BY creationtimestamp DESC;"
    );
    res.send(posts);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// SUBSCRIBERS GET
app.get("/api/subscribers", cors(), async (req, res) => {
  try {
    const { rows: people } = await db.query("SELECT * FROM subscribers;");
    res.send(people);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//SUBSCRIBERS POST request
app.post("/api/subscribers", cors(), async (req, res) => {
  console.log("Start server request");
  try {
    const newSubscriber = {
      name: req.body.name,
      email: req.body.email,
    };
    console.log([newSubscriber]);
    const queryString = `INSERT INTO subscribers (name, email) VALUES ('${newSubscriber.name}', '${newSubscriber.email}') RETURNING *`;
    const result = await db.query(queryString);
    console.log("Subscriber added", result.rows[0]);
    res.json(result.rows[0]);
  } catch (e) {
    console.log(e.message);
  }
});

//create the POST request
app.post("/api/posts", cors(), async (req, res) => {
  console.log("Start server request");
  try {
    const newPost = {
      title: req.body.title,
      comic_name: req.body.comic_name,
      comic_url: req.body.comic_url,
      blog_content: req.body.blog_content,
      top_image: req.body.top_image,
      mid_image: req.body.mid_image,
      genre: req.body.genre,
      rating: req.body.rating,
    };
    console.log([newPost]);
    const queryString = `INSERT INTO posts (title, comic_name, comic_url, blog_content, top_image, mid_image, genre, rating, creationtimestamp) VALUES ('${newPost.title}', '${newPost.comic_name}', '${newPost.comic_url}', '${newPost.blog_content}', '${newPost.top_image}', '${newPost.mid_image}', '${newPost.genre}', '${newPost.rating}', current_timestamp) RETURNING *`;
    const result = await db.query(queryString);
    console.log("Blog Post", result.rows[0]);
    res.json(result.rows[0]);
  } catch (e) {
    console.log(e.message);
  }
});

//Delete posts by id
app.delete("/api/posts/:id", async (req, res) => {
  const postId = req.params.id;
  console.log("Deleting post id #", postId);
  await db.query("DELETE FROM posts WHERE id=($1)", [postId]);
  res.send({ status: "successful delete!" });
});

//Update posts by id
app.put("/api/posts/:id", async (req, res) => {
  const postUpdateId = req.params.id;
  console.log("Updating post id #", postUpdateId);
  const updatePost = {
    id: req.body.id,
    title: req.body.title,
    comic_name: req.body.comic_name,
    comic_url: req.body.comic_url,
    blog_content: req.body.blog_content,
    top_image: req.body.top_image,
    mid_image: req.body.mid_image,
    genre: req.body.genre,
    rating: req.body.rating,
  };
  console.log("Updated Post:", updatePost);
  const query = `UPDATE posts SET title=$1, comic_name=$2, comic_url=$3, blog_content=$4, top_image=$5, mid_image=$6, genre=$7, rating=$8  WHERE id=${postUpdateId} RETURNING *;`;
  console.log(query);
  const updateValues = [
    updatePost.title,
    updatePost.comic_name,
    updatePost.comic_url,
    updatePost.blog_content,
    updatePost.top_image,
    updatePost.mid_image,
    updatePost.genre,
    updatePost.rating,
  ];
  try {
    const update = await db.query(query, updateValues);
    console.log(update.rows[0]);
    res.send(update.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
