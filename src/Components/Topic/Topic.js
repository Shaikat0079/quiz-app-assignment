import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic
    return (
        <div className='bg-red-500 w-96 p-4'>
            <img src={logo} alt="" />
            <div className='flex justify-between items-center m-4'>
                <p className='text-white mx-2'>{name}</p>
                <p className='text-white font-bold'>Q-Num:{total}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    <Link to={`/quiz/${id}`}>Start Practice</Link>
                </button>
            </div>
        </div>
    );
};

export default Topic;