const express = require("express");
const app = express();
const knex = require("./database");

app.get("/", async (req, res) => {
  try {
    const user = await knex.select("user").from("user");
    res.send(user);
  } catch (error) {
    console.log(error);
    return null;
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
