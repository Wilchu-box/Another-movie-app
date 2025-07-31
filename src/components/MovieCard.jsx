import { useMovieContext } from "../contexts/MovieContext";
import { Link } from "react-router-dom";

function MovieCard({movie}) {
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavorite(e) {
    e.preventDefault();
    if(favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }


  return (
    <div className="relative rounded-lg overflow-hidden bg-[#1a1a1a] transition-transform duration-200 hover:-translate-y-1 flex flex-col h-full text-white">
      <Link to={`/MovieDetails/${movie.id}`}>
        <div className="relative aspect-[2/3] w-full">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
            <button
              onClick={onFavorite}
              className={`absolute top-4 right-4 text-xl p-2 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 ${
                favorite ? "text-[#ff4757]" : "text-white"
              } hover:bg-black/80 bg-black/50`}
            >
              ♥
            </button>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-2 flex-1">
          <h3 className="text-base font-semibold">{movie.title}</h3>
          <p className="text-gray-400 text-sm">{movie.release_date.split("-")[0]}</p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;