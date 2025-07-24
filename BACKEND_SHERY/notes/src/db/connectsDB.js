const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = async () => {

    try{ 
         await mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("MongoDB connected successfully"))

 
    }
    catch (err) {
        console.error("MongoDB connection error:", err);
    }
}
module.exports = connectDB;