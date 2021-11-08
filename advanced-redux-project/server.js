const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());
const PORT = 3000;

let newCart = [];

app.post("/", (res, req) => {
  console.log(req.body);
  const { body } = req.body;
  newCart.push({ body });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
