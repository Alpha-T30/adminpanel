import { DataGrid } from "@material-ui/data-grid";
// import { productRows } from "../../../dammydata";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Style from "./bal.module.scss";
import { MovieContext } from "../../../Context_Api/movieContext/MovieContaxt";
import {
  deleteMovie,
  getMovies,
} from "../../../Context_Api/movieContext/MovieApiCalls";
import { ListContext } from "../../../Context_Api/ListContext/ListContext";
import {
  deletelist,
  getlists,
} from "../../../Context_Api/ListContext/ListApiCalls";
import axios  from "axios";

export default function ListList() {
  const [data, setData] = useState([]);

  const { lists, dispatch } = useContext(ListContext);
  useEffect(() => {
     
    
    getlists(dispatch)
  }, [dispatch]);

  const handleDelete = (id) => {
    deletelist(dispatch, id);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },

    {
      field: "title",
      headerName: "Search",
      width: 220,
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "type", headerName: "Type", width: 120 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className={Style.action}>
            <Link to={{ pathname: "list/" + params.row._id, list: params.row }}>
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
        rows={lists}
        columns={columns}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r._id}
      />
    </div>
  );
}
