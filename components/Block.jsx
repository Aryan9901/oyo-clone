import Image from "next/image";

const Block = ({ title, para, image }) => {
	return (
		<div className="w-59 px-3 border-r border-gray-100 h-full flex hover:bg-gray-200 duration-700 cursor-pointer items-center">
			<Image src={image} alt="icon" height="25" width="25" className="cursor-pointer mr-3" />
			<div>
				<h3 className="font-bold">{title}</h3>
				<p className="text-gray-400 text-xs line-clamp-1">{para}</p>
			</div>
		</div>
	);
};

export default Block;
