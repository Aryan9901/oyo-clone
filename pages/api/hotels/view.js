import connectDB from "@/database";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
	connectDB();
	if (req.method === "GET") {
		const hotels = await Hotel.find({ location: req.query.city });
		if (hotels.length > 0) {
			return res.status(200).json({ msg: "Sucess", hotels });
		}
		const allHotels = await Hotel.find();
		res.status(404).json({ msg: "Not Found", allHotels });
	}
}
