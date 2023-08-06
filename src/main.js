/* import * as http from "http";

const PORT = 4000;

const server = http.createServer((request, response) => {
  response.end("Hola, buenos días!");
});

server.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
}); */

import express from "express";

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hola desde la pag de inicion de mi app");
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
