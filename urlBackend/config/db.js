// Connect the Database to the App
import mongoose, { connect } from "mongoose";
import dotenv from 'dotenv';

// Providing the location of the .env file
//dotenv.config({ path: "../.env"});
dotenv.config({ path: './.env' });

const connectDB = async () => {
    try {
        // Waiting for Mongoose to connect with the MongoDB URI
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    }
    catch (err) {
        // Catching and Reporting any errors that was discovered
        console.error(err.message);
        process.exit(1);
    }
};

// Export function to be used in index.js
export default connectDB;



