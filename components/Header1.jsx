"use client";

import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

function Header1() {
	let [auth, setAuth] = useState("");
	useEffect(() => {
		if (typeof window !== "undefined") {
			setAuth(Cookies.get("user"));
		}
	}, [auth, setAuth]);

	const handleLogout = async () => {
		setAuth("");
		Cookies.remove("user");
	};

	return (
		<div className="flex justify-between items-center border-b-2 border-gray-100 h-20 px-10">
			<Link href="/">
				<Image src="/logo.png" alt="logo image" width="200" height="200" className="w-28 h-28" />
			</Link>
			<div className="flex items-center h-full">
				<Block title="OYO for Business" para="Trusted by 5000 Corporates" image="/briefcase.png" />
				<Block title="List your property" para="Start earning in 30 mins" image="/building.png" />
				<Block title="0124-6201611" para="Call us to Book now" image="/phone.png" />
				<Block title="English" image="/globe.png" />
				<div className={`${auth ? "none" : "block"} flex items-center px-3 hover:bg-red-400 duration-500 cursor-pointer h-full`}>
					<Image src="/login.png" alt="icon" height="25" width="25" className="cursor-pointer mr-3" />
					<Link href={auth ? "" : "/login"}>
						<h3 onClick={auth ? handleLogout : null} className="font-bold cursor-pointer">
							{auth ? "Logout" : "Login / Signup"}
						</h3>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header1;
