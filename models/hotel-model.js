import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		banner: {
			type: String,
			required: true,
		},
		gallery: [
			{
				type: String,
			},
		],
		location: {
			type: String,
			required: true,
		},
		policies: [
			{
				type: String,
				required: true,
			},
		],
		price: {
			type: Number,
		},
		facilities: [
			{
				img: String,
				name: String,
			},
		],
	},
	{ timestamps: true }
);

export default mongoose.models?.hotel || mongoose.model("hotel", hotelSchema);
