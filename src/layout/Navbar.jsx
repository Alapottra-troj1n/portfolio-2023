import React from 'react';

const Navbar = () => {
    return (
        <header className="absolute list-none text-dark font-display px-6 pt-4 text-3xl flex justify-center w-full">

            <div className="flex gap-10" >
                <li className="cursor-pointer hover:text-orange">Home</li>
                <li className="cursor-pointer hover:text-orange">About</li>
                <li className="cursor-pointer hover:text-orange">Projects</li>
                <li className="cursor-pointer hover:text-orange">Blog</li>
                <li className="cursor-pointer hover:text-orange">Contact</li>

            </div>

        </header>
    );
};

export default Navbar;