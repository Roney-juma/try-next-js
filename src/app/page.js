import Image from "next/image";
import ComingSoon from "./components/ComingSoon";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen max-h-screen relative">
      <Image alt="image detail" src="/detail-tr.webp" width={400} height={400} className="absolute top-0 right-0"/>
      <Image alt="image detail" src="/detail-tr.webp" width={400} height={400} className="absolute bottom-0 left-0 rotate-180"/>
      <NavBar />
      <ComingSoon />
    </div>
  )
}