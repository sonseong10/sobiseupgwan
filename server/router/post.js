import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Test");
  res.status(200).json({ status: 200, message: "OK", data: [] });
});

export default router;
