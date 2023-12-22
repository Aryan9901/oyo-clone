import Image from "next/image";

const Footer = () => {
	return (
		<div className="flex w-full bg-[#6d787d] flex-col px-20">
			<div className="flex items-center justify-between gap-16 py-1  border-b border-[#fff]">
				<Image src="/logo.png" alt="logo" width="200" height="200" className="w-28 h-28" />
				<h2 className="w-fit text-2xl text-white font-bold ">World&apos;s leading chain of hotels and homes</h2>
				<h2 className="w-fit text-2xl  text-white font-bold">Join our network and grow your business!</h2>
				<button className="bg-white px-4 py-3 rounded-md text-sm font-bold w-56">List Your Property</button>
			</div>
			<div className="flex justify-between py-4 border-b border-[#ffffffa2] items-center">
				<div className="flex flex-col h-full items-start border-r border-white pr-6">
					<h3 className="text-center mb-2 font-semibold text-lg text-white">Download OYO app for exciting offers.</h3>
					<div className="flex  items-center">
						<Image src="/playstore.png" alt="download button for android" width="200" height="200" className="w-44" />
						<Image src="/appstore.svg" alt="download button for ios" width="200" height="200" className="w-36" />
					</div>
				</div>
				<div className="grid grid-cols-2 py-2 px-4 gap-1 place-items-start pr-6 pl-6 border-r border-white">
					<p className="text-lg  text-white">About us</p>
					<p className="text-lg  text-white">Official OYO Blog</p>
					<p className="text-lg  text-white">Team / Carrers</p>
					<p className="text-lg  text-white">Investor Relations</p>
					<p className="text-lg  text-white">Blogs</p>
					<p className="text-lg  text-white">OYO Circle</p>
					<p className="text-lg  text-white">Support</p>
					<p className="text-lg  text-white">OYO Frames</p>
				</div>
				<div className="grid grid-cols-2 py-2 px-4 gap-1 place-items-start pl-6">
					<p className="text-lg  text-white">Terms and conditions</p>
					<p className="text-lg  text-white">Cyber Security</p>
					<p className="text-lg  text-white">Guest Policies</p>
					<p className="text-lg  text-white">Cyber Awareness</p>
					<p className="text-lg  text-white">Privacy Policy</p>
					<p className="text-lg  text-white">Responsible Disclosure</p>
					<p className="text-lg  text-white">Trust And Safety</p>
					<p className="text-lg  text-white">Advertise your Homes</p>
				</div>
			</div>
			<div className="flex items-center justify-between py-6">
				<div className="flex items-center justify-between gap-7">
					<i className="cursor-pointer hover:text-[salmon] hover:scale-105 duration-500 ri-facebook-line text-3xl font-extralight text-white"></i>
					<i className="cursor-pointer hover:text-[salmon] hover:scale-105 duration-500 ri-instagram-line text-3xl font-extralight text-white"></i>
					<i className="cursor-pointer hover:text-[salmon] hover:scale-105 duration-500 ri-twitter-x-line text-3xl font-extralight text-white"></i>
					<i className="cursor-pointer hover:text-[salmon] hover:scale-105 duration-500 ri-youtube-line text-3xl font-extralight text-white"></i>
					<i className="cursor-pointer hover:text-[salmon] hover:scale-105 duration-500 ri-pinterest-line text-3xl font-extralight text-white"></i>
				</div>
				<h4 className="text-white text-lg">2013-2022 © Oravel Stays Limited</h4>
			</div>
		</div>
	);
};

export default Footer;
