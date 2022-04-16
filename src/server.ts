import express from "express";

const app = express();
const PORT = process.env.PORT || 3333;

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
