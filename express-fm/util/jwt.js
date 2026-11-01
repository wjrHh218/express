const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const tojwt = promisify(jwt.sign);
const verify = promisify(jwt.verify);

module.exports.verifyToken = async (req, res, next) => {
  console.log(req.headers.authorization);
  let token = req.headers.authorization;
  
  next();
};

module.exports.createToken = async (userInfo) => {
  return await tojwt({ userInfo }, "aa970541-a461-4e43-8cfc-82cacc3be58c", {
    expiresIn: 60 * 60,
  });
};

// // 演示
// const token = jwt.sign({ foo: "hello" }, "55");
// console.log(token);
// const jwtstring =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJoZWxsbyIsImlhdCI6MTc5MzUwOTYzM30.yBxWwZ8Gkqxp8DFeuuDfwQPmeh58SK3FYeaBsZsPhM8";
// const jwts = jwt.verify(jwtstring, "55");
// console.log(jwts);
