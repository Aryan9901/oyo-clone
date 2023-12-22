import Image from "next/image";

const Header4 = () => {
	return (
		<div className="flex items-center justify-between w-full py-3 px-6 border-[#525151ba] border">
			<div className="flex items-center rounded-md">
				<div className="rounded-full  bg-[#FFEFD6] mr-12">
					<Image src="/fire.png" alt="fire icon" width="40" height="40" className="w-20 h-20 rounded-full" />
				</div>
				<div>
					<p className="font-bold text-lg">Get access to exclusive deals</p>
					<p className="font-normal text-sm">Only the best deals reach your inbox</p>
				</div>
			</div>
			<form className="flex mr-12">
				<input
					type="email"
					placeholder="e.g., abcd@gmail.com"
					name="subscription mail"
					className="px-4 py-2 font-bold placeholder:font-semibold outline-none border-2 rounded-md h-12 border-gray-300 mr-5"
				/>
				<button type="submit" className="w-24 h-12 text-xl rounded-md text-white cursor-pointer bg-red-500">
					Notify
				</button>
			</form>
		</div>
	);
};

export default Header4;
