import Image from "next/image";
import photoImages, { PhotoImage } from "../photos";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: PhotoImage = photoImages.find((p) => p.id === id)!;
  return (
    <div className="non-Modal-container mx-auto my-10">
      <div className="mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square "
        />

        <div className="bg-white p-4">
          <h3 className="text-gray-900">{photo.desc}</h3>
        </div>
      </div>
    </div>
  );
}