// db.js
import mongoose from "mongoose";

const connectDB = async () => {
    const maxRetries = 5; // Maximum number of connection retries
    let attempt = 0;

    while (attempt < maxRetries) {
        try {
            await mongoose.connect(process.env.MONGO_URI, {
                serverSelectionTimeoutMS: 20000, // Increase timeout to 20 seconds
                useNewUrlParser: true, // Use the new URL string parser
                useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
            });
            console.log('MongoDB connected successfully!');
            return; // Exit the function once connected
        } catch (error) {
            attempt++;
            console.error(`MongoDB connection error (attempt ${attempt} of ${maxRetries}):`, error.message);
            if (attempt < maxRetries) {
                console.log(`Retrying connection in 5 seconds...`);
                await new Promise(resolve => setTimeout(resolve, 5000)); // Wait before retrying
            } else {
                console.error('Max connection attempts reached. Exiting...');
                process.exit(1); // Exit process with failure
            }
        }
    }
};

export default connectDB;
