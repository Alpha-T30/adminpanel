import {
  LanguageOutlined,
  NotificationsNoneOutlined,
  Settings,
} from "@material-ui/icons/";
import React from "react";
import { Link } from "react-router-dom";
import Style from "./Topbar.module.scss";

export default function Topbar() {
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

          <div className={Style.propic}>
            <img src="/images/propic.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
