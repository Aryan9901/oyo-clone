"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [login, setLogin] = useState(false);

	const router = useRouter();

	const handleSignUp = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("/api/user/register", {
				name,
				email,
				password,
			});
			if (res?.data) {
				Cookies.set("user", res.data.token, { expires: 7 });
				alert(res.data.msg);
				router.back();
			}
		} catch (error) {
			alert(error.response.data.msg);
		}
	};
	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("/api/user/login", {
				email,
				password,
			});
			if (res?.data) {
				Cookies.set("user", res.data.token, { expires: 7 });
				alert(res.data.msg);
				router.back();
			}
		} catch (error) {
			alert(error.response.data.msg);
		}
	};

	return (
		<>
			<Head>
				<title>OYO : India&apos;s Best Online Hotel Booking Site For Sanitized Stay.</title>
			</Head>
			<div className="h-screen w-full bg-red-400 bg-[url('/background.avif')] bg-cover bg-top">
				<div className="bg-[#00000070] h-full w-full relative">
					<nav className="w-full py-8 pl-28 flex items-center absolute top-0 left-0">
						<Image src="/logo2.png" alt="logo" width="200" height="200" className="w-24 mr-7" />
						<h2 className="text-white font-bold text-lg">Hotels and homes across 800 cities, 24+ countries</h2>
					</nav>
					<main className="flex items-center justify-center h-full gap-20 pt-4 pb-2 px-10 w-full">
						<section className="w-[39%]">
							<h1 className="text-6xl font-semibold text-balance text-white mb-7">There’s a smarter way to OYO around</h1>
							<p className="text-balance text-white text-lg font-semibold leading-6">
								Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel
								partners.
							</p>
						</section>
						<form className="w-[35%] bg-white rounded-sm" onSubmit={login ? handleLogin : handleSignUp}>
							<div className="bg-[#DA1B42] pl-5 flex items-center gap-3">
								<i className="ri-discount-percent-line text-white text-2xl"></i>
								<h3 className="text-white text-lg font-semibold">Sign up & Get ₹500 OYO Money</h3>
							</div>
							<div className="w-full pl-6 pr-6 py-4">
								<h2 className="font-bold text-3xl mb-3">{login ? "Login" : "Sign Up"}</h2>
								<p className="text-base leading-4 font-semibold">Please enter your details to continue</p>
								{!login ? (
									<div className="flex items-center justify-between gap-14 mt-3">
										<label htmlFor="name" className="text-lg font-semibold font-mono">
											Name
										</label>
										<input
											type="text"
											required
											id="name"
											name="name"
											value={name}
											onChange={(e) => setName(e.target.value)}
											placeholder="Enter Your Name:"
											className="w-full hover:border-black focus:border-black mt-1 px-4 py-2 text-lg font-bold placeholder:font-semibold invalid:border-b-2 invalid:border-b-red-500  outline-none rounded-md border border-gray-300 "
										/>
									</div>
								) : (
									""
								)}
								<div className="flex items-center justify-between gap-11 mt-3">
									<label htmlFor="email" className="text-lg font-semibold font-mono">
										Email
									</label>
									<input
										id="email"
										name="email"
										type="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="username@gmail.com"
										className="w-full hover:border-black focus:border-black mt-1 px-4 py-2 text-lg font-bold placeholder:font-semibold invalid:border-b-2 invalid:border-b-red-500  outline-none rounded-md border border-gray-300 "
									/>
								</div>
								<div className="flex items-center justify-between gap-4 mt-3">
									<label htmlFor="password" className="text-lg font-semibold font-mono">
										Password
									</label>
									<input
										id="password"
										name="password"
										type="password"
										required
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										placeholder="Password must be 6 character long..."
										className="w-full hover:border-black focus:border-black mt-1 px-4 py-2 text-lg font-bold placeholder:font-semibold invalid:border-b-2 invalid:border-b-red-500  outline-none rounded-md border border-gray-300 "
									/>
								</div>
								<button type="submit" className="mt-5 px-12 py-2 rounded-md bg-[#c9c9c9] cursor-pointer">
									{login ? "Log In" : "Sign Up"}
								</button>
								<p className="mt-3 text-lg">
									<span>{login ? "Don't" : "Already"} have an account ?</span>
									<span onClick={() => setLogin((curr) => !curr)} className="ml-2 text-red-500 font-bold cursor-pointer">
										{login ? "Sign Up" : "Login Now"}
									</span>
								</p>
							</div>
							<div className="mt-1 w-full">
								<div className="flex items-center justify-start">
									<div className="w-[20%] h-[.1rem] bg-black"></div>
									<p className="text-sm font-semibold">or Sign In as</p>
									<div className="w-[60%] h-[.1rem] bg-black"></div>
								</div>
								<div className="mt-2 px-8 flex items-center justify-start mb-4 gap-5">
									<p className="text-lg font-bold border-r-2 pr-5 border-gray-400 cursor-pointer">Travel Agent</p>
									<p className=" cursor-pointer text-lg font-bold">Corporate</p>
								</div>
							</div>
						</form>
					</main>
				</div>
			</div>
		</>
	);
};

export default Login;
