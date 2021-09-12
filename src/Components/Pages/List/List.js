//TO DO
// while updating you have to delete the previous file form firebase to save some
// storage , so learn how to delete file form firebase

import { Link, useLocation } from "react-router-dom";
import "./list.css";

import { Publish } from "@material-ui/icons";
import Chart from "../../Chart/Chart";
import { productData } from "../../../dammydata";
import { ref } from "firebase/storage";
import { useRef } from "react";
import { useState } from "react";
import { uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import storage from "../../../firebase";
import { useContext } from "react";
import { listUpdate } from "../../../Context_Api/ListContext/ListApiCalls";
import { ListContext } from '../../../Context_Api/ListContext/ListContext';

export default function List() {
  const { dispatch } = useContext(ListContext);
  const [uploaded, setUploaded] = useState(0);

  const location = useLocation();
  const list = location.list;
  const formRef = useRef();
  const [update, setUpdate] = useState(null);

  let mylist = {};

  const handleForm = (e) => {
    e.preventDefault();

    for (let i = 0; i < formRef.current.length - 1; i++) {
      if (formRef.current[i].type === "file") {
        mylist[formRef.current[i].name] = formRef.current[i].files[0];
      } else {
        mylist[formRef.current[i].name] =
          formRef.current[i].value === ""
            ? list[formRef.current[i].name]
            : formRef.current[i].value;
      }
    }

    setUpdate({ ...mylist, _id: list._id });

    upload([
      { file: formRef.current[4].files[0], label: "trailer" },
      { file: formRef.current[5].files[0], label: "fullList" },
      { file: formRef.current[6].files[0], label: "featuredImg" },
    ]);
  };

  const upload = (files) => {
    files.forEach((item) => {
      if (item.file) {
        const fileName = new Date().getTime() + item.label + item.file.name;

        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, item.file);

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
              setUpdate((preval) => ({
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

    listUpdate(dispatch, update);
    setUploaded(0);
    formRef.current.reset();
  };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">Title: {list?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Genre</span>
              <span className="productInfoValue">{list?.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Type</span>
              <span className="productInfoValue">{list?.type}</span>
            </div>
            
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form ref={formRef} className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input name="title" type="text" placeholder={list?.title} />
            <label>Year</label>
            <input name="year" type="text" placeholder={list?.year} />
            <label>Genre</label>
            <input name="genre" type="text" placeholder={list?.genre} />
            <label>Limit</label>
            <input name="limit" type="text" placeholder={list?.limit} />
            <label>Trailer</label>
            <input name="trailer" type="file" placeholder={list?.trailer} />
            <label>Full List</label>
            <input name="fullList" type="file" placeholder={list?.fullList} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={list?.featuredImg}
                alt=""
                className="productUploadImg"
              />
              <label for="featured">
                <Publish />
              </label>
              <input
                name="featuredImg"
                id="featured"
                type="file"
                style={{ display: "none" }}
              />
            </div>
            {uploaded === 3 ? (
              <button onClick={handleCreate} type="button">
                Update
              </button>
            ) : (
              <button onClick={handleForm} type="submit">
                Upload
              </button>
            )}
            {/* <button type="submit" className="productButton">Update</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
