import  Style from './widgetsm.module.scss'
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from 'react';
import axios  from 'axios';


export default function Widgetsm() {
  const [newUser, setnewUser] = useState([]) ; 
  console.log(newUser)
  useEffect(()=>{
    const fetchnewUser = async () =>{
      const res = await axios.get("/user?new=true", {
        headers: {
          token:
            "beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjIwZTBlNGNlODgyNjhjOTM2MjNiMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTkwMTk1MSwiZXhwIjoxNjMwMzMzOTUxfQ._ypz7IcPvp70EFKQJ4YFCji5lgde8A6jOfjOoGYImVs",
        },
      }) ; 
      setnewUser(res.data)
    } 
    fetchnewUser()
  }, [])
    return (
        <div className={Style.small}>
             <h2 className={Style.widgetSmTitle}>New Join Members</h2>
      <ul className={Style.widgetSmList}>
        {newUser.map((user, index)=>{
          return (

        <li key={index} className={Style.widgetSmListItem}>
          <img
            src= {user.profilePic?user.profilePic:"./images/noavater.png"}
            alt=""
            className={Style.widgetSmImg}
          />
          <div className={Style.widgetSmUser}>
            <span className={Style.widgetSmUsername}>{user.username}</span>
            {/* <span className={Style.widgetSmUserTitle}>Web Developer</span> */}
          </div>
          <button className={Style.widgetSmButton}>
            <Visibility className={Style.widgetSmIcon} />
            
            Display
          </button>
        </li>
          )
        })}
        
        </ul>
        </div>
    )
}
