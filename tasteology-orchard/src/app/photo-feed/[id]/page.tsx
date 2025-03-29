import Image from "next/image";
import photoImages, { PhotoImage } from "../photos";
import Link from "next/link";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: PhotoImage = photoImages.find((p) => p.id === id)!;
  return (
    <Link href="/">
      <div className="mx-auto my-10">
        <div className="w-1/2 mx-auto">
          <div className="Headline">
            <h2 className="text-center text-3xl font-bold my-4">{photo.name}</h2>
          </div>
          <Image
            alt={photo.name}
            src={photo.src}
            className="w-full object-cover aspect-square "
          />

          <div className="bg-white p-4">
            <h3 className="text-black">{photo.desc}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}