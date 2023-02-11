import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="absolute list-none text-dark font-display px-6 pt-4 lg:text-3xl text-lg flex justify-center w-full">

            <div className="flex lg:gap-10 gap-5  flex-wrap" >
                
                <Link to='/' ><li className=" cursor-pointer hover:text-orange">Home</li></Link>
                <a href="#about"><li className=" cursor-pointer hover:text-orange">About</li></a>
                <li className=" cursor-pointer hover:text-orange">Projects</li>
                <li className=" cursor-pointer hover:text-orange">Blog</li>
                <li className=" cursor-pointer hover:text-orange">Contact</li>

            </div>

        </header>
    );
};

export default Navbar;