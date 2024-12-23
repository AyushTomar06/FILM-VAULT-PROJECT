import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import { useEffect, useState } from "react";

export default function App() {
  const[watchlist,setwatchlist]=useState([]);
  
  function addmovietowatchlist(moviesObj){
    let newmovieobj=[...watchlist,moviesObj];
    setwatchlist(newmovieobj);
    localStorage.setItem('storedmovies',JSON.stringify(newmovieobj))
   
  }
  
  function removewatchlist(movieObj){
    let removedwatchlist=watchlist.filter((movie)=>{
      return movie.id!=movieObj.id;
      
    })
    localStorage.setItem('storedmovies',JSON.stringify(removedwatchlist))
    setwatchlist(removedwatchlist)
    
  }
  // console.log(watchlist)
  // whenever something change useeffect runs
  useEffect(()=>{
    let storedmovies=localStorage.getItem('storedmovies')
    if(!storedmovies){
      return
    }
    setwatchlist(JSON.parse(storedmovies));

  },[])




  return (

    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/FILMVAULT-PROJECT/"
            element={
              <>
                 <Banner /> <Movies removefromwatchlist={removewatchlist} addmovietowatchlist={addmovietowatchlist} watchlist={watchlist} />
              </>
            }
          />
          <Route path="/FILMVAULT-PROJECT/WatchList/" element={< Watchlist Watchlist={watchlist} removefromwatchlist={removewatchlist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
