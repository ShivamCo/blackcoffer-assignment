import express from "express"
import mongoose, { Mongoose } from "mongoose";

import datamodels from "../models/datamodels.js";


const router = express.Router();


router.get('/countryData/:countryName', async (req, res) => {

    const countryName = req.params.countryName
    console.log(countryName)
    

    try {
        const response = await datamodels.find({ country: countryName })
    
        res.send(response)

    }catch (error) {
            console.error('Error retrieving country data:', error.message);
    
            
            res.status(500).json({
                error: 'An error occurred while retrieving country data',
                message: error.message
            });
        }



})

export { router as GetCountryData }
