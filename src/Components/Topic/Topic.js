import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo } = topic
    return (
        <div className='border-2 bg-red-500'>
            <img src={logo} alt="" srcset="" />
            <p>{name}</p>
        </div>
    );
};

export default Topic;