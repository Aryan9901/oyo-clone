import Image from "next/image";
import Link from "next/link";

function Hotel({ hotel }) {
	return (
		<div className="border-b-2 border-gray-400  w-full p-2 pt-5">
			<div className="flex items-start gap-3 w-full">
				<Image src={hotel.banner} alt="hotel images" width="200" height="200" className="bg-gray-400  mr-2 row-span-2 w-[50%]" />
				<div className="flex w-[50%] flex-wrap gap-2">
					{hotel.gallery?.map((pic) => {
						return (
							<Image
								key={pic._id}
								src={pic}
								alt="hotel images"
								width="200"
								height="200"
								className="bg-gray-400 w-[49%] cursor-pointer hover:scale-105 duration:700"
							/>
						);
					})}
				</div>
			</div>
			<div className="mt-4">
				<h2 className="font-bold text-3xl line-clamp-1">{hotel.name}</h2>
				<h4 className="my-2 font-semibold text-xl">
					Location : <span className="text-purple-500 font-bold">{hotel.location}</span>
				</h4>
				<p className="text-lg text-justify my-3 leading-6">{hotel.description}</p>
				<div className="flex items-center gap-4 my-3">
					<p className="py-1 text-white px-3 bg-green-500 rounded-md text-lg font-semibold">
						3.7
						<i className="ri-star-fill text-xl ml-3"></i>
					</p>
					<p className="text-gray-600">(59 Ratings)</p>
					<p className="text-green-500 font-semibold text-lg">Good</p>
				</div>
				<p className="text-lg font-[Gilroy] my-2">
					<span className="font-bold">Amenities : </span>
					{hotel.facilities?.map((feat) => {
						return (
							<span className="mr-5" key={feat._id}>
								{feat.name}
							</span>
						);
					})}
				</p>
				<div className="flex items-center my-5">
					<button className="w-48 py-4 rounded-md text-lg font-semibold bg-blue-400 hover:bg-blue-300 duration-500">
						Price : {hotel.price}
					</button>
					<Link
						href={`/hotels/${hotel._id}`}
						className="text-lg font-bold text-center  text-red-600 ml-6  px-6 py-4 rounded-md bg-gray-50 hover:bg-gray-200 duration-500"
					>
						See Details
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hotel;
