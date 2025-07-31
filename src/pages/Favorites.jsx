import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();
  if(favorites) {
    return <div className="text-white py-12 text-center container mx-auto px-2 md:px-4">
      <h2 className="text-2xl">Your Favorites</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {favorites.map(movie => (
              <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>

    </div>
  }

  return <div className="text-white py-12 text-center">
    <h2 className="text-2xl">No favorites Movies Yet</h2>
    <p>Start addubg movies to your favourites and they will appear here</p>
  </div>;

}

export default Favorites;