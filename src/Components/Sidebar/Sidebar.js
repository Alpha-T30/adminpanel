import React from "react";
import Style from "./Sidebar.module.scss";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className={Style.sidebar}>
      <div className={Style.wrapper}>
        <div className={Style.sidebarmenue}>
            <h3>Dash Board</h3>
          <ul className={Style.items}>
            < Link style={{color:"black",textDecoration:"none"}} to="/">
            <li className={`${Style.item} ${Style.active}`}>
              <LineStyle className={Style.icon}  />
              Home
            </li>
            </Link>
            <li className={Style.item}>
              <Timeline className={Style.icon} />
              Analytics
            </li>
            <li className={Style.item}>
              <TrendingUp className={Style.icon} />
              Sales
            </li>
          </ul>
        </div>
        <div className={Style.sidebarmenue}>
            <h3>Quick Start</h3>
          <ul className={Style.items}>
            <Link  style={{textDecoration:"none" , color:"black"}} to='/users'>
              <li className={Style.item}>
                <PermIdentity className={Style.icon}  />
                Users
              </li>
            </Link>
            <Link className={Style.link} to='/products'>
            <li className={Style.item}>
              <Storefront className={Style.icon} />
              Products
            </li>
            </Link>
            <li className={Style.item}>
              <AttachMoney className={Style.icon} />
             Transactions
            </li>
            <li className={Style.item}>
              <BarChart className={Style.icon} />
              Reports
            </li>
          </ul>
        </div>
        <div className={Style.sidebarmenue}>
            <h3>Notifications</h3>
          <ul className={Style.items}>
            <li className={Style.item}>
              <MailOutline className={Style.icon}  />
               Mail
            </li>
            <li className={Style.item}>
              <DynamicFeed className={Style.icon} />
             FeedBack
            </li>
            <li className={Style.item}>
              <ChatBubbleOutline className={Style.icon} />
            Messages
            </li>
          </ul>
        </div>
        <div className={Style.sidebarmenue}>
            <h3>Staff</h3>
          <ul className={Style.items}>
            <li className={Style.item}>
              <WorkOutline className={Style.icon}  />
              Manage
            </li>
            <li className={Style.item}>
              <Timeline className={Style.icon} />
              Analytics
            </li>
            <li className={Style.item}>
              <Report className={Style.icon} />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
