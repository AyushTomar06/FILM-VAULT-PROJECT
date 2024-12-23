import React from "react";
import Moviecards from "./Moviecards";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Pagination from "./Pagination";

function Movies({removefromwatchlist, addmovietowatchlist, watchlist}) {
  const [movie, setmovie] = useState([]);
  const[pgno,setpgno]=useState(1);
  function incpgno(){

      setpgno(pgno+1)
  }
  function decpgno(){
      if(pgno>1){
      setpgno(pgno-1)
      }}

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=61c16800c57f73e98e9d6d9ad2f07d7f&language=en-US&page=${pgno}`
      )
      .then(function (res) {
        setmovie(res.data.results);
        console.log(res.data.results);
      });
  }, [pgno]);
  // add to Watchlist
  



  return (
    <>
    <div className="m-2  ">
      <div className=" mb-5  text-2xl text-center  font-bold">
        Trending Movies
      </div>

      <div className="flex flex-wrap gap-5 mx-4">
        {movie.map((movieObj) => {
          return (
            <Moviecards
            posterpath={movieObj.backdrop_path}
            moviename={movieObj.original_title}
            addtowatchlist={addmovietowatchlist}
            movieobj={movieObj}
            removefromwatchlist={removefromwatchlist}
            watchlist={watchlist}
            
            />
          );
        })}
      </div>
    </div>
    <div>

      <Pagination decpgno={decpgno} incpgno={incpgno} pgno={pgno} />
    </div>
        </>
  );
}
// https://api.themoviedb.org/3/movie/popular?api_key=61c16800c57f73e98e9d6d9ad2f07d7f&language=en-US&page=1

export default Movies;
