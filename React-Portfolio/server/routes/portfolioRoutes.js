import express from "express";
import Portfolio from "../models/Portfolio.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Portfolio.findOne();
  res.json(data);
});

export default router;
