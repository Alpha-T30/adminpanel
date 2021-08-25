import Style from "./Newuser.module.scss";

export default function Newuser() {
  return (
    <div className={Style.newuser}>
      <h1>New User</h1>
      <form>
        <div className={Style.useritem}>

        <label htmlFor="username">Username</label>
        <input  placeholder={"something"} className={Style.geninp}  type="text" />
        </div>
        <div className={Style.useritem}>

        <label htmlFor="fname">Full Name</label>
        <input  placeholder={"something"} className={Style.geninp}  type="text" />
        </div>
        <div className={Style.useritem}>

        <label htmlFor="email">Email</label>
        <input  placeholder={"something"}  className={Style.geninp} type="text" />
        </div>
        <div className={Style.useritem}>

        <label htmlFor="password">Password</label>
        <input  placeholder={"something"} className={Style.geninp}  type="password" />
        </div>
        <div className={Style.useritem}>

        <label htmlFor="phone">Phone</label>
        <input  placeholder={"something"} className={Style.geninp} type="text" />
        </div>
        <div className={Style.useritem}>

        <label htmlFor="address">Address</label>
        <input placeholder={"something"}  className={Style.geninp}  type="text" />
        </div>
        <div className={Style.useritem }>
            <label >Gender</label>
            <div className={Style.genderselect}>
                <input type="radio" name="commonNameForUnCheckingIt" value='male' id="male" />
                <label for='male'>Male</label>
                <input type="radio" name="commonNameForUnCheckingIt" id="female" value='female' />
                <label for='female'>Female</label>
                <input value='other' type="radio" name="commonNameForUnCheckingIt" id="other" />
                <label for='other'>Other</label>
            </div>
        </div>
        <div className={Style.useritem}>

        <label htmlFor="active">Active</label>
        <select className={Style.option} name="active" id="actice">
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        </div>
      <button>Create</button>
      </form>
    </div>
  );
}
