const express = require("express");
const router = express.Router();
const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { OrdersModel } = require("../model/OrdersModel");

// Get all holdings
router.get("/allHoldings", async (req, res, next) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    next(err);
  }
});

// Get all positions
router.get("/allPositions", async (req, res, next) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    next(err);
  }
});

// Create a new order
router.post("/newOrder", async (req, res, next) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.send("Order saved!");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
