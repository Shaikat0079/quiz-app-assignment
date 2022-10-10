import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data;
    return (
        <div>
            <Header></Header>
            {topics.length}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                {
                    topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;