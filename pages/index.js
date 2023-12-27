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
