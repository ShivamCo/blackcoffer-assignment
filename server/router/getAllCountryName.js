import express from "express"
import mongoose, { Mongoose } from "mongoose";

import datamodels from "../models/datamodels.js";


const router = express.Router();


router.get('/allCountryName', async (req, res) => {



    try {
        const countries = await datamodels.distinct('country');
        res.json(countries);
    } catch (error) {
        console.error('Error retrieving countries:', error.message);
        res.status(500).json({ error: 'Failed to retrieve countries' });
    }


})

export { router as GetAllCountryName }
