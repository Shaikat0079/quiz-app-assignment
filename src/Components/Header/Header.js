import React from 'react';

const Header = () => {
    return (
        <div>
            <header className='flex flex-col'>
                <img className='mx-32' src="https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png" alt="" />
                <h1 className='text-6xl text-red-500 text-center m-12'>The Ultimate Weapons!</h1>
            </header>
        </div>
    );
};

export default Header;