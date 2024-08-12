import mongoose from "mongoose";
import 'dotenv/config'

const MONGO_DB_URL  = process.env.MONGO_DB_URL 



const connectMongoDB = async() => {
    
    try {
       await mongoose.connect(MONGO_DB_URL)
       console.log('Connected To Database')
    }
    catch (error) {
        console.log(error)
    }
}


export default connectMongoDB
