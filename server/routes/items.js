const express = require("express");
const router = express.Router();
const { Item } = require("../models");
const { items } = require("../seedData");

// GET /item
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});
// ADD /item

router.post("/", async (req,res,next) => {
  const itemToAdd = await Item.create(req.body)
  res.json(await Item.findAll());
})

module.exports = router;

