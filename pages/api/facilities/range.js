import connectDB from "@/database";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
	if (req.method === "GET") {
		connectDB();
		const key = req.query.val;
		const hotels = await Hotel.find({ price: { $lte: req.query.price } });
		res.status(200).json({ msg: "success", hotels });
	}
}
