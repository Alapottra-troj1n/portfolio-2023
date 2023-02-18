import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="absolute list-none text-dark font-display px-6 pt-4 lg:text-3xl text-lg flex justify-center w-full">

            <div className="flex lg:gap-10 gap-5  flex-wrap" >
                
                <Link to='/' ><li className=" cursor-pointer hover:text-orange">Home</li></Link>
                <Link to='/journal' ><li className=" cursor-pointer hover:text-orange">Journal</li></Link>
                <li className=" cursor-pointer hover:text-orange"> <a href="mailto:alapottratrojon@gmail.com">Conact</a></li>
               
            </div>

        </header>
    );
};

export default Navbar;