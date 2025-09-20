import anyncHandler from "express-async-handler";
import prisma from "../config/client.js";



/**
 * GET ALL BRANDS 
 * @method GET 
 * @endpoint /api/v1/brand 
 */
export const getAllTag = anyncHandler( async(req, res) => {

    // get all brands data form db
    const data = await prisma.Tag.findMany();

    // response 
    res.status(200).json( data );
});



/**
 * GET SINGLE BRANDS 
 * @method GET 
 * @endpoint /api/v1/brand/:id 
 */
export const getSingleTag = anyncHandler( async(req, res) => {

    // get brand id 
    const { id } = req.params;

    // get all brands data form db
    const data = await prisma.Tag.findUnique({
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
export const createTag = anyncHandler( async(req, res) => {

    // get all brands data form db
    const data = await prisma.Tag.create({
        data : { 
            name : req.body.name,
            slug : req.body.slug, 
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
export const deleteTag = anyncHandler( async(req, res) => {

    // get id 
    const { id } = req.params;

    // get all brands data form db
    const data = await prisma.Tag.delete({
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
export const updateTag = anyncHandler( async(req, res) => {

    // get id 
    const { id } = req.params;

    // get all brands data form db
    const data = await prisma.Tag.update({
        where : { id },
        data : req.body
    });

    // response 
    res.status(200).json( data );
});


