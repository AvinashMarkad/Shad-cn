export default function cart(){
    return(
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Explore Our Alowishus</h1>
          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio
            quisquam dicta maxime, perferendis veniam!
          </p>
        </div>
  
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
          {/* Catering Card */}
          <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center">
            <div className="text-5xl mb-4">
              🍽️ {/* Example icon, replace with a proper SVG */}
            </div>
            <h2 className="text-2xl font-semibold">Our Catering</h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet dolor consectetur.
            </p>
            <button className="mt-4 px-6 py-2 bg-black text-white rounded-md">
              Order Catering
            </button>
          </div>
  
          {/* Food Card */}
          <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center">
            <div className="text-5xl mb-4">
              🍔 {/* Example icon */}
            </div>
            <h2 className="text-2xl font-semibold">The Food</h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet dolor consectetur.
            </p>
            <button className="mt-4 px-6 py-2 bg-black text-white rounded-md">
              Food Menu
            </button>
          </div>
  
          {/* Gelato Card */}
          <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center">
            <div className="text-5xl mb-4">
              🍦 {/* Example icon */}
            </div>
            <h2 className="text-2xl font-semibold">The Getato</h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet dolor consectetur.
            </p>
            <button className="mt-4 px-6 py-2 bg-black text-white rounded-md">
              Discover More
            </button>
          </div>
        </div>
      </div>
    );
}