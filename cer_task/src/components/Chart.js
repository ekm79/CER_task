import React from "react";
import {Card, CardBody} from 'reactstrap'
import {vessels, allData} from '../data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const temps = [
    {
      name: '1/1/22',
      data: [
      {vessel: "Vessel_1", value: 68},
      {vessel: "Vessel 2", value: 69},
      {vessel: "Vessel 3", value: 70}
      ]
    },
    {
      name: '1/2/22',
      data: [
        {vessel: "Vessel 1", value: 63},
        {vessel: "Vessel 2", value: 64},
        {vessel: "Vessel 3", value: 60}
      ]
    },
    {
      name: '1/3/22',
      data: [
        {vessel: "Vessel 1", value: 59},
        {vessel: "Vessel 2", value: 61},
        {vessel: "Vessel 3", value: 55}
    ]
    },
    {
      name: '1/4/22',
      data: [
        {vessel: "Vessel 1", value: 60},
        {vessel: "Vessel 2", value: 67},
        {vessel: "Vessel 3", value: 69}
      ]
    },
    {
      name: '1/5/22',
      data: [
        {vessel: "Vessel 1", value: 66},
        {vessel: "Vessel 2", value: 58},
        {vessel: "Vessel 3", value: 63}
      ]
      
    },
    {
      name: '1/6/22',
      data: [
        {vessel: "Vessel 1", value: 71},
        {vessel: "Vessel 2", value: 75},
        {vessel: "Vessel 3", value: 73}
      ]
      
    },
    {
      name: '1/7/22',
      data: [
        {vessel: "Vessel 1", value: 69},
        {vessel: "Vessel 2", value: 72},
        {vessel: "Vessel 3", value: 69}
      ]
    }
  ]

const Chart = () => {
    return (
        <Card>
            <CardBody>
                <LineChart width={500} height={300} data={allData.TEMP}>
                   <CartesianGrid strokeDasharray="3 3" />
                   <XAxis dataKey={"name"} type="category" allowDuplicatedCategory={false} />
                   <YAxis domain={['dataMin', 'auto']}/>
                   <Tooltip />
                   <Legend />
                   {vessels.map((s) => (
                     <Line dataKey={s.name} type="monotone" data={allData.TEMP} name={s.name} key={s.name} stroke={s.color}/>
                   ))}
                </LineChart>
            </CardBody>
        </Card>
    );
}
export default Chart;