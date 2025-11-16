import express from "express";
import { addProducts } from "../controllers/productController.js";

const router = express.Router();

router.post("/add", addProducts);

export default router;
