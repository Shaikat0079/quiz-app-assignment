import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between items-center'>
                <div>
                    <h2 className=' text-4xl text-rose-500'>JS Quiz App</h2>
                </div>
                <div className='flex gap-6'>
                    <nav className='text-2xl text-rose-600'>Topics</nav>
                    <nav className='text-2xl text-rose-600'>Statics</nav>
                    <nav className='text-2xl text-rose-600'>Blog</nav>
                </div>
            </nav>
        </div>
    );
};

export default Header;