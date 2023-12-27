"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Filters({ price, setPrice, filterByPrice, setCheckedList, checkedList, filterByFacilities }) {
	const [list, setList] = useState([]);

	const router = useRouter();
	const { city } = router.query;

	const fetchFacilities = async () => {
		try {
			const { data } = await axios.get("/api/facilities");
			if (data?.facilities) {
				setList(data.facilities);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleCheckList = (e) => {
		let newList = [];
		if (e.target.checked) {
			newList.push(e.target.value);
			setCheckedList(newList);
			return;
		}
		newList = newList.filter((item) => {
			return item !== e.target.value;
		});
		setCheckedList(newList);
	};

	useEffect(() => {
		fetchFacilities();
	}, []);

	return (
		<div className="w-[25%] mt-2 h-[100%] overflow-y-scroll no-scrollbar border-r-2 border-gray-300 flex flex-col gap-2 items-start pl-5 pr-3">
			<h2 className="font-bold  text-[1.8rem] text-gray-800">Filters</h2>
			<p className="text-lg font-semibold text-gray-700">Popular locations in {city}, India</p>
			<label htmlFor="price" className="text-lg font-bold">
				Price: <span>&#8377; {price} & Below</span>
			</label>
			<input
				type="range"
				name="price"
				id="price"
				min={500}
				max={6000}
				onChange={(e) => setPrice(e.target.value)}
				className="w-2/3"
				defaultValue={price || 0}
			/>
			<button onClick={filterByPrice} className="w-32 py-2 rounded-md text-lg font-semibold bg-blue-400 hover:bg-blue-300 duration-500">
				Search
			</button>
			<div className="border-t-2 border-gray-400 w-full mt-3 py-3">
				<p className="font-bold text-lg">Filter by Facilities:</p>
				{list?.map((item) => {
					return (
						<div key={item} className="grid grid-cols-5 mt-2">
							<label htmlFor={item} className="font-medium col-span-3 select-none cursor-pointer">
								{item}
							</label>
							<input
								type="checkbox"
								name="free wifi"
								id={item}
								className="w-5 h-5 ml-3 cursor-pointer col-span-1"
								value={item}
								onChange={handleCheckList}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Filters;
