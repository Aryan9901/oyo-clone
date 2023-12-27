import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

const connectDB = async () => {
	await mongoose.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	console.log("Database connected...");
};

export default connectDB;
