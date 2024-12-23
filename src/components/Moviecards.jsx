import React from "react";

function Moviecards({
  posterpath,
  moviename,
  addtowatchlist,
  movieobj,
  removefromwatchlist,
  watchlist,
}) {
 
  // console.log(watchlist.length)

  function doescontainmovie(movieobj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieobj.id) {
        return true
      }
    }
    return false
  }
  return (
    <div
      className=" relative flex items-end h-[48vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterpath})`,
      }}
    >
      {doescontainmovie(movieobj) ? (
        <div
          onClick={() => removefromwatchlist(movieobj)}
          className=" text-red-500 absolute right-0 top-0 h-8 w-8 rounded-xl m-2 flex justify-center items-center bg-gray-900/60 ">
          &#10008;
        </div>
        )
         :(
          <div
          onClick={() => addtowatchlist(movieobj)}
          className=" absolute right-0 top-0 h-8 w-8 rounded-xl m-2 flex justify-center items-center bg-gray-900/60">
          &#10084;
        </div>
      
      )}
      <div className=" rounded-xl   p-2 text-white text-xl w-full text-center bg-gray-900/60">
        {moviename}
      </div>
    </div>
  );
}

export default Moviecards;
