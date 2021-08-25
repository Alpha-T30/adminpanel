import Style from "./User.module.scss";
import { DataGrid } from "@material-ui/data-grid";
import { userRows } from "../../../dammydata";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [data , setData] = useState(userRows)

    const handleDelete  = (id) =>{

        setData(data.filter((d)=>d.id!==id)) ; 

    }

  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "user",
      headerName: "User",
      width: 150,

       renderCell:(params) =>{
           return (
               <div className={Style.usercell}>
                   <img src= {params.row.avatar} alt="" />
                   <span>{params.row.username}</span>
               </div>
           )
       }
    },
    {
        field:"email" , 
        headerName:"Email"
        , width:200, 
        editable:true 
    } , 
    {
        field: "transaction" , 
        headerName:"Transactions Volume" , 
        width: 230
    } , 
    {
        field:"status" , 
        headerName:"Status", 
        width:160 , 
    } , {
        field:"action" , 
        headerName:"Action", 
        width: 150 , 
        renderCell: (params)=>{
            return(
            <div className={Style.action}>
                <Link to={"user/"+params.row.id}>
                <button>Edit</button>
                </Link>
                < DeleteOutline onClick={()=>handleDelete(params.row.id)} className={Style.deletebtn}></DeleteOutline>
            </div>
        )}
    }
  ];

  return (
    <div className={Style.userlist}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={7}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
