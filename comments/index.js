const express = require("express");
const cors = require("cors");
const app = express();
const commentsRoutes = require("./routes/comments");
// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("<h1> Hello this is a comments server </h1>");
});

app.use("/api", commentsRoutes);
//SERVER
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`COMMENTS server is running @ http://localhost:${PORT}`);
});
