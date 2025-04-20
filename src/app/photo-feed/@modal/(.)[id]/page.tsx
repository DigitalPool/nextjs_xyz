// app/photo-feed/[id]/page.tsx

import wondersImages, { WonderImage } from "../../wonders";
import Image from "next/image";

export default async function PhotoModal({
	params,
}: {
	params: { id: string };
}) {
	const photo: WonderImage | undefined = wondersImages.find((p) => p.id === params.id);

	if (!photo) {
		return <div className="text-center">Photo not found</div>;
	}

	return (
		<div className="container mx-auto my-10">
			<div className="w-1/2 mx-auto">
				<h1 className="text-3xl font-bold text-center my-4">{photo.name}</h1>
				<Image
					alt={photo.name}
					src={photo.src}
					className="w-full object-cover aspect-square"
					width={500}
					height={500}
				/>
				<div className="bg-white py-4 text-center">
					<h3>Photo by {photo.photographer}</h3>
					<h3>{photo.location}</h3>
				</div>
			</div>
		</div>
	);
}