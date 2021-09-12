import {
  LanguageOutlined,
  NotificationsNoneOutlined,
  Settings,
} from "@material-ui/icons/";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Topbar.module.scss";
import { AuthContext } from '../../Context_Api/AuthContext/AuthContext';
import { logOut } from "../../Context_Api/AuthContext/AuthActions";

export default function Topbar() {

  const [logout, setlogout] =useState(false) ; 
  const {sender} = useContext(AuthContext) ; 

  const handlelogOut = () =>{
    
    sender(logOut())
     window.location.reload();
  }
  return (
    <div className={Style.topbar}>
      <div className={Style.wrapper}>
        <div className={Style.left}>
          < Link style={{textDecoration:"none", color:"inherit"}} to="/">
          <span>Admin Panel</span>
          </Link>
        </div>
        <div className={Style.right}>
          <div className={Style.icons}>
              <div className={Style.icon1}>
                <NotificationsNoneOutlined />
                <span>1</span>
              </div>
              <div className={Style.icon1}>
                <LanguageOutlined />
                <span>5</span>
              </div>
              <div className={Style.icon1}>
                <Settings />
              </div>
          </div>

          <div onClick={()=>setlogout(!logout)} className={Style.propic}>
            <img src="/images/propic.png" alt="" />
            
          </div>
          <div style={{display:!logout?"none":"block"}} className={Style.logout}>
              <button onClick={handlelogOut}>Logout</button>
              <button> Dummy </button>
              <button> Dummy </button>
              <button> Dummy </button>
              <button> Dummy </button>
              <button> Dummy </button>
              <button> Dummy </button>
            </div>
        </div>
      </div>
    </div>
  );
}
