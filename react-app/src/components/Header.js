import React from 'react';

const Header = () => {
    return (
        <header className="flex h-20 justify-between items-end border-b-2 mr-5 ml-5 pb-2">
            <p className="text-white text-3xl uppercase">Ghibli Movie</p>
            <p className="text-gray-400">All info about Ghibli movie in here!</p>
        </header>
    );
};

export default Header;