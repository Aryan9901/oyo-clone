import Header2 from "@/components/Header2";
import Header1 from "../components/Header1";
import Header3 from "@/components/Header3";
import Image from "next/image";
import Head from "next/head";
import Header4 from "@/components/Header4";
import Testinomial from "@/components/Testinomial";
import Footer from "@/components/Footer";

function Home() {
	return (
		<>
			<Head>
				<title className="text-3xl font-bold text-red-500">OYO : India&apos;s Best Online Hotel Booking Site For Sanitized Stay.</title>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.0.1/remixicon.min.css"
					integrity="sha512-dTsohxprpcruDm4sjU92K0/Gf1nTKVVskNHLOGMqxmokBSkfOAyCzYSB6+5Z9UlDafFRpy5xLhvpkOImeFbX6A=="
					crossorigin="anonymous"
					referrerpolicy="no-referrer"
				/>
				<link rel="icon" href="/icon.ico" />
			</Head>
			<Header1 />
			<Header2 />
			<Header3 />
			<div className="mx-24">
				<div className="my-10">
					<Image src="/banner.avif" alt="banner image" width="200" height="200" className="h-48 rounded-sm w-full" />
				</div>
				<div className="my-10 mt-20">
					<Image src="/banner2.avif" alt="banner image" width="200" height="200" className="h-28 rounded-sm w-full" />
				</div>
				<Header4 />
			</div>
			<Testinomial />
			<Footer />
		</>
	);
}

export default Home;
