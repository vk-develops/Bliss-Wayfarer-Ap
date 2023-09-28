import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionOfDb = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`database connected ${connectionOfDb.connection.host}`);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

export default connectDB;
