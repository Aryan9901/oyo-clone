import connectDB from "@/database";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
	connectDB();
	if (req.method === "GET") {
		const facilities = await Hotel.find({}).distinct("facilities.name");
		res.status(200).json({ msg: "Acha lagta hai", facilities });
	}
}
