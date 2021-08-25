import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import Style from './Featureinfo.module.scss'


export default function Featureinfo() {
    return (
        <div className={Style.featureinfo}>
            <div className={Style.card}>

                <h3>Revanue</h3>
                <div className={Style.middle}>
                    <h1>$2.45</h1>
                    <span>+2.3 <ArrowUpward className={`${Style.icon} ${Style.positive}`}></ArrowUpward> </span>
            
                </div>
                <span>Compared to last month</span>

            </div>
            <div className={Style.card}>

                <h3>Sales</h3>
                <div className={Style.middle}>
                    <h1>$10030.45</h1>
                    <span>+5.2 <ArrowUpward className={`${Style.icon} ${Style.positive}`}></ArrowUpward> </span>
            
                </div>
                <span>Compared to last month</span>

            </div>
            <div className={Style.card}>

                <h3>Cost</h3>
                <div className={Style.middle}>
                    <h1>$2223.45</h1>
                    <span>-2.3 <ArrowDownward className={Style.icon}></ArrowDownward> </span>
            
                </div>
                <span>Compared to last month</span>

            </div>
            
            
        </div>
    )
}
