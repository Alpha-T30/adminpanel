import Style from "./newlist.module.scss";
import { useContext, useEffect, useRef, useState } from "react";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import storage from "../../../firebase";
import { createlist } from "../../../Context_Api/ListContext/ListApiCalls";
import { ListContext } from "../../../Context_Api/ListContext/ListContext";
import { MovieContext } from "../../../Context_Api/movieContext/MovieContaxt";
import { getMovies } from "../../../Context_Api/movieContext/MovieApiCalls";

export default function NewList() {
  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: Moviedispatch } = useContext(MovieContext);
  console.log(movies);
  const [list, setlist] = useState(null);
  const formRef = useRef();
   
 
  useEffect(() => {
    getMovies(Moviedispatch);
  }, [Moviedispatch]);
  const handleForm = (e) => {
    e.preventDefault();
    let Listvalue = Array.from(formRef.current[4],(option)=>option.value) ; 
    console.log("listval", Listvalue)

    let newlist = {} ; 
    newlist['movieList']=Listvalue
    for (let i = 0; i < formRef.current.length-1; i++) {
      if(formRef.current[i].name!=='movieList'){
        newlist[formRef.current[i].name]=formRef.current[i].value

      } 
      // else{
      //   newlist["movieList"]=Listvalue ; 
      // }
      
    }

      console.log("newlist",newlist)

     createlist(dispatch,newlist)



   
   

     
  };

 
  return (
    <div className={Style.nproduct}>
      <h1>New List</h1>
      <form onSubmit={handleForm} ref={formRef}>
        <div className={Style.left}>
          <div className={Style.item}>
            <label for="title">Title</label>
            <input
              required="true"
              name="title"
              placeholder={"Enter List Title"}
              type="text"
              id="title"
            ></input>
          </div>
          <div className={Style.item}>
            <label for="stock">Genre</label>
            <input
            required="true"
              name="genre"
              placeholder={"Genre"}
              type="text"
              id="stock"
            ></input>
          </div>
          <div className={Style.item}>
            <label for="stock">Type</label>
            <select   className={Style.active} name="type" id="type">
              <option  >Select</option>
              <option value="series">Series</option>
              <option value="movie">Movie</option>
            </select>
          </div>
          <button type="submit">Create</button>
        </div>

         
        <div className={` ${Style.c}`}>
          <label for="active">Content</label>
          <select
          required="true"
            multiple
            name="movieList"
            className={Style.active}
            id="isSeries"
          >
            {movies.map((movie, index) => {
              return (
                <option key={index} value={movie._id}>
                  {movie.title}
                </option>
              );
            })}
          </select>
        </div>

      </form>
    </div>
  );
}
