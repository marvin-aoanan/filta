import Image from "next/image";
import photosImages, { PhotoImage } from "../../photos";
import Modal from "@/app/components/modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: PhotoImage = photosImages.find((p) => p.id === id)!;
  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white text-gray-900 p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3 className="text-gray-900">{photo.desc}</h3>
      </div>
    </Modal>
  );
}