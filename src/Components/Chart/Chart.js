import  Style from './Chart.module.scss'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts"; 

export default function Chart({title,data,datakey,grid}) {
   
      
    return (
        <div className={Style.chart}>
            <h2>{title}</h2>
            <ResponsiveContainer width="100%"  aspect={4/1} >
            <LineChart data={data}>

        {  grid &&  <CartesianGrid strokeDasharray="5 5" />}
          <XAxis stroke="crimson" dataKey="name" />
          
          <Tooltip />
           
          <Line type="monotone" dataKey={datakey} stroke="#8884d8"  />
            
            </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
