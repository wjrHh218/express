const express = require("express");
const router = require("./router");
const routerVideo = require("./router/video");
const app = express();

app.use("/user", router);
app.use("/video", routerVideo);

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("service error");
});

app.listen(3000, () => {
  console.log("run http://127.0.0.1:3000");
});
