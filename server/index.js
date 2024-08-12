import express from 'express';
import cors from 'cors';
import connectMongoDB from './middleware/mongoose.js';
import 'dotenv/config';


import { GetCountryData } from './router/getCountryData.js';


const PORT = process.env.PORT || 4000
const app = express()
app.use(cors())

connectMongoDB()

app.use("/api/countryData", GetCountryData)

app.listen(PORT, () => {

    console.log(`Server is live on ${PORT}`)

})