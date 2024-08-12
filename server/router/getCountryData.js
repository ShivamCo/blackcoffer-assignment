import express from "express"
import mongoose from "mongoose";

import datamodels from "../models/datamodels.js";


const router = express.Router();


router.get('/', async (req, res) => {

    
    res.send("Hello")
    

})

export { router as GetCountryData }
