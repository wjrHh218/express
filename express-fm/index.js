const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

const clientFun = async function (c) {
  await client.connect();
  const db = client.db("mytest");
  return db.collection(c);
};
const main = async () => {
  const cc = await clientFun("cc");
  //const d = await cc.find(); // 查找
  //   const d = await cc.insertOne({ username: "monica", age: 60 }); // 新增单条
  //   const d = await cc.insertMany([
  //     { username: "monica", age: 12 },
  //     { username: "卡卡", age: 6 },
  //     { username: "安迪", age: 12 },
  //     { username: "朱丽叶", age: 20 },
  //   ]);

  //   const d = await cc.findOne({ age: { $gt: 15 } });
  //   console.log(await d.toArray());
  //   const d = await cc.find({ age: { $gt: 15 } });
  //   console.log(d);

  //   const d = await cc.updateOne(
  //     { age: { $gt: 15 } },
  //     { $set: { username: "lisi" } },
  //   );
  //   const d = await cc.updateMany(
  //     { age: { $lt: 15 } },
  //     { $set: { username: "lisi" } },
  //   );

  //   const d = await cc.deleteOne({ age: { $gt: 50 } });
  const d = await cc.deleteMany({ age: { $gt: 10 } });
  console.log(d);
};

main().finally(() => {
  client.close();
});
