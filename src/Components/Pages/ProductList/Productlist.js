import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../../dammydata";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Style from "./Productlist.module.scss";
import { MovieContext } from "../../../Context_Api/movieContext/MovieContaxt";
import { deleteMovie, getMovies } from "../../../Context_Api/movieContext/MovieApiCalls";

export default function Productlist() {
  const [data, setData] = useState(productRows);
  

  const { movies, dispatch } = useContext(MovieContext);
  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  console.log(movies)
  const handleDelete = (id) => {
    deleteMovie(dispatch,id)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 110 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,

      renderCell: (params) => {
        return (
          <div className={Style.usercell}>
            <img src={params.row.featuredImg} alt="" />
            <span>{params.row.title}</span>
          </div>
        );
      },
    },
    // {
    //   field: "title",
    //   headerName: "Search",
    //   width: 90,

      
    // },
    { field: "genre", headerName: "Genre", width:  120 },
    { field: "year", headerName: "Year", width:  120 },
    { field: "limit", headerName: "Limit", width:  120 },
    { field: "isSeries", headerName: "Is Series", width:  120 },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className={Style.action}>
            <Link to={{pathname: "product/" + params.row._id, movie:params.row}}>
              <button>Edit</button>
            </Link>
            <DeleteOutline
              onClick={() => handleDelete(params.row._id)}
              className={Style.deletebtn}
            ></DeleteOutline>
          </div>
        );
      },
    },
  ];
  return (
    <div className={Style.productlist}>
      <DataGrid
        rows={movies}
        columns={columns}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick 
        getRowId={r=>r._id}
      />
    </div>
  );
}
