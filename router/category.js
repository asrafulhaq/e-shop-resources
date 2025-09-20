import express from "express";
import { createCategory, deleteCategory, getAllCategory, getSingleCategory, updateCategory } from "../controllers/CategoryController.js";
import { categoryMulter } from "../middlewares/MulterMiddleware.js";


// init router 
const router = express.Router();

// endpoints 
router.get("/", getAllCategory);
router.get("/:id", getSingleCategory);
router.delete("/:id", deleteCategory);
router.patch("/:id", updateCategory);
router.post("/", categoryMulter, createCategory);


// export default 
export default router;