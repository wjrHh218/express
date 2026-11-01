const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { uuid } = require("../config/config.default");
const tojwt = promisify(jwt.sign);
const verify = promisify(jwt.verify);

module.exports.verifyToken = async (req, res, next) => {
  console.log(req.headers.authorization);
  let token = req.headers.authorization;
  token = token ? token.split("Bearer ")[1] : null;

  if (!token) {
    res.status(402).json({ error: "请传入token" });
  }
  try {
    let userinfo = await verify(token, uuid);
    next();
  } catch (error) {
    res.status(402).json({ error: "无效token" });
  }
};

module.exports.createToken = async (userInfo) => {
  return await tojwt({ userInfo }, uuid, {
    expiresIn: 60 * 60 * 24,
  });
};

// // 演示
// const token = jwt.sign({ foo: "hello" }, "55");
// console.log(token);
// const jwtstring =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJoZWxsbyIsImlhdCI6MTc5MzUwOTYzM30.yBxWwZ8Gkqxp8DFeuuDfwQPmeh58SK3FYeaBsZsPhM8";
// const jwts = jwt.verify(jwtstring, "55");
// console.log(jwts);
