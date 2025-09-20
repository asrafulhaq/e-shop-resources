import express from "express";
import { createCategory, deleteCategory, getAllCategory, getSingleCategory, updateCategory } from "../controllers/CategoryController.js";
import { categoryMulter } from "../middlewares/MulterMiddleware.js";
import { createTag, deleteTag, getAllTag, getSingleTag, updateTag } from "../controllers/TagController.js";


// init router 
const router = express.Router();

// endpoints 
router.get("/", getAllTag);
router.get("/:id", getSingleTag);
router.delete("/:id", deleteTag);
router.patch("/:id", updateTag);
router.post("/", createTag);


// export default 
export default router;