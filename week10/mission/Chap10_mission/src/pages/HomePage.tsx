import { useCallback, useMemo, useState } from "react";
import type { MovieFilters, Movie, MovieResponse } from "../types/movie";
import MovieCard from "../components/MovieCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import useCustomFetch from "../hooks/useCustomFetch";
import MovieFilter from "../components/MovieFilter";

const HomePage = () => {
  const [filters, setFilters] = useState<MovieFilters>({
    query: "어벤져스",
    include_adult: false,
    language: "ko-KR",
  });

  const axiosRequestConfig = useMemo(
    (): { params: MovieFilters } => ({
      params: filters,
    }),
    [filters]
  );

  const handleMovieFilters = useCallback(
    (filters: MovieFilters) => {
      setFilters(filters);
    },
    [setFilters]
  );

  const url = `https://api.themoviedb.org/3/search/movie`;

  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch<MovieResponse, Movie[]>(
    url,
    axiosRequestConfig,
    (res) => res.results
  );

  if (isError) {
    return <div className="text-red-500 text-2xl">에러가 발생했습니다.</div>;
  }
  return (
    <>
      <MovieFilter onChange={handleMovieFilters} />
      {isLoading && (
        <div className="flex justify-center items-center h-dvh">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {movies?.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
