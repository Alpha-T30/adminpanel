import Style from "./newproduct.module.scss";
import { useContext, useRef, useState } from "react";

import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import storage from "../../../firebase";
import { MovieContext } from '../../../Context_Api/movieContext/MovieContaxt';
import { createMovie } from '../../../Context_Api/movieContext/MovieApiCalls';

export default function Newproduct() {
  const {dispatch} = useContext(MovieContext)
  const [movie, setmovie] = useState(null);
  const [uploaded, setUploaded] = useState(0);
  const formRef = useRef();
  console.log(movie);

  
  const handleForm = (e) => {
    e.preventDefault();

    let mymovie = {};

    for (let i = 0; i < formRef.current.length - 1; i++) {
      if (formRef.current[i].type === "file") {
        mymovie[formRef.current[i].name] = formRef.current[i].files[0];
      } else {
        mymovie[formRef.current[i].name] = formRef.current[i].value;
      }
    }

    setmovie(mymovie);

    upload([
      { file: formRef.current[0].files[0], label: "featuredImg" },
      { file: formRef.current[1].files[0], label: "featuredTitle" },
      { file: formRef.current[2].files[0], label: "thumbImg" },
      { file: formRef.current[9].files[0], label: "trailer" },
      { file: formRef.current[10].files[0], label: "fullMovie" },
    ]);
  };

  const upload = (files) => {
    files.forEach((item) => {
      if (item.file) {
        const fileName = new Date().getTime() + item.label + item.file.name;

        const storageRef = ref(storage, fileName);
        const uploadTask =  uploadBytesResumable(storageRef, item.file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setmovie((preval) => ({
                ...preval,
                [item.label]: downloadURL,
              }));

              setUploaded((preval) => {
                return preval + 1;
              });
            });
          }
        );

       
      } else {
        console.log("no file selected ");

        setUploaded((preval) => {
          return preval + 1;
        });
      }
    });
  };
  const handleCreate = (e) => {
    e.preventDefault();
    createMovie(dispatch,movie)
    setUploaded(0);
    formRef.current.reset();
  };
  return (
    <div className={Style.nproduct}>
      <h1>New Movie</h1>
      <form ref={formRef}>
        <div className={Style.item}>
          <label for="file">Featured Image</label>
          <input type="file" name="featuredImg" id="file"></input>
        </div>
        <div className={Style.item}>
          <label for="file">Title Image</label>
          <input name="featuredTitle" type="file" id="file"></input>
        </div>
        <div className={Style.item}>
          <label for="file">Thumb Image</label>
          <input name="thumbImg" type="file" id="file"></input>
        </div>

        <div className={Style.item}>
          <label for="title">Title</label>
          <input
          required='true'
            name="title"
            placeholder={"Enter Movie Title"}
            type="text"
            id="title"
          ></input>
        </div>
        <div className={Style.item}>
          <label for="stock">Year</label>
          <input
            name="year"
            placeholder={"Year"}
            type="text"
            id="stock"
          ></input>
        </div>
        <div className={Style.item}>
          <label for="stock">Description</label>
          <input
            name="desc"
            placeholder={"Description"}
            type="text"
            id="stock"
          ></input>
        </div>
        <div className={Style.item}>
          <label for="stock">Genre</label>
          <input
            name="genre"
            placeholder={"Genre"}
            type="text"
            id="stock"
          ></input>
        </div>
        <div className={Style.item}>
          <label for="stock">Duration</label>
          <input
            name="duration"
            placeholder={"Movie Duration"}
            type="text"
            id="stock"
          ></input>
        </div>
        <div className={Style.item}>
          <label for="active">Is Series?</label>
          <select name="isSeries" className={Style.active} id="isSeries">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className={Style.item}>
          <label for="file">Upload Trailer</label>
          <input name="trailer" type="file" id="file"></input>
        </div>
        <div className={Style.item}>
          <label for="file">Upload Full Movie</label>
          <input name="fullMovie" type="file" id="file"></input>
        </div>

        <div className={Style.item}>
          <label for="limit">Limit</label>
          <input
            name="limit"
            placeholder={"Limit"}
            type="text"
            id="limit"
          ></input>
        </div>
        
        {uploaded === 5 ? (
          <button onClick={handleCreate} type="button">
            Create
          </button>
        ) : (
          <button onClick={handleForm} type="submit">
            Upload
          </button>
        )}
      </form>
    </div>
  );
}
