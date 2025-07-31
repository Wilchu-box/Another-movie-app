import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import { useEffect, useState } from 'react';

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        const movieDetailsData = await getMovieDetails(id);
        setMovieDetails(movieDetailsData);
        console.log(movieDetailsData);
      } catch(err) {
        console.error(err);
        setError('Failed to load movie data...');
      } finally {
        setLoading(false);
      }
    }
    loadMovieDetails();
  }, []);

  return (
    <div className="bg-gray-900">

      {loading ? (<>Loadiong...</>) : (
        <div className="relative isolate overflow-hidden pt-14">
          <img 
            src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
            alt={movieDetails.title} 
            className="absolute inset-0 -z-10 size-full object-cover w-full opacity-40" 
          />
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
          </div>
          <div className="mx-auto max-w-3/4 2xl:max-w-7xl px-6 lg:px-8">
            <div className="mx-auto w-full py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10">
                  {movieDetails.tagline}
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">{movieDetails.title}</h1>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                  {movieDetails.overview}
                </p>
              </div>

              <div className='grid grid-cols-3 mt-6 gap-4'>
                <div class="px-4 py-10 bg-gray-800/80 backdrop-blur-none text-center rounded-2xl text-white">
                  <h3 className='text-2xl font-bold uppercase mb-2'>popularity</h3>
                  <p className='text-lg'>{movieDetails.popularity.toFixed(2)}</p>
                </div>
                <div class="px-4 py-10 bg-gray-800/80 backdrop-blur-none text-center rounded-2xl text-white">
                  <h3 className='text-2xl font-bold uppercase mb-2'>Release date</h3>
                  <p className='text-lg'>{movieDetails.release_date}</p>
                </div>
                <div class="px-4 py-10 bg-gray-800/80 backdrop-blur-none text-center rounded-2xl text-white">
                  <h3 className='text-2xl font-bold uppercase mb-2'>Avg vote</h3>
                  <p className='text-lg'>{movieDetails.vote_average.toFixed(2)}</p>
                </div>
              </div>

            </div>
          </div>

        </div>)}
    </div>
  )
}

export default MovieDetails;