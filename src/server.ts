import http from "http";
import app from "./app";

const PORT = process.env.PORT || 5001;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}...`);
});
