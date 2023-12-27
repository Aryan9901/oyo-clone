import connectDB from "@/database";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
	connectDB();
	if (req.method === "POST") {
		const newHotel = await new Hotel(req.body);
		const result = await newHotel.save();
		if (!result) {
			return res.status(404).json({ msg: "Hotels not added" });
		}
		return res.status(200).json({ msg: "Hotel Added Successfully", result });
	}
}
