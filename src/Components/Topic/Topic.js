import React from 'react';

const Topic = ({ topic }) => {
    const { name, logo, total } = topic
    return (
        <div className='bg-red-500 w-96 p-4'>
            <img src={logo} alt="" srcset="" />
            <div className='flex justify-between items-center m-4 px-6'>
                <p className='text-white'>{name}</p>
                <p className='text-white font-bold'>Q-No:{total}</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Button
                </button>
            </div>
        </div>
    );
};

export default Topic;