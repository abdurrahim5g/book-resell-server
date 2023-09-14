const express = require("express");
const router = express.Router();
const client = require("../index");

const run = async () => {
  try {
    const db = client.db("bookresell");
    const productCollection = db.collection("product");

    router.get("/", async (req, res) => {
      res.send("ALl products");
    });

    router.post("/", async (req, res) => {
      const productDoc = req.body;
      //   console.log(productDoc);
      const result = await productCollection.insertOne(productDoc);
      //   console.log(result);
      res.send(result);
    });
  } finally {
    // Finally code here
  }
};
run().catch(console.dir);

module.exports = router;
