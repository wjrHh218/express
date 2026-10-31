const express = require("express");
const { getDb, serveDb } = require("./db");
const app = express();
// app.use(express.urlencoded());
app.use(express.json());

app.get("/", async function (req, res) {
  try {
    const back = await getDb();
    res.send(back.users);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.post("/", async (req, res) => {
  let body = req.body;
  if (!body) {
    res.status(403).json({
      error: "缺少用户信息",
    });
  }
  const jsonObj = await getDb();
  body.id = jsonObj.users[jsonObj.users.length - 1].id + 1;
  jsonObj.users.push(body);

  try {
    let w = await serveDb(jsonObj);
    if (!w) {
      res.status(200).send({
        msg: "添加成功",
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.put("/:id", async (req, res) => {
  // console.log(req.params.id);
  // console.log(req.body);
  try {
    let userInfo = await getDb();
    let userId = Number.parseInt(req.params.id);
    let user = userInfo.users.find((item) => item.id === userId);
    if (!user) {
      res.status(403).json({
        error: "用户不存在",
      });
    }
    const body = req.body;

    user.userName = body.userName ? body.userName : user.userName;
    user.userAge = body.userAge ? body.userAge : user.userAge;

    userInfo.users[userId - 1] = user;
    if (!(await serveDb(userInfo))) {
      res.status(201).json({
        msg: "修改成功",
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(3000, () => {
  console.log("run http://127.0.0.1:3000");
});
