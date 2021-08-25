import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../../dammydata";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Style from  './Productlist.module.scss'; 

export default function Productlist() {
    const [data , setData] = useState(productRows) ; 
    const handleDelete  = (id) =>{

        setData(data.filter((d)=>d.id!==id)) ; 

    }

    const columns = [
        { field: "id", headerName: "ID", width: 110 },
        {
          field: "products",
          headerName: "Products",
          width: 210,
    
           renderCell:(params) =>{
               return (
                   <div className={Style.usercell}>
                       <img src= {params.row.img} alt="" />
                       <span>{params.row.name}</span>
                   </div>
               )
           }
        },
        {
            field:"stock" , 
            headerName:"Stock"
            , width:150, 
            editable:true 
        } , 
        {
            field: "price" , 
            headerName:"Price" , 
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
                    <Link to={"product/"+params.row.id}>
                    <button>Edit</button>
                    </Link>
                    < DeleteOutline onClick={()=>handleDelete(params.row.id)} className={Style.deletebtn}></DeleteOutline>
                </div>
            )}
        }
      ];
    return (
        <div className={Style.productlist}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={7}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    )
}
