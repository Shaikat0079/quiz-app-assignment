import React from 'react';
import { useLoaderData } from 'react-router-dom';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const Statistics = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data;
    return (
        <div>
            <h1 className='text-6xl text-center'>Total Questions</h1>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}>
                <LineChart width={280} height={260} data={topics}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;