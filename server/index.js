import express from 'express';
import cors from 'cors';
import connectMongoDB from './middleware/mongoose.js';
import 'dotenv/config';


import { GetCountryData } from './router/getCountryData.js';
import { GetAllCountryName } from './router/getAllCountryName.js';


const PORT = process.env.PORT || 4000
const app = express()
app.use(cors())

connectMongoDB()

app.use("/api", GetCountryData)
app.use("/api", GetAllCountryName)

app.listen(PORT, () => {

    console.log(`Server is live on ${PORT}`)

})