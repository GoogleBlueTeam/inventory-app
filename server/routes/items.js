const express = require("express");
const router = express.Router();
const { Item } = require("../models");
const { items } = require("../seedData");

// GET All Items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET one item
router.get("/:itemId", async (req, res, next) => {
  try {
    const items = await Item.findByPk(req.params.itemId);
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// ADD /item
router.post("/", async (req,res,) => {
  const itemToAdd = await Item.create(req.body)
  res.json(await Item.findAll());
})

module.exports = router;

