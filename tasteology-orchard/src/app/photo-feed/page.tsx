import Link from "next/link";
import BottomComponent from "../components/bottom";
import TopComponent from "../components/top";
import photos from "./photos";
import Image from "next/image";

export default function Home() {
  return (
    <div className="Tasteology w-max">
      <TopComponent />
      <BottomComponent />
    </div>
  );
}
