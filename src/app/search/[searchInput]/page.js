"use client";

import { MovieRow } from "@/components/MovieRow";
import { movieDB } from "@/libs/movieDB";

export default function SearchResultPage({ params }) {
  //tip1 : before filtering movie, replace all "%20" with " " (space) in the input
  // const processedSearchInput = ...

  const searchInput = params.searchInput;
  const processedSearchInput = searchInput.replaceAll("%20", " ");
  const LowerInput = processedSearchInput.toLocaleLowerCase();

  const FilterMovie = movieDB.filter((movie) =>
    movie.title.toLocaleLowerCase().includes(LowerInput)
  );

  /*
  tip2 : Use "includes" string method to check substring
  Example : "ABC".includes("AB") -> return true
  
  tip3 : To implement case insensitive searching, use "toLocaleLowerCase" string method
  to convert movie title and searchInput to lower case 
  const filteredMovies = movieDB.filter((movie) =>
    you code here...
  );
  */
  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {processedSearchInput} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">
        Found {FilterMovie.length} result(s)
      </p>
      {FilterMovie.map((movie, i) => (
        <MovieRow
          key={movie.id}
          id={movie.id}
          title={movie.title}
          detail={movie.detail}
          rating={movie.rating}
          number={i + 1}
        />
      ))}
    </div>
  );
}
