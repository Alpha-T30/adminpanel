import Style from "./widgetlg.module.scss";

export default function Widgetlg() {
    const Button = ({ type }) => {
        return <button className={type==="Approved"?Style.btnApprove:type==="Pending"?Style.btnPending:Style.btnDecline}>{type}</button>;
      };
  return (
    <div className={Style.large}>
      <h2>Latest Transactions</h2>
      <table>
      <tbody> 

        <tr className={Style.tableHeading} >
          <th>Customer</th>
          <th>Date</th>
          <th>Ammount</th>
          
          <th className={Style.status} >Status</th>
        </tr>
        <tr className={Style.userdatarow} >
          <td className={Style.userinfo}>
            <img
              src="https://w0.peakpx.com/wallpaper/774/763/HD-wallpaper-neon-mask-man-man-city-color-light-mask-neon-night-smoke.jpg"
              alt=""
            />

            <span>Name</span>
          </td>

          <td ><span>2 Jun 21</span></td>
          <td>$100</td>
          <td>
            <Button type="Approved"></Button>
          </td>
        </tr>
        <tr className={Style.userdatarow} >
          <td className={Style.userinfo}>
            <img
              src="https://w0.peakpx.com/wallpaper/774/763/HD-wallpaper-neon-mask-man-man-city-color-light-mask-neon-night-smoke.jpg"
              alt=""
            />

            <span>Name</span>
          </td>

          <td>2 Jun 21</td>
          <td>$100</td>
          <td>
            <Button type="Pending"></Button>
          </td>
        </tr>
        <tr className={Style.userdatarow} >
          <td className={Style.userinfo}>
            <img
              src="https://w0.peakpx.com/wallpaper/774/763/HD-wallpaper-neon-mask-man-man-city-color-light-mask-neon-night-smoke.jpg"
              alt=""
              />

            <span>Name</span>
          </td>

          <td>2 Jun 21</td>
          <td>$100</td>
          <td>
            <Button type="Approved"></Button>
          </td>
        </tr>
        <tr className={Style.userdatarow} >
          <td className={Style.userinfo}>
            <img
              src="https://w0.peakpx.com/wallpaper/774/763/HD-wallpaper-neon-mask-man-man-city-color-light-mask-neon-night-smoke.jpg"
              alt=""
            />

            <span>Name</span>
          </td>

          <td>2 Jun 21</td>
          <td>$100</td>
          <td>
            <Button type="Declined"></Button>
          </td>
        </tr>
              </tbody>
      </table>
    </div>
  );
}
