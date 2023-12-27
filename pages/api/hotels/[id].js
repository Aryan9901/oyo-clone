import connectDB from "@/database";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
	if (req.method === "GET") {
		connectDB();
		if (req.query.id) {
			const hotel = await Hotel.findById(req.query.id);
			if (hotel == false) {
				return res.status(404).json({ msg: "Not Found" });
			}
			res.status(200).json({ msg: "success", hotel });
		}
	}
}
