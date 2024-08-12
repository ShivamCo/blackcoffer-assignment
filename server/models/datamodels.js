import mongoose from "mongoose";


const datamodels = mongoose.model('datamodels', 
    
        {
            "end_year": String,
            "intensity": Number,
            "sector": String,
            "topic": String,
            "insight": String,
            "url": String,
            "region": String,
            "start_year": String,
            "impact":String,
            "added": String,
            "published": String,
            "country": String,
            "relevance": Number,
            "pestle": String,
            "source": String,
            "title": String,
            "likelihood": Number
        },
    

)


export default datamodels