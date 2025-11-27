import express from "express";
import upload from "../middleware/upload.js";
import {
  createJewelry,
  getJewelries,
  getJewelryById,
  deleteJewelry,
  updateJewelry,
} from "../controller/jewelryController.js";

const router = express.Router();

// Create
router.post("/add", upload.single("image"), createJewelry); // 👈 upload middleware
// router.post("/", createJewelry);
// router.post("/bulk", createJewelryBulk);

// Read
router.get("/", getJewelries);
router.get("/:id", getJewelryById);

// Update
router.put("/:id", upload.single("image"), updateJewelry);

// Delete
router.delete("/:id", deleteJewelry);

export default router;
