const express = require("express");
const router = express.Router();
const client = require("../index");

const run = async () => {
  try {
    const db = client.db("bookresell");
    const productCollection = db.collection("product");

    const slugToText = (slug) =>
      slug
        .toLowerCase()
        .split(/[-_.\s]/)
        .map((w) => `${w.charAt(0).toUpperCase()}${w.substr(1)}`)
        .join(" ");

    router.get("/", async (req, res) => {
      let query = {};
      if (req.query?.catagory) {
        query = { catagory: slugToText(req.query?.catagory) };
      } else {
        query = req.query;
      }

      console.log("Query", query);
      const result = await productCollection
        .find(query)
        .sort({ time: -1 })
        .toArray();
      res.send(result);
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
