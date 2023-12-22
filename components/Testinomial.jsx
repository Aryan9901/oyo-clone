import Image from "next/image";

const Testinomial = () => {
	return (
		<div className="mt-10 w-full bg-[#f2f4f5] flex py-5">
			<Image src="/map.png" alt="map showing our branches" width="200" height="200" className="w-[45%]" />
			<div className="flex flex-col items-start w-[55%] py-12 px-9 gap-6">
				<h2 className="text-black text-[1.7rem] leading-10 font-mono font-bold">World&apos;s leading chain of hotels and homes</h2>
				<h3 className="text-xl font-[Gilroy]">More Destinations. More Ease. More Affordable.</h3>
				<div>
					<span className="text-5xl font-bold mr-8">
						35 <span className="text-sm text-[#000000a1]">Countries</span>
					</span>
					<span className="text-5xl font-bold border-l-2 border-gray-500 pl-7">
						157,000+ <span className="text-sm text-[#000000a1]">Hotels</span>
					</span>
				</div>
				<ul className="grid grid-cols-3 w-2/3 mt-8 gap-6">
					<p className="text-xl font-semibold text-[salmon]">India</p>
					<p className="text-xl font-semibold text-green-500">Malaysia</p>
					<p className="text-xl font-semibold text-red-500">Nepal</p>
					<p className="text-xl font-semibold text-blue-500">Bhutan</p>
					<p className="text-xl font-semibold text-purple-500">Sri Lanka</p>
					<p className="text-xl font-semibold">China</p>
				</ul>
			</div>
		</div>
	);
};

export default Testinomial;
