import multer from "multer";
import storage from "../utils/multer.js";


// create brand multer 
export const brandMulter = multer({ storage }).single("logo");


// create brand multer 
export const categoryMulter = multer({ storage }).single("photo");