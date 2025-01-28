import Image from "next/image";

export default function NavBar() {
    return (
        <div className="absolute top-0 w-full flex justify-center">
            <div className="container py-3.5">
                <Image width={147} height={35} src="/logo.png" alt="crowdcoin Logo" />
            </div>
        </div >
    )
}