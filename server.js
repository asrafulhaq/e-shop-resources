import express from "express";
import dotenv from "dotenv";
import colors from "colors";


// env vars 
dotenv.config();
const PORT = process.env.PORT || 6060;

// init express 
const app = express();

// support 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// listen 
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

