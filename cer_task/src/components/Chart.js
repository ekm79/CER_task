import React from "react";
import {Card, CardBody} from 'reactstrap'
import {vessels, allData} from '../data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = (props) => {
    return (
        <Card>
            <CardBody>
                <LineChart width={500} height={300} data={allData.TEMP}>
                   <CartesianGrid strokeDasharray="3 3" />
                   <XAxis dataKey={"name"} type="category" allowDuplicatedCategory={false} />
                   <YAxis domain={['dataMin', 'auto']}/>
                   <Tooltip />
                   <Legend />
                   {vessels.map((s) => 
                       {return props.state[s.id] ?
                     <Line dataKey={s.name} type="monotone" data={allData.TEMP} name={s.name} key={s.name} stroke={s.color} />:null}
                   )}
                </LineChart>
            </CardBody>
        </Card>
    );
}
export default Chart;