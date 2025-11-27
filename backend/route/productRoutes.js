import express from "express";
import upload1 from "../middleware/upload1.js";
import { createProduct,  getProducts ,getProductById,updateProduct,
  deleteProduct} from "../controller/productController.js";


// Routes
const router = express.Router();
router.post("/add", upload1.fields([
  { name: "frontImg", maxCount: 1 },
  { name: "backImg", maxCount: 1 }
]), createProduct);
router.get("/", getProducts);             // Get all
router.get("/:id", getProductById);
router.put(
  "/:id",
  upload1.fields([
    { name: "frontImg", maxCount: 1 },
    { name: "backImg", maxCount: 1 }
  ]),
  updateProduct
);

router.delete("/:id", deleteProduct);// Delete by ID

export default router;
