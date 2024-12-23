import React, { useEffect } from "react";
import { useState } from "react";
import genreids from "../Genereids";


function Watchlist({ Watchlist,removefromwatchlist}) {
  console.log(Watchlist)

  const[input,setinput]=useState('');
  
  function inputvalue(e){
    setinput(e.target.value)
  }

  // function deletewatchlist(obj){
  //  Watchlist.filter((obj)=>{
  //   let afterdeletewatchlist

  //  })
   
  const[genere,setgenere]=useState(["All"])

  useEffect(()=>{
    let temp= Watchlist.map((obj)=>{

     return genreids[obj.genre_ids[0]]
    })
    temp=new Set(temp)
    // remove the repetition of generes
    setgenere(["All" , ...temp])
    console.log(genere)
 },[Watchlist])

 const[selectedgenere,setselectedgenere]=useState("All")
 function updategenere(gen){
    setselectedgenere(gen)
    
  }
  console.log(selectedgenere)

  return (
    <>

      <div className="flex justify-center gap-10 m-10 flex-row">
      {genere.map((gen)=>{
        return (
        <button  onClick={()=>updategenere(gen)}   className= {selectedgenere==gen? "w-20 h-10 rounded-xl bg-blue-400 ": "w-20 h-10 rounded-xl bg-slate-400 "}>
             
          {gen}
        </button>
        )  
      })}   
      </div>

      <div className="my-3 flex justify-center">
        <input 
        onChange={inputvalue}
        value={input}
          type="text"
          placeholder="Search movies"
          className=" px-2 h-[3rem] w-[15rem] outline-none bg-slate-100 rounded-l  "
        />
      </div>
      <div className="border m-10 rounded-l">
        <table className="w-full">
          <thead className="">
            <tr className="border-b-2">
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          {

          
          Watchlist.filter((movieobj)=>{
            if(genreids[movieobj.genre_ids[0]]==selectedgenere){
              return movieobj
            }
            else if(selectedgenere=="All"){
              return movieobj
            }
          }).filter((movieobj)=>{
            
             if(movieobj.title.toLowerCase().includes(input.toLowerCase())){
              return movieobj
             }
          }).map((movieobj) => {
            return <tbody>
              <tr className="border-b-2 m-5 px-5">
                <td className="flex gap-16   items-center px-5 py-6 ">
                  <img
                    className="w-[5rem]"
                    src= { `https://image.tmdb.org/t/p/original/${movieobj.poster_path} `}
                    alt=""
                  />
                  <div>{movieobj.title}</div>
                </td>
                <td className="text-center">{movieobj.vote_average}</td>
                <td className="text-center">{movieobj.popularity}</td>
                <td className="text-center">{genreids[movieobj.genre_ids[0]]}
                 
                </td>
                <td className="text-center">
                  <button onClick={()=>removefromwatchlist(movieobj)} className="text-red-500">Delete</button>
                </td>
              </tr>
            </tbody>;
          })}
        </table>
      </div>
    </>
  );
}

export default Watchlist;
