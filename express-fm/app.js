const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./router");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors()); // 服务器跨越
app.use(morgan("dev")); // 记录日志
app.use("/api/v1", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("run http://127.0.0.1:" + PORT);
});
