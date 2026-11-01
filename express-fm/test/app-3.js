const express = require("express");
const router = require("./router");
const routerVideo = require("./router/video");
const app = express();

// // 不匹配请求方法 delete put都可以
// app.all("/xx", (req, res) => {
//   console.log(req.method);
//   res.send("test");
// });

app.get("/user/:id/:id2", (req, res) => {
  console.log(req.params);
  
  res.send(`${req.method}---${req.url}`);
});

app.listen(3000, () => {
  console.log("run http://127.0.0.1:3000");
});
