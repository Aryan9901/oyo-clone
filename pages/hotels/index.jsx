import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import axios from "axios";
import Head from "next/head";
import { useState, useEffect } from "react";

const Hotels = ({ hotels }) => {
	const [list, setList] = useState([]);
	const [checkedList, setCheckedList] = useState([]);
	const [price, setPrice] = useState(500);

	const filterByPrice = async () => {
		const { data } = await axios.get(`/api/facilities/range?price=${price}`);
		if (data?.hotels) {
			setList(data.hotels);
		}
	};
	const filterByFacilities = async () => {
		const { data } = await axios.get(`/api/facilities/search?val=${checkedList}`);
		if (data?.hotels) {
			setList(data.hotels);
		}
	};

	useEffect(() => {
		filterByFacilities();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [checkedList]);

	return (
		<div className="overflow-y-scroll h-screen no-scrollbar">
			<Head>
				<title>Hotels in Starting @ ₹356 - Upto 81% OFF on 85 Hotels</title>
			</Head>
			<Header1 />
			<div className="flex w-full h-[85%] overflow-hidden no-scrollbar pt-3">
				<Filters price={price} setPrice={setPrice} filterByPrice={filterByPrice} checkedList={checkedList} setCheckedList={setCheckedList} />
				<div className="w-[75%] h-full overflow-y-scroll no-scrollbar last:mb-5">
					{list.length > 0
						? list.map((item) => {
								return <Hotel hotel={item} key={item._id} />;
						  })
						: hotels
						? hotels.map((hotel) => {
								return <Hotel hotel={hotel} key={hotel._id} />;
						  })
						: "No Hotel found"}
				</div>
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export async function getServerSideProps(ctx) {
	console.log(ctx.query.city);
	const res = await fetch(`${process.env.BASE_URL}/api/hotels/view?city=${ctx.query.city}`);
	const data = await res.json();

	return {
		props: {
			hotels: data.hotels ? data.hotels : data.allHotels,
		},
	};
}

export default Hotels;
