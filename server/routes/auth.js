import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();
router.get("/", (req, res) => {
  res.send("i am ok");
});
router.post("/login", login);

export default router;
