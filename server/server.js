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
    const { rows: posts } = await db.query("SELECT * FROM posts;");
    res.send(posts);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// SUBSCRIBERS
app.get("/api/subscribers", cors(), async (req, res) => {
  try {
    const { rows: people } = await db.query("SELECT * FROM subscribers;");
    res.send(people);
  } catch (e) {
    return res.status(400).json({ e });
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
      mid_image: req.body.top_image,
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
  const contactId = req.params.id;
  console.log("Deleting contact id #", contactId);
  await db.query("DELETE FROM contactlist WHERE id=($1)", [contactId]);
  res.send({ status: "successful delete!" });
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
