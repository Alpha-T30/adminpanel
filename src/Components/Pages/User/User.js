import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Style from "./User.module.scss";

export default function User() {
  return (
    <div className={Style.user}>
      <div className={Style.title}>
        <h1>Edit User</h1>
        < Link to = '/newUser'>
        <button>Create</button>
        </Link>
      </div>
      <div className={Style.userr}>
        <div className={Style.show}>
          <div className={Style.top}>
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className={Style.job}>
              <span className={Style.showname}>Anna Backer</span>
              <span>Software Engineer</span>
            </div>
          </div>
          <div className={Style.middle}>
            <h3>Account Details</h3>
            <div className={Style.account}>
              <span>
                {" "}
                <PermIdentity className={Style.icon}></PermIdentity>{" "}
                annabacker333
              </span>
              <span>
                {" "}
                <CalendarToday className={Style.icon}></CalendarToday>{" "}
                10.11.1998
              </span>
            </div>
          </div>
          <div className={Style.bottom}>
            <h3>Contact Details</h3>
            <div className={Style.contact}>
              <span>
                <PhoneAndroid className={Style.icon} /> +122 17890356
              </span>
              <span>
                <MailOutline className={Style.icon}></MailOutline>anna@gmail.com
              </span>
              <span>
                {" "}
                <LocationSearching className={Style.icon}></LocationSearching>
                New York | USA
              </span>
            </div>
          </div>
        </div>
        <div className={Style.update}>
            <h2>Edit</h2>
            <form>
                
          <div className={Style.upleft}>
          <div className={Style.userUpdateItem}>
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className={Style.userUpdateInput}
                />
              </div>
              <div className={Style.userUpdateItem}>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className={Style.userUpdateInput}
                />
              </div>
              <div className={Style.userUpdateItem}>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className={Style.userUpdateInput}
                />
              </div>
              <div className={Style.userUpdateItem}>
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className={Style.userUpdateInput}
                />
              </div>
              <div className={Style.userUpdateItem}>
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className={Style.userUpdateInput}
                />
              </div>
          </div>
          <div className={Style.upright}>
            <div className={Style.imgup}>
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="file">

              <Publish className={Style.publish}></Publish>
              </label>
              <input type="file" id='file' style={{display:"none"}} />
            </div>
            <button>Update</button>
          </div>
            </form>
        </div>
      </div>
    </div>
  );
}
