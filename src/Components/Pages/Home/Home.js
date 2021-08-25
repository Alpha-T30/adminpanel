import Featureinfo from '../../Featureinfo/Featureinfo'
import  Style from './Home.module.scss'
import Chart from '../../Chart/Chart';
 
 
import Widgetsm from '../../Widgetsm/Widgetsm';
import Widgetlg from '../../WidgetLG/Widgetlg';
import { userData } from '../../../dammydata';
export default function Home() {
     
    
    return (
        
        <div className={Style.home}>
            <Featureinfo></Featureinfo>
            < Chart data={userData} title="User Analytics" grid={true} datakey="Active User"></Chart>
            <div className={Style.homeWidget}>
                 < Widgetsm></Widgetsm>
                 < Widgetlg></Widgetlg>
            </div>
        </div>
    )
}
