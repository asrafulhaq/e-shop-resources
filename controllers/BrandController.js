import anyncHandler from "express-async-handler";
import prisma from "../config/client.js";



/**
 * GET ALL BRANDS 
 * @method GET 
 * @endpoint /api/v1/brand 
 */
export const getAllBrands = anyncHandler( async(req, res) => {

    // get all brands data form db
    const data = await prisma.Brand.findMany();

    // response 
    res.status(200).json( data );
});



/**
 * GET SINGLE BRANDS 
 * @method GET 
 * @endpoint /api/v1/brand/:id 
 */
export const getSingleBrand = anyncHandler( async(req, res) => {

    // get brand id 
    const { id } = req.params;

    // get all brands data form db
    const data = await prisma.Brand.findUnique({
        where : { id }
    });

    // response 
    res.status(200).json( data );
});




/**
 * GET SINGLE BRANDS 
 * @method GET 
 * @endpoint /api/v1/brand/:id 
 */
export const createBrand = anyncHandler( async(req, res) => {



    // get all brands data form db
    const data = await prisma.Brand.create({
        data : req.body
    });

    // response 
    res.status(200).json( data );
});




/**
 * GET SINGLE BRANDS 
 * @method GET 
 * @endpoint /api/v1/brand/:id 
 */
export const deleteBrand = anyncHandler( async(req, res) => {

    // get id 
    const { id } = req.params;

    // get all brands data form db
    const data = await prisma.brand.delete({
        where : { id }
    });

    // response 
    res.status(200).json( data );
});




/**
 * GET SINGLE BRANDS 
 * @method GET 
 * @endpoint /api/v1/brand/:id 
 */
export const updateBrand = anyncHandler( async(req, res) => {

    // get id 
    const { id } = req.params;

    // get all brands data form db
    const data = await prisma.brand.update({
        where : { id },
        data : req.body
    });

    // response 
    res.status(200).json( data );
});


