const express = require("express");
const cors = require("cors");
const app = express();

const postRoutes = require("./routes/post");
// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("<h1> Hello this is a post server </h1>");
});

app.use("/api/posts", postRoutes);

//SERVER
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`POST server is running on http://localhost:${PORT}`);
});
