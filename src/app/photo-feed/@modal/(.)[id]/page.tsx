// src/app/photo-feed/@modal/(..)photo-feed/[id]/page.tsx

import Image from "next/image";
import wondersImages, { WonderImage } from "../../wonders";
import Modal from "@/components/modal";

export default async function PhotoModal({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const photo: WonderImage | undefined = wondersImages.find((p) => p.id === id);

	if (!photo) {
		return <div className="text-center p-6">Photo not found.</div>;
	}

	return (
		<Modal>
			<Image
				alt={photo.name}
				src={photo.src}
				className="w-full object-cover aspect-square"
				width={500}
				height={500}
			/>
			<div className="bg-white p-4">
				<h2 className="text-xl font-semibold">{photo.name}</h2>
				<h3>{photo.photographer}</h3>
				<h3>{photo.location}</h3>
			</div>
		</Modal>
	);
}
