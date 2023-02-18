function NFTDropPage() {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      <div className="lg:col-span-4">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-50rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.seadn.io/gcs/files/31cc2d6da606d469c6e51d7939b177b1.png?auto=format&w=1000"
            alt="logo"
            className="w-44 rounded-xl p-2 object-cover lg:h-96 lg:w-72"
          />
          <div className="text-center p-5 space-y-2">
            <h1 className="text-4xl font-bold text-black">
              Utilify - NFT Drop
            </h1>
            <h2 className="text-xl text-gray-600">
              A collection of Utilify who live & breathe React!
            </h2>
          </div>
        </div>
      </div>
      <div className="lg:col-span-6 flex flex-1 flex-col p-12">
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{" "}
            <span className="font-bold underline decoration-indigo-600/50">
              UTILIFY
            </span>{" "}
            NFT Market Place
          </h1>
          <button className="border border-gray-200 font-semibold text-black px-4 py-2 text-xs lg:text-base">
            CONNECT WALLET
          </button>
        </header>
        <hr className="my-2 border" />
        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 lg:space-y-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-80 object-contain pb-10 lg:h-40"
            src="https://i.seadn.io/gcs/files/c922b6f3ba409fdb8f08f8f7b5c7580c.png?auto=format&w=256"
            alt="Utilify Logo"
          />

          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            Utilify | NFT Drop
          </h1>

          <p className="pt-2 text-xl text-green-500">13 / 21 NFTs claimed</p>
        </div>

        {/* Min Button */}
        <button className="mt-10 h-16 bg-black text-white w-full font-semibold rounded">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
}

export default NFTDropPage;
