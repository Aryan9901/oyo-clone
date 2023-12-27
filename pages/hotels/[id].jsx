"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Head from "next/head";
import Image from "next/image";
import Cookies from "js-cookie";
import Link from "next/link";

function SingleHotel({ hotel }) {
	const [auth, setAuth] = useState("false");

	useEffect(() => {
		const key = Cookies.get("user");
		setAuth(key);
	}, [auth, setAuth]);

	return (
		<>
			<Head>
				<title>{hotel?.name}</title>
			</Head>
			<Header1 />
			<div className="mx-auto w-9/12 mt-5">
				<Image src={hotel?.banner} alt="hotel 1" width="200" height="200" className="w-full mx-auto mb-5 h-large-box" />
				<div className="w-full mx-auto">
					<h2 className="text-3xl font-bold">{hotel.name}</h2>
					<h4 className="text-xl font-semibold mt-2">
						Location: <span className="ml-2 text-blue-400">{hotel?.location}</span>
					</h4>
					<p className="text-xl my-3 text-justify">{hotel?.description}</p>
					<button className="w-48 my-3 py-4 rounded-md text-lg font-semibold bg-blue-400 hover:bg-blue-300 duration-500">
						Price : {hotel?.price}
					</button>
					<p className="font-bold text-2xl">Amenities</p>
					<div className="flex flex-wrap gap-5 w-9/12 my-6">
						{hotel.facilities?.map((feat) => {
							return (
								<p
									key={feat._id}
									className="mr-8 w-fit font-normal text-lg text-gray-500 flex items-center justify-center gap-5 font-mono"
								>
									<Image src={feat.img} alt={feat.name} width={20} height={20} className="h-7 w-7 mr-5" />
									<span>{feat.name}</span>
								</p>
							);
						})}
					</div>
					<p className="font-bold text-2xl">Hotel Policies</p>
					<ul className="my-2 ml-9 list-disc marker:text-gray-300">
						{hotel.policies.map((policy) => {
							return (
								<li className="text-lg" key={policy}>
									{policy}
								</li>
							);
						})}
					</ul>
					<div className="flex items-center my-5">
						{auth ? (
							<>
								<Link href={`/payment/${hotel._id}`}>
									<button
										href="/hotels/2"
										className="text-lg font-bold text-center  px-9 py-4 rounded-md bg-green-700 text-white  hover:bg-green-400 hover:text-gray-600 duration-500"
									>
										Continue to Book
									</button>
								</Link>
							</>
						) : (
							<h4 className="font-semibold text-xl">
								Please
								<Link href="/login" className="text-purple-500 font-bold cursor-pointer">
									Login
								</Link>
								to add Bookings
							</h4>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export async function getServerSideProps(ctx) {
	const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
	const data = await res.json();

	return {
		props: {
			hotel: data.hotel,
		},
	};
}

export default SingleHotel;
