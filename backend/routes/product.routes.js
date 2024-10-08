import express from "express";
import {
  deleteProduct,
  getProducts,
  saveProduct,
  updatedProduct,
} from "../controllers/product.controller.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", getProducts);
router.post("/", saveProduct);

router.delete("/:id", deleteProduct);
router.put("/:id", updatedProduct);

export default router;
