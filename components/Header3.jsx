"use client";

const Header3 = () => {
	let curr = new Date();
	curr.setDate(curr.getDate() + 3);
	var date = curr.toISOString().substring(0, 10);

	return (
		<div className="bg-gradient-to-tr from-[#d11450] to-[#df293a]  w-full">
			<div className="p-5">
				<h2 className="text-3xl text-center font-bold text-white">Over 157,000 hotels and homes across 35 countries</h2>
				<form className="grid grid-cols-5 my-5 mx-44">
					<input
						name="city"
						type="text"
						placeholder="Search by City, Hotel or Neighbour..."
						className="h-14 font-bold placeholder:font-semibold outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2 rounded-l-md"
					/>
					<input
						name="date"
						type="date"
						placeholder="Search..."
						defaultValue={date}
						className=" h-14 font-bold placeholder:font-semibold outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
					/>
					<input
						name="roomtype"
						type="text"
						placeholder="1 Room 1 Guest"
						className=" h-14 font-bold placeholder:text-black outline-none px-3 text-lg col-span-1"
					/>
					<button
						type="submit"
						className="h-14 px-3 py-2 col-span-1 bg-[#2a984f] font-semibold text-lg text-white rounded-r-md hover:bg-green-500 duration-500 hover:text-xl"
					>
						Search
					</button>
				</form>
				<div className="flex mx-44">
					<button className="h-10 px-3 py-2 col-span-1 font-semibold text-md text-white duration-500">Continue your Search</button>
					<button className="h-10 px-3 py-1 col-span-1 font-semibold text-md text-white rounded-md duration-500 border-2 border-white hover:bg-[#00000056]">
						Inn corge Homestay - 2 Guests
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header3;
