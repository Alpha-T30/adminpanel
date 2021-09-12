import Featureinfo from '../../Featureinfo/Featureinfo'
import  Style from './Home.module.scss'
import Chart from '../../Chart/Chart';
 
 
import Widgetsm from '../../Widgetsm/Widgetsm';
import Widgetlg from '../../WidgetLG/Widgetlg';
import {   useEffect, useMemo, useState } from "react";
import axios from "axios";
export default function Home() {

 
     
    const [userStat, setuserStat] = useState([]);
    const month = useMemo(() => [
      "Jan",
      "Fab",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],[]);
    useEffect(() => {
      const fetchStat = async () => {
        const res = await axios.get("/user/stat", {
          headers: {
            token:
              "beare eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjIwZTBlNGNlODgyNjhjOTM2MjNiMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTkwMTk1MSwiZXhwIjoxNjMwMzMzOTUxfQ._ypz7IcPvp70EFKQJ4YFCji5lgde8A6jOfjOoGYImVs",
          },
        });
        
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        // res.data.map(item=>setuserStat((pre)=>[...pre,{name:month[item._id-1], totaluser:item.totalUserPerMonth}]))
        setuserStat(statsList.map(s=>[{name:month[s._id-1], totaluser:s.totalUserPerMonth}][0]));
      };
      fetchStat();
    }, [month]);
    return (
        
        <div className={Style.home}>
            <Featureinfo></Featureinfo>
            < Chart data={userStat} title="User Analytics" grid={true} datakey="totaluser"></Chart>
            <div className={Style.homeWidget}>
                 < Widgetsm></Widgetsm>
                 < Widgetlg></Widgetlg>
            </div>
        </div>
    )
}
