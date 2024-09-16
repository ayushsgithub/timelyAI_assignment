import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center bg-gray-50 overflow-hidden min-h-screen">
      <div className="flex border-black border-2 rounded-lg flex-col w-full max-w-md min-h-screen bg-white relative shadow-xl">
        <div className="px-4 mt-7">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold cursor-pointer">{'<'}</div>
            <Image src="/favicon.ico" width={35} height={20} alt="logo" />
            <div className="text-lg font-bold cursor-pointer">Help?</div>
          </div>
        </div>

        <div className="px-4 flex-grow">
          <h1 className="font-bold text-3xl my-10">
            Your Professional <br /> Website is Ready
          </h1>
          <p className="text-sm tracking-wider text-gray-600 my-6">
            Start attracting more clients with your <br /> optimized online presence
          </p>

          <div className="grid grid-cols-2 ">
            <div className="flex items-center space-x-2">
              <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=000000" alt="tick" width={17} height={12} />
              <span className="text-gray-800">SEO & Keywords</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=000000" alt="tick" width={17} height={12} />
              <span className="text-gray-800">Perfect on Mobile</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=000000" alt="tick" width={17} height={12} />
              <span className="text-gray-800">Mobile Friendly</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image src="https://img.icons8.com/?size=100&id=82769&format=png&color=000000" alt="tick" width={17} height={12} />
              <span className="text-gray-800">Get Leads & Bookings</span>
            </div>
          </div>

          <div className="flex items-center justify-center bg-gradient-to-b from-white to-pink-200 -mx-4 h-full pt-16 mt-14">
            <Image
              src="https://images.unsplash.com/photo-1642752187508-5a6dbfb705c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="wallpaper"
              width={240}
              height={800}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="bg-white w-full px-4 pb-6 pt-3 absolute bottom-0">
          <button className="bg-black text-white p-4 rounded-lg w-full font-bold tracking-wider">
            Review & Publish
          </button>
        </div>
      </div>
    </main>
  );
}
