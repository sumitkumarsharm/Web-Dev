const mongoose = require('mongoose');
const connectDB = async () => {
    try{
         await mongoose.connect("mongodb+srv://admin:CXmjE3bgJjYDS8qb@cluster0.gcqtlxv.mongodb.net/notes")
        .then(() => console.log("MongoDB connected successfully"))

    }
    catch (err) {
        console.error("MongoDB connection error:", err);
    }
}
module.exports = connectDB;