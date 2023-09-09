const express = require("express");
const router = express.Router();
const client = require("../index");

const run = async () => {
  try {
    const db = client.db("bookresell");
    const userCollection = db.collection("users");

    const isUserExist = async (email) => {
      const userFilter = { email };
      const result = await userCollection.findOne(userFilter);
      if (email === result?.email) {
        return true;
      }
      return false;
    };

    router.get("/", (req, res) => {
      res.send("All users");
    });

    router.post("/", async (req, res) => {
      const userDoc = req.body;
      // console.log(isUserExist(userDoc?.email));
      isUserExist(userDoc?.email)
        .then((user) => {
          // console.log("[User Exist]", user);
          if (!user) {
            const saveUserInfo = async () => {
              const result = await userCollection.insertOne(userDoc);
              return res.status(200).send(result);
            };
            saveUserInfo();
          } else {
            return res.send({ acknowledged: true });
          }
        })
        .catch((err) => console.log(err));
    });
  } finally {
    // Finally
  }
};
run().catch(console.dir);

module.exports = router;
