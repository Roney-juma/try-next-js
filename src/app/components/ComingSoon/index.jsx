import Image from "next/image";

export default function ComingSoon() {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <Image src="/Subtract.png" alt="coming soon image" height={272} width={272} />
            <h1 className="text-[62px] text-[#3758F9] max-md:text-[52px]">Coming Soon</h1>
            <p className="text-[#636975] text-[24px] max-md:text-[20px]">Join the waitlist</p>

            <div className="flex flex-col mt-4 w-[392px] max-md:max-w-full max-md:w-[370px] items-center bg-white rounded-md gap-2 p-2"
                style={{
                    boxShadow: `0px 8px 12px 0px rgba(0, 0, 0, 0.1);`
                }}
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow w-full p-3 text-gray-700 text-sm bg-transparent outline-none placeholder-gray-400 rounded-l-lg"
                />
            </div>
            <button className="px-6 py-3 mt-3 w-full text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg shadow">
                Submit
            </button>

        </div>
    )
}