const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://djaiver9:k4lJfHkRVy813ki6@cluster101.dhgcnvj.mongodb.net/meals?retryWrites=true&w=majority&appName=Cluster101", {
    });
        console.log("Connected to database!");
    } catch (error) {
        console.error("Connection failed!", error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
