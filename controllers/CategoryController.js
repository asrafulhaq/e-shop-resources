import anyncHandler from "express-async-handler";
import prisma from "../config/client.js";



/**
 * GET ALL BRANDS 
 * @method GET 
 * @endpoint /api/v1/brand 
 */
export const getAllCategory = anyncHandler( async(req, res) => {

    // get all brands data form db
    const data = await prisma.Category.findMany();

    // response 
    res.status(200).json( data );
});



/**
 * GET SINGLE BRANDS 
 * @method GET 
 * @endpoint /api/v1/brand/:id 
 */
export const getSingleCategory = anyncHandler( async(req, res) => {

    // get brand id 
    const { id } = req.params;

    // get all brands data form db
    const data = await prisma.Category.findUnique({
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
export const createCategory = anyncHandler( async(req, res) => {

    // get all brands data form db
    const data = await prisma.Category.create({
        data : { 
            name : req.body.name,
            slug : req.body.slug, 
            photo : req.file.path
        }
    });

    // response 
    res.status(200).json( data );
});




/**
 * GET SINGLE BRANDS 
 * @method GET 
 * @endpoint /api/v1/brand/:id 
 */
export const deleteCategory = anyncHandler( async(req, res) => {

    // get id 
    const { id } = req.params;

    // get all brands data form db
    const data = await prisma.Category.delete({
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
export const updateCategory = anyncHandler( async(req, res) => {

    // get id 
    const { id } = req.params;

    // get all brands data form db
    const data = await prisma.Category.update({
        where : { id },
        data : req.body
    });

    // response 
    res.status(200).json( data );
});


