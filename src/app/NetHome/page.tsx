// pages/index.js
export default function NetHome() {
  const movies = [
    {
      title: "Movie 1",
      image: "https://via.placeholder.com/300x450?text=Movie+1",
    },
    {
      title: "Movie 2",
      image: "https://via.placeholder.com/300x450?text=Movie+2",
    },
    {
      title: "Movie 3",
      image: "https://via.placeholder.com/300x450?text=Movie+3",
    },
    {
      title: "Movie 4",
      image: "https://via.placeholder.com/300x450?text=Movie+4",
    },
    {
      title: "Movie 5",
      image: "https://via.placeholder.com/300x450?text=Movie+5",
    },
    {
      title: "Movie 6",
      image: "https://via.placeholder.com/300x450?text=Movie+6",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <nav className="flex items-center justify-between p-4 bg-black text-white">
        <div className="text-2xl font-bold">Netflix Clone</div>
        <button className="bg-red-600 px-4 py-2 rounded">Sign In</button>
      </nav>

      <div className="p-4">
        <h1 className="text-white text-3xl mb-4">Popular Movies</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
          {movies.map((movie, index) => (
            <div key={index} className="relative w-48 h-72 mx-2">
              <img src={movie.image} alt={movie.title} className="w-full h-full rounded-lg" />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full p-2 text-center rounded-b-lg">
                {movie.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
