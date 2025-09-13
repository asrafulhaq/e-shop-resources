import express from "express";
import { createBrand, deleteBrand, getAllBrands, getSingleBrand, updateBrand } from "../controllers/BrandController.js";

// init router 
const router = express.Router();

// endpoints 
router.get("/", getAllBrands);
router.get("/:id", getSingleBrand);
router.post("/", createBrand);
router.delete("/:id", deleteBrand);
router.patch("/:id", updateBrand);


// export default 
export default router;