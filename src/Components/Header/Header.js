import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between items-center'>
                <div>
                    <h2 className=' text-4xl text-rose-500'>JS Quiz App</h2>
                </div>
                <div className='flex gap-6'>
                    <nav className='text-2xl text-rose-600'><Link to='/topics'>Topics</Link></nav>
                    <nav className='text-2xl text-rose-600'><Link to='/statistics'>Statics</Link></nav>
                    <nav className='text-2xl text-rose-600'><Link to='/blog'>Blog</Link></nav>
                </div>
            </nav>
        </div>
    );
};

export default Header;