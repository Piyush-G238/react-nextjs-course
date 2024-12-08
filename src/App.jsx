import { useState } from "react";

import Header from "./components/features/Header";
import Main from "./components/shared/Main";
import MovieList from "./components/features/MovieList";

import "./styles.css"

import { MOVIE_DATA } from "./moviedata";
import { WATCHED_DATA } from "./watcheddata";
import WatchList from "./components/features/WatchList";
import StarRating from "./components/shared/StarRating";

export default function App() {
  const [movieList, setMovieList] = useState(MOVIE_DATA);
  const [watchList, setWatchList] = useState(WATCHED_DATA);

  return (
    <div className="App">
      <StarRating />
      {/* <Header movieCount={movieList.length}/>
      <Main>
        <MovieList list={movieList} />
        <WatchList list={watchList} />
      </Main> */}
    </div>
  );
}
