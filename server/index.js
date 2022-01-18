const express = require("express");
const app = express();
require("dotenv").config();
const http = require("http");
const server = http.createServer(app);
const routes = require("./Routes");
const port = process.env.PORT || 3001;
const db = require("./Common/connection");

app.use(express.json());
app.use("/api/v1", routes);

server.listen(port, () => {
  db.connect();
  console.log(`Server running on port : ${port}`);
});
